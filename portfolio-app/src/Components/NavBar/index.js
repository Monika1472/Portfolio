import React,{useState} from "react"
import {FaReact,FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {HiX} from 'react-icons/hi';
import './index.css';

const data=[
    {
        label:'Home',
        to:'/'
    },
    {
        label:'About Me',
        to:'/About Me'
    },
    {
        label:'Skills',
        to:'/Skills'
    },
    {
        label:'Projects',
        to:'/Projects'
    },
    {
        label:'Contact',
        to:'/Contact'
    },
];


const NavBar=()=> {
    const [toggleIcon,setToggleIcon]=useState(false);
    const handleToggleIcon=()=>{
        setToggleIcon(!toggleIcon)
    }

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        setToggleIcon(false);
    }
  return (
    <header className="header">
    <nav className='navBar'>
        <div className='navBar__container'>
            <Link to={"/"} className='navBar__container__logo'>
                <FaReact size={30}/>
            </Link>
        </div>
        <ul className={`navBar__container__menu ${toggleIcon ? 'show' : ''}`}>
            {
            data.map((item,key)=>
            (
                <li key={key} className='navBar__container__menu_items'>
                    <Link className='navBar__container__menu_items_Links' to={item.to}  onClick={closeMenu} >
                        {item.label}
                    </Link>
                </li>
            ))
            }
        </ul>
        <div className='toggle-icon' onClick={handleToggleIcon}>
            {
                toggleIcon?<HiX size={30}/>:<FaBars size={30}/>
            }
        </div>
    </nav>
    </header>
  )
}

export default NavBar