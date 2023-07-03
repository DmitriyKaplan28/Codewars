function formatDuration(seconds) {
    if (seconds === 0) return "now"
    const addPlural = (number, noun) =>
        number === 0 ? "" : `${number} ${noun}${number === 1 ? "" : "s"}`
    const SECOND = 1
    const MINUTE = SECOND * 60
    const HOUR = MINUTE * 60
    const DAY = HOUR * 24
    const YEAR = DAY * 365
    const years = Math.floor(seconds / YEAR)
    seconds %= YEAR
    const days = Math.floor(seconds / DAY)
    seconds %= DAY
    const hours = Math.floor(seconds / HOUR)
    seconds %= HOUR
    const minutes = Math.floor(seconds / MINUTE)
    seconds %= MINUTE
    return [
        [years, "year"],
        [days, "day"],
        [hours, "hour"],
        [minutes, "minute"],
        [seconds, "second"],
    ]
        .map(([number, noun]) => addPlural(number, noun))
        .filter(Boolean)
        .join(", ")
        .replace(/,\s([^,]+)$/, " and $1")
}