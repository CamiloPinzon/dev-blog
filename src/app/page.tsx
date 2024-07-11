import PageLayout from "@/components/pageLayout";
import Profile from "@/components/profile";
import LongCard from "@/components/longCard";
import SquareCard from "@/components/squareCard";

const Home = async () => {
	const blogs = await getAllBlogs();
	return (
		<>
			<PageLayout>
				<h1>{JSON.stringify(blogs)}</h1>
				<Profile />
				<LongCard />
				<SquareCard />
			</PageLayout>
		</>
	);
};

// This function will be called at build time
//Provides access to the statically generated props
//Creates a static page
const getAllBlogs = async () => {
	const response = await fetch("https://api.example.com/blogs");
	if (!response.ok) {
		throw new Error("Failed to fetch blogs");
	}
	const blogs = await response.json();
	return blogs;
};

export default Home;
