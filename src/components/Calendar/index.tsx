'use client';

import './toastui-calendar.min.css';
import './tui-date-picker.min.css';
import './tui-time-picker.min.css';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { dataBase } from '@/db/firebase';
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import { Bounce, toast } from 'react-toastify';
import dynamic from 'next/dynamic';

interface EventData {
  id?: string;
  calendarId: string;
  title: string;
  isAllday: boolean;
  start: Timestamp;
  end: Timestamp;
  category: string;
  location?: string;
  state?: string;
  isPrivate?: boolean;
}

interface DeleteEventProps {
  id: string;
  calendarId: string;
}

const Calendar = dynamic<any>(() => import('@toast-ui/react-calendar'), {
  ssr: false,
});

function ScheduleCalendar() {
  const calendarRef = useRef<any>(null);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(dataBase, 'schedules'));
      const eventsData = querySnapshot.docs.map((document) => ({
        ...document.data(),
        id: document.id,
        start: new Date(),
        end: new Date(),
      }));
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  const calendars = useMemo(
    () => [
      {
        id: 'red',
        name: 'RED',
        color: '#ffffff',
        backgroundColor: '#ff4040',
        borderColor: 'transparent',
      },
      {
        id: 'yellow',
        name: 'YELLOW',
        color: '#ffffff',
        backgroundColor: '#FACC15',
        borderColor: 'transparent',
      },
      {
        id: 'blue',
        name: 'BLUE',
        color: '#ffffff',
        backgroundColor: '#00a9ff',
        borderColor: 'transparent',
      },
      {
        id: 'green',
        name: 'GREEN',
        color: '#ffffff',
        backgroundColor: '#03bd9e',
        borderColor: 'transparent',
      },
      {
        id: 'violet',
        name: 'VIOLET',
        color: '#ffffff',
        backgroundColor: '#9e5fff',
        borderColor: 'transparent',
      },
    ],
    [],
  );

  const getCalInstance = useCallback(
    () => calendarRef.current?.getInstance?.(),
    [],
  );

  const showErrorToast = (message: string) => {
    toast.error(message, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };

  const onBeforeCreateEvent = async (eventData: EventData) => {
    const event = {
      calendarId: eventData.calendarId,
      title: eventData.title,
      isAllday: eventData.isAllday,
      start: eventData.start.toDate(),
      end: eventData.end.toDate(),
      category: eventData.isAllday ? 'allday' : 'time',
      location: eventData.location,
      state: eventData.state,
      isPrivate: eventData.isPrivate,
    };

    try {
      const addEvent = await addDoc(collection(dataBase, 'schedules'), event);
      const newEvent = {
        ...event,
        id: addEvent.id,
      };
      getCalInstance().createEvents([newEvent]);
    } catch (error) {
      if (error instanceof FirebaseError) {
        showErrorToast('파이어베이스 오류가 발생했습니다!');
      } else {
        showErrorToast('오류가 발생 했습니다!');
      }
    }
  };

  const onBeforeDeleteEvent = async (deletsEventProps: DeleteEventProps) => {
    const { id, calendarId } = deletsEventProps;
    try {
      const deleteEvent = doc(dataBase, 'schedules', id);
      await deleteDoc(deleteEvent);
      getCalInstance().deleteEvent(id, calendarId);
    } catch (error) {
      if (error instanceof FirebaseError) {
        showErrorToast('파이어베이스 오류가 발생했습니다!');
      } else {
        showErrorToast('오류가 발생 했습니다!');
      }
    }
  };

  const onBeforeUpdateEvent = async (updateData: any) => {
    const targetEvent = updateData.event;
    const changes = { ...updateData.changes };

    if (changes.start) changes.start = new Date(changes.start);
    if (changes.end) changes.end = new Date(changes.end);

    try {
      const updateEventDoc = doc(dataBase, 'schedules', targetEvent.id);
      await updateDoc(updateEventDoc, changes);
      getCalInstance().updateEvent(targetEvent.id, targetEvent.calendarId, {
        ...changes,
        start: changes.start ? new Date(changes.start) : targetEvent.start,
        end: changes.end ? new Date(changes.end) : targetEvent.end,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        showErrorToast('파이어베이스 오류가 발생했습니다!');
      } else {
        showErrorToast('오류가 발생 했습니다!');
      }
    }
  };

  return (
    <Calendar
      ref={calendarRef}
      height="600px"
      view="month"
      useFormPopup
      useDetailPopup
      usageStatistics={false}
      month={{
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        isAlways6Weeks: false,
      }}
      gridSelection={{
        enableDblClick: true,
        enableClick: false,
      }}
      theme={{
        common: {
          border: '1px solid #DDD6FE',
          today: {
            color: '#FFF',
          },
        },
        month: {
          dayName: {
            borderLeft: '1px solid #e5e5e5',
            backgroundColor: '#DDD6FE',
          },
          moreView: {
            height: 300,
          },
          weekend: {
            backgroundColor: '#FEF2F2',
          },
          gridCell: {
            headerHeight: 35,
          },
        },
      }}
      template={{
        monthMoreClose() {
          return '<div style="font-size: 1rem; margin-top: 0.25rem">X</div>';
        },
        monthGridHeaderExceed(hiddenEvents: number) {
          return `<span>${hiddenEvents} +</span>`;
        },
        monthDayName(model: any) {
          return `<div style="font-size: 1rem; font-weight: bold; text-align: center">${model.label}</div>`;
        },
      }}
      calendars={calendars}
      events={events}
      onBeforeCreateEvent={onBeforeCreateEvent}
      onBeforeDeleteEvent={onBeforeDeleteEvent}
      onBeforeUpdateEvent={onBeforeUpdateEvent}
    />
  );
}

export default ScheduleCalendar;
