// function splitBySlash(str) {
//   let arr = [];
//   if (str === "") return "";

//   if (str > 4) {
//     if (str[0] === "/") {
//       str = str.substring(1);
//     } else {
//       arr.push(str.substring(0, 2));
//       str = str.substring(2);
//     }
//   } else {
//     arr.push(str.substring(0, 4));
//     str = str.substring(4);
//   }
// }

function splitBySlash(str) {
  let arr = [];
  if (str === "") return "";

  if (str[0] === "/") {
    str = str.substring(1);
  }
}
