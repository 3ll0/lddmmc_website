import React from 'react'

export default function Chapters() {
  const [chapters, setChapters] = React.useState([])

  React.useEffect(() => {
    fetch('/api/chapters')
      .then(res => res.json())
      .then(data => setChapters(data.chapters))
  }, [])

  const chapterElements = chapters.map(chapter => (
    <div key={chapter.id} className='chapter-element'>
      <img className='chapter-image' src={chapter.logo} />
      <div className='chapter-info'>
        <div className='chapter-name'>
          {chapter.name}
        </div>
        <div className='chapter-description'>
          {chapter.description}
        </div>
        <div className='chapter-quote'>
          {chapter.quote}
        </div>
        <a className='chapter-link' href={chapter.website}>
          {chapter.website}
        </a>
      </div>
    </div>
  ))

  return (
    <div className='chapters'>
      <div className='chapters-title'>
        CHAPTERS
      </div>
      <div className='chapters-list'>
        {chapterElements}
      </div>
    </div>
  )
}