function maxBall(v0) {
    const g = 9.81, mpsToKph = 3.6, secondsToTenths = 10;
    return Math.round(secondsToTenths * v0 / mpsToKph / g);
}