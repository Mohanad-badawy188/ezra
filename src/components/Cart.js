import React from 'react'
import planter from './planter'

const Cart = () => {

function Product (props){
return(<div className=" mt-5 pb-5">

<div className="d-flex ">

<img height="300px"  src="https://bloomscape.com/wp-content/uploads/2022/08/bloomscape_yellow-bromeliad_sm_angle2-324x389.jpg?ver=927247" />

<div className="product-details" >
<h5>Product : {props.name}</h5>
<h5> id : {props.id} </h5>
<h5>planter : <img src = {props.planter} height="30px"/>

              </h5>
<h5> size : {props.size} </h5>




</div>
</div>
</div>


)




}

  return (
  <div className="cart-page">
    <div className='title'> 
         YOUR BAG
    </div>
    <div className=" d-flex justify-content-between mt-5">
        <button className="btn cont-shopping">CONTINUE SHOPPING</button>
       <div className="d-flex  "> 
        <h5 className='me-5 shopping-bag'>YOUR SHOPPING BAG (2)</h5>
        <h5 className="shopping-bag">YOUR WISHLIST</h5>
       </div>
        <button className="btn check-out">CHECKOUT NOW</button>
         </div>
         <div className="d-flex">
<div className="checkoutProducts">
<Product
        name=" Bromeliad Guzmania Yellow"
         id="2"
           size ="small" 
           planter ="https://m.media-amazon.com/images/I/410N3XWTVEL._AC_UL320_.jpg" 
           />
  <hr className="product-hr"></hr>
        <Product
        name=" Bromeliad Guzmania Yellow"
         id="2"
           size ="small" 
           planter ="https://m.media-amazon.com/images/I/410N3XWTVEL._AC_UL320_.jpg" 
           />

</div>
<div className="summary" >
  <h1 className="mb-5 mt-5 text-center">ORDER SUMMARY</h1>
  <div className="product-details">
    <div className="d-flex justify-content-between mb-3">
    <h5>Subtotal</h5>
    <h5> $ 80</h5>

    </div>
    <div className="d-flex justify-content-between mb-3">
    <h5>Estimated Shipping</h5>
    <h5> $ 5 </h5>
    </div>
    <div className="d-flex justify-content-between mb-3">
    <h5>Shipping Discount</h5>
    <h5>$ 5</h5>
  

    </div>
    <div className="d-flex justify-content-between mb-3">
    <h2>Total</h2>
    <h5> $ 80</h5>
    </div>




<button className="check-out">CHECKOUT NOW</button>
  </div>
</div>

         </div>
   
  </div>
  )
}

export default Cart