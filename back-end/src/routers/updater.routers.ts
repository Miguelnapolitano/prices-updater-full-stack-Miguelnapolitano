import { Router } from "express";
import catchCsvValues from "../middlewares/catchCsvValues.middleware"
import validateValuesFromCsv from "../services/validateValuesFromCsv.services"
import updateValues from "../services/updateValues.services"
import multer from "multer";

const updaterRouter = Router()

const multerConfig = multer()

updaterRouter.post('/validate', multerConfig.single("file") ,catchCsvValues, validateValuesFromCsv)

updaterRouter.patch('/update', multerConfig.single("file"), catchCsvValues, updateValues)

export default updaterRouter