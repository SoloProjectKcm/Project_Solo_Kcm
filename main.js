var gb = { Gamers: [], Game: [] };
var Gamer= function(){
    return{
        firstName: "",
        lastName: "",
        e_mail: "",
        password: "",
        Sign_In: Sign_In
    }
}

var Sign_In = function(firstName,lastName,e_mail,password){
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
}

var msg = {

    m1: $("<p id ='M1'>You must enter a password</p>"),
    m2: $("<p id ='M2'>Your password must be longer than 6 characters</p>"),
};

var container = $("<div id ='container'></div>")
$("body").append(container);

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
$("#Submit").click(function (e) {
    e.preventDefault();
    if (!Gamer.passWord.length) {
        $("#container").append(msg.m1)
    }
    else if (Gamer.passWord.length < 6) {
        $("#container").append(msg.m2)
    }
    else {
        $("#M1").hide();
        $("#M2").hide();
        $("form").hide();
        $(".sign-up-form").hide();
        $("#container").append($(`<p id ='M3'> Welcome ${Gamer.firstName} </p>`))
        $(".Hidden").show();
    }
});


var userScore =0;
var computerScore= 0;
var userScore_span = $('#user-score');
var computerScore_span = $('#computer-score');
var scoreBoard_div = $('.score-board');
var result_div = $('.result');
var rock_div = $('#r');
var paper_div = $('#p');
var scissors_div = $('#s');
var Message_P = $("#p").html;
var Message_R = $("#r").html;
var Message_S = $("#s").html;
var Box = $('#Choices')

$(document).ready(function () {
 var Game = function (){

   var play = function(){
      return{
        game:game,
        getComputerChoice:getComputerChoice,
       }
}   

    var getComputerChoice = function(){
        const choices = ['r', 'p', 's'];
        const randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
    }

    var game = function(){
        return {
          win : win,
          lost: lost,
          draw: draw,
          dbox: dbox
        }
    }

const computerChoice = getComputerChoice();

    var win = function(userChoice,computerChoice){
       switch (userChoice + computerChoice) {
          case "rs":
          case "pr":
          case "sp":
          userScore++
          break;
          }      
        if(userScore === 10){
       this.dbox("You Wine!")
        }
       $('#user-score').html(userScore)
    }

    var lost = function(userChoice,computerChoice){
       switch(userChoice + computerChoice){
          case "rp":
          case "ps":
          case "sr":
          computerScore++
          console.log("USER LOSES!");
          console.log(computerScore, "computer");
          break;
        }
        if(computerScore === 10){
      this.dbox("You Lose!")
       }
    $('#computer-score').html(computerScore)
}

  var draw = function(userChoice,computerChoice){
      switch(userChoice + computerChoice){
        case "rr":
        case "pp":
        case "ss":
        console.log("BAD LUCK DRAWWWWWW!");
        break;
        }
    if(computerScore === 10 && userScore === 10){
            this.dbox("Bad luck, it's a DRAWWW!")
    }
    $('#computer-score').html(computerScore)
    $('#user-score').html(userScore)
}
    

  function dbox (msg) {
    if (msg != undefined) {
      Message_P,Message_R,Message_S = msg;
      Box.addClass("show");
    } else { Box.removeClass("show"); }
  }


var main = function(){
    rock_div.click(function(){
    game('r')
    }) 
    
    paper_div.click(function(){
    game('p')
    })
    
    scissors_div.click(function(){
    game('s')
    })
}
main();
 }

})