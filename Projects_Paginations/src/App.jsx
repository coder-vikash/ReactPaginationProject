import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const PAGE_SIZE = 10;

  const [product, setProduts] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);

  const feathData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=300");
    const data = await response.json();

    setProduts(data.products);
  };

  useEffect(() => {
    feathData();
  }, []);

  const totalProducts = product.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const gotoPrevPage = (prev) => {
    setcurrentPage((prev) => prev - 1);
  };
  const gotonextPage = (pre) => {
    setcurrentPage((pre) => pre + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center my-5 gap-5">
        <h1 className="text-2xl font-bold">Products</h1>

        <div className="flex flex-wrap justify-center gap-2">
          <button
            disabled={currentPage === 0}
            onClick={gotoPrevPage}
            className="text-3xl cursor-pointer"
          >
            ◀️
          </button>
          {[...Array(noOfPages).keys()].map((n) => (
            <button
              key={n}
              onClick={() => setcurrentPage(n)}
              className={`w-10 h-10 rounded-lg border font-medium transition-all duration-300 cursor-pointer
          ${
            currentPage === n
              ? "bg-blue-600 text-white border-blue-600 "
              : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600"
          }`}
            >
              {n + 1}
            </button>
          ))}
          <button
            disabled={currentPage === noOfPages - 1}
            onClick={gotonextPage}
            className="text-3xl cursor-pointer"
          >
            ▶️
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 p-4">
        {product.slice(start, end).map((item) => (
          <ProductCard key={item.id} details={item} />
        ))}
      </div>
    </>
  );
}

const ProductCard = ({ details }) => {
  return (
    <div className="bg-white rounded-xl 0 overflow-hidden flex flex-col">
      <div className="h-full w-full p-4 bg-gray-50">
        <img
          src={details.thumbnail}
          className="w-full h-full object-contain "
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="font-bold text-black text-md line-clamp-2 min-h-[30px]">
          {details.title}
        </h2>

        <p className="text-gray-500 text-xs mt-2 line-clamp-3">
          {details.description}
        </p>

        <div className="mt-2 flex items-center gap-2">
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
            ⭐ {details.rating}
          </span>
          <span className="text-xs text-gray-500">({details.stock} left)</span>
        </div>

        <div className="mt-3">
          <span className="text-xl font-bold text-green-700">
            ${details.price}
          </span>
          <span className="ml-2 text-sm text-gray-400 line-through">
            $
            {Math.round(details.price / (1 - details.discountPercentage / 100))}
          </span>
        </div>

        <button className="mt-auto btn btn-primary w-full">Add to Cart</button>
      </div>
    </div>
  );
};

export default App;
