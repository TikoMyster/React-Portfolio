import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../App.css";

function Navbar() {
	const [durum, setDurum] = useState(true);
	console.log(durum);
	window.onscroll = function () {
		scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 80 ||
		document.documentElement.scrollTop > 80
	) {
		document.querySelector(".navbarcon").style.backgroundColor = "#161616";
	} else {
		document.querySelector(".navbarcon").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
		document.querySelector(".t1").style.backgroundColor = "rbga(0, 0, 0, 0)";
	}
}

return (
	<>
	<div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
		<h1 className="text-4x1 font-bold">Christopher</h1>

		<nav 
		className={` flex justify-center items-center gap-x-10 ${
			durum && "lg:hidden"
		} lg:fixed lg:top-0 -z-20 lg:flex-col lg:w-full lg:bg-[#161616] lg:h-[450px] lg: left-0 h-full lg:items-start lg:pl-6 cursor-pointer lg:pt-20`}>
		
		<ul className=" flex gap-10 text-3x1 mr-4 lg:flex-col lg:gap-6 ">
			<li className="Anchors">
				<AnchorLink href="#home">Home</AnchorLink>
			</li>
			<li className="Anchors">
				<AnchorLink href="#socialmedia">SocialMedia</AnchorLink>
			</li>
			<li className="Anchors">
				<AnchorLink href="#Projects">Projects</AnchorLink>
			</li>
		</ul>

		<div className="icon text-lg flex gap-5 lg:gap-8 lg:my-10">
			<a href="https://github.com/TikoMyster" target="_blank">
				<i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
			</a>
		</div>
		<div className="btn">
			<button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold">

			</button>
		</div>
		</nav>
		<i 
		onClick={(e) => setDurum(!durum)}
		className="fa-solid fa-bars hidden lg:block text-2x1 cursor-pointer"></i>
	</div>
	</>
	);
};
export default Navbar;