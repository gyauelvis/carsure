
import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner"
import { DVLASidebar } from "@/components/dvla/dvla-sidebar";
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <DVLASidebar />
            <SidebarInset>
                <SiteHeader />
                {children}
                <Toaster />
            </SidebarInset>
        </SidebarProvider>
    );
}
