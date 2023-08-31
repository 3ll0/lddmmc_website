import React from 'react'

export default function About() {
  const spirituals = [
    {
      id: 0,
      roleV: "Tuyên Úy", 
      roleE: "League Chaplain", 
      name: "Gioan Baotixita - Steven Son Tran",
      image: "/about/chaplain.jpg"
    }
  ]

  const btvs = [
    {
      id: 0,
      roleV: "Liên Đoàn Trưởng",
      roleE: "League President",
      name: "Giuse - Jimmy Văn Hà", 
      image: "/about/president.jpg"
    },
    {
      id: 1,
      roleV: "Phó Quản Trị", 
      roleE: "League Vice President Of Administrative Affairs", 
      name: "Theresa - Ngoc Diep Khuu", 
      image: "/about/vice_administrative.jpg"
    },
    {
      id: 2,
      roleV: "Phó Nghiên Huấn", 
      roleE: "League Vice President Of Academic Affairs", 
      name: "Têrêsa - Kathy Thuỳ Cao",
      image: "/about/vice_academic.jpg"
    },
    {
      id: 3,
      roleV: "Thư Ký", 
      roleE: "League Secretary", 
      name: "Anna Têrêsa - Jackie Tuyết Nguyễn",
      image: "/about/secretary.jpg"
    },
    {
      id: 4,
      roleV: "Thủ Quỹ", 
      roleE: "League Treasurer", 
      name: "Maria Goretti - Jacqueline Nguyen",
      image: "/about/treasurer.jpg"
    }
  ]
  const academics = [
    {
      id: 0,
      roleV: "Ủy Viên Ngành Ấu Nhi", 
      roleE: "League Academic Seedling Specialist", 
      name: "Giuse - Fanrcy Nguyen",
      image: "/about/seedling.jpg"
    },
    {
      id: 1,
      roleV: "Ủy Viên Ngành Ấu Nhi", 
      roleE: "League Academic Search Specialist", 
      name: "Anrê - Andy Kim Nguyen",
      image: "/about/search.jpg"
    },
    {
      id: 2,
      roleV: "Ủy Viên Ngành Ấu Nhi", 
      roleE: "League Academic Companion Specialist", 
      name: "Johnny Dinh",
      image: "/about/companion.jpg"
    },
    {
      id: 3,
      roleV: "Ủy Viên Ngành Ấu Nhi", 
      roleE: "League Academic KoE Specialist", 
      name: "Anna - Adeline Nhan Ai Pham",
      image: "/about/koe.jpg"
    }
  ]

  const leads = [
    {
      id: 0,
      roleV: "Ủy Viên Kỹ Thuật", 
      roleE: "League Technical Lead", 
      name: "Anton - Huy Nguyen",
      image: "/about/technical.jpg"
    },
    {
      id: 1,
      roleV: "Ủy Viên Kỹ Thuật Vi Tính", 
      roleE: "League IT Lead", 
      name: "Peter - Ryan Hoang",
      image: "/about/it.jpg"
    },
    {
      id: 2,
      roleV: "Ủy Viên Ơn Gọi", 
      roleE: "League Vocational Lead", 
      name: "Mary Thomas - Cindy Thanh-Lan Tran",
      image: "/about/vocational.jpg"
    },
    {
      id: 3,
      roleV: "Ủy Viên Phụng Vụ", 
      roleE: "League Liturgical Lead", 
      name: "Maria - Tristine Thuỷ Dinh",
      image: "/about/liturgical.jpg"
    },
    {
      id: 4,
      roleV: "Ủy Viên Truyền Thông", 
      roleE: "League Communications Lead", 
      name: "Cêcilia - Allison Diễm-Ngọc Hà",
      image: "/about/communications.jpg"
    },
    {
      id: 5,
      roleV: "Ủy Viên Đại Hội", 
      roleE: "League Conference Lead", 
      name: "Augustine of Hippo - Vincent Nguyen Pham",
      image: "/about/conference.jpg"
    },
    {
      id: 6,
      roleV: "Ủy Viên Nhân Sự", 
      roleE: "League Human Resources Lead", 
      name: "Giuse - Kelvin Nhat Tran",
      image: "/about/human_resources.jpg"
    },
    {
      id: 7,
      roleV: "Ủy Viên Xã Hội", 
      roleE: "League Social Works Lead", 
      name: "Phero - Lam Ngoc Khanh Vu",
      image: "/about/social_works.jpg"
    },
    {
      id: 8,
      roleV: "Ủy Viên Văn Nghệ", 
      roleE: "League Entertainment Lead", 
      name: "Maria Faustina - Michelle Lý Hứa",
      image: "/about/entertainment.jpg"
    }
  ]

  const spiritualElements = spirituals.map(spiritual => (
    <div key={spiritual.id} className='about-element'>
      <div className='about-element-image-container'>
        <img className='about-element-image' src={spiritual.image} />
      </div>
      <div className='about-element-info'>
        <div className='about-element-roleV'>
          {spiritual.roleV}
        </div>
        <div className='about-element-roleE'>
          {spiritual.roleE}
        </div>
        <div className='about-element-spacer' />
        <div className='about-element-name'>
          {spiritual.name}
        </div>
      </div>
    </div>
  ))

  const btvElements = btvs.map(btv => (
    <div key={btv.id} className='about-element'>
      <div className='about-element-image-container'>
        <img className='about-element-image' src={btv.image} />
      </div>
      <div className='about-element-info'>
        <div className='about-element-roleV'>
          {btv.roleV}
        </div>
        <div className='about-element-roleE'>
          {btv.roleE}
        </div>
        <div className='about-element-spacer' />
        <div className='about-element-name'>
          {btv.name}
        </div>
      </div>
    </div>
  ))

  const academicElements = academics.map(academic => (
    <div key={academic.id} className='about-element'>
      <div className='about-element-image-container'>
        <img className='about-element-image' src={academic.image} />
      </div>
      <div className='about-element-info'>
        <div className='about-element-roleV'>
          {academic.roleV}
        </div>
        <div className='about-element-roleE'>
          {academic.roleE}
        </div>
        <div className='about-element-spacer' />
        <div className='about-element-name'>
          {academic.name}
        </div>
      </div>
    </div>
  ))

  const leadElements = leads.map(lead => (
    <div key={lead.id} className='about-element'>
      <div className='about-element-image-container'>
        <img className='about-element-image' src={lead.image} />
      </div>
      <div className='about-element-info'>
        <div className='about-element-roleV'>
          {lead.roleV}
        </div>
        <div className='about-element-roleE'>
          {lead.roleE}
        </div>
        <div className='about-element-spacer' />
        <div className='about-element-name'>
          {lead.name}
        </div>
      </div>
    </div>
  ))
  
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