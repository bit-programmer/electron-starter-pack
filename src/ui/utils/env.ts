import dotenv from "dotenv";
import { EnvInterface } from "../interfaces/env-interface";
import { DEFAULT_PORT } from "./constants";

dotenv.config();

export const envVariables : EnvInterface = {
    PORT: process.env.PORT !== undefined ? parseInt(process.env.PORT) : DEFAULT_PORT
};