import { getUser } from "@/app/data-access/user";



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
    </div>
    
  );
}
