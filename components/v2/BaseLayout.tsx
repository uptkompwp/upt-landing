import Header from "@/components/v2/Header";
import useLoading from "@/hooks/useLoading";
import { ReactNode } from "react";
import FadeContent from "../FadeContent";
import Copyright from "./Copyright";
import Loading from "./Loading";

interface IBaseLayout {
    children: ReactNode;
    className?: string;
}

const BaseLayout: React.FC<IBaseLayout> = ({ children, className }) => {
    const loading = useLoading();

    return (
        <div className={`relative min-h-screen ${className || ""}`}>
            <Header />

            <main className="flex-1 flex items-center justify-center">
                {loading ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <Loading />
                    </div>
                ) : (
                    <div className="w-full h-full">
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                            {children}
                        </FadeContent>
                    </div>
                )}
            </main>
            <Copyright />
        </div>
    );
};

export default BaseLayout;
