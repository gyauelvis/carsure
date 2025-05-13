"use client"

import {
    IconDashboard,
    IconCirclePlus,
    IconCar,
} from "@tabler/icons-react"
import { usePathname } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"


export default function MechanicsSidebar() {
    const pathName = usePathname();
    const data = {
        navMain: [
            {
                title: "Dashboard",
                url: "/service-centres/dashboard",
                icon: IconDashboard,
                active: pathName.includes('service-centres/dashboard') ? true : false,
            },
            {
                title: "Log New Service",
                url: "/service-centres/log-new-service",
                icon: IconCirclePlus,
                active: pathName.includes('service-centres/log-new-service') ? true : false,
            },
            {
                title: "Service History",
                url: "/customs/all-vehicles",
                icon: IconCar,
                active: pathName.includes('all-vehicles') ? true : false,
            }
        ]
    }

    return (
        <AppSidebar navMain={data.navMain} variant="sidebar" />
    )
}
