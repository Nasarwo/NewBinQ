/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    APP_ROOT: string;
    VITE_PUBLIC: string;
  }
}

// Для Renderer process (то, что экспонируется в preload.ts)
interface Window {
  ipcRenderer: {
    minimizeWindow: () => void;
    maximizeWindow: () => void;
    closeWindow: () => void;
    on: (...args: Parameters<typeof ipcRenderer.on>) => void;
    // Добавьте другие методы по мере необходимости
  };

  // Оставьте оригинальное объявление, если оно используется
  ipcRenderer: import("electron").IpcRenderer;
}
