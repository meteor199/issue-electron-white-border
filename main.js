const path = require("path");
const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    frame: false,
    maximizable: false,
    resizable: false,
    width: 600,
    height: 800,
  });
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
  setTimeout(() => {
    mainWindow.setResizable(true)
    mainWindow.setMaximizable(true);
    mainWindow.maximize();
  }, 3000);
});
