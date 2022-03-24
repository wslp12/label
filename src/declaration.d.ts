declare global {
  namespace NodeJS {
    interface ProcessEnv {
      loaMode: 'development' | 'production';
    }
  }
}

export {};
