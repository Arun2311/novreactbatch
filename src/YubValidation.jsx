import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"
// import {yupResolver} from "@hookform/resolvers/yup"
import { yupResolver } from '@hookform/resolvers/yup';

const detailschema = yup.object({
    name:yup.string().required("name is required"),
    email:yup.string().required("email is required").email("email need to bee valid"),
    age:yup.string().required("agw is required")

})


export default function YubValidation() {
  const { register, handleSubmit,formState } = useForm(
    {
        resolver:yupResolver(detailschema)
    }
  );

  const onsubmit=(data)=>{
console.log(data);
  }

  const { errors } = formState;

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          {...register("name")}
        />

        <p>{errors?.name?.message}</p>
        <br />
        <br />
        <label>Email</label>
        <input
        {...register("email",{
            required,pattern:{
                val
            }
        })}
          type="text"
          placeholder="Enter Your email"
        />
        <p>{errors?.email?.message}</p>

        <br />
        <br />
        <label>Age</label>

        <input
          {...register("age")}
          type="Number"
          placeholder="Enter u r age "
        />
        <p>{errors?.age?.message}</p>

        <br />
        <br />
        <button onClick={handleSubmit(onsubmit)}>Submit</button>
      </form>
    </div>
  );
}
