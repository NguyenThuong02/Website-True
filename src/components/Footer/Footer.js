import { Link } from 'react-router-dom'

import logo from '../../img/logo.png'
import emailFooter from '../../img/footer/Message.svg'
import addressFooter from '../../img/footer/Map marker.svg'
import ytbIcon from '../../img/footer/youtube 1.png'
import fbIcon from '../../img/footer/facebook 1.png'
import tiktokIcon from '../../img/footer/icon-06 1.png'
import leftIcon from '../../img/footer/leftIcon.svg'

let logoNetwork = [
    {src: tiktokIcon, href:'https://www.facebook.com/'},
    {src: fbIcon, href:'https://www.facebook.com/'},
    {src: ytbIcon, href:'https://www.facebook.com/'},
]

let LinkFooter = [
    {name:'Tài liệu hướng dẫn ', link:'/'},
    {name:'Chính sách bảo mật', link:'/'},
    {name:'Chính sách thanh toán và bán hàng', link:'/'},
    {name:'Điều khoản và điều kiện sử dụng', link:'/'},
]

function Footer() {
    return (
        <div className='px-[var(--margin-mobile)] py-[30px] lg:pl-[4.857%] lg:pr-[10.9722%] lg:pt-[62.43px] lg:pb-[50px] flex flex-col items-center lg:items-start gap-[32px]'>
        <img className='lg:ml-[-20px] w-[206px] lg:w-[231px] h-[54px] lg:h-[60px] shrink-0' src={logo} alt=''/>
        <div className='w-full flex flex-col lg:flex-row lg:justify-between lg:gap-[100px]'>
            {/* Footer Left */}
            <div className='flex flex-1 flex-col lg:items-start gap-[20px]'>
                <h3 className=' hidden lg:block font-pop text-[20px] font-normal leading-5'>
                    CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUECONNECT 
                </h3>
                <h3 className='lg:hidden text-center font-pop text-[20px] font-normal leading-5'>
                    CTCP CÔNG NGHỆ TRUECONNECT 
                </h3>
                
                <ul className='flex flex-col items-start gap-[12px] lg:gap-[15px]'>
                    <li className='lg:hidden'>
                        <span className=' font-pop font-semibold lg:font-normal leading-[26px] text-[13px] text-primary'>Hotline/Zalo</span>
                        <span className=' font-pop font-normal leading-[26px] text-[13px]'>:</span>
                        <span className=' font-pop font-normal leading-[26px] text-[13px]'> 0888 136 622</span>
                    </li>
                    <div className='flex items-center gap-[8px] text-[#000]'>
                        <img className='w-[20px] h-[20px] ' src={emailFooter} alt=''/>
                        <span className=' font-pop font-normal leading-7 text-[13px] lg:text-[14px]'>
                            dvkh.trueconnect@gmail.comcom
                        </span>
                    </div>
                    <div className='flex items-center gap-[8px] text-[#000]'>
                        <img className='w-[20px] h-[20px]' src={addressFooter} alt=''/>
                        <span className=' font-pop font-normal leading-[26px] text-[13px] lg:text-[14px]'>
                            80, 69b/22/45 Hoang Van Thai, Khuong Trung Thanh Xuan, Ha Noi
                        </span>
                    </div>
                    <li className=' hidden lg:block'>
                        <span className=' font-pop font-normal leading-[26px] text-[14px] text-primary'>Hotline/Zalo</span>
                        <span className=' font-pop font-normal leading-[26px] text-[14px]'>:</span>
                        <span className=' font-pop font-normal leading-[26px] text-[14px]'> 0888 136 622</span>
                    </li>
                    <div className='flex lg:hidden ml-[50%] mt-[15px] mb-[30px] translate-x-[-50%] gap-[6px] lg:gap-[10px]'>
                        {
                            logoNetwork.map((logo, index) => (
                                <a href={logo.href} key={index}>
                                    <img className='w-[34px] h-[34px] shrink-0' src={logo.src} alt=''/>
                                </a>
                            ))
                        }
                    </div>
                    <li className='font-pop font-normal leading-[26px] text-[13px] lg:text-[14px]'>
                        Số giấy chứng nhận đăng ký kinh doanh:
                    </li>
                    <li className='font-pop font-normal leading-[26px] text-[13px] lg:text-[14px]'>
                        Ngày cấp: . Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội
                    </li>
                </ul>
            </div>
                
            {/* Footer Right */}
            <div className='flex-1 flex flex-col justify-between'>
                <div className='hidden w-full lg:flex justify-between gap-[80px]'>
                    <div className='flex-1 flex flex-col items-start gap-[22px]'>
                        <h4 className='font-pop text-[13px] text-text1 font-semibold leading-[24px]'>Tài liệu</h4>
                        <ul className='flex flex-col items-start gap-[14px]'>
                            <Link className=' font-pop text-[13px] text-text1 font-normal leading-[24px]' to='/'>Tài liệu hướng dẫn</Link>
                        </ul>
                    </div>
                    <div className='flex-1 flex flex-col items-start gap-[22px]'>
                        <h4 className='font-pop text-[13px] text-text1 font-semibold leading-[24px]'>TrueConnect</h4>
                        <ul className='w-[100%] flex flex-col items-start gap-[14px]'>
                            <Link className=' font-pop text-[13px] text-text1 font-normal leading-[24px]' to='/'>Chính sách bảo mật</Link>
                            <Link className=' font-pop text-[13px] text-text1 font-normal leading-[24px]' to='/'>Chính sách thanh toán và bán hàng</Link>
                            <Link className=' font-pop text-[13px] text-text1 font-normal leading-[24px]' to='/'>Điều khoản và điều kiện sử dụng</Link>
                        </ul>
                    </div>
                </div>
                <div className=' w-full flex flex-col items-center lg:flex-row justify-between gap-[10px]'>
                    <div className='hidden lg:flex gap-[6px] lg:gap-[10px]'>
                        {
                            logoNetwork.map((logo, index) => (
                                <a href={logo.href} key={index}>
                                    <img className='w-[50px] h-[50px] shrink-0' src={logo.src} alt=''/>
                                </a>
                            ))
                        }
                    </div>
                    <div className='w-full mt-[10px] lg:mt-0 lg:bg-transparent lg:flex-1 flex items-center text-[14px] bg-[#e9e9ec] gap-[10px] rounded-[8px]'>
                        <input className='w-full outline-none lg:w-[310px] h-[48px] py-[10px] px-[12px] font-pop text-[14px] font-normal rounded-[8px] bg-[#e9e9ec]' placeholder='Email'/>
                        <button className='flex justify-center items-center mr-[4px] lg:mr-0  py-[4px] px-[10px] w-[37.784px] h-[40px] lg:w-[48px] lg:h-[48px] bg-primary rounded-[8px]'>
                            <img className='w-[18px] h-[18px] shrink-0' src={leftIcon} alt=''/>
                        </button>
                    </div>
                    <p className='block lg:hidden font-pop text-[13px] font-normal leading-[24px]'>© 2023 All Right Reserved True Connect</p>
                </div>
                <div className='lg:hidden flex flex-wrap justify-center gap-x-[12px] gap-y-0'>
                    {
                        LinkFooter.map((link, index) => (
                            <Link className='font-pop text-[10px] text-[#B4B4B4] font-normal leading-[24px]' to={link.link} key={index}>{link.name}</Link>
                        ))
                    }
                </div>
            </div>

        </div>
    </div>
    );
}

export default Footer;