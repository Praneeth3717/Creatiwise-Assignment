import { ModeToggle } from "@/components/ui/mode-toggle";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ArticlesHeaderProps {
  className?: string;
}

export function ArticlesHeader({ className }: ArticlesHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Articles</h2>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
      <Tabs defaultValue="generated" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="generated">Generated Articles</TabsTrigger>
          <TabsTrigger value="published">Published Articles</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Articles</TabsTrigger>
          <TabsTrigger value="archived">Archived Articles</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="search"
          placeholder="Search for Title & Keywords..."
          className="max-w-sm"
        />
      </div>
    </div>
  );
}