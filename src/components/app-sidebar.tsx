"use client"

import * as React from "react"
import { NavMenuType } from "@/schema/schema"
import {
  IconHelp,
  IconSearch
} from "@tabler/icons-react"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { CarsureLogo } from "@/components/icons/icons"


export function AppSidebar({ navMain, ...props }: { navMain: NavMenuType[] } & React.ComponentProps<typeof Sidebar>) {

  const data = {
    user: {
      name: "gyauelvis",
      email: "gyauelvis@carsure.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navSecondary: [
      {
        title: "Get Help",
        url: "#",
        icon: IconHelp,
      },
      {
        title: "Search",
        url: "#",
        icon: IconSearch,
      },
    ]
  }

  return (
    <Sidebar collapsible="icon" {...props} className="font-sans">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <CarsureLogo className="size-8 text-white" />
                <span className="text-base font-semibold font-mono">Carsure</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
