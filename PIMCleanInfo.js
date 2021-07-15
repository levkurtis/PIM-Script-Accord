//Create/style button
let paraScript = document.createElement("p");
btnNode = document.createTextNode("\nClean product");
paraScript.appendChild(btnNode);
paraScript.style.color = "red"
paraScript.style.font = "20px"
paraScript.style.margin = "20px";


//Initialize button - script
paraScript.onclick = function(){

// Country value
let countryValue = document.querySelector("#detail-view > table > tbody:nth-child(3) > tr:nth-child(7) > td:nth-child(2) > input");
    
if(countryValue.value == "Denmark" || countryValue.value == "Sweden" || countryValue.value == "Norway" || countryValue.value == "Finland"){countryValue.value = "Scandinavia"} else if (countryValue.value == "Germany" || countryValue.value == "Netherlands"){countryValue.value = "Europe"};
  
  
//additional info value
let infoValue = document.querySelector("#detail-view > table > tbody:nth-child(4) > tr:nth-child(4) > td:nth-child(2) > input");
if(infoValue.value == "RSA Pressing" || infoValue.value == "Goldisc Pressing" || infoValue.value == "Los Angeles" || infoValue.value == "Jacksonville" || infoValue.value == "Winchester Pressing" || infoValue.value == "CBS pressing" || infoValue.value == "Tan Type" || infoValue.value == "Green label" || infoValue.value == "Fourth Pressing" || infoValue.value == "Keel pressing" || infoValue.value == "Carrollton  Pressing" || infoValue.value == "Indianapolis Press" || infoValue.value == "Custom labels" || infoValue.value == "Red Lettering"|| infoValue.value == "Gloversville Pressing" || infoValue.value == "Orange/Yellow Label" || infoValue.value == "SP - Specialty Pressing" || infoValue.value == "Pinckneyville" || infoValue.value == "PR - Presswell Pressing" || infoValue.value == "DMM" || infoValue.value == "Terre Haute Pressing" || infoValue.value == "Sunburst Labels" || infoValue.value == "Los Angeles Pressing" || infoValue.value == "Santa Maria Pressing" || infoValue.value == "Jacksonville Pressing" || infoValue.value == "Pitman Press" || infoValue.value == "Sonic Pressing" ){infoValue.value = ""}


//Editing title
let titleVinyl = document.querySelector("#detail-view > table > tbody:nth-child(3) > tr:nth-child(4) > td:nth-child(2) > input")

let titleFullName = document.querySelector("#detail-view > table > tbody:nth-child(3) > tr:nth-child(4) > td:nth-child(2) > input").value

if(titleFullName.includes("(7)")){let newName = titleFullName.replace("(7)", " ")
titleFullName.value = newName;}


//Selectors

//Scandi selector
if(titleVinyl.value.includes("ø") || titleVinyl.value.includes("æ") || titleVinyl.value.includes("å") || titleVinyl.value.includes("Kim Larsen") || titleVinyl.value.includes("Savage Rose -") || titleVinyl.value.includes("Shu-Bi-Dua -") || titleVinyl.value.includes("tv-2 -") || titleVinyl.value.includes("Gnags -") || titleVinyl.value.includes("Sebastian -") || titleVinyl.value.includes("Gasolin' -") || titleVinyl.value.includes("Anne Linnet -") || titleVinyl.value.includes("Stenrosen -") || titleVinyl.value.includes("Lars H.U.G. -") || titleVinyl.value.includes("Malurt -") || titleVinyl.value.includes("Benny Andersen") || titleVinyl.value.includes("Povl Dissing") || titleVinyl.value.includes("Nephew -") || titleVinyl.value.includes("Allan Olsen -") || titleVinyl.value.includes("Vikingarna -") || titleVinyl.value.includes("Lollipops -") || titleVinyl.value.includes("Rugsted/Kreutzfeldt -") || titleVinyl.value.includes("Nik & Jay -") || titleVinyl.value.includes("Infernal -") || titleVinyl.value.includes("Dodo And The Dodo's") || titleVinyl.value.includes("Mew -") || titleVinyl.value.includes("Mikael Simpson -") || titleVinyl.value.includes("ABBA -") || titleVinyl.value.includes("Trille -") || titleVinyl.value.includes("Johnny Madsen -") || titleVinyl.value.includes("Brdr. Olsen -") || titleVinyl.value.includes("Michael Learns To Rock -") || titleVinyl.value.includes("Jette Torp -") || titleVinyl.value.includes("Sanne Salomonsen -") || titleVinyl.value.includes("Lene Siel -")
) {document.querySelector("#meta-\\>main_genre--Dansk\\/Skandi").checked = true}

//Rock pop selector
if(titleVinyl.value.includes("Donald Fagen -") || titleVinyl.value.includes("Santana -") || titleVinyl.value.includes("Joan Armatrading -") || titleVinyl.value.includes("Eric Clapton -") || titleVinyl.value.includes("Chicago -") || titleVinyl.value.includes("Phil Collins -") || titleVinyl.value.includes("Pet Shop Boys -") || titleVinyl.value.includes("Elvis Presley -") || titleVinyl.value.includes("Boney M. -") || titleVinyl.value.includes("Jean-Michel Jarre -") || titleVinyl.value.includes("Duran Duran -") || titleVinyl.value.includes("Lenny Kravitz -") || titleVinyl.value.includes("Depeche Mode -") || titleVinyl.value.includes("David Bowie -") || titleVinyl.value.includes("Shakira -") || titleVinyl.value.includes("Orchestral Manoeuvres In The Dark -") || titleVinyl.value.includes("John Mayall -") || titleVinyl.value.includes("Roxy Music -") || titleVinyl.value.includes("Mike Oldfield -") || titleVinyl.value.includes("Talking Heads -") || titleVinyl.value.includes("Genesis -") || titleVinyl.value.includes("Culture Club -") || titleVinyl.value.includes("Sting -") || titleVinyl.value.includes("Paul Young -") || titleVinyl.value.includes("Fats Domino -") || titleVinyl.value.includes("Madonna -") || titleVinyl.value.includes("Linda Ronstadt -") || titleVinyl.value.includes("Bon Iver -") || titleVinyl.value.includes("Bob Dylan -") || titleVinyl.value.includes("Mezzanine -") || titleVinyl.value.includes("Yes -") || titleVinyl.value.includes("Bonnie Tyler -") || titleVinyl.value.includes("Nine Inch Nails -") || titleVinyl.value.includes("Ian Brown -") || titleVinyl.value.includes("John Mayer -") || titleVinyl.value.includes("Glenn Frey -") || titleVinyl.value.includes("Electric Light Orchestra -") || titleVinyl.value.includes("Tom Waits -") || titleVinyl.value.includes("Enya -") || titleVinyl.value.includes("Michael Jackson -") || titleVinyl.value.includes("Tim Buckley -") || titleVinyl.value.includes("Lipps, Inc. -") || titleVinyl.value.includes("Cliff Richard -") || titleVinyl.value.includes("The Black Keys -") || titleVinyl.value.includes("Bee Gees -")	
 ) 
{document.querySelector("#meta-\\>main_genre--Rock\\/Pop").checked = true}

//Heavy
if(titleVinyl.value.includes("Guns N' Roses -") || titleVinyl.value.includes("Metallica -") || titleVinyl.value.includes("Sabaton -") || titleVinyl.value.includes("Slipknot -") || titleVinyl.value.includes("Iron Maiden -") || titleVinyl.value.includes("Europe -") || titleVinyl.value.includes("Alice Cooper -") || titleVinyl.value.includes("Winger -") || titleVinyl.value.includes("Megadeth -") 	 
)
{document.querySelector("#meta-\\>main_genre--Heavy").checked = true};

//Electronic
if(titleVinyl.value.includes("Prodigy -")
)
{document.querySelector("#meta-\\>main_genre--Electronic").checked = true};

//Folk/World/Country
if(titleVinyl.value.includes("Kenny Rogers -") || titleVinyl.value.includes("Bellamy Brothers -") || titleVinyl.value.includes("Johnny Cash -")  )
{document.querySelector("#meta-\\>main_genre--Folk\\,\\ World\\,\\ \\&\\ Country").checked = true}

//Jazz
if(titleVinyl.value.includes("The Clarke/Duke Project -") || titleVinyl.value.includes("Ray Charles -"))
{document.querySelector("#meta-\\>main_genre--Jazz").checked = true}


//Soul/Funk/Disco
if(titleVinyl.value.includes("Chaka Khan -") || titleVinyl.value.includes("Chaka Khan -") || titleVinyl.value.includes("Zapp -"))
{document.querySelector("#meta-\\>main_genre--Soul\\/Funk\\/Disco").checked = true}


//Blues
if(titleVinyl.value.includes("John Lee Hooker -")  )
{document.querySelector("#meta-\\>main_genre--Blues").checked = true}

//Underholdning
if(titleVinyl.value.includes("Bette Midler -")  )
{document.querySelector("#meta-\\>main_genre--Underholdning").checked = true}


//Soundtracks/Stage&Screen
let genresValue = document.querySelector("#detail-view > table > tbody:nth-child(3) > tr:nth-child(11) > td:nth-child(2) > input")
if(genresValue.value.includes("Stage & Screen")){document.querySelector("#meta-\\>main_genre--Soundtracks").checked = true}
};





//NM/NM
let newBtnScript = document.querySelector("#detail-view > div").appendChild(paraScript)

//Create/style button
let nmScript = document.createElement("p");
btnNodeNM = document.createTextNode("NM/NM");
nmScript.appendChild(btnNodeNM);
nmScript.style.color = "red"
nmScript.style.font = "20px"
nmScript.style.margin = "20px";

//Initialize button - script
nmScript.onclick = function(){
document.querySelector("#meta-\\>condition_medie--NM").checked = true
document.querySelector("#meta-\\>condition_sleeve--NM").checked = true}

let newBtnScriptNM = document.querySelector("#detail-view > div").appendChild(nmScript)

//NM/VG+
let nmvgScript = document.createElement("p");
btnNodenmvg = document.createTextNode("NM/VG+");
nmvgScript.appendChild(btnNodenmvg);
nmvgScript.style.color = "red"
nmvgScript.style.font = "20px"
nmvgScript.style.margin = "20px";

//Initialize button - script
nmvgScript.onclick = function(){
document.querySelector("#meta-\\>condition_medie--NM").checked = true
document.querySelector("#meta-\\>condition_sleeve--VG\\+").checked = true}

let newBtnScriptnmvg = document.querySelector("#detail-view > div").appendChild(nmvgScript)

//VG+/VG+
let vgpScript = document.createElement("p");
btnNodeVGP = document.createTextNode("VG+/VG+");
vgpScript.appendChild(btnNodeVGP);
vgpScript.style.color = "red"
vgpScript.style.font = "20px"
vgpScript.style.margin = "20px";

//Initialize button - script
vgpScript.onclick = function(){
document.querySelector("#meta-\\>condition_medie--VG\\+").checked = true
document.querySelector("#meta-\\>condition_sleeve--VG\\+").checked = true}

let newBtnScriptVGP = document.querySelector("#detail-view > div").appendChild(vgpScript)


//Heavy selector red
let heavyScript = document.createElement("p");
btnNodeheavy = document.createTextNode("Heavy");
heavyScript.appendChild(btnNodeheavy);
heavyScript.style.color = "red"
heavyScript.style.font = "20px"
heavyScript.style.margin = "20px";

//Initialize button - script
heavyScript.onclick = function(){
document.querySelector("#meta-\\>main_genre--Heavy").checked = true
}

let newBtnScriptheavy = document.querySelector("#detail-view > div").appendChild(heavyScript)
