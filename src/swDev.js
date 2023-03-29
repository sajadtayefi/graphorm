import { useEffect } from "react";


export default function SwDev() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            const swUrl = `${process.env.PUBLIC_URL}/worker.js`;
            navigator.serviceWorker
                .register(swUrl)
                .then((registered) => {
                    console.log("response is ok registered", registered)
                })
                .catch(error => {
                    console.log("error happend mf fix it plz", error)
                })
        }
    })
}