export interface LoginResponse {
    token: string
    codeProject: string
    codeUser: string
    name: any
    uiCode: string
    country: Country
  }
  
  export interface Country {
    name: string
    code: string
  }