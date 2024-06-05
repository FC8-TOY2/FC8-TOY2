'use client';

import Calendar from '@toast-ui/react-calendar';
import './toastui-calendar.min.css';
import './tui-date-picker.min.css';
import './tui-time-picker.min.css';

import React, { useCallback, useMemo, useRef } from 'react';

function ScheduleCalendar() {
  const calendarRef = useRef<typeof Calendar>(null);
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
  const initialEvents = [
    {
      id: '1',
      calendarId: 'red',
      title: 'Lunch',
      category: 'time',
      start: '2024-06-28T12:00:00',
      end: '2024-06-28T13:30:00',
    },
    {
      id: '2',
      calendarId: 'blue',
      title: 'Coffee Break',
      category: 'time',
      start: '2024-06-10T15:00:00',
      end: '2024-06-28T15:30:00',
    },
  ];

  const getCalInstance = useCallback(
    () => calendarRef.current?.getInstance?.(),
    [],
  );

  const onBeforeCreateEvent = (eventData) => {
    const event = {
      calendarId: eventData.calendarId,
      id: String(Math.random()),
      title: eventData.title,
      isAllday: eventData.isAllday,
      start: eventData.start,
      end: eventData.end,
      category: eventData.isAllday ? 'allday' : 'time',
      location: eventData.location,
      state: eventData.state,
      isPrivate: eventData.isPrivate,
      attendees: ['나'],
    };

    getCalInstance().createEvents([event]);
  };

  const onBeforeDeleteEvent = (eventData) => {
    const { id, calendarId } = eventData;

    getCalInstance().deleteEvent(id, calendarId);
  };

  // const onBeforeUpdateEvent: ExternalEventTypes['beforeUpdateEvent'] = (
  const onBeforeUpdateEvent = (updateData) => {
    const targetEvent = updateData.event;
    const changes = { ...updateData.changes };

    getCalInstance().updateEvent(
      targetEvent.id,
      targetEvent.calendarId,
      changes,
    );
  };

  return (
    <Calendar
      ref={calendarRef}
      height="600px"
      view="month"
      useFormPopup
      useDetailPopup
      usageStatistics={false}
      // eventFilter={(event) => event.isVisible}
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
        monthGridHeaderExceed(hiddenEvents) {
          return `<span>${hiddenEvents} +</span>`;
        },
        monthDayName(model) {
          return `<div style="font-size: 1rem; font-weight: bold; text-align: center">${model.label}</div>`;
        },
      }}
      calendars={calendars}
      events={initialEvents}
      onBeforeCreateEvent={onBeforeCreateEvent}
      onBeforeDeleteEvent={onBeforeDeleteEvent}
      onBeforeUpdateEvent={onBeforeUpdateEvent}
    />
  );
}

export default ScheduleCalendar;
