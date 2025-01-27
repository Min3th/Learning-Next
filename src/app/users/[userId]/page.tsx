import { getUser, updateUser } from "@/app/data-access/user";
import { revalidatePath } from "next/cache";
import { updateNameAction } from "./actions";
import { useCallback } from "react";

import Form from "./form";



export default async function UsersPage({
  params,}: {
    params:{
      userId : string;
    }
  }) {

  const user =await getUser(params.userId);
  
  return (

    <div className=" bg-white  items-center justify-items-center min-h-screen flex flex-col">
        <div>Users : {user.name}</div>
      <Form userId={user.id}/>
    </div>
    
  );
}
