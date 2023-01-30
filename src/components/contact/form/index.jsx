import React from "react";
import "./style.scss";
import { send } from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  // template id - template_66zzymq
  // service id - service_fsixy0g
  // public key - 9Dyxbg3mCWKsWe38i

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    send("service_fsixy0g", "template_66zzymq", data, "9Dyxbg3mCWKsWe38i")
      .then((response) => {
        console.log("SUCCESS", response.status, response.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const formSuccess = () => {
    toast("thanks for submitting your Query!");
    document.getElementById("queryForm").reset();
  };
  return (
    <div className="query-form">
      <ToastContainer />
      <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            {...register("from_name", { required: "Name is required" })}
          />
          {errors.form_name?.message && (
            <p className="errors">{errors.form_name?.message}</p>
          )}
        </div>
        <div className="input-field">
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            {...register("reply_to", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.reply_to?.message && (
            <p className="errors">{errors.reply_to?.message}</p>
          )}
        </div>
        <div className="input-field">
          <input
            type="text"
            name="phone_number"
            placeholder="Phone"
            {...register("phone_number", {
              required: "Phone no. is required",
              minLength: {
                value: 8,
                message: "phone no is not valid",
              },
            })}
          />
          {errors.phone_number?.message && (
            <p className="errors">{errors.phone_number?.message}</p>
          )}
        </div>
        <div className="input-field">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 10,
                message: "Minimum 10 characters required",
              },
            })}
          />
          {errors.subject?.message && (
            <p className="errors">{errors.subject?.message}</p>
          )}
        </div>
        <div className="input-field full-width">
          <textarea
            name="message"
            placeholder="Your message"
            className="textarea"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Minimum 20 characters required",
              },
              maxLength: {
                value: 500,
                message: "maximum 500 characters allowed",
              },
            })}
          />
          {errors.message?.message && (
            <p className="errors">{errors.message?.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
