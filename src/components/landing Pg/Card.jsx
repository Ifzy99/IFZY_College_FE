import React from 'react'


const Card = ({title,image, myStyle,myFunc,className}) => {
   
  return (
    <>
    <div onClick={myFunc} className={className} style={myStyle} myFunc={myFunc}>
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo fuga excepturi, repellendus tempore explicabo rerum! Corrupti at perspiciatis incidunt? Totam, et consequuntur est temporibus dicta ab sequi eveniet voluptas impedit maiores facere enim.</p>
    </div>
  </div>
    </>
  )
}

export default Card