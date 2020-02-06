/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/
let size = 8;
let black = "#"; //riga che comincia con il nero
let white = " "; //riga che comincia con il bianco
let check = 1; //variabile di controllo sull'inizializzazione
for (let i = 0; i < size - 1; i++) {    //crea le prime 2 righe in base alla dimensione di size
  if (black[i] === "#" && white[i] === " ") {
    black += " "
    white += "#"
  }
  else if (black[i] === " " && white[i] === "#") {
    black += "#"
    white += " "
  } else { check = 0 }
}


if (check) //controllo sull'inizializzazione
{
  if (size % 2 === 0) //stampa la scacchiera combinando riga bianca e riga nera
  {
    for (let j = 0; j < (size / 2); j++)
      console.log(black + "\n" + white)
  } else {
    for (let j = 0; j < (size / 2) - 1; j++) //per size disparo stampo una coppia in meno e ne aggiungo una sola
      console.log(black + "\n" + white)
    console.log(black)
  }
} else console.log("errore di inzializzazione")
