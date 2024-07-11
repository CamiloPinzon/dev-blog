import CardHeader from "./cardHeader";
const LongCard = () => {
	return (
		<>
			<div id="long_card" className="p-10">
				<div className="shadow-md px-10">
					<CardHeader />
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
		</>
	);
};
export default LongCard;
