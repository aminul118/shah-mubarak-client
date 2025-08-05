import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function BlogSkeleton() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Card key={idx} className="space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <Skeleton className="h-4 w-20" />
        </Card>
      ))}
    </div>
  );
}
