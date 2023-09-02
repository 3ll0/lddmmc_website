import React, { useEffect } from 'react'

function Calendar() {
  // MMDDYYYY format
  const events = {
    8312023: [
      {
        key: 0,
        name: "Dai Hoi"
      },
      {
        key: 1,
        name: "Dai Hoi"
      },
      {
        key: 2,
        name: "Dai Hoi"
      },
      {
        key: 3,
        name: "Dai Hoi"
      }
    ],
    9072023: [
      {
        key: 0,
        name: "Dai Hoi"
      },
      {
        key: 1,
        name: "Dai Hoi"
      },
      {
        key: 2,
        name: "Dai Hoi"
      },
      {
        key: 3,
        name: "Dai Hoi"
      }
    ],
    10012023: [
      {
        key: 0,
        name: "Dai Hoi"
      },
      {
        key: 1,
        name: "Dai Hoi"
      },
      {
        key: 2,
        name: "Dai Hoi"
      },
      {
        key: 3,
        name: "Dai Hoi"
      }
    ]
  }
  function getEventKey(day, month, year) {
    return month * 1000000 + day * 10000 + year
  }

  const [calendarDays, setCalendarDays] = React.useState([])
  const [date, setDate] = React.useState(new Date())
  const [currYear, setCurrYear] = React.useState(date.getFullYear())
  const [currMonth, setCurrMonth] = React.useState(date.getMonth())
  const [selectedDate, setSelectedDate] = React.useState(getEventKey(date.getDate(), currMonth+1, currYear))
  const [selectedEvents, setSelectedEvents] = React.useState([])

  // storing full name of all months in array
  const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"]

  // update calender
  useEffect(() => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay() // getting first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate() // getting last date of month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay() // getting last day of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate() // getting last date of previous month
    let keyCounter = 0

    let newCalender = []

    // creating li of previous month last days
    for (let i = firstDayofMonth; i > 0; i--) {
      let eventCode = getEventKey(lastDateofLastMonth-i+1, currMonth, currYear)
      newCalender.push({
        key: keyCounter,
        className: "calendar-day calendar-day-inactive", 
        dayNumber: lastDateofLastMonth - i + 1,
        eventDots: eventCode in events ? ".".repeat(events[eventCode].length): "",
        eventCode: eventCode})
      keyCounter++
    }
    
    // creating li of all days of current month
    for (let i = 1; i <= lastDateofMonth; i++) {
      // adding active class to li if the current day, month, and year matched
      let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                  && currYear === new Date().getFullYear() ? 
                  "calendar-day calendar-day-current" : "calendar-day";

      let eventCode = getEventKey(i, currMonth+1, currYear)
      newCalender.push({
        key: keyCounter,
        className: isToday,
        dayNumber: i,
        eventDots: eventCode in events ? ".".repeat(events[eventCode].length): "",
        eventCode: eventCode})
      keyCounter++
    }

    // creating li of next month first days
    let trailingDays = 6
    if (newCalender.length <= 35) {
      trailingDays = 13
    }
    for (let i = lastDayofMonth; i < trailingDays; i++) { 
      let eventCode = getEventKey(i-lastDayofMonth+1, currMonth+2, currYear)
      newCalender.push({
        key: keyCounter,
        className: "calendar-day calendar-day-inactive", 
        dayNumber: i - lastDayofMonth + 1,
        eventDots: eventCode in events ? ".".repeat(events[eventCode].length): "",
        eventCode: eventCode})
      keyCounter++
    }

    setCalendarDays(newCalender)
  }, [currMonth, currYear])

  function changeNextMonth() {
    let newMonth = currMonth+1
    if(newMonth > 11) {
      setCurrYear(currYear+1)
      setCurrMonth(0)
    } else {
      setCurrMonth(newMonth)
    }
  }

  function changePrevMonth() {
    let newMonth = currMonth-1
    if(newMonth < 0) {
      setCurrYear(currYear-1)
      setCurrMonth(11)
    } else {
      setCurrMonth(newMonth)
    }
  }

  useEffect(() => {
    if (selectedDate in events) {
      setSelectedEvents(events[selectedDate])
    }
    else {
      setSelectedEvents([])
    }
  }, [selectedDate])

  return (
    <div className='calendar'>
      <div className='calendar-day-view' id="myList">
        <div className='calendar-selected-date'>
          {selectedDate}
        </div>
        <div className='calendar-events'>
          {selectedEvents.map((event) => (
            <div className='calendar-event' key={event.key}>
              {event.name}
            </div>
          ))}
        </div>
      </div>
      <div className='calendar-month-view'>
        <div className='calendar-rows'>
          <div className='calendar-header'>
            <div className='calendar-header-month-year'>
              <div className='calendar-header-month'>
                {months[currMonth]}
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
            {calendarDays.map((calenderDay) => (
              <div className={calenderDay.className} key={calenderDay.key} onClick={() => {setSelectedDate(calenderDay.eventCode)}}>
                {calenderDay.dayNumber}
                <div className='calendar-events-dots'>
                  {calenderDay.eventDots}
                </div>
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
      {/* <div className='events-content'>
        <div className='events-image-container'>
          <img className='events-image' src='/events/events.jpg' />
        </div>
        <div className='events-spacer' />
        {events.length > 0 ? (
          <div className='events-list'>
            {eventElements}
          </div>
        ) : <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      </div> */}
      <Calendar />
    </div>
  )
}