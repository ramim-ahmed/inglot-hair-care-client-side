import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { GlobalInputField } from "../../Styles/InputField";
import { TextArea } from "../../Styles/TextArea";

const Review = () => {
  const [photo, setPhoto] = useState("");

  const handleImageUpload = (event) => {
    const imageData = new FormData();

    imageData.set("key", "3e6fac7ec3639b70e8109cbdce0ca3ad");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)

      .then(function (response) {
        setPhoto(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

   const reviewData = {...data, photo};

    fetch('https://aqueous-fortress-70124.herokuapp.com/reviews', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(reviewData)
      })
      .then( res => res.json())
      .then( data => {
        if(data.insertedId){
          alert('Thanks your valueable feedback');
        }
      })
 
      reset();
      setPhoto('')

  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <GlobalInputField
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>

        <div>
          <GlobalInputField
            type="text"
            placeholder="Designation"
            {...register("designation", { required: true })}
          />
          {errors.designation && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>

        <div>
          <GlobalInputField
            type="text"
            placeholder="Country"
            {...register("country", { required: true })}
          />
          {errors.country && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div>
          <GlobalInputField
            type="number"
            placeholder="Rating number max 5 or below"
            {...register("rating", { min: 1, max: 5 })}
          />
          {errors.rating && (
            <span style={{ color: "red" }}>This field must be number max 5 or below</span>
          )}
        </div>

        <div>
          <TextArea
            type="text"
            placeholder="Comments"
            {...register("commnents", { required: true })}
          />
          {errors.commnents && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
        </div>
        <div>
          <label htmlFor="image">Upload Your Image</label>
          <br />
          <GlobalInputField
            onChange={handleImageUpload}
            id="image"
            type="file"
          />
        </div>
        <ReviewSubmitInput type="submit" value='Review' />
      </form>
    </div>
  );
};

export default Review;

const ReviewSubmitInput = styled.input`
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
