const CardHeader = () => {
	return (
		<>
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
		</>
	);
};

export default CardHeader;
