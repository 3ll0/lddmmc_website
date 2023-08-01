import React from 'react'

export default function About() {
  const [spirituals, setSpirituals] = React.useState([])
  const [btvs, setBtvs] = React.useState([])
  const [academics, setAcademics] = React.useState([])
  const [bchs, setBchs] = React.useState([])

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

    fetch('/api/bchs')
      .then(res => res.json())
      .then(data => setBchs(data.bchs))
  }, [])

  const spiritualElements = spirituals.map(spiritual => (
    <div key={spiritual.id} className='about-element'>
      <img className='about-image' src={spiritual.image} />
      <div className='about-info'>
        <div className='about-roleV'>
          {spiritual.roleV}
        </div>
        <div className='about-roleE'>
          {spiritual.roleE}
        </div>
        <div className='about-name'>
          {spiritual.name}
        </div>
      </div>
    </div>
  ))

  const btvElements = btvs.map(btv => (
    <div key={btv.id} className='about-element'>
      <img className='about-image' src={btv.image} />
      <div className='about-info'>
        <div className='about-roleV'>
          {btv.roleV}
        </div>
        <div className='about-roleE'>
          {btv.roleE}
        </div>
        <div className='about-name'>
          {btv.name}
        </div>
      </div>
    </div>
  ))

  const academicElements = academics.map(academic => (
    <div key={academic.id} className='about-element'>
      <img className='about-image' src={academic.image} />
      <div className='about-info'>
        <div className='about-roleV'>
          {academic.roleV}
        </div>
        <div className='about-roleE'>
          {academic.roleE}
        </div>
        <div className='about-name'>
          {academic.name}
        </div>
      </div>
    </div>
  ))

  // const bchElements = bchs.map(bch => (
  //   <div key={bch.id} className='about-element'>
  //     <img className='about-image' src={bch.image} />
  //     <div className='about-info'>
  //       <div className='about-roleV'>
  //         {bch.roleV}
  //       </div>
  //       <div className='about-roleE'>
  //         {bch.roleE}
  //       </div>
  //       <div className='about-name'>
  //         {bch.name}
  //       </div>
  //     </div>
  //   </div>
  // ))
  
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
      <div className="about-header">
        Spiritual
      </div>
      <div className="about-element-list">
        {spiritualElements}
      </div>
      <div className="about-header">
        BTV
      </div>
      <div className="about-element-list">
        {btvElements}
      </div>
      <div className="about-header">
        ACADEMICS
      </div>
      <div className="about-element-list">
        {academicElements}
      </div>
      <div className="about-header">
        BCH
      </div>
      <div className="about-element-list">
      </div>
    </div>
  )
}