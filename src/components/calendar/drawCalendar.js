import React from 'react'
import { useState } from 'react'
import './Calendar.css'

function DrawCalendar() {
  var today = new Date()
  var selectMonth = today.getMonth()
  var selectYear = today.getFullYear()
  const [year, setYear] = useState(selectYear)
  const [month, setMonth] = useState(selectMonth)
  const LABEL_DATE = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  var calendar = []
  var allDays = []
  var daysInLastMonth = [];
  var daysInNextMonth = [];
  var firstDay = (new Date(year, month)).getDay()


  if (month == 0) {
    daysInLastMonth = getDaysInMonth(11, year - 1)
  } else {
    daysInLastMonth = getDaysInMonth(month - 1, year)
  }
  if (month == 11) {
    daysInNextMonth = getDaysInMonth(0, year + 1)
  } else {
    daysInNextMonth = getDaysInMonth(month + 1, year)
  }

  const premonth = () => {
    if (month === 0) {
      setMonth(11)
      setYear(year - 1)
      firstDay = (new Date(year, month - 1)).getDay()

    } else {
      setMonth(month - 1)
      setYear(year)
      firstDay = (new Date(year, month - 1)).getDay()
    }
  }

  const nextmonth = (firstDay) => {
    if (month === 11) {
      setMonth(0)
      setYear(year + 1)
      console.log('f', firstDay);
    }
    else {
      setMonth(month + 1)
      setYear(year)
      firstDay = (new Date(year, month + 1)).getDay()
    }

  }
  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  switch (firstDay) {
    case 6:
      allDays = daysInLastMonth.splice(daysInLastMonth.length - 6, daysInLastMonth.length).concat(getDaysInMonth(month, year));
      break;
    case 5:
      allDays = daysInLastMonth.splice(daysInLastMonth.length - 5, daysInLastMonth.length).concat(getDaysInMonth(month, year));
      break;
    case 4:
      allDays = daysInLastMonth.splice(daysInLastMonth.length - 4, daysInLastMonth.length).concat(getDaysInMonth(month, year));
      break;
    case 3:
      allDays = daysInLastMonth.splice(daysInLastMonth.length - 3, daysInLastMonth.length).concat(getDaysInMonth(month, year));
      break;
    case 2:
      allDays = daysInLastMonth.splice(daysInLastMonth.length - 2, daysInLastMonth.length).concat(getDaysInMonth(month, year));
      break;
    case 1:
      allDays = daysInLastMonth.splice(daysInLastMonth.length - 1, daysInLastMonth.length).concat(getDaysInMonth(month, year));
      break;
    case 0:
      allDays = getDaysInMonth(month, year);
      break;
  }
  switch (allDays.length) {
    case 28:
      calendar = allDays.concat(daysInNextMonth.splice(0, 14))
      break;
    case 29:
      calendar = allDays.concat(daysInNextMonth.splice(0, 13))
      break;
    case 30:
      calendar = allDays.concat(daysInNextMonth.splice(0, 12))
      break;
    case 31:
      calendar = allDays.concat(daysInNextMonth.splice(0, 11))
      break;
    case 32:
      calendar = allDays.concat(daysInNextMonth.splice(0, 10))
      break;
    case 33:
      calendar = allDays.concat(daysInNextMonth.splice(0, 9))
      break;
    case 34:
      calendar = allDays.concat(daysInNextMonth.splice(0, 8))
      break;
    case 35:
      calendar = allDays.concat(daysInNextMonth.splice(0, 7))
      break;
    case 36:
      calendar = allDays.concat(daysInNextMonth.splice(0, 6))
      break;
    case 37:
      calendar = allDays.concat(daysInNextMonth.splice(0, 5))
      break;
    case 38:
      calendar = allDays.concat(daysInNextMonth.splice(0, 4))
      break;
    case 39:
      calendar = allDays.concat(daysInNextMonth.splice(0, 3))
      break;
    case 40:
      calendar = allDays.concat(daysInNextMonth.splice(0, 2))
      break;
    case 41:
      calendar = allDays.concat(daysInNextMonth.splice(0, 1))
      break;
    case 42:
      calendar = allDays
      break;
  }

  return (
    <div className='container'>
      <div className='Header'>
        <button className='prev' onClick={premonth}>&lt;</button>
        <span className='span'>Tháng {month + 1} {year}</span>
        <button className='next' onClick={nextmonth}>	&gt;</button>
        <div className='grid-container'>
          {
            LABEL_DATE.map((head, stt) => (
              <div className='grid-item' key={head}> {LABEL_DATE[stt]}</div>
            ))
          }
        </div>
        <div className='grid-container'>
          {
            calendar.map(function (val) {
              if (val.getMonth() != month) {
                return (
                  <div className='grid-item otherMonth' key={val.index} >{val.getDate()}</div>
                );
              }
              return (
                <div className='grid-item' key={val.index} >{val.getDate()}</div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default DrawCalendar