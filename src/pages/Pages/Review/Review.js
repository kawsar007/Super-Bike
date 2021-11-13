
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css';

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios.post('https://thawing-escarpment-88664.herokuapp.com/reviews', data)
    .then(res => {
      if(res.data.insertedId){
        alert("Your review successful post.");
        reset();
      }
    })
  };

  return (
    <div className="review">
      <h2>Review Page</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <input {...register("star")} placeholder="review-star" />
      <textarea {...register("review")} placeholder="review-message" />
      <input type="submit" />
    </form>
    </div>
  )
}

export default Review;
