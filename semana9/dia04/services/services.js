import axios from "axios";

const URL ="https://5f35f3e65b91f60016ca524a.mockapi.io";


export const getCategorias = async () => {
    let response = fetch(`${URL}/categorias`);
    return response;

}