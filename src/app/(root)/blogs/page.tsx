"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApiResponse } from "@/types";

interface IBlog {
  _id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

function stripHtml(html: string): string {
  if (!html) return "";
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
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
        className="grid lg:grid-cols-12 gap-6 text-white"
      >
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

        <div className="col-span-9">
          <TabsContent value="blogs" className="space-y-6">
            {blogs?.data?.length === 0 ? (
              <p className="text-center text-gray-400">No blogs available</p>
            ) : (
              <div className="grid lg:grid-cols-3 gap-6">
                {blogs.data.map((blog) => {
                  const previewText = stripHtml(blog.content).slice(0, 100);
                  return (
                    <div
                      key={blog._id}
                      className="bg-gray-800 p-6 rounded-lg text-white space-y-4 shadow flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <h1 className="text-2xl font-semibold">{blog.title}</h1>
                        <p>{previewText}...</p>
                      </div>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="inline-block mt-2 text-blue-400 hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  );
                })}
              </div>
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
