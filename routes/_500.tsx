import { ErrorPageProps } from '$fresh/server.ts';
import { Head } from '@/components/Head.tsx';
import { NoScript } from '@/components/NoScript.tsx';
import { asset } from '$fresh/runtime.ts';

function ErrorPage(PageProps: ErrorPageProps) {
	return (
		<>
			<Head PageProps={PageProps} />

			<NoScript />

			<main
				id='main-content'
				className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 text-center flex flex-col justify-center h-screen overflow-x-hidden'
			>
				<span>
					<h2>HTTP Error 500</h2>
				</span>
				<br />
				<span>
					<h3>Internal Server Error</h3>
				</span>

				{PageProps.error instanceof Error
					? (
						<>
							<br />
							<span>
								<hr />
							</span>
							<br />
						</>
					)
					: null}
				<p className='text-center text-gray-300'>
					{PageProps.error instanceof Error ? (PageProps.error as Error).message : null}
				</p>
			</main>
		</>
	);
}

export default ErrorPage;
