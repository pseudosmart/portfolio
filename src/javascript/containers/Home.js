import React from 'react'
const SamThumbnail = require('../../assets/SamCanterburyOct2018.png')


const HomeContainer = () => {
  return (
  <div className="profile">
    <div className="thumbnail">
      <figure>
        <img src={SamThumbnail} alt="Sam Smart" />
      </figure>
    </div>
    <div className="bio">
      <h1>Sam Smart</h1>
      <p>Software Engineer at <a href="https://www.holidayextras.co.uk/">Holiday Extras</a></p>
    </div>
  </div>
  )
}

export default HomeContainer
