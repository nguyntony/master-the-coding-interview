// https://coderbyte.com/editor/Longest%20Word:JavaScript

const splits = string.split(" ")
let longest = splits[0]
for (i of splits) {
    if (i.replace(/[^\w\s]|_/g, "").length > longest.replace(/[^\w\s]|_/g, "").length) {
        longest = i
    }
}
return longest