import { Link } from 'react-router-dom';

const Navbar = () => {

  const handleClick = (e) => {
    console.log('booking time');
  }

  return ( 
    <nav className="navbar">
      <h1>Game & Beats</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link id="bookNow" to="/book" onClick={handleClick}>Book Now</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;