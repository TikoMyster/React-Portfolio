import React from "react";


function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl">Chris - TikoMyster</h1>
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://twitter.com/TikoMyster" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCFsPEecFLW6kuYj086x6mNQ" target="_blank">
              <i className="fa-brands fa-youtube border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/TikoMyster" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;