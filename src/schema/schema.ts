import { z } from "zod";
import { type Icon } from "@tabler/icons-react"

export type WaitlistData = {
    name: string;
    email: string;
    advice?: string;
}

export type CustomVehicleRegistrationData = {
    vin: string;
    make: string;
    model: string;
    year: string;
    color: string;
    condition: string;
    status: string;
    mileage: string;
    remarks?: string;
    images?: File[];
    importer: string;
    originCountry: string;
    engineType: string;
    bodyType: string;
    importDate: string;
}

export const earlyAccessFormSchema = z.object({
    name: z.string().nonempty("First name is required"),
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    advice: z.string().optional(),
})

export const vehicleSchema = z.object({
    id: z.string(),
    vin: z.string(),
    importer: z.string(),
    status: z.enum(["Cleared", "In Process", "Flagged"]),
    odometer_reading: z.string(),
    condition: z.enum(["Excellent", "Good", "Fair", "Poor"]),
    date_of_import: z.string()
})

export const newVehicleEntryFormSchema = z.object({
    vin: z.string().min(17, "Must be 17 character long").max(17, "Must be 17 character long").nonempty("VIN is required"),
    make: z.string().nonempty("Make is required"),
    model: z.string().nonempty("Model is required"),
    year: z.string().nonempty("Year is required"),
    color: z.string().nonempty("Color is required"),
    mileage: z.string().nonempty("Mileage is required"),
    condition: z.string().nonempty("Condition is required"),
    remarks: z.string().optional(),
    status: z.enum(["Cleared", "In Process", "Flagged"]),
    images: z.array(z.any()).optional(),
    importer: z.string().nonempty('Importer Name is required'),
    originCountry: z.string().nonempty("Origin country is required"),
    engineType: z.string().nonempty("Engine type is required"),
    bodyType: z.string().nonempty("Body type is required"),
    importDate: z.string().nonempty("Import date is required"),
})

export type NavMenuType = {
    title: string;
    url: string;
    icon?: Icon;
    active: boolean;
} 