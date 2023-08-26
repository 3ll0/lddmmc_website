import React from 'react'

function Calendar() {
  // const [calender, setCalender] = React.useState([])

  // React.useEffect(() => {
  //   fetch('/api/calender')
  //     .then(res => res.json())
  //     .then(data => setCalender(data.events))
  // }, [])

  // const calenderDays = calender.map(day => (

  // ))

  // var calender = function(o) {
  //   //Store div id
  //   this.divId = o.ParentID;
  
  //   // Days of week, starting on Sunday
  //   this.DaysOfWeek = o.DaysOfWeek;
  //   // Months, stating on January
  //   this.Months = o.Months;
  //   // Set the current month, year
  //   var d = new Date();
  //   this.CurrentMonth = d.getMonth();
  //   this.CurrentYear = d.getFullYear();
  
  //   var f=o.Format;
  
  //   if(typeof(f) == 'string') {
  //     this.f  = f.charAt(0).toUpperCase();
  //   } else {
  //     this.f = 'M';
  //   }
  
  // };
  
  // // Goes to next month
  // calender.prototype.nextMonth = function() {
  //   if ( this.CurrentMonth == 11 ) {
  //     this.CurrentMonth = 0;
  //     this.CurrentYear = this.CurrentYear + 1;
  //   } else {
  //     this.CurrentMonth = this.CurrentMonth + 1;
  //   }
  //   this.showCurrent();
  // };
  
  // // Goes to previous month
  // calender.prototype.previousMonth = function() {
  //   if ( this.CurrentMonth == 0 ) {
  //     this.CurrentMonth = 11;
  //     this.CurrentYear = this.CurrentYear - 1;
  //   } else {
  //     this.CurrentMonth = this.CurrentMonth - 1;
  //   }
  //   this.showCurrent();
  // };
  
  // // 
  // calender.prototype.previousYear = function() {
  //   this.CurrentYear = this.CurrentYear - 1;
  //   this.showCurrent();
  // }
  
  // // 
  // calender.prototype.nextYear = function() {
  //   console.log(" ");
  //   console.log("calender.prototype.nextYear = function() {");
  //   console.log("this.CurrentYear == " + this.CurrentYear);
  //   this.CurrentYear = this.CurrentYear + 1;
  //   console.log("this.CurrentYear - 1 i.e. this.CurrentYear == " + this.CurrentYear);
  //   this.showCurrent();
  // }              
  
  // // Show current month
  // calender.prototype.showCurrent = function() {
  //   this.calender(this.CurrentYear, this.CurrentMonth);
  // };
  
  // // Show month (year, month)
  // calender.prototype.calender = function(y,m) {
  //   typeof(y) == 'number' ? this.CurrentYear = y : null;
  //   typeof(y) == 'number' ? this.CurrentMonth = m : null;
  
  //   // 1st day of the selected month
  //   var firstDayOfCurrentMonth = new Date(y, m, 1).getDay();

  //   // Last date of the selected month
  //   var lastDateOfCurrentMonth = new Date(y, m+1, 0).getDate();
  
  //   // Last day of the previous month
  //   var lastDateOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
  
  //   // Write selected month and year. This HTML goes into <div id="month"></div>
  //   var monthandyearhtml = '<span id="monthandyearspan">' + this.Months[m] + ' - ' + y + '</span>';
  
  //   var html = '<table>';
  
  //   // Write the header of the days of the week
  //   html += '<tr>';
  
  //   for(var i=0; i < 7;i++) {
  
  //     html += '<th class="daysheader">' + this.DaysOfWeek[i] + '</th>';
  //   }
  
  //   html += '</tr>';
  
  //   var p = dm = this.f == 'M' ? 1 : firstDayOfCurrentMonth == 0 ? -5 : 2;
  
  //   var cellvalue;
  
  //   for (var d, i=0, z0=0; z0<6; z0++) {
  //     html += '<tr>';
  
  //     for (var z0a = 0; z0a < 7; z0a++) {
  
  //       d = i + dm - firstDayOfCurrentMonth;
  
  //       // Dates from prev month
  //       if (d < 1){
  
  //         cellvalue = lastDateOfLastMonth - firstDayOfCurrentMonth + p++;
  
  //         html += '<td id="prevmonthdates">' + 
  //               '<span id="cellvaluespan">' + (cellvalue) + '</span><br/>' + 
  //               '<ul id="cellvaluelist"><li>apples</li><li>bananas</li><li>pineapples</li></ul>' + 
  //             '</td>';
  
  //       // Dates from next month
  //       } else if ( d > lastDateOfCurrentMonth){
  
  //         html += '<td id="nextmonthdates">' + (p++) + '</td>';
  
  //       // Current month dates
  //       } else {
  //         html += '<td id="currentmonthdates">' + (d) + '</td>';
  
  //         p = 1;
  
  //       }
        
  //       if (i % 7 == 6 && d >= lastDateOfCurrentMonth) {
  
  //         z0 = 10; // no more rows
  //       }
  
  //       i++;
  
  //     }
  
  //     html += '</tr>';
  //   }
  
  //   // Closes table
  //   html += '</table>';
  
  
  //   document.getElementById("monthandyear").innerHTML = monthandyearhtml;
  
  //   document.getElementById(this.divId).innerHTML = html;
  // };
  
  // // On Load of the window
  // window.onload = function() {
    
  //   // Start calender
  //   var c = new calender({
  //     ParentID:"divcalendertable",
  
  //     DaysOfWeek:[
  //     'MON',
  //     'TUE',
  //     'WED',
  //     'THU',
  //     'FRI',
  //     'SAT',
  //     'SUN'
  //     ],
  
  //     Months:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
  
  //     Format:'dd/mm/yyyy'
  //   });
  
  //   c.showCurrent();
    
  //   // Bind next and previous button clicks
  //   getId('btnPrev').onclick = function(){
  //     c.previousMonth();
  //   };
  
  //   getId('btnPrevYr').onclick = function(){
  //     c.previousYear();
  //   };
  
  //   getId('btnNext').onclick = function(){
  //     c.nextMonth();
  //   };
  
  //   getId('btnNextYr').onclick = function(){
  //     c.nextYear();
  //   };                        
  // }
  
  // Get element by id
  // function getId(id) {
  //   return document.getElementById(id);
  // }

  // document.getElementById("monthandyear").innerHTML = monthandyearhtml;


  return (
    <div className='calendar'>
      <div className='calendar-day-view'>

      </div>
      <div className='calendar-month-view'>
        <div className='calendar-rows'>
          <div className='calendar-header'>
            <div className='calendar-header-month-year'>
              <div className='calendar-header-month'>
                August
              </div>
              <div className='calendar-header-year'>
                2023
              </div>
            </div>
            <div className='calendar-header-buttons'>
              <div className='calender-header-next-year'>

              </div>
              <div className='calender-header-prev-year'>
                
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
          <div className='calendar-row'>
            <div className='calendar-day'>
              30
            </div>
            <div className='calendar-day'>
              31
            </div>
            <div className='calendar-day'>
              1
            </div>
            <div className='calendar-day'>
              2
            </div>
            <div className='calendar-day'>
              3
            </div>
            <div className='calendar-day'>
              4
            </div>
            <div className='calendar-day'>
              5
            </div>
          </div>
          <div className='calendar-row'>
            <div className='calendar-day'>
              6
            </div>
            <div className='calendar-day'>
              7
            </div>
            <div className='calendar-day'>
              8
            </div>
            <div className='calendar-day'>
              9
            </div>
            <div className='calendar-day'>
              10
            </div>
            <div className='calendar-day'>
              11
            </div>
            <div className='calendar-day'>
              12
            </div>
          </div>
          <div className='calendar-row'>
            <div className='calendar-day'>
              13
            </div>
            <div className='calendar-day'>
              14
            </div>
            <div className='calendar-day'>
              15
            </div>
            <div className='calendar-day'>
              16
            </div>
            <div className='calendar-day'>
              17
            </div>
            <div className='calendar-day'>
              18
            </div>
            <div className='calendar-day'>
              19
            </div>
          </div>
          <div className='calendar-row'>
            <div className='calendar-day'>
              20
            </div>
            <div className='calendar-day'>
              21
            </div>
            <div className='calendar-day'>
              22
            </div>
            <div className='calendar-day'>
              23
            </div>
            <div className='calendar-day'>
              24
            </div>
            <div className='calendar-day'>
              25
            </div>
            <div className='calendar-day'>
              26
            </div>
          </div>
          <div className='calendar-row'>
            <div className='calendar-day'>
              27
            </div>
            <div className='calendar-day'>
              28
            </div>
            <div className='calendar-day'>
              29
            </div>
            <div className='calendar-day'>
              30
            </div>
            <div className='calendar-day'>
              31
            </div>
            <div className='calendar-day'>
              1
            </div>
            <div className='calendar-day'>
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Events() {
  const [events, setEvents] = React.useState([])

  React.useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data.events))
  }, [])

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