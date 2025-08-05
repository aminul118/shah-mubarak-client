import { notFound } from "next/navigation";

export async function getBlogs() {
  const res = await fetch("https://api.shahmubaruk.com/api/v1/blog/all-blogs");

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
