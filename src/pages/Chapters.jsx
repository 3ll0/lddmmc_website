import React from 'react'

function ChapterDetails(chapter) {
  return (
    <div className='chapter-details'>
      <div className='chapter-details-content'>

      </div>
    </div>
  )
}

export default function Chapters() {
  const [chapters, setChapters] = React.useState([])

  React.useEffect(() => {
    fetch('/api/chapters')
      .then(res => res.json())
      .then(data => setChapters(data.chapters))
  }, [])

  function renderChapterDetails (chapter) {
    console.log(chapter.id)
  }

  const chapterElements = chapters.map(chapter => (
    <div key={chapter.id} className='chapter-element' onClick={renderChapterDetails(chapter)}>
      <img className='chapter-image' src={chapter.logo} />
      <div className='chapter-info'>
        <div className='chapter-name'>
          {chapter.name}
        </div>
        {/* <div className='chapter-element-spacer' />
        <div className='chapter-description'>
          {chapter.description}
        </div>
        <div className='chapter-quote'>
          {chapter.quote}
        </div>
        <a className='chapter-link' href={chapter.website}>
          {chapter.website}
        </a> */}
      </div>
    </div>
  ))

  return (
    <div className='chapters'>
      <div className='chapters-title'>
        CHAPTERS
      </div>
      {chapters.length > 0 ? (
        <div className='chapters-list'>
          {chapterElements}
        </div>
      ) : <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      <ChapterDetails />
    </div>
  )
}