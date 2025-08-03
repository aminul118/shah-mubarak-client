"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex justify-center items-center  px-4">
      <div
        className="flex flex-col md:flex-row w-full max-w-4xl bg-black rounded-lg shadow-lg overflow-hidden lg:py-24"
        data-aos="fade-right"
      >
        {/* Left image */}
        <div className="relative w-full md:w-1/2 h-60 md:h-auto ">
          <Image
            src="/images/secure-login.svg"
            alt="Register Visual"
            fill
            className="object-cover"
          />
        </div>

        {/* Right form */}
        <div className="w-full md:w-1/2 lg:p-6 sm:p-8">
          <Card className="w-full border-none bg-black text-white shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Register
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </form>
              <p className="text-sm text-center text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
