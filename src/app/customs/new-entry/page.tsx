'use client'

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { decodeVin } from "@/actions/vin-decoder";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { newVehicleEntryFormSchema } from "@/schema/schema";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import VehiclePreviewDialog from "@/components/custom-form-dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { FileDropzone } from "@/components/dropzone";
import { FileList } from "@/components/file-list-dropzone";

export default function NewEntryForm() {

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [fileProgresses, setFileProgresses] = useState<Record<string, number>>(
        {}
    );

    const [open, setOpen] = useState(false);
    const handleOpenChange = (open: boolean) => {
        setOpen(open);
    };


    const form = useForm<z.infer<typeof newVehicleEntryFormSchema>>({
        resolver: zodResolver(newVehicleEntryFormSchema),
        defaultValues: {
            vin: "",
            make: "",
            model: "",
            year: "",
            color: "",
            mileage: "",
            condition: "",
            status: "In Process",
            remarks: "",
            images: [],
            importer: "",
            originCountry: "",
            engineType: "",
            bodyType: "",
            importDate: "",
        },
    })

    const vinValue = form.watch("vin");

    useEffect(() => {
        const timeoutId = setTimeout(async () => {
            if (vinValue && vinValue.length === 17) {
                const vinData = await decodeVin(vinValue);
                if (vinData) {
                    form.setValue("make", vinData.make);
                    form.setValue("model", vinData.model);
                    form.setValue("year", vinData.year);
                    form.setValue("engineType", vinData.engineModel);
                    form.setValue("bodyType", vinData.bodyClass);
                    form.setValue("originCountry", vinData.plantCountry);
                }
            } else {
                console.log("VIN is invalid");
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [vinValue]);

    const onSubmit = (data: z.infer<typeof newVehicleEntryFormSchema>) => {
        form.setValue("images", uploadedFiles);
        const formData = {
            ...data,
            images: uploadedFiles,
        };
        console.log("data", form.getValues());
        handleOpenChange(true);
    }

    const handleFileSelect = (files: FileList | null) => {
        if (!files) return;

        const newFiles = Array.from(files);
        setUploadedFiles((prev) => [...prev, ...newFiles]);

        newFiles.forEach((file) => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 10;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                }
                setFileProgresses((prev) => ({
                    ...prev,
                    [file.name]: Math.min(progress, 100),
                }));
            }, 300);
        });
    };

    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        handleFileSelect(e.dataTransfer.files);
    };

    const removeFile = (filename: string) => {
        setUploadedFiles((prev) => prev.filter((file) => file.name !== filename));
        setFileProgresses((prev) => {
            const newProgresses = { ...prev };
            delete newProgresses[filename];
            return newProgresses;
        });
    };

    return (
        <div className="flex items-center justify-center p-10 font-sans">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        <div>
                            <h2 className="font-semibold text-foreground dark:text-foreground">
                                Vehicle Identification Details
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
                                Record the identification details for the vehicle.
                            </p>
                        </div>
                        <div className="sm:max-w-3xl md:col-span-2">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                                <div className="col-span-full sm:col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="vin"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Vehicle Identification Number<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        id="vin"
                                                        placeholder="1HGCM82633A123456"
                                                        className="mt-2"
                                                        autoComplete="vin"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="make"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Make<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        id="make"
                                                        placeholder="Toyota"
                                                        className="mt-2"
                                                        autoComplete="make"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="model"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Model<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        id="model"
                                                        placeholder="Corolla"
                                                        className="mt-2"
                                                        autoComplete="model"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="year"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Year of Manufacture<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        id="year"
                                                        placeholder="2025"
                                                        className="mt-2"
                                                        autoComplete="year"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="engineType"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Engine Type<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        id="engineType"
                                                        placeholder="Type 2"
                                                        className="mt-2"
                                                        autoComplete="engineType"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="bodyType"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Body Type<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        id="bodyType"
                                                        placeholder="SUV"
                                                        className="mt-2"
                                                        autoComplete="bodyType"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="originCountry"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Country of Origin<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        id="originCountry"
                                                        placeholder="Ghana"
                                                        className="mt-2"
                                                        autoComplete="originCountry"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="color"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Color<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder="Black"
                                                        className="mt-2"
                                                        autoComplete="color"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-8" />
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        <div>
                            <h2 className="font-semibold text-foreground dark:text-foreground">
                                Initial Readings and Condition
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
                                Record the initial odometer reading, the condition of the vehicle and officer remarks
                            </p>
                        </div>
                        <div className="sm:max-w-3xl md:col-span-2">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                                <div className="col-span-full sm:col-span-3">
                                    <FormField
                                        control={form.control}
                                        name="mileage"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Odometer Readings in kilometers(KM)<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        id="mileage"
                                                        placeholder="2340"
                                                        className="mt-2"
                                                        autoComplete="mileage"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full sm:col-span-3">

                                    <FormField
                                        control={form.control}
                                        name="condition"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Condition<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Select
                                                        value={field.value}
                                                        onValueChange={(value) => field.onChange(value)}
                                                    >
                                                        <SelectTrigger id="condition" className="mt-2 w-full">
                                                            <SelectValue placeholder="Select Condition" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="excellent">Excellent</SelectItem>
                                                            <SelectItem value="good">Good</SelectItem>
                                                            <SelectItem value="fair">Fair</SelectItem>
                                                            <SelectItem value="bad">Bad</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-full py-4">
                                    <Label className="text-sm w-full py-1 font-medium text-foreground dark:text-foreground flex gap-0">Vehicle Images</Label>
                                    <FileDropzone
                                        fileInputRef={fileInputRef}
                                        handleBoxClick={handleBoxClick}
                                        handleDragOver={handleDragOver}
                                        handleDrop={handleDrop}
                                        handleFileSelect={handleFileSelect}
                                    />
                                    <FileList
                                        uploadedFiles={uploadedFiles}
                                        fileProgresses={fileProgresses}
                                        removeFile={removeFile}
                                    />
                                </div>
                                <div className="col-span-full">
                                    <FormField
                                        control={form.control}
                                        name="remarks"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Officer Remarks</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        id="remarks"
                                                        className="mt-2"
                                                        rows={4}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-8" />
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        <div>
                            <h2 className="font-semibold text-foreground dark:text-foreground">
                                Entry Details
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-muted-foreground dark:text-muted-foreground">
                                Record details of the importer and the date of import
                            </p>
                        </div>
                        <div className="sm:max-w-3xl md:col-span-2">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <FormField
                                        control={form.control}
                                        name="importer"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Importer Name<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        id="importer"
                                                        placeholder="Kojo Motors"
                                                        className="mt-2"
                                                        autoComplete="importer"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="col-span-full sm:col-span-3">

                                    <FormField
                                        control={form.control}
                                        name="importDate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Date of Import<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="date"
                                                        id="importDate"
                                                        className="mt-2"
                                                        autoComplete="importDate"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="col-span-full sm:col-span-3">

                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm w-full font-medium text-foreground dark:text-foreground flex gap-0">Status<span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Select
                                                        value={field.value}
                                                        onValueChange={(value) => field.onChange(value)}
                                                    >
                                                        <SelectTrigger id="status" className="mt-2 w-full">
                                                            <SelectValue placeholder="Select Status" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Cleared">Cleared</SelectItem>
                                                            <SelectItem value="In Process">In Process</SelectItem>
                                                            <SelectItem value="Flagged">Flagged</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-8" />
                    <div className="flex items-center justify-end space-x-4">
                        <Button type="submit" className="whitespace-nowrap">
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>


            {open && <VehiclePreviewDialog
                isOpen={open}
                onOpenChange={handleOpenChange}
                vehicleData={form.getValues()}
            />}
        </div >
    );
}
