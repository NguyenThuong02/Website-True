import { Link } from 'react-router-dom'
import human from '../../img/human.png'
import search from '../../img/iconSearch.svg'
import search1 from '../../img/iconbase.svg'

import TanTam from '../../img/logoBody/1.png'
import LangNghe from '../../img/logoBody/2.png'
import SangTao from '../../img/logoBody/3.png'

import h1 from '../../img/PictureBody1/h1.jpeg'
import h2 from '../../img/PictureBody1/h2.jpeg'
import h3 from '../../img/PictureBody1/h3.png'
import img1 from '../../img/PictureBody1/img1.svg'
import img2 from '../../img/PictureBody1/img2.svg'
import img3 from '../../img/PictureBody1/img3.svg'

import body2 from '../../img/body2.png'

import h1body4  from '../../img/Body4/h1.png'
import h2body4 from '../../img/Body4/h2.png'
import h3body4 from '../../img/Body4/h3.png'
import h4body4 from '../../img/Body4/h4.png'
import h5body4 from '../../img/Body4/h5.png'

import p1 from '../../img/Body5/p1.png'
import p2 from '../../img/Body5/p2.png'
import p3 from '../../img/Body5/p3.png'
import p4 from '../../img/Body5/p4.png'
import p5 from '../../img/Body5/p5.png'

import p6 from '../../img/Body5/p6.png'
import iconEmail from '../../img/ic_email.svg'
import iconAdress from '../../img/ic_pin.svg'

import Validation from './Validation'
import { useEffect, useState } from 'react'

import './Home.css'
import Footer from '../Footer/Footer'

