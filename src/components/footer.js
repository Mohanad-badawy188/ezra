import React from "react";
function Footer(){
    const date=new Date()
    const year=date.getFullYear()

    return (   
        <div className="footer-padding">
          <div className="footer">
            <p>EZRAA @ {year} </p>
          </div>
        
        </div>
      
        )
}
export default Footer