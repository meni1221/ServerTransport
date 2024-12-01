import { handleError } from "../../utils/ErrorHandle";
import { addBus, deleteBus, getAllBuses, getBusById, updateBus } from "../services/busService";
import express, { IRouter, Request, Response } from "express";
import { login, logout } from "../services/authService";
import { addUser } from "../services/dataService";
const router: IRouter = express.Router();

router.post('/addroute', async (req: Request, res: Response): Promise<void> => {
  try {
    const bus = await addBus(req.body);
    res.status(201).json(bus);
  } catch (error: any) {
    handleError(res, error.status || 404, error.message);
  }
});

router.get("/allroutes", async (req: Request, res: Response): Promise<void> => {
    try {
        const routes = await getAllBuses();
        res.json(routes);
    } catch (error: any) {
        handleError(res, error.status || 404, error.message);
    }
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const route = await getBusById(req.params.id);
        res.json(route);
    } catch (error: any) {
        handleError(res, error.status || 404, error.message);
    }
});

router.patch("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedRoute = await updateBus(req.params.id, req.body);
        res.json(updatedRoute);
    } catch (error: any) {
        handleError(res, error.status || 400, error.message);
    }
});

router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await deleteBus(req.params.id);
        res.json(result);
    } catch (error: any) {
        handleError(res, error.status || 404, error.message);
    }
});

export default router;