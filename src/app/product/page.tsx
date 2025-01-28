import axios from "axios";

interface Product {
  id: number;
  price: number;
  name: string;
  "no of items": number; // Column name with spaces
}

export default async function ProductPage() {
  const API_URL = "https://cpnubbbriscoavcadlpg.supabase.co/rest/v1/Product";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwbnViYmJyaXNjb2F2Y2FkbHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNTY3MzIsImV4cCI6MjA1MzYzMjczMn0.MAi1mWSZOZUQ4vtUYvBGPoo0mvsWdyhpYVEnxB9iY2M";

  try {
    const { data: products } = await axios.get<Product[]>(API_URL, {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    console.log("products:", products);

    return (
      <div>
        <h1>Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-black">Price: ${product.price}</p>
              <p>Available Items: {product["no of items"]}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error Details:");
      console.error("Response Data:", error.response?.data);
      console.error("Status Code:", error.response?.status);
      console.error("Headers:", error.response?.headers);
    } else {
      console.error("Unexpected Error:", error);
    }

    return (
      <div>
        <h1>Error</h1>
        <p>Failed to fetch product data.</p>
      </div>
    );
  }
}
