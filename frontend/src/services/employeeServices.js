import axios from "axios"
import { useMutation, useQuery } from "react-query"
// import { gql } from '@apollo/Employee';

const getEmployeeDataFromDb = () => {
    return axios.get("http://localhost:9999/inverntoryManagment/api/v1/public/employee/getEmployee")
}

const postEmployeeData = (Employee) => {
    return axios.post("http://localhost:9999/inverntoryManagment/api/v1/public/employee/addEmployee", Employee)
}

const getEmployeeById = (id) => {
    return axios.get("http://localhost:9999/inverntoryManagment/api/v1/public/employee/employee/" + id)
}

const UpdateEmployee = async (data) => {
    return await axios.put("http://localhost:9999/inverntoryManagment/api/v1/public/employee/employee/" + data.id, data.data)
}

const deleteEmployee = (id) => {
    return axios.delete("http://localhost:9999/inverntoryManagment/api/v1/public/employee/employee/" + id)
}

export const useEmployeeData = () => {

    return useQuery("getEmployee", getEmployeeDataFromDb, {
        retry: 5,
        retryDelay: 2000
    })
}

export const usePostEmployeeData = () => {
    return useMutation("postEmployee", postEmployeeData, {})
}

export const useGetEmployeeById = (id) => {
    return useQuery("getEmployeeById", getEmployeeById, {})
}

export const useEditEmployee = (id, Employee) => {
    console.log("->", id, Employee);
    return useMutation("getEmployeeById", UpdateEmployee, {
        retry: 5,
        retryDelay: 2000
    })
}
export const useDeleteEmployee = (id) => {
    return useMutation("deleteEmployee", deleteEmployee, {
        retry: 5,
        retryDelay: 2000
    })
}