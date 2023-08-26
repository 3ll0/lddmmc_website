import React from 'react'

function HomeImage() {
  var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  return (
    <div className='home-image-section'>
      <div className='home-image-container'>
        <img className='home-image' src="/images/main.jpg" />
      </div>
      <div className='home-image-words-container'>
        <div className="typewrite" data-period="10" 
          data-type='[ "Liên Đoàn Đức Mẹ Mân Côi", "Our Lady of The Holy Rosary League of Chapters" ]'>
          <span className="home-image-words"></span>
        </div>
      </div>
    </div>
  )
}

function Annoucements() {
  const [annoucements, setAnnoucements] = React.useState([])

  React.useEffect(() => {
    fetch("/api/annoucements")
      .then(res => res.json())
      .then(data => setAnnoucements(data.annoucements))
  }, [])

  const annoucementElements = annoucements.map(annoucement => (
    <div key={annoucement.id} className='annoucement-element'>
      <div className='annoucement-header'>
        <img className='annoucement-header-image' src="/images/logo.png" />
        <div className='annoucement-header-description'>
          <div className='annoucement-header-name'>
            {annoucement.name}
          </div>
          <div className='annoucement-header-time'>
            {annoucement.time}
          </div>
        </div>
      </div>
      <div>
      {annoucement.content}
      </div>
      <img className='home-image' src="/images/img1.jpg" />
      <div>
        Links
      </div>
    </div>
  ))

  return (
    <div className='annoucements'>
      <div className='annoucements-name'>
        ANNOUCEMENTS
      </div>
      <div className='annoucement-elements'>
        {annoucementElements}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className='home'>
      <HomeImage />
      <Annoucements />
    </div>
  )
}