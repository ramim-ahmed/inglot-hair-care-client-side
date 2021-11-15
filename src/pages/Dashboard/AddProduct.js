import axios from 'axios';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { GlobalInputField } from "../../Styles/InputField";
import { TextArea } from "../../Styles/TextArea";
const AddProduct = () => {
  const [photo, setPhoto] = useState('');

  const handleImageUpload = event => {

        const imageData = new FormData();

        imageData.set('key', '3e6fac7ec3639b70e8109cbdce0ca3ad');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)

        .then(function (response) {
            setPhoto(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
      }

  const {reset, register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => {

     const product = {...data, photo};

     fetch('https://aqueous-fortress-70124.herokuapp.com/products', {
       method:'POST',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify(product)
     })
     .then( res => res.json())
     .then( data => {
       if(data.insertedId){
         alert('Product Added')
       }
     })

     reset();
     setPhoto('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div>
        <GlobalInputField type='text' placeholder='Product Name' {...register("title", { required: true })} />
        {errors.title && <span style={{color:'red'}}>This field is required</span>}
       </div>

      <div>
      <GlobalInputField type='text' placeholder='Product Category' {...register("category", { required: true })} />
        {errors.category && <span style={{color:'red'}}>This field is required</span>}
      </div>

       <div>
       <TextArea type='text' placeholder='Description' {...register("description", { required: true })} />
        {errors.category && <span style={{color:'red'}}>This field is required</span>}
       </div>

       <div>
        <GlobalInputField type='number' placeholder='Price' {...register("price", { required: true })} />
          {errors.price && <span style={{color:'red'}}>This field is required</span>}
       </div>

        <div>
          <GlobalInputField type='number' placeholder='Product Available Stock' {...register("stock", { required: true })} />
          {errors.stock && <span style={{color:'red'}}>This field is required</span>}
        </div>

      <div>
      <GlobalInputField type='text' placeholder='Rating' {...register("rating", { required: true })} />
        {errors.rating && <span style={{color:'red'}}>This field is required</span>}
      </div>

        <div>
            <GlobalInputField type='text' placeholder='Product Made In..' {...register("made", { required: true })} />
            {errors.made && <span style={{color:'red'}}>This field is required</span>}
        </div>
          <div>
             <label htmlFor='image'>Upload Image</label>
             <br/>
              <GlobalInputField onChange={handleImageUpload} id="image" type="file" />
          </div>
        <AddProductInput type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;


const AddProductInput = styled.input`
      border: 0;
      outline: 0;
      background: transparent;
      padding: 9px 12px;
      font-size: 18px;
      background-color: #A90D90;
      color: white;
      margin: 20px 0;
      width: 100%;
      cursor: pointer;
`