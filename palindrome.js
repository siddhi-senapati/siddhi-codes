/*Type your code here .. */
Bot.send("hi!, you say me any number and i will say if that is a palindrome number.");
async function respond(inputText){
	var num= Number(inputText);
	var num_flip=0;
	var num_copy=num
	while(num > 0){
		var  remainder= num%10;
		num_flip=num_flip*10 + remainder;
		num=num/10;
		num=parseInt (num);

	}
	if (num_flip == num_copy) {
		Bot.send ("it is a palindrome");
	} 
	else{
		Bot.send ("it is not a palindrome.");
	}
 }
