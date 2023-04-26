import { ErrorPageProps, PageProps, UnknownPageProps } from '$fresh/server.ts';
import { Head as FreshHead, asset } from '$fresh/runtime.ts';

interface HeadProps {
	PageProps: PageProps | UnknownPageProps | ErrorPageProps;
}

function Head({ PageProps }: HeadProps) {
	return (
		<FreshHead>
			{/* load fonts first to prevent font-jiggle */}
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
			<link
				href='https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700'
				rel='stylesheet'
				type='text/css'
			/>

			{/* <!-- Primary Meta Tags --> */}
			<title>
				{PageProps.url.pathname.slice(1)}
			</title>
			<meta
				name='title'
				content={PageProps.url.pathname.slice(1)}
			/>
			<meta
				name='description'
				content='/* TODO */'
			/>

			{/* Window theme color */}
			{/* Chrome, Firefox OS and Opera */}
			<meta name='theme-color' content='#27272a' />
			{/* Windows Phone */}
			<meta name='msapplication-navbutton-color' content='#27272a' />
			<meta name='msapplication-TileColor' content='#27272a' />
			{/* iOS Safari */}
			<meta name='apple-mobile-web-app-capable' content='yes' />
			<meta name='apple-mobile-web-app-status-bar-style' content='#27272a' />

			{/* global styles */}
			<link rel='stylesheet' href={asset('/styles/global.css')} />

			{/* favicon */}
			<link rel='icon' href={asset('/images/code.svg')} />

			{/* console easter egg */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
							console.log('look at you poking around in the web inspector :)');
						`,
				}}
			/>
		</FreshHead>
	);
}

export { Head };
