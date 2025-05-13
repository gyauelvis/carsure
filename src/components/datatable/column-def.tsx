import { z } from "zod"
import { vehicleSchema } from "@/schema/schema"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { IconDotsVertical, IconCircleCheckFilled, IconLoader, IconX } from "@tabler/icons-react"
import { TableCellViewer } from "@/components/datatable/table-cell-viewer"

export const columns: ColumnDef<z.infer<typeof vehicleSchema>>[] = [
    {
        accessorKey: "vin",
        header: "VIN",
        cell: ({ row }) => {
            return <TableCellViewer item={row.original} />
        },
        enableHiding: false,
    },
    {
        accessorKey: "importer",
        header: "Importer",
        cell: ({ row }) => (
            <div className="w-32">
                {row.original.importer}
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <Badge variant="outline" className="text-muted-foreground px-1.5">
                {row.original.status.toLowerCase() === "cleared" ? (
                    <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
                ) : row.original.status.toLowerCase() === "in process" ? (
                    <IconLoader />
                ) : <IconX className="text-red-500" />
                }
                {row.original.status}
            </Badge>
        ),
    },
    {
        accessorKey: "odometer_reading",
        header: () => <div className="w-full">Odometer Reading</div>,
        cell: ({ row }) => {
            return (<div className="text-left"> {row.original.odometer_reading}</div>)
        },
    },
    {
        accessorKey: "condition",
        header: () => <div className="w-full">Condition</div>,
        cell: ({ row }) => (
            <Badge variant="outline" className={`text-muted-foreground px-1.5 ${row.original.condition.toLowerCase() === "excellent" ? "bg-green-500/20" : row.original.condition.toLowerCase() === "good" ? "bg-yellow-500/20" : row.original.condition.toLowerCase() === 'fair' ? "bg-blue-500/20" : "bg-red-500/20"}`}>
                {row.original.condition}
            </Badge>
        ),
    },
    {
        accessorKey: "date_of_import",
        header: "Import Date",
        cell: ({ row }) => {
            return (<div> {row.original.date_of_import}</div>)
        },
    },
    {
        id: "actions",
        cell: () => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
                        size="icon"
                    >
                        <IconDotsVertical />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
]