export const decodeVin = async (vin: string) => {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    if (data?.Results?.length === 0) {
        throw new Error('No data found');
    }
    const { Make, Model, ModelYear, Trim, BodyClass, VehicleType, EngineModel, FuelTypePrimary, TransmissionStyle, PlantCountry } = data.Results[0];
    return {
        make: Make,
        model: Model,
        year: ModelYear,
        trim: Trim,
        bodyClass: BodyClass,
        vehicleType: VehicleType,
        engineModel: EngineModel,
        fuelTypePrimary: FuelTypePrimary,
        transmissionStyle: TransmissionStyle,
        plantCountry: PlantCountry,
    };
}