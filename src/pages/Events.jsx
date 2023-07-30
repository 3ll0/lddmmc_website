import React from 'react'

export default function Events() {
  const [events, setEvents] = React.useState([])

  React.useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data.events))
  }, [])

  const eventElements = events.map(event => (
    <div key={event.id} className='event-element'>
      <img className='event-image' src={event.image} />
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
          <div className='event-info-location'>
            {event.location}
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
        Events Page
      </div>
      <div className='events-content'>
        <div className='events-image-container'>
          <img className='events-image' src='/events/events.jpg' />
        </div>
        <div className='events-list'>
          {eventElements}
        </div>
      </div>
    </div>
  )
}