import { createServer, Model } from "miragejs"

createServer({
  models: {
    annoucement: Model,
    chapter: Model,
    event: Model,
    spiritual: Model,
    btv: Model,
    academic: Model,
    lead: Model
  },

  seeds(server) {
    /* ANNOUCEMENTS */
    server.create("annoucement", 
    {
      id: 0,
      name: "Liên Đoàn Đức Mẹ Mân Côi", 
      time: "1 day ago", 
      content: "Announcing the winner of the Đại Hội Nguồn Sống 2023 T-Shirt Contest, drum roll please…congratulations to Tr. Joseph & Tr. Natalie from Đoàn St. Barbara! Over a thousand people will be wearing YOUR design at Đại Hội this year! See you on the Đại Hội stage where you will receive your cash prize and your Đoàn will receive VIP seating!Thank you to everyone who participated in our T-shirt contest this year. We can’t wait to see you all at Đại Hội Nguồn Sống 2023!",
    })
    server.create("annoucement", 
    {
      id: 1,
      name: "Liên Đoàn Đức Mẹ Mân Côi", 
      time: "2 day ago", 
      content: "blah blah",
    })

    /* CHAPTERS */
    server.create("chapter", 
    {
      id: 0,
      name: "Anrê Phú Yên", 
      description: "Or Doan is located in Hoston, TX blah blah stuff stuff blah blah stuff stuff blah blah stuff stuff blah blah stuff stuff blah stuff stuff blah blah stuff stuff blah blah stuff stuff blah stuff stuff blah blah stuff stuff blah blah stuff stuff blah stuff stuff blah blah stuff stuff blah blah stuff stuff", 
      quote: "blah blah",
      website: "www.youtube.com",
      logo: "/chapters/APY.jpg"
    })
    server.create("chapter", 
    {
      id: 1,
      name: "Anrê Dũng Lạc", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      website: "https://www.youtube.com",
      logo: "/chapters/ADL.jpg"
    })
    server.create("chapter", 
    {
      id: 2,
      name: "Chúa Ba Ngôi", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      website: "https://www.youtube.com",
      logo: "/chapters/CBN.jpg"
    })
    server.create("chapter", 
    {
      id: 3,
      name: "Savio", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      website: "https://www.youtube.com",
      logo: "/chapters/Savio.png"
    })
    server.create("chapter", 
    {
      id: 4,
      name: "Kitô Vua", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      website: "https://www.youtube.com",
      logo: "/chapters/KTV.png"
    })
    server.create("chapter", 
    {
      id: 5,
      name: "Nữ Vương Hòa Bình", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      website: "https://www.youtube.com",
      logo: "/chapters/NVHB.png"
    })
    server.create("chapter", 
    {
      id: 6,
      name: "Don Bosco", 
      description: "less stuff blah blah", 
      quote: "blah bro blah",
      website: "https://www.youtube.com",
      logo: "/chapters/LD.png"
    })

    /* EVENTS */
    server.create("event", 
    {
      id: 0,
      name: "DHLD", 
      location: "St. Matthias Catholic Church", 
      description: "EPHESIANS 2:10",
      dateNumber: "30",
      dateMonth: "September",
    })
    server.create("event", 
    {
      id: 1,
      name: "DHLD", 
      location: "St. Matthias Catholic Church",
      description: "EPHESIANS 2:10",
      dateNumber: "31",
      dateMonth: "September",
    })
    server.create("event", 
    {
      id: 2,
      name: "DHLD", 
      location: "St. Matthias Catholic Church",
      description: "EPHESIANS 2:10",
      dateNumber: "1",
      dateMonth: "October",
    })

    /* ABOUT */
    server.create("spiritual", 
    {
      id: 0,
      roleV: "Tuyên Úy", 
      roleE: "League Chaplain", 
      name: "Gioan Baotixita - Steven Son Tran",
      image: "/about/chaplain.jpg"
    })
    
    server.create("btv", 
    {
      id: 0,
      roleV: "Liên Đoàn Trưởng",
      roleE: "League President",
      name: "Giuse - Jimmy Văn Hà", 
      image: "/about/president.jpg"
    })
    server.create("btv", 
    {
      id: 1,
      roleV: "Phó Quản Trị", 
      roleE: "League Vice President Of Administrative Affairs", 
      name: "Theresa - Ngoc Diep Khuu", 
      image: "/about/vice_administrative.jpg"
    })
    server.create("btv", 
    {
      id: 2,
      roleV: "Phó Nghiên Huấn", 
      roleE: "League Vice President Of Academic Affairs", 
      name: "Têrêsa - Kathy Thuỳ Cao",
      image: "/about/vice_academic.jpg"
    })
    server.create("btv", 
    {
      id: 3,
      roleV: "Thư Ký", 
      roleE: "League Secretary", 
      name: "Anna Têrêsa - Jackie Tuyết Nguyễn",
      image: "/about/secretary.jpg"
    })
    server.create("btv", 
    {
      id: 4,
      roleV: "Thủ Quỹ", 
      roleE: "League Treasurer", 
      name: "Maria Goretti - Jacqueline Nguyen",
      image: "/about/treasurer.jpg"
    })

    server.create("academic", 
    {
      id: 0,
      roleV: "Ủy Viên Ngành Ấu Nhi", 
      roleE: "League Academic Seedling Specialist", 
      name: "Giuse - Fanrcy Nguyen",
      image: "/about/seedling.jpg"
    })
    server.create("academic", 
    {
      id: 1,
      roleV: "Ủy Viên Ngành Ấu Nhi", 
      roleE: "League Academic Search Specialist", 
      name: "Anrê - Andy Kim Nguyen",
      image: "/about/search.jpg"
    })
    server.create("academic", 
    {
      id: 2,
      roleV: "Ủy Viên Ngành Ấu Nhi", 
      roleE: "League Academic Companion Specialist", 
      name: "Johnny Dinh",
      image: "/about/companion.jpg"
    })
    server.create("academic", 
    {
      id: 3,
      roleV: "Ủy Viên Ngành Ấu Nhi", 
      roleE: "League Academic KoE Specialist", 
      name: "Anna - Adeline Nhan Ai Pham",
      image: "/about/koe.jpg"
    })

    server.create("lead", 
    {
      id: 0,
      roleV: "Ủy Viên Kỹ Thuật", 
      roleE: "League Technical Lead", 
      name: "Anton - Huy Nguyen",
      image: "/about/technical.jpg"
    })
    server.create("lead", 
    {
      id: 1,
      roleV: "Ủy Viên Kỹ Thuật Vi Tính", 
      roleE: "League IT Lead", 
      name: "Peter - Ryan Hoang",
      image: "/about/it.jpg"
    })
    server.create("lead", 
    {
      id: 2,
      roleV: "Ủy Viên Ơn Gọi", 
      roleE: "League Vocational Lead", 
      name: "Mary Thomas - Cindy Thanh-Lan Tran",
      image: "/about/vocational.jpg"
    })
    server.create("lead", 
    {
      id: 3,
      roleV: "Ủy Viên Phụng Vụ", 
      roleE: "League Liturgical Lead", 
      name: "Maria - Tristine Thuỷ Dinh",
      image: "/about/liturgical.jpg"
    })
    server.create("lead", 
    {
      id: 4,
      roleV: "Ủy Viên Truyền Thông", 
      roleE: "League Communications Lead", 
      name: "Cêcilia - Allison Diễm-Ngọc Hà",
      image: "/about/communications.jpg"
    })
    server.create("lead", 
    {
      id: 5,
      roleV: "Ủy Viên Đại Hội", 
      roleE: "League Conference Lead", 
      name: "Augustine of Hippo - Vincent Nguyen Pham",
      image: "/about/conference.jpg"
    })
    server.create("lead", 
    {
      id: 6,
      roleV: "Ủy Viên Nhân Sự", 
      roleE: "League Human Resources Lead", 
      name: "Giuse - Kelvin Nhat Tran",
      image: "/about/human_resources.jpg"
    })
    server.create("lead", 
    {
      id: 7,
      roleV: "Ủy Viên Xã Hội", 
      roleE: "League Social Works Lead", 
      name: "Phero - Lam Ngoc Khanh Vu",
      image: "/about/social_works.jpg"
    })
    server.create("lead", 
    {
      id: 8,
      roleV: "Ủy Viên Văn Nghệ", 
      roleE: "League Entertainment Lead", 
      name: "Maria Faustina - Michelle Lý Hứa",
      image: "/about/entertainment.jpg"
    })
  },

  routes() {
    this.namespace = "api"
    this.logging = false

    this.get("/annoucements", (schema, request) => {
      return schema.annoucements.all()
    })
    this.get("/chapters", (schema, request) => {
      return schema.chapters.all()
    })
    this.get("/events", (schema, request) => {
      return schema.events.all()
    })
    this.get("/spirituals", (schema, request) => {
      return schema.spirituals.all()
    })
    this.get("/btvs", (schema, request) => {
      return schema.btvs.all()
    })
    this.get("/academics", (schema, request) => {
      return schema.academics.all()
    })
    this.get("/leads", (schema, request) => {
      return schema.leads.all()
    })
  }
})