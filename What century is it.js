function whatCentury(year) {
    const century = Math.ceil(year / 100);
    return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}