import logo from '../../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, Outlet} from 'react-router-dom';


function Header() {
    return (
        <Navbar bg="light" expand="lg" className='fixed left-0 top-0 pt-[43px] pl-[129px] pr-[73px] z-50'>
            <Container className='flex justify-between items-center'>
                <Navbar.Brand href="#home">
                    <img className='w-[231px] h-[60px] shrink-0' src={logo}/>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className=' me-auto flex justify-between gap-[50px] items-center'>
                        {/* <NavLink to="/" className='nav-link'>Home</NavLink> */}
                        <NavLink className='nav-link font-semibold' to='/'>Trang chủ</NavLink>
                        <NavLink className='nav-link font-semibold' to='/forme'>Về chúng tôi</NavLink>
                        <NavLink className='nav-link font-semibold' to='/'>Sản phẩm và dịch vụ</NavLink>
                        <NavLink className='nav-link font-semibold' to='/'>Tin tức</NavLink>
                        <NavLink className='nav-link font-semibold' to='/'>Trải nghiệm</NavLink>
                        <NavLink className='nav-link font-semibold' to='/'>Liên hệ</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;