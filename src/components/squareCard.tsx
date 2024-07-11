import CardHeader from "./cardHeader";
const SquareCard = () => {
	return (
		<>
			<div id="square_card" className="p-10 max-w-[350px]">
				<div className="p-5 shadow-md">
					<CardHeader />
					<div>
						<img src="https://fakeimg.pl/250/" alt="Lorem image" />
					</div>
				</div>
			</div>
		</>
	);
};
export default SquareCard;
