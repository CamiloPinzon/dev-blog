import PageLayout from "@/components/pageLayout";
import Profile from "@/components/profile";
import LongCard from "@/components/longCard";
import SquareCard from "@/components/squareCard";

const Home = () => {
	return (
		<>
			<PageLayout>
				<Profile />
				<LongCard />
				<SquareCard />
			</PageLayout>
		</>
	);
};

export default Home;
