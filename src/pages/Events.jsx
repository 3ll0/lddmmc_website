import React from 'react'

function Calendar() {
  const [calendarDays, setCalendarDays] = React.useState([])
  const [date, setDate] = React.useState(new Date())
  const [currYear, setCurrYear] = React.useState(date.getFullYear())
  const [currMonth, setCurrMonth] = React.useState(date.getMonth())
  
  // storing full name of all months in array
  const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"]
  
  
  const updateCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay() // getting first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate() // getting last date of month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay() // getting last day of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate() // getting last date of previous month
    let keyCounter = 0

    let newCalender = []

    // creating li of previous month last days
    for (let i = firstDayofMonth; i > 0; i--) {
      newCalender.push({
        key: keyCounter,
        className: "calendar-day calendar-day-inactive", 
        dayNumber: lastDateofLastMonth - i + 1})
        keyCounter++
    }
    
    // creating li of all days of current month
    for (let i = 1; i <= lastDateofMonth; i++) {
      // adding active class to li if the current day, month, and year matched
      let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                  && currYear === new Date().getFullYear() ? 
                  "calendar-day calendar-day-current" : "calendar-day";
      newCalender.push({
        key: keyCounter,
        className: isToday,
        dayNumber: i})
        keyCounter++
    }

    // creating li of next month first days
    for (let i = lastDayofMonth; i < 6; i++) { 
      newCalender.push({
        key: keyCounter,
        className: "calendar-day calendar-day-inactive", 
        dayNumber: i - lastDayofMonth + 1})
        keyCounter++
    }

    console.log(newCalender)
    setCalendarDays(newCalender)
  }

  window.onload = function() {
    updateCalendar()
  }

  function changeNextMonth() {
    console.log(currMonth)
    let newMonth = currMonth+1
    setCurrMonth(newMonth)
    console.log(newMonth)
    console.log(currMonth)
    if(currMonth > 11) {
      setDate(new Date(currYear, currMonth, new Date().getDate()))
      setCurrYear(date.getFullYear())
      setCurrMonth(date.getMonth())
    } else {
      setDate(new Date())
    }
    updateCalendar()
  }

  function changePrevMonth() {
    setCurrMonth(currMonth-1)
    if(currMonth < 0) {
      setDate(new Date(currYear, currMonth, new Date().getDate()))
      setCurrYear(date.getFullYear())
      setCurrMonth(date.getMonth())
    } else {
      setDate(new Date())
    }
    updateCalendar()
  }

  // prevNextIcon.forEach(icon => { // getting prev and next icons
  //     icon.addEventListener("click", () => { // adding click event on both icons
  //         // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
  //         currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1

  //         if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
  //             // creating a new date of current year & month and pass it as date value
  //             date = new Date(currYear, currMonth, new Date().getDate())
  //             currYear = date.getFullYear() // updating current year with new date year
  //             currMonth = date.getMonth() // updating current month with new date month
  //         } else {
  //             date = new Date() // pass the current date as date value
  //         }
  //         renderCalendar() // calling renderCalendar function
  //     })
  // })
  return (
    <div className='calendar'>
      <div className='calendar-day-view' id="myList">
      </div>
      <div className='calendar-month-view'>
        <div className='calendar-rows'>
          <div className='calendar-header'>
            <div className='calendar-header-month-year'>
              <div className='calendar-header-month'>
                {currMonth}{months[currMonth]}
              </div>
              <div className='calendar-header-year'>
                {currYear}
              </div>
            </div>
            <div className='calendar-header-buttons'>
              <div className='calender-next-month' onClick={changeNextMonth}>
                ˅
              </div>
              <div className='calender-prev-month' onClick={changePrevMonth}>
                ˄
              </div>
            </div>
          </div>
          <div className='calendar-row'>
            <div className='calendar-day'>
              Su
            </div>
            <div className='calendar-day'>
              Mo
            </div>
            <div className='calendar-day'>
              Tu
            </div>
            <div className='calendar-day'>
              We
            </div>
            <div className='calendar-day'>
              Th
            </div>
            <div className='calendar-day'>
              Fr
            </div>
            <div className='calendar-day'>
              Sa
            </div>
          </div>
          <div className='calendar-days'>
            {calendarDays.map(({ key, className, dayNumber }) => (
              <div className={className} key={key}>
                {dayNumber}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Events() {
  const events = [
    {
      id: 0,
      name: "DHLD", 
      location: "St. Matthias Catholic Church", 
      description: "EPHESIANS 2:10",
      dateNumber: "30",
      dateMonth: "September",
    },
    {
      id: 1,
      name: "DHLD", 
      location: "St. Matthias Catholic Church",
      description: "EPHESIANS 2:10",
      dateNumber: "1",
      dateMonth: "October",
    }
  ]

  const eventElements = events.map(event => (
    <div key={event.id} className='event-element'>
      <div className='event-content'>
        <div className='event-date'>
          <div className='event-date-number'>
            {event.dateNumber}
          </div>
          <div className='event-date-month'>
            {event.dateMonth}
          </div>
        </div>
        <div className='event-info'>
          <div className='event-info-name'>
            {event.name}
          </div>
          <div className='event-spacer' />
          <div className='event-info-location-container'>
            <svg className='event-info-location-icon'viewBox="0 0 395.71 395.71"><g><path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                  c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                  C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                  c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/></g></svg>
            <div className='event-info-location'>
              {event.location}
            </div>
          </div>
          <div className='event-info-description'>
            {event.description}
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <div className='events'>
      <div className='events-title'>
        EVENTS
      </div>
      <div className='events-content'>
        <div className='events-image-container'>
          <img className='events-image' src='/events/events.jpg' />
        </div>
        <div className='events-spacer' />
        {events.length > 0 ? (
          <div className='events-list'>
            {eventElements}
          </div>
        ) : <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      </div>
      {/* <Calendar /> */}
    </div>
  )
}