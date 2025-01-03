import {
  AudioWaveform,
  Command,
  ChevronRight,
  CircleDot,
  Home,
  TerminalSquare,
  MessageSquare,
  Rocket,
  Box,
  FileType,
  CircleDashed,
  ListChecks,
  Play,
  Plus,
  Cloud,
  GraduationCap,
  Settings,
  Search,
} from "lucide-react";

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { ProjectSwitcher } from "@/components/project-switcher";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
// Menu items.
const items1 = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
];

const footerData = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const projectsData = [
  {
    name: "D&D Preparation",
    url: "#",
  },
  {
    name: "Project 2",
    url: "#",
  },
  {
    name: "Project 3",
    url: "#",
  },
];

const tasksData = [
  {
    title: "Interactions",
    url: "#",
    icon: MessageSquare,
  },
  {
    title: "Prompts",
    url: "#",
    icon: TerminalSquare,
  },
  {
    title: "Runs",
    url: "#",
    icon: Rocket,
  },
];

const contentData = [
  {
    title: "Objects",
    url: "#",
    icon: Box,
  },
  {
    title: "Types",
    url: "#",
    icon: FileType,
  },
];

const workflowData = [
  {
    title: "Executions",
    url: "#",
    icon: Play,
  },
  {
    title: "Rules",
    url: "#",
    icon: ListChecks,
  },
  {
    title: "Processes",
    url: "#",
    icon: CircleDashed,
  },
];

const modelsData = [
  {
    title: "Environments",
    url: "#",
    icon: Cloud,
  },
  {
    title: "Fine tuning",
    url: "#",
    icon: GraduationCap,
  },
];

const data = {
  user: {
    name: "Acme Labs",
    email: "john.doe@example.com",
    avatar: "/avatars/shadcn.jpg",
    initials: "AL",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: CircleDot,
      initials: "AI",
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      initials: "AC",
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      initials: "EC",
      plan: "Free",
    },
  ],
};

const projectsSwitcherData = {
    user: {
      name: "Acme Labs",
      email: "john.doe@example.com",
      avatar: "/avatars/shadcn.jpg",
      initials: "AL",
    },
    teams: [
      {
        name: "D&D Preparation",
        logo: CircleDot,
        plan: "Enterprise",
      },
      {
        name: "Project 2",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Project 3",
        logo: Command,
        plan: "Free",
      },
    ],
  };

export function AppSidebar() {
  return (
    <Sidebar>
      <Sidebar>
        <SidebarHeader>
          {/* <NavUser user={data.user} /> */}
          <TeamSwitcher teams={data.teams} />
          <ProjectSwitcher teams={projectsSwitcherData.teams} />
          
          {/* <TeamSwitcher projects={data.projects} /> */}
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items1.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <div className="flex flex-row justify-between">
              <SidebarGroupLabel className="w-fit">Projects</SidebarGroupLabel>
              <div className="flex flex-row gap-2 justify-between mr-1.5">
                <SidebarGroupAction
                  title="Search Project"
                  className="relative top-0 right-auto"
                >
                  <Search /> <span className="sr-only">Search Project</span>
                </SidebarGroupAction>
                <SidebarGroupAction
                  title="Add Project"
                  className="relative top-0 right-auto"
                >
                  <Plus /> <span className="sr-only">Add Project</span>
                </SidebarGroupAction>
              </div>
            </div>
            <SidebarGroupContent>
              <SidebarMenu>
                {projectsData.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton asChild>
                      <a href={project.url}>
                        <span>{project.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90 mr-2" />
                  Tasks
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {tasksData.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90 mr-2" />
                  Content
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {contentData.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90 mr-2" />
                  Workflow
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {workflowData.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90 mr-2" />
                  Models
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {modelsData.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
        <SidebarFooter>
          {/* <NavUser user={data.user} /> */}
          <SidebarMenu>
            {footerData.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </Sidebar>
  );
}
