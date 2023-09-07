import { useMutation, useQuery } from "react-query";
import axios from "axios";

const addMachine = (data) => {
  return axios.post(
    "http://localhost:9999/inverntoryManagment/api/v1/public/machine/addmachine",
    data
  );
};

const getMachines = () => {
  return axios.get(
    "http://localhost:9999/inverntoryManagment/api/v1/public/machine/machines"
  );
};

const deleteMachines = (id) => {
  return axios.delete(
    "http://localhost:9999/inverntoryManagment/api/v1/public/machine/machine/" +
      id
  );
};

export const useAddMachine = (data) => {
  return useMutation("addMachines", addMachine, {
    retry: 5,
    retryDelay: 1000,
  });
};

export const useGetMachines = () => {
  return useQuery("getMachines", getMachines, {
    retry: 5,
    retryDelay: 1000,
  });
};

export const useDeleteMachine = (id) => {
  return useMutation("deleteMachines", deleteMachines, {
    retry: 5,
    retryDelay: 1000,
  });
};

const addCompany = (data) => {
  return axios.post(
    "http://localhost:9999/inverntoryManagment/api/v1/public/company/add",
    data
  );
};

const getCompany = () => {
  return axios.get(
    "http://localhost:9999/inverntoryManagment/api/v1/public/company/all"
  );
};

const deleteCompanies = (id) => {
  return axios.delete(
    "http://localhost:9999/inverntoryManagment/api/v1/public/company/delete/" +
      id
  );
};

export const useAddCompany = (data) => {
  return useMutation("addCompanies", addCompany, {
    retry: 5,
    retryDelay: 1000,
  });
};

export const useGetCompanies = () => {
  return useQuery("getCompany", getCompany, {
    retry: 5,
    retryDelay: 1000,
  });
};

export const useDeleteCompany = (id) => {
  return useMutation("deleteCompanies", deleteCompanies, {
    retry: 5,
    retryDelay: 1000,
  });
};
