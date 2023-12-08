import React from "react";

import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { register, handleSubmit, formState,getValues } = useForm({

    defaultValues:{
        name:"arun",
        email:"safadsf@gmail.com"
    },
    mode:"all"
  });

  const { errors } = formState;

  const handleget = (e)=>{
    e.preventDefault()
    console.log(getValues());
  }
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {console.log(errors)}
      <form>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          {...register("name", {
            required: "Name is Mandatory",
            // message: "Name is Mandatory",
          })}
        />

        <p>{errors?.name?.message}</p>
        <br />
        <br />
        <label>Email</label>
        <input
          {...register("email", {
            required: "email is Mandatory",
            // message: "email is Mandatory",
          })}
          type="text"
          placeholder="Enter Your email"
        />
        <p>{errors?.email?.message}</p>

        <br />
        <br />
        <label>Age</label>

        <input
          {...register("age", {
            valueAsNumber:true,
            required: "age is Mandatory",
            
            // message: "age is Mandatory",
          })}

          type="Number"
          placeholder="Enter u r age "
        />
        <p>{errors?.age?.message}</p>

        <label>password</label>

        {/* <input 
        {...register("password"), {
        required: "Please Enter Your Email!",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
            message: "Please Enter A Valid password!"
        }
    }} 
    type="password" 
    id="password" 
    /> */}

<input
          {...register("password", {
            required: "password is Mandatory",
            // pattern:{
            //     value:/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-=/\d])(?=.*[a-z]).{8,}$/,
            //     message:"passwor must contain 4 digit"
                
            // }
           
            // message: "age is Mandatory",
          })}
          type="password"
          placeholder="Enter u r age "
        />


   
        <p>{errors?.password?.message}</p>

        <br />
        <br />
        <button onClick={handleSubmit(onsubmit)}>Submit</button>
        <button onClick={(e)=>handleget(e)}>gett data</button>

      </form>
    </div>
  );
}
