declare global {
  namespace NodeJS {
    interface ProcessEnv {
      loa: {
        host: string;
        mode: 'dev';
      };
      // loa_host: string;
    }
  }
}

export {};
