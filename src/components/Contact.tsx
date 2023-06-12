import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

type Props = {};

const Contact = (props: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required(),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
   
    if (
      formRef?.current !== null 
    )
      return emailjs
        .sendForm(
          "service_ot1p83o",
          "template_dulhlre",
          formRef.current,
          "9egAnz6o8u7nUse8j"
        )
        .then(
          (result) => {
            console.log("hi", result.text);
            toast.success("Successfully sent!", {
              className: "text-xs md:text-base",
              style: {
                backgroundColor: "black",
                color: "white",
                borderRadius: "2px",
                borderBottom: "1px red green",
              },
            });
            reset();
          },
          (error) => {
            console.log("hi", error.text);
            toast.error("Something went wrong! Please try again ", {
              className: "text-xs md:text-base",
              style: {
                backgroundColor: "black",
                color: "white",
                borderRadius: "2px",
                borderBottom: "1px red solid",
              },
            });
          }
        );
  };

  return (
    <section
      className="section px-4 flex flex-col items-center gap-5 "
      id="contact"
    >
      <h1 className="title">Contact</h1>
      <h2 className="text-white font-bold capitalize mt-12 sm:mt-24 text-center">
        let's build something together
      </h2>
      <p className="flex items-center gap-3  justify-center w-full text-xs">
        <EnvelopeIcon className="h-6 text-main" /> ammar.web.mobile@gmail.com
      </p>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[400px] w-full mx-auto flex flex-col gap-2"
      >
        <div className="flex sm:gap-1 flex-col gap-2 sm:flex-row">
          <input
            className={`input w-full sm:w-1/2 ${
              errors.name && "ring-1 ring-main"
            }`}
            type="text"
            placeholder="Name*"
            {...register("name", { required: true })}
          />
          <input
            className={`input w-full sm:w-1/2 ${
              errors.email && "ring-1 ring-main"
            }`}
            type="email"
            placeholder="Email*"
            {...register("email", { required: true })}
          />
        </div>
        <input
          className="input"
          type="text"
          placeholder="Subject"
          {...register("subject")}
        />
        <textarea
          className={` ${
            errors.message && "ring-1 ring-main"
          }   input resize-none h-32`}
          placeholder="Message*"
          {...register("message", { required: true })}
        />
        {(errors.name || errors.email || errors.message) && (
          <span className="text-main text-sm py-2 uppercase">
            Fill all required fields please!
          </span>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="py-4 bg-main rounded-md  uppercase active:scale-95 duration-300 text-whitefont-bold hover:bg-red-800 disabled:opacity-30"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2 justify-center ">
              {" "}
              <Spinner />
              sending...
            </span>
          ) : (
            "send"
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
