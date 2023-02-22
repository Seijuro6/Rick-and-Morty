import SearchBar from '../SEarchBar/SearchBar'
import { Link } from 'react-router-dom'
import style from './Nav.module.css'


const Nav = ({onSearch}) => {
    return(
    <div>
        
        <div className={style.Navbar}>
            <Link to='/about'>
            <button>ABOUT</button> 
            </Link>
            <Link to='/home'>
            <button>HOME</button>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    |</div>
    )
};

export default Nav