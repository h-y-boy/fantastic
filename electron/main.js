import { app, BrowserWindow } from "electron";
import path from "node:path";

const __dirname = import.meta.dirname;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
    },
  });

  if (app.isPackaged) {
    win.loadFile(path.resolve(__dirname, "../dist", "index.html"));
  } else {
    win.loadURL("http://localhost:5173/");
  }

  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
