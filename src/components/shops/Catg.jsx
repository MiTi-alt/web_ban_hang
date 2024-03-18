import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./Customer/images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./Customer/images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./Customer/images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./Customer/images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./Customer/images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./Customer/images/category/cat-2.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Thương hiệu</h1>
          <h1>Cửa hàng</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Xem tất cả thương hiệu</button>
        </div>
      </div>
    </>
  )
}

export default Catg
