// Golf Code

var names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];

function golfScore(par,strokes){
    if(strokes == 1){
        return names[0]
    }else if(strokes <= par - 2){
        return names[1]
    }else if(strokes <= par - 1){
        return names[2]
    }else if(strokes <= par){
        return names[3]
    }else if (strokes <= par + 1){
        return names[4]
    }else if (strokes <= par + 2){
        return names[5]
    }else if (strokes <= par + 3){
        return names[6];
    }
}

golfScore(5,4);


// Counting Cards
// when you see low card the count goes up
//when you see a high card the count goes down
// if it's a middle value card, the count stays the same.
 var count = 0;

 function cc(card){
     switch(card){
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
             count++
             break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
             count--;
             break;
        
     }
     var holdbet = "Hold"
     if(count > 0){
         holdbet = "Bet";
     }

    return count + " " + holdbet;
     }

 cc(2); cc(3); cc(4); cc("K"); cc('A'); 
 console.log(cc(4));