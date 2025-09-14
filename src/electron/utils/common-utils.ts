import { DEVELOPMENT } from "./constants.js"
import { getEnvVariables } from "./env.js"

export const isDev = () => {
    return getEnvVariables().NODE_ENV === DEVELOPMENT;
}