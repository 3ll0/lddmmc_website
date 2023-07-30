import { createServer, Model } from "miragejs"

createServer({
  models: {
    annoucement: Model,
    chapters: Model,
    events: Model,
    vans: Model,
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
      image: "/events/DHLD.png"
    })
    server.create("event", 
    {
      id: 1,
      name: "DHLD", 
      location: "St. Matthias Catholic Church",
      description: "EPHESIANS 2:10",
      dateNumber: "31",
      dateMonth: "September",
      image: "/events/DHLD.png"
    })
    server.create("event", 
    {
      id: 2,
      name: "DHLD", 
      location: "St. Matthias Catholic Church",
      description: "EPHESIANS 2:10",
      dateNumber: "1",
      dateMonth: "October",
      image: "/events/DHLD.png"
    })

    server.create("van", { id: "2", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged", hostId: "123" })
    server.create("van", { id: "3", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", hostId: "456" })
    server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", hostId: "789" })
    server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", hostId: "789" })
    server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", hostId: "123" })
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


    this.get("/vans", (schema, request) => {
      return schema.vans.all()
    })

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id
      return schema.vans.find(id)
    })

    this.get("/host/vans", (schema, request) => {
      // Hard-code the hostId for now
      return schema.vans.where({ hostId: "123" })
    })

    this.get("/host/vans/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id
      return schema.vans.findBy({ id, hostId: "123" })
    })
  }
})