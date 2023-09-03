import React from 'react'

function HomeImage() {
  // var TxtType = function(el, toRotate, period) {
  //     this.toRotate = toRotate;
  //     this.el = el;
  //     this.loopNum = 0;
  //     this.period = parseInt(period, 10) || 2000;
  //     this.txt = '';
  //     this.tick();
  //     this.isDeleting = false;
  // };

  // TxtType.prototype.tick = function() {
  //     var i = this.loopNum % this.toRotate.length;
  //     var fullTxt = this.toRotate[i];

  //     if (this.isDeleting) {
  //     this.txt = fullTxt.substring(0, this.txt.length - 1);
  //     } else {
  //     this.txt = fullTxt.substring(0, this.txt.length + 1);
  //     }

  //     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  //     var that = this;
  //     var delta = 200 - Math.random() * 100;

  //     if (this.isDeleting) { delta /= 2; }

  //     if (!this.isDeleting && this.txt === fullTxt) {
  //     delta = this.period;
  //     this.isDeleting = true;
  //     } else if (this.isDeleting && this.txt === '') {
  //     this.isDeleting = false;
  //     this.loopNum++;
  //     delta = 500;
  //     }

  //     setTimeout(function() {
  //     that.tick();
  //     }, delta);
  // };
  
  // window.onload = function() {
  //   var elements = document.getElementsByClassName('typewrite');
  //   for (var i=0; i<elements.length; i++) {
  //       var toRotate = elements[i].getAttribute('data-type');
  //       var period = elements[i].getAttribute('data-period');
  //       if (toRotate) {
  //         new TxtType(elements[i], JSON.parse(toRotate), period);
  //       }
  //   }
  //   // INJECT CSS
  //   var css = document.createElement("style");
  //   css.type = "text/css";
  //   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  //   document.body.appendChild(css);
  // };

  const annoucements = [
    {
      id: 0,
      name: "Liên Đoàn Đức Mẹ Mân Côi", 
      time: "9/1/2023", 
      content: "Join us for DHLD Sep 30 - Oct 1!",
    },
    {
      id: 1,
      name: "Liên Đoàn Đức Mẹ Mân Côi", 
      time: "9/2/2023", 
      content: "Good luck going back to school!",
    },
    {
      id: 2,
      name: "Liên Đoàn Đức Mẹ Mân Côi", 
      time: "9/3/2023", 
      content: "Remember to submit your DHLD forms!",
    }
  ]

  const annoucementElements = annoucements.map(annoucement => (
    <div key={annoucement.id} className='home-latest-element'>
      <div className='home-latest-header'>
        <img className='home-latest-header-icon' src="/images/logo.png" />
        <div className='home-latest-header-description'>
          <div className='home-latest-header-name'>
            {annoucement.name}
          </div>
          <div className='home-latest-header-time'>
            {annoucement.time}
          </div>
        </div>
      </div>
      <div className='home-latest-content'>
        {annoucement.content}
      </div>
    </div>
  ))
  
  return (
    <div className='home-image-section'>
      <div className='home-image-container'>
        <img className='home-image' src="/images/main.jpg" />
      </div>
      {/* <div className='home-image-words-container'>
        <div className="typewrite" data-period="10" 
          data-type='[ "Liên Đoàn Đức Mẹ Mân Côi", "Our Lady of The Holy Rosary League of Chapters" ]'>
          <span className="home-image-words"></span>
        </div>
      </div> */}
      <div className='home-content-container'>
        <div className='home-title-container'>
          <div className='home-title-welcome'>
            Welcome to...
          </div>
          <div className='home-title-name'>
            Liên Đoàn Đức Mẹ Mân Côi!
          </div>
          <div className='home-sub-title'>
            Our Lady of The Holy Rosary League of Chapters
          </div>
        </div>
        <div className='home-latest-container'>
          {annoucementElements}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className='home'>
      <HomeImage />
    </div>
  )
}