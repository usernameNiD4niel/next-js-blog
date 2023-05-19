import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

const FirstPost = () => {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>This is my sample post</h1>
			<h2>
				<Link href="/">Go home</Link>
			</h2>
		</Layout>
	);
};

export default FirstPost;
