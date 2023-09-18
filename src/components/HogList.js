import React from "react"
import Hog from "./Hog"

function HogList({ hogs }){

 const hogList = hogs.map((hog) => (
    <Hog
    key={hog.name}
    name={hog.name}
    image={hog.image}
    specialty={hog.specialty}
    weight={hog.weight}
    greased={hog.greased}
    highest={hog["highest medal achieved"]}
    />
 ))    

    return (
        <div class="ui link cards">
        {hogList}
        </div>
    )
}

export default HogList