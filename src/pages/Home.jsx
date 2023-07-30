import React from 'react'

function NamePage() {
  return (
    <div className='home-image-container'>
      <img className='home-image' src="/images/img4.jpg" />
      <div className='home-image-words'>
        OUR LADY OF THE HOLY ROSARY LEAGUE OF CHAPTERS
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

function NewsElement() {
  return (
    <div className='news-element'>
      <a className='news-element-image-container' href='https://www.instagram.com/p/CtsP8eMJF6y/'>
        <img className='news-element-image' src='/images/news.jpg' />
      </a>
    </div>
  )
}

function News() {
  return (
    <div className='news'>
      <div className='news-title'>
        NEWS
      </div>
      <div className='news-list'>
        <div className='news-list-slider'>
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
        </div>

        <div className='news-list-slider'>
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
          <NewsElement />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <NamePage />
      <Annoucements />
      <News />
    </>
  )
}