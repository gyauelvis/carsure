"use client"

import * as React from "react"
import {
  IconDashboard,
  IconCirclePlus,
  IconHelp,
  IconSearch,
  IconCar,
  IconFlag
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
import { usePathname } from "next/navigation"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname();
  const data = {
    user: {
      name: "gyauelvis",
      email: "gyauelvis@carsure.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/customs/dashboard",
        icon: IconDashboard,
        active: pathName.includes('dashboard') ? true : false,
      },
      {
        title: "New Vehicle Entry",
        url: "/customs/new-entry",
        icon: IconCirclePlus,
        active:  pathName.includes('new-entry') ? true : false,
      },
      {
        title: "All Vehicles",
        url: "/customs/all-vehicles",
        icon: IconCar,
        active: pathName.includes('all-vehicles') ? true : false,
      },
      {
        title: "Flagged Vehicles",
        url: "#",
        icon: IconFlag,
        active: false,
      },
    ],
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
    <Sidebar collapsible="offcanvas" {...props} className="font-sans">
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
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
