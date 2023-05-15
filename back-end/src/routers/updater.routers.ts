import { Router } from "express";
import catchCsvValues from "../middlewares/catchCsvValues.middleware"
import validateValuesFromCsv from "../services/validateValuesFromCsv.services"
import multer from "multer";

const updaterRouter = Router()

const multerConfig = multer()

updaterRouter.post('', multerConfig.single("file") ,catchCsvValues, validateValuesFromCsv)

updaterRouter.patch('')

export default updaterRouter