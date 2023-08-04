import { NavLink, Outlet } from "react-router-dom"

function AdminNav() {
  return (
    <nav className='resources-navbar'>
      <NavLink className={({isActive}) => isActive ? 'resources-navbar-active' : 'resources-navbar-inactive'} to='phungvu'>
        Phụng Vụ
      </NavLink>
    </nav>
  )
}

function AcademicNav() {
  return (
    <nav className='resources-navbar'>
      <NavLink className={({isActive}) => isActive ? 'resources-navbar-active' : 'resources-navbar-inactive'} to='au'>
        AU
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'resources-navbar-active' : 'resources-navbar-inactive'} to='thieu'>
        THIEU
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'resources-navbar-active' : 'resources-navbar-inactive'} to='nghia'>
        NGHIA
      </NavLink>
      <NavLink className={({isActive}) => isActive ? 'resources-navbar-active' : 'resources-navbar-inactive'} to='hiep'>
        HIEP
      </NavLink>
    </nav>
  )
}

export default function Resources() {
  return (
    <div className='resources'>
      <div className="resources-navbars">
        <div className="resources-navbar-titles">
          ADMIN
        </div>
        <AdminNav />
        <div className="resources-navbar-titles">
          ACADEMICS
        </div>
        <AcademicNav />
      </div>
      <Outlet />
    </div>
  )
}