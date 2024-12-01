import { handleBadRequest } from "../../utils/ErrorHandle";
import { IBus } from "../interface/IBus";
import bus from "../models/bus";

const getAllBuses = async () => {
    try {
        const Buses = await bus.find();
        return Buses;
    } catch (error: any) {
        return handleBadRequest("MongoDB", error);
    }
};

const getBusById = async (busId: string) => {
    try {
        const Bus = await bus.findById(busId);
        if (!Bus) {
            throw new Error("bus not found");
        }
        return Bus;
    } catch (error: any) {
        return handleBadRequest("MongoDB", error);
    }
};

const addBus = async (busData: IBus) => {
    try {
        if (!busData.licensePlate) {
            throw new Error("Missing required fields");
        }
        const newBus = new bus(busData);
        await newBus.save();
        return newBus;
    } catch (error: any) {
        return handleBadRequest("MongoDB", error);
    }
};

const updateBus = async (busId: string, updateData: Partial<IBus>) => {
    try {
        if (updateData.licensePlate) {
            throw new Error("Password cannot be updated through this endpoint");
        }

        const existingBus = await bus.findById(busId);
        if (!existingBus) {
            throw new Error("bus not found");
        }

        const updatedBus = await bus.findByIdAndUpdate(
            busId,
            { 
                ...updateData,
                password: existingBus.licensePlate 
            },
            { 
                new: true,
                runValidators: true
            }
        );

        return updatedBus;
    } catch (error: any) {
        return handleBadRequest("MongoDB", error);
    }
};

const deleteBus = async (userId: string) => {
    try {
        const deletedUser = await bus.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error("User not found");
        }
        return { message: "User deleted successfully" };
    } catch (error: any) {
        return handleBadRequest("MongoDB", error);
    }
};
export {
    getAllBuses,
    getBusById,
    addBus,
    updateBus,
    deleteBus
};