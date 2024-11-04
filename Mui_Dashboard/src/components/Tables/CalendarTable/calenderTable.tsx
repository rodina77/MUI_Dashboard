import React, { useState } from 'react';
import { Calendar, Badge } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const EventCalendar = () => {
  const [events, setEvents] = useState([
    { date: new Date(2024, 10, 1), title: 'Event 1' },
    { date: new Date(2024, 10, 5), title: 'Event 2' },
    { date: new Date(2024, 10, 7), title: 'Event 3' },
    { date: new Date(2024, 9, 1), title: 'Event 1' },
    { date: new Date(2024, 9, 2), title: 'Event 2' },
    { date: new Date(2024, 9, 6), title: 'Event 3' },
    { date: new Date(2024, 9, 16), title: 'Event 3' },
    { date: new Date(2024, 9, 18), title: 'Event 3' },
  ]);

  const renderEvent = (date) => {
    const eventOnDate = events.find(event => event.date.toDateString() === date.toDateString());
    return eventOnDate ? (
      <Badge content={eventOnDate.title} style={{ backgroundColor: '#2196f3', color: 'white' , width:'100%'}} />
    ) : null;
  };

  const renderCell = (date) => {
    return (
      <div className="custom-calendar-cell">
        {renderEvent(date)}
      </div>
    );
  };

  return (
    <div style={{ border: '1px solid #ccc' }}> {/* Outer border for the whole calendar */}
      <Calendar
        renderCell={renderCell}
        style={{ margin: 'auto' }}
      />
    </div>
  );
};

export default EventCalendar;
