import { Skeleton } from "@/components/ui/skeleton";
import { ArticlesHeader } from "@/components/dashboard/articles-header";
import { ArticlesTable } from "@/components/dashboard/articles-table";
import { useEffect, useState } from "react";

export function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <ArticlesHeader />
      
      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-[400px] w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      ) : (
        <ArticlesTable />
      )}
    </div>
  );
}