async function m(s) {
    return Promise.resolve(3);
}

async function n(s) {
    return 3;
}

console.group(n(),m());