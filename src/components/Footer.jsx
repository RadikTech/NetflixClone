import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='flex flex-col py-6 bg-black/85 text-gray-300 px-[calc(10%)]'>
			<div className="flex w-full">Questions? Call <Link to="000-800-919-1694" className="mx-2 underline">000-800-919-1694</Link></div>

			<div className='mt-4 grid grid-cols-2 laptop:grid-cols-4 underline'>
				<div className="flex flex-col">
					<Link to="/">FAQ</Link>
					<Link to="/">Investor Relations</Link>
					<Link to="/">Privacy</Link>
					<Link to="/">Speed Test</Link>
				</div>

				<div className="flex flex-col">
					<Link to="/">Help Centre</Link>
					<Link to="/">Jobs</Link>
					<Link to="/">Cookie Preferences</Link>
					<Link to="/">Legal Notices</Link>
				</div>

				<div className="flex flex-col">
					<Link to="/">Account</Link>
					<Link to="/">Ways to Watch</Link>
					<Link to="/">Corporate Information</Link>
					<Link to="/">Only on Netflix</Link>
				</div>

				<div className="flex flex-col">
					<Link to="/">Media Centre</Link>
					<Link to="/">Terms of Use</Link>
					<Link to="/">Contact Us</Link>
				</div>
			</div>

			<div className="mt-5 font-bold w-full text-center text-3xl">
				Netflix India
			</div>

			<p className='text-balance text-center text-sm leading-loose text-muted-foreground mt-5'>
				<span>
					Built by{" "}
					<a
						href='https://www.linkedin.com/in/rajni-sakhreliya'
						target='_blank'
						className='font-medium underline underline-offset-4'
					>
						Rajni Sakhreliya
					</a>
					.
				</span>

				<span className="ml-2">
					Available on{" "}
					<a
						href='https://github.com/RajniSakhreliya'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>
					.
				</span>
			</p>
		</footer>
	);
};
export default Footer;
