import React from 'react';
import Navbar from './Navbar';
import { NavLink } from "react-router-dom";

const Gallery = () => {

    const imageContainer = [
        {
            image: "https://raw.githubusercontent.com/Bhi2710/Image/main/image1.jpeg",
            description: "image"    
        },
        {
            image: "https://raw.githubusercontent.com/Bhi2710/Image/main/image3.jpeg",
            description: "image"    
        },
        {
            image: "https://raw.githubusercontent.com/Bhi2710/Image/main/image4.jpeg",
            description: "image"    
        },
        {
            image: "https://raw.githubusercontent.com/Bhi2710/Image/main/image5.jpeg",
            description: "image"    
        },
    ]

    return (
        <div>
            <Navbar />
            <div className="sub-navbar">
                <h3>Services</h3>
                <h3>
                    <NavLink to="/" className="navlink">
                        Home
                    </NavLink>
                    <span> / </span>
                    <NavLink to="/gallery" className="navlink">
                        Gallery
                    </NavLink>
                </h3>
            </div>

            <div className='gallery-container'>
                  {
                    imageContainer.map((ele,idx)=>{
                        return(
                            <div className='gallery-container-images' key={idx}>
                              <img src={ele.image} alt={ele.description} width={"400px"} height={"500px"}/>
                            </div>
                        )
                    })
                  }
            </div>

        </div>
    )
}

export default Gallery;