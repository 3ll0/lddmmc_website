import React from 'react'

export default function About() {
  const spirituals = [
    {
      id: 0,
      roleV: "Tuyên Úy", 
      roleE: "League Chaplain", 
      name: "Gioan Baotixita - Steven Son Tran",
      image: "/about/chaplain.jpg",
      email: "ssteventran@yahoo.com",
      emailLink: "mailto:ssteventran@yahoo.com"
    }
  ]

  const btvs = [
    {
      id: 0,
      roleV: "Liên Đoàn Trưởng",
      roleE: "League President",
      name: "Giuse - Jimmy Văn Hà", 
      image: "/about/president.jpg",
      email: "jimmy.v.ha@veym.net",
      emailLink: "mailto:jimmy.v.ha@veym.net"
    },
    {
      id: 1,
      roleV: "Phó Quản Trị", 
      roleE: "League Vice President Of Administrative Affairs", 
      name: "Theresa - Ngoc Diep Khuu", 
      image: "/about/vice_administrative.jpg",
      email: "ngoc.khuu@veym.net",
      emailLink: "mailto:ngoc.khuu@veym.net"
    },
    {
      id: 2,
      roleV: "Phó Nghiên Huấn", 
      roleE: "League Vice President Of Academic Affairs", 
      name: "Têrêsa - Kathy Thuỳ Cao",
      image: "/about/vice_academic.jpg",
      email: "kathyc289@gmail.com",
      emailLink: "mailto:kathyc289@gmail.com"
    },
    {
      id: 3,
      roleV: "Thư Ký", 
      roleE: "League Secretary", 
      name: "Anna Têrêsa - Jackie Tuyết Nguyễn",
      image: "/about/secretary.jpg",
      email: "jackie.nguyen1@veym.net",
      emailLink: "mailto:jackie.nguyen1@veym.net"
    },
    {
      id: 4,
      roleV: "Thủ Quỹ", 
      roleE: "League Treasurer", 
      name: "Maria Goretti - Jacqueline Nguyen",
      image: "/about/treasurer.jpg",
      email: "jacqueline.nguyen@veym.net",
      emailLink: "mailto:jacqueline.nguyen@veym.net"
    }
  ]
  const academics = [
    {
      id: 0,
      roleV: "Ủy Viên Ngành Ấu Nhi", 
      roleE: "League Academic Seedling Specialist", 
      name: "Giuse - Fanrcy Nguyen",
      image: "/about/seedling.jpg",
      email: "fanrcy.nguyen@veym.net",
      emailLink: "mailto:fanrcy.nguyen@veym.net"
    },
    {
      id: 1,
      roleV: "Ủy Viên Ngành Thiếu Nhi", 
      roleE: "League Academic Search Specialist", 
      name: "Anrê - Andy Kim Nguyen",
      image: "/about/search.jpg",
      email: "andy.nguyen1@veym.net",
      emailLink: "mailto:andy.nguyen1@veym.net"
    },
    {
      id: 2,
      roleV: "Ủy Viên Ngành Nghĩa Sĩ", 
      roleE: "League Academic Companion Specialist", 
      name: "Johnny Dinh",
      image: "/about/companion.jpg",
      email: "johnny.n.dinh@veym.net",
      emailLink: "mailto:johnny.n.dinh@veym.net"
    },
    {
      id: 3,
      roleV: "Ủy Viên Ngành Hiệp Sĩ", 
      roleE: "League Academic KoE Specialist", 
      name: "Anna - Adeline Nhan Ai Pham",
      image: "/about/koe.jpg",
      email: "adepham@gmail.com",
      emailLink: "mailto:adepham@gmail.com"
    }
  ]

  const leads = [
    {
      id: 0,
      roleV: "Ủy Viên Kỹ Thuật", 
      roleE: "League Technical Lead", 
      name: "Anton - Huy Nguyen",
      image: "/about/technical.jpg",
      email: "huy.nguyen5@veym.net",
      emailLink: "mailto:huy.nguyen5@veym.net"
    },
    {
      id: 1,
      roleV: "Ủy Viên Kỹ Thuật Vi Tính", 
      roleE: "League IT Lead", 
      name: "Peter - Ryan Hoang",
      image: "/about/it.jpg",
      email: "ryan.hoang1@veym.net",
      emailLink: "mailto:ryan.hoang1@veym.net"
    },
    {
      id: 2,
      roleV: "Ủy Viên Ơn Gọi", 
      roleE: "League Vocational Lead", 
      name: "Mary Thomas - Cindy Thanh-Lan Tran",
      image: "/about/vocational.jpg",
      email: "cindy.tran@veym.net",
      emailLink: "mailto:cindy.tran@veym.net"
    },
    {
      id: 3,
      roleV: "Ủy Viên Phụng Vụ", 
      roleE: "League Liturgical Lead", 
      name: "Maria - Tristine Thuỷ Dinh",
      image: "/about/liturgical.jpg",
      email: "tweetydinh@gmail.com",
      emailLink: "mailto:tweetydinh@gmail.com"
    },
    {
      id: 4,
      roleV: "Ủy Viên Truyền Thông", 
      roleE: "League Communications Lead", 
      name: "Cêcilia - Allison Diễm-Ngọc Hà",
      image: "/about/communications.jpg",
      email: "allison.ha@veym.net",
      emailLink: "mailto:allison.ha@veym.net"
    },
    {
      id: 5,
      roleV: "Ủy Viên Đại Hội", 
      roleE: "League Conference Lead", 
      name: "Augustine of Hippo - Vincent Nguyen Pham",
      image: "/about/conference.jpg",
      email: "vincentpham4050@gmail.com",
      emailLink: "mailto:vincentpham4050@gmail.com"
    },
    {
      id: 6,
      roleV: "Ủy Viên Nhân Sự", 
      roleE: "League Human Resources Lead", 
      name: "Giuse - Kelvin Nhat Tran",
      image: "/about/human_resources.jpg",
      email: "kelvin.n.tran@veym.net",
      emailLink: "mailto:kelvin.n.tran@veym.net"
    },
    {
      id: 7,
      roleV: "Ủy Viên Xã Hội", 
      roleE: "League Social Works Lead", 
      name: "Phero - Lam Ngoc Khanh Vu",
      image: "/about/social_works.jpg",
      email: "lam.vu1@veym.net",
      emailLink: "mailto:lam.vu1@veym.net"
    },
    {
      id: 8,
      roleV: "Ủy Viên Văn Nghệ", 
      roleE: "League Entertainment Lead", 
      name: "Maria Faustina - Michelle Lý Hứa",
      image: "/about/entertainment.jpg",
      email: "michellehua04@gmail.com",
      emailLink: "mailto:michellehua04@gmail.com"
    }
  ]

  function aboutElement(aboutInfo) {
    return (
      <div key={aboutInfo.id} className='about-element'>
      <div className='about-element-image-container'>
        <img className='about-element-image' src={aboutInfo.image} />
      </div>
      <div className='about-element-info'>
        <div className='about-element-roleV'>
          {aboutInfo.roleV}
        </div>
        <div className='about-element-roleE'>
          {aboutInfo.roleE}
        </div>
        <a className='about-element-email'  href={aboutInfo.emailLink}>
          {aboutInfo.email}
        </a>
        <div className='about-element-spacer' />
        <div className='about-element-name'>
          {aboutInfo.name}
        </div>
      </div>
    </div>
    )
  }
  const spiritualElements = spirituals.map(spiritual => aboutElement(spiritual))
  const btvElements = btvs.map(btv => aboutElement(btv))
  const academicElements = academics.map(academic => aboutElement(academic))
  const leadElements = leads.map(lead => aboutElement(lead))
  
  return (
    <div className="about">
      <div className="about-main">
        <div className="about-main-image-container">
          <img className='about-main-image' src='/about/LD.png' />
        </div>
        <div className="about-main-description">
          Meet our Lien Doan Ban Chap Hanh for 2023-2026!
        </div>
      </div>
      <div className="about-spacer" />
      {spirituals.length > 0 ? (
        <div className="about-element-spirituals-list">
          {spiritualElements}
        </div>
      ) : <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      <div className="about-spacer" />
      {btvs.length > 0 ? (
        <div className="about-element-btvs-list">
          {btvElements}
        </div>
        ) : <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      <div className="about-spacer" />
      {academics.length > 0 ? (
        <div className="about-element-academics-list">
          {academicElements}
        </div>
      ) : <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
      <div className="about-spacer" />
      {leads.length > 0 ? (
        <div className="about-element-leads-list">
          {leadElements}
        </div>
      ) : <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
    </div>
  )
}