function Doan() {
  return (
    <div className='footer-doan'>
      <div className='footer-doan-title'>
        Liên Đoàn Đức Mẹ Mân Côi
      </div>
      <div className='footer-doan-alt'>
        Our Lady of the Rosary
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
      <div className='footer-contact-description'>
        <div className='footer-contact-description-title'>
          Contact us at:
        </div>
        <a className='footer-contact-link' href="mailto:btvlddmmc@veym.net">
          btvlddmmc@veym.net
        </a>
      </div>
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
