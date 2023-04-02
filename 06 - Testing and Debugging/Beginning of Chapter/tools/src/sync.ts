import axios from "axios";

export async function getUser(): Promise<any> {
    try {
      debugger;
      const response = await axios.get('/user?ID=12345');
      debugger;
      return response;
    } catch (error) {
      console.error(error);
    }
  }