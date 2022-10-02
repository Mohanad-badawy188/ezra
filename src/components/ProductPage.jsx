import React,{useState} from 'react'
import * as Unicons from '@iconscout/react-unicons';

const ProductPage = () => {
    const [amount,setAmount]= useState(1)
    const [planter,setPlanter]= useState(0)


const style ={
    backgroundColor :planter
}

function clickHandler(event){

let ids = (event.target.id)
setPlanter(ids)


event.preventDefault()

}

const clickHandlerPlus =()=>{
setAmount((amount+1)
)
}
const clickHandlerMinus =()=>{
    if(amount=== 1){
        return ;
    }else {
        setAmount(amount-1)
    }
  
    
    }
   

  return (
    <div className=" product">
        <div className="size"> 
            <img src="https://bloomscape.com/wp-content/uploads/2022/08/bloomscape_yellow-bromeliad_sm_angle2-324x389.jpg?ver=927247"/>
            </div>
            <div className="size">
                <h1  > Bromeliad Guzmania Yellow</h1>
                <h4 className="mt-5"> The Schefflera Arboricola features a single or braided trunk and tree-like clusters of leaflets, which have been likened to umbrellas, wheels, and octopi! You can help it retain its foliage by placing it in bright light and spacing out waterings. Sized to ship best, our large Umbrella Tree arrives with room to grow as it adapts to your home’s conditions.

</h4>function
                <h2 className="mt-5 price mb-5"> $ 50 </h2>
                <div> 
                    <h5> Planter : </h5>
               
                    <form> 
                       
                        <div className="d-flex "> 

                        <button  onClick={clickHandler}   style={{
          border:planter === "1" ? 'solid black 1px' : ''
        
        }} id="1" className="d-flex  col-3 mt-3  planter justify-content-center">
                        <img id='1' className="m-2 rounded "  src='https://m.media-amazon.com/images/I/41Q86KNr1FS._AC_UL320_.jpg
' />  
                        <p className="m-2" id="1"> Upcycled</p>
                       </button>

                     

                        <button  onClick={clickHandler}  id="2" name ={"ff"}   style={{
          border:planter === "2"? 'solid black 1px' : ''
        
        }}
          className="d-flex  col-3 mt-3  planter justify-content-center"    >
                       <img id='2' className="m-2 rounded"  src='https://m.media-amazon.com/images/I/71hx0Sm9PML._AC_UL320_.jpg' />
                     

                        <p id="2"  className="m-2"> burbank</p>
                        </button>



                        <button  onClick={clickHandler} style={{
          border:planter === "3"? 'solid black 1px' : ''
        
        }}   id="3"  className="d-flex  col-3 mt-3   planter justify-content-center">
                     <img id='3' className="m-2"  src='https://m.media-amazon.com/images/I/410N3XWTVEL._AC_UL320_.jpg' />

                        <p className="m-2"   id="3">  Grow pot</p> 
                        </button>
                       
                       
                 
                     
</div>
<div className="d-flex"> 


<div className="d-flex m-5 ps-5  "> 
                    <span onClick={clickHandlerMinus}> <Unicons.UilMinus />  </span> 
                     <div className="amount">{amount} </div> 
                      <span onClick={clickHandlerPlus}> <Unicons.UilPlus /> </span>
                </div>

                <div> 
                  <a  href="/cart" className="btn  btn-success w-100 m-5 ">  Add To Cart</a>
                </div>

             </div>

                    </form>
                </div>

             </div>
    </div>
  )
}

export default ProductPage