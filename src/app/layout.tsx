import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChildrenProps } from "@/interfaces";
import { nunito } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
    title: "Kokunime",
    description: "Generated by create next app",
};

const RootLayout = ({ children }: ChildrenProps): JSX.Element => (
    <html lang="en" className={`${nunito.className} scroll-smooth`}>
        <body
            suppressHydrationWarning
            className="!overflow-x-hidden bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900"
        >
            <Navbar />
            <main>{children}</main>
            <Footer />
        </body>
    </html>
);

export default RootLayout;
