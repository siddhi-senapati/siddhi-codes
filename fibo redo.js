/*Type your code here .. */
function fibo(s) {
	if (s == 1) {
		return 1
	}
	else {
		if (s == 2) {
			return 2
		}
		else {
			return fibo(s - 1) + fibo(s - 2)
		}
	}
}
async function respond(inputText) {
	var c=1
	var sum=0
	while(fibo(c)<= 10){
		if (fibo(c)%2==0){
			sum=sum+fibo(c)
			Bot.send("count is"+ c+ fibo(c));
		}
		c=c+1
	}
	Bot.send(sum);
}
