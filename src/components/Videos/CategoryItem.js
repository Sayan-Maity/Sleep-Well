import React, { useContext } from "react";
import LightModeContext from "../../contexts/LightMode-context";

function CategoryItem({ categoryName, handleVideo }) {
  const { lightMode, lightBtn } = useContext(LightModeContext);

  return (
    <>
      <div className="flex items-center justify-center mt-5 auto-cols-auto">
        {lightMode ? (
          <button
            className="rounded-2xl p-2 text-sm btn-light hover:bg-indigo-300  text-zinc-500 hover:text-pink-100 transition duration-0 hover:duration-700 ease-in w-4/12 md:w-6/12 h-12"
            style={lightBtn}
            type="button"
            onClick={() => handleVideo(categoryName)}
          >
            {categoryName}
          </button>
        ) : (
          <button
            className="rounded-2xl p-2 text-sm btn-color hover:bg-indigo-300  text-zinc-500 hover:text-pink-100 transition duration-0 hover:duration-700 ease-in w-4/12 md:w-6/12 h-12"
            type="button"
            onClick={() => handleVideo(categoryName)}
          >
            {categoryName}
          </button>
        )}
      </div>
    </>
  );
}

export default CategoryItem;
