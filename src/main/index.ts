import { app } from 'electron';
import ElectronLog from 'electron-log';
import path from 'path';
import WindowBrowserCtrl from './ctrl/WindowBrowserCtrl';

ElectronLog.info('Started App - ', 'mode: ', process.env.loaMode);

// 중복 실행 금지
const shouldQuit = app.requestSingleInstanceLock();
if (!shouldQuit) {
  app.quit();
}

// 앱 하이드 종료 기준 판단을 위한 전역 변수
let quitting = false;

function main() {
  const mainWindow = new WindowBrowserCtrl();
  mainWindow.window.loadURL('http://localhost:9091/');
  // NOTE 상단 메뉴에서 x 버튼을 클릭하여 종료 하는것이 아닌 아이콘 우측 클릭 종료 하였을때 발생 하는 이벤트
  app.on('before-quit', () => {
    quitting = true;
  });
}

app.whenReady().then(() => {
  main();
});
