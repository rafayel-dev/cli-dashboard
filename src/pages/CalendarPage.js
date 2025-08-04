import React, { useState, useContext } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const { theme } = useContext(ThemeContext);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="p-2"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const today = new Date();
    const isToday = today.getDate() === i && today.getMonth() === month && today.getFullYear() === year;
    const isSelected = selectedDate && selectedDate.getDate() === i && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
    calendarDays.push(
      <div 
        key={i} 
        className={`p-2 border rounded-md cursor-pointer ${isSelected ? 'bg-highlight text-white' : isToday ? 'border-2 border-blue-500' : 'hover:bg-accent text-text-primary'}`}
        onClick={() => handleDateClick(new Date(year, month, i))}
      >
        {i}
      </div>
    );
  }

  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <h2 className="text-2xl font-bold mb-4 text-text-primary">Calendar</h2>
      <div className="bg-secondary p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-accent text-text-primary"><FaChevronLeft /></button>
          <h3 className="text-xl font-semibold text-text-primary">{months[month]} {year}</h3>
          <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-accent text-text-primary"><FaChevronRight /></button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center font-bold text-text-secondary mb-4">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {calendarDays}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
