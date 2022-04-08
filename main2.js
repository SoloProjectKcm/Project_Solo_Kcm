
var gb = { Gamers: [], Game: [] };
var Gamer= function(){
    return{
        firstName: "",
        lastName: "",
        e_mail: "",
        password: "",
        sign_In: sign_In,
        // log_In : log_In
    }
}

var sign_In = function(firstName,lastName,e_mail,password){

    for(var i=0; i<gb.Gamers.length; i++){
        if(e_mail === gb.Gamers[i].e_mail){
         return 
             "E-mail already used"
         }
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.e_mail = e_mail;
    this.passWord = password
    gb.Gamers.push(this)
}

// var log_In = function (e_mail,passWord){
//     this.e_mail = e_mail;
//     this.passWord = passWord
// }

var Gamer1= Gamer()
Gamer1.sign_In("Sarah","Kacem","Kacem_sarah@live.fr","223542643203")
gb.Gamers.push(Gamer1);



var container_Message = $(".message p")
var welcome_M = $(".M")


function saveFN(e) {
    Gamer.firstName = e.target.value
};

function saveLN(e) {
    Gamer.lastName = e.target.value
};

function saveE(e) {
    Gamer.e_mail = e.target.value
};

function saveP(e) {
    Gamer.passWord = e.target.value
};

$("#LN").on("change", saveLN);
$("#FN").on("change", saveFN);
$("#EM").on("change", saveE);
$("#PW").on("change", saveP);
// $('#E_M').on("change", saveE);
// $('#P_W').on("change",saveP);

$("#Submit").click(function (e) {
    e.preventDefault();
    if (!Gamer.passWord.length) {
        container_Message.html("You must enter a password")
    }
    else if (Gamer.passWord.length < 6) {
        container_Message.html("Your password must be longer than 6 characters")
    }
    else {
        welcome_M.html("Welcome " + Gamer.firstName)
        welcome_M.fadeOut("slow");
        $("form").hide();
        $(".sign-up-form").hide();
        $(".Hidden").show();

    }
});

// $(".log_in").hide();
// function show(){
//     $("#signUp").hide()
//     $(".log_in").show();   
// }

// $('#LoGIn').click(function(e){
//     e.preventDefault();
//     for(var i=0; i<gb.Gamers.length;i++){
//         if(gb.Gamers[i].e_mail === Gamer.e_mail && gb.Gamers[i].passWord === Gamer.password){
//         $("form").hide();
//         $(".log_in").hide();
//         container_Message.html("Welcome " + Gamer.firstName)
//         $(".Hidden").show();
//         }
//     }
// })



var userScore =0;
var computerScore= 0;
var userScore_span = $('#user-score');
var computerScore_span = $('#computer-score');
var scoreBoard_div = $('.score-board');
var result_p = $('.result p');
var rock_div = $('#rock');
var paper_div = $('#paper');
var scissors_div = $('#scissors');



$(document).ready(function () {

 var Game = function (){

   var play = function(){
      return{
        game:game,
        getComputerChoice:getComputerChoice,
       }
}   

    var getComputerChoice = function(){
        const choices = ['rock', 'paper', 'scissors'];
        const randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
    }

    var game = function(userChoice,computerChoice){
        var computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                console.log('You Win!!')
             win(userChoice,computerChoice);
            break;
            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                console.log("You Lost!")
              lost(userChoice,computerChoice)
            break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
              console.log("BAD LUCK DRAWWWWWW!");
              draw(userChoice,computerChoice)
            break;
            }    
    }

    $(".btn-reset").click(function (e) {
        e.preventDefault();
        if (userScore>=10) 
        {   result_p.html(Gamer.firstName + ", let's try to win again.")
            userScore=0
            computerScore=0
            $('#try').show();  
        }
        else if(computerScore>=10)
        {   result_p.html(Gamer.firstName + ' you can try again to win.')
            userScore=0
            computerScore=0
            $('#over').show();  
        }
        else {
            $('#over').hide();  
            $('#try').hide();
            $(".btn-reset").hide();
            $('#Choices').show();
            $('#action-msg').show();
            $('.seeMore').show()
            result_p.html(`Welcome back ${Gamer.firstName}` )
        }
    });

    var win = function(userChoice,computerChoice){
    userScore++
    document.getElementById(userChoice).classList.add('green_Glow')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green_Glow')},1000)
    if(userScore === 10){
        $(".btn-reset").show()
        $('#Choices').hide()
        $('#action-msg').hide()
        $('#try').hide()
    }
    const smallerN = Gamer.firstName.fontsize(3).sup()
    const smallerC = "comp".fontsize(3).sup()
    result_p.html(`${userChoice}${smallerN} beats ${computerChoice}${smallerC}. You Win!`  )

    $('#user-score').html(userScore)
    $('#computer-score').html(computerScore)
    }


    var lost = function(userChoice,computerChoice){
    computerScore++
    document.getElementById(userChoice).classList.add('red_Glow')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red_Glow')},1000)
    if(computerScore === 10){
        $(".btn-reset").show()
        $('#Choices').hide()
        $('#action-msg').hide()
        $('#over').hide()
        }
        const smallerN = Gamer.firstName.fontsize(3).sup()
        const smallerC = "comp".fontsize(3).sup()
    result_p.html(`${userChoice}${smallerN} loses to ${computerChoice}${smallerC}. You Lost!...`)
    $('#user-score').html(userScore)
    $('#computer-score').html(computerScore)
    }
    

  var draw = function(userChoice,computerChoice){
    document.getElementById(userChoice).classList.add('orange_Glow')
    setTimeout(function(){document.getElementById(userChoice).classList.remove('orange_Glow')},1000)
    $('#computer-score').html(computerScore)
    $('#user-score').html(userScore)
    const smallerN = Gamer.firstName.fontsize(3).sup()
    const smallerC = "comp".fontsize(3).sup()
    result_p.html(`${userChoice}${smallerN} equals ${computerChoice}${smallerC}. It's a Drawww!`)
}
    
var main = function(){
    rock_div.click(function(){
    game('rock')
    }) 
    
    paper_div.click(function(){
    game('paper')
    })
    
    scissors_div.click(function(){
    game('scissors')
    })
}
main();
 }
Game();
})
