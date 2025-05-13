'use client';

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CircleGauge, Calendar, Wrench, ColumnsIcon, ChevronDownIcon } from "lucide-react"
import ResourceNotFound from "@/components/resource-not-found"
import { DropdownMenu, DropdownMenuRadioGroup, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { useState, useEffect } from "react"

interface serviceHistoryType {
    date: string;
    serviceType: string[];
    odometerReading: string;
    partsReplaced: string[];
}


export default function LogNewService() {

    const [filterBy, setFilterBy] = useState("newest-to-oldest")
    const [serviceHistory, setServiceHistory] = useState<serviceHistoryType[]>([
        {
            date: "2023-10-01",
            serviceType: ["Oil Change", "Engine Tune-up"],
            odometerReading: "45,000 km",
            partsReplaced: ["Tire"],
        },
        {
            date: "2023-09-15",
            serviceType: ["Brake Inspection", "Battery Replacement"],
            odometerReading: "44,500 km",
            partsReplaced: ["Brake Pads"],
        },
        {
            date: "2023-08-20",
            serviceType: ["Tire Rotation", "Fluid Check"],
            odometerReading: "44,000 km",
            partsReplaced: ["Oil Filter"],
        }
    ])

    useEffect(() => {
        if (filterBy === "oldest-to-newest") {
            setServiceHistory(filterByOldestToNewest(serviceHistory))
        }
        else if (filterBy === "newest-to-oldest") {
            setServiceHistory(filterByNewestToOldest(serviceHistory))
        }
    }, [filterBy, serviceHistory])

    const filterByOldestToNewest = (serviceHistoryData: serviceHistoryType[]) => {
        return serviceHistoryData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    const filterByNewestToOldest = (serviceHistoryData: serviceHistoryType[]) => {
        return serviceHistoryData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }


    const serviceLog = [
        {
            icon: CircleGauge,
            title: "Current Odometer Reading",
            value: "45,000",
            unit: "km",
        },
        {
            icon: Calendar,
            title: "Last Service Date",
            value: "2023-10-01",
        },
        {
            icon: Wrench,
            title: "Total Services Recorded",
            value: "8",
        },
    ]


    return (
        <main className="mt-4 relative py-5 px-10 font-sans">
            <section className="flex flex-col gap-4 sm:flex-row items-start justify-between w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/service-log-image.webp"
                            alt="Vehicle"
                            width={80}
                            height={80}
                            className="rounded aspect-video object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-medium text-xl">2018 Toyota Corolla</div>
                        <div className="text-sm text-muted-foreground">VIN: JTNKU4HE9J0012345</div>
                    </div>
                </div>
                <div className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto" variant="default">
                        Log New Service
                    </Button>
                </div>
            </section>

            <section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {serviceLog.map((item, index) => (
                        <Card key={index} className="overflow-hidden bg-gradient-to-br from-primary/10 to-background border-none shadow-lg hover:shadow-xl transition-all duration-300">
                            <CardContent className="sm:p-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-muted-foreground mb-1">{item.title}</span>
                                        <p className="text-3xl font-bold text-foreground">{item.value} {item.unit && <span className="text-lg font-normal">{item.unit}</span>}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section>
                <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Service History</h2>
                        <div className="flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <ColumnsIcon />
                                        <span className="lg:inline">Sort</span>
                                        <ChevronDownIcon />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56 bg-card rounded-lg border shadow-lg p-1 animate-in fade-in-80 z-50">
                                    <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground border-b mb-1">
                                        Sort by
                                    </div>
                                    <DropdownMenuRadioGroup value={filterBy} onValueChange={setFilterBy}>
                                        <DropdownMenuRadioItem value="newest-to-oldest" className="cursor-pointer flex items-center gap-2 px-6 py-2 text-sm rounded-md hover:bg-primary/10 hover:text-primary outline-none">
                                            Newest to Oldest
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="oldest-to-newest" className="cursor-pointer flex items-center gap-2 px-6 py-2 text-sm rounded-md hover:bg-primary/10 hover:text-primary outline-none">
                                            Oldest to Newest
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>


                    <p className="text-sm text-muted-foreground">{"View the details of your vehicle's service history."}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {
                        serviceHistory.length === 0 ? (
                            <ResourceNotFound message="No service history available." />
                        ) : (
                            serviceHistory.map((item, index) => (
                                <Card key={index} className="mt-8 col-span-3 md:col-span-1 overflow-hidden bg-gradient-to-br from-card/5 to-background border border-border/40 shadow-md hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-4 sm:p-6">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-wrap justify-between items-center border-b border-border/30 pb-3">
                                                <h3 className="text-lg font-semibold text-primary">Service Details</h3>
                                                <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full mt-1 sm:mt-0">{item.date}</span>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                                                <div>
                                                    <p className="text-xs text-muted-foreground mb-1">Service Type</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {
                                                            item.serviceType.map((type, index) => (
                                                                <span key={index} className="bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full">{type}</span>
                                                            ))
                                                        }
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <div>
                                                        <p className="text-xs text-muted-foreground mb-1">Odometer Reading</p>
                                                        <p className="font-medium">{item.odometerReading}</p>
                                                    </div>

                                                    <div>
                                                        <p className="text-xs text-muted-foreground mb-1">Parts Replaced</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {
                                                                item.partsReplaced.map((part, index) => (
                                                                    <span key={index} className="bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full">{part}</span>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        )
                    }
                </div>
            </section>
        </main>
    )
}