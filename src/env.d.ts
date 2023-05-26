interface ProcessEnv {
  BOOK_MANAGEMENT_SYSTEM_URI: string;
  }
  
  declare global {
    namespace NodeJS {
      interface ProcessEnv extends ProcessEnv {}
    }
  }