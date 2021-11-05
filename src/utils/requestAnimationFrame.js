// requestAnimationFrame 动画兼容
(function(global) {
    if (global.requestAnimationFrame) return;
    if (global.webkitRequestAnimationFrame ) { // Chrome <= 23, Safari <= 6.1, Blackberry 10
        global.requestAnimationFrame = global['webkitRequestAnimationFrame'];
        global.cancelAnimationFrame = global['webkitCancelAnimationFrame'] || global['webkitCancelRequestAnimationFrame'];
        return;
    }
    if (global.mozRequestAnimationFrame ) {
        global.requestAnimationFrame = global['mozRequestAnimationFrame'];
        global.cancelAnimationFrame = global['mozCancelAnimationFrame'] || global['mozCancelRequestAnimationFrame'];
        return;
    }

    let lastTime = 0;
    global.requestAnimationFrame = (callback) => {
        const now = new Date().getTime();
        const nextTime = Math.max(lastTime + 16, now);
        return setTimeout(() => {
            callback(lastTime = nextTime);
        }, nextTime - now);
    };
    global.cancelAnimationFrame = clearTimeout;

}(window));
