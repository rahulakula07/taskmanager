// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // const API_URL = import.meta.env.VITE_APP_BASE_URL + "/api";
// const API_URL = ["http://localhost:8800/api","https://taskmanager-backend-y240.onrender.com/api"];
// // const API_URL = "https://taskmanager-backend-y240.onrender.com/api";

// const baseQuery = fetchBaseQuery({ baseUrl: API_URL,credentials: "include", });

// export const apiSlice = createApi({
//   baseQuery,
//   tagTypes: [],
//   endpoints: (builder) => ({}),
// });


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8800/api"
    : "https://taskmanager-backend-y240.onrender.com/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include", 
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});

// export const apiSlice = createApi({
//   baseQuery,
//   endpoints: (builder) => ({
//     getNotifications: builder.query({
//       query: () => "/user/notifications",
//     }),
//   }),
// });

// export const { useGetNotificationsQuery } = apiSlice;
