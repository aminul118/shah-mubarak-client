import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const BlogTabs = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
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
  );
};

export default BlogTabs;
