Bot.send("i am the weather bot.U can tell me any city and i will say its weather condition.")


async function respond(inputText) {

	var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputText + '&appid=37d99f4c8bd8fa96d4509c54c8a262d7&units=metric'

	var data = await CampK12.fetch("GET", url)

	Bot.send("longitude: " + data.coord.lon);
	Bot.send("latitude: " + data.coord.lat);
	Bot.send("temperature: " + data.main.temp+ " degree celcius.");
	Bot.send("wind speed: " + data.wind.speed+" km per hour");

}
