/*Type your code here .. */
Bot.send("Hi. Today i am gonna say a Sequence of Fibonacci numbers.")
function fibo(s) {
	if (s <= 2) {
		return 1
	}
	else {
		return fibo(s - 1) + fibo(s - 2)
	}
}









async function respond(inputText) {
	var fib = Number(inputText);
	
	for (var k=1;k<fib;k=k+1 )
	{
         Bot.send(fibo(k)) 
	}


}
