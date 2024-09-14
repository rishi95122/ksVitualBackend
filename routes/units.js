
import express from "express"
import { createUnit, getAllUnits, getUnitById } from "../contollers/units.js";

const router = express.Router();

router.post('/', createUnit);


router.get('/', getAllUnits);


router.get('/:id', getUnitById);


export default router;