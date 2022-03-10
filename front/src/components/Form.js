import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Form() {
  const [names, setNames] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setNames(data.userEntry);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="text" {...register("userEntry", { required: true })} />
      </label>
      <input type="submit" value="Save" />
    </form>
  );
}
