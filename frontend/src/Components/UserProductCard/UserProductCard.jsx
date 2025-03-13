import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserProductCard = ({ products }) => {
   const navigate = useNavigate();

   return (
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
         {products && products.products && products.products.length > 0 ? (
            products.products.map((product, index) => (
               
               <div  className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                 <Link key={index} to={`/product/${product._id}`}>
                 
                  <img src={product?.images[0]?.url} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                  </Link>
                  <div className="px-4 py-3">
                     <p className="text-lg font-bold text-black truncate">{product.name}</p>
                     <div className="flex items-center">
                        <p className="text-lg font-semibold text-black my-3">{product.price}</p>
                      
                        <div className="ml-auto">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-bag-plus cursor-pointer"
                              viewBox="0 0 16 16"
                              onClick={() => navigate("/shippinginfo", { state: { product } })} // ✅ Fixed
                           >
                              <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               
            ))
         ) : (
            <p>No products</p>
         )}
      </section>
   );
};

export default UserProductCard;
