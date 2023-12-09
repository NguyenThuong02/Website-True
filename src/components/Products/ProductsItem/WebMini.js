import slide from '../../../img/Product/WebMini/slide.png'
// import h1body1 from '../../../img/Product/WebMini/h1body1.png'
import h2body1 from '../../../img/Product/WebMini/h2body1.png'

import item1 from '../../../img/Product/WebMini/item1.png'
import item2 from '../../../img/Product/WebMini/item2.png'
import item3 from '../../../img/Product/WebMini/item3.png'
import video from '../../../img/Product/WebMini/m1.mp4'
import iconX from '../../../img/Product/WebMini/iconX.svg'
import iconY from '../../../img/Product/WebMini/iconY.svg'

import { ReactComponent as IconStar } from "../../../img/Product/WebMini/iconStar.svg";

import timelineElements from './timeLineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"



function WebMini() {

    // Item body 1
    let Items = [
        {img:item1},
        {img:item2},
        {img:item3},
    ]

    let iconStar = {background: "#FA541C", color: '#fff'};

    let List = [
        {name: 'Xây dựng website bán hàng trực tuyến', iconF:iconX, iconR:iconY},
        {name: 'Phân loại thông tin/sản phẩm theo danh mục', iconF:iconX, iconR:iconY},
        {name: 'Đăng tải bài viết/sản phẩm', iconF:iconX, iconR:iconY},
        {name: 'Tạo Landing page ngay trên chiếc điện thoại của mình', iconF:iconX, iconR:iconY},
        {name: 'Cập nhật thông tin trạng thái sản phẩm', iconF:iconX, iconR:iconY},
        {name: 'Quản lý bài đăng/ Quản lý đơn hàng', iconF:iconX, iconR:iconY},
        {name: 'Hỗ trợ xây dựng mạng lưới khách hàng,mạng lưới cộng đồng', iconF:iconX, iconR:iconY},
    ]

    return (
        <div className="w-full">
            <div className="w-full lg:pt-[120px]">
                <img className='w-full lg:h-[398px] shrink-0' src={slide} alt=''/>

                {/* Body 1: Giới thiệu */}
                <div className='lg:px-[11.18%] lg:py-[50px] flex flex-col lg:justify-start'>
                    <h1 className=' font-lora lg:text-[40px] font-bold text-primary'>Giới Thiệu</h1>
                    <div className='border-[#FF0054] border-[1px] lg:mb-[80px] lg:w-[9.444%]'></div>
                    <div className='w-full'>
                        <div className=' w-full flex flex-col lg:gap-[64px] lg:mb-[117px]'>
                            <div className='flex justify-between lg:gap-[150px]'>                                
                                <img className='bg-[#E7E7E7] rounded-[21px]' src={h2body1} alt=''/>                                
                                <div className='flex flex-col lg:gap-[20px]'>
                                    <h2 className=' font-lora lg:text-[32px] font-semibold'>Sản phẩm Website mini TrueConnect</h2>
                                    <p className=' text-justify font-pop lg:text-[16px] font-normal lg:leading-[30px]'>Dịch vụ phát triển website mini cung cấp cho khách hàng giải pháp đơn giản, tiện lợi để xây dựng trang web minicho doanh nghiệp hoặc cá nhân. Website mini thu hút sự chú ý của người truy cập tới một nội dung cụ thể, tránh dàn trải và tạo ấn tượng tốt nhất về sản phẩm của Quý khách hàng</p>
                                </div>
                            </div>
                            <div className='flex justify-between lg:gap-[150px]'>                               
                                <div className='flex flex-col lg:gap-[20px]'>
                                    <h2 className=' font-lora lg:text-[32px] font-semibold'>Sản phẩm Website mini TrueConnect</h2>
                                    <p className=' text-justify font-pop lg:text-[16px] font-normal lg:leading-[30px]'>Dịch vụ phát triển website mini cung cấp cho khách hàng giải pháp đơn giản, tiện lợi để xây dựng trang web minicho doanh nghiệp hoặc cá nhân. Website mini thu hút sự chú ý của người truy cập tới một nội dung cụ thể, tránh dàn trải và tạo ấn tượng tốt nhất về sản phẩm của Quý khách hàng</p>
                                </div>                                
                                <img className='bg-[#E7E7E7] rounded-[21px]' src={h2body1} alt=''/>                                
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-3 lg:gap-x-[43px] '>
                            {
                                Items.map((item, index) => (
                                    <div className=' flex justify-center items-center lg:h-[261px] shrink-0 object-cover shadow-itemBody1 rounded-[31px] hover:scale-[1.05] hover:-translate-y-[20px] transition-transform duration-300' key={index}>
                                        <img src={item.img} alt=''/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Body 2: Tính năng sản phẩm */}
                <div className='lg:px-[11.18%] lg:py-[50px] flex flex-col lg:justify-start'>
                    <h1 className=' font-lora lg:text-[40px] font-bold text-primary'>Tính năng sản phẩm</h1>
                    <div className='border-[#FF0054] border-[1px] lg:mb-[80px] lg:w-[9.444%]'></div>
                    <div className='w-full'>
                        <div >
                            <VerticalTimeline lineColor='#ccc'>
                                {
                                    timelineElements.map(e => {
                                        let isStarIcon = e.icon === 'iconStar';

                                        return (
                                            <VerticalTimelineElement
                                                key={e.id}                                             
                                                iconStyle={isStarIcon ? iconStar : '' }
                                                icon={isStarIcon ? <IconStar /> : '' }
                                            >
                                                <h3 className='text-[#FA541C] font-pop lg:text-[24px] font-semibold'>
                                                    {e.title}
                                                </h3>
                                                <p className=' text-justify font-pop lg:text-[16px] font-normal leading-[28px] text-[#212B36]'>{e.description}</p>
                                            </VerticalTimelineElement>
                                        )
                                    })
                                }
                            </VerticalTimeline>
                        </div>
                    </div>
                    
                </div>

                {/* Body 3 */}
                <div className=' w-full flex justify-between items-center lg:px-[11.458%] lg:py-[64px] bg-be lg:gap-[125px]'>
                    <video className='lg:w-[40.9%] lg:h-full rounded-[20px]' src={video} controls />
                    <div className='flex flex-col items-start lg:gap-[24px]'>
                        <h2 className=' font-lora lg:text-[32px] font-semibold text-primary'>Giới thiệu về Webmini</h2>
                        <p className=' text-justify font-jos lg:text-[18px] font-normal leading-[130%]'>
                            Website Mini là một trang web đơn trang, tập trung vàonội dung quan trọng nhất. Bạn có thể sử dụng nó để giớithiệu sản phẩm, dịch vụ hoặc sự kiện đặc biệt của mình.Với giao diện thân thiện và tốc độ tải trang nhanh,Website Mini tạo ra trải nghiệm tốt cho khách hàng
                        </p>
                        <button className='px-[8px] py-[10px] bg-primary font-jos text-[#fff] text-[14px] font-bold leading-[20px]'>
                            Nâng cấp ngay
                        </button>
                    </div>
                </div>

                {/* Body 4: Điểm khác biệt của TrueConnect */}
                <div className='lg:px-[11.18%] lg:py-[50px] flex flex-col lg:justify-start'>
                    <h1 className=' font-lora lg:text-[40px] font-bold text-primary'>Điểm khác biệt của TrueConnect</h1>
                    <div className='border-[#FF0054] border-[1px] lg:mb-[80px] lg:w-[26.389%]'></div>
                    <table className="table-auto w-full ">
                        <thead className="h-12">
                            <tr className=''>                                
                                <th className=""></th>
                                <th className=" text-center font-lora lg:text-[24px] font-semibold">Sản phẩm khác</th>
                                <th className=" text-center font-lora lg:text-[24px] font-semibold">TrueConnect</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                List.map((item, index) => (
                                    <tr key={index} 
                                        className='lg:max-h-[45px] font-jos lg:text-[24px] text-[#525560] font-normal pb-[50px]' 
                                    >
                                        <td className="pb-[10px] text-start">{item.name}</td>
                                        <td className=' text-center pb-[10px]'>
                                            <div className='flex justify-center'>
                                                <img src={item.iconF} alt='' className='lg:w-[45px] lg:h-[45px] max-w-full h-auto' />
                                            </div>
                                        </td>
                                        <td className=' text-center pb-[10px]'>
                                            <div className='flex justify-center'>
                                                <img src={item.iconR} alt='' className='lg:w-[45px] lg:h-[45px] max-w-full h-auto' />
                                            </div>
                                        </td>
                                        
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

                {/* Body 5: */}
                <div className='lg:px-[10%] lg:pt-[80px] lg:pb-[40px]'>

                </div>
            </div>
        </div>
    );
}

export default WebMini;