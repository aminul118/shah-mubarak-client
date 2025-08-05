import { Suspense } from "react";
import BlogDetailsSkeleton from "@/components/modules/Blogs/BlogDetailsSkeleton";
import SectionContainer from "@/components/ui/SectionContainer";
import { Params } from "@/types";
import BlogDetailsContent from "@/components/modules/Blogs/BlogDetailsContent";

const BlogDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;

  return (
    <SectionContainer className="max-w-5xl">
      <Suspense fallback={<BlogDetailsSkeleton />}>
        <BlogDetailsContent slug={slug} />
      </Suspense>
    </SectionContainer>
  );
};

export default BlogDetailsPage;
