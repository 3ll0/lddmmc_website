function Chapter() {
  return (
    <div className='chapter-element'>
      <img className='chapter-image' src="/images/tntt.png" />
      <div className='chapter-info'>
        <div className='chapter-name'>
          Doan Anre Phu Yen
        </div>
        <div className='chapter-description'>
          Or Doan is located in Hoston, TX blah blah stuff stuff blah 
          blah stuff stuff blah blah stuff stuff blah blah stuff stuff
          blah stuff stuff blah blah stuff stuff blah blah stuff stuff
          blah stuff stuff blah blah stuff stuff blah blah stuff stuff
          blah stuff stuff blah blah stuff stuff blah blah stuff stuff
        </div>
        <div className='chapter-quote'>
          "Welcome to the crib"
        </div>
        <a className='chapter-link' href='https://www.youtube.com'>
          www.website.com
        </a>
      </div>
    </div>
  )
}

export default function Chapters() {
  return (
    <div className='chapters'>
      <div className='chapters-title'>
        CHAPTERS
      </div>
      <div className='chapters-list'>
        <Chapter />
        <Chapter />
        <Chapter />
        <Chapter />
      </div>
    </div>
  )
}