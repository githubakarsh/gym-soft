import { useEffect } from "react";


export const useHelmet = (
    title
) => {
    useEffect(() => {
         document.title = title;
    }, []);
};