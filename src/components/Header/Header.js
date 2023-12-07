import logo from '../../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink} from 'react-router-dom';
import MenuIcon from '../../img/Header/Menu.svg'
import SearchIcon from '../../img/Header/Search.svg'
import { useState } from 'react';


function Header() {

    let Links = [
        {name:'Trang chủ', link:'/'},
        {name:'Về chúng tôi', link:'/forme'},
        {name:'Sản phẩm và dịch vụ', link:'/'},
        {name:'Tin tức', link:'/'},
        {name:'Trải nghiệm', link:'/'},
        {name:'Liên hệ', link:'/'},
    ]

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <Navbar className='w-full fixed left-0 top-0 py-[12px] pl-[6.4%] pr-[6.933%] lg:pt-[43px] lg:pl-[8.958%] lg:pr-[5.069%] z-50'>
            <Container className='w-full flex justify-between items-center'>
                <Navbar.Brand href="#home">
                    <img className='w-[30.4%] h-[48.4375%] lg:w-[231px] lg:h-[60px] shrink-0' src={logo} alt='logo'/>
                </Navbar.Brand>
                <div className='lg:hidden z-30 flex gap-[8px] items-center'>
                    <button className='p-[8px] w-[40px] h-[40px] rounded-[50px]' onClick={handleNav}>
                        <img className='w-[24px] h-[24px]' src={MenuIcon} alt='menu'/>
                    </button>
                    <button className='p-[8px] w-[40px] h-[40px] rounded-[50px]'>
                        <img src={SearchIcon} alt='search'/>
                    </button>
                </div>
                <Navbar.Collapse className={nav ? 'lg:hidden ease-in fixed left-0 top-0' : 'lg:hidden ease-in absolute top-0 h-screen left-[-100%] z-50'} id="basic-navbar-nav" >
                    <Nav className={nav ? ' fixed flex flex-col bg-slate-600 w-full h-screen' : 'top-0 h-screen left-[-100%] z-10'}>
                        {
                            Links.map((link)=>(
                                <NavLink className='nav-link font-semibold' to={link.link}>{link.name}</NavLink>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='hidden lg:block' id="basic-navbar-nav" >
                    <Nav className='lg:me-auto lg:flex lg:justify-between lg:gap-[50px] items-center'>
                        {
                            Links.map((link)=>(
                                <NavLink className='nav-link font-semibold' to={link.link}>{link.name}</NavLink>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;