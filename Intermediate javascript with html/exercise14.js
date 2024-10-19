document.getElementById('startThrottleButton').addEventListener('click', function() {
    const delay = parseInt(document.getElementById('delay').value);
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            if (!inThrottle) {
                func();
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };
    const logMessage = () => {
        document.getElementById('result').textContent = "Throttled function executed!";
    };
    const throttledLogMessage = throttle(logMessage, delay);

    document.getElementById('startThrottleButton').addEventListener('click', throttledLogMessage);
});
