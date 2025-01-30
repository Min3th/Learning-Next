import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://cpnubbbriscoavcadlpg.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || ''; // Ensure a fallback for the key
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchUsers = async () => {
  const { data, error } = await supabase.from("User").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export default async function UsersPage() {
  let users;
  try {
    users = await fetchUsers();
  } catch (error) {
    return <p className="text-center text-red-500">Error: {(error as Error).message}</p>;
  }

  if (!users || users.length === 0)
    return <p className="text-center text-gray-600">No users found.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Email</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.date_of_birth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
