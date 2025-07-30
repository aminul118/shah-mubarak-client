"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApiResponse } from "@/types";

interface IBlog {
  _id: string;
  title: string;
  category: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<ApiResponse<IBlog[]>>({
    statusCode: 0,
    success: false,
    message: "",
    data: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get<ApiResponse<IBlog[]>>(
          "https://api.shahmubaruk.com/api/v1/blog/all-blogs",
        );
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return <p className="text-center text-white">Loading blogs...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center text-white py-8 font-bold">Blogs</h1>

      <Tabs
        defaultValue="blogs"
        className="grid lg:grid-cols-12 gap-6 text-white "
      >
        {/* Sidebar for categories */}
        <div className="col-span-3">
          <TabsList className="flex flex-col gap-4 bg-gray-900 rounded-lg">
            <TabsTrigger value="blogs">All Blogs</TabsTrigger>
            <TabsTrigger value="category1">Category 1</TabsTrigger>
            <TabsTrigger value="category2">Category 2</TabsTrigger>
            <TabsTrigger value="category3">Category 3</TabsTrigger>
            <TabsTrigger value="category4">Category 4</TabsTrigger>
            <TabsTrigger value="category5">Category 5</TabsTrigger>
            <TabsTrigger value="category6">Category 6</TabsTrigger>
          </TabsList>
        </div>

        {/* Main content */}
        <div className="col-span-9">
          <TabsContent value="blogs" className="space-y-6">
            {blogs?.data?.length === 0 ? (
              <p className="text-center text-gray-400">No blogs available</p>
            ) : (
              blogs.data.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-gray-800 p-6 rounded-lg text-white space-y-4 shadow"
                >
                  <h1 className="text-2xl font-semibold">{blog.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="settings">
            <p className="text-gray-300">Settings will be here.</p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default BlogsPage;
