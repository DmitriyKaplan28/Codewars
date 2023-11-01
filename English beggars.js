function beggars(values, n) {

    let take = Array(n).fill(0);

    for (let i = 0; i < values.length; i++)
        take[i % n] += values[i];

    return take;

}