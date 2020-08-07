import React from 'react';
import './Imagestyle.css';


const ImageList = (props) => {
  const list = props.images.map((image) =>(
    <img key={image.id} src={image.urls.regular} alt={image.description} />)
  )
  return (
    <div className="image_list">
        {list}
    </div>
  )
}




export default ImageList;