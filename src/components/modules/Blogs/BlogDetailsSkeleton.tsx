import { Card } from "@/components/ui/card";
import SectionContainer from "@/components/ui/SectionContainer";
import { Skeleton } from "@/components/ui/skeleton";

const BlogDetailsSkeleton = () => {
  return (
    <SectionContainer className="max-w-5xl">
      <Card className="flex flex-col p-6 space-y-6 w-full">
        {/* Title Skeleton */}
        <Skeleton className="h-8 w-4/5" />

        {/* Subtitle / Short Description */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Bullet Points Section */}
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        {/* Footer / Bottom Action Section */}
        <div className="flex flex-col gap-2 mt-4">
          <Skeleton className="h-4 w-2/4" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Hashtags */}
        <Skeleton className="h-4 w-1/2 mt-4" />
      </Card>
    </SectionContainer>
  );
};

export default BlogDetailsSkeleton;
