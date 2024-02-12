import { Axios } from "../../axios/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
// ------------get--------------
function getAllProduct() {
  return Axios.get(`/products`);
}

export function useGetAllProduct() {
  return useQuery(["get-AllProduct"], getAllProduct);
}

// function getAllProduct(){
//      return axios.get("https://645342cdc18adbbdfe98a3a1.mockapi.io/products")
//     }
// ----------------getbyId-----------
function getProductById({ queryKey }) {
  const id = queryKey[1];
  return Axios.get(`/products/${id}`);
}
export function useGetProductById() {
  return useQuery(["get-ProductById"], getProductById);
}

// ------------------delete-----------------
function deleteProductById(id) {
    return Axios.delete(`/products/${id}`)
}
export function useDeleteProduct() {
    return useMutation(["delete-ProductById"], deleteProductById);
}