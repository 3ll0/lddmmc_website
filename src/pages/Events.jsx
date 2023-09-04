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
        description: "All Doans are invited to come"
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
                {event.time != "" ?
                  <svg className='calendar-event-time-icon' viewBox="-2 -3 36 36">
                    <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM17 15.594v-9.594c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.283 0.118 0.537 0.308 0.719 0.017 0.020 0.030 0.041 0.048 0.059l4.949 4.95c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.415z"></path>
                  </svg>
                : ""}
                <div className='calendar-event-time-content'>
                  {event.time}
                </div>
              </div>
              <div className='calendar-event-location'>
                {event.location != "" ?
                  <svg className='calendar-event-location-icon' viewBox="0 0 22 22">
                    <path fillRule="evenodd" d="M15.3442 5.39811C12.9087 3.13396 8.93592 3.13396 6.50035 5.39811C4.42306 7.3292 4.11365 10.3235 5.72875 12.5757L10.9223 19.8177L16.1158 12.5757C17.7309 10.3235 17.4215 7.3292 15.3442 5.39811ZM5.34288 4.15302C8.43091 1.28233 13.4137 1.28233 16.5017 4.15302C19.1919 6.65385 19.6221 10.6035 17.4973 13.5664L11.7508 21.5795L11.0601 21.0841L11.7508 21.5795C11.3462 22.1437 10.4984 22.1437 10.0937 21.5795L10.5987 21.2174L10.0937 21.5795L4.34727 13.5664C2.22248 10.6035 2.65271 6.65385 5.34288 4.15302Z"/>
                    <circle cx="11" cy="9" r="2"/>
                  </svg>
                : ""}
                <div className='calendar-event-location-content'>
                  {event.location}
                </div>
              </div>
              <div className='calendar-event-address'>
                {event.address != "" ?
                  <svg className='calendar-event-address-icon' viewBox="0 0 512 512">
                    <g>
                      <path d="M394.977,170.953c1.141-2.109,1.016-4.719-0.328-6.734l-37.047-55.563c-1.453-2.188-1.453-5.063,0-7.266
                        l37.047-55.563c1.344-2.016,1.469-4.609,0.328-6.734c-1.156-2.125-3.375-3.469-5.781-3.469H216.398v138.813h172.797
                        C391.602,174.438,393.82,173.078,394.977,170.953z"/>
                      <path d="M511.805,473.203l-8.703-19.141l-90.547-199.438H295.633h-9.344H213.68v31.547h54.031h46.5h20.688
                        L230.523,417.063L87.68,356.859l32.094-70.688h25.344v-31.547H99.43L0.195,473.203c-0.313,0.703-0.25,1.5,0.156,2.141
                        c0.422,0.641,1.125,1.031,1.891,1.031h507.516c0.766,0,1.469-0.391,1.891-1.031C512.055,474.703,512.117,473.906,511.805,473.203z
                        M355.086,286.172h37.141l40.828,89.922L323.914,325.25L355.086,286.172z M47.758,444.813l33.406-73.578l174.563,73.578H47.758z
                        M296.367,444.813l-50.734-21.391l68.156-85.469l129.281,60.203l21.172,46.656H296.367z"/>
                      <rect x="160.898" y="35.625" width="37" height="296.078"/>
                    </g>
                  </svg>
                : ""}
                <div className='calendar-event-address-content'>
                  {event.address}
                </div>
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
            <div className='calendar-header-month'>
              {months[currMonth]}
            </div>
            <div className='calendar-header-year'>
              {currYear}
            </div>
          </div>
          <div className='calendar-header-buttons'>
            <div className='calender-prev-month' onClick={changePrevMonth}>
              <svg width="48" height="48" viewBox="0 0 24 24">
                <polygon points="12 6.586 3.293 15.293 4.707 16.707 12 9.414 19.293 16.707 20.707 15.293 12 6.586"/>
              </svg>
            </div>
            <div className='calender-next-month' onClick={changeNextMonth}>
              <svg width="48" height="48" viewBox="0 0 24 24">
                <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
              </svg>
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
              {selectedDate === calenderDay.day && 
              selectedMonth === calenderDay.month && 
              selectedYear === calenderDay.year ? 
              <div className='calendar-selected'/> : <div/>}
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