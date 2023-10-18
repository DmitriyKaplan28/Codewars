function numberOfPairs(gloves) {

    const pairs = 0
        , counts = {};

    for (const color of gloves) {

        if (!counts.hasOwnProperty(color))
            counts[color] = 0;

        if (++counts[color] === 2) {
            counts[color] -= 2;
            pairs++;
        }
    }

    return pairs;
}