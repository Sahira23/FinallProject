import express from "express";
import {
  createTour,
  deleteTour,
  getTour,
  getTours,
  updateTour,
} from "../controllers/tours.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createTour);

//UPDATE
router.put("/:id", verifyAdmin, updateTour);

//DELETE
router.delete("/:id", verifyAdmin, deleteTour);

//GET
router.get("/find/:id", getTour);

//GET ALL
router.get("/", getTours);

export default router;
