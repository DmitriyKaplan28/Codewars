function humanReadable(seconds) {
    return [
        ('0' + Math.floor(seconds / 3600)).slice(-2),
        ('0' + Math.floor((seconds % 3600) / 60)).slice(-2),
        ('0' + (seconds % 60)).slice(-2),
    ].join(':');
}

console.log(humanReadable(100))