import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
const Header = () => {
  const [pages, setPages] = useState([
    { name: 'Home', isSelected: true },
    { name: 'Experience', isSelected: false },
    { name: 'Projects', isSelected: false },
    { name: 'Skills', isSelected: false },
    { name: 'Contact', isSelected: false },
  ]);
  const [isOpen, setOpen] = React.useState(null);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlePageSelect = (pageName) => {
    const newPages = [...pages.map((page) => ({ ...page, isSelected: page.name === pageName }))];
    setPages(newPages);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-sky-600 px-3 py-3">
        <div className="text-black font-bold p-2 bg-white border border-b-white rounded-3xl cursor-pointer">AG</div>
        <div className="hidden md:block">
          <div className="flex justify-between items-center gap-3 cursor-pointer ">
            {pages.map((page, idx) => (
              <div
                className={`px-3 py-3 font-bold ${
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
        <div className="md:hidden cursor-pointer">
          {isOpen ? <CloseIcon onClick={handleClose} /> : <MenuIcon onClick={handleClick} />}
        </div>
      </div>
      {isOpen && (
        <div className="bg-sky-600">
          {pages.map((page, idx) => (
            <div
              className={`w-full px-3 py-3 cursor-pointer font-bold ${
                page.isSelected === true ? 'text-orange-200' : 'text-black'
              } rounded-sm  hover:underline`}
              key={idx}
              onClick={() => handlePageSelect(page.name)}
            >
              {page.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Header;
