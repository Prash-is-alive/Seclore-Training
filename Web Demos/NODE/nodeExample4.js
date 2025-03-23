import fs from "fs";
const data = fs.readFileSync("./sample.txt", "utf-8", (error, data) => {
  if (error) throw error;
  else console.log(data);
});
console.log(data);
console.log("hehehe");
