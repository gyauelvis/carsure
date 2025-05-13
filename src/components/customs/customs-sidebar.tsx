"use client"

import {
    IconDashboard,
    IconCirclePlus,
    IconCar,
    IconFlag
} from "@tabler/icons-react"
import { usePathname } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"


export function CustomsSideBar() {
    const pathName = usePathname();
    const data = {
        navMain: [
            {
                title: "Vehicle Dashboard",
                url: "/customs/dashboard",
                icon: IconDashboard,
                active: pathName.includes('dashboard') ? true : false,
            },
            {
                title: "New Vehicle Entry",
                url: "/customs/new-entry",
                icon: IconCirclePlus,
                active: pathName.includes('new-entry') ? true : false,
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
        ]
    }

    return (
        <AppSidebar navMain={data.navMain} variant="sidebar" />
    )
}