function Home() {

    let Links = [
        {name:'Danh thiếp điện tử '},
        {name:'Website mini'},
        {name:'Web doanh nghiệp'},
        {name:'Dịch vụ tư vấn Chuyển đổi số'},
        {name:'Phòng CNTT thuê ngoài'},
        {name:'Ứng dụng cho doanh nghiệp SME'},
        {name:'Ứng dụng cho doanh nghiệp SME'},
        {name:'Ứng dụng cho doanh nghiệp SME'},
    ]

    let imgBody5 = [
        {src: p1},
        {src: p2},
        {src: p3},
        {src: p4},
        {src: p5},
        {src: p6},
    ]

    const [values, setValues] = useState({
        name: '',
        email: '',
        sdt: '',
        note: ''
    })
    const [errors, setErrors] = useState({})
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])

    const handleInput = (e) => {
        const newObj = {...values, [e.target.name]: e.target.value}
        setValues(newObj)
    }

    const handleValidation = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setFilterData(data);
            })
            .catch(err =>  console.log(err))
    },[])


    const handleSearch = (value) => {
        const res = filterData.filter(f => f.name.toLowerCase().includes(value))
        setData(res);
        if(value==='') {
            setData([])
        }
    }

    return (
        <div className="w-full">

            {/* Body header */}
            <div className="w-full pb-[40px] bg-be shrink-0">
                <div className="flex flex-col pt-[96px] px-[var(--margin-mobile)] items-center lg:flex-row lg:justify-center lg:pt-[196px] lg:px-[var(--margin-desktop)] lg:gap-[122px]">
                    <div className='lg:flex-1'>
                        
                        <div className='flex flex-col pb-[22px] lg:pb-[48px] items-center lg:items-start gap-[22px] lg:gap-6'>
                            <h1 className="text-[32px] lg:text-[64px]">
                                <span className="text-primary font-lora font-bold not-italic leading-normal">True</span>
                                <span className="text-secondary font-lora font-bold not-italic leading-normal">Connect</span>
                            </h1>
                            <p className="text-text2 text-[14px] lg:text-[16px] leading-7 text-justify font-lex font-normal">
                                Nền tảng mở nhằm mục đích dễ dàng cho các đơn vị phát triển ứng dụng khác có thể tích hợp và đẩy sản phẩm lên nền tảng TrueConnect và có cơ hội tiếp cận tập khách hàng rộng mở của hệ thống.
                            </p>
                        </div>
                        
                        <form className='flex relative flex-col lg:flex-row p-[8px] lg:items-center self-stretch rounded-[9px] gap-[8px] lg:gap-0 bg-[#fff] shadow-input'>
                            <img className=' absolute lg:hidden left-[26px] top-[18px] w-[24px] h-[24px]' src={search1} alt='search'/>
                            <input className='  flex py-[11px] pl-[48px] pr-[14px] lg:px-[14px] h-12 flex-1 items-center border-transparent border-0 outline-none text-[14px] font-pop leading-[26px] font-normal' 
                                placeholder='Job title, keywords...' type='text'
                                onChange={e => handleSearch(e.target.value)}
                            />
                            <button className='flex justify-center gap-[8px] lg:items-start p-[12px] rounded-[8px] bg-[#FA541C]'>
                                <img src={search} alt='search'/>
                                <span className=' font-pop text-[15px] text-[#fff] font-semibold leading-[26px] lg:hidden'>Search</span>
                            </button>
                        </form>
                        <div className='lg:w-full left-[var(--margin-mobile)] right-[var(--margin-mobile)] absolute lg:static mt-[10px] overflow-hidden bg-[#fff] rounded-[9px] shadow-input'>
                            {data.map((item, index) => (
                                <div className='px-[14px] py-[10px] text-[14px] leading-[26px] hover:bg-[#ccc] hover:cursor-pointer' key={index}>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-[86.6667%] mt-[10px] aspect-square lg:w-[564px] lg:h-[564px]'>
                        <img src={human} alt='img'/>
                    </div>
                </div>
            </div>

            {/* Body 2 */}
            <div className="w-full flex flex-col lg:gap-[120px] bg-[#f1f1f1]">
               <div className='flex flex-col py-[22px] lg:py-[90px] px-[var(--margin-mobile)] lg:pl-[12.708%] lg:pr-[12.083%] gap-[20px] lg:gap-[120px]'>
                   <div className='flex flex-col lg:flex-row justify-center gap-[35px] lg:gap-[99px]'>
                        <div className=' relative w-full lg:w-[565px] flex flex-col items-center lg:items-start lg:gap-[27px]'>
                            <h2 className="text-[24px] lg:text-[40px] mb-[10px] lg:mb-0">
                                <span className="text-primary font-lora font-bold not-italic leading-normal">Công ty Cổ phần Công nghệ </span>
                                <span className="text-primary font-lora font-bold not-italic leading-normal">True</span>
                                <span className="text-secondary font-lora font-bold not-italic leading-normal">Connect</span>
                            </h2>
                            <p className="w-full mb-[20px] lg:mb-0 text-text1 text-[14px] lg:text-[16px] leading-[30px] text-justify font-lex font-normal">
                                Chúng tôi hoạt động với mong muốn thúc đẩy quá trình kinh doanh và vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển kinh doanh ...
                            </p>
                            <div className='w-full inline-flex flex-col justify-center items-start gap-[19px]'>
                                <div className='w-full inline-flex items-center justify-between lg:justify-normal lg:gap-[43px]'>
                                    <div className='flex justify-center items-center gap-[9px] lg:gap-[30px]'>
                                        <img className='w-[42px] h-[39px] lg:w-[46px] lg:h-[46px] bg-primary rounded-[46px] text-[#fff]' src={TanTam} alt='TanTam'/> 
                                        <span className='text-text1 font-medium text-[16px] lg:text-[22px]'>Tận tâm</span>
                                    </div>
                                    <div className='flex justify-center items-center gap-[9px] lg:gap-[30px]'>
                                        <img className='w-[42px] h-[39px] lg:w-[46px] lg:h-[46px] bg-primary rounded-[46px]' src={LangNghe} alt='LangNghe'/> 
                                        <span className='text-text1 font-medium text-[16px] lg:text-[22px]'>Lắng nghe</span>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-[9px] lg:gap-[30px]'>
                                    <img className='w-[42px] h-[39px] lg:w-[46px] lg:h-[46px] bg-primary rounded-[46px]' src={SangTao} alt='SangTao'/> 
                                    <span className='text-text1 font-medium text-[16px] lg:text-[22px]'>Sáng tạo</span>
                                </div>
                            </div>
                            <Link className='flex items-center absolute bottom-[0] lg:top-[94%] right-0 lg:right-[40px] text-[14px] lg:text-[20px] text-secondary font-pop font-semibold' to="/forme">
                                Xem thêm 
                                <i className="fa fa-chevron-right ml-[8px] mt-[8px] lg:mt-[11px] text-[14px] lg:text-[16px] w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] font-normal"></i>
                            </Link>
                        </div>
                        
                        <div className='flex-1 grid grid-cols-2 gap-[18px]'>
                            <img className='col-span-2 w-full object-cover rounded-[21px]' src={h1} alt=''/>
                            <img className='row-span-1 h-[208px] object-cover rounded-[21px]' src={h2} alt=''/>
                            <img className='row-span-1 h-[208px] bg-[#ccc] object-cover rounded-[21px]' src={h3} alt=''/>
                        </div>
                   </div>
    
                   <div className='flex flex-col gap-[22px] lg:gap-[69px] items-center'>
                        <h2 className='text-center text-[#023F3A] text-[20px] lg:text-[40px] font-lora font-bold not-italic'>Tại sao nên lựa chọn chúng tôi</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[40px]'>
                            <div className='w-full lg:w-[351px] shrink-0 rounded-[20px] bg-[#fff] shadow-itemBody1 hover:scale-[1.009] transition-all hover:cursor-pointer'>
                                <img src={img1} alt='img1' className=' pt-[22px] px-[15.38%] lg:pl-[55px] lg:pr-[64px] pb-[4px] lg:pb-[11px]'/>
                                <div className='px-[10px] lg:pl-[14px] lg:pr-[13px]'>
                                    <h3 className=' mb-[3px] mt-[21px] font-lora text-[20px] font-semibold text-primary'>Giá cả hợp lý</h3>
                                    <p className=' mb-[6px] text-text1 font-pop text-[14px] font-normal leading-[25px]'>
                                        Giá thành hợp lý được cung cấp với từng mức giá, phù hợp cho mọi đối tượng.
                                    </p>
                                </div>
                            </div>
                            <div className='w-full lg:w-[351px] shrink-0 rounded-[20px] bg-[#fff] shadow-itemBody1 hover:scale-[1.009] transition-all hover:cursor-pointer'>
                                <img src={img2} className=' pt-[22px] px-[15.38%] lg:pl-[55px] lg:pr-[64px] pb-[4px] lg:pb-[11px]' alt='img2'/>
                                <div className='pl-[14px] pr-[13px]'>
                                    <h3 className=' mb-[3px] mt-[21px] font-lora text-[20px] font-semibold text-primary'>Giá cả hợp lý</h3>
                                    <p className=' mb-[6px] text-text1 font-pop text-[14px] font-normal leading-[25px]'>
                                        Chất lượng các sản phẩm phù hợp với giá tiền, bắt mắt và phù hợp với xu hướng.
                                    </p>
                                </div>
                            </div>
                            <div className='w-full lg:w-[351px] shrink-0 rounded-[20px] bg-[#fff] shadow-itemBody1 hover:scale-[1.009] transition-all hover:cursor-pointer'>
                                <img src={img3} className=' pt-[22px] px-[15.38%] lg:pl-[55px] lg:pr-[64px] pb-[4px] lg:pb-[11px]' alt='img3'/>
                                <div className='pl-[14px] pr-[13px]'>
                                    <h3 className=' mb-[3px] mt-[21px] font-lora text-[20px] font-semibold text-primary'>Giá cả hợp lý</h3>
                                    <p className=' mb-[6px] text-text1 font-pop text-[14px] font-normal leading-[25px]'>
                                        Nhiều tính năng mới lạ, tiện dụng với người sử dụng.
                                    </p>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
            </div>

            {/* Body 3 */}
            <div className='flex flex-col items-center lg:block lg:relative w-full lg:h-[781px] bg-be shrink-0 px-[var(--margin-mobile)] pt-[27px] lg:pt-[53px] lg:pl-[10.486%] lg:pr-[9.1667%] pb-[6px] lg:pb-[28px]'>
                <div className='w-full flex flex-col gap-[44px] items-center lg:block lg:w-[50%]'>
                    <h2 className="text-[24px] lg:text-[40px]">
                        <span className="text-primary font-lora font-bold not-italic leading-normal">Hệ sinh thái </span>
                        <span className="text-primary font-lora font-bold not-italic leading-normal">True</span>
                        <span className="text-secondary font-lora font-bold not-italic leading-normal">Connect</span>
                    </h2>
                    <ul className='h-[292px] lg:h-[434px] lg:mt-[25px] overflow-y-auto scrollbar-thin writing-mode-vertical-rl scrollbar-thumb-[#FF5722] scrollbar-track-[#DFDFDF]'>
                        {
                            Links.map((link, index) => (
                                <li key={index} className='lg:w-[311px] h-[44px] lg:h-[72px] py-[12px] pl-[13px] lg:pl-[24px] flex items-center font-pop text-black text-[14px] lg:text-[20px] font-semibold hover:text-[#fff] hover:bg-[#FF5722]'>
                                    {link.name}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Link className='flex mt-[15px] ml-[55%] lg:mt-0 lg:ml-0 items-center lg:absolute lg:top-[68px] lg:right-[9.1667%] text-[14px] lg:text-[20px] text-secondary font-pop font-semibold' to="/forme">
                    Xem thêm 
                    <i className="fa fa-chevron-right ml-[8px] mt-[8px] lg:mt-[11px] text-[14px] lg:text-[16px] w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] font-normal"></i>
                </Link>
                <img className=' lg:absolute lg:right-[132px] lg:top-[53px] w-[full] lg:w-[639px] aspect-square lg:h-[700px]' src={body2} alt='body2'/>
            </div>

            {/* Body 4 */}
            <div className=' relative w-full px-[var(--margin-mobile)] lg:px-[var(--margin-desktop)] pt-[22px] lg:pt-[120px] pb-[40px] lg:pb-0 flex flex-col gap-[22px] lg:gap-[80px]'>
                <div className='w-full flex justify-between'>
                    <div className='w-full lg:w-[460px] text-center lg:text-start flex flex-col items-center lg:items-start gap-[24px]'>
                        <p className='lg:hidden font-pop text-[12px] font-semibold leading-[20px] uppercase text-[#919EAB]'>Blog</p>
                        <h2 className="text-[24px] lg:text-[40px] text-primary font-lora font-bold not-italic leading-normal">Bài viết mới nhất</h2>
                        <p className='text-[14px] lg:text-[16px] font-pop text-[#637381] font-normal leading-7'>Nơi những khách hàng của TrueConnect cập nhật những tin tức mới nhất về thị trường công nghệ</p>
                    </div>
                    <Link className=' absolute lg:static flex items-center bottom-0 right-[var(--margin-mobile)] text-[14px] lg:text-[20px] text-secondary font-pop font-normal lg:font-semibold' to="/forme">
                        Xem thêm 
                        <i className="fa fa-chevron-right ml-[8px] mt-[11px] text-[14px] lg:text-[16px] w-[24px] h-[24px] font-normal"></i>
                    </Link>
                </div>

                <div className='w-full flex flex-col lg:flex-row gap-[22px] lg:gap-[32px]'>
                    <div className=' hidden lg:block pic1 relative'>
                        <div className=' absolute bottom-0 p-[40px] w-full flex flex-col items-start gap-[16px] text-[#fff]'>
                            <div className='flex gap-[8px] items-center'>
                                <span className=' font-pop text-[12px] font-normal leading-5'>
                                    24 May 2019
                                </span>
                                <span className='mt-[-9px] font-pop text-[16px] font-semibold leading-5'>
                                    .
                                </span>
                                <span className=' font-pop text-[12px] font-normal leading-5'>
                                    8 mins
                                </span>
                            </div>
                            <h2 className=' font-bar text-[36px] font-bold leading-[54px]'>
                                Event On A Budget: 7 Tips From The Great Depression
                            </h2>
                            <p className=' font-pop text-[16px] font-normal leading-7 opacity-[0.48]'>
                                Aenean viverra rhoncus pede. Phasellus blandit leo ut odio. Pellentesque commodo eros a enim. Phasellus consectetuer vestibulum elit.
                            </p>
                        </div>
                    </div>
                    
                    <div className='flex lg:hidden lg:flex-col gap-[16px]'>
                        <img className='w-[80px] h-[80px] object-cover rounded-[16px]' src={h1body4} alt='h1body'/>
                        <div className='flex flex-col-reverse gap-[8px] justify-end items-start self-stretch'>
                            <div className='flex gap-[8px] items-center'>
                                <span className=' font-pop text-[12px] font-normal leading-5'>
                                    24 May 2019
                                </span>
                                <span className='mt-[-9px] font-pop text-[16px] font-semibold leading-5'>
                                    .
                                </span>
                                <span className=' font-pop text-[12px] font-normal leading-5'>
                                    8 mins
                                </span>
                            </div>
                            <div className=' font-bar text-[17px] font-semibold leading-7'>
                                Apply These 7 Secret Techniques To Improve Event
                            </div>
                        </div>
                    </div>

                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[22px] lg:gap-[32px]'>
                       <div className='flex flex-col gap-[22px] lg:gap-[32px]'>
                            <div className='flex lg:flex-col gap-[16px]'>
                                <img className='w-[80px] h-[80px] lg:w-[264px] lg:h-[264px] object-cover rounded-[16px]' src={h2body4} alt=''/>
                                <div className='flex flex-col-reverse lg:flex-col gap-[8px] justify-end lg:justify-normal items-start self-stretch'>
                                    <div className='flex gap-[8px] items-center'>
                                        <span className=' font-pop text-[12px] font-normal leading-5'>
                                            24 May 2019
                                        </span>
                                        <span className='mt-[-9px] font-pop text-[16px] font-semibold leading-5'>
                                            .
                                        </span>
                                        <span className=' font-pop text-[12px] font-normal leading-5'>
                                            8 mins
                                        </span>
                                    </div>
                                    <div className=' font-bar text-[17px] lg:text-[18px] font-semibold leading-7'>
                                        Apply These 7 Secret Techniques To Improve Event
                                    </div>
                                </div>
                            </div>
    
                            <div className='flex lg:flex-col gap-[16px]'>
                                <img className='w-[80px] h-[80px] lg:w-[264px] lg:h-[198px] object-cover rounded-[16px]' src={h3body4} alt=''/>
                                <div className='flex flex-col-reverse lg:flex-col gap-[8px] justify-end lg:justify-normal items-start self-stretch'>
                                    <div className='flex gap-[8px] items-center'>
                                        <span className=' font-pop text-[12px] font-normal leading-5'>
                                            24 May 2019
                                        </span>
                                        <span className='mt-[-9px] font-pop text-[16px] font-semibold leading-5'>
                                            .
                                        </span>
                                        <span className=' font-pop text-[12px] font-normal leading-5'>
                                            8 mins
                                        </span>
                                    </div>
                                    <div className=' font-bar text-[18px] font-semibold leading-7'>
                                        Event Doesn't Have To Be Hard. Read These 7 Tips
                                    </div>
                                </div>
                            </div>
                       </div>

                        <div className='flex flex-col gap-[22px] lg:gap-[32px]'>
                            <div className='flex lg:flex-col gap-[16px]'>
                                <img className='w-[80px] h-[80px] lg:w-[264px] lg:h-[198px] object-cover rounded-[16px]' src={h4body4} alt=''/>
                                <div className='flex flex-col-reverse lg:flex-col gap-[8px] justify-end lg:justify-normal items-start self-stretch'>
                                    <div className='flex gap-[8px] items-center'>
                                        <span className=' font-pop text-[12px] font-normal leading-5'>
                                            24 May 2019
                                        </span>
                                        <span className='mt-[-9px] font-pop text-[16px] font-semibold leading-5'>
                                            .
                                        </span>
                                        <span className=' font-pop text-[12px] font-normal leading-5'>
                                            8 mins
                                        </span>
                                    </div>
                                    <div className=' font-bar text-[17px] lg:text-[18px] font-semibold leading-7'>
                                        Knowing These 7 Secrets Will Make Your Event Look Amazing
                                    </div>
                                </div>
                            </div>
    
                            <div className='flex lg:flex-col gap-[16px]'>
                                <img className='w-[80px] h-[80px] lg:w-[264px] lg:h-[264px] object-cover rounded-[16px]' src={h5body4} alt=''/>
                                <div className='flex flex-col-reverse lg:flex-col gap-[8px] justify-end lg:justify-normal items-start self-stretch'>
                                    <div className='flex gap-[8px] items-center'>
                                        <span className=' font-pop text-[12px] font-normal leading-5'>
                                            24 May 2019
                                        </span>
                                        <span className='mt-[-9px] font-pop text-[16px] font-semibold leading-5'>
                                            .
                                        </span>
                                        <span className=' font-pop text-[12px] font-normal leading-5'>
                                            8 mins
                                        </span>
                                    </div>
                                    <div className=' font-bar text-[17px] lg:text-[18px] font-semibold leading-7'>
                                        Don't Waste Time! 7 Facts Until You Reach Your Event
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-[47px] border-b lg:border-none lg:pt-[0] pb-[22px] lg:pb-[30px] bg-[#fff] lg:bg-[#f1f1f1]'>
                {/* Body 5 */}
                <div className='flex flex-col gap-[22px] lg:gap-[56px] px-[var(--margin-mobile)] lg:px-0 py-[15px] lg:pt-[146px] lg:pb-[100px] bg-[#fff] lg:bg-[#f1f1f1]'>
                    <h2 className=" text-[24px] lg:text-[40px] text-center text-primary font-lora font-semibold lg:font-bold not-italic leading-normal">Đối tác của chúng tôi?</h2>
                    <div className=' flex justify-start gap-[40px] items-center overflow-x-auto scrollbar-thin writing-mode-vertical-rl scrollbar-thumb-transparent snap-always scrollbar-track-transparent'>
                        {
                            imgBody5.map((img, index) => (
                                <img key={index} className=' object-cover shrink-0 max-w-full h-auto ' src={img.src} alt=''/>
                            ))
                        }
                    </div>
                </div>
    
                {/* Body 6 */}
                <div className=' flex flex-col lg:flex-row lg:justify-between body6 px-[var(--margin-mobile)] lg:px-[var(--margin-desktop)] py-[22px] lg:pt-[130px] lg:pb-[132px] w-full lg:h-[624px] gap-[22px] lg:gap-0  shrink-0'>
                    <div className='flex flex-col items-center lg:items-start w-full gap-[24px] lg:gap-[64px] lg:w-[466px]'>
                        <h2 className="text-[24px] lg:text-[40px] text-[#FA541C] lg:text-primary font-lora font-semibold lg:font-bold not-italic leading-normal">Liên hệ</h2>
                        <div className='flex flex-col items-start w-[90%] gap-[16px]'>
                            <div className='flex lg:items-center gap-[8px] text-[#fff]'>
                                <img className='w-[24px] h-[24px]' src={iconEmail} alt=''/>
                                <span className=' font-pop font-normal leading-7 text-[16px]'>
                                    dvkh.trueconnect@gmail.comcom
                                </span>
                            </div>
                            <div className='flex lg:items-center gap-[8px] text-[#fff]'>
                                <img className='w-[24px] h-[24px]' src={iconAdress} alt=''/>
                                <span className=' font-pop font-normal leading-7 text-[16px]'>
                                    80, 69b/22/45 Hoang Van Thai, Khuong Trung Thanh Xuan, Ha Noi
                                </span>
                            </div>
                        </div>
                    </div>
    
                    <form className='gap-[22px] lg:gap-[20px] w-full lg:w-[466px] flex flex-col items-center lg:items-start' onSubmit={handleValidation}>
                       <div className=' w-full flex flex-col items-start gap-[6px]'>
                            <input className= ' w-full lg:w-[466px] p-[14px] font-pop text-[14px] text-[#919EAB] font-normal leading-[26px] outline-none rounded-[8px] bg-bginput' 
                                placeholder='Họ và tên' type='text' onChange={handleInput} name='name'
                            />
                            {errors.name && <p className='text-[14px] text-[#ff3333]'>{errors.name}</p>}
                       </div>

                        <div className=' w-full flex flex-col items-start gap-[6px]'>
                            <input className=' w-full lg:w-[466px] p-[14px] font-pop text-[14px] text-[#919EAB] font-normal leading-[26px] outline-none rounded-[8px] bg-bginput' 
                                placeholder='Email của bạn' type='text' onChange={handleInput} name='email'
                            />
                            {errors.email && <p className='text-[14px] text-[#ff3333]'>{errors.email}</p>}
                        </div>

                        <div className=' w-full flex flex-col items-start gap-[6px]'>
                            <input className=' w-full lg:w-[466px] p-[14px] font-pop text-[14px] text-[#919EAB] font-normal leading-[26px] outline-none rounded-[8px] bg-bginput' 
                                placeholder='Số điện thoại' type='text' onChange={handleInput} name='sdt'
                            />
                            {errors.sdt && <p className='text-[14px] text-[#ff3333]'>{errors.sdt}</p>}
                        </div>

                        <div className=' w-full flex flex-col items-start gap-[6px]'>
                            <input className=' w-full lg:w-[466px] p-[14px] font-pop text-[14px] text-[#919EAB] font-normal leading-[26px] outline-none rounded-[8px] bg-bginput' 
                                placeholder='Ghi chú' type='text' onChange={handleInput} name='note'
                            />
                            {errors.note && <p className='text-[14px] text-[#ff3333]'>{errors.note}</p>}
                        </div>

                        <button className='w-[172px] mt-[22px] lg:mt-[40px] px-[22px] py-[11px] rounded-[8px] bg-primary font-pop text-[15px] font-semibold leading-[26px] text-[#fff]' type='submit'>
                            Gửi thông tin
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <Footer />
           
        </div>
    );
}

export default Home;