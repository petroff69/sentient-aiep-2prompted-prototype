import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { WandIcon } from "@/app/icons";

export const metadata: Metadata = {
	title: "Sentient Two Prompted AI Prototype",
	description: "AI prompting built for more precise <answer>",
	metadataBase: new URL("https://sentient-two-prompted-prototype.vercel.app/"),
	twitter: {
		card: "summary_large_image",
	},
};

export const viewport: Viewport = {
	maximumScale: 1, // Disable auto-zoom on mobile Safari
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-gray-50 dark:bg-gray-950 text-black dark:text-white flex flex-col items-center px-3 py-10 min-h-dvh`}
			>
				<Toaster richColors theme="system" />

				<h1 className="font-semibold text-xl flex items-center justify-center">
					<WandIcon />

					<span className="bg-gradient-to-b dark:from-gray-50 dark:to-gray-200 from-gray-950 to-gray-800 bg-clip-text text-transparent ml-3">
						Sentient AI
					</span>
				</h1>

				<p className="mt-3 text-center font-mono">
					AI prompting built for more precise{" "}
					<strong className="bg-red-200 text-black dark:bg-yellow-300 rounded">
						&lt;answer&gt;
					</strong>
				</p>

				{children}

				<footer className="text-center text-sm dark:text-gray-400 text-gray-600 font-mono">
					<p>
						<A href="https://github.com/petroff69/Sentient-AI-Experimental-Prototype">sentient-aiep</A> /{" "}
						<A href="https://zlatimir-petroff-portfolio.vercel.app/">Zlatimir Petrov</A>
					</p>
					<p>
						Built with{" "}
						<A href="https://sdk.vercel.ai">Vercel AI SDK</A> &{" "}
						<A href="https://groq.com">Groq</A>
					</p>
					<p>
						<A href="https://github.com/petroff69/sentient-aiep-2prompted-prototype">
							source
						</A>{" "}
						/{" "}
					</p>
				</footer>

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}

function A(props: any) {
	return (
		<a {...props} className="text-black dark:text-white hover:underline" />
	);
}
