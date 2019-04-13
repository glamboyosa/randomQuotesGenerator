var quotes; var quote;
document.getElementById('button').addEventListener('click',randomGenerate);
function randomGenerate(){
 quotes=['Love is a friendship set to music.','Make love, not war.','Don\'t let the man hold you down','Drop acid not bombs.','Go with the flow.','Follow your bliss and the universe will open doors where there were only walls.','And those who were seen dancing were through to be insane by those who could not hear the music.','Time you enjoy wasting, was is wasted time?','Love is a friendship set to music.'];
	var random= Math.floor(Math.random()*quotes.length);
	//remove comment if you want to see it log to the console
	//console.log(quotes[random]);
	//console.log(random);
	quote= quotes[random];
	displayQuotes();

}
//Display the Quotes
function displayQuotes(){
	var displayQuotes= document.getElementById('generatedQuotes');
	displayQuotes.innerHTML='';
	for(var i=0; i<quotes.length; i++){
	displayQuotes.innerHTML= '<h3>' + quote + '</h3>';
	}
}