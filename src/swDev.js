export default function swDev() {
    const swUrl = `${process.env.PUBLIC_URL}/worker.js`;
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.log("response is ok", response)
    }
    )
}