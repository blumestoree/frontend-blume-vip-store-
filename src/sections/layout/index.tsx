import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-full min-h-screen flex-col bg-blue-50/20">
			<Header />
			<div className="mt-[70px]">{children}</div>
			<Footer />
		</div>
	);
}
