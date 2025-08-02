import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/ui/SectionContainer";
import { Params } from "@/types";

const getBlogBySlug = async (slug: string) => {
  const res = await fetch(`https://api.shahmubaruk.com/api/v1/blog/${slug}`, {
    cache: "no-store", // disables caching (SSR)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  return res.json();
};

const BlogDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const blogResponse = await getBlogBySlug(slug);
  const blog = blogResponse.data; // Assuming API returns { data: {...} }

  if (!blog) {
    return (
      <SectionContainer className="max-w-5xl">
        <Card className="p-6 text-center text-red-500">Blog not found</Card>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="max-w-5xl">
      <Card className="flex flex-col justify-center items-center p-6 space-y-4">
        <h1 className="text-2xl font-bold">{blog.title}</h1>
        <div
          className="text-gray-600 w-full"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </Card>
    </SectionContainer>
  );
};

export default BlogDetailsPage;
