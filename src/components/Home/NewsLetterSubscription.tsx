/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsSendFill } from "react-icons/bs";
import { toast } from "sonner";

const NewsLetterSubscription = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        "https://api.shahmubaruk.com/api/v1/subscription/create",
        { email }
      );
      toast.success(res?.data?.message || "Subscribed successfully!");
      setEmail("");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto px-6 py-12 sm:py-16 lg:py-24 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold">
          Subscribe to Our Newsletter
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Get the latest news, articles, and updates straight to your inbox.
        </p>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="sm:col-span-3">
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="h-12"
            />
          </div>
          <Button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full h-12"
          >
            {loading ? (
              "Subscribing..."
            ) : (
              <div className="flex items-center justify-center gap-2">
                <BsSendFill className="text-base" /> Subscribe
              </div>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsLetterSubscription;
