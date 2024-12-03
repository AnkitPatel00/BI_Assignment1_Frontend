import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () =>
{
  const [search,setSearch] = useState('')
  const handleInput = (e) =>
  {
    setSearch(e.target.value)
  }
 
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          
    <Link to="/" className="navbar-brand text-danger fw-bold font-monospace">Meetup</Link>
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInput} />
 </form> */}
           
        </div>
         
      </nav>
      
    </header>
)
}

export default Header
