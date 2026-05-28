import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from './components/Footer';
import BgAnimations from "./components/BgAnimations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shahnawaz Saddam Butt | Full Stack Developer",
  description:
    "Shahnawaz Saddam Butt is a passionate Full Stack Developer skilled in Python, JavaScript, and web technologies, currently learning C. Explore my portfolio, projects, and journey in web development.",
  keywords: [
    "Shahnawaz Saddam Butt",
    "Full Stack Developer",
    "Python Developer",
    "Learning C",
    "JavaScript",
    "Web Developer Portfolio",
    "Next.js Developer",
    "MERN Stack Developer",
  ],
  authors: [{ name: "Shahnawaz Saddam Butt" }],
  creator: "Shahnawaz Saddam Butt",
  openGraph: {
    title: "Shahnawaz Saddam Butt | Full Stack Developer",
    description:
      "Portfolio of Shahnawaz Saddam Butt, a Full Stack Developer with skills in Python, JavaScript, and currently learning C.",
    url: "https://yourdomain.com", // replace with your actual domain
    siteName: "Shahnawaz Saddam Butt",
    images: [
      {
        url: "/butt.png", // logo or profile image
        width: 800,
        height: 600,
        alt: "Shahnawaz Saddam Butt - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahnawaz Saddam Butt | Full Stack Developer",
    description:
      "Hi, I'm Shahnawaz Saddam Butt. A Full Stack Developer skilled in Python, JavaScript, and learning C.",
    images: ["/butt.png"],
    creator: "@your_twitter_handle", 
  },
  icons: {
    icon: "/butt.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <BgAnimations />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
