import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {Icons} from '@/components/icons';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <Sidebar variant="inset" collapsible="icon">
        <SidebarTrigger asChild>
          <Button variant="ghost" size="sm" className="p-1.5">
            <Icons.arrowRight className="h-5 w-5" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </SidebarTrigger>
        <SidebarHeader>
          <p className="font-medium">EchoTutor</p>
          <p className="text-xs text-muted-foreground">
            Your Personalized AI Learning Companion
          </p>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/dashboard" className="w-full">
                <SidebarMenuButton>
                  <Icons.home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/upload" className="w-full">
                <SidebarMenuButton>
                  <Icons.upload className="mr-2 h-4 w-4" />
                  <span>Upload Content</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/ai-tutoring" className="w-full">
                <SidebarMenuButton>
                  <Icons.messageSquare className="mr-2 h-4 w-4" />
                  <span>AI Tutoring</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/personalized-learning-path" className="w-full">
                <SidebarMenuButton>
                  <Icons.workflow className="mr-2 h-4 w-4" />
                  <span>Personalized Learning Path</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/ai-assessment" className="w-full">
                <SidebarMenuButton>
                  <Icons.shield className="mr-2 h-4 w-4" />
                  <span>AI Assessment</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/concentration-games" className="w-full">
                <SidebarMenuButton>
                  <Icons.plusCircle className="mr-2 h-4 w-4" />
                  <span>Concentration Games</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/dashboard/multiplayer-study-games" className="w-full">
                <SidebarMenuButton>
                  <Icons.share className="mr-2 h-4 w-4" />
                  <span>Multiplayer Study Games</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/dashboard/settings" className="w-full">
                  <SidebarMenuButton>
                    <Icons.settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/dashboard/support" className="w-full">
                  <SidebarMenuButton>
                    <Icons.help className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} EchoTutor
          </p>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <div className="container h-full p-4">
          <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Welcome to EchoTutor
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This is your personalized AI learning companion for the 11+ exam.
          </p>
        </div>
      </SidebarInset>
    </>
  );
}
