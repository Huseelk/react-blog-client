import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../redux/slices/auth";
import { AppDispatch } from "../../redux/store";

function Registration() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = async (values: any) => {
    const data = await dispatch(fetchRegister(values));

    if (data.payload) {
      window.localStorage.setItem("token", data.payload?.token);
    } else {
      alert("Cant create new account!!");
    }
  };

  const isValidEmail = (email: string) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = (email: string) => {
    const isValid = isValidEmail(email);
    if (!isValid) {
      return "Set correct E-mail";
    }

    return isValid;
  };

  return (
    <div className="mx-auto xsm:max-w-md max-w-xs bg-white relative top-24 p-4 flex justify-center flex-col items-center">
      <div className="mb-8 mt-6 font-bold text-2xl flex flex-col items-center">
        <span>Create New Account</span>
        <div className="mt-4 relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400">
          <svg
            className="absolute text-white top-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded border-gray-400 py-1 px-2 outline-none focus:border-blue-700 shadow"
              {...register("fullName", {
                required: "Set you name",
                minLength: {
                  value: 5,
                  message: "Write min 5 symbols",
                },
              })}
            />
            {errors.fullName && (
              <span className="mt-1 text-red-500 text-sm">
                {errors.fullName?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              placeholder="E-Mail"
              className="border rounded border-gray-400 mt-5 py-1 px-2 outline-none focus:border-blue-700 shadow"
              {...register("email", {
                required: "Set Email",
                validate: {
                  value: handleEmailValidation,
                },
              })}
            />
            {errors.email && (
              <span className="mt-1 text-red-500 text-sm">
                {errors.email?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Password"
              className="border rounded border-gray-400 mt-5 py-1 px-2 outline-none focus:border-blue-700 shadow"
              {...register("password", {
                required: "Set Password",
                minLength: {
                  value: 5,
                  message: "Write min 5 symbols",
                },
              })}
            />
            {errors.password && (
              <span className="mt-1 text-red-500 text-sm">
                {errors.password?.message}
              </span>
            )}
          </div>
          <button className="mt-6 w-[100%] p-2 rounded border bg-blue-500 hover:bg-blue-700 transition-all text-white mb-12 font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
