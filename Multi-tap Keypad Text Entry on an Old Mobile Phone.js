const presses = phrase =>
    [...phrase.toLowerCase()].reduce((pre, val) => pre + [`1adgjmptw* #`, `0behknqux`, `cfilorvy`, `234568sz`, `79`].findIndex(v => v.includes(val)) + 1, 0);