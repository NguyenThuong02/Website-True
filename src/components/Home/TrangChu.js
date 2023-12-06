import { Link } from 'react-router-dom'
import human from '../../img/human.png'
import search from '../../img/iconSearch.svg'
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



function Home() {
    return (
        <div className="w-full">

            {/* Body header */}
            <div className="h-[880px] w-full bg-be shrink-0">
                <div className="absolute flex justify-center pt-[196px] px-[var(--margin-desktop)] gap-[122px]">
                    <div className='flex-1'>
                        <div className='flex flex-col pb-[48px] items-start gap-6'>
                            <h1 className="text-[64px]">
                                <span className="text-primary font-lora font-bold not-italic leading-normal">True</span>
                                <span className="text-secondary font-lora font-bold not-italic leading-normal">Connect</span>
                            </h1>
                            <p className="text-text2 text-[16px] leading-7 text-justify font-lex font-normal">
                                Nền tảng mở nhằm mục đích dễ dàng cho các đơn vị phát triển ứng dụng khác có thể tích hợp và đẩy sản phẩm lên nền tảng TrueConnect và có cơ hội tiếp cận tập khách hàng rộng mở của hệ thống.
                            </p>
                        </div>
                        <form className='flex p-[8px] items-center self-stretch rounded-[9px] bg-[#fff] shadow-input'>
                            <input className='flex py-[11px] px-[14px] h-12 flex-1 items-center border-transparent border-0 outline-none'/>
                            <button className='flex items-start p-[12px] rounded-[8px] bg-[#FA541C]'>
                                <img src={search}/>
                            </button>
                        </form>
                    </div>
                    <div className='w-[564px] h-[564px]'>
                        <img src={human}/>
                    </div>
                </div>
            </div>

            {/* Body 2 */}
            <div className="w-full flex flex-col h-[1303px] gap-[120px] bg-[#f1f1f1]">
               <div className='flex flex-col py-[90px] pl-[183px] pr-[174px] gap-[120px]'>
                   <div className='flex justify-center gap-[99px]'>
                        <div className=' relative w-[565px] flex flex-col gap-[27px]'>
                            <h2 className="text-[40px]">
                                <span className="text-primary font-lora font-bold not-italic leading-normal">Công ty Cổ phần Công nghệ </span>
                                <span className="text-primary font-lora font-bold not-italic leading-normal">True</span>
                                <span className="text-secondary font-lora font-bold not-italic leading-normal">Connect</span>
                            </h2>
                            <p className="w-full text-text1 text-[16px] leading-[30px] text-justify font-lex font-normal">
                                Chúng tôi hoạt động với mong muốn thúc đẩy quá trình kinh doanh và vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển kinh doanh ...
                            </p>
                            <div className='inline-flex flex-col justify-center items-start gap-[19px]'>
                                <div className='inline-flex items-center gap-[43px]'>
                                    <div className='flex justify-center items-center gap-[30px]'>
                                        <img className='w-[46] h-[46px] bg-primary rounded-[46px] text-[#fff]' src={TanTam}/> 
                                        <span className='text-text1 font-medium text-[22px]'>Tận tâm</span>
                                    </div>
                                    <div className='flex justify-center items-center gap-[30px]'>
                                        <img className='w-[46] h-[46px] bg-primary rounded-[46px]' src={LangNghe}/> 
                                        <span className='text-text1 font-medium text-[22px]'>Lắng nghe</span>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-[30px]'>
                                    <img className='w-[46] h-[46px] bg-primary rounded-[46px]' src={SangTao}/> 
                                    <span className='text-text1 font-medium text-[22px]'>Sáng tạo</span>
                                </div>
                            </div>
                            <Link className='flex items-center absolute top-[94%] right-[40px] text-[20px] text-secondary font-pop font-semibold' to="/forme">
                                Xem thêm 
                                <i className="fa fa-chevron-right ml-[8px] mt-[11px] text-[16px] w-[24px] h-[24px] font-normal"></i>
                            </Link>
                        </div>
                        
                        <div className='flex-1 grid grid-cols-2 gap-[18px]'>
                            <img className='col-span-2 w-full object-cover rounded-[21px]' src={h1}/>
                            <img className='row-span-1 h-[208px] object-cover rounded-[21px]' src={h2}/>
                            <img className='row-span-1 h-[208px] bg-[#ccc] object-cover rounded-[21px]' src={h3}/>
                        </div>
                   </div>
    
                   <div className='flex flex-col gap-[69px] items-center'>
                        <h2 className='text-center text-[#023F3A] text-[40px] font-lora font-bold not-italic'>Tại sao nên lựa chọn chúng tôi</h2>
                        <div className='grid grid-cols-3 gap-[40px]'>
                            <div className='w-[351px] shrink-0 rounded-[20px] bg-[#fff] shadow-itemBody1 hover:scale-[1.009] transition-all hover:cursor-pointer'>
                                <img src={img1} className=' pt-[22px] pl-[55px] pr-[64px] pb-[11px]' />
                                <div className='pl-[14px] pr-[13px]'>
                                    <h3 className=' mb-[3px] mt-[21px] font-lora text-[20px] font-semibold text-primary'>Giá cả hợp lý</h3>
                                    <p className=' mb-[6px] text-text1 font-pop text-[14px] font-normal leading-[25px]'>
                                        Giá thành hợp lý được cung cấp với từng mức giá, phù hợp cho mọi đối tượng.
                                    </p>
                                </div>
                            </div>
                            <div className='w-[351px] shrink-0 rounded-[20px] bg-[#fff] shadow-itemBody1 hover:scale-[1.009] transition-all hover:cursor-pointer'>
                                <img src={img2} className=' pt-[22px] pl-[55px] pr-[64px] pb-[11px]'/>
                                <div className='pl-[14px] pr-[13px]'>
                                    <h3 className=' mb-[3px] mt-[21px] font-lora text-[20px] font-semibold text-primary'>Giá cả hợp lý</h3>
                                    <p className=' mb-[6px] text-text1 font-pop text-[14px] font-normal leading-[25px]'>
                                        Chất lượng các sản phẩm phù hợp với giá tiền, bắt mắt và phù hợp với xu hướng.
                                    </p>
                                </div>
                            </div>
                            <div className='w-[351px] shrink-0 rounded-[20px] bg-[#fff] shadow-itemBody1 hover:scale-[1.009] transition-all hover:cursor-pointer'>
                                <img src={img3} className=' pt-[22px] pl-[55px] pr-[64px] pb-[11px]'/>
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
            <div className=' relative w-full h-[781px] bg-be shrink-0 pt-[53px] pl-[151px] pr-[132px] pb-[28px]'>
                <div className='w-[50%]'>
                    <h2 className="text-[40px]">
                        <span className="text-primary font-lora font-bold not-italic leading-normal">Hệ sinh thái </span>
                        <span className="text-primary font-lora font-bold not-italic leading-normal">True</span>
                        <span className="text-secondary font-lora font-bold not-italic leading-normal">Connect</span>
                    </h2>
                    <ul className='h-[434px] mt-[25px] overflow-y-auto scrollbar-thin writing-mode-vertical-rl scrollbar-thumb-[#FF5722] scrollbar-track-[#DFDFDF]'>
                        <li className='w-[311px] h-[72px] pl-[24px] flex items-center font-pop text-black text-[20px] font-semibold hover:text-[#fff] hover:bg-[#FF5722]'>
                            Danh thiếp điện tử 
                        </li>
                        <li className='w-[311px] h-[72px] pl-[24px] flex items-center font-pop text-black text-[20px] font-semibold hover:text-[#fff] hover:bg-[#FF5722]'>
                            Danh thiếp điện tử 
                        </li>
                        <li className='w-[311px] h-[72px] pl-[24px] flex items-center font-pop text-black text-[20px] font-semibold hover:text-[#fff] hover:bg-[#FF5722]'>
                            Danh thiếp điện tử 
                        </li>
                        <li className='w-[311px] h-[72px] pl-[24px] flex items-center font-pop text-black text-[20px] font-semibold hover:text-[#fff] hover:bg-[#FF5722]'>
                            Danh thiếp điện tử 
                        </li>
                        <li className='w-[311px] h-[72px] pl-[24px] flex items-center font-pop text-black text-[20px] font-semibold hover:text-[#fff] hover:bg-[#FF5722]'>
                            Danh thiếp điện tử 
                        </li>
                        <li className='w-[311px] h-[72px] pl-[24px] flex items-center font-pop text-black text-[20px] font-semibold hover:text-[#fff] hover:bg-[#FF5722]'>
                            Danh thiếp điện tử 
                        </li>
                        <li className='w-[311px] h-[72px] pl-[24px] flex items-center font-pop text-black text-[20px] font-semibold hover:text-[#fff] hover:bg-[#FF5722]'>
                            Danh thiếp điện tử 
                        </li>
                        <li className='w-[311px] h-[72px] pl-[24px] flex items-center font-pop text-black text-[20px] font-semibold hover:text-[#fff] hover:bg-[#FF5722]'>
                            Danh thiếp điện tử 
                        </li>
                        <li className='w-[311px] h-[72px] pl-[24px] flex items-center font-pop text-black text-[20px] font-semibold hover:text-[#fff] hover:bg-[#FF5722]'>
                            Danh thiếp điện tử 
                        </li>
                    </ul>
                </div>
                <img className=' absolute right-[132px] top-[53px] w-[639px] h-[700px]' src={body2}/>
                <Link className='flex items-center absolute top-[68px] right-[132px] text-[20px] text-secondary font-pop font-semibold' to="/forme">
                    Xem thêm 
                    <i className="fa fa-chevron-right ml-[8px] mt-[11px] text-[16px] w-[24px] h-[24px] font-normal"></i>
                </Link>
            </div>
        </div>
    );
}

export default Home;