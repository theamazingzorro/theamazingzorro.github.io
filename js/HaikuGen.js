var adj1 = ["clean","drab","long","plain","quaint","red","blue","green","gray","black","white","dead","odd","rich","shy","vast","wrong","right","fierce","brave","calm","kind","nice","broad","deep","flat","high","low","steep","wide","big","fat","huge","large","short","small","tall","faint","loud","brief","fast","slow","late","long","old","short","swift","young","fresh","hot","loose","sweet","tart","weak","wet","full","light","phat"];
function randAdj1() {
	return adj1[Math.floor(Math.random()*adj1.length)];
}

var adj2 = ["abrupt","costly","stormy","frigid","misty","steady","solid","savage","earthy","murky","silent","fragile","mossy","perfect"];
function randAdj2() {
	return adj2[Math.floor(Math.random()*adj2.length)];
}

var adj3 = ["animal","aspiring","thundering","marvellous","watery","protective","challenging","difficult","beautiful","respectful","annoying","ambitious"];
function randAdj3() {
	return adj3[Math.floor(Math.random()*adj3.length)];
}


var noun1 = ["life","love","world","tree","rock","stream","sun","moon","heart","man","ice","cloud","pear"];
function randNoun1() {
	return noun1[Math.floor(Math.random()*noun1.length)];
}

var noun2 = ["human","river","ocean","nature","midnight","planet","pleasure","diamond","pizza","water","music","heaven","angel","monster","money","morning","mountain","monkey","treasure"];
function randNoun2() {
	return noun2[Math.floor(Math.random()*noun2.length)];
}

var noun3 = ["animal","family","potato","history","energy","memory","pollution","mystery","ebola","computer","gravity","slavery","loneliness"];
function randNoun3() {
	return noun3[Math.floor(Math.random()*noun3.length)];
}

var noun4 = ["discovery","literature","alligator","technology","community","education","infinity","adversity","serenity","military","sanctuary","revelation","democracy","anaconda"];
function randNoun4() {
	return noun4[Math.floor(Math.random()*noun4.length)];
}

var noun5 = ["abomination","serendipity","imagination","curiosity","illuminati","globalization","velociraptor","infatuation","defenestration"];
function randNoun5() {
	return noun5[Math.floor(Math.random()*noun5.length)];
}


var verb1 = ["eats","thaws","melts","flows","runs","bumps","learns","hooks","crawls"];
function randVerb1() {
	return verb1[Math.floor(Math.random()*verb1.length)];
}

var verb2 = ["travels","hardens","offers","freezes","collects","prevents","survives","believes","insults","invites","rejects"];
function randVerb2() {
	return verb2[Math.floor(Math.random()*verb2.length)];
}

//generates a haiku then writes it to #haiku on the webpage
function writeHaiku() {
	var haiku = gen5Syl()+"</br>"+gen7Syl()+"</br>"+gen5Syl();
	document.getElementById("haiku").innerHTML = haiku;
	document.getElementById("button").innerHTML = "Click to generate a new Haiku";
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function possibilities() {
	var syl5 = 0; // computes number of 5 syllable lines
	syl5 += adj2.length*noun3.length;
	syl5 += adj3.length*noun2.length;
	syl5 += adj1.length*noun4.length;
	syl5 += adj2.length*noun2.length*verb1.length;
	syl5 += adj1.length*noun2.length*verb2.length;
	syl5 += adj2.length*noun1.length*verb2.length;
	syl5 += noun5.length;
	
	var syl7 = 0; // computes number of 7 syllable lines
	syl7 += adj3.length*noun3.length*verb1.length;
	syl7 += adj2.length*noun3.length*verb2.length;
	syl7 += adj3.length*noun2.length*verb2.length;
	syl7 += adj1.length*noun4.length*verb2.length;
	syl7 += adj2.length*noun4.length*verb1.length;
	syl7 += adj3.length*noun4.length;
	
	var pos = syl5 * syl7 * syl5; //computes total number of haikus
	
	document.getElementById("combo").innerHTML = numberWithCommas(pos)+" possible combinations";
}

//picks a random line skeleton from the 7 defined
//and fills it with random appropriate words
function gen5Syl() {
	var rand = Math.floor(Math.random()*7);
	var line;
	if(rand==0)
		line = randAdj2()+" "+randNoun3();
	if(rand==1)
		line = randAdj3()+" "+randNoun2();
	if(rand==2)
		line = randAdj2()+" "+randNoun2()+" "+randVerb1();
	if(rand==3)
		line = randAdj1()+" "+randNoun2()+" "+randVerb2();
	if(rand==4)
		line = randAdj2()+" "+randNoun1()+" "+randVerb2();
	if(rand==5)
		line = randAdj1()+" "+randNoun4();
	if(rand==6)
		line = randNoun5();
	return line;
}

//picks a random line skeleton from the 6 defined
//and fills it with random appropriate words
function gen7Syl() {
	var rand = Math.floor(Math.random()*6);
	var line = "";
	if(rand==0)
		line = randAdj3()+" "+randNoun3()+" "+randVerb1();
	if(rand==1)
		line = randAdj3()+" "+randNoun4();
	if(rand==2)
		line = randAdj2()+" "+randNoun3()+" "+randVerb2();
	if(rand==3)
		line = randAdj3()+" "+randNoun2()+" "+randVerb2();
	if(rand==4)
		line = randAdj1()+" "+randNoun4()+" "+randVerb2();
	if(rand==5)
		line = randAdj2()+" "+randNoun4()+" "+randVerb1();
	return line;
}