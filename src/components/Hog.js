import React, {useState} from "react"

function Hog({ name, image, specialty, weight, greased, highest }){
    const [visible, setVisible] = React.useState(false)
   
    function handleClick() {
        setVisible(!visible)
    }

    
    return (
    
        <div class="card" onClick={handleClick}>
            <div class="image">
            <img src={image}/>
            </div>
            <div class="content">
            <h3 >{name}</h3>
            
            </div>
            <div style= {{display: visible ?  'block' : 'none'}}>
                <div class="meta">
                    <a>{specialty}</a>
                </div>

                <div class="extra content">
                    
                    <span class="left floated">
                    {weight} lbs
                    </span>

                    <span class="center floated">
                       
                    {greased ?  'Greased' : 'Not greased'}
                    </span>
                   
                    <span class="right floated">
                    {highest}
                    </span>
                </div>    
            </div>    
        </div>  
    
    )
}

export default Hog

/* // <div class="image">
// <img src={image} />
// </div>
// <div class="cards">
// <div class="content">
//   <h3 class="name">{name}</h3>
//   <div class="meta">2 days ago</div>
//   <div class="description">
//   <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.}</p>
//   <p>Many people also have their own barometers for what makes a cute dog.</p>
//   </div>
// </div>
// </div> */

        // <div 
        // className="pigTile"
        // > 
        // <img src={image} className="minPigTile"></img>
        //     <h3 >
        //     pig h3
        //     </h3>
        // </div>