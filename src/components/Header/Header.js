import logo from '../../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from 'react';


function Header() {

    let Links = [
        {name:'Trang chủ', link:'/'},
        {name:'Về chúng tôi', link:'/forme'},
        {name:'Sản phẩm và dịch vụ', link:'/product'},
        {name:'Tin tức', link:'/news'},
        {name:'Trải nghiệm', link:'/experience'},
        {name:'Liên hệ', link:'/relationship'},
    ]

    // setting nav mobile
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }

    // setting search mobile
    const [search, setSearch] = useState(false)
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])

    const handleSearch = () => {
        setSearch(!search)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setFilterData(data);
            })
            .catch(err =>  console.log(err))
    },[])


    const handleFilter = (value) => {
        const res = filterData.filter(f => f.name.toLowerCase().includes(value))
        setData(res);
        if(value==='') {
            setData([])
        }
    }

    // scroll setting nav
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <Navbar className={color ? 'w-full fixed flex items-center left-0 top-0 py-[12px] pl-[6.4%] pr-[6.933%] lg:py-[20px] lg:pl-[8.958%] bg-[#000] lg:pr-[5.069%] z-50' : 'w-full fixed left-0 top-0 py-[12px] pl-[6.4%] pr-[6.933%] lg:pt-[43px] lg:pl-[8.958%] lg:pr-[5.069%] z-50'}>
            <Container className='w-full flex justify-between items-center'>
                <Navbar.Brand className='w-[30.4%] h-[48.4375%] lg:w-[231px] lg:h-[60px]' href="#home">
                    <img className='shrink-0' src={logo} alt='logo'/>
                </Navbar.Brand>
                <div className='lg:hidden flex-1 z-30 flex gap-[8px] items-center justify-end'>
                    <button className={search ? 'hidden' : 'p-[8px] w-[40px] h-[40px] rounded-[50px]'} 
                        onClick={handleNav}
                    >
                        <IoMenu className={color ? 'w-[24px] h-[24px] text-[#fff] rounded-[50px]' : 'w-[24px] h-[24px] text-[#000]'}/>
                    </button>
                    <div className={search ? ' w-full relative' : 'hidden'}>
                        <input className={search ? 'w-full px-[10px] py-[8px] outline-none text-[12px] rounded-[9px]' : 'hidden'}
                            placeholder='Search...' type='text'
                            onChange={e => handleFilter(e.target.value)}
                            />
                        <div className={search ? 'lg:hidden max-h-[200px] absolute right-0 top-[100%] mt-[10px] w-full bg-[#fff] rounded-[9px] overflow-y-auto scrollbar-thin writing-mode-vertical-rl scrollbar-thumb-[#ccc] snap-always scrollbar-track-[#fff] shadow-itemBody1 overflow-hidden' : 'hidden'}>
                            {
                                data.map((item, index) => (
                                    <div className='px-[14px] py-[10px] text-[14px] leading-[26px] hover:bg-[#ccc] hover:cursor-pointer' key={index}>
                                        {item.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button className='p-[8px] w-[40px] h-[40px] rounded-[50px]'
                        onClick={handleSearch}
                    >
                        <IoIosSearch className={color ? 'w-[24px] h-[24px] text-[#fff] rounded-[50px]' : 'w-[24px] h-[24px] text-[#000]'}/>
                    </button>
                </div>
                <Navbar.Collapse className={nav ? 'lg:hidden ease-in fixed left-0 top-0' : 'lg:hidden ease-in absolute top-0 h-screen left-[-100%] z-50'} id="basic-navbar-nav" >
                    <Nav className={nav ? ' fixed flex flex-col bg-slate-600 w-full h-screen' : 'top-0 h-screen left-[-100%] z-10'}>
                        {
                            Links.map((link, index)=>(
                                <NavLink className='nav-link font-semibold' to={link.link} key={index}>{link.name}</NavLink>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='hidden lg:block' id="basic-navbar-nav" >
                    <Nav className='lg:me-auto lg:flex lg:justify-between lg:gap-[50px] items-center'>
                        {
                            Links.map((link, index)=>(
                                <NavLink key={index} className={color ? 'nav-link font-semibold text-[#fff] hover:opacity-[70%]' : 'nav-link font-semibold hover:opacity-[70%]'} to={link.link}>{link.name}</NavLink>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;