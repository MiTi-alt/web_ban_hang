import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +346398280</label>
            <i className='fa fa-envelope'></i>
            <label> support@ui-lib.com</label>
          </div>
          <div className='right row RText'>
            {/*<label>Theme FAQ"s</label>*/}
            <label>Hỗ trợ?</label>
            {/*<span>🏳️‍⚧️</span>*/}
            <span>🏳️‍</span>
            <label>EN</label>
            {/*<span>🏳️‍⚧️</span>*/}
            <span>🏳️‍ </span>
            <label>VN</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
