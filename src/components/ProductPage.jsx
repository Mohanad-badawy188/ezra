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
    if(amount=== 0){
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
                       
                        <div className="d-flex justify-content-a/snap/code/108/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlround "> 

                        <button  onClick={clickHandler}   style={{
          backgroundColor:planter === "1" ? 'salmon' : ''
        
        }} id="1" className="d-flex  col-3 mt-3  planter justify-content-center">
                        <svg className="m-2 " id="1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" height="30" width="30" aria-hidden="true">
                        <path strokeMiterlimit="10"  stroke="#2D2A24" d="M9.01552 8.69261V31.8677C9.01552 37.4553 15.7201 42 24.0078 42C32.2954 42 39 37.5019 39 31.8677V8.5214M23.9457 11.1206C32.2178 11.1206 38.969 9.98444 38.969 8.55253C38.969 7.12062 32.2488 6 23.9457 6C15.6425 6 9 7.13619 9 8.5214C9 9.90661 15.6891 11.1206 23.9457 11.1206Z"></path>
                        </svg>  
                        <p className="m-2" id="1"> Upcycled</p>
                       </button>




                        <button  onClick={clickHandler}  id="2" name ={"ff"}   style={{
          backgroundColor:planter === "2"? 'salmon' : ''
        
        }}
          className="d-flex  col-3 mt-3  planter justify-content-center"    >
                        <svg id="2" className="m-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" height="30" width="30">
                        <path  strokeMiterlimit="10" stroke="#2D2A24" d="M9.02975 9.69155V36.6989C9.02975 39.6522 15.7377 42 24.0223 42C32.3069 42 39 39.6226 39 36.6989V9.52912M24.0372 12.6005C32.3069 12.6005 39 11.1239 39 9.30763C39 7.49139 32.2474 6 24.0372 6C15.827 6 9 7.47662 9 9.30763C9 11.1386 15.7675 12.6005 24.0372 12.6005Z"></path>
                        </svg>

                        <p id="2"  className="m-2"> burbank</p>
                        </button>



                        <button  onClick={clickHandler} style={{
          backgroundColor:planter === "3"? 'salmon' : ''
        
        }}   id="3"  className="d-flex  col-3 mt-3   planter justify-content-center">
                        <svg className="m-2"   id="3" fill="white" viewBox="0 0 48 48" height="30" width="30" aria-hidden="true">
                        <path stroke="#2D2A24" d="M7.06284 8.47581L7.65978 16.4016L8.5395 16.8839L13.535 40.4684C17.0915 41.6008 20.809 42.1117 24.5314 41.9796C28.2537 42.1087 31.9707 41.5979 35.5278 40.4684L40.4448 16.8839L41.3088 16.4016L41.9215 8.47581M8.61441 17.2376C19.4162 19.2629 29.5693 19.2629 40.3711 17.2376M24.7199 11.2249C34.0355 11.2249 42 10.0513 42 8.60442C42 7.15752 34.1454 6 24.7199 6C15.2944 6 7 7.18967 7 8.60442C7 10.0192 15.3887 11.2249 24.7199 11.2249Z"></path>
                        </svg>

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