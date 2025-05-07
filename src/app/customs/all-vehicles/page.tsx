import { DataTable } from "@/components/datatable/data-table"
import data from "../dashboard/data.json"

export default function AllVehicles()  {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
          <DataTable
            data={data.map((item) => ({
              ...item,
              id: item.id.toString(),
              odometer_reading: item.odometer_reading.toString(),
              status: item.status as "Cleared" | "In Process" | "Flagged",
              condition: item.condition as "Excellent" | "Good" | "Fair" | "Poor",
            }))} />
          </div>
        </div>
      </div>
    </div>
  )
}
