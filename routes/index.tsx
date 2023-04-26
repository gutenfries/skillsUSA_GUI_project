// routes/subscribe.tsx
import { Handlers, PageProps } from '$fresh/server.ts';

import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import ScoreCard from '../islands/scorecard.tsx';

export const handler: Handlers = {
	async GET(req, ctx) {
		return await ctx.render();
	},
	async POST(req, ctx) {
		const form = await req.formData();
		const email = form.get('email')?.toString();

		// Add email to list.

		// Redirect user to thank you page.
		const headers = new Headers();
		headers.set('location', '/thanks-for-subscribing');
		return new Response(null, {
			status: 303, // See Other
			headers,
		});
	},
};

function IndexPage(PageProps: PageProps) {
	return (
		<>
			<Head PageProps={PageProps} />

			{/* set all page font to Fira Sans */}
			<style>
				{'*,body,html{font-family:Fira-Sans, "Fira Sans", Arial, Helvetica, sans-serif; !important}'}
			</style>

			<NoScript />
			<main
				id='main-content'
				className='p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 text-center flex flex-col justify-center h-screen overflow-x-hidden'
			>
				<button
					onClick={() => {
					}}
					className='w-auto bg-gray-300 dark:bg-gray-700 rounded-md m-2 h-8 p-1'
				>
					add scorecard
				</button>
				<ScoreCard />
			</main>
		</>
	);
}

export default IndexPage;
