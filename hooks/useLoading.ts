import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import nProgress from "nprogress";

const useLoading = (handleChange?: () => void): boolean => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    nProgress.configure({ showSpinner: false })

    useEffect(() => {
        const handleStart = (url: any) => {
            if (handleChange != undefined) {
                handleChange()
            }
            nProgress.start()
            setLoading(true)
        };
        const handleComplete = (url: any) => {
            nProgress.done()
            setTimeout(() => {
                setLoading(false)
            }, 500);
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);

    return loading
}


export default useLoading