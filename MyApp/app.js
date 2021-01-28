const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname)

function createWindow() {
    const CONFIGURATION_MAIN_WINDOW = {
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    }

    const mainWindow = new BrowserWindow(CONFIGURATION_MAIN_WINDOW)

    mainWindow.loadFile(__dirname + '/view/mainWindow.html')
}

app.whenReady().then(createWindow)