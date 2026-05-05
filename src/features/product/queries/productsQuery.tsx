import { getProducts } from "../services/service";
import { productKeys } from "./productKeys";

export const productsQuery = () => ({
  queryKey: productKeys.list(),
  queryFn: getProducts,
  refetchOnWindowFocus:false

});