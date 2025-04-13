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
              <SidebarMenuButton>
                <Icons.home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Icons.upload className="mr-2 h-4 w-4" />
                <span>Upload Content</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Icons.messageSquare className="mr-2 h-4 w-4" />
                <span>AI Tutoring</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Icons.workflow className="mr-2 h-4 w-4" />
                <span>Personalized Learning Path</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Icons.shield className="mr-2 h-4 w-4" />
                <span>AI Assessment</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Icons.plusCircle className="mr-2 h-4 w-4" />
                <span>Concentration Games</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Icons.share className="mr-2 h-4 w-4" />
                <span>Multiplayer Study Games</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Icons.settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Icons.help className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </SidebarMenuButton>
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

