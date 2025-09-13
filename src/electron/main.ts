import { BrowserWindow, app } from "electron";
import path from "path";

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    const appPathName = path.join(app.getAppPath(), "dist-react", "index.html")
    mainWindow.loadFile(appPathName);
})