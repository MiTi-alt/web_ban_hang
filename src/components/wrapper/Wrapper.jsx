import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Miễn phí chuyển hàng",
      decs: "ĐƠN HÀNG > 300.000Đ",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Thanh toán",
      decs: "Cung cấp nhiều hình thức thanh toán",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Mua trực tiếp từ website",
      decs: "Chính hãng 100%",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Hỗ trợ 24/7",
      decs: "Cung cấp cho khách hàng sự trợ giúp trực tiếp ở bất cứ lúc nào mà khách hàng cần hỗ trợ.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
