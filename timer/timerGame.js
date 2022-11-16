export default function timerGame(callback) {
    console.log('Ready....go!');
    const timer = setTimeout(() => {
        console.log("Time's up -- stop!");
        callback && callback();
    }, 1000);
    return timer;
}
