export const storage = {
    save ({ key, value }:any) {
      return localStorage.setItem(key, value);
    },
    get ({ key }:any) {
      return localStorage.getItem(key);
    }
  }