export declare namespace Sharable {
  interface NewsEntity {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  interface User {
    username: string;
    password: string;
  }
  interface Login {
    isLoggedIn: boolean;
  }
  interface Error {
    isError: boolean;
    errorText: string | null;
  }
}
