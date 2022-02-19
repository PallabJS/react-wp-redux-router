import { config } from "../config";

class ProductApi {
  getTrendingProducts = async () => {
    try {
      let res = await fetch(`${config.HOST_URI}/product`, {
        method: "get",
      });
      res = await res.json();
      if (res.error) throw new Error(res.message);
      return res;
    } catch (error) {
      return { error: true, message: error.message };
    }
  };
}

export const productApi = new ProductApi();
