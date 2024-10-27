import React, { useEffect, useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  addDays,
  isSameDay,
  isSameMonth,
  parseISO,
  addMonths,
  subMonths,
} from 'date-fns';
import Title from '../Cards/Title';
import Breadcrumbs from '../Breadcrumbs/Breadcrumb';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const breadcrumbs = [
    { label: "Home", href: "/", isCurrent: false },
    { label: "Publications", href: "", isCurrent: false },
    { label: "School Calendar", href: "/publications/schoolcalendar", isCurrent: true },
  ];

  const API_KEY = "AIzaSyBTN8zxY67Ht3gbBBZ4-bSVHpFEVzBhjp4"; // Replace with your API Key
  const CALENDAR_ID = '4be505f11f76c987128ddc0cba94be0f8f54495c1c5771a51b442c3b011fd94a@group.calendar.google.com'; // Replace with your Calendar ID

  useEffect(() => {
    fetchEvents();
  }, [currentDate]);

  const fetchEvents = async () => {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
    );
    const data = await response.json();
    setEvents(data.items || []);
  };

  const generateCalendarDates = () => {
    const startMonth = startOfMonth(currentDate);
    const endMonth = endOfMonth(currentDate);
    const startDate = startOfWeek(startMonth);
    const endDate = endOfWeek(endMonth);
    const days = [];

    let day = startDate;
    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }
    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const renderCalendar = () => {
    const days = generateCalendarDates();
    return days.map((day) => {
      const eventOnDay = events.find(event => isSameDay(parseISO(event.start.dateTime || event.start.date), day));
      return (
        <div
          key={day}
          className={`p-2 md:p-4 text-center border rounded-lg ${
            isSameMonth(day, currentDate) ? 'bg-white' : 'bg-gray-100 text-gray-400'
          } ${eventOnDay ? 'bg-blue-100 border-blue-500' : ''}`}
        >
          <div className="text-xs md:text-sm font-semibold">{format(day, 'd')}</div>
          {eventOnDay && (
            <div className="mt-1 text-xs md:text-sm text-blue-600 font-medium">
              {eventOnDay.summary}
            </div>
          )}
        </div>
      );
    });
  };

  return (
  <div>
    <Breadcrumbs
        breadcrumbs={breadcrumbs}
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
      />
    <div className='p-4'><Title title="School Calendar" /></div>
    <div className="flex flex-col mb-10 sm:mb-2 lg:flex-row lg:space-x-8 p-4 md:p-8 max-w-7xl mx-auto min-h-screen">
      
      {/* Calendar Section */}
      <div className="bg-gray-50 w-full lg:w-2/3 rounded-lg shadow-lg p-4 md:p-8 mb-8 lg:mb-0">
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-600 mb-6 text-center">
          Event Calendar
        </h1>

        <div className="flex items-center justify-between mb-4 md:mb-8">
          <button
            onClick={goToPreviousMonth}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150"
          >
            Previous
          </button>

          <h2 className="text-lg md:text-2xl font-bold text-gray-800">
            {format(currentDate, 'MMMM yyyy')}
          </h2>

          <button
            onClick={goToNextMonth}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150"
          >
            Next
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 md:gap-4 text-center font-semibold text-gray-500 text-xs md:text-base mb-2 md:mb-6">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        
        <div className="grid grid-cols-7 gap-2 md:gap-4">{renderCalendar()}</div>
      </div>
      
      {/* Upcoming Events Section */}
      <div className="bg-gray-100 w-full lg:w-1/3 rounded-lg shadow-lg p-4 md:p-8">
        <h1 className="text-xl md:text-3xl font-extrabold text-blue-600 mb-4 md:mb-6 text-center">
          Upcoming Events
        </h1>

        <div className="grid gap-4 md:gap-6">
          {events
            .filter((event) => new Date(event.start.dateTime || event.start.date) >= new Date())
            .map((event) => (
              <div
                key={event.id}
                className="border border-gray-200 p-4 md:p-5 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
              >
                <h2 className="text-md md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">
                  {event.summary}
                </h2>

                <p className="text-xs md:text-sm text-gray-500 mb-2">
                  {new Date(event.start.dateTime || event.start.date).toLocaleString()}
                </p>

                <button className="text-blue-500 font-medium text-xs md:text-sm hover:text-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Calendar;











