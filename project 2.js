/*Type your code here .. */
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
	var count = 1
	var sums = 0
	while (shiny(count) <= 36) {
		if (shiny(count) % 2 == 0) {
			sums = sums + shiny(count)
			Bot.send("count=" + count + "value=" + shiny(count));

		}
		count = count + 1

	}
	Bot.send(sums)
}
