"use client"

import { getUser, updateUser } from "@/app/data-access/user";
import { revalidatePath } from "next/cache";
import { updateNameAction } from "./actions";
import { useCallback } from "react";
import { useFormState, useFormStatus } from "react-dom";



export default function Form({userId}:{userId:string})
  {

  
  const [state,action] = useFormState(updateNameAction,{
    userId,
  })
  return (

    <div className=" bg-white  items-center justify-items-center min-h-screen flex flex-col">
        
        <form action={action}>
          <input type="text" name="name"/>
          <SubmitButton/>
        </form>
    </div>
    
  );
}

export function SubmitButton(){
    const status = useFormStatus();
    return <button>{status.pending? "Saving..." : "Save"}</button>
}