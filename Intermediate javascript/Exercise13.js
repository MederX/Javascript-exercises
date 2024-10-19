function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
clone.b.c = 3;
console.log(original.b.c);
console.log(clone.b.c);     