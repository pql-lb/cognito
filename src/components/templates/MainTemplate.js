import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

export const MainTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
};
