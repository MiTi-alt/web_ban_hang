import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Bonik</h1>
            <p>
              © 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ
              Giấy chứng nhận đăng ký doanh nghiệp: 0304998358 do Sở KH-ĐT TP.HCM cấp lần đầu ngày 30 tháng 05 năm 2007
            </p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Về chúng tôi</h2>
            <ul>
              <li>Giới thiệu công ty</li>
              <li>Tuyển dụng</li>
              <li>Gửi góp ý, khiếu nại</li>
              <li>Tìm cửa hàng</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Hỗ trợ khách hàng</h2>
            <ul>
              <li>Hướng dẫn mua online</li>
              <li>Thẻ ưu đãi</li>
              <li>Chính sách trả góp</li>
              <li>Ưu đãi dành cho doanh nghiệp</li>
              <li>Dịch vụ sửa chữa</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Liên hệ chúng tôi</h2>
            <ul>
              <li>22/4 Đông Hòa, Tân Hòa, Dĩ An, Bình Dương</li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +346398280</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
