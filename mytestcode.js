const words = ["1ilsang", "blog", "me", "sangchul", "catholic", "cuk"];
const longWords = words.reduce((a, w) => w.length > 4 ?
    a + " " + w : a, "").trim();
console.log(longWords);