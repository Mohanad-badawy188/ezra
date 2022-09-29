import React from "react";
import * as Unicons from '@iconscout/react-unicons';
import products from './products';

function Store (){

    return (<div>

<div className="bg-light">
    <div className="container">
    <h1 className="text-center pt-5"> plants  </h1>

<div className=" d-flex justify-content-between">
<div className="d-flex">
      <h1>Sort Products :    </h1> 
      <select className="m-3">
      <option>all</option>
      <option>Newest</option>
      <option>price(asc)</option>
      <option>Price(desc</option>
    
      </select>
 
    </div>
    <div className="d-flex">
      <h1>Filter Products :    </h1> 
      <select className="m-3">
      <option>all</option>
      <option>low maintenece</option>
      <option>pet friendly</option>
      <option>out door</option>
      <option>gifts</option>
      </select>
 
    </div>
</div>
 
    <div className="d-flex d-block container text-center item">

    {     products.map((props)=>(<div

       className="col-4 item" key={props.id}>
        <div className="card me-5">
        <div className = "card">
        <img className="circle-img" src={props.img} alt="avatar_img" />
        <div className="d-flex icons"> 
      <a href="/productPage">  < Unicons.UilShoppingCart size = "50" className="iconBG"  />   </a> 
      <a href="/productPage">     < Unicons.UilHeart  size = "50" className="iconBG"/></a> 
      <a href="/productPage">    < Unicons.UilSearch size = "50" className="iconBG"/>  </a> 
   
    
    </div>
        </div>
   
           <div className="card-body">
    <h3 className="card-title">{props.name}</h3>
    <p className="card-text">{props.description}</p>
    <h5> price : {props.price}</h5>
   

  </div>    
  </div>

</div>))
     }
    
   

     
         </div>
    </div>
 
    

</div>

    </div>

    )
}
export default Store