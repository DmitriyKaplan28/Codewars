const findChildren = dancingBrigade =>
    dancingBrigade
        .split('')
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a))
        .join('')