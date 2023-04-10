import React from "react";
import { useForm,Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css"

const schema = yup.object().shape({
  mobileNumber: yup
    .string()
    .matches(/^(\+88)?01[0-9]{9}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full flex flex-col backdrop-filter-none mx-auto sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12 lg:py-16 bg-gray-800 my-8 py-12 p-10 text-white ">
   
     
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  justify-evenly gap-3 backdrop-filter-none"
      >
        <Controller
className="text-input"
        
  name="mobileNumber"
  control={control}
  rules={{
    validate: (value) => isValidPhoneNumber(value)
  }}
  render={({ field: { onChange, value } }) => (
    <PhoneInput 
    className="text-input px-1 py-1"
      value={value}
      placeholder="Enter Your Mobile Number"
      onChange={onChange}
      defaultCountry="BD"
      id="mobileNumber"
    />
  )}
/>
{errors.mobileNumber && (
  <p className="error-message">Invalid Phone Number</p>
)}





       
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="text-input ,"
            placeholder="Enter Your Password"
            type="password"
            id="password"
            {...register("password")}
          />
          {errors.password && <p  className="text-red-500 backdrop-filter-none  ">{errors.password.message}</p>}
        </div>
        <input
          className="w-10, hover:bg-sky-300 bg-sky-600 px-2 py-2 rounded text-white"
          type="submit"
          value="Log in"
        /> 
      </form>
    </div>
  );
};

export default Login;

