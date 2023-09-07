import axios from "axios"
import { useMutation, useQuery } from "react-query"

const AddModelsByMachines = (model) => {
    return axios.post("http://localhost:9999/inverntoryManagment/api/v1/public/model/addmodel", model)
}

const getMachines = () => {
    return axios.get("http://localhost:9999/inverntoryManagment/api/v1/public/machine/machines")
}

export const useAddModelByMachine = (model) => {
    return useMutation("addModelByMachine", AddModelsByMachines, {
        retry: 5,
        retryDelay: 1000
    })
}

export const useGetMachines = () => { 
    return useQuery("getMachines", getMachines, {
        retry: 5,
        retryDelay: 1000
    });
}