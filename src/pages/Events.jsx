import React, { useEffect } from 'react'

function Calendar() {
  // MMDDYYYY format
  const events = {
    9302023: [
      {
        key: 0,
        name: "DHLD",
        location: "St. Matthias Catholic Church",
        address: "",
        time: "",
        description: ""
      }
    ],
    10012023: [
      {
        key: 0,
        name: "DHLD",
        location: "St. Matthias Catholic Church",
        address: "",
        time: "",
        description: ""
      }
    ],
    12072023: [
      {
        key: 0,
        name: "Tĩnh Tâm và Chầu",
        location: "Co-Cathedral of of the Sacred Heart",
        address: "1111 St Joseph Pkwy, Houston, TX 77002",
        time: "7:00 PM",
        description: "All Doan's are invited to come"
      }
    ],
    12242023: [
      {
        key: 0,
        name: "Thi Đua CTTT",
        location: "Our Lady of Lavang Parish",
        address: "12320 Old Foltin Rd, Houston, TX 77086",
        time: "",
        description: ""
      }
    ],
    1052024: [
      {
        key: 0,
        name: "Tĩnh Tâm HT",
        location: "",
        address: "",
        time: "",
        description: ""
      }
    ],
    1062024: [
      {
        key: 0,
        name: "Tĩnh Tâm HT",
        location: "",
        address: "",
        time: "",
        description: ""
      }
    ],
    1072024: [
      {
        key: 0,
        name: "Tĩnh Tâm HT",
        location: "",
        address: "",
        time: "",
        description: ""
      }
    ],
    8092024: [
      {
        key: 0,
        name: "Dai Hoi Ve Dat Hua 7",
        location: "",
        address: "",
        time: "",
        description: ""
      }
    ],
    8102024: [
      {
        key: 0,
        name: "Dai Hoi Ve Dat Hua 7",
        location: "",
        address: "",
        time: "",
        description: ""
      }
    ],
    8112024: [
      {
        key: 0,
        name: "Dai Hoi Ve Dat Hua 7",
        location: "",
        address: "",
        time: "",
        description: ""
      }
    ],
    8122024: [
      {
        key: 0,
        name: "Dai Hoi Ve Dat Hua 7",
        location: "",
        address: "",
        time: "",
        description: ""
      }
    ]
  }

  const [calendarDays, setCalendarDays] = React.useState([])
  const [currMonth, setCurrMonth] = React.useState(new Date().getMonth())
  const [currYear, setCurrYear] = React.useState(new Date().getFullYear())
  const [selectedDate, setSelectedDate] = React.useState(new Date().getDate())
  const [selectedMonth, setSelectedMonth] = React.useState(currMonth)
  const [selectedYear, setSelectedYear] = React.useState(currYear)
  const [selectedEvents, setSelectedEvents] = React.useState([])

  const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"]

  function getEventDots(day, month, year) {
    let eventCode = ((month+1) * 1000000 + day * 10000 + year)
    return eventCode in events ? ".".repeat(events[eventCode].length): ""
  }

  useEffect(() => {
    let eventCode = ((selectedMonth+1) * 1000000 + selectedDate * 10000 + selectedYear)
    if (eventCode in events) {
      setSelectedEvents(events[eventCode])
    }
    else {
      setSelectedEvents([])
    }
  }, [selectedDate, selectedMonth, selectedYear])

  useEffect(() => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay() // getting first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate() // getting last date of month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay() // getting last day of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate() // getting last date of previous month
    let keyCounter = 0

    let newCalender = []

    for (let i = firstDayofMonth; i > 0; i--) {
      newCalender.push({
        key: keyCounter,
        className: "calendar-day calendar-day-inactive", 
        day: lastDateofLastMonth - i + 1,
        month: currMonth - 1 < 0 ? 11 : currMonth - 1,
        year: currMonth - 1 < 0 ? currYear - 1 : currYear,
        eventDots: getEventDots(lastDateofLastMonth - i + 1,
                                currMonth - 1 < 0 ? 11 : currMonth - 1,
                                currMonth - 1 < 0 ? currYear - 1 : currYear)})
      keyCounter++
    }
    
    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday = i === new Date().getDate() && currMonth === new Date().getMonth() 
                  && currYear === new Date().getFullYear() ? 
                  "calendar-day calendar-day-current" : "calendar-day";
      newCalender.push({
        key: keyCounter,
        className: isToday,
        day: i,
        month: currMonth,
        year: currYear,
        eventDots: getEventDots(i,
                                currMonth, 
                                currYear)})
      keyCounter++
    }

    let trailingDays = 6
    if (newCalender.length <= 35) {
      trailingDays = 13
    }
    for (let i = lastDayofMonth; i < trailingDays; i++) {
      newCalender.push({
        key: keyCounter,
        className: "calendar-day calendar-day-inactive", 
        day: i - lastDayofMonth + 1,
        month: currMonth + 1 > 11 ? 0 : currMonth + 1,
        year: currMonth + 1 > 11 ? currYear + 1 : currYear,
        eventDots: getEventDots(i - lastDayofMonth + 1, 
                                currMonth + 1 > 11 ? 0 : currMonth + 1, 
                                currMonth + 1 > 11 ? currYear + 1 : currYear)})
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

  return (
    <div className='calendar'>
      <div className='calendar-day-view'>
        <div className='calendar-selected-date'>
          {selectedDate}
        </div>
        <div className='calendar-selected-month'>
          {months[selectedMonth]}
        </div>
        <div className='calendar-selected-year'>
          {selectedYear}
        </div>
        <div className='calendar-events'>
          {selectedEvents.map((event) => (
            <div className='calendar-event' key={event.key}>
              <div className='calendar-event-name'>
                {event.name}
              </div>
              <div className='calendar-event-time'>
                {event.time}
              </div>
              <div className='calendar-event-location'>
                {event.location}
              </div>
              <div className='calendar-event-address'>
                {event.address}
              </div>
              <div className='calendar-event-description'>
                {event.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='calendar-month-view'>
        <div className='calendar-header'>
          <div className='calendar-header-month-year'>
              {months[currMonth]} {currYear}
          </div>
          <div className='calendar-header-buttons'>
            <div className='calender-prev-month' onClick={changePrevMonth}>
              ˄
            </div>
            <div className='calender-next-month' onClick={changeNextMonth}>
              ˅
            </div>
          </div>
        </div>
        <div className='calendar-days'>
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
          {calendarDays.map((calenderDay) => (
            <div className={calenderDay.className} key={calenderDay.key} 
              onClick={() => {setSelectedDate(calenderDay.day);
                              setSelectedMonth(calenderDay.month);
                              setSelectedYear(calenderDay.year)}}>
              {calenderDay.day}
              <div className='calendar-events-dots'>
                {calenderDay.eventDots}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <div className='events'>
      <div className='events-title'>
        EVENTS
      </div>
      <Calendar />
    </div>
  )
}