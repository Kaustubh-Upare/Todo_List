import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getMyTasks } from "../../../../serverTodo/controller/taskHandler";


const api=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:['tasks'],
    endpoints:(builder)=>({
        getMyTasks:builder.query({
            query:()=>({
                url:'task/my',
                credentials:'include'
            }),
            providesTags:['tasks']
        }),
        addNewTask:builder.mutation({
            query:(frm)=>({
                url:'/new',
                credentials:'include',
                method:'post',
                body:frm
            }),
            invalidatesTags:['tasks'],
            async onQueryStarted(frm,{dispatch,queryFulfilled}){
                const patchResult=dispatch(
                    api.util.updateQueryData('getMyTasks',undefined,(draft)=>{
                        draft.unshift({id: crypto.randomUUID(),...frm});
                    })
                );
                try {
                    await queryFulfilled;
                } catch (error) {
                    patchResult.undo();
                }
            }
        }),
        updateTask:builder.mutation({
            query:(frm)=>({
                url:'/task/update',
                credentials:'include',
                method:'put',
                body:frm,
            }),
            invalidatesTags:['tasks'],
            
        }),
        deleteTask:builder.mutation({
            query:(id)=>({
                url:'/task/delete',
                credentials:'include',
                method:'DELETE',
                body:id,
            }),
            invalidatesTags:['tasks']
        })
    })
})

export default api;

const {useGetMyTasksQuery,useAddNewTaskMutation,useDeleteTaskMutation,useUpdateTaskMutation}=api