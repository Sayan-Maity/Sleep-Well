import React, { useState } from "react";
import youtube from "../../apis/youtube";
import CategoryItem from "./CategoryItem";
import Search from "./Search";

function Categories({ setVideo }) {
  const categoryNames = [
    "Rain drops",
    "Ocean waves",
    "Forest nature",
    "City trafic sounds",
    "Whitenoise",
    "Cat purring",
    "Meditaion",
    "Relaxing music",
    "Piano",
    "Ghibli",
    "Disney",
    "Lofi",
    "ASMR whispering",
    "ASMR tapping",
    "ASMR keyboard typing",
    "ASMR cooking",
    "Relaxing bed time stroy"
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleVideo = async (genre) => {
    const data = await youtube.get("/search", {
      params: {
        q: "sleep" + genre,
        maxResults: 10,
      },
    });
    setVideo([data]);
  };

  const inputValue = categoryNames.filter((filteredItem) => {
    return filteredItem.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <div className="main-font ">
        <p className="mx-auto justify-centercontent-center pt-20 text-center text-slate-300 font-thin">
          Which sound would you like to sleep with tonight?
        </p>
        <Search
          categoryNames={categoryNames}
          setSearchQuery={setSearchQuery}
          handleVideo={handleVideo}
        />
        <div className="md:container lg:container  mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 content-center py-10">
          {inputValue.map((categoryName, index) => {
            return (
              <div key={index}>
                <CategoryItem
                  handleVideo={handleVideo}
                  categoryName={categoryName}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;
