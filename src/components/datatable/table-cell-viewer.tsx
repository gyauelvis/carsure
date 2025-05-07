
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerClose, DrawerTrigger, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { IconBook } from "@tabler/icons-react"
import { z } from "zod"
import { vehicleSchema } from "@/schema/schema"
export function TableCellViewer({ item }: { item: z.infer<typeof vehicleSchema> }) {
    const isMobile = useIsMobile()

    return (
        <Drawer direction={isMobile ? "bottom" : "right"}>
            <DrawerTrigger asChild>
                <Button variant="link" className="text-foreground w-fit px-0 text-left">
                    {item.vin}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="gap-1">
                    <DrawerTitle>{item.vin}</DrawerTitle>
                    <DrawerDescription>
                        Total Recorded Data of Vehicle
                    </DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
                    {!isMobile && (
                        <>
                            <Separator />
                            <div className="grid gap-2">
                                <div className="flex gap-2 leading-none font-medium">
                                    Officer Remarks
                                    <IconBook className="size-4" />
                                </div>
                                <div className="text-muted-foreground">
                                    The vehicle is in good shape.
                                </div>
                            </div>
                            <Separator />
                        </>
                    )}
                    <form className="flex flex-col gap-2">
                        <section className="flex flex-col gap-4">
                            <h2 className="text-xs text-muted-foreground">Vehicle Identification</h2>

                            <div className="flex flex-col gap-3">
                                <Label htmlFor="vin">Vehicle Index Number</Label>
                                <Input id="vin" defaultValue={item.vin} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="make">Make</Label>
                                    <Input id="make" defaultValue={item.importer} />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="model">Model</Label>
                                    <Input id="model" defaultValue={"Corolla"} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="year">Year Of Manufacture</Label>
                                    <Input id="year" defaultValue={"2003"} />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="model">Engine Number</Label>
                                    <Input id="limit" defaultValue={"89-93938-328389"} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="origin">Contry of Origin</Label>
                                    <Input id="origin" defaultValue={"USA"} />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="chasis_no">Chasis Number</Label>
                                    <Input id="chasis_no" defaultValue={"12345890"} />
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xs text-muted-foreground py-4">Entry Details</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="importer">Importer Name</Label>
                                    <Input id="importer" defaultValue={item.importer} />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="date_of_import">Date of Import</Label>
                                    <Input id="date_of_import" defaultValue={item.date_of_import} />
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xs text-muted-foreground py-4">Condition and Readings</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="odometer_reading">Odometer Reading</Label>
                                    <Input id="odometer_reading" defaultValue={item.odometer_reading} />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="reviewer">Vehicle Condition</Label>
                                    <Select defaultValue={item.condition}>
                                        <SelectTrigger id="reviewer" className="w-full">
                                            <SelectValue placeholder="Select a reviewer" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Excellent">Excellent</SelectItem>
                                            <SelectItem value="Good">Good</SelectItem>
                                            <SelectItem value="Fair">Fair</SelectItem>
                                            <SelectItem value="Poor">Poor</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Done</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}