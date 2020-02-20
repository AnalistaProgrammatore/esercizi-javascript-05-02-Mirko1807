
let q = require('readline')
let y = q.createInterface({
    input: process.stdin,
    output: process.stdout

})

y.question('di quale numero vuoi il fattoriale? ', (fatt) => {
    let fattoriale = x => {
        let r = x
        while (x > 1) {
            r = r * (x - 1)
            x = x - 1
        }
        return r

    }
    let rt = fattoriale(fatt)
    console.log(rt)
    y.close()

})
