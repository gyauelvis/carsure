import { BanIcon } from "lucide-react"
export default function ResourceNotFound({ message }: { message: string }) {
    return (
        <div className="w-full flex gap-2 text-muted-foreground items-center justify-center border min-h-20 border-dashed rounded mt-4">
            <BanIcon size={18} />
            <p className="text-sm">{message}</p>
        </div>
    )
}