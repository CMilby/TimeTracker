const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

require("electron-reload");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		title: "Tracker",
		webPreferences: {
			nodeIntegration: true,
			devTools: true,
			preload: __dirname + "/preload.js"
		}
	});

	mainWindow.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "../build/index.html")}`
	);

	mainWindow.on("ready-to-show", () => {
		mainWindow.removeMenu();

		if (isDev) {
			mainWindow.toggleDevTools();
		}

		mainWindow.show();
	});

	mainWindow.on("closed", () => {
		mainWindow = null;
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("active", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
