import React, { useState } from "react";
import Card from "../../ReusableComponents/Card";
import { cardData } from "../../data/card";
import "../../ReusableComponents/Card.css";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("default");
    
    const handleSearch = (e) => { //event handler for search input
        setSearchTerm(e.target.value);
    };
    
    
    // Filter the data based on search term,used let beacuse we are reassigning the filteredData variable during sort
    let filteredData = cardData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const handleSort = (e) => {
        setSortOrder(e.target.value);
    };

    // Sort the filtered data based on price
    if (sortOrder === "lowToHigh") {
        filteredData = [...filteredData].sort((a, b) => a.price - b.price);
    } 
    else if (sortOrder === "highToLow") {
        filteredData = [...filteredData].sort((a, b) => b.price - a.price);
    }
    
    return(
        <>
            <div className="search-container container mt-4 mb-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-6">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search products..." 
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <select 
                            className="form-control" 
                            value={sortOrder} 
                            onChange={handleSort}
                        >
                            <option value="default">Sort by</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <Card data={filteredData} />
        </>
    )
}

export default Home;