'use client';
import { useState } from "react";
import { RecentVINComponentSkeleton } from "@/components/mechanics/recently-entered-vin-skeleton";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { RecentVINComponent } from "@/components/mechanics/recently-entered-vin";

export default function VINCollectionDialog({ isOpen = true, onOpenChange }: { isOpen?: boolean, onOpenChange?: (open: boolean) => void }) {
    const [vinValue, setVinValue] = useState('');

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg font-sans">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-xl">
                        LOG VIN
                    </DialogTitle>
                    <DialogDescription>
                        Enter the VIN of the vehicle.
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                    <input value={vinValue} onChange={(e) => { setVinValue(e.target.value) }} type="text" placeholder="1HGCM82633A123456" className="border p-2 rounded w-full" />
                </div>

                {vinValue === '' && <RecentVINComponent />}
                <div className="pt-4 space-y-2">
                    {vinValue != '' && [0, 1, 2].map((_, index) =>
                        <RecentVINComponentSkeleton key={index} />

                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}