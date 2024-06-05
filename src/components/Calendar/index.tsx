'use client';

import Calendar from '@toast-ui/react-calendar';
import './toastui-calendar.min.css';

import React from 'react';

function ScheduleCalendar() {
  const calendars = [{ id: 'cal1', name: 'Personal' }];
  const initialEvents = [
    {
      id: '1',
      calendarId: 'cal1',
      title: 'Lunch',
      category: 'time',
      start: '2024-06-28T12:00:00',
      end: '2024-06-28T13:30:00',
      backgroundColor: 'red',
    },
    {
      id: '2',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2024-06-10T15:00:00',
      end: '2024-06-28T15:30:00',
      backgroundColor: 'red',
    },
    {
      id: '3',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2024-06-10T15:00:00',
      end: '2024-06-28T15:30:00',
    },
    {
      id: '4',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2024-06-10T15:00:00',
      end: '2024-06-28T15:30:00',
    },
    {
      id: '5',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2024-06-10T15:00:00',
      end: '2024-06-28T15:30:00',
    },
    {
      id: '6',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2024-06-10T15:00:00',
      end: '2024-06-28T15:30:00',
    },
    {
      id: '7',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2024-06-10T15:00:00',
      end: '2024-06-28T15:30:00',
    },
    {
      id: '8',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2024-06-10T15:00:00',
      end: '2024-06-28T15:30:00',
    },
    {
      id: '9',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2024-06-10T15:00:00',
      end: '2024-06-28T15:30:00',
    },
  ];

  const onAfterRenderEvent = (event) => {
    console.log(event.title);
  };

  return (
    <Calendar
      height="900px"
      view="month"
      useDetailPopup
      usageStatistics={false}
      // eventFilter={(event) => event.isVisible}
      month={{
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        isAlways6Weeks: false,
      }}
      gridSelection={{
        enableDblClick: false,
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
        },
      }}
      template={{
        milestone(event) {
          return `<span style="color: #fff; background-color: ${event.backgroundColor};">${event.title}</span>`;
        },
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
      onAfterRenderEvent={onAfterRenderEvent}
    />
  );
}

export default ScheduleCalendar;
