import dotenv from "dotenv";
import { ENV_VARIABLES } from "../interfaces/env-variables.js";
import { DEVELOPMENT } from "./constants.js";

dotenv.config();

export function getEnvVariables() : ENV_VARIABLES {
    return {
        NODE_ENV: process.env.NODE_ENV || DEVELOPMENT
    };
}
