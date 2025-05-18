import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { articles } from "@/data/articles";
import { ArrowUpDown, Circle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SortField = "title" | "keyword" | "words" | "createdOn";
type SortOrder = "asc" | "desc";

export function ArticlesTable() {
  const [sortField, setSortField] = useState<SortField>("title");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [selectedArticles, setSelectedArticles] = useState<string[]>([]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedArticles = [...articles].sort((a, b) => {
    const order = sortOrder === "asc" ? 1 : -1;
    switch (sortField) {
      case "title":
        return a.title.localeCompare(b.title) * order;
      case "keyword":
        return a.keyword.localeCompare(b.keyword) * order;
      case "words":
        return (a.words - b.words) * order;
      case "createdOn":
        return a.createdOn.localeCompare(b.createdOn) * order;
      default:
        return 0;
    }
  });

  const handleSelectAll = (checked: boolean) => {
    setSelectedArticles(checked ? articles.map(article => article.id) : []);
  };

  const handleSelectArticle = (articleId: string, checked: boolean) => {
    setSelectedArticles(prev => 
      checked ? [...prev, articleId] : prev.filter(id => id !== articleId)
    );
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30px]">
                <Checkbox 
                  checked={selectedArticles.length === articles.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="w-[400px]">
                <Button 
                  variant="ghost" 
                  className="p-0 hover:bg-transparent"
                  onClick={() => handleSort("title")}
                >
                  <span>Article Title</span>
                  <ArrowUpDown className={cn(
                    "ml-2 h-4 w-4",
                    sortField === "title" && "text-primary"
                  )} />
                </Button>
              </TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  className="p-0 hover:bg-transparent"
                  onClick={() => handleSort("keyword")}
                >
                  <span>Keyword [Traffic]</span>
                  <ArrowUpDown className={cn(
                    "ml-2 h-4 w-4",
                    sortField === "keyword" && "text-primary"
                  )} />
                </Button>
              </TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  className="p-0 hover:bg-transparent"
                  onClick={() => handleSort("words")}
                >
                  <span>Words</span>
                  <ArrowUpDown className={cn(
                    "ml-2 h-4 w-4",
                    sortField === "words" && "text-primary"
                  )} />
                </Button>
              </TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  className="p-0 hover:bg-transparent"
                  onClick={() => handleSort("createdOn")}
                >
                  <span>Created On</span>
                  <ArrowUpDown className={cn(
                    "ml-2 h-4 w-4",
                    sortField === "createdOn" && "text-primary"
                  )} />
                </Button>
              </TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Publish</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedArticles.map((article) => (
              <TableRow 
                key={article.id}
                className={cn(
                  selectedArticles.includes(article.id) && "bg-muted/50"
                )}
              >
                <TableCell>
                  <Checkbox 
                    checked={selectedArticles.includes(article.id)}
                    onCheckedChange={(checked) => 
                      handleSelectArticle(article.id, checked as boolean)
                    }
                  />
                </TableCell>
                <TableCell className="font-medium">{article.title}</TableCell>
                <TableCell>
                  {article.keyword} [{article.traffic}]
                </TableCell>
                <TableCell>{article.words}</TableCell>
                <TableCell>{article.createdOn}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Circle className="h-3 w-3 text-blue-500 mr-2 fill-blue-500 stroke-blue-500" />
                    <span>•</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div>{selectedArticles.length > 0 ? `${selectedArticles.length} selected` : `Total ${articles.length} Article Titles`}</div>
          <div>|</div>
          <div className="flex items-center space-x-1">
            <span>Show</span>
            <Select defaultValue="10">
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
            <span>entries per page</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
            1
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}