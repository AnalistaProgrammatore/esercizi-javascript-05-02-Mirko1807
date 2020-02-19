let x = require('readline')
let y = x.createInterface({
    input: process.stdin,
    output: process.stdout
})


y.question('quanto deve essere alto (solo valori dispari)? ', (lenght) => {
    let base = "#";
    let space = ""
    let spacel = lenght / 2 - 1



    for (let i = 0; i < lenght / 2 - 1; i++) {
        for (let j = 0; j < spacel; j++) {
            space += " ";
        }
        spacel--;
        console.log(space + base);
        base += "##"
        space = "";
    }
    console.log(space + base);
    space += " "
    for (let i = 0; i < lenght / 2 - 1; i++) {
        base = base.substr(0, base.length - 2)
        console.log(space + base);
        space += " ";
        y.close()
    }

})


