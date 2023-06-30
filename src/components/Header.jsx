import { Link, NavLink } from 'react-router-dom'

function HeaderMain() {
  return (
    <Link className='header-main' to='/'>
      <img className='header-logo' src="/images/logo.png" />
      <p className='header-name'>
        Liên Đoàn Đức Mẹ Mân Côi
      </p>
    </Link>
  )
}

function HeaderNav() {
  return (
    <nav className='header-navbar'>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='/'>
        HOME
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='/about'>
        ABOUT
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='/chapters'>
        CHAPTERS
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='/resources'>
        RESOURCES
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='/events'>
        EVENTS
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='/contact'>
        CONTACT
      </NavLink>
      <a className='header-icon-container' href='https://www.facebook.com/profile.php?id=100090993057919' target='_blank'>
        <img className='header-facebook-icon' src='/svg/facebook.svg' />
      </a>
      <a className='header-icon-container' href='https://www.instagram.com/lddmmc/' target='_blank'>
        <img className='header-instagram-icon' src='/svg/instagram.svg' />
      </a>
    </nav>
  )
}

export default function Header() {
  return (
    <header className='header'>
      <HeaderMain />
      <HeaderNav />
    </header>
  )
}
