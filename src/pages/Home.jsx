function NamePage() {
  return (
    <div className='home-image-container'>
      <img className='home-image' src="/images/img2.jpg" />
      <div className='home-image-words'>
        OUR LADY OF THE ROSARY LEAGUE OF CHAPTERS
      </div>
    </div>
  )
}

function Annoucements() {
  return (
    <div className='annoucements'>
      <div className='annoucements-name'>
        ANNOUCEMENTS
      </div>
      <div className='annoucement-elements'>
        <Annoucement />
        <Annoucement />
        <Annoucement />
      </div>
    </div>
  )
}

function Annoucement() {
  return (
    <div className='annoucement-element'>
      <div className='annoucement-header'>
        <img className='annoucement-header-image' src="/images/logo.png" />
        <div className='annoucement-header-description'>
          <div className='annoucement-header-name'>
            Liên Đoàn Đức Mẹ Mân Côi
          </div>
          <div className='annoucement-header-time'>
            1 day ago
          </div>
        </div>
      </div>
      <div>
        Announcing the winner of the Đại Hội Nguồn Sống 2023 T-Shirt Contest, drum roll please…congratulations to Tr. Joseph & Tr. Natalie from Đoàn St. Barbara! Over a thousand people will be wearing YOUR design at Đại Hội this year! See you on the Đại Hội stage where you will receive your cash prize and your Đoàn will receive VIP seating!Thank you to everyone who participated in our T-shirt contest this year. We can’t wait to see you all at Đại Hội Nguồn Sống 2023!
      </div>
      <img className='home-image' src="/images/img1.jpg" />
      <div>
        Links
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
        <NewsElement />
        <NewsElement />
        <NewsElement />
        <NewsElement />
        <NewsElement />
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