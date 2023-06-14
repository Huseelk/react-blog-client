import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../redux/slices/auth";
import { AppDispatch } from "../../redux/store";

export interface authData {
  email: string;
  password: string;
}

function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = async (values: authData) => {
    const data = await dispatch(fetchAuth(values));

    if (data.payload) {
      window.localStorage.setItem("token", data.payload?.token);
    } else {
      alert("Cant authorizate");
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
      <div className="mb-8 mt-6 font-bold text-2xl">Log In To Your Account</div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="E-Mail"
              className="border rounded border-gray-400 py-1 px-2 outline-none focus:border-blue-700 shadow"
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
              className="border rounded border-gray-400 mt-6 py-1 px-2 outline-none focus:border-blue-700 shadow"
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

          <button
            className="mt-5 w-[100%] p-2 rounded border bg-blue-500 hover:bg-blue-700 transition-all text-white mb-12 font-bold"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
