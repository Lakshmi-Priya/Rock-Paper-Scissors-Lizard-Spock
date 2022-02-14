import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rpsls';
  results: Array<[number, number]> = [];
  resultMessage: Array<[number, string]> = [];
  moves: Array<[number,string]>=[];
  playerScore:number;
  computerScore:number;
  ngOnInit() {
    this.results = [
      [3, 2],
      [2, 1],
      [1, 4],
      [4, 5],
      [5, 3],
      [3, 4],
      [4, 2],
      [2, 5],
      [5, 1],
      [1, 3]
    ]
    this.playerScore=0;
    this.computerScore=0;
    /*
     ,, Spock vaporizes Rock, (and as it always has) Rock crushes Scissors."
     */
    this.resultMessage=[
      [0,"Scissors cut the Paper"],
      [1,"Paper covered the Rock"],
      [2,"Rock crushed Lizard"],
      [3,"Lizard poisoned Spock"],
      [4,"Spock smashed the Scissors"],
      [5,"Scissors decapitated Lizard,"],
      [6,"Lizard ate the Paper"],
      [7,"Paper disproved Spock"],
      [8,"Spock vaporized Rock"],
      [9,"Rock crushed scissors"],

    ]

    this.moves=[
      [0,"Rock"],
      [1,"Paper"],
      [2,"Scissors"],
      [3,"Lizard"],
      [4,"Spock"]
    ]

  }

  onIconClick(event: any) {
    console.log(event)
    let playerChoice = event.target.id
    let computerChoice = Math.floor(Math.random() * 5) + 1;
    this.results.forEach((result,i) => {
      console.log(result)
      if (result[0] == playerChoice && result[1] == computerChoice) {
        //alert("Hurray! You won! "+this.resultMessage[i][1])
        document.getElementById('resultMessage').innerHTML="<div><p>Your move:"+this.moves[playerChoice-1][1]+" Computer move: "+this.moves[computerChoice-1][1]+"</p><p>Hurray! You won! "+this.resultMessage[i][1]+"</p></div>"
        this.playerScore++;
      }
      else if (result[0] == computerChoice && result[1] == playerChoice) {
        //alert("Oopsey :( Computer won "+this.resultMessage[i][1])
        document.getElementById('resultMessage').innerHTML="<div><p>Your move:"+this.moves[playerChoice-1][1]+" Computer move: "+this.moves[computerChoice-1][1]+"</p><p>Oopsey :( Computer won!) "+this.resultMessage[i][1]+"</p></div>"
        this.computerScore++;
      }
      else if(playerChoice==computerChoice){
        document.getElementById('resultMessage').innerHTML="<div><p>Your move:"+this.moves[playerChoice-1][1]+" Computer move: "+this.moves[computerChoice-1][1]+"</p><p>Its a draw</p></div>"
      }
    })

  }

  onPlayAgain(){
    document.getElementById('resultMessage').innerHTML="Click any one icon above"
    this.playerScore=0;
    this.computerScore=0;

  }
}
