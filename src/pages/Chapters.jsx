import React, { useEffect } from 'react'

export default function Chapters() {
  const chapters = [
    {
      id: "apy",
      name: "Anrê Phú Yên", 
      description: "Or Doan is located in Hoston, TX blah blah sf stuff blah blah stuff stuff blah blah stuff stuff", 
      quote: "blah blah",
      links: {
        'Youtube': 'https://www.youtube.com',
      },
      logo: "/chapters/APY.jpg"
    },
    {
      id: "adl",
      name: "Anrê Dũng Lạc", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      links: {
        'Youtube': 'https://www.youtube.com',
      },
      logo: "/chapters/ADL.jpg"
    },
    {
      id: "cbn",
      name: "Chúa Ba Ngôi", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      links: {
        'Youtube': 'https://www.youtube.com',
      },
      logo: "/chapters/CBN.jpg"
    },
    {
      id: "savio",
      name: "Savio", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      links: {
        'Youtube': 'https://www.youtube.com',
      },
      logo: "/chapters/Savio.png"
    },
    {
      id: "ktv",
      name: "Kitô Vua", 
      description: "First establish on April 16, 1988 at St. Jerome Catholic Church with Tr. Pham An as the first Đoàn Trưởng and Lm. Dominic Trịnh Thế Huy as the first Cha Tuyên Úy. It wasn’t until 1997 where Our Lady of Lourdes Catholic Church was building and Đoàn Kitô Vua moved and continue to sinh hoạt with Tr. Trần Dorothy as the current Đoàn Trưởng. Đoàn Kitô Vua currently has 115 members and 34 Youth Leaders.", 
      quote: "blah bro blah",
      links: {
        'Facebook': 'https://www.facebook.com/doankitovuahouston',
        'Instagram': 'https://www.instagram.com/tnttkvh',
        'NS Instagram': 'https://www.instagram.com/tnttkvhns',
        'Youtube': 'https://www.youtube.com/@kitovuahouston',
      },
      logo: "/chapters/KTV.png"
    },
    {
      id: "nvhb",
      name: "Nữ Vương Hòa Bình", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      links: {
        'Youtube': 'https://www.youtube.com',
      },
      logo: "/chapters/NVHB.png"
    },
    {
      id: "db",
      name: "Don Bosco", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      links: {
        'Youtube': 'https://www.youtube.com',
      },
      logo: "/chapters/LD.png"
    },
    {
      id: "tt",
      name: "Thánh Tâm", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      links: {
        'Youtube': 'https://www.youtube.com',
      },
      logo: "/chapters/LD.png"
    }
  ]
  const [displayChapter, setDisplayChapter] = React.useState({})


  // useEffect(() => {
  //   if (Object.keys(displayChapter).length === 0) {
  //     console.log('not empty')
  //   }
  //   else {
  //     console.log('empty')
  //   }
  // }, [displayChapter])
  
  function ChapterDetails() {
    if (Object.keys(displayChapter).length > 0) {
      return (
        <div className='chapter-details' onClick={() => (setDisplayChapter({}))}>
          <div className='chapter-details-content'>
            {displayChapter.name}
          </div>
        </div>
      )
    }
  }

  return (
    <div className='chapters'>
      <div className='chapters-title'>
        CHAPTERS
      </div>
      {chapters.length > 0 ? (
        <div className='chapters-list'>
          {chapters.map(chapter => (
            <div key={chapter.id} className='chapter-element' onClick={() => (setDisplayChapter(chapter))}>
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
          ))}
        </div>
      ) : <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      <ChapterDetails />
    </div>
  )
}