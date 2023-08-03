import React from 'react'

export default function About() {
  const [spirituals, setSpirituals] = React.useState([])
  const [btvs, setBtvs] = React.useState([])
  const [academics, setAcademics] = React.useState([])
  const [leads, setLeads] = React.useState([])

  React.useEffect(() => {
    fetch('/api/spirituals')
      .then(res => res.json())
      .then(data => setSpirituals(data.spirituals))
    
    fetch('/api/btvs')
      .then(res => res.json())
      .then(data => setBtvs(data.btvs))

    fetch('/api/academics')
      .then(res => res.json())
      .then(data => setAcademics(data.academics))

    fetch('/api/leads')
      .then(res => res.json())
      .then(data => setLeads(data.leads))
  }, [])

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
          Our Lien Doan is nasodiasdnioasn doiasndi asn odnias 
          ndioasn odnasi nidsan iodaosidni snidn aodnoas n iansodn 
          aiosdn asodn i
        </div>
      </div>
      <div className="about-spacer" />
      <div className="about-element-list">
        {spiritualElements}
      </div>
      <div className="about-spacer" />
      <div className="about-element-list">
        {btvElements}
      </div>
      <div className="about-spacer" />
      <div className="about-element-list">
        {academicElements}
      </div>
      <div className="about-spacer" />
      <div className="about-element-list">
        {leadElements}
      </div>
    </div>
  )
}