import { getUser, updateUser } from "../data-access/user";

export default async function UsersPage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUser(params.userId);

  return (
    <div className="flex flex-row items-center justify-center bg-blue-300 mt-20">
      Users : {user.name}
      <form
        action={async (formData: FormData) => {
          "use server";
          const newName = formData.get("name") as string;
          await updateUser(user.id, newName);
        }}
      >
        <input type="text" name="name" />
        <button>Submit</button>
      </form>
    </div>
  );
}
