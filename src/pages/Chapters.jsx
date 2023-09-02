import React, { useEffect } from 'react'

export default function Chapters() {
  const chapters = [
    {
      id: "apy",
      name: "Anrê Phú Yên",
      parish: "Vietnamese Martrys",
      location: "",
      sinhhoat: "Saturday: 12:30-2:30",
      description: "",
      links: [
      ],
      logo: "/chapters/APY.jpg"
    },
    {
      id: "adl",
      name: "Anrê Dũng Lạc",
      parish: "La Vang",
      location: "",
      sinhhoat: "",
      description: "",
      links: [
      ],
      logo: "/chapters/ADL.jpg"
    },
    {
      id: "cbn",
      name: "Chúa Ba Ngôi",
      parish: "",
      location: "",
      sinhhoat: "",
      description: "",
      links: [
      ],
      logo: "/chapters/CBN.jpg"
    },
    {
      id: "savio",
      name: "Savio",
      parish: "St. Christopher",
      location: "",
      sinhhoat: "",
      description: "",
      links: [
      ],
      logo: "/chapters/Savio.png"
    },
    {
      id: "ktv",
      name: "Kitô Vua",
      parish: "",
      location: "",
      sinhhoat: "",
      description: "First establish on April 16, 1988 at St. Jerome Catholic Church with Tr. Pham An as the first Đoàn Trưởng and Lm. Dominic Trịnh Thế Huy as the first Cha Tuyên Úy. It wasn’t until 1997 where Our Lady of Lourdes Catholic Church was building and Đoàn Kitô Vua moved and continue to sinh hoạt with Tr. Trần Dorothy as the current Đoàn Trưởng. Đoàn Kitô Vua currently has 115 members and 34 Youth Leaders.",
      links: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/doankitovuahouston'
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/tnttkvh'
        },
        {
          name: 'NS Instagram',
          link: 'https://www.instagram.com/tnttkvhns'
        },
        {
          name: 'Youtube',
          link: 'https://www.youtube.com/@kitovuahouston'
        },
      ],
      logo: "/chapters/KTV.png"
    },
    {
      id: "nvhb",
      name: "Nữ Vương Hòa Bình",
      parish: "",
      location: "",
      sinhhoat: "",
      description: "",
      links: [
      ],
      logo: "/chapters/NVHB.png"
    },
    {
      id: "db",
      name: "Don Bosco",
      parish: "",
      location: "",
      sinhhoat: "",
      description: "",
      links: [
      ],
      logo: "/chapters/LD.png"
    },
    {
      id: "tt",
      name: "Thánh Tâm",
      parish: "",
      location: "",
      sinhhoat: "",
      description: "",
      links: [
      ],
      logo: "/chapters/LD.png"
    }
  ]
  const [displayChapter, setDisplayChapter] = React.useState({})

  function ChapterDetails() {
    if (Object.keys(displayChapter).length > 0) {
      return (
        <div className='chapter-details' onClick={() => (setDisplayChapter({}))}>
          <div className='chapter-details-content'>
            <img className='chapter-details-image' src={displayChapter.logo} />
            <div className='chapter-details-info'>
              <div className='chapter-details-name'>
                {displayChapter.name}
              </div>
              <div className='chapter-details-parish'>
                {displayChapter.parish}
              </div>
              <div className='chapter-details-location'>
                {displayChapter.location}
              </div>
              <div className='chapter-details-sinhhoat'>
                {displayChapter.sinhhoat}
              </div>
              <div className='chapter-details-description'>
                {displayChapter.description}
              </div>
              <div className='chapter-details-links'>
                {displayChapter.links.map(link => (
                  <a className='chapter-details-link' key={link.name} href={link.link} target='_blank'>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
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
                </div>
            </div>
          ))}
        </div>
      ) : <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      <ChapterDetails />
    </div>
  )
}