import { createClient } from '@supabase/supabase-js';
import Image from 'next/image'
import ItemCard from '../Components/itemcard';

const supabaseUrl = 'https://cpnubbbriscoavcadlpg.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || ''; // Ensure a fallback for the key
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function ProductPage() {
  // Fetch only the "price" column from the "Product" table
  
  let { data: Product, error } = await supabase
  .from('Product')
  .select('*')
        
  console.log("price:",Product)
  if (error) {
    console.error("Supabase Error:", error);
    return (
      <div>
        <h1>Error</h1>
        <p>Failed to fetch product data.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Product Prices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Product && Product.length > 0 ? (
          Product.map((product, index) => (
            
            <div key={index} className="text-black">
              <ItemCard key={product.id} 
                        image={product.image}
                        title={product.name}
                        quantity = {product["no of items"]}
                        price={product.price}/>
              
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}