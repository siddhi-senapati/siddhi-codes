/*Type your code here .. */
Bot.send("hi there , i am lexy. type : i am bored and i will give you some activities to do. Warning: your sentence should contain the word bored.");
async function respond(inputText){
	var url="https://www.boredapi.com/api/activity/"
	if (inputText.includes("bored"))
	{
		Bot.send("let me think")
		var know=await CampK12.fetch("GET", url)
		console.log(know)
		Bot.send(know.activity)
	}
 }
