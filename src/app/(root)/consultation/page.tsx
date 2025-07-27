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

// Zod Schema
const consultationSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  scheduleDate: z.string(), // will be formatted to ISO later
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/schedule/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            scheduleDate: new Date(data.scheduleDate).toISOString(),
          }),
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Consultation request submitted!");
      reset();
    } catch (error) {
      toast.error("Something went wrong while submitting the form.");
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
