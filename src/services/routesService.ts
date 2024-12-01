import { handleBadRequest } from "../../utils/ErrorHandle";
import { IBus } from "../interface/IBus";
import { IRoute } from "../interface/IRoute";
import bus from "../models/bus";
import route from "../models/route";

const getAllroutes = async () => {
    try {
        const Routes = await bus.find();
        return Routes;
    } catch (error: any) {
        return handleBadRequest("MongoDB", error);
    }
};

const getRouteById = async (routeId: string) => {
    try {
        const Route = await route.findById(routeId);
        if (!Route) {
            throw new Error("route not found");
        }
        return Route;
    } catch (error: any) {
        return handleBadRequest("MongoDB", error);
    }
};

const addRoute = async (routeData: IRoute) => {
    try {
        if (!routeData.lineNumber) {
            throw new Error("Missing required fields");
        }
        const newRoote = new bus(routeData);
        await newRoote.save();
        return newRoote;
    } catch (error: any) {
        return handleBadRequest("MongoDB", error);
    }
};

const updateRoute = async (routeId: string, updateData: Partial<IRoute>) => {
    try {
        if (updateData.lineNumber) {
            throw new Error("Password cannot be updated through this endpoint");
        }

        const existingRoute = await route.findById(routeId);
        if (!existingRoute) {
            throw new Error("route not found");
        }

        const updatedRoute = await route.findByIdAndUpdate(
            routeId,
            { 
                ...updateData,
                password: existingRoute.lineNumber 
            },
            { 
                new: true,
                runValidators: true
            }
        );

        return updatedRoute;
    } catch (error: any) {
        return handleBadRequest("MongoDB", error);
    }
};

const deleteRoute = async (routeId: string) => {
    try {
        const deletedRoute = await route.findByIdAndDelete(routeId);
        if (!deletedRoute) {
            throw new Error("User not found");
        }
        return { message: "User deleted successfully" };
    } catch (error: any) {
        return handleBadRequest("MongoDB", error);
    }
};
export {
    getAllroutes,
    getRouteById,
    addRoute,
    updateRoute,
    deleteRoute
};