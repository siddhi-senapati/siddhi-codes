function shiny(t) {
	if (t == 1) {
		return 1
	}
	else {
		if (t == 2) {
			return 2
		}
		else {
			return shiny(t - 1) + shiny(t - 2)
		}
	}
}






async function respond(inputText) {
	Bot.send(shiny(inputText));
}
