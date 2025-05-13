'use client'
import { useState } from "react"
import RecentVINComponentItem from "@/components/mechanics/recently-entered-vin-item"
import ResourceNotFound from "@/components/resource-not-found"
import { Clock } from "lucide-react"

interface RecentVIN {
    vin: string
    date: string
    make?: string
    model?: string
    year?: string,
    owner?: string
}



export const RecentVINComponent = () => {
    const [recentVINs] = useState<RecentVIN[]>([
        { vin: "1HGCM82633A123456", date: "2023-10-01", make: "Honda", model: "Accord", year: "2021", owner: "Shankara Amankwaah" },
        { vin: "12XWX7C5XEL071943", date: "2023-09-28", make: "BMW", model: "X5", year: "2019", owner: "Elvis Boahen" },
        { vin: "5UXWX7C5XEL071943", date: "2023-09-28", make: "BMW", model: "X5", year: "2019", owner: "Nhyirah Charles" },
        { vin: "ADXWX7C5XEL071943", date: "2023-09-28", make: "BMW", model: "X5", year: "2019", owner: "Nhyirah Charles" }
    ])

    return (
        <div className="flex flex-col gap-3 pt-4">
            <h3 className="font-sm text-muted-foreground flex items-center gap-1">
                <Clock size={12} />
                Recently Entered VINs
            </h3>
            {recentVINs.length === 0 ? (
                <ResourceNotFound message="No recently entered VINs" />
            ) : (
                <div className="flex flex-col gap-2">
                    {recentVINs.map((itemData, index) => (
                        <RecentVINComponentItem key={index} item={itemData} />
                    ))}
                </div>
            )}
        </div>
    )
}