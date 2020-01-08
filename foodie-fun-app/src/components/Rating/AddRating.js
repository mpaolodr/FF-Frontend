import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactStars from "react-stars";
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
  align-items: center;
  flex-direction: column;
  position: relative;
  marign-bottom: 10px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #ecb847;
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

export const AddRating = () => {
	const { handleSubmit, register, errors, reset, control } = useForm({
		defaultValues: {
			food_rating: 0,
			drinks_rating: 0,
			decor_rating: 0,
			service_rating: 0,
			cleanliness_rating: 0,
			vibe: 0
		}
	});

	const onSubmit = (values, e) => {
		e.preventDefault();
		console.log(values)
	}

	return (
		<FormContainer>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Heading>Add Rating</Heading>
				<IndField>
					<Label htmlFor="food_rating">Food Rating</Label>
					<Controller as={
						<ReactStars
							className="food_rating"
							name="food_rating"
							count={5}
							size={25}
							color2={"#ffd700"}
							ref={register({ required: true, name: "food_rating" })}
						/>
					}
						name="food_rating"
						id="food_rating"
						control={control}
					/>

					{errors.food_rating && errors.food_rating.type === "required" && (
						<ErrorMessage>This field is required</ErrorMessage>
					)}
				</IndField>

				<IndField>
					<Label htmlFor="drinks_rating">Drinks Rating</Label>
					<Controller as={
						<ReactStars
							className="drinks_rating"
							name="drinks_rating"
							count={5}
							size={25}
							color2={"#ffd700"}
							ref={register({ required: true, name: "drinks_rating" })}
						/>
					}
						name="drinks_rating"
						id="drinks_rating"
						control={control}
					/>

					{errors.drinks_rating && errors.drinks_rating.type === "required" && (
						<ErrorMessage>This field is required</ErrorMessage>
					)}
				</IndField>

				<IndField>
					<Label htmlFor="decor_rating">Decor Rating</Label>
					<Controller as={
						<ReactStars
							className="decor_rating"
							name="decor_rating"
							count={5}
							size={25}
							color2={"#ffd700"}
							ref={register({ required: true, name: "decor_rating" })}
						/>
					}
						name="decor_rating"
						id="decor_rating"
						control={control}
					/>

					{errors.decor_rating && errors.decor_rating.type === "required" && (
						<ErrorMessage>This field is required</ErrorMessage>
					)}
				</IndField>

				<IndField>
					<Label htmlFor="service_rating">Service Rating</Label>
					<Controller as={
						<ReactStars
							className="service_rating"
							name="service_rating"
							count={5}
							size={25}
							color2={"#ffd700"}
							ref={register({ required: true, name: "service_rating" })}
						/>
					}
						name="service_rating"
						id="service_rating"
						control={control}
					/>

					{errors.service_rating && errors.service_rating.type === "required" && (
						<ErrorMessage>This field is required</ErrorMessage>
					)}
				</IndField>

				<IndField>
					<Label htmlFor="cleanliness_rating">Cleanliness Rating</Label>
					<Controller as={
						<ReactStars
							className="cleanliness_rating"
							name="cleanliness_rating"
							count={5}
							size={25}
							color2={"#ffd700"}
							ref={register({ required: true, name: "cleanliness_rating" })}
						/>
					}
						name="cleanliness_rating"
						id="cleanliness_rating"
						control={control}
					/>

					{errors.cleaniness_rating && errors.cleaniness_rating.type === "required" && (
						<ErrorMessage>This field is required</ErrorMessage>
					)}
				</IndField>

				<IndField>
					<Label htmlFor="vibe">Vibe Rating</Label>
					<Controller as={
						<ReactStars
							className="vibe"
							name="vibe"
							count={5}
							size={25}
							color2={"#ffd700"}
							ref={register({ required: true, name: "vibe" })}
						/>
					}
						name="vibe"
						id="vibe"
						control={control}
					/>

					{errors.vibe && errors.vibe.type === "required" && (
						<ErrorMessage>This field is required</ErrorMessage>
					)}
				</IndField>
				<SubmitBtn type="submit">Add Rating</SubmitBtn>
			</Form>
		</FormContainer>
	)
};