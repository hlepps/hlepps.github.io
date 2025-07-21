import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Piotr Pomagalski - Software Developer',
	description:
		'I am a young programmer seeking new challenges and opportunities for growth. My main area of expertise is C# (Blazor, ASP.NET, WPF, WinForms, Unity), but I have also completed projects using C++, Python, PHP, and JavaScript. I have just finished my engineering degree and plan to begin my master\'s studies. I\’m looking for a job that allows me to develop professionally while continuing my education, so I can expand both my academic and practical knowledge.  ',
	keywords: [
		'Software Developer',
		'Clean Code',
		'Minimal Design',
		'Modern Development',
		'Application Development',
		'Web Development',
		'User Experience',
		'.NET',
		'C#',
		'C++',
		'Blazor',
		'WinForms',
		'WPF',
		'Performance',
		'Accessibility',
		'Piotr Pomagalski',
	],
	authors: [{ name: 'Piotr Pomagalski' }],
	creator: 'Piotr Pomagalski',
	openGraph: {
		title: 'Piotr Pomagalski - Software Developer Portfolio',
		description: 'I am a young programmer seeking new challenges and opportunities for growth. My main area of expertise is C# (Blazor, ASP.NET, WPF, WinForms, Unity), but I have also completed projects using C++, Python, PHP, and JavaScript. I have just finished my engineering degree and plan to begin my master\'s studies. I\’m looking for a job that allows me to develop professionally while continuing my education, so I can expand both my academic and practical knowledge.  ',
		url: 'https://hlepps.github.io',
		siteName: 'Piotr Pomagalski - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Piotr Pomagalski - Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Piotr Pomagalski - Software Developer',
		description: 'I am a young programmer seeking new challenges and opportunities for growth. My main area of expertise is C# (Blazor, ASP.NET, WPF, WinForms, Unity), but I have also completed projects using C++, Python, PHP, and JavaScript. I have just finished my engineering degree and plan to begin my master\'s studies. I\’m looking for a job that allows me to develop professionally while continuing my education, so I can expand both my academic and practical knowledge.  ',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
