import React, { useState } from 'react';

const Header = () => {
  const [pages, setPages] = useState([
    { name: 'Home', isSelected: true },
    { name: 'Experience', isSelected: false },
    { name: 'Projects', isSelected: false },
    { name: 'Skills', isSelected: false },
    { name: 'Contact', isSelected: false },
  ]);

  const handlePageSelect = (pageName) => {
    const newPages = [...pages.map((page) => ({ ...page, isSelected: page.name === pageName }))];
    setPages(newPages);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-sky-600 px-[20px] py-[15px] ">
        <div className="text-black font-bold p-[5px] bg-white border border-b-white rounded-[20px] cursor-pointer">
          AG
        </div>

        <div className="flex justify-between items-center gap-[20px] cursor-pointer ">
          {pages.map((page, idx) => (
            <div
              className={`px-[20px] py-[5px] ${
                page.isSelected === true ? 'text-orange-200' : 'text-black'
              } rounded-sm  hover:underline`}
              key={idx}
              onClick={() => handlePageSelect(page.name)}
            >
              {page.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Header;
