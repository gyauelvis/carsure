import { CarFront, Calendar, Info, UserCircle2 } from "lucide-react"
interface RecentVIN {
    vin: string
    date: string
    make?: string
    model?: string
    year?: string,
    owner?: string
}

export default function RecentVINComponentItem({ item }: { item: RecentVIN }) {
    return (
        <a
            href={`/vin/${item.vin}`}
            className="flex flex-col p-3 border rounded-lg bg-muted/50 hover:bg-accent/10 hover:border-primary/30 transition-colors"
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <CarFront size={18} className="text-primary" />
                    <span className="font-mono font-medium">{item.vin}</span>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} />
                    {item.date}
                </span>
            </div>

            <div className="flex justify-between">
                {(item.make || item.model || item.year) && (
                    <div className="mt-2 ml-6 text-sm text-muted-foreground flex items-center gap-1">
                        <Info size={12} />
                        {[item.year, item.make, item.model].filter(Boolean).join(" ")}
                    </div>
                )}

                {(item.owner) && (
                    <div className="mt-2 ml-6 text-sm text-muted-foreground flex items-center gap-1">
                        <UserCircle2 size={12} />
                        {item.owner.length > 20 ? `${item.owner.slice(0, 20)}...` : item.owner}
                    </div>
                )}
            </div>
        </a>
    )
}