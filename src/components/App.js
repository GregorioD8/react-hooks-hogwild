import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import hogs from "../porkers_data";
import Filter from "./Filter"




function App() {
const [showGreased, setShowGreased] = useState(false)
const [sortBy, setSortBy] = useState("name")

const visibleHogs = hogs
.filter((hog) => showGreased ? hog.greased : true)
.sort((hog1, hog2) => {
	if (sortBy === "weight") {
		return hog1.weight - hog2.weight
	} else {
		return hog1.name.localeCompare(hog2.name)
	}
})

	return (
		<div className="ui grid container App">
			<Nav />
			
			<Filter
			showGreased={showGreased} 
			onChangeShowGreased={setShowGreased}
			sortBy={sortBy}
			onChangeSortBy={setSortBy}
			/>
	
			<HogList hogs={visibleHogs}/>
		</div>
	);
}

export default App;
