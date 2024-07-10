const Home = () => {
	return (
		<>
			<nav className="bg-gray-800 flex justify-between text-white px-10 py-8">
				<h1>Dev Blog</h1>
				<div>Home</div>
			</nav>
			<section className="border-b-[#CCC] border-b-2">
				<div id="profile" className="p-10 flex gap-10 items-center">
					<div id="profile_image">
						<img
							className="rounded-full"
							src="https://fakeimg.pl/100/"
							alt="Profile picture"
						/>
					</div>
					<div id="profile_info">
						<p className="max-w-md">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
							itaque, culpa nesciunt repudiandae assumenda qui beatae minus
							libero non dolorum animi harum sed aperiam totam placeat, alias
							minima? Dicta, ratione.
						</p>
					</div>
				</div>
			</section>
			<div id="long_card" className="p-10">
				<div className="shadow-md px-10">
					<div
						id="card_header"
						className="flex gap-10 py-5 items-center border-b-[#CCC] border-b-2"
					>
						<div>
							<img
								className="rounded-full"
								src="https://fakeimg.pl/50/"
								alt="author_image"
							/>
						</div>
						<div>
							<div>
								<h3 className="font-bold">Placeholder Author</h3>
							</div>
							<div>
								<i className="text-[.8rem] text-gray-500">Placeholder date</i>
							</div>
						</div>
					</div>
					<div id="long_card_info">
						<div className="py-5">
							<h3 className="font-bold">Placeholder title</h3>
							<p className="text-sm">Placeholder content</p>
						</div>
					</div>
				</div>
				<div id="long_card_button" className="flex justify-end px-5">
					<button className="bg-gray-500 text-white px-5 py-2 rounded-b shadow-md">
						Read More
					</button>
				</div>
			</div>
			<div id="square_card" className="p-10 max-w-[350px]">
				<div className="p-5 shadow-md">
					<div
						id="card_header"
						className="flex gap-10 py-5 items-center border-b-[#CCC] border-b-2"
					>
						<div>
							<img
								className="rounded-full"
								src="https://fakeimg.pl/50/"
								alt="author_image"
							/>
						</div>
						<div>
							<div>
								<h3 className="font-bold">Placeholder Author</h3>
							</div>
							<div>
								<i className="text-[.8rem] text-gray-500">Placeholder date</i>
							</div>
						</div>
					</div>
					<div>
						<img src="https://fakeimg.pl/250/" alt="Lorem image" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
