"use strict";

import { app, protocol, BrowserWindow, nativeTheme } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
import { constants } from "./constants";
const isDevelopment = process.env.NODE_ENV !== "production";
const fs = require("fs");
const fs_extra = require("fs-extra");
const path = require("path");

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  const win = new BrowserWindow({
    frame: false,
    width: 1080,
    height: 780,
    minWidth: 1080,
    minHeight: 780,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      plugins: true,
      webSecurity: false,
      chromeWebSecurity: false,
      devTools: true,
      enableRemoteModule: true,
    },
  });
  win.maximize();

  app.on("open-url", (e) => {
    e.preventDefault();
  });

  app.on("web-contents-created", (e, contents) => {
    // Check for a webview
    if (contents.getType() === "webview") {
      // Listen for any new window events
      contents.on("new-window", (e, url) => {
        e.preventDefault();
        e.sender.webContents.loadURL(url);
      });
    }
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    win.loadURL("app://./index.html");
    win.webContents.openDevTools();
  }
}

app.on("ready", () => {
  let dirsToCreate = ["data", "data/stats", "data/stats/dates", "data/media"];

  constants.ALLOWED_FILES.forEach((f) => dirsToCreate.push("data/" + f));

  dirsToCreate.forEach((dir) => {
    let fullDir = path.join(app.getPath("userData"), dir);
    if (!fs.existsSync(fullDir)) {
      fs.mkdirSync(fullDir);
    }

    nativeTheme.themeSource = "dark";
  });

  if (!fs.existsSync(path.join(app.getPath("userData"), "pdfjs"))) {
    fs_extra.copy("../pdfjs", path.join(app.getPath("userData"), "pdfjs"));
  }
  if (!fs.existsSync(path.join(app.getPath("userData"), "notify.mp3"))) {
    fs_extra.copy(
      "../notify.mp3",
      path.join(app.getPath("userData"), "notify.mp3")
    );
  }

  protocol.registerFileProtocol("file", (request, callback) => {
    const pathname = decodeURI(request.url.replace("file:///", ""));
    callback(pathname);
  });
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
