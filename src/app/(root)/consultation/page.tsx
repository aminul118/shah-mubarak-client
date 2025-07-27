/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";

// Zod Schema
const consultationSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  scheduleDate: z.string(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(5, "Message is required"),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const ConsultationPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      scheduleDate: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
      subject: "Appointment Request",
      message: "",
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      const payload = {
        ...data,
        scheduleDate: new Date(data.scheduleDate).toISOString(),
      };

      const response = await axios.post(
        `https://api.shahmubaruk.com/api/v1/schedule/create`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("RESPONSE-->", response);

      if (response.status !== 200 && response.status !== 201) {
        throw new Error("Failed to submit");
      }

      toast.success("Consultation request submitted!");
      reset();
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong while submitting the form."
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 ">
      <Card className="bg-slate-800">
        <CardHeader>
          <CardTitle>Book a Consultation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" {...register("phone")} />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="scheduleDate">Schedule Date</Label>
              <Input
                id="scheduleDate"
                type="datetime-local"
                {...register("scheduleDate")}
              />
              {errors.scheduleDate && (
                <p className="text-sm text-red-500">
                  {errors.scheduleDate.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" {...register("subject")} />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={4} {...register("message")} />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultationPage;
