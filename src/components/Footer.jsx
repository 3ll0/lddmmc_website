function Doan() {
  return (
    <div className='footer-doan'>
      <div className='footer-doan-title'>
        Liên Đoàn Đức Mẹ Mân Côi
      </div>
      <div className='footer-doan-alt'>
        Our Lady of the Holy Rosary
      </div>
      <div className='footer-doan-quote'>
        "lien doan quote here" -APY
      </div>
    </div>
  )
}

function Links() {
  return (
    <div className='footer-link'>
      <div className='footer-link-title'>
        Links
      </div>
      <a className='footer-link-veym' href="https://veym.net">
        VEYM Main Website
      </a>
      <a className='footer-link-membership' href="https://members.veym.net">
        Membership
      </a>
      <a className='footer-link-store' href="https://store.veym.net">
        VEYM Store
      </a>
    </div>
  )
}

function Contact() {
  return (
    <div className='footer-contact'>
      <div className='footer-contact-title'>
        Contact Us
      </div>
      <a className='footer-contact-link' href="mailto:btvlddmmc@veym.net">
        <svg className='footer-contact-icon' viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
          <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/>
        </svg>
        <div className='footer-contact-email'>
          btvlddmmc@veym.net
        </div>
      </a>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className='footer'>
      <Doan />
      <Links />
      <Contact />
    </footer>
  )
}
