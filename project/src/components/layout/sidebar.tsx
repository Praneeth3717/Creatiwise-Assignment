import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertCircle,
  BarChart3,
  FileText,
  HelpCircle,
  Link,
  MessageSquare,
  Package2,
  RefreshCcw,
  Settings,
  User,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 border-r h-screen sticky top-0", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-3xl font-bold tracking-tight">abun</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-md bg-secondary/50 px-2 py-1 mb-6">
              <div className="h-2 w-2 rounded-full bg-pink-500" />
              <div className="text-xs">amazon.com</div>
            </div>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-1 p-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  isActive ? "bg-accent" : "transparent"
                )
              }
            >
              <FileText className="h-5 w-5" />
              <span>Articles</span>
            </NavLink>
            <div className="pl-8 space-y-1">
              <NavLink
                to="/create-article"
                className="group flex items-center gap-3 rounded-md px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Create Article
              </NavLink>
              <NavLink
                to="/generated-articles"
                className="group flex items-center gap-3 rounded-md px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Generated Articles
              </NavLink>
              <NavLink
                to="/keyword-projects"
                className="group flex items-center gap-3 rounded-md px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Keyword Projects
              </NavLink>
              <NavLink
                to="/ai-keyword-to-article"
                className="group flex items-center gap-3 rounded-md px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                AI Keyword to Article
              </NavLink>
              <NavLink
                to="/steal-competitor-keyword"
                className="group flex items-center gap-3 rounded-md px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Steal Competitor Keyword
              </NavLink>
              <NavLink
                to="/import-keyword-from-gsc"
                className="group flex items-center gap-3 rounded-md px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Import Keyword from GSC
              </NavLink>
              <NavLink
                to="/manual-keyword-to-article"
                className="group flex items-center gap-3 rounded-md px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Manual Keyword to Article
              </NavLink>
              <NavLink
                to="/bulk-keyword-to-article"
                className="group flex items-center gap-3 rounded-md px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Bulk Keyword to Article
              </NavLink>
              <NavLink
                to="/longtail-keyword-to-article"
                className="group flex items-center gap-3 rounded-md px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Longtail Keyword to Article
              </NavLink>
              <NavLink
                to="/article-settings"
                className="group flex items-center gap-3 rounded-md px-3 py-1 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Article Settings
              </NavLink>
            </div>

            <NavLink
              to="/auto-blog"
              className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <RefreshCcw className="h-5 w-5" />
              <span>Auto Blog</span>
            </NavLink>

            <NavLink
              to="/internal-links"
              className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <Link className="h-5 w-5" />
              <span>Internal Links</span>
            </NavLink>

            <NavLink
              to="/free-backlinks"
              className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <Link className="h-5 w-5" />
              <span>Free Backlinks</span>
            </NavLink>

            <NavLink
              to="/integrations"
              className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <Package2 className="h-5 w-5" />
              <span>Integrations</span>
            </NavLink>

            <NavLink
              to="/subscription"
              className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <BarChart3 className="h-5 w-5" />
              <span>Subscription</span>
            </NavLink>

            <NavLink
              to="/affiliate-program"
              className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <Users className="h-5 w-5" />
              <span>Affiliate Program</span>
            </NavLink>

            <NavLink
              to="/help-center"
              className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <HelpCircle className="h-5 w-5" />
              <span>Help Center</span>
            </NavLink>

            <NavLink
              to="/updates"
              className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <AlertCircle className="h-5 w-5" />
              <span>Updates</span>
            </NavLink>

            <NavLink
              to="/live-chat-support"
              className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Live Chat Support</span>
            </NavLink>

            <NavLink
              to="/profile"
              className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </NavLink>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}