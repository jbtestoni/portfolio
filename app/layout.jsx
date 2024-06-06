import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "../components/Header";
import StairTransition from "../components/StairTransition";
import PageTrasistion from "../components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata = {
    title: "Teoni | Software Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={jetbrainsMono.variable}>
                <Header />
                {children}
            </body>
        </html>
    );
}
