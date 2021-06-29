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
if(infoValue.value == "RSA Pressing" || infoValue.value == "Goldisc Pressing" || infoValue.value == "Los Angeles" || infoValue.value == "Jacksonville" || infoValue.value == "Winchester Pressing" || infoValue.value == "CBS pressing" || infoValue.value == "Tan Type" || infoValue.value == "Green label" || infoValue.value == "Fourth Pressing" || infoValue.value == "Keel pressing" || infoValue.value == "Carrollton  Pressing" || infoValue.value == "Indianapolis Press" || infoValue.value == "Custom labels" || infoValue.value == "Red Lettering"|| infoValue.value == "Gloversville Pressing" || infoValue.value == "Orange/Yellow Label" || infoValue.value == "SP - Specialty Pressing" || infoValue.value == "Pinckneyville" || infoValue.value == "PR - Presswell Pressing" || infoValue.value == "DMM" || infoValue.value == "Terre Haute Pressing"){infoValue.value = ""}


//Editing title
let titleVinyl = document.querySelector("#detail-view > table > tbody:nth-child(3) > tr:nth-child(4) > td:nth-child(2) > input")

let titleFullName = document.querySelector("#detail-view > table > tbody:nth-child(3) > tr:nth-child(4) > td:nth-child(2) > input").value

if(titleFullName.includes("(7)")){let newName = titleFullName.replace("(7)", " ")
titleFullName.value = newName;}


//Selectors

//Scandi selector
if(titleVinyl.value.includes("ø") || titleVinyl.value.includes("æ") || titleVinyl.value.includes("å") || titleVinyl.value.includes("Kim Larsen -") || titleVinyl.value.includes("Savage Rose -") || titleVinyl.value.includes("Shu-Bi-Dua -") || titleVinyl.value.includes("tv-2 -") || titleVinyl.value.includes("Gnags -") || titleVinyl.value.includes("Sebastian -") || titleVinyl.value.includes("Gasolin -") || titleVinyl.value.includes("Anne Linnet -") || titleVinyl.value.includes("Stenrosen -") || titleVinyl.value.includes("Lars H.U.G. -") || titleVinyl.value.includes("Malurt -") || titleVinyl.value.includes("Benny Andersen") || titleVinyl.value.includes("Povl Dissing") || titleVinyl.value.includes("Nephew -") || titleVinyl.value.includes("Allan Olsen -") || titleVinyl.value.includes("Vikingarna -") || titleVinyl.value.includes("Lollipops -")  ) {document.querySelector("#meta-\\>main_genre--Dansk\\/Skandi").checked = true}

//Rock pop selector
if(titleVinyl.value.includes("Donald Fagen -") || titleVinyl.value.includes("Santana -") || titleVinyl.value.includes("Joan Armatrading -") || titleVinyl.value.includes("Eric Clapton -") || titleVinyl.value.includes("Chicago -") || titleVinyl.value.includes("Phil Collins -") || titleVinyl.value.includes("Pet Shop Boys -") || titleVinyl.value.includes("Elvis Presley -") || titleVinyl.value.includes("Boney M. -") || titleVinyl.value.includes("Jean-Michel Jarre -") || titleVinyl.value.includes("Duran Duran -") || titleVinyl.value.includes("Lenny Kravitz -") || titleVinyl.value.includes("Depeche Mode -") || titleVinyl.value.includes("David Bowie -") || titleVinyl.value.includes("Shakira -") || titleVinyl.value.includes("Orchestral Manoeuvres In The Dark -") || titleVinyl.value.includes("John Mayall -") || titleVinyl.value.includes("Roxy Music -") || titleVinyl.value.includes("Mike Oldfield -") || titleVinyl.value.includes("Talking Heads -") || titleVinyl.value.includes("Genesis -") || titleVinyl.value.includes("Culture Club -") || titleVinyl.value.includes("Sting -")     ) 
{document.querySelector("#meta-\\>main_genre--Rock\\/Pop").checked = true}

//Heavy
if(titleVinyl.value.includes("Guns N' Roses -") || titleVinyl.value.includes("Metallica -") || titleVinyl.value.includes("Sabaton -") || titleVinyl.value.includes("Slipknot -") 	 
)
{document.querySelector("#meta-\\>main_genre--Heavy").checked = true};


//Folk/World/Country
if(titleVinyl.value.includes("Kenny Rogers -") || titleVinyl.value.includes("Bellamy Brothers -")  )
{document.querySelector("#meta-\\>main_genre--Folk\\,\\ World\\,\\ \\&\\ Country").checked = true}

//Jazz
if(titleVinyl.value.includes("The Clarke/Duke Project -") || titleVinyl.value.includes("Ray Charles -"))
{document.querySelector("#meta-\\>main_genre--Jazz").checked = true}


//Soul/Funk/Disco
if(titleVinyl.value.includes("Chaka Khan -") || titleVinyl.value.includes("Chaka Khan -") || titleVinyl.value.includes("Zapp -"))
{document.querySelector("#meta-\\>main_genre--Soul\\/Funk\\/Disco").checked = true}


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