import { Tabs, TabsContent } from "@/components/ui/tabs";
import BlogList from "@/components/modules/Blogs/BlogList";
import BlogTabs from "@/components/modules/Blogs/BlogTabs";
import { Suspense } from "react";
import { BlogSkeleton } from "@/components/modules/Blogs/BlogSkeleton";

const BlogsPage = async () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center text-white py-8 font-bold">Blogs</h1>

      <Tabs
        defaultValue="blogs"
        className="grid lg:grid-cols-12 gap-6 text-white"
      >
        <BlogTabs className="col-span-3" />

        <div className="col-span-9">
          <TabsContent value="blogs" className="space-y-6">
            <Suspense fallback={<BlogSkeleton />}>
              <BlogList />
            </Suspense>
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
