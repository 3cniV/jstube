const names = ["whatsapp", "facebook", "instagram", "youtube", "netflix"];

// for (const n of names){
//     console.log(n);
// }

const symbols = {
    fb: "facebook",
    ig: "instagram",
    yt: "yotube",
};

for (const n in symbols){
    console.log(`key is: ${n} and value is: ${symbols[n]}`);
}
