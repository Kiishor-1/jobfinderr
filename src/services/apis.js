const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const AUTH_ENDPOINTS = {
    REGISTER:`${BASE_URL}/api/auth/register`,
    LOGIN:`${BASE_URL}/api/auth/login`
}

export const JOB_ENDPOINTS = {
    GET_ALL_JOBS:`${BASE_URL}/api/jobs`,
    GET_JOB_BY_ID:(id)=>`${BASE_URL}/api/jobs/${id}`,
    CREATE_JOB:`${BASE_URL}/api/jobs/create`,
    UPDATE_JOB:(id)=>`${BASE_URL}/api/jobs/${id}`,
    DELETE_JOB:(id)=>`${BASE_URL}/api/jobs/${id}`
}