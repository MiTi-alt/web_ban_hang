import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Tivi",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Tủ lạnh",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Máy giặt",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Máy lạnh",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Lọc nước",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Nồi chiên",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Bếp điện",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Quạt",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Loa",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Điện thoại",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Gia dụng",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
