import React, { useEffect } from 'react'

export default function Chapters() {
  const chapters = [
    {
      id: "apy",
      name: "Anrê Phú Yên",
      parish: "Vietnamese Martrys",
      location: "10610 Kingspoint Rd, Houston, TX 77075",
      sinhhoat: "Saturday: 1:00 - 2:45",
      description: "Doan TNTT at GXCTTDVN was established in 1987 with the name Doan CTTDVN. In 2005 the name was changed to Doan Anre Phu Yen (APY) to help us focus on and follow the footsteps of one young VN martyr instead of all 118 VN martyrs. The feast day of our patron St. Anre Phu Yen is July 26, but we usually have big celebration of our anniversary around le CTTDVN, in late November or early December There are currently around 200 members. After TNTT time, most of our young members attend GLVN classes. We stay back to take care with the readings, ushering, and extraordinary Eucharistic ministry at the 6PM mass.",
      links: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/apytntt/'
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/tnttapy/'
        }
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
      sinhhoat: "School Year: 12 PM to 2PM, Summer time 3 PM to 5PM",
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
      parish: "Giáo Xứ Đức Kitô Ngôi Lời Nhập Thể or Christ the Incarnate Word Catholic Church",
      location: "8503 S. Kirkwood Rd Houston, Tx 77099",
      sinhhoat: "Sunday 10AM-12PM",
      description: "Our Đoàn TNTT was first established at Notre Dame Catholic Church in 1984, donned with the name Mẹ Là Mẹ Thiên Chúa. After a period of several years, the chapter name was officially changed to Nữ Vương Hòa Bình in 1990, honoring Mother Mary, our Lady of Peace. Now, we officially sinh hoạt at GX Đức Kitô Ngôi Lời Nhập Thể and celebrate the Queenship of Mother Mary and our Đoàn Lễ Bổn Mạng (Feast Day) on 8/22 or dates that are nearby. Đoàn Nữ Vương Hòa Bình continues to sinh hoạt today with around 170 members and 25 youth leaders, with Lm. Gioan Viannêy Nguyễn Ngọc Thụ as our current Cha Tuyên Úy and Tr. Giuse Nguyễn Fanrcy as our current Đoàn Trưởng.",
      links: [
        {
          name: 'Instagram',
          link: 'https://instagram.com/tnttnvhb?igshid=NzZlODBkYWE4Ng=='
        }
      ],
      logo: "/chapters/NVHB.png"
    },
    {
      id: "db",
      name: "Don Bosco",
      parish: "Đôi dòng tiểu sử Đoàn TNTT Don Bosco",
      location: "",
      sinhhoat: "",
      description: "\tĐoàn được thành lập dưới sự yêu thương, chăm sóc, đùm bọc của Cộng đoàn Công Giáo Việt Nam tại Giáo xứ Thánh Justin Tử Đạo. Đặc biệt nhất, quan tâm nhất và lo lắng nhiều nhất là Cha Quản Nhiệm kiêm Tuyên Uý Đoàn – Linh Mục Giuse Nguyễn Phong. Sau nhiều lần bàn bạc với ban điều hành nhiệm kỳ trước và ban điều hành nhiệm kỳ đương thời, Cha đã quyết định cho thành lập Đoàn Thiếu Nhi Thánh Thể và chọn tên thánh bổn mạng cho Đoàn là Don Bosco, ngày lễ mừng kính là ngày 31 tháng 01 hằng năm.\n\n\tSau nhiều tháng kêu mời nhân sự, huấn luyện căn bản rồi gởi các em đi sa mạc huấn luyện cấp I để các em trở thành Huynh Trưởng chính thức của phong trào Thiếu Nhi Thánh Thể Việt Nam tại Hoa Kỳ.\n\n\tĐoàn được thành lập và chính thức ra mắt vào ngày Lễ Kính Mình và Máu Thánh Chúa ngày 11 tháng 06 năm 2023 với thành phần lãnh đạo:\n\t• Linh Mục Giuse Nguyễn Phong – Tuyên Uý Đoàn\n\t• Phó Tế Giuse Nguyễn Mạnh Sơn (Sean) – Trợ Uý Đoàn\n\nBan Chấp Hành Đoàn/ Ban Huynh Trưởng hiện tại:\n\t• Trưởng GioanBaotixita Võ Minh Hoàng - Đoàn trưởng\n\t• Trưởng Anna Nguyễn Hà Ngọc Trân- Đoàn Phó Quản Trị\n\t• Trưởng Albert Nguyễn Minh Thăng Emanuel- Đoàn Phó Nghiên Huấn\n\t• Trưởng Maria Nguyễn Vy Christina- Thư Ký\n\t• Trưởng Maria Nguyễn Christ Anh- Thủ Quỹ\n\t• Trưởng Agnes Võ Nguyễn Thu Hương- Ngành Trưởng Ngành Ấu Sữa\n\t• Trưởng Catarina Hoàng Diễmthuý Catherine- Ngành Trưởng Ngành Ấu Nhi\n\t• Trưởng Maria Nguyễn Vy Christina- Ngành Trưởng Ngành Thiếu Nhi\n\t• Trưởng Anna Nguyễn Hà Ngọc Trân- Ngành Trưởng Ngành Nghĩa Sĩ\n\t• Trưởng Albert Nguyễn Minh Thăng Emanuel- Ngành Trưởng Ngành Hiệp Sĩ\n\t• Trưởng Maria Võ Nguyễn Thuỳ Trâm\n\nSĩ số đoàn sinh hiện tại là 76 em\n\t\to 4 tuổi – 6 tuổi Ấu Sữa 22 em\n\t\to 7 tuổi – 9 tuổi Ấu Nhi 19 em\n\t\to 10 tuổi – 12 tuổi Thiếu Nhi 16 em\n\t\to 13 tuổi – 15 tuổi Nghĩa Sĩ 9 em\n\t\to 16 tuổi – 17 tuổi Hiệp Sĩ 3 em\n\t\to 18 tuổi trở lên Hiệp Sĩ Trưởng Thành 7 em\n\tĐoàn tạm thời huấn luyện và chọn được 18 em làm Đội Phó.\n\tChương trình sinh hoạt của Đoàn hằng tuần:\n\t\t• Thời gian: Mỗi sáng Chúa Nhật từ 10:00 AM - 12:00 PM (Noon)\n\t\t• Địa điểm: CFC Building\n\t\t\tv 10:00 – 10:15: Tập trung, ăn nhẹ\n\t\t\tv 10:15 – 10:30: Kinh dâng ngày\n\t\t\tv 10:30 – 11:00: Sinh hoạt tự nhiên\n\t\t\tv 11:00 – 11:45: Sinh hoạt siêu nhiên theo ngành\n\t\t\tv 11:45 – 11:50: Kinh bế mạc\n\t\t\tv 11:50 – 12:00: Các đội vào nhà thờ theo ngành\n\n\tTrong dịp Tĩnh Tâm/ Picnic ngày 22 tháng 7 năm 2023, Đoàn có buổi hội thảo và đã thành lập được Hội Phụ Huynh TNTT. Các quý vị sau đây đã được đề cử và tình nguyện tham gia vào Ban Điều Hành hội Phụ Huynh TNTT:\n\t• Anh Giuse Vũ Chung – Hội Trưởng\n\t• Anh Vincent Nguyễn Chinh – Hội Phó\n\t• Chị Martha Nguyễn Diễm – Thư Ký\n\t• Chị Anna Nguyễn Phương Ngôn – Thủ Quỹ\n\n\tĐoàn chính thức khai mạc sinh hoạt cho niên khoá 2023- 2024 vào ngày 13 tháng 8 năm 2023 kề từ ngày Lễ trọng kính Đức Mẹ Hồn Xác lên trời (ngày 15 tháng 8 hằng năm). Đoàn con kính dâng lên Mẹ và qua lời chuyển cầu của Mẹ lên Chúa Giêsu con Mẹ ban cho Đoàn chúng con luôn thăng tiến trên con đường phục vụ tha nhân, cũng xin Thánh Quan Thầy Don Bosco hướng dẫn chúng con biết noi gương Thánh Nhân yêu mến và đem các em nhỏ đến gần Chúa Giêsu Thánh Thể hơn.",
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
                {displayChapter.parish != "" ?
                  <svg className='chapter-details-parish-icon' viewBox="0 0 512 512">
                  <g>
                    <g>
                      <path d="M477.42,340.613l-1.419-0.467c-0.001,0-0.002-0.001-0.003-0.001l-116.787-38.448V163.76c0-2.95-1.26-5.598-3.261-7.46
                        c-0.032-0.033-0.054-0.065-0.091-0.098l-89.919-81.474V44.102h14.021c5.633,0,10.199-4.566,10.199-10.199
                        c0-5.633-4.566-10.199-10.199-10.199h-14.021V10.199C265.941,4.566,261.375,0,255.742,0c-5.633,0-10.199,4.566-10.199,10.199
                        v13.505h-14.02c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h14.02v30.632l-89.721,81.475
                        c-0.022,0.02-0.031,0.041-0.05,0.061c-2.019,1.863-3.292,4.524-3.292,7.489v137.942l-116.48,38.442
                        c-0.002,0.001-0.005,0.001-0.007,0.002l-1.419,0.468c-4.18,1.38-7.004,5.284-7.004,9.686v151.5
                        c0,5.633,4.566,10.199,10.199,10.199h436.464c5.633,0,10.199-4.566,10.199-10.199v-151.5
                        C484.431,345.897,481.604,341.99,477.42,340.613z M152.479,491.602H47.966v-131.57h104.512V491.602z M152.479,339.633h-49.846
                        l49.846-16.45V339.633z M255.75,93.02l66.816,60.542H189.08L255.75,93.02z M297.513,491.602h-83.337v-50.933
                        c0-22.61,15.866-41.005,35.368-41.005h12.601c19.502,0,35.368,18.395,35.368,41.005V491.602z M338.813,491.602h-20.901v-50.933
                        c0-33.858-25.017-61.403-55.766-61.403h-12.601c-30.75,0-55.766,27.545-55.766,61.403v50.933h-20.901V349.833V173.96h165.936
                        V491.602z M359.211,323.172l50.002,16.462h-50.002V323.172z M464.033,491.602H359.211v-131.57h104.821V491.602z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M255.742,214.367c-14.614,0-26.505,11.89-26.505,26.505v72.328c0,5.632,4.566,10.199,10.199,10.199h32.61
                        c5.633,0,10.199-4.566,10.199-10.199v-72.328C282.246,226.257,270.357,214.367,255.742,214.367z M261.848,303h-12.212v-62.128
                        c0-3.367,2.74-6.106,6.106-6.106c3.367,0,6.105,2.74,6.105,6.106V303z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M390.752,463.775h-2.061c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h2.061
                        c5.633,0,10.199-4.566,10.199-10.199C400.952,468.341,396.385,463.775,390.752,463.775z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M446.404,463.775H422.7c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h23.704
                        c5.633,0,10.199-4.566,10.199-10.199C456.604,468.341,452.037,463.775,446.404,463.775z"/>
                    </g>
                  </g>
                </svg>
                : ""}
                <div className='chapter-details-parish-content'>
                  {displayChapter.parish}
                </div>
              </div>
              <div className='chapter-details-location'>
                {displayChapter.location != "" ?
                  <svg className='chapter-details-location-icon' viewBox="0 0 22 22">
                    <path fillRule="evenodd" d="M15.3442 5.39811C12.9087 3.13396 8.93592 3.13396 6.50035 5.39811C4.42306 7.3292 4.11365 10.3235 5.72875 12.5757L10.9223 19.8177L16.1158 12.5757C17.7309 10.3235 17.4215 7.3292 15.3442 5.39811ZM5.34288 4.15302C8.43091 1.28233 13.4137 1.28233 16.5017 4.15302C19.1919 6.65385 19.6221 10.6035 17.4973 13.5664L11.7508 21.5795L11.0601 21.0841L11.7508 21.5795C11.3462 22.1437 10.4984 22.1437 10.0937 21.5795L10.5987 21.2174L10.0937 21.5795L4.34727 13.5664C2.22248 10.6035 2.65271 6.65385 5.34288 4.15302Z"/>
                    <circle cx="11" cy="9" r="2"/>
                  </svg>
                : ""}
                <div className='chapter-details-location-content'>
                  {displayChapter.location}
                </div>
              </div>
              <div className='chapter-details-sinhhoat'>
                {displayChapter.sinhhoat != "" ?
                  <svg className='chapter-details-sinhhoat-icon' viewBox="-2 -3 36 36">
                    <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM17 15.594v-9.594c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.283 0.118 0.537 0.308 0.719 0.017 0.020 0.030 0.041 0.048 0.059l4.949 4.95c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.415z"></path>
                  </svg>
                : ""}
                <div className='chapter-details-sinhhoat-content'>
                  {displayChapter.sinhhoat}
                </div>
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