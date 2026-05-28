import { Geist, Geist_Mono, Poppins, Inter, JetBrains_Mono, Manrope, Sora, Urbanist } from "next/font/google";
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

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  weight: ["400", "600", "700", "800"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} ${manrope.variable} ${sora.variable} ${urbanist.variable} antialiased`}
      >
      <BgAnimations />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
