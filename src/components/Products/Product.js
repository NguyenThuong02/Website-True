import Footer from "../Footer/Footer";
import h1 from '../../img/Product/h1.svg'
import h2 from '../../img/Product/h2.svg'
import h3 from '../../img/Product/h3.svg'
import h4 from '../../img/Product/h4.svg'
import h5 from '../../img/Product/h5.svg'
import h6 from '../../img/Product/h6.svg'
import { Link } from "react-router-dom";


function Product() {

    let Items = [
        {link: '/webmini', title: 'Website Mini', icon:h1, text: 'Tạo website đơn giản tích hợp gian hàng online'},
        {link: '/', title: 'Danh thiếp điện tử', icon:h2, text: 'Xây dựng thương hiệu cá nhân trên mọi nền tảng'},
        {link: '/', title: 'Dịch vụ Phát triển website', icon:h3, text: 'Xây dựng và nhập liệu website phù hợp cho doanh nghiệp'},
        {link: '/', title: 'Dịch vụ Công nghệ thông tin cho thuê', icon:h4, text: 'Phát triển phần mềm CNTT phục vụ cho Doanh nghiệp'},
        {link: '/', title: 'Dịch vụ Quản trị, vận hành và tối ưu hệ thống (Managed Services)', icon:h5, text: ''},
        {link: '/', title: 'Dịch vụ Tư vấn chuyển đổi số', icon:h6, text: 'Tư vấn tận dụng Công nghệ để tối ưu hóa hoạt động doanh nghiệp'},

    ]

    return (
        <div className="w-full">
            <div className="w-full flex justify-center px-[var(--margin-mobile)] py-[90px] lg:px-[10%] lg:py-[175px] bg-be">
                <div className=" w-full grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-[25px] lg:gap-x-[25px] lg:gap-y-[30%] lg:h-[461px] px-[7.716%] lg:px-[2.6042%] py-[60px] lg:py-[60px] bg-[#fff] shadow-box rounded-[16px]">
                    {
                        Items.map((item, index) => (
                            <div key={index} className="flex items-center h-[82px] gap-[20px]">
                                <img className="w-[61px] lg:w-[82px] h-[61px] lg:h-[82px]" src={item.icon} alt=""/>
                                <div className="flex flex-col justify-between gap-[3px]">
                                    <Link className="font-rale text-[16px] lg:text-[18px] font-extrabold leading-[26px] hover:text-[#FF0054]"
                                        to={item.link}
                                    >
                                        {item.title}
                                    </Link>
                                    <p className=" font-pop text-[12px] lg:text-[14px] text-[#637381] font-normal leading-[25px]">{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;