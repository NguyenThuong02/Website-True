import slide from '../../../img/Product/WebMini/slide.png'
// import h1body1 from '../../../img/Product/WebMini/h1body1.png'
import h2body1 from '../../../img/Product/WebMini/h2body1.png'

import item1 from '../../../img/Product/WebMini/item1.png'
import item2 from '../../../img/Product/WebMini/item2.png'
import item3 from '../../../img/Product/WebMini/item3.png'
import video from '../../../img/Product/WebMini/m1.mp4'
import iconX from '../../../img/Product/WebMini/iconX.svg'
import iconY from '../../../img/Product/WebMini/iconY.svg'
import iconAdd from '../../../img/Product/WebMini/iconAdd.svg'
import body5 from '../../../img/Product/WebMini/body5.png'
import body6 from '../../../img/Product/WebMini/body6.svg'
import plane from '../../../img/Product/WebMini/plane.svg'
import rocket from '../../../img/Product/WebMini/Rocket.svg'
import rocket2 from '../../../img/Product/WebMini/Rocket2.svg'
import avt from '../../../img/Product/WebMini/avt.JPG'

import { FaPhoneVolume, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

import { ReactComponent as IconStar } from "../../../img/Product/WebMini/iconStar.svg";

import timelineElements from './timeLineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import Footer from '../../Footer/Footer'



function WebMini() {

    // Item body 1
    let Items = [
        {img:item1},
        {img:item2},
        {img:item3},
    ]

    
    let iconStar = {background: "#FA541C", color: '#fff'};

    // List Differ (Body 4)
    let List = [
        {name: 'Xây dựng website bán hàng trực tuyến', iconF:iconX, iconR:iconY},
        {name: 'Phân loại thông tin/sản phẩm theo danh mục', iconF:iconX, iconR:iconY},
        {name: 'Đăng tải bài viết/sản phẩm', iconF:iconX, iconR:iconY},
        {name: 'Tạo Landing page ngay trên chiếc điện thoại của mình', iconF:iconX, iconR:iconY},
        {name: 'Cập nhật thông tin trạng thái sản phẩm', iconF:iconX, iconR:iconY},
        {name: 'Quản lý bài đăng/ Quản lý đơn hàng', iconF:iconX, iconR:iconY},
        {name: 'Hỗ trợ xây dựng mạng lưới khách hàng,mạng lưới cộng đồng', iconF:iconX, iconR:iconY},
    ]

    // Body 5
    let Questions = [
        {text:'Chia sẻ Webmini có bị mất dữ liệu không?', icon:iconAdd},
        {text:'Khi đã tạo webmini, tôi có được chỉnh sửa không?', icon:iconAdd},
        {text:'Website mini có gì khác so với website thông thường?', icon:iconAdd},
        {text:'Có thể đổi gói webmini khi đã mua gói trước đó rồi không?', icon:iconAdd},
    ]

    // List character item (body 6)
    let List1 = [
        {text: '1 Website'},
        {text: '1 Danh thiếp điện tử'},
        {text: 'Phân loại sản phẩm theo 2 nhóm'},
    ]

    let List2 = [
        {text: 'Auto update mode'},
        {text: 'Online operator 24/7'},
        {text: 'International posting'},
        {text: 'Unique newsletters'},
    ]

    let List3 = [
        {text: 'Auto update mode'},
        {text: 'Online operator 24/7'},
        {text: 'International posting'},
        {text: 'Unique newsletters'},
        {text: '20 Design templates'},
    ]

    // List items cost (Body 6)
    let ItemCost = [
        {
            name: 'Webmini 1', cost: '1.000.000', pre: '/năm', list: List1, logo:plane
        },
        {
            name: 'Webmini 2', cost: '2.000.000', pre: '/năm', list: List2, logo:rocket
        },
        {
            name: 'Webmini 3', cost: '5.000.000', pre: '/năm', list: List3, logo:rocket2
        },
    ]

    // List Rate clients (Body 7) 
    let RateList = [
        {
            video:video, name: 'Phạm Thanh Bình', info:'UI Designer at Google', avt: avt
        },
        {
            video:video, name: 'Nguyễn Thanh Thưởng', info:'UI Designer at Google', avt: avt
        },
        {
            video:video, name: 'Phạm Thanh Huyền', info:'UI Designer at Google', avt: avt
        },
    ]

    // List Contact Info (Body 8)
    let contacts = [
        {
            icon: FaPhoneVolume, 
            name: 'Hotline',
            content: '0888 136 622',
        },
        {
            icon: IoMdMail, 
            name: 'Gửi Email',
            content: 'dvkh.trueconnect@gmail.com',
        },
        {
            icon: MdLocationPin, 
            name: 'Địa chỉ của chúng tôi',
            content: '80, 22/45/69B Hoàng Văn Thái',
        }
    ]

    let networks = [
        {icon: FaLinkedinIn},
        {icon: FaInstagram},
        {icon: FaFacebookF},
        {icon: FaTwitter},
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
                <div className='lg:px-[10.556%] lg:py-[50px] flex flex-col lg:justify-start'>
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
                <div className='lg:px-[10%] lg:pt-[80px] lg:pb-[40px] flex lg:justify-between lg:gap-[122px]'>
                    <div className='flex flex-col lg:flex-1 items-start'>
                        <h1 className=' lg:mb-[40px] font-lora lg:text-[40px] font-bold text-primary'>Giải đáp thắc mắc</h1>
                        <div className='pb-[20px] border-b-[1px]'>
                            <h2 className='py-[20px] text-[18px] font-bar font-semibold leading-[28px]'>Webmini là gì?</h2>
                            <p className=' font-pop text-[14px] font-normal leading-[25px] text-justify'>
                                Giống 1 website thu nhỏ, với các chức năng cần có tương tự như các trang website hiện có trên thị trường. Webmini cung cấp các tác vụ và giải pháp giúp người sử dụng có thể tự tạo trang web cho riêng mình, với các thao tác bằng tay, đơn giản và được thực hiện ngay trên chính thiết bị di động của mình. Việc này nhằm đơn giản hóa hoạt động thương mại của khách hàng, đồng thời giúp người mua có thể nhanh chóng tiếp cận mong muốn và thực hiện việc mua hàng dễ dàng hơn qua online.
                            </p>
                        </div>
                        <div className='w-full'>
                            {
                                Questions.map((item, index) => (
                                    <div className='flex border-b-[1px] py-[20px] gap-[24px] justify-between' key={index}>
                                        <p className=' font-bar text-[18px] font-semibold leading-[28px]'>{item.text}</p>
                                        <img className='w-[24px] h-[24px]' src={item.icon} alt=''/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='lg:w-[32.611%] flex items-center justify-center'>
                        <img className='w-full' src={body5} alt=''/>
                    </div>
                </div>

                {/* Body 6: Bảng giá dịch vụ */}
                <div className=' w-full lg:px-[10%] lg:py-[50px] flex flex-col lg:justify-start bg-be'>
                    <div className='flex flex-col items-start lg:mb-[50px]'>
                        <h1 className='pt-[16px] pb-[24px] lg:mb-[40px] font-lora lg:text-[40px] font-bold text-primary'>Bảng giá dịch vụ</h1>
                        <p className=' text-center lg:text-start text-[#637381] text-[14px] lg:text-[16px] leading-[28px]'>
                            Choose the perfect plan for your needs. Always flexible to grow
                        </p>
                    </div>
                    <div className='w-full flex lg:flex-row lg:gap-[32px] items-center justify-between'>
                        {
                            ItemCost.map((item, index) => (
                                <div key={index} className='lg:px-[2.7778%] lg:flex-1 lg:pt-[64px] lg:pb-[40px] flex flex-col gap-[40px] bg-[#fff] rounded-[16px] shadow-itemMini'>
                                    <div className=' w-full flex flex-col gap-[40px]'>
                                        <div className='w-full relative flex flex-col items-start gap-[16px]'>
                                            <h2 className=' font-bar font-semibold leading-[36px] text-primary'>{item.name}</h2>
                                            <div>
                                                <span className=' font-bar text-[36px] font-bold leading-[54px] text-[#212B36]'>{item.cost}</span>
                                                <span className=' font-bar text-[20px] font-semibold leading-[30px] text-[#919EAB]'>{item.pre}</span>
                                            </div>
                                            <img className=' absolute top-0 right-0' src={item.logo} alt=''/>
                                        </div>
                                        <div className='flex w-full flex-col items-start gap-[16px]'>
                                            {
                                                item.list.map((item2, index) => (
                                                    <div className='flex justify-start items-center gap-[12px]' key={index}>
                                                        <img className='w-[20px] h-[20px]' src={body6} alt=''/>
                                                        <p className=' font-pop text-[14px] font-normal leading-[26px]'>{item2.text}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div> 
                                    <button className='px-[22px] py-[11px] bg-[#FF0054] text-[#fff] font-pop text-[15px] font-semibold leading-[26px] rounded-[8px]'>
                                        Nâng cấp
                                    </button> 
                                </div>
                            ))
                        }
                        
                    </div>
                </div>

                {/* Body 7: Đánh giá của khách hàng */}
                <div className='lg:px-[10.556%] lg:pt-[127px] flex flex-col lg:justify-start'>
                    <h1 className=' font-lora lg:text-[40px] font-bold text-primary'>Đánh giá của Khách hàng </h1>
                    <div className='border-[#FF0054] border-[1px] lg:mb-[80px] lg:w-[17.708%]'></div>
                    <div className=' w-full flex lg:gap-[32px]'>
                        {
                            RateList.map((item, index) => (
                                <div className='lg:flex-1 bg-[#10375C] px-[1.3889%] pt-[15px] lg:pb-[40px]' key={index}>
                                    <video className='w-full rounded-[14px] lg:mb-[20px]' src={item.video} controls/>
                                    <div className='flex items-center lg:ml-[2.778%] gap-[16px]'>
                                        <img className='w-[56px] h-[56px] rounded-[56px]' src={item.avt} alt=''/>
                                        <div className='flex flex-col items-start text-[#fff]'>
                                            <p className=' font-lato text-[18px] font-bold leading-[28px]'>{item.name}</p>
                                            <p className=' font-lato text-[16px] font-normal leading-[26px]'>{item.info}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Body 8: Liên hệ ngay với chúng tôi */}
                <div className='lg:px-[10.556%] lg:pt-[99px] lg:pb-[150px] flex flex-col lg:justify-start lg:border-b-[1px] lg:border-primary'>
                    <h1 className=' font-lora lg:text-[40px] font-bold text-primary'>Liên hệ ngay với chúng tôi</h1>
                    <div className='border-[#FF0054] border-[1px] lg:mb-[80px] lg:w-[23.125%]'></div>
                    <div className='flex lg:flex-row lg:justify-between'>
                        <form className='flex flex-col items-start lg:px-[2.1528%] lg:py-[30px] bg-primary lg:w-[53.472%] gap-[20px] rounded-[10px]'>
                            <input className='w-full py-[16px] lg:px-[1.3889%] lg:text-[16px] placeholder:leading-[20px] placeholder:font-medium placeholder:font-rale placeholder:text-[#252525] outline-none rounded-[10px] ' type='text' placeholder='Họ và tên'/>
                            <input className='w-full py-[16px] lg:px-[1.3889%] lg:text-[16px] placeholder:leading-[20px] placeholder:font-medium placeholder:font-rale placeholder:text-[#252525] outline-none rounded-[10px] ' type='text' placeholder='Email'/>
                            <input className='w-full py-[16px] lg:px-[1.3889%] lg:text-[16px] placeholder:leading-[20px] placeholder:font-medium placeholder:font-rale placeholder:text-[#252525] outline-none rounded-[10px] ' type='text' placeholder='Số điện thoại'/>
                            <textarea className='w-full py-[16px] lg:px-[1.3889%] lg:text-[16px] placeholder:leading-[20px] placeholder:font-medium placeholder:font-rale placeholder:text-[#252525] outline-none rounded-[10px]  h-[160px]' type='text' placeholder='Ghi chú'/>
                            <button className='lg:px-[20px] lg:py-[13px] mt-[30px] bg-secondary text-[#fff] font-pop lg:text-[16px] leading-[30px] font-normal rounded-[5px]'>Gửi ngay</button>
                        </form>
                        <div className='flex flex-col lg:px-[2.083%] lg:py-[30px] lg:justify-around'>
                            <div className='w-full flex flex-col items-start lg:gap-[32px]'>
                                {
                                    contacts.map((item, index) => (
                                        <div className='flex lg:gap-[16px]' key={index}>
                                            <div className='lg:p-[20px] bg-[#F7F7F7] rounded-[10px]'>
                                                <item.icon />
                                            </div>
                                            <div>
                                                <h3 className=' font-rale lg:text-[20px] font-bold leading-[20px] text-secondary'>{item.name}</h3>
                                                <p className=' font-pop lg:text-[16px] font-normal leading-[30px]'>{item.content}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <h2 className=' text-center text-[#0E1F51] font-rale lg:text-[24px] font-bold lg:leading-[25px] lg:mb-[30px]'>Follow chúng tôi</h2>
                                <div className='flex justify-between'>
                                    {
                                        networks.map((item, index) => (
                                            <div className='lg:p-[20px] bg-secondary lg:text-[24px] font-normal leading-[20px] rounded-[10px] text-[#fff]' key={index}>
                                                <item.icon />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default WebMini;