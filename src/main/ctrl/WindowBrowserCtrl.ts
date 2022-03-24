import { BrowserWindow } from 'electron';
import path from 'path';

// NOTE 모든 윈도우는 해당 프리셋을 사용 합니다
class WindowBrowserCtrl {
  private bw: BrowserWindow;

  get window() {
    return this.bw;
  }

  constructor(options?: Electron.BrowserWindowConstructorOptions) {
    const defaultOptions: Electron.BrowserWindowConstructorOptions = {
      width: 1280,
      height: 800,
      resizable: true,
      icon: path.join(__dirname, '..', 'public/icon.ico'),
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
    };
    const result =
      typeof options === 'undefined'
        ? defaultOptions
        : { ...defaultOptions, ...options };

    this.bw = new BrowserWindow(result);
    this.window.setMinimumSize(800, 600);
  }
}

export default WindowBrowserCtrl;
