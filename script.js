const character = "#";

const count = 8;

const rows = [];

function padRow(name) {
  return name;
}
const call = padRow("CamperChan");

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = "";
console.log(result);

for (const row of rows) {
  result = result + row;
  result = result + "\n" + row;
}
