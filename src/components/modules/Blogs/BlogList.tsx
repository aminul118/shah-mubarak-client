import lib from "@/lib";
import Link from "next/link";
import { Suspense } from "react";
import { BlogSkeleton } from "./BlogSkeleton";
interface IBlog {
  _id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogList = async () => {
  const data = await lib.getBlogs();
  console.log(data);
  return (
    <div>
      {data?.data?.length === 0 ? (
        <p className="text-center text-gray-400">No blogs available</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {data?.data?.map((blog: IBlog) => {
            return (
              <Suspense fallback={<BlogSkeleton />} key={blog._id}>
                <div
                  key={blog._id}
                  className="bg-gray-800 p-6 rounded-lg text-white space-y-4 shadow flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h1 className="text-lg font-semibold">{blog.title}</h1>
                  </div>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-block mt-2 text-blue-400 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </Suspense>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BlogList;
