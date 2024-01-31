import React from 'react'
import './plans.css';
import HeaderImage from '../../images/header_1.jpg'
import Header from '../../components/Header';
import {plans} from '../../data'
import Card from '../../UI/Card'

const Plans = () => {
  // const planLenght = 5;
  // const plan =[]
  // for (let i=0;i<planLenght;i++){
  //   plan.push( <Plan data={plans[i]} key={i}/>)
  // }
  return (
    <> <Header title="Our Gallery" image={HeaderImage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
    voluptas consequatur, sapiente aperiam laborum at neque magnam nisi
    atque repellendus!{" "}
  </Header>
  <section className="plans">
    <div className="container plan">
      {
        plans.map(({id, name, desc, price, features}) => {
          return <Card key={id}  className='plan-card'>
            <h3>
              {name}
            </h3>
            <small>
              {desc}
            </small>
            <h1>
              {`$${price}`}
            </h1>
            <h2>/mo</h2>
            <h4>Features</h4>
            {
              features.map(({feature, available }, index) => {
                return <p key={index} className={!available ? 'disabled' : ''} >{feature}</p>
              })
            }
            <button className='btn lg' >Visit us </button>
          </Card>
        })
      }
    </div>
  </section>
  
  </>
  )
}

export default Plans