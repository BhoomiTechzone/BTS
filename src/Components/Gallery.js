import React from 'react';

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
        {
            image: "https://raw.githubusercontent.com/Bhi2710/Image/main/image6.jpeg",
            description: "image"    
        },
        {
            image: "https://raw.githubusercontent.com/Bhi2710/Image/main/image7.jpeg",
            description: "image"    
        },
        {
            image: "https://raw.githubusercontent.com/Bhi2710/Image/main/image8.jpeg",
            description: "image"    
        },
    ]

    return (
        <div className='gallary-main-container'>
            <div className='gallery-heading'>
              <h1>Image Container</h1>
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