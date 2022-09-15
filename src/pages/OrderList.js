import React from 'react'
import { useState } from 'react'
import '../components/Order.css'
import OrderCard from '../components/OrderCard'
import orders from '../components/Data'
import MetaData from '../layout/MetaData'
import { getOrders } from '../LocalStorage/UseLocalStorage'
import Navbartest from '../components/navbar/Navbartest'
function OrderList({user}){
  let order=getOrders()
  console.log("inside orderList",order)
  return (
   <>
     <MetaData title={`${user.name} - Orders`} />
     <Navbartest user={user}></Navbartest>
      <div className="orders__container">
        {!order || (order && orders.length === 0) ? (
          <h1>No orders</h1>
        ) : (
          <>
            {order?.map((item) => (
              <OrderCard
                name={item?.title}
                price={item?.price}
                img={item?.img[0]}
                orderby={user.name}
              />
            ))}
          </>
        )}
      </div>
      </>
  )
}

export default OrderList