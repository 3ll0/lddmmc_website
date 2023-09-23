export default function DHLD() {
  const novenas = [
    // {
    //   key: 0,
    //   name: "Day 1: Guidance and Wisdom",
    //   description: "Thursday 9/21/23\n\nIn the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n\nDear Lord, we thank You for giving us Your mother as Our Lady of the Holy Rosary. Help us to turn to her as our mother in all of our needs! We are grateful for the gift of Our Lady of the Holy Rosary, and we humbly seek her intercession in our daily lives.\n\nAs we embark on this journey in preparation for our Đại Hội Liên Đoàn gathering, we humbly request in this novena for God’s guidance and wisdom. May His divine light shine upon us as we lead by example through our prudent choices. Our Lady of the Holy Rosary, pray for us that we may attain the understanding needed to carry out our event successfully.\n\nOur Lady of the Holy Rosary, we entrust our hopes and desires to you, pray for us!\nIn the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n\nConcluding Prayers: 1 Our Father, 3 Hail Mary, 1 Glory Be"
    // },
    // {
    //   key: 1,
    //   name: "Day 2: Unity Among Participants",
    //   description: "Friday 9/22/23\n\nIn the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n\nDear Lord, we thank You for giving us Your mother as Our Lady of the Holy Rosary. Help us to turn to her as our mother in all of our needs! We are grateful for the gift of Our Lady of the Holy Rosary, and we humbly seek her intercession in our daily lives.\n\nAs we embark on this journey in preparation for our Đại Hội Liên Đoàn gathering, we humbly request in this novena for unity and harmony among all participants. May our differences be a source of strength, and may we come together with a shared vision, love, and purpose. Our Lady of the Holy Rosary, pray for us that we may work together in solidarity to carry out our event successfully.\n\nOur Lady of the Holy Rosary, we entrust our hopes and desires to you, pray for us!\n\nIn the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n\nConcluding Prayers: 1 Our Father, 3 Hail Mary, 1 Glory Be"
    // },
    {
      key: 2,
      name: "Day 3: Strength and Perseverance",
      description: "Saturday 9/23/23\n\nIn the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n\nDear Lord, we thank You for giving us Your mother as Our Lady of the Holy Rosary. Help us to turn to her as our mother in all of our needs! We are grateful for the gift of Our Lady of the Holy Rosary, and we humbly seek her intercession in our daily lives.\n\nAs we embark on this journey in preparation for our Đại Hội Liên Đoàn gathering, we humbly request in this novena for all participants to have the strength and perseverance. May we overcome obstacles and lift each other up to create a fun and loving environment for the weekend. Our Lady of the Holy Rosary, pray for us that we may be strengthened physically, mentally, and spiritually to have a successful event.\n\nOur Lady of the Holy Rosary, we entrust our hopes and desires to you, pray for us!\n\nIn the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n\nConcluding Prayers: 1 Our Father, 3 Hail Mary, 1 Glory Be"
    }
  ]

  return (
    <div className='resources-dhld'>
      <div className="resources-dhld-novenas-title">
        9-Day Spiritual Novena
      </div>
      <div className="resources-dhld-novenas">
        <div className="resources-dhld-novenas-intro">
          As the day of our Đại Hội Liên Đoàn is fast approaching, we would like to invite and encourage all chapters and members to join us on a 9-Day Spiritual Novena. This is a good opportunity for us to pray, contemplate, and prepare ourselves spiritually, ensuring that we move forward to Đại Hội with unity, love, and a shared purpose. Join us each day in prayer as we countdown for Đại Hội Liên Đoàn to be the most memorable and best one yet!
        </div>
        {novenas.map((novena) => (
          <div key={novena.key} className="resources-dhld-novena">
            <div className="resources-dhld-novena-name">
              {novena.name}
            </div>
            <div className="resources-dhld-novena-description">
              {novena.description}
            </div>
          </div>))}
      </div>
      <div className="resources-dhld-flyers">
        <img className='resources-dhld-flyer' src='/resources/dhld/main.jpg' />
        <img className='resources-dhld-flyer' src='/resources/dhld/DHLD 2023 Sports Competition Flier.jpeg' />
        <img className='resources-dhld-flyer' src='/resources/dhld/LDDMMC  DHLD Van Nghe 2023.jpeg' />
      </div>
      <div className="resources-dhld-downloads">
        <div className="resources-dhld-downloads-title">
          DOWNLOADS
        </div>
        <div className="resources-dhld-downloads-spacer" />
        <div className="resources-dhld-downloads-files">
          <a className="resources-dhld-downloads-file" href="/resources/dhld/DHLD 2023 Sports Rules .pdf" download>Sports Rules</a>
          <a className="resources-dhld-downloads-file" href="/resources/dhld/DHLD 2023 - Van Nghe Rules .pdf" download>Van Nghe Rules</a>
          <a className="resources-dhld-downloads-file" href="/resources/dhld/1. Thong Bao DHLD 2023.pdf" download>Thong Bao DHLD 2023</a>
          <a className="resources-dhld-downloads-file" href="/resources/dhld/2. Don Ghi Danh DHLD 2023.pdf" download>Don Ghi Danh DHLD 2023</a>
          <a className="resources-dhld-downloads-file" href="/resources/dhld/3. VEYM-Participant-Agreement-Form Updated 9-20-2020.pdf" download>VEYM-Participant-Agreement-Form</a>
          <a className="resources-dhld-downloads-file" href="/resources/dhld/4. DHLD 2023 Registration Instructions.pdf" download>DHLD 2023 Registration Instructions</a>
          <a className="resources-dhld-downloads-file" href="/resources/dhld/Registration - Online Submission.xlsx" download>Registration - Online Submission</a>
        </div>
      </div>
    </div>
  )
}