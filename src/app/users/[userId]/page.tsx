import { getUser, updateUser } from "@/app/data-access/user";
import { revalidatePath } from "next/cache";



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
        <form action={async(formData : FormData)=>{
          "use server";
          const newName = formData.get("name") as string; 
          await updateUser(user.id, newName);
          revalidatePath(`users/${user.id}`);
        }}>
          <input type="text" name="name"/>
          <button>Submit</button>
        </form>
    </div>
    
  );
}
