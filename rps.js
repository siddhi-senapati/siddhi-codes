/*Type your code here .. */
Bot.send("hi, lets play rock paper scissor!")
async function respond(inputText) {
	var mychoice = inputText;
	var options = ["rock", "paper", "scissor"]
	var rannum = parseInt(Math.random() * 3)
	var compchice = options[rannum]
	Bot.send(compchice)
	if (mychoice == compchice) {
		Bot.send("it's a draw!");
	}
	else if (mychoice == "paper" && compchice == "scissor") {
		Bot.send("yay! i win! you lose!")
	}
	else if (mychoice == "paper" && compchice == "rock") {
		Bot.send("nooooo! i lose! you win!")
	}
	else if (mychoice == "rock" && compchice == "scissor") {
		Bot.send("nooooo! i lose! you win!")

	}
	else if (mychoice == "rock" && compchice == "paper") {
		Bot.send("yay! i win! you lose!")

	}
	else if (mychoice == "scissor" && compchice == "paper") {
		Bot.send("nooooo! i lose! you win!")

	}
	else if (mychoice == "scissor" && compchice == "rock") {
		Bot.send("yay! i win! you lose!")

	}
	else {
		Bot.send("please choose any of:" + options)
	}
	Bot.sleep(3)
	Bot.send("lets play again.")
}
