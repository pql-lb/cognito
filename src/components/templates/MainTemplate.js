import { Link } from "react-router-dom";
import { Header } from "../organisms/Header";

export const MainTemplate = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <footer>
                <p>&copy; 2024 My Supermarket</p>
            </footer>
        </div>
    );
};
