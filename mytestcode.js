const bruce = { name: "1ilsang" };
const madeline = { name: "Madeline" };

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
console.log(bruce);
const updateBruce = update.bind(bruce);
updateBruce("1994", "code");
console.log(bruce);
updateBruce.call(madeline, 2018, "sangchul");
console.log(bruce);

const updateMadel = update.bind(madeline);
updateMadel("2222", "222");
console.log(madeline);
console.log(updateMadel);