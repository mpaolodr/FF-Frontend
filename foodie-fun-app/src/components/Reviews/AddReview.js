import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ReactStars } from ".";
import styled from "styled-components";
import backgroundImg from "../Authentication/assets/signup-bg-2.svg";

const FormContainer = styled.div`
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  mix-blend-mode: multiply;

  &:after {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Heading = styled.h1`
  color: #ecb847;
  font-size: 2.5rem;
  margin: 10px 0;
`;

const Form = styled.form`
  border-radius: 10px;
  background: rgba(24, 18, 18, 0.8);
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
`;

const IndField = styled.div`
  width: 80%;
  height: 90px;
  display: flex;
  justify-items: space-between;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  marign-bottom: 10px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #ecb847;
`;

const InputField = styled.input`
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;

  ::placeholder {
    font-style: italic;
  }
`;

const InputFieldMoney = styled.input`
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;

  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='15px' width='85px'><text x='2' y='13' fill='black' font-size='16' font-family='arial'>$</text></svg>");
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 12px;

  ::placeholder {
    font-style: italic;
  }
`;

const ReviewField = styled.textarea`
  border-radius: 5px;
  resize: vertical;
  width: 100%;
`;

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  position: absolute;
  bottom: -15px;
  left: 0;
  color: #fff;

  &:before {
    content: "⚠ ";
    display: inline;
  }
`;

const SubmitBtn = styled.button`
  width: 40%;
  padding: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  background: #c45228;
  border: 0.5px solid #c45228;
  border-radius: 10px;
  transition: all 0.5s;
  margin: 2% 0;

  &:hover {
    background: #fff;
    color: #c45228;
    transition: all 0.5s;
  }

  &:focus {
    outline: none;
  }
`;

//Component

export const AddReview = () => {
  const { handleSubmit, register, errors, reset, control } = useForm({
    defaultValues: {
      cuisineType: "",
      menuName: "",
      price: "",
      rating: 0,
      review: "",
      foodPic: ""
    }
  });

  const onSubmit = (values, e) => {
    e.preventDefault();
    console.log(values);
    reset();
  };
  //   console.log(errors);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading>Add Review</Heading>

        <IndField>
          <Label htmlFor="cuisineType">Cuisine Type</Label>
          <InputField
            type="text"
            name="cuisineType"
            id="cuisineType"
            placeholder="Select food type"
            ref={register({
              required: true
            })}
          />
          {errors.cuisineType && errors.cuisineType.type === "required" && (
            <ErrorMessage>This field is required</ErrorMessage>
          )}
        </IndField>

        <IndField>
          <Label htmlFor="menuName">Menu</Label>
          <InputField
            type="text"
            name="menuName"
            id="menuName"
            placeholder="What did you get while you were there?"
            ref={register({
              required: true
            })}
          />
          {errors.menuName && errors.menuName.type === "required" && (
            <ErrorMessage>This field is required</ErrorMessage>
          )}
        </IndField>

        <IndField>
          <Label htmlFor="foodPic">Picture of your food (optional)</Label>
          <InputField
            type="file"
            name="foodPic"
            id="foodPic"
            accept="image/*"
            ref={register}
          />
        </IndField>

        <IndField>
          <Label htmlFor="price">Price</Label>
          <Controller
            as={
              <ReactStars
                className="react-stars"
                half={false}
                char={"\u0024"}
                count={5}
                size={24}
                color2={"#ffd700"}
                ref={register}
              />
            }
            name="price"
            id="price"
            control={control}
          />
          {errors.price && errors.price.type === "required" && (
            <ErrorMessage>This field is required</ErrorMessage>
          )}
        </IndField>

        <IndField>
          <Label htmlFor="rating">Rating</Label>
          <Controller
            as={
              <ReactStars
                count={5}
                size={24}
                color2={"#ffd700"}
                ref={register({ required: true })}
              />
            }
            name="rating"
            id="rating"
            control={control}
          />
          {errors.rating && errors.rating.type === "required" && (
            <ErrorMessage>This field is required</ErrorMessage>
          )}
        </IndField>

        <IndField>
          <Label htmlFor="review">Review</Label>
          <ReviewField
            id="review"
            name="review"
            rows="50"
            ref={register}
          ></ReviewField>
        </IndField>

        <SubmitBtn type="submit">Add Review</SubmitBtn>
      </Form>
    </FormContainer>
  );
};
