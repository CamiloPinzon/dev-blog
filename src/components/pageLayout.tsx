import Navbar from "./navbar";
import Footer from "./footer";
export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<div>{children}</div>
			<Footer />
		</>
	);
}
