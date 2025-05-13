import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { CustomVehicleRegistrationData } from "@/schema/schema";
import { Badge } from "@/components/ui/badge";
import { Car, Calendar, Gauge, Palette, MapPin, Flag, Target, Clock, CheckCircle } from "lucide-react";

export default function VehiclePreviewDialog({ vehicleData, isOpen = false, onOpenChange }: { vehicleData: CustomVehicleRegistrationData, isOpen?: boolean, onOpenChange: (open: boolean) => void }) {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-2xl font-sans">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        <Car className="text-blue-500" />
                        Vehicle Preview
                    </DialogTitle>
                    <DialogDescription>
                        Confirm the details of this vehicle before finalizing
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                    <div className="bg-card p-3 rounded-lg mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-lg">
                                {vehicleData.make} {vehicleData.model} ({vehicleData.year})
                            </h3>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {vehicleData.status}
                            </Badge>
                        </div>
                        <p className="text-xs text-gray-500">VIN: {vehicleData.vin}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-card p-3 rounded-lg">
                            <h4 className="font-medium text-foreground mb-2">Vehicle Details</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <Calendar size={16} className="text-gray-500" />
                                    <span className="font-medium">Year:</span> {vehicleData.year}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Palette size={16} className="text-gray-500" />
                                    <span className="font-medium">Color:</span> {vehicleData.color}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Gauge size={16} className="text-gray-500" />
                                    <span className="font-medium">Mileage:</span> {vehicleData.mileage}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <CheckCircle size={16} className="text-gray-500" />
                                    <span className="font-medium">Condition:</span> {vehicleData.condition}
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-3 rounded-lg">
                            <h4 className="font-medium text-foreground mb-2">Import Information</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin size={16} className="text-gray-500" />
                                    <span className="font-medium">Importer:</span> {vehicleData.importer}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Flag size={16} className="text-gray-500" />
                                    <span className="font-medium">Origin:</span> {vehicleData.originCountry}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Clock size={16} className="text-gray-500" />
                                    <span className="font-medium">Import Date:</span> {vehicleData.importDate}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Target size={16} className="text-gray-500" />
                                    <span className="font-medium">Status:</span> {vehicleData.status}
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-3 rounded-lg">
                            <h4 className="font-medium text-foreground mb-2">Technical Details</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-medium">Engine Type:</span> {vehicleData.engineType}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-medium">Body Type:</span> {vehicleData.bodyType}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-medium">Odometer:</span> {vehicleData.mileage}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="font-medium">Remarks:</span> {vehicleData.remarks}
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-3 rounded-lg">
                            <h4 className="font-medium text-foreground mb-2">Media</h4>
                            {/* <div className="flex items-center gap-2">
                                <Image  size={16} className="text-gray-500" />
                                <span className="font-medium text-sm">Images:</span>
                            </div> */}
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {vehicleData.images?.map((img, index) => (
                                    <div key={index} className="bg-gray-200 rounded p-2 text-xs text-center">
                                        {/* {img? img : 'No Image'} */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <DialogFooter className="gap-2 mt-6">
                    <Button variant="outline" onClick={() => isOpen = false}>
                        Edit Details
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700">
                        Confirm & Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}