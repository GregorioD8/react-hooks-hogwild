import React from "react"


function Filter( { sortBy, onChangeSortBy, showGreased, onChangeShowGreased }){

    function handleChangeSortBy(e){
    onChangeSortBy(e.target.value)
    
}

function handleToggleGreased(e) {
    onChangeShowGreased(e.target.checked)
}

return (
    <div className="filterContainer">
        <div className="ui menu">
            <div className="ui item">
                <label>Sort by</label>
            </div>
            <div className="ui item">
                <select
                    className="ui selection dropdown"
                    name="sort"
                    onChange={handleChangeSortBy}
                    value={sortBy}
                >
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
            <div className="ui item">
                <label>Filter by greased</label>
            </div>
            <div className="ui item">
                <input
                className="ui toggle checkbox"
                checked={showGreased}
                onChange={handleToggleGreased}
                type="checkbox"
                />
            </div>
        </div>
    </div>
)
}

export default Filter






// import React from "react";
// import { useState } from "react"



// function Toggle() {
//   const [isOn, setIsOn] = useState(false)

//   function handleClick(){
//   setIsOn((isOn) => !isOn)
// }

// const color = isOn ? "red" : "white"

//   return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
// }

// export default Toggle;
