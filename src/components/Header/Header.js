import logo from '../../img/logo.png'
import { Link} from 'react-router-dom';


function Header() {
    return (
        <div className='flex justify-between pt-[43px] pl-[129px] pr-[73px] items-center'>
            <img className='w-[231px] h-[60px] shrink-0' src={logo}/>
            <ul className='flex justify-between gap-[50px] items-center'>
                <li>
                    <Link to='/'>Trang chủ</Link>
                </li>
                <li>
                    <Link to='/forme'>Về chúng tôi</Link>
                </li>
                <li>
                    <Link to='/'>Sản phẩm và dịch vụ</Link>
                </li>
                <li>
                    <Link to='/'>Tin tức</Link>
                </li>
                <li>
                    <Link to='/'>Trải nghiệm</Link>
                </li>
                <li>
                    <Link to='/'>Liên hệ</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;