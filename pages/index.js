import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hello, I'm <strong>Daniel Rey</strong>. I'm a graduating this July
					2023 and I am planning to be a Software Engineer, I am passionate
					about technologies and how technologies evolve and can change the
					world. I am from <i>Philippines</i> at your service. You can contact
					me on{" "}
					<a href="https://www.instagram.com/dany3lr3y/" target="_blank">
						Instagram
					</a>{" "}
					or{" "}
					<a href="https://www.facebook.com/daniel.rey.9440/" target="_blank">
						Facebook
					</a>
				</p>
				<p>
					This website is created just for fun and learn some advance features
					of Next.js and React best practices.
				</p>
			</section>
		</Layout>
	);
}
