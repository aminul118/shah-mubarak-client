"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BsSendFill } from "react-icons/bs";
import axios from "axios";
import { toast } from "sonner";

// Define the form input types
interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  // Set up React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    try {
      // Send form data to the backend using Axios
      const response = await axios.post(
        "https://data.tabedge.com/v1/contact/create",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", response.data);
      reset();

      toast.success("Message Sent Successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="max-w-lg w-full mx-auto sm:p-6 lg:p-8"
      data-aos="fade-right"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-5">
          {/* Name Input */}
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="mt-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className="mt-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject Input */}
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
              className="mt-2"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              className="mt-2 h-32"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 transition-all"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"} <BsSendFill />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
