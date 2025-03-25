import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const api=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:['tasks'],
    endpoints:(builder)=>({

    })
})

export default api;

const {}=api