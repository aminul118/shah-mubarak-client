"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import dynamic from "next/dynamic";
import { useState } from "react";
import { toast } from "sonner";

const Editor = dynamic(() => import("../../../../components/Shared/QuilJs"), {
  ssr: false,
});

const BlogPage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const payload = {
    title,
    category,
    content,
  };

  const handleSubmit = async () => {
    try {
      if (!title || !category || !content) {
        toast.error("Please fill all fields!");
        return;
      }

      await axios.post(
        "https://api.shahmubaruk.com/api/v1/blog/create",
        payload
      );

      toast.success("Blog saved successfully!");
      setTitle("");
      setCategory("");
      setContent("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="p-6 container mx-auto">
      <h1 className="text-3xl text-center text-white py-8 font-bold">
        Blog Post
      </h1>

      {/* Blog Title */}
      <div className="grid grid-cols-6 gap-6">
        <Input
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4  col-span-5"
        />

        {/* Blog Category */}
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full mb-4 text-white">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="category1">Category 1</SelectItem>
            <SelectItem value="category2">Category 2</SelectItem>
            <SelectItem value="category3">Category 3</SelectItem>
            <SelectItem value="category4">Category 4</SelectItem>
            <SelectItem value="category5">Category 5</SelectItem>
            <SelectItem value="category6">Category 6</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Quill Editor */}
      <Editor value={content} onChange={setContent} />

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        className="flex justify-center items-center mt-4 mx-auto"
      >
        Submit
      </Button>
    </div>
  );
};

export default BlogPage;
