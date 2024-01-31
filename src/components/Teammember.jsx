import React from 'react'
import Card from '../UI/Card'

const Teammember = ({image, name,designation, socials}) => {
  return (
    <Card className='team'>
      <div className='team__img'>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{designation}</p>
      <div className="team__socials">
       <p>Portfolio
       {
          socials.map(({ icon, link}, index) => {
            return <a key={index} href={link} >{icon}</a>
          } )
        }
       </p>
      </div>
    </Card>
  )
}

export default Teammember