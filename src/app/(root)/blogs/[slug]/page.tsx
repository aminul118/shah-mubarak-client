import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/ui/SectionContainer";
import { Params } from "@/types";

const BlogDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;

  return (
    <SectionContainer className="max-w-5xl">
      <Card className="flex flex-col justify-center items-center p-6 space-y-4">
        {slug}
      </Card>
    </SectionContainer>
  );
};

export default BlogDetailsPage;
