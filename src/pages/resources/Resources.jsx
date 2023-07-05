import { NavLink, Outlet } from "react-router-dom"

function Nav() {
  return (
    <nav className='header-navbar'>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='/resources'>
        NEUTRAL
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='au'>
        AU
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='thieu'>
        THIEU
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='nghia'>
        NGHIA
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'header-navbar-active' : 'header-navbar-inactive'} to='hiep'>
        HIEP
      </NavLink>
    </nav>
  )
}

export default function Resources() {
  return (
    <div className='resources'>
      <h1>Resources Page</h1>
      <p>Admins</p>
      <p>Adacdemics</p>
      <Nav />
      <Outlet />
    </div>
  )
}