import axios from "axios";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { GlobalInputField } from "../../Styles/InputField";
import { TextArea } from "../../Styles/TextArea";

const Updated = ({ UpdatedProduct }) => {
  const {_id, title, category,photo, price, rating, stock, made, description } =
    UpdatedProduct;

  const [UpdatedPhoto, setUpdatedPhoto] = useState(photo);
  
  const titleRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const stockRef = useRef();
  const ratingRef = useRef();
  const madeRef = useRef();

  const handleImageUpload = (event) => {
    const imageData = new FormData();

    imageData.set("key", "3e6fac7ec3639b70e8109cbdce0ca3ad");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)

      .then(function (response) {
        setUpdatedPhoto(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

 
  const handleUpdatedProduct= e => {
        e.preventDefault();

        const title = titleRef.current.value;
        const category = categoryRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const stock = stockRef.current.value;
        const rating = ratingRef.current.value;
        const made = madeRef.current.value;
        const updateProduct = {
            title, 
            category,
            description,
            price,
            stock,
            rating,
            made,
            photo: UpdatedPhoto || photo

        }
       const url = `https://aqueous-fortress-70124.herokuapp.com/products/update/${_id}`;
       fetch(url, {
           method:'PUT',
           headers:{'Content-Type' :'application/json'},
           body:JSON.stringify(updateProduct)
       })
       .then( res => res.json())
       .then( data => {
           if(data.modifiedCount) {
               alert('Prouduct Updated Successfully')
           }
       })

  }

  return (
    <form onSubmit={handleUpdatedProduct}>
      <div style={{ margin: "20px 0px" }}>
        <label htmlFor="product-name">Product Name</label>
        <GlobalInputField
          defaultValue={title}
          id="product-name"
          type="text"
          placeholder="Product Name"
        ref={titleRef}
        />
        
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <GlobalInputField
          defaultValue={category}
          id="category"
          type="text"
          placeholder="Product Category"
          ref={categoryRef}
        />
       
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <TextArea
          defaultValue={description}
          id="description"
          type="text"
          placeholder="Description"
          ref={descriptionRef}
        />
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <GlobalInputField
          defaultValue={price}
          id="price"
          type="number"
          placeholder="Price"
          ref={priceRef}
        />
      </div>

      <div>
        <label htmlFor="stock">Stock</label>
        <GlobalInputField
          defaultValue={stock}
          id="stock"
          type="number"
          placeholder="Product Available Stock"
          ref={stockRef}
        />
      </div>

      <div>
        <label htmlFor="rating">Rating</label>
        <GlobalInputField
          defaultValue={rating}
          id="rating"
          type="text"
          placeholder="Rating"
          ref={ratingRef}
        />
      </div>

      <div>
        <label htmlFor="made">Made In</label>
        <GlobalInputField
          id="made"
          defaultValue={made}
          type="text"
          placeholder="Product Made In.."
          ref={madeRef}
        />
      </div>
      <div>
        <label htmlFor="image">Upload Image</label>
        <br />
        <GlobalInputField onChange={handleImageUpload} id="image" type="file" />
      </div>
      <UpdatedProductInput type="submit" value="UPDATED" />
    </form>
  );
};

export default Updated;

const UpdatedProductInput = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  padding: 9px 12px;
  font-size: 18px;
  background-color: #a90d90;
  color: white;
  margin: 20px 0;
  width: 100%;
  cursor: pointer;
`;
