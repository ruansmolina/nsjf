import api from'../../../services/api.tsx';

export const getProducts = async () =>{
    const { data } = await api.get("/product");
    return data;
}