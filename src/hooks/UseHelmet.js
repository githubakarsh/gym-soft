import { useEffect } from "react";


export const useHelmet = (
    title
) => {
    useEffect(() => {
        return document.title = title;
    }, []);
};