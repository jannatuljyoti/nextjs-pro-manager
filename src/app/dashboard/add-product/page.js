import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AddProductForm from "./AddProductForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>
        <AddProductForm />
      </div>
    </div>
  );
}
