const CONTROLLED_CLUB = localStorage.getItem("ufm9_mp_activeClub") || CONTROLLED_CLUB;
const worldDB={
"Brasil":{flag:"🇧🇷",leagues:{
"Liga Brasileira Série A":[CONTROLLED_CLUB,"Flamengo","Palmeiras","Botafogo","Fluminense","Vasco da Gama","Corinthians","São Paulo","Santos","Grêmio","Internacional","Atlético Mineiro","Cruzeiro","Bahia","Vitória","Fortaleza","Ceará","Red Bull Bragantino","Athletico Paranaense","Sport Recife"],
"Liga Brasileira Série B":["Goiás","Coritiba","América Mineiro","Cuiabá","Atlético Goianiense","Chapecoense","Avaí","Criciúma","Vila Nova","Remo","Paysandu","Novorizontino","Mirassol","Operário Ferroviário","CRB","CSA","Ponte Preta","Guarani","Juventude","Náutico"]}},
"Argentina":{flag:"🇦🇷",leagues:{
"Liga Argentina Primera":["River Plate","Boca Juniors","Racing Club","Independiente","San Lorenzo","Vélez Sarsfield","Estudiantes","Rosario Central","Newell's Old Boys","Lanús","Argentinos Juniors","Talleres","Belgrano","Huracán","Defensa y Justicia","Tigre","Banfield","Godoy Cruz","Unión","Platense"],
"Liga Argentina Segunda":["Colón","Quilmes","San Martín Tucumán","San Martín San Juan","Gimnasia Mendoza","Chacarita Juniors","Ferro Carril Oeste","Atlanta","Nueva Chicago","All Boys","Almirante Brown","Temperley","Arsenal de Sarandí","Patronato","Gimnasia Jujuy","Deportivo Morón","Estudiantes Río Cuarto","Agropecuario","Mitre","Deportivo Maipú"]}},
"Inglaterra":{flag:"🏴",leagues:{
"English Premier Division":["Arsenal","Aston Villa","Bournemouth","Brentford","Brighton","Chelsea","Coventry City","Crystal Palace","Everton","Fulham","Hull City","Ipswich Town","Leeds United","Liverpool","Manchester City","Manchester United","Newcastle United","Nottingham Forest","Sunderland","Tottenham Hotspur"],
"English Championship":["Leicester City","Southampton","Sheffield United","Middlesbrough","Norwich City","West Bromwich Albion","Blackburn Rovers","Watford","Bristol City","Swansea City","Queens Park Rangers","Stoke City","Preston North End","Millwall","Derby County","Portsmouth","Sheffield Wednesday","Birmingham City","Wrexham","Charlton Athletic"]}},
"Espanha":{flag:"🇪🇸",leagues:{
"Liga Española Primera":["Real Madrid","Barcelona","Atlético de Madrid","Athletic Club","Osasuna","Celta de Vigo","Deportivo Alavés","Elche","Getafe","Levante","Málaga","Racing Santander","Rayo Vallecano","Deportivo La Coruña","Espanyol","Real Betis","Real Sociedad","Sevilla","Valencia","Villarreal"],
"Liga Española Segunda":["Real Oviedo","Las Palmas","Granada","Almería","Cádiz","Eibar","Sporting Gijón","Real Zaragoza","Huesca","Burgos","Mirandés","Albacete","Córdoba","Castellón","Tenerife","Valladolid","Leganés","Cartagena","Racing Ferrol","Andorra"]}},
"Itália":{flag:"🇮🇹",leagues:{
"Lega Italiana A":["Atalanta","Bologna","Cagliari","Como","Fiorentina","Frosinone","Genoa","Inter","Juventus","Lazio","Lecce","Milan","Monza","Napoli","Parma","Roma","Sassuolo","Torino","Udinese","Venezia"],
"Lega Italiana B":["Arezzo","Ascoli","Avellino","Benevento","Carrarese","Catanzaro","Cesena","Cremonese","Empoli","Hellas Verona","Juve Stabia","Mantova","Modena","Padova","Palermo","Pisa","Sampdoria","Südtirol","Vicenza","Virtus Entella"]}},
"Alemanha":{flag:"🇩🇪",leagues:{
"Deutsche Liga 1":["Bayern Munich","Borussia Dortmund","Bayer Leverkusen","RB Leipzig","Eintracht Frankfurt","VfB Stuttgart","Hoffenheim","Freiburg","Augsburg","Mainz","Union Berlin","Borussia Mönchengladbach","Hamburger SV","Köln","Werder Bremen","Schalke 04","Elversberg","Paderborn","Wolfsburg","St. Pauli"],
"Deutsche Liga 2":["Hannover 96","Fortuna Düsseldorf","Nürnberg","Karlsruher SC","Kaiserslautern","Darmstadt","Greuther Fürth","Magdeburg","Holstein Kiel","Bochum","Arminia Bielefeld","Preußen Münster","Dynamo Dresden","Braunschweig","Hansa Rostock","1860 München","Osnabrück","Saarbrücken","Hertha Berlin","Düsseldorf"]}},
"França":{flag:"🇫🇷",leagues:{
"Ligue Française 1":["Paris Saint-Germain","Marseille","Monaco","Lyon","Lille","Nice","Lens","Rennes","Strasbourg","Nantes","Toulouse","Auxerre","Brest","Le Havre","Angers","Lorient","Paris FC","Troyes","Metz","Saint-Étienne"],
"Ligue Française 2":["Caen","Bastia","Grenoble","Amiens","Annecy","Laval","Dunkerque","Guingamp","Ajaccio","Pau","Rodez","Clermont","Red Star","Nancy","Sochaux","Le Mans","Boulogne","Montpellier","Reims","Martigues"]}},
"Portugal":{flag:"🇵🇹",leagues:{
"Liga Portuguesa 1":["Benfica","Porto","Sporting CP","Braga","Vitória de Guimarães","Famalicão","Boavista","Estoril","Rio Ave","Casa Pia","Gil Vicente","Moreirense","Arouca","Nacional","Santa Clara","Estrela Amadora","AVS","Farense","Tondela","Alverca"],
"Liga Portuguesa 2":["Marítimo","Paços de Ferreira","União de Leiria","Penafiel","Feirense","Chaves","Vizela","Académico de Viseu","Leixões","Oliveirense","Mafra","Torreense","Felgueiras","Portimonense","Benfica B","Porto B","Sporting B","Varzim","Belenenses","Académica"]}},
"Japão":{flag:"🇯🇵",leagues:{
"Japan Premier League":["Kashima Antlers","Urawa Red Diamonds","Yokohama F. Marinos","Kawasaki Frontale","Vissel Kobe","Sanfrecce Hiroshima","Gamba Osaka","Cerezo Osaka","FC Tokyo","Nagoya Grampus","Kashiwa Reysol","Avispa Fukuoka","Albirex Niigata","Shonan Bellmare","Tokyo Verdy","Machida Zelvia","Kyoto Sanga","Júbilo Iwata","Sagan Tosu","Consadole Sapporo"],
"Japan Division 2":["Vegalta Sendai","JEF United Chiba","Omiya Ardija","V-Varen Nagasaki","Roasso Kumamoto","Mito HollyHock","Montedio Yamagata","Ehime FC","Oita Trinita","Ventforet Kofu","Renofa Yamaguchi","Blaublitz Akita","Fujieda MYFC","Tokushima Vortis","Tochigi SC","Thespakusatsu Gunma","Iwaki FC","Yokohama FC","Shimizu S-Pulse","Fagiano Okayama"]}},
"Estados Unidos":{flag:"🇺🇸",leagues:{
"American Soccer League":["Inter Miami","LA Galaxy","Los Angeles FC","Seattle Sounders","Atlanta United","New York City FC","New York Red Bulls","Portland Timbers","Austin FC","FC Dallas","Houston Dynamo","Chicago Fire","Columbus Crew","FC Cincinnati","Orlando City","Philadelphia Union","Nashville SC","New England Revolution","Sporting Kansas City","Minnesota United"],
"American Division 2":["San Diego FC","Sacramento Republic","Louisville City","Charleston Battery","Indy Eleven","Detroit City","Phoenix Rising","Tampa Bay Rowdies","Oakland Roots","Orange County SC","Birmingham Legion","Pittsburgh Riverhounds","Rhode Island FC","New Mexico United","Las Vegas Lights","North Carolina FC","Hartford Athletic","El Paso Locomotive","Colorado Springs Switchbacks","San Antonio FC"]}}
};

const worldFillerRoots=["Aurora","Central","Imperial","Atlético","União","Estrela","Racing","Horizonte","Nacional","Metropolitano","Real","Sporting","Academia","Ferroviário","Litoral","Capital","Vitória","Juventude","Operário","Olimpo","Dínamo","Pioneiros","Vanguarda","Montanha"];
function ensureWorld20Clubs(){
 if(localStorage.getItem("ufm9_realClubNamesV2")!=="1"){
   localStorage.removeItem("ufm9_worldLeagueClubs");
   localStorage.removeItem("ufm9_worldTables");
   localStorage.removeItem("ufm9_worldRosters");
   localStorage.setItem("ufm9_realClubNamesV2","1");
 }
 let stored=JSON.parse(localStorage.getItem("ufm9_worldLeagueClubs")||"null");
 Object.keys(worldDB).forEach(country=>{
   let leagues=Object.keys(worldDB[country].leagues);
   leagues.forEach((league,li)=>{
     let key=country+"|"+league,clubs=stored?.[key]?.length===20?[...stored[key]]:[...worldDB[country].leagues[league]];
     let used=new Set(clubs),n=0;
     while(clubs.length<20){
       let root=worldFillerRoots[(n+li*9)%worldFillerRoots.length],name=`${root} ${country} ${li+1}-${String(n+1).padStart(2,"0")}`;n++;
       if(!used.has(name)){clubs.push(name);used.add(name)}
     }
     worldDB[country].leagues[league]=clubs.slice(0,20);
   });
 });
}
function worldLeagueSnapshot(){let out={};Object.keys(worldDB).forEach(c=>Object.keys(worldDB[c].leagues).forEach(l=>out[c+"|"+l]=[...worldDB[c].leagues[l]]));return out}
function worldLeagueTier(country,league){return Object.keys(worldDB[country].leagues).indexOf(league)===0?1:2}
ensureWorld20Clubs();
let worldCountry=localStorage.getItem("ufm9_worldCountry")||"Brasil";
let worldLeague=localStorage.getItem("ufm9_worldLeague")||"Liga Brasileira Série A";
let worldTables=JSON.parse(localStorage.getItem("ufm9_worldTables")||"null")||{};
function seededWorldTable(country,league){
 let key=country+"|"+league;if(worldTables[key])return worldTables[key];
 let clubs=worldDB[country].leagues[league];
 worldTables[key]=clubs.map((n,i)=>({n,j:0,v:0,e:0,d:0,gp:0,gc:0,pts:0}));
 return worldTables[key];
}
const initialPlayers=[
{id:1,n:"Rafael Costa",p:"GOL",age:27,o:78,c:96,v:5.2},{id:2,n:"Diego Lima",p:"LD",age:24,o:76,c:91,v:6.5},{id:3,n:"Bruno Reis",p:"ZAG",age:29,o:79,c:88,v:7.1},{id:4,n:"Caio Rocha",p:"ZAG",age:23,o:77,c:94,v:8.2},{id:5,n:"André Luz",p:"LE",age:25,o:75,c:90,v:5.8},{id:6,n:"Matheus Silva",p:"MC",age:26,o:80,c:93,v:11.5},{id:7,n:"Igor Alves",p:"MC",age:22,o:78,c:97,v:10.4},{id:8,n:"Renan Melo",p:"MEI",age:24,o:81,c:89,v:14.2},{id:9,n:"Pedro Nunes",p:"PD",age:21,o:79,c:95,v:12.7},{id:10,n:"Lucas Mendes",p:"ATA",age:25,o:82,c:92,v:18.5},{id:11,n:"Vitor Sá",p:"PE",age:23,o:80,c:94,v:15.1},{id:12,n:"Henrique",p:"GOL",age:20,o:70,c:99,v:2.1},{id:13,n:"Samuel",p:"ZAG",age:21,o:72,c:97,v:3.4},{id:14,n:"Murilo",p:"MC",age:19,o:71,c:96,v:3.1},{id:15,n:"Davi",p:"ATA",age:20,o:73,c:95,v:4.2},{id:16,n:"Alex",p:"LE",age:22,o:72,c:94,v:3.5},{id:17,n:"Ruan",p:"PD",age:20,o:74,c:93,v:4.6}];
const squadExpansionPlayers=[
{id:18,n:"Marcos Vinícius",p:"GOL",age:23,o:72,c:98,v:3.0},{id:19,n:"Eduardo Ramos",p:"LD",age:21,o:73,c:96,v:4.0},{id:20,n:"Felipe Moura",p:"ZAG",age:26,o:74,c:94,v:4.5},{id:21,n:"Wesley Pires",p:"ZAG",age:20,o:71,c:97,v:3.2},{id:22,n:"Guilherme Barros",p:"LE",age:23,o:73,c:95,v:4.1},{id:23,n:"João Pedro",p:"VOL",age:24,o:75,c:93,v:5.4},{id:24,n:"Leandro Farias",p:"MC",age:27,o:74,c:92,v:4.8},{id:25,n:"Danilo Campos",p:"MEI",age:20,o:73,c:97,v:4.9},{id:26,n:"Kevin Rocha",p:"PE",age:19,o:72,c:98,v:4.3},{id:27,n:"Yuri Ferreira",p:"PD",age:24,o:75,c:94,v:5.7},{id:28,n:"Alan Ribeiro",p:"ATA",age:22,o:76,c:96,v:6.8}
];
const initialMarket=[{id:101,n:"Gabriel Torres",p:"ATA",age:24,o:83,c:100,v:19.5},{id:102,n:"Nicolas Freitas",p:"MEI",age:22,o:80,c:100,v:13.2},{id:103,n:"João Victor",p:"ZAG",age:25,o:81,c:100,v:15.8},{id:104,n:"Thiago Matos",p:"PD",age:21,o:79,c:100,v:11},{id:105,n:"Felipe Dias",p:"GOL",age:26,o:82,c:100,v:14.6}];
const defaultSerieA=[CONTROLLED_CLUB,"Flamengo","Palmeiras","Botafogo","Fluminense","Vasco da Gama","Corinthians","São Paulo","Santos","Grêmio","Internacional","Atlético Mineiro","Cruzeiro","Bahia","Vitória","Fortaleza","Ceará","Red Bull Bragantino","Athletico Paranaense","Sport Recife"];
const defaultSerieB=["Goiás","Coritiba","América Mineiro","Cuiabá","Atlético Goianiense","Chapecoense","Avaí","Criciúma","Vila Nova","Remo","Paysandu","Novorizontino","Mirassol","Operário Ferroviário","CRB","CSA","Ponte Preta","Guarani","Juventude","Náutico"];
let players=JSON.parse(localStorage.getItem("ufm4_players")||"null")||initialPlayers;
if(players.length<28){
 let missing=squadExpansionPlayers.filter(x=>!players.some(p=>p.id===x.id||p.n===x.n)).slice(0,28-players.length);
 players.push(...missing);
}
let market=JSON.parse(localStorage.getItem("ufm4_market")||"null")||initialMarket;
let money=+(localStorage.getItem("ufm4_money")||100);
if(localStorage.getItem("ufm9_budgetBoost100")!=="1"){
 let hadCareer=localStorage.getItem("ufm4_money")!==null;
 if(hadCareer){
   money=+(money+55).toFixed(3);
   localStorage.setItem("ufm9_budgetBoostLedgerPending","1");
 }
 localStorage.setItem("ufm9_budgetBoost100","1");
}
if(localStorage.getItem("ufm9_budgetBoost10B")!=="1"){
 money=+(money+10000).toFixed(3);
 localStorage.setItem("ufm4_money",money);
 localStorage.setItem("ufm9_budgetBoost10BLedgerPending","1");
 localStorage.setItem("ufm9_budgetBoost10B","1");
}
let xi=JSON.parse(localStorage.getItem("ufm4_xi")||"null")||players.slice(0,11).map(p=>p.id);
let selectedFormation=localStorage.getItem("ufm9_formation")||"433";
let benchSelection=JSON.parse(localStorage.getItem("ufm9_benchSelection")||"null")||[];

let seasonYear=+(localStorage.getItem("ufm9_seasonYear")||2026);
let clubDivision=localStorage.getItem("ufm9_clubDivision")||"A";
let qualifiedContinental=localStorage.getItem("ufm9_qualifiedContinental")==="1";
let qualifiedSecondary=localStorage.getItem("ufm9_qualifiedSecondary")==="1";
let qualifiedWorld=localStorage.getItem("ufm9_qualifiedWorld")==="1";
if(qualifiedContinental)qualifiedSecondary=false;
let nationalCupChampion=localStorage.getItem("ufm9_nationalCupChampion")==="1";
let continentalChampion=localStorage.getItem("ufm9_continentalChampion")==="1";
let secondaryChampion=localStorage.getItem("ufm9_secondaryChampion")==="1";
let cupAlive=localStorage.getItem("ufm9_cupAlive")!=="0";
let continentalAlive=localStorage.getItem("ufm9_continentalAlive")!=="0";
let secondaryAlive=localStorage.getItem("ufm9_secondaryAlive")!=="0";
let worldAlive=localStorage.getItem("ufm9_worldAlive")!=="0";

const realNameMap={
"Atlético Azul":"Flamengo","Real Verde":"Palmeiras","União City":"Botafogo","Ferroviário":"Fluminense","Estrela SC":"Vasco da Gama","Racing Sul":"Corinthians","Porto Branco":"São Paulo","Capital FC":"Santos","Aurora FC":"Grêmio","Nacional do Vale":"Internacional","Litoral AC":"Atlético Mineiro","Imperial FC":"Cruzeiro","Horizonte EC":"Bahia","Grêmio Serrano":"Vitória","Vitória do Norte":"Fortaleza","Paulista 1908":"Ceará","Cruzeiro do Sul":"Red Bull Bragantino","América Dourada":"Athletico Paranaense","Santos do Porto":"Sport Recife",
"Guarani Norte":"Goiás","Metropolitano":"Coritiba","Oeste FC":"América Mineiro","Santa Cruzada":"Cuiabá","Vila Imperial":"Atlético Goianiense","Atlético Central":"Chapecoense","Serra Azul":"Avaí","Rio Branco AC":"Criciúma","Operário Sul":"Vila Nova","União Paulista":"Remo","Amazonas Verde":"Paysandu","Praia Clube":"Novorizontino","Juventude da Serra":"Mirassol","Vale FC":"Operário Ferroviário","Catarinense FC":"CRB","Nordeste United":"CSA","Maringá Verde":"Ponte Preta","Campinas Athletic":"Guarani","Goiás Central":"Juventude","Pelotas FC":"Náutico"
};
function migrateStoredClubNames(){
 if(localStorage.getItem("ufm9_brazilRealNamesV1")==="1")return;
 ["ufm9_serieAClubs","ufm9_serieBClubs","ufm9_compTable","ufm9_otherCompTable","ufm9_compSchedule","ufm9_stateStandings"].forEach(key=>{
   let raw=localStorage.getItem(key);if(!raw)return;
   try{let data=JSON.parse(raw),txt=JSON.stringify(data);Object.entries(realNameMap).forEach(([a,b])=>{txt=txt.split(`"${a}"`).join(`"${b}"`)});localStorage.setItem(key,txt)}catch(e){}
 });
 localStorage.setItem("ufm9_brazilRealNamesV1","1");
}
migrateStoredClubNames();

let serieAClubs=JSON.parse(localStorage.getItem("ufm9_serieAClubs")||"null")||[...defaultSerieA];
let serieBClubs=JSON.parse(localStorage.getItem("ufm9_serieBClubs")||"null")||[...defaultSerieB];
const clubStateChampionships={
 "SP":{name:"Campeonato Paulista",clubs:[CONTROLLED_CLUB,"Corinthians","Palmeiras","São Paulo","Santos","Red Bull Bragantino","Mirassol","São Bernardo","Novorizontino","Guarani","Ponte Preta","Portuguesa","Velo Clube","Noroeste","Botafogo-SP","Capivariano"]},
 "RJ":{name:"Campeonato Carioca",clubs:["Flamengo","Fluminense","Vasco da Gama","Botafogo","Bangu","Boavista","Madureira","Maricá","Nova Iguaçu","Portuguesa-RJ","Sampaio Corrêa-RJ","Volta Redonda"]},
 "MG":{name:"Campeonato Mineiro",clubs:["Atlético Mineiro","Cruzeiro","América Mineiro","Athletic Club","Betim","Democrata-GV","Itabirito","North","Pouso Alegre","Tombense","Uberlândia","URT"]},
 "RS":{name:"Campeonato Gaúcho",clubs:["Grêmio","Internacional","Juventude","Caxias","Brasil de Pelotas","Ypiranga-RS","São José-RS","Avenida","Guarany de Bagé","Monsoon","Novo Hamburgo","Pelotas"]},
 "BA":{name:"Campeonato Baiano",clubs:["Bahia","Vitória","Jacuipense","Juazeirense","Barcelona de Ilhéus","Jequié","Porto-BA","Atlético de Alagoinhas","Bahia de Feira","Galícia"]},
 "CE":{name:"Campeonato Cearense",clubs:["Fortaleza","Ceará","Ferroviário","Maracanã","Floresta","Iguatu","Horizonte","Barbalha","Tirol","Guarany de Sobral"]},
 "PR":{name:"Campeonato Paranaense",clubs:["Athletico Paranaense","Coritiba","Operário Ferroviário","Londrina","Maringá","Cianorte","FC Cascavel","Azuriz","Paraná Clube","Rio Branco-PR","Andraus","São Joseense"]},
 "PE":{name:"Campeonato Pernambucano",clubs:["Sport Recife","Náutico","Santa Cruz","Retrô","Maguary","Central","Decisão","Afogados","Petrolina","Porto-PE"]},
 "GO":{name:"Campeonato Goiano",clubs:["Goiás","Atlético Goianiense","Vila Nova","Aparecidense","Anápolis","Goianésia","Crac","Jataiense","Goiatuba","Inhumas","Abecat","Centro Oeste"]},
 "SC":{name:"Campeonato Catarinense",clubs:["Avaí","Chapecoense","Criciúma","Figueirense","Brusque","Joinville","Marcílio Dias","Barra-SC","Hercílio Luz","Concórdia","Caravaggio","Santa Catarina"]},
 "PA":{name:"Campeonato Paraense",clubs:["Remo","Paysandu","Tuna Luso","Águia de Marabá","Castanhal","Bragantino-PA","Caeté","Cametá","São Francisco-PA","Independente-PA","Capitão Poço","Santa Rosa"]},
 "AL":{name:"Campeonato Alagoano",clubs:["CRB","CSA","ASA","CSE","Coruripe","Murici","Penedense","Igaci"]},
 "RN":{name:"Campeonato Potiguar",clubs:["ABC","América-RN","Potiguar de Mossoró","Globo FC","Santa Cruz de Natal","Força e Luz","Baraúnas","Laguna"]},
 "PB":{name:"Campeonato Paraibano",clubs:["Botafogo-PB","Treze","Campinense","Sousa","Nacional de Patos","Serra Branca","Pombal","Esporte de Patos","Picuiense","Auto Esporte-PB"]}
};
let clubState="SP";
localStorage.setItem("ufm9_clubState","SP");
function stateCompetition(){return clubStateChampionships[clubState]}
function stateCompetitionName(){return stateCompetition().name}
function isStateCompetition(name){return name==="Campeonato Estadual"||Object.values(clubStateChampionships).some(x=>x.name===name)}

const stateNames={SP:"São Paulo",RJ:"Rio de Janeiro",MG:"Minas Gerais",RS:"Rio Grande do Sul",BA:"Bahia",CE:"Ceará",PR:"Paraná",PE:"Pernambuco",GO:"Goiás",SC:"Santa Catarina",PA:"Pará",AL:"Alagoas",RN:"Rio Grande do Norte",PB:"Paraíba"};
let worldStateTables=JSON.parse(localStorage.getItem("ufm9_worldStateTables")||"null")||{};
function seededStateTable(code){
 let cfg=clubStateChampionships[code],old=worldStateTables[code];
 if(old&&Array.isArray(old)&&old.length===cfg.clubs.length&&cfg.clubs.every(n=>old.some(x=>x.n===n)))return old;
 return cfg.clubs.map((n,i)=>({n,j:0,v:0,e:0,d:0,gp:0,gc:0,pts:0}));
}
Object.keys(clubStateChampionships).forEach(code=>{if(code!=="SP")worldStateTables[code]=seededStateTable(code)});
function simulateOtherStateRound(code){
 let tab=worldStateTables[code];if(!tab||!tab.length)return;
 let maxJ=Math.max(0,...tab.map(x=>x.j||0));if(maxJ>=11)return;
 let shuffled=[...tab].sort((a,b)=>stableHash(`${seasonYear}|${code}|${maxJ}|${a.n}`)-stableHash(`${seasonYear}|${code}|${maxJ}|${b.n}`));
 for(let i=0;i+1<shuffled.length;i+=2){
  let a=shuffled[i],b=shuffled[i+1],h=stableHash(`${seasonYear}|${code}|${maxJ}|${a.n}|${b.n}`),ga=h%4,gb=(h>>4)%4;
  a.j++;b.j++;a.gp+=ga;a.gc+=gb;b.gp+=gb;b.gc+=ga;
  if(ga>gb){a.v++;b.d++;a.pts+=3}else if(gb>ga){b.v++;a.d++;b.pts+=3}else{a.e++;b.e++;a.pts++;b.pts++}
 }
}
function simulateAllOtherStates(){
 Object.keys(clubStateChampionships).filter(c=>c!=="SP").forEach(simulateOtherStateRound);
}
function stateTableSorted(code){
 let tab=code==="SP"?stateStandings:(worldStateTables[code]||[]);
 return [...tab].sort((a,b)=>b.pts-a.pts||(b.gp-b.gc)-(a.gp-a.gc)||b.gp-a.gp||a.n.localeCompare(b.n));
}
function renderStateChampionshipsWorld(){
 let box=$("stateChampionshipsWorld");if(!box)return;
 box.innerHTML=Object.entries(clubStateChampionships).map(([code,cfg])=>{
  let tab=stateTableSorted(code),mine=code==="SP";
  return `<div class="state-world-card ${mine?"state-home":""}">
   <div class=state-world-head><div><span class=state-code>${code}</span><h3>${cfg.name}</h3><small>${stateNames[code]||code} • ${cfg.clubs.length} clubes${mine?" • ESTADUAL DO NOVA FC":""}</small></div>${mine?'<span class=coach-badge>Nova FC</span>':""}</div>
   <div class=state-club-chips>${cfg.clubs.map(n=>`<span class="${n===CONTROLLED_CLUB?"nova-chip":""}">${n}</span>`).join("")}</div>
   <div class=state-mini-table>${tab.slice(0,6).map((t,i)=>`<div><b>${i+1}</b><span>${t.n}</span><strong>${t.pts} pts</strong></div>`).join("")}</div>
  </div>`;
 }).join("");
}

const stateClubs=stateCompetition().clubs;
let stateAlive=localStorage.getItem("ufm9_stateAlive")!=="0";
let stateChampion=localStorage.getItem("ufm9_stateChampion")==="1";

let currentLeagueClubs=clubDivision==="A"?serieAClubs:serieBClubs;
let otherLeagueClubs=clubDivision==="A"?serieBClubs:serieAClubs;
let standings=JSON.parse(localStorage.getItem("ufm9_compTable")||"null")||makeEmptyTable(currentLeagueClubs);
let otherStandings=JSON.parse(localStorage.getItem("ufm9_otherCompTable")||"null")||makeEmptyTable(otherLeagueClubs);
let schedule=JSON.parse(localStorage.getItem("ufm9_compSchedule")||"null")||buildSeasonSchedule();
let gameIndex=+(localStorage.getItem("ufm9_compIndex")||0);

function migrateStateChampionshipV2(){
 if(localStorage.getItem("ufm9_stateChampionshipV2")==="1")return;
 try{
   let raw=localStorage.getItem("ufm9_compSchedule");
   if(raw){
     let arr=JSON.parse(raw),changed=false;
     arr.forEach(g=>{if(g.comp==="Campeonato Estadual"){g.comp=stateCompetitionName();changed=true}});
     if(changed)localStorage.setItem("ufm9_compSchedule",JSON.stringify(arr));
   }
   localStorage.removeItem("ufm9_stateStandings");
 }catch(e){}
 localStorage.setItem("ufm9_clubState",clubState);localStorage.setItem("ufm9_worldStateTables",JSON.stringify(worldStateTables));
 localStorage.setItem("ufm9_stateChampionshipV2","1");
}
migrateStateChampionshipV2();

let stateStandings=JSON.parse(localStorage.getItem("ufm9_stateStandings")||"null")||makeEmptyTable(stateClubs);
let continentalGroupTable=JSON.parse(localStorage.getItem("ufm9_continentalGroupTable")||"null")||makeEmptyTable(groupClubsFromSchedule("Copa Continental Sul-Americana"));
let secondaryGroupTable=JSON.parse(localStorage.getItem("ufm9_secondaryGroupTable")||"null")||makeEmptyTable(groupClubsFromSchedule("Copa Continental Secundária"));

let stadium=JSON.parse(localStorage.getItem("ufm4_stadium")||"null")||{stands:1,facilities:1,lighting:1,vip:1};
let trainingBudget=+(localStorage.getItem("ufm6_trainingBudget")||0.35);
let sectorTraining=JSON.parse(localStorage.getItem("ufm9_sectorTraining")||"null")||{
 goalkeepers:{focus:"Reflexos",intensity:"Normal"},
 defenders:{focus:"Marcação",intensity:"Normal"},
 midfielders:{focus:"Passe",intensity:"Normal"},
 attackers:{focus:"Finalização",intensity:"Normal"}
};
let youthBudget=+(localStorage.getItem("ufm6_youthBudget")||0.20);
let fans=+(localStorage.getItem("ufm6_fans")||18500);
let physioLevel=+(localStorage.getItem("ufm6_physio")||1);
let trainingLevel=+(localStorage.getItem("ufm6_trainingCenter")||1);
let academyLevel=+(localStorage.getItem("ufm6_academy")||1);
let academyFacilities=JSON.parse(localStorage.getItem("ufm9_academyFacilities")||"null")||{pitches:academyLevel,coaches:academyLevel,analysis:academyLevel,medical:academyLevel};
let academyHistory=JSON.parse(localStorage.getItem("ufm9_academyHistory")||"null")||[];
let academyCycle=+(localStorage.getItem("ufm9_academyCycle")||0);
let scouts=JSON.parse(localStorage.getItem("ufm6_scouts")||"null")||[{id:1,n:"Carlos Prado",exp:61,task:"Jogadores jovens",days:2}];
const academyExpansionPlayers=[
{id:801,n:"Mateus Rocha",p:"MC",age:17,o:64,pot:84,c:100,v:1.4},
{id:802,n:"João Pedro",p:"ATA",age:16,o:62,pot:88,c:100,v:1.1},
{id:803,n:"Gabriel Nascimento",p:"GOL",age:17,o:61,pot:82,c:100,v:.9},
{id:804,n:"Lucas Tavares",p:"LD",age:16,o:60,pot:85,c:100,v:.8},
{id:805,n:"Arthur Menezes",p:"ZAG",age:17,o:63,pot:86,c:100,v:1.2},
{id:806,n:"Davi Monteiro",p:"ZAG",age:15,o:59,pot:90,c:100,v:.8},
{id:807,n:"Enzo Cardoso",p:"LE",age:16,o:61,pot:87,c:100,v:.9},
{id:808,n:"Miguel Azevedo",p:"VOL",age:17,o:64,pot:85,c:100,v:1.4},
{id:809,n:"Pedro Henrique",p:"MEI",age:16,o:63,pot:91,c:100,v:1.5},
{id:810,n:"Rafael Moreira",p:"PD",age:15,o:60,pot:89,c:100,v:1.0},
{id:811,n:"Caio Martins",p:"PE",age:17,o:65,pot:86,c:100,v:1.6},
{id:812,n:"Samuel Vieira",p:"ATA",age:16,o:64,pot:92,c:100,v:1.7}
];
let youth=JSON.parse(localStorage.getItem("ufm6_youth")||"null")||academyExpansionPlayers.map(p=>({...p}));
if(youth.length<12){
 let missing=academyExpansionPlayers.filter(x=>!youth.some(p=>p.id===x.id||p.n===x.n)).slice(0,12-youth.length);
 youth.push(...missing.map(p=>({...p})));
}
let auctions=JSON.parse(localStorage.getItem("ufm7_auctions")||"null")||[];
let auctionSeq=+(localStorage.getItem("ufm7_auctionSeq")||1);
let auctionTick=null;
let scoutMarket=JSON.parse(localStorage.getItem("ufm9_scoutMarket")||"null")||[];
let scoutReports=JSON.parse(localStorage.getItem("ufm9_scoutReports")||"null")||[];
let financeLedger=JSON.parse(localStorage.getItem("ufm9_financeLedger")||"null")||[];
let trophyCabinet=JSON.parse(localStorage.getItem("ufm9_trophyCabinet")||"null")||[];
let individualAwards=JSON.parse(localStorage.getItem("ufm9_individualAwards")||"null")||[];

let championHistory=JSON.parse(localStorage.getItem("ufm9_championHistory")||"null")||[
 {competition:"Liga Brasileira Série A",display:"Liga Brasileira",season:"2025",champion:"Flamengo",real:true},
 {competition:"Liga Brasileira Série A",display:"Liga Brasileira",season:"2024",champion:"Botafogo",real:true},
 {competition:"Liga Brasileira Série A",display:"Liga Brasileira",season:"2023",champion:"Palmeiras",real:true},
 {competition:"Copa Continental Sul-Americana",display:"América Cup",season:"2025",champion:"Flamengo",real:true},
 {competition:"Copa Continental Sul-Americana",display:"América Cup",season:"2024",champion:"Botafogo",real:true},
 {competition:"Copa Continental Sul-Americana",display:"América Cup",season:"2023",champion:"Fluminense",real:true},
 {competition:"Mundial de Clubes",display:"Mundial de Clubes",season:"2025",champion:"Chelsea",real:true},
 {competition:"Mundial de Clubes",display:"Mundial de Clubes",season:"2023",champion:"Manchester City",real:true},
 {competition:"Mundial de Clubes",display:"Mundial de Clubes",season:"2022",champion:"Real Madrid",real:true}
];

let leagueStatView="goals";
let activeSponsors=JSON.parse(localStorage.getItem("ufm9_activeSponsors")||"null")||[];
let sponsorMarket=JSON.parse(localStorage.getItem("ufm9_sponsorMarket")||"null")||[];
let marketingBudget=+(localStorage.getItem("ufm9_marketingBudget")||0.05);
let ticketPrice=+(localStorage.getItem("ufm9_ticketPrice")||65);
let shirtPrice=+(localStorage.getItem("ufm9_shirtPrice")||180);
let kitDesign=JSON.parse(localStorage.getItem("ufm9_kitDesign")||"null")||{primary:"#116b3d",secondary:"#ffffff",trim:"#d7b34a",pattern:"classic"};
let worldNews=JSON.parse(localStorage.getItem("ufm9_worldNews")||"null")||[];
let worldRosters=JSON.parse(localStorage.getItem("ufm9_worldRosters")||"null")||{};
let transferTalk=null;
let openedWorldClub=null;
let assistantCoach=JSON.parse(localStorage.getItem("ufm9_assistantCoach")||"null")||null;
let assistantMarket=JSON.parse(localStorage.getItem("ufm9_assistantMarket")||"null")||[];
let contractTalkPlayerId=null;
const assistantStyles=["Equilibrado","Posse de bola","Contra-ataque","Pressão alta","Jogo direto","Defensivo"];
const assistantNames=["Marcelo Nunes","Paulo Esteves","Renato Lacerda","Fábio Valente","Eduardo Braga","Sérgio Tavares","Caio Fontes","André Furtado","Leandro Paes","Ricardo Viana","Hugo Sampaio","Bruno Rezende"];

const sponsorSlots={master:"Patrocínio master",sleeve:"Manga da camisa",training:"Centro de treinamento"};
const sponsorBrands=["Aurora Bank","Nexa Telecom","Vértice Energia","Prisma Tech","Horizonte Seguros","Atlas Mobilidade","Vale Verde Alimentos","Orbital Sports","Lumen Solar","PontoMax","Cobalto Digital","Brava Motors","NortePay","VivaMais","AltoNível"];

const scoutGrades={
 A:{cost:12.0,label:"Lendário",minDays:1,maxDays:2,exp:[88,99],weights:[32,32,20,10,5,1]},
 B:{cost:7.5,label:"Elite",minDays:1,maxDays:3,exp:[78,91],weights:[14,31,29,16,8,2]},
 C:{cost:4.5,label:"Especialista",minDays:2,maxDays:3,exp:[68,83],weights:[6,18,31,27,14,4]},
 D:{cost:2.5,label:"Regional",minDays:2,maxDays:4,exp:[57,73],weights:[2,8,20,33,27,10]},
 E:{cost:1.4,label:"Local",minDays:3,maxDays:5,exp:[47,63],weights:[1,3,10,23,38,25]},
 F:{cost:.7,label:"Iniciante",minDays:3,maxDays:6,exp:[35,53],weights:[.3,1.7,5,14,30,49]}
};
const talentGrades={
 A:{ovr:[64,76],pot:[89,96],age:[15,18],fee:[5.5,12],label:"Joia geracional"},
 B:{ovr:[61,73],pot:[84,91],age:[15,19],fee:[3.2,7],label:"Grande promessa"},
 C:{ovr:[58,70],pot:[79,87],age:[16,20],fee:[1.8,4.5],label:"Promessa"},
 D:{ovr:[55,67],pot:[74,82],age:[16,21],fee:[.9,2.8],label:"Bom projeto"},
 E:{ovr:[52,64],pot:[69,78],age:[17,22],fee:[.4,1.5],label:"Aposta"},
 F:{ovr:[48,61],pot:[63,73],age:[17,23],fee:[.15,.8],label:"Observação"}
};

function normalizeProPlayer(p,extra={}){
 let q={...p,...extra};
 q.id=q.id||Date.now()+Math.floor(Math.random()*999999);
 q.c=Number.isFinite(+q.c)?+q.c:100;
 q.v=Number.isFinite(+q.v)?+q.v:Math.max(.5,+((q.o-60)*.55).toFixed(1));
 q.salary=Number.isFinite(+q.salary)?+q.salary:+Math.max(.03,q.o*.0012).toFixed(2);
 q.contract=Number.isFinite(+q.contract)?+q.contract:3;
 q.training=q.training||"Equilibrado";
 q.attrs=q.attrs||makeAttrs(q);
 q.renewals=Number.isFinite(+q.renewals)?+q.renewals:0;
 q.stats=q.stats||{career:{apps:0,starts:0,goals:0,assists:0},season:{year:seasonYear,apps:0,starts:0,goals:0,assists:0},byComp:{}};
 q.stats.career={apps:+q.stats.career?.apps||0,starts:+q.stats.career?.starts||0,goals:+q.stats.career?.goals||0,assists:+q.stats.career?.assists||0};
 if(!q.stats.season||q.stats.season.year!==seasonYear)q.stats.season={year:seasonYear,apps:0,starts:0,goals:0,assists:0};
 q.stats.byComp=q.stats.byComp||{};
 return q;
}
players=players.map(p=>normalizeProPlayer(p));
market=market.map(p=>normalizeProPlayer(p,{contract:p.contract||3,c:100}));
scouts=scouts.map((s,i)=>{let grade=s.grade||(["C","D","E"][i%3]);let d=scoutGrades[grade];return {...s,grade,cost:d.cost,exp:s.exp||d.exp[0],days:s.days||d.minDays,maxDays:s.maxDays||d.maxDays};});
scoutReports=scoutReports.filter(r=>r&&r.player);
let selectedSlot=null,running=false,min=0,homeGoals=0,awayGoals=0,timer;
let st={poss:50,sh:0,sa:0,oh:0,oa:0,ch:0,ca:0,fh:0,fa:0,ph:0,pa:0};
let matchXI=[],matchBench=[],matchSubs=[],matchMinutes={},liveTactics={mentality:"balanced",style:"balanced",press:"medium",tempo:"normal",line:"medium"};
const $=id=>document.getElementById(id),byId=id=>players.find(p=>p.id===id),cash=v=>{v=Number(v);v=Number.isFinite(v)?v:0;return Math.abs(v)>=1000?"R$ "+(v/1000).toFixed(2).replace(".",",")+" bi":"R$ "+v.toFixed(1).replace(".",",")+" mi"};
const formationDefinitions={
 "433":{name:"4-3-3",desc:"4 defensores, 3 meias e 3 atacantes.",slots:[["GOL",50,91],["LE",15,72],["ZAG",38,73],["ZAG",62,73],["LD",85,72],["MC",28,51],["MC",50,55],["MEI",72,51],["PE",18,25],["ATA",50,17],["PD",82,25]],roles:["GK","LB","LCB","RCB","RB","LCM","DM","RCM","LW","ST","RW"]},
 "442":{name:"4-4-2",desc:"Duas linhas de quatro e uma dupla de ataque.",slots:[["GOL",50,91],["LE",15,72],["ZAG",38,73],["ZAG",62,73],["LD",85,72],["ME",16,49],["MC",39,52],["MC",61,52],["MD",84,49],["ATA",38,20],["ATA",62,20]],roles:["GK","LB","LCB","RCB","RB","LW","LCM","RCM","RW","ST","ST"]},
 "4231":{name:"4-2-3-1",desc:"Dois volantes, três meias ofensivos e um centroavante.",slots:[["GOL",50,91],["LE",15,72],["ZAG",38,73],["ZAG",62,73],["LD",85,72],["VOL",38,56],["VOL",62,56],["ME",20,37],["MEI",50,34],["MD",80,37],["ATA",50,16]],roles:["GK","LB","LCB","RCB","RB","DM","DM","LW","RCM","RW","ST"]},
 "4141":{name:"4-1-4-1",desc:"Um volante protege a defesa, com quatro meias à frente.",slots:[["GOL",50,91],["LE",15,72],["ZAG",38,73],["ZAG",62,73],["LD",85,72],["VOL",50,60],["ME",16,43],["MC",39,45],["MC",61,45],["MD",84,43],["ATA",50,17]],roles:["GK","LB","LCB","RCB","RB","DM","LW","LCM","RCM","RW","ST"]},
 "352":{name:"3-5-2",desc:"Três zagueiros, alas/meias pelos lados e dois atacantes.",slots:[["GOL",50,91],["ZAG",27,72],["ZAG",50,75],["ZAG",73,72],["ME",13,50],["VOL",37,55],["MC",50,48],["MEI",63,55],["MD",87,50],["ATA",38,19],["ATA",62,19]],roles:["GK","LCB","DM","RCB","LB","LCM","DM","RCM","RB","ST","ST"]},
 "343":{name:"3-4-3",desc:"Três defensores, quatro jogadores no meio e trio de ataque.",slots:[["GOL",50,91],["ZAG",27,72],["ZAG",50,75],["ZAG",73,72],["ME",15,51],["MC",39,53],["MC",61,53],["MD",85,51],["PE",18,24],["ATA",50,16],["PD",82,24]],roles:["GK","LCB","DM","RCB","LB","LCM","RCM","RB","LW","ST","RW"]}
};
if(!formationDefinitions[selectedFormation])selectedFormation="433";
let slots=formationDefinitions[selectedFormation].slots;
function formationPositionFit(playerPos,slotPos){
 if(playerPos===slotPos)return 12;
 const groups={
   GOL:["GOL"],ZAG:["ZAG","VOL","LD","LE"],LE:["LE","LD","ZAG"],LD:["LD","LE","ZAG"],
   VOL:["VOL","MC","ZAG","MEI"],MC:["MC","VOL","MEI"],MEI:["MEI","MC","PE","PD"],
   ME:["PE","MEI","MC","LE"],MD:["PD","MEI","MC","LD"],PE:["PE","PD","MEI","ATA"],PD:["PD","PE","MEI","ATA"],ATA:["ATA","PE","PD","MEI"]
 };
 let list=groups[slotPos]||[];let i=list.indexOf(playerPos);return i<0?-8:8-i*2;
}
function autoFitFormation(){
 let available=[...players],chosen=[];
 slots.forEach(slot=>{
   let best=available.slice().sort((a,b)=>(b.o+formationPositionFit(b.p,slot[0])+(b.c||100)*.015)-(a.o+formationPositionFit(a.p,slot[0])+(a.c||100)*.015))[0];
   if(best){chosen.push(best.id);available=available.filter(p=>p.id!==best.id)}
 });
 if(chosen.length===11)xi=chosen;
 normalizeBenchSelection();
}
function setFormation(value){
 if(!formationDefinitions[value])return;
 selectedFormation=value;slots=formationDefinitions[value].slots;selectedSlot=null;autoFitFormation();save(true);render();
 toast(`Esquema ${formationDefinitions[value].name} selecionado.`);
}
const BENCH_LIMIT=9;
function normalizeBenchSelection(){
 let eligible=players.filter(p=>!xi.includes(p.id));
 let eligibleIds=new Set(eligible.map(p=>p.id));
 benchSelection=benchSelection.filter((id,i,a)=>eligibleIds.has(id)&&a.indexOf(id)===i).slice(0,BENCH_LIMIT);
 if(benchSelection.length<BENCH_LIMIT){
   eligible.filter(p=>!benchSelection.includes(p.id)).sort((a,b)=>(b.o+b.c*.05)-(a.o+a.c*.05)).forEach(p=>{if(benchSelection.length<BENCH_LIMIT)benchSelection.push(p.id)});
 }
}
function squadStatus(p){return xi.includes(p.id)?"Titular":benchSelection.includes(p.id)?"Banco":"Não relacionado"}
function setBenchStatus(id,related){
 normalizeBenchSelection();let p=byId(id);if(!p||xi.includes(id))return;
 if(related){
   if(benchSelection.includes(id))return;
   if(benchSelection.length>=BENCH_LIMIT)return toast("O banco já possui 9 jogadores. Retire alguém antes.");
   benchSelection.push(id);toast(`${p.n} foi relacionado para o banco.`);
 }else{
   benchSelection=benchSelection.filter(x=>x!==id);toast(`${p.n} ficou fora dos relacionados.`);
 }
 save(true);render();
}
function managementPlayerHTML(p,onBench){
 let cond=Math.max(0,Math.min(100,p.c||0)),tone=cond>=80?"#65dc8e":cond>=60?"#e1c967":"#ef7b7b";
 return `<div class="management-player ${onBench?"":"unrelated-player"}"><div class=mgmt-player-pos>${p.p}</div><div class=mgmt-player-main><div class=mgmt-player-name-row><b>${p.n}</b><span class=mgmt-player-ovr>OVR ${p.o}</span></div><div class=mgmt-player-meta>${p.age} anos • Condição ${cond}% • ${cash(p.v)}</div><div class=mgmt-mini-condition><span style="width:${cond}%;background:${tone}"></span></div></div><div class=management-actions><button class="btn secondary" onclick="swap(${p.id})">Colocar no XI</button><button class="btn secondary" onclick="setBenchStatus(${p.id},${onBench?"false":"true"})">${onBench?"Não relacionar":"Relacionar"}</button></div></div>`;
}
normalizeBenchSelection();

function makeAttrs(p){let b=p.o||70,cl=(x)=>Math.max(35,Math.min(99,Math.round(x)));return {passe:cl(b+(Math.random()*12-6)),dominio:cl(b+(Math.random()*12-6)),chute:cl(b+(p.p==="ATA"?8:0)+(Math.random()*12-6)),marcacao:cl(b+((p.p==="ZAG"||p.p==="VOL")?8:-3)+(Math.random()*12-6)),velocidade:cl(b+(Math.random()*16-8)),resistencia:cl(b+(Math.random()*12-6)),drible:cl(b+((p.p==="PE"||p.p==="PD")?6:0)+(Math.random()*12-6)),posicionamento:cl(b+(Math.random()*10-5))}}

const youthTrainingTypes=["Equilibrado","Técnica","Finalização","Criação","Defesa","Físico","Velocidade","Goleiros"];
const youthIntensityTypes=["Leve","Normal","Alta"];
function normalizeYouthPlayer(p){
 p.pot=p.pot||Math.min(94,Math.max(p.o+8,74+Math.floor(Math.random()*17)));
 p.attrs=p.attrs||makeAttrs(p);p.youthTraining=p.youthTraining||"Equilibrado";p.youthIntensity=p.youthIntensity||"Normal";p.youthPerf=p.youthPerf||72;p.youthXp=p.youthXp||0;p.youthHistory=p.youthHistory||[{cycle:academyCycle,ovr:p.o,perf:p.youthPerf}];p.c=p.c||100;return p;
}
youth=youth.map(normalizeYouthPlayer);
function academyGeneralLevel(){let v=Object.values(academyFacilities);return Math.max(1,Math.min(20,Math.round(v.reduce((a,b)=>a+b,0)/v.length)))}
function academyFacilityInfo(k){
 return {pitches:["Campos & gramados","Melhora técnica e reduz perda de condição.",2.8],coaches:["Comissão de formação","Aumenta a chance de evolução de OVR e atributos.",3.4],analysis:["Análise de desempenho","Melhora rendimento, leitura de potencial e foco individual.",2.5],medical:["Saúde & recuperação","Acelera recuperação e permite treinos intensos com menor desgaste.",2.7]}[k];
}
function academyBudgetMultiplier(){return Math.max(.65,Math.min(1.75,.65+youthBudget*1.1))}
function youthTrend(p){let h=p.youthHistory||[];if(h.length<2)return 0;return h[h.length-1].ovr-h[Math.max(0,h.length-5)].ovr}
function academyAverageOvr(){return youth.length?youth.reduce((a,p)=>a+p.o,0)/youth.length:0}
function academyAveragePot(){return youth.length?youth.reduce((a,p)=>a+p.pot,0)/youth.length:0}
function academyAveragePerf(){return youth.length?youth.reduce((a,p)=>a+(p.youthPerf||0),0)/youth.length:0}
function academyFocusKeys(p){
 let m={Equilibrado:["passe","dominio","chute","marcacao","velocidade","resistencia","drible","posicionamento"],"Técnica":["passe","dominio","drible"],"Finalização":["chute","posicionamento"],"Criação":["passe","dominio","posicionamento"],"Defesa":["marcacao","posicionamento"],"Físico":["resistencia"],"Velocidade":["velocidade"],"Goleiros":["posicionamento","dominio","passe"]};return m[p.youthTraining]||m.Equilibrado;
}
function advanceAcademy(){
 academyCycle++;let budget=academyBudgetMultiplier(),coach=academyFacilities.coaches,analysis=academyFacilities.analysis,pitches=academyFacilities.pitches,medical=academyFacilities.medical;
 youth.forEach(p=>{
   normalizeYouthPlayer(p);
   let intensity=p.youthIntensity==="Alta"?1.28:p.youthIntensity==="Leve"?.78:1,ageBoost=p.age<=17?1.16:p.age<=19?1:.86,gap=Math.max(0,p.pot-p.o),potentialBoost=.72+Math.min(.75,gap/30),structure=.72+(coach+pitches+analysis)/18;
   let chance=Math.min(.62,.035*budget*intensity*ageBoost*potentialBoost*structure*(1+coach*.11));
   let old=p.o,keys=academyFocusKeys(p);
   if(gap>0&&Math.random()<chance){p.o=Math.min(p.pot,p.o+1);let gains=p.youthTraining==="Equilibrado"?1:2;for(let z=0;z<gains;z++){let key=keys[Math.floor(Math.random()*keys.length)];p.attrs[key]=Math.min(99,(p.attrs[key]||p.o)+1)}}
   let fatigue=p.youthIntensity==="Alta"?rnd(5,10):p.youthIntensity==="Leve"?rnd(1,3):rnd(3,6),recovery=2+medical*2+Math.floor(pitches/2);p.c=Math.max(55,Math.min(100,p.c-fatigue+recovery));
   let development=(p.o-old)*15,fit=(p.c-70)*.18,noise=rnd(-5,5),focus=analysis*1.4;p.youthPerf=Math.round(Math.max(45,Math.min(99,68+development+fit+focus+noise)));
   p.youthXp=(p.youthXp||0)+(p.youthPerf/100)*intensity;
   p.youthHistory.push({cycle:academyCycle,ovr:p.o,perf:p.youthPerf});if(p.youthHistory.length>24)p.youthHistory=p.youthHistory.slice(-24);
 });
 let avg=academyAverageOvr(),perf=academyAveragePerf();academyHistory.push({cycle:academyCycle,ovr:+avg.toFixed(2),perf:+perf.toFixed(1),count:youth.length});if(academyHistory.length>30)academyHistory=academyHistory.slice(-30);
}
function generateAcademyProspect(){
 let pos=positions[Math.floor(Math.random()*positions.length)],quality=academyGeneralLevel()+academyFacilities.coaches+academyFacilities.analysis,b=53+Math.floor(quality*1.1)+rnd(0,5),pot=Math.min(96,72+academyGeneralLevel*3+rnd(0,10));
 let p={id:Date.now()+rnd(1000,999999),n:firstNames[rnd(0,firstNames.length-1)]+" "+lastNames[rnd(0,lastNames.length-1)],p:pos,age:rnd(15,18),o:Math.min(pot-5,b),pot,c:100,v:+Math.max(.4,(b-50)*.12).toFixed(1)};
 return normalizeYouthPlayer(p);
}
function capacity(){
 let lv=Math.max(1,Math.min(20,stadium.stands||1));
 if(lv<=5)return 18000+(lv-1)*8000;
 return Math.min(100000,50000+Math.round(((lv-5)*(50000/15))/500)*500);
}
function attendanceRate(){
 let priceFactor=Math.max(.45,Math.min(1.08,1.08-(ticketPrice-55)/260)),fanDemand=Math.max(.62,Math.min(1.05,.72+fans/85000)),stadiumBoost=1+(stadium.facilities-1)*.018;
 return Math.max(.38,Math.min(1,priceFactor*fanDemand*stadiumBoost));
}
function projectedAttendanceCount(){return Math.round(capacity()*attendanceRate())}
function ticketRevenue(){return +(projectedAttendanceCount()*ticketPrice/1000000*(1+(stadium.vip-1)*.05)).toFixed(3)}
function shirtSalesProjection(g=currentGame(),won=false){
 let priceDemand=Math.max(.35,Math.min(1.35,1.18-(shirtPrice-160)/420)),rep=commercialScore()/100,gameBoost=g&&(/Mundial|Continental|Final/.test(`${g.comp} ${g.stage}`))?1.28:1,winBoost=won?1.12:1;
 let units=Math.max(45,Math.round(fans*.018*priceDemand*(.72+rep*.55)*gameBoost*winBoost)),unitMargin=Math.max(15,shirtPrice-72);
 return{units,revenue:+(units*unitMargin/1000000).toFixed(3)};
}

function makeEmptyTable(clubs){return clubs.map(n=>({n,j:0,v:0,e:0,d:0,gp:0,gc:0,pts:0}))}
function seasonLabel(){return `${seasonYear}/${String(seasonYear+1).slice(-2)}`}
function isoDatePlus(base,days){let d=new Date(base+"T12:00:00");d.setDate(d.getDate()+days);return d.toISOString().slice(0,10)}
function roundRobin(clubs){
 let a=[...clubs],rounds=[];
 for(let r=0;r<a.length-1;r++){
   let pairs=[];for(let i=0;i<a.length/2;i++){let h=a[i],v=a[a.length-1-i];if(r%2)[h,v]=[v,h];pairs.push([h,v])}
   rounds.push(pairs);a=[a[0],a[a.length-1],...a.slice(1,-1)]
 }
 return rounds;
}
function cupOpponentPool(){return [...new Set([...serieAClubs,...serieBClubs])].filter(n=>n!==CONTROLLED_CLUB)}
function internationalOpponents(){return ["Buenos Aires FC","Deportivo Plata","Santiago Condors","Montevideo Stars","Andes FC","Rosario Unido","Lima Imperial","Quito Azul","Bogotá Capital","Asunción Guaraní","Caribe United","Córdoba Athletic"]}
function worldOpponents(){return ["London Royals","Madrid Galaxy","Milano Rosso","München Rot","Paris Étoile","Tokyo Phoenix","Miami Waves","Lisboa Águias","Buenos Aires FC","Osaka Stars"]}
function randomUnique(pool,count){let a=[...pool].sort(()=>Math.random()-.5);return a.slice(0,count)}
function groupClubsFromSchedule(comp){
 let clubs=[CONTROLLED_CLUB,...schedule.filter(g=>g.comp===comp&&g.groupStage).map(g=>g.opp)];
 return [...new Set(clubs)].slice(0,4);
}
function addTwoLegTie(games,seqRef,base,comp,stage,opp,day1,day2,homeFirst,tieId){
 games.push({id:seqRef.v++,date:isoDatePlus(base,day1),comp,stage:`${stage} • Ida`,roundName:stage,knockout:true,twoLegged:true,leg:1,decisive:false,tieId,opp,home:homeFirst,played:false,hg:null,ag:null});
 games.push({id:seqRef.v++,date:isoDatePlus(base,day2),comp,stage:`${stage} • Volta`,roundName:stage,knockout:true,twoLegged:true,leg:2,decisive:true,tieId,opp,home:!homeFirst,played:false,hg:null,ag:null});
}
function addContinentalSchedule(games,seqRef,base,comp,offset=0){
 let groupOpp=randomUnique(internationalOpponents(),3);
 for(let r=0;r<6;r++){
   let opp=groupOpp[r%3],returnLeg=r>=3;
   games.push({id:seqRef.v++,date:isoDatePlus(base,96+offset+r*21),comp,stage:`Fase de grupos • J${r+1}`,groupStage:true,groupRound:r+1,opp,home:returnLeg,played:false,hg:null,ag:null});
 }
}
function buildSeasonSchedule(){
 let clubs=clubDivision==="A"?serieAClubs:serieBClubs,leagueRounds=roundRobin(clubs),games=[],base=`${seasonYear}-01-10`,seqRef={v:1};
 // Estadual: apenas fase classificatória no início.
 let stateRounds=roundRobin(stateClubs);
 for(let r=0;r<11;r++){
   let pair=stateRounds[r].find(p=>p.includes(CONTROLLED_CLUB));if(!pair)continue;
   let home=pair[0],away=pair[1],opp=home===CONTROLLED_CLUB?away:home;
   games.push({id:seqRef.v++,date:isoDatePlus(base,r*7),comp:stateCompetitionName(),stage:`Fase classificatória • Rodada ${r+1}`,stateLeague:true,stateRound:r+1,opp,home:home===CONTROLLED_CLUB,played:false,hg:null,ag:null});
 }
 // Brasileirão.
 for(let leg=0;leg<2;leg++)for(let r=0;r<19;r++){
   let pair=leagueRounds[r].find(p=>p.includes(CONTROLLED_CLUB));if(!pair)continue;
   let home=leg===0?pair[0]:pair[1],away=leg===0?pair[1]:pair[0],opp=home===CONTROLLED_CLUB?away:home;
   games.push({id:seqRef.v++,date:isoDatePlus(base,112+(leg*19+r)*7),comp:`Liga Brasileira Série ${clubDivision}`,stage:`Rodada ${leg*19+r+1}`,round:leg*19+r+1,opp,home:home===CONTROLLED_CLUB,played:false,hg:null,ag:null});
 }
 // Copa Nacional: somente a 1ª fase. As demais surgem após cada classificação.
 let firstCupOpp=randomUnique(cupOpponentPool(),1)[0];
 addTwoLegTie(games,seqRef,base,"Copa Nacional do Brasil","1ª fase",firstCupOpp,132,139,true,"CUP|R1");
 // Continentais: somente a fase de grupos. Mata-mata é criado após terminar no top 2.
 if(qualifiedContinental)addContinentalSchedule(games,seqRef,base,"Copa Continental Sul-Americana",0);
 if(qualifiedSecondary)addContinentalSchedule(games,seqRef,base,"Copa Continental Secundária",4);
 // Mundial: somente fase de grupos no começo.
 if(qualifiedWorld){
   let opp=randomUnique(worldOpponents(),3),defs=[["Fase de grupos • J1",238],["Fase de grupos • J2",245],["Fase de grupos • J3",252]];
   defs.forEach((x,i)=>games.push({id:seqRef.v++,date:isoDatePlus(base,x[1]),comp:"Mundial de Clubes",stage:x[0],worldGroup:true,groupRound:i+1,opp:opp[i],home:i%2===1,played:false,hg:null,ag:null}));
 }
 games.sort((a,b)=>a.date.localeCompare(b.date)||a.id-b.id);games.forEach((g,i)=>g.id=i+1);return games;
}
function scheduleBase(){return `${seasonYear}-01-10`}
function nextScheduleId(){return Math.max(0,...schedule.map(g=>+g.id||0))+1}
function sortSchedule(){
 schedule.sort((a,b)=>a.date.localeCompare(b.date)||(+a.id||0)-(+b.id||0));
 schedule.forEach((g,i)=>g.id=i+1);
}
function usedOpponents(comp){return new Set(schedule.filter(g=>g.comp===comp).map(g=>g.opp))}
function pickProgressionOpponent(comp,pool){
 let used=usedOpponents(comp),available=pool.filter(x=>!used.has(x));
 return randomUnique(available.length?available:pool,1)[0];
}
function appendTwoLegTie(comp,stage,opp,day1,day2,homeFirst,tieId){
 if(schedule.some(g=>g.comp===comp&&g.tieId===tieId))return;
 let seqRef={v:nextScheduleId()};addTwoLegTie(schedule,seqRef,scheduleBase(),comp,stage,opp,day1,day2,homeFirst,tieId);sortSchedule();
}
function appendSingleFinal(comp,opp,day,tieId){
 if(schedule.some(g=>g.comp===comp&&g.tieId===tieId))return;
 schedule.push({id:nextScheduleId(),date:isoDatePlus(scheduleBase(),day),comp,stage:"Final",roundName:"Final",knockout:true,twoLegged:false,leg:1,decisive:true,tieId,opp,home:true,played:false,hg:null,ag:null});sortSchedule();
}
function advanceCupRound(round){
 let cfg={"1ª fase":["Oitavas de final",174,181,false,"CUP|R16"],"Oitavas de final":["Quartas de final",216,223,true,"CUP|QF"],"Quartas de final":["Semifinal",258,265,false,"CUP|SF"],"Semifinal":["Final",300,307,true,"CUP|F"]}[round];
 if(!cfg)return null;let opp=pickProgressionOpponent("Copa Nacional do Brasil",cupOpponentPool());
 appendTwoLegTie("Copa Nacional do Brasil",cfg[0],opp,cfg[1],cfg[2],cfg[3],cfg[4]);return{stage:cfg[0],opp};
}
function advanceContinentalRound(comp,round){
 let offset=comp==="Copa Continental Secundária"?4:0,opp=pickProgressionOpponent(comp,internationalOpponents());
 if(round==="Oitavas de final"){appendTwoLegTie(comp,"Quartas de final",opp,254+offset,261+offset,true,`${comp}|QF`);return{stage:"Quartas de final",opp}}
 if(round==="Quartas de final"){appendTwoLegTie(comp,"Semifinal",opp,282+offset,289+offset,false,`${comp}|SF`);return{stage:"Semifinal",opp}}
 if(round==="Semifinal"){appendSingleFinal(comp,opp,310+offset,`${comp}|F`);return{stage:"Final",opp}}
 return null;
}
function syncBrazilWorld(){
 worldDB["Brasil"].leagues["Liga Brasileira Série A"]=[...serieAClubs];worldDB["Brasil"].leagues["Liga Brasileira Série B"]=[...serieBClubs];
 worldTables["Brasil|Liga Brasileira Série A"]=clubDivision==="A"?standings:otherStandings;
 worldTables["Brasil|Liga Brasileira Série B"]=clubDivision==="B"?standings:otherStandings;
}
function competitionMigration(){
 let version=localStorage.getItem("ufm9_competitionRules");
 if(version==="progressive-v4")return;
 let played=schedule.filter(g=>g.played).length;
 if(played===0){
   stateAlive=true;stateChampion=false;cupAlive=true;continentalAlive=true;secondaryAlive=true;worldAlive=true;
   stateStandings=makeEmptyTable(stateClubs);Object.keys(clubStateChampionships).filter(c=>c!=="SP").forEach(c=>worldStateTables[c]=makeEmptyTable(clubStateChampionships[c].clubs));schedule=buildSeasonSchedule();gameIndex=0;
   continentalGroupTable=makeEmptyTable(groupClubsFromSchedule("Copa Continental Sul-Americana"));
   secondaryGroupTable=makeEmptyTable(groupClubsFromSchedule("Copa Continental Secundária"));
 }else{
   // Preserva tudo o que já foi jogado e remove apenas fases futuras que ainda não foram conquistadas.
   let allowed=new Set(),playedGames=schedule.filter(g=>g.played);playedGames.forEach(g=>allowed.add(g.id));
   schedule.filter(g=>g.stateLeague||g.groupStage||g.worldGroup||g.comp===currentLeagueName()).forEach(g=>allowed.add(g.id));
   // Copa: mantém a fase atual/seguinte somente se a anterior já foi vencida.
   let cupOrder=[["1ª fase",null],["Oitavas de final","CUP|0"],["Quartas de final","CUP|1"],["Semifinal","CUP|2"],["Final","CUP|3"]];
   let oldTieWon=tie=>{let legs=schedule.filter(x=>x.tieId===tie&&x.played);if(legs.length<2)return false;let a=legs.find(x=>x.leg===1),b=legs.find(x=>x.leg===2);if(!a||!b)return false;let n=(a.home?a.hg:a.ag)+(b.home?b.hg:b.ag),r=(a.home?a.ag:a.hg)+(b.home?b.ag:b.hg);return n>r||(n===r&&b.penaltyWinner===CONTROLLED_CLUB)};
   cupOrder.forEach(([round,prev],i)=>{let earned=i===0||oldTieWon(prev);if(earned)schedule.filter(g=>g.comp==="Copa Nacional do Brasil"&&g.roundName===round).forEach(g=>allowed.add(g.id))});
   let stateQualified=stateStandings.some(x=>x.n===CONTROLLED_CLUB&&x.j>=11)&&sortedCompetitionTable(stateStandings).slice(0,4).some(x=>x.n===CONTROLLED_CLUB);
   if(stateQualified)schedule.filter(g=>g.isStateCompetition(g.comp)&&g.roundName==="Semifinal").forEach(g=>allowed.add(g.id));
   if(oldTieWon("STATE|SF"))schedule.filter(g=>g.isStateCompetition(g.comp)&&g.roundName==="Final").forEach(g=>allowed.add(g.id));
   [ ["Copa Continental Sul-Americana",continentalGroupTable],["Copa Continental Secundária",secondaryGroupTable] ].forEach(([comp,table])=>{
     let groupDone=table.some(x=>x.n===CONTROLLED_CLUB&&x.j>=6),groupOK=groupDone&&sortedCompetitionTable(table).slice(0,2).some(x=>x.n===CONTROLLED_CLUB);
     if(groupOK)schedule.filter(g=>g.comp===comp&&g.roundName==="Oitavas de final").forEach(g=>allowed.add(g.id));
     if(oldTieWon(`${comp}|R16`))schedule.filter(g=>g.comp===comp&&g.roundName==="Quartas de final").forEach(g=>allowed.add(g.id));
     if(oldTieWon(`${comp}|QF`))schedule.filter(g=>g.comp===comp&&g.roundName==="Semifinal").forEach(g=>allowed.add(g.id));
     if(oldTieWon(`${comp}|SF`))schedule.filter(g=>g.comp===comp&&g.roundName==="Final").forEach(g=>allowed.add(g.id));
   });
   let current=schedule[gameIndex],key=current?`${current.date}|${current.comp}|${current.stage}|${current.opp}`:"";
   schedule=schedule.filter(g=>allowed.has(g.id));sortSchedule();
   let ni=schedule.findIndex(g=>`${g.date}|${g.comp}|${g.stage}|${g.opp}`===key);gameIndex=ni>=0?ni:schedule.filter(g=>g.played).length;
   addNews("club","Progressão das competições corrigida","Fases futuras não conquistadas foram removidas. Agora cada nova fase aparece somente após a classificação.","Competições");
 }
 localStorage.setItem("ufm9_competitionRules","progressive-v4");syncBrazilWorld();
}
function currentLeagueName(){return `Liga Brasileira Série ${clubDivision}`}
function tableForBrazilLeague(name){if(name==="Liga Brasileira Série A")return clubDivision==="A"?standings:otherStandings;if(name==="Liga Brasileira Série B")return clubDivision==="B"?standings:otherStandings;return null}
function simulateTableRound(table,clubs,round){
 let rounds=roundRobin(clubs),leg=round>19?1:0,idx=(round-1)%19,pairs=rounds[idx]||[];
 pairs.forEach(pair=>{let h=leg===0?pair[0]:pair[1],a=leg===0?pair[1]:pair[0];if(h===CONTROLLED_CLUB||a===CONTROLLED_CLUB)return;let hg=Math.floor(Math.random()*4),ag=Math.floor(Math.random()*4);updateTableClub(table,h,hg,ag);updateTableClub(table,a,ag,hg)});
}
function simulateOtherDivisionRound(round){
 let table=otherStandings,clubs=otherLeagueClubs,rounds=roundRobin(clubs),leg=round>19?1:0,idx=(round-1)%19,pairs=rounds[idx]||[];
 pairs.forEach(pair=>{let h=leg===0?pair[0]:pair[1],a=leg===0?pair[1]:pair[0],hg=Math.floor(Math.random()*4),ag=Math.floor(Math.random()*4);updateTableClub(table,h,hg,ag);updateTableClub(table,a,ag,hg)});
}
function updateTableClub(table,name,gf,ga){let t=table.find(x=>x.n===name);if(!t)return;t.j++;t.gp+=gf;t.gc+=ga;if(gf>ga){t.v++;t.pts+=3}else if(gf===ga){t.e++;t.pts++}else t.d++}
function eliminateFuture(comp){
 schedule=schedule.filter((g,i)=>i<=gameIndex||g.comp!==comp||g.played);
}
function sortedCompetitionTable(table){return [...table].sort((a,b)=>b.pts-a.pts||(b.gp-b.gc)-(a.gp-a.gc)||b.gp-a.gp)}
function simulateMiniTableMatch(table,a,b){let ag=rnd(0,3),bg=rnd(0,3);updateTableClub(table,a,ag,bg);updateTableClub(table,b,bg,ag)}
function processStateLeagueResult(g,nova,rival){
 updateTableClub(stateStandings,CONTROLLED_CLUB,nova,rival);updateTableClub(stateStandings,g.opp,rival,nova);
 let rounds=roundRobin(stateClubs),pairs=rounds[(g.stateRound||1)-1]||[];
 pairs.filter(p=>!p.includes(CONTROLLED_CLUB)).forEach(p=>simulateMiniTableMatch(stateStandings,p[0],p[1]));
 if(g.stateRound===11){
   let sorted=sortedCompetitionTable(stateStandings),top4=sorted.slice(0,4).map(x=>x.n),pos=top4.indexOf(CONTROLLED_CLUB);
   if(pos<0){
     stateAlive=false;
     addNews("club","Nova FC eliminado do Estadual","O clube terminou a fase classificatória fora do G4 e só disputará uma nova edição na próxima temporada.","Estadual");
   }else{
     let opponent=pos===0?top4[3]:pos===1?top4[2]:pos===2?top4[1]:top4[0];
     appendTwoLegTie("Campeonato Estadual","Semifinal",opponent,80,87,false,"STATE|SF");
     addNews("club","Nova FC classificado à semifinal do Estadual",`O clube terminou a fase classificatória em ${sorted.findIndex(x=>x.n===CONTROLLED_CLUB)+1}º. A semifinal contra ${opponent} foi adicionada ao calendário.`,"Estadual");
   }
 }
}
function processContinentalGroupResult(g,nova,rival){
 let table=g.comp==="Copa Continental Sul-Americana"?continentalGroupTable:secondaryGroupTable;
 updateTableClub(table,CONTROLLED_CLUB,nova,rival);updateTableClub(table,g.opp,rival,nova);
 let clubs=table.map(x=>x.n),others=clubs.filter(x=>x!==CONTROLLED_CLUB&&x!==g.opp);
 if(others.length>=2)simulateMiniTableMatch(table,others[0],others[1]);
 if(g.groupRound===6){
   let sorted=sortedCompetitionTable(table),top2=sorted.slice(0,2).map(x=>x.n),qualified=top2.includes(CONTROLLED_CLUB),pos=sorted.findIndex(x=>x.n===CONTROLLED_CLUB)+1;
   if(!qualified){
     if(g.comp==="Copa Continental Sul-Americana")continentalAlive=false;else secondaryAlive=false;
     addNews("world","Nova FC eliminado na fase de grupos",`O clube terminou o grupo em ${pos}º. A competição acabou para o Nova FC nesta edição.`,"Continental");
   }else{
     let opponent=pickProgressionOpponent(g.comp,internationalOpponents()),offset=g.comp==="Copa Continental Secundária"?4:0;
     appendTwoLegTie(g.comp,"Oitavas de final",opponent,226+offset,233+offset,false,`${g.comp}|R16`);
     addNews("world","Nova FC avança às oitavas",`${pos}º lugar no grupo. O confronto contra ${opponent} foi adicionado ao calendário.`,"Continental");
   }
 }
}
function knockoutDecision(g,nova,rival){
 if(!g.knockout)return{decided:false,novaWon:false};
 if(g.twoLegged&&g.leg===1)return{decided:false,novaWon:false};
 let aggNova=nova,aggRival=rival;
 if(g.twoLegged&&g.leg===2){
   let first=schedule.find(x=>x.tieId===g.tieId&&x.leg===1&&x.played);
   if(first){aggNova+=(first.home?first.hg:first.ag);aggRival+=(first.home?first.ag:first.hg)}
 }
 let penaltyWinner=null;
 if(aggNova===aggRival){
   let ourStrength=xi.map(byId).filter(Boolean).reduce((a,p)=>a+p.o,0)/Math.max(1,xi.length),chance=Math.max(.35,Math.min(.65,.50+(ourStrength-78)*.012));
   penaltyWinner=Math.random()<chance?CONTROLLED_CLUB:g.opp;g.penaltyWinner=penaltyWinner;
   addNews("club",`Decisão por pênaltis: ${penaltyWinner} avança`,`${g.comp} • ${g.roundName||g.stage}: agregado ${aggNova} × ${aggRival}.`,"Pênaltis");
 }
 return{decided:true,novaWon:aggNova>aggRival||(aggNova===aggRival&&penaltyWinner===CONTROLLED_CLUB),aggNova,aggRival,penaltyWinner};
}
function prepareNextStateFinal(){
 let sf=schedule.find(x=>x.isStateCompetition(g.comp)&&x.tieId==="STATE|SF"&&x.leg===2),semiOpp=sf?.opp;
 let candidates=sortedCompetitionTable(stateStandings).slice(0,4).map(x=>x.n).filter(x=>x!==CONTROLLED_CLUB&&x!==semiOpp);
 let finalOpp=candidates[0]||stateClubs.find(x=>x!==CONTROLLED_CLUB&&x!==semiOpp)||"Atlético Azul";
 appendTwoLegTie("Campeonato Estadual","Final",finalOpp,94,101,true,"STATE|F");return finalOpp;
}
function processCompetitionResult(g,nova,rival){
 if(g.stateLeague){processStateLeagueResult(g,nova,rival);return}
 if(g.groupStage&&(g.comp==="Copa Continental Sul-Americana"||g.comp==="Copa Continental Secundária")){processContinentalGroupResult(g,nova,rival);return}
 if(g.worldGroup){
   if(g.groupRound===3){
     let played=schedule.filter(x=>x.comp==="Mundial de Clubes"&&x.worldGroup&&x.played),wins=played.filter(x=>(x.home?x.hg:x.ag)>(x.home?x.ag:x.hg)).length;
     if(wins>=2){
       let opponent=pickProgressionOpponent("Mundial de Clubes",worldOpponents());
       schedule.push({id:nextScheduleId(),date:isoDatePlus(scheduleBase(),273),comp:"Mundial de Clubes",stage:"Semifinal",roundName:"Semifinal",knockout:true,twoLegged:false,leg:1,decisive:true,tieId:"WORLD|SF",opp:opponent,home:true,played:false,hg:null,ag:null});sortSchedule();
       addNews("world","Nova FC avança à semifinal do Mundial",`A semifinal contra ${opponent} foi adicionada ao calendário.`,"Mundial");
     }else{worldAlive=false;addNews("world","Nova FC eliminado do Mundial","A campanha terminou na fase de grupos. O clube só poderá voltar em uma futura edição após nova classificação.","Mundial")}
   }
   return;
 }
 if(!g.knockout)return;
 let decision=knockoutDecision(g,nova,rival);if(!decision.decided)return;
 let novaWon=decision.novaWon,round=g.roundName||g.stage,agg=`${decision.aggNova} × ${decision.aggRival}`;
 if(g.isStateCompetition(g.comp)){
   if(round==="Semifinal"){
     if(!novaWon){stateAlive=false;addNews("club","Nova FC eliminado no Estadual",`${g.opp} venceu a semifinal no agregado por ${agg}. A participação termina nesta edição.`,"Estadual")}
     else{let finalOpp=prepareNextStateFinal();addNews("club","Nova FC está na final do Estadual",`Classificação pelo agregado de ${agg}. A final contra ${finalOpp} foi adicionada ao calendário.`,"Estadual")}
   }
   if(round==="Final"){
     stateChampion=novaWon;stateAlive=false;
     if(stateChampion){awardTrophy("Campeonato Estadual","national","🏟️",4,"Campeão estadual");addNews("club","🏟️ Nova FC é campeão estadual!",`Título conquistado no agregado de ${agg}, com premiação de R$ 4,0 mi.`,"Título estadual")}
     else addNews("club","Nova FC fica com o vice estadual",`A final terminou ${agg} no agregado. A competição está encerrada nesta temporada.`,"Estadual");
   }
 }
 if(g.comp==="Copa Nacional do Brasil"){
   if(!novaWon){
     cupAlive=false;addNews("club","Nova FC eliminado da Copa Nacional",`${g.opp} venceu o confronto por ${agg} no agregado. O clube só volta na próxima edição.`,"Copa Nacional");
   }else if(round==="Final"){
     nationalCupChampion=true;cupAlive=false;awardTrophy("Copa Nacional do Brasil","national","🏆",8,"Campeão da copa nacional");addNews("club","🏆 Nova FC é campeão da Copa Nacional!",`Título conquistado no agregado de ${agg}. A taça garante vaga na próxima Copa Continental e R$ 8,0 mi.`,"Título");
   }else{
     let next=advanceCupRound(round);if(next)addNews("club",`Nova FC avança para ${next.stage}`,`Vitória no agregado por ${agg}. O confronto contra ${next.opp} foi adicionado ao calendário.`,"Copa Nacional");
   }
 }
 if(g.comp==="Copa Continental Sul-Americana"||g.comp==="Copa Continental Secundária"){
   let principal=g.comp==="Copa Continental Sul-Americana";
   if(!novaWon){
     if(principal)continentalAlive=false;else secondaryAlive=false;
     addNews("world",`Nova FC eliminado de ${g.comp}`,`${g.opp} venceu o confronto por ${agg}. O clube só poderá disputar uma nova edição se conseguir classificação na próxima temporada.`,principal?"Continental":"Continental 2");
   }else if(round==="Final"){
     if(principal){continentalChampion=true;continentalAlive=false;awardTrophy("Copa América Cup","continental","🌎",18,"Campeão continental principal");addNews("world","🌎 Nova FC conquista a Copa Continental!","O título garante o Mundial e uma premiação de R$ 18,0 mi.","Título continental")}
     else{secondaryChampion=true;secondaryAlive=false;awardTrophy("Copa Continental Secundária","continental","🥈",10,"Campeão do segundo continental");addNews("world","🏆 Nova FC conquista a Sul-America Cup!","O clube conquista o segundo torneio continental e R$ 10,0 mi em premiação.","Título continental")}
   }else{
     let next=advanceContinentalRound(g.comp,round);if(next)addNews("world",`Nova FC avança para ${next.stage}`,`Vitória no agregado por ${agg}. O confronto contra ${next.opp} foi adicionado ao calendário.`,"Continental");
   }
 }
 if(g.comp==="Mundial de Clubes"){
   if(!novaWon){worldAlive=false;addNews("world","Nova FC eliminado do Mundial",`${g.opp} venceu o confronto. O clube só poderá voltar após nova classificação.`,"Mundial")}
   else if(round==="Semifinal"){
     let opponent=pickProgressionOpponent("Mundial de Clubes",worldOpponents());
     schedule.push({id:nextScheduleId(),date:isoDatePlus(scheduleBase(),287),comp:"Mundial de Clubes",stage:"Final",roundName:"Final",knockout:true,twoLegged:false,leg:1,decisive:true,tieId:"WORLD|F",opp:opponent,home:true,played:false,hg:null,ag:null});sortSchedule();
     addNews("world","Nova FC está na final do Mundial",`A decisão contra ${opponent} foi adicionada ao calendário.`,"Mundial");
   }else if(round==="Final"){worldAlive=false;awardTrophy("Mundial de Clubes","world","🌐",25,"Campeão mundial");addNews("world","🌐 Nova FC é campeão mundial!","O clube conquista o Mundial de Clubes e R$ 25,0 mi em premiação.","Campeão mundial")}
 }
}
function seasonFinished(){return schedule.length>0&&schedule.every(g=>g.played)}
function finalizeSeasonData(){
 let aTable=clubDivision==="A"?standings:otherStandings,bTable=clubDivision==="B"?standings:otherStandings;
 let aSorted=[...aTable].sort((a,b)=>b.pts-a.pts||(b.gp-b.gc)-(a.gp-a.gc)||b.gp-a.gp),bSorted=[...bTable].sort((a,b)=>b.pts-a.pts||(b.gp-b.gc)-(a.gp-a.gc)||b.gp-a.gp);
 let top5=aSorted.slice(0,5).map(x=>x.n),secondary5=aSorted.slice(5,10).map(x=>x.n),relegated=aSorted.slice(-4).map(x=>x.n),promoted=bSorted.slice(0,4).map(x=>x.n);
 return {aSorted,bSorted,top5,secondary5,relegated,promoted};
}

function rolloverWorldLeagues(){
 Object.keys(worldDB).forEach(country=>{
   if(country==="Brasil")return;
   let leagues=Object.keys(worldDB[country].leagues);if(leagues.length<2)return;
   let l1=leagues[0],l2=leagues[1],t1=seededWorldTable(country,l1),t2=seededWorldTable(country,l2);
   let s1=[...t1].sort((a,b)=>b.pts-a.pts||(b.gp-b.gc)-(a.gp-a.gc)||b.gp-a.gp),s2=[...t2].sort((a,b)=>b.pts-a.pts||(b.gp-b.gc)-(a.gp-a.gc)||b.gp-a.gp);
   let relegated=s1.slice(-4).map(x=>x.n),promoted=s2.slice(0,4).map(x=>x.n);
   worldDB[country].leagues[l1]=worldDB[country].leagues[l1].filter(n=>!relegated.includes(n)).concat(promoted);
   worldDB[country].leagues[l2]=worldDB[country].leagues[l2].filter(n=>!promoted.includes(n)).concat(relegated);
   worldTables[country+"|"+l1]=makeEmptyTable(worldDB[country].leagues[l1]);
   worldTables[country+"|"+l2]=makeEmptyTable(worldDB[country].leagues[l2]);
 });
 localStorage.setItem("ufm9_worldLeagueClubs",JSON.stringify(worldLeagueSnapshot()));
}
function startNextSeason(auto=false){
 if(!seasonFinished())return toast("A temporada ainda não terminou.");
 let finishedSeason=seasonLabel();
 awardIndividualSeasonHonors();
 let data=finalizeSeasonData(),wasDivision=clubDivision;
 let leagueFinal=wasDivision==="A"?data.aSorted:data.bSorted,leaguePos=leagueFinal.findIndex(x=>x.n===CONTROLLED_CLUB)+1;
 if(wasDivision==="A"&&data.aSorted[0])addChampionHistory("Liga Brasileira Série A","Liga Brasileira",finishedSeason,data.aSorted[0].n);
 if(continentalChampion)addChampionHistory("Copa Continental Sul-Americana","América Cup",finishedSeason,CONTROLLED_CLUB);
 if(qualifiedWorld&&!worldAlive)addChampionHistory("Mundial de Clubes","Mundial de Clubes",finishedSeason,CONTROLLED_CLUB);
 if(leaguePos===1){if(wasDivision==="A")awardTrophy("Liga Brasileira Série A","national","🏆",15,"Campeão da primeira divisão");else awardTrophy("Liga Brasileira Série B","national","🥇",6,"Campeão da segunda divisão")}
 else {let placementPrize=wasDivision==="A"?Math.max(1,7-leaguePos*.35):Math.max(.5,3.5-leaguePos*.15);recordFinance(+placementPrize.toFixed(2),"Premiações",`Premiação final da Série ${wasDivision} — ${leaguePos}º lugar`)}
 let nextContinental=data.top5.includes(CONTROLLED_CLUB)||nationalCupChampion;
 let nextSecondary=data.secondary5.includes(CONTROLLED_CLUB)&&!nextContinental,nextWorld=continentalChampion;
 serieAClubs=serieAClubs.filter(n=>!data.relegated.includes(n)).concat(data.promoted);
 serieBClubs=serieBClubs.filter(n=>!data.promoted.includes(n)).concat(data.relegated);
 clubDivision=serieAClubs.includes(CONTROLLED_CLUB)?"A":"B";rolloverWorldLeagues();seasonYear++;
 qualifiedContinental=nextContinental;qualifiedSecondary=nextSecondary;qualifiedWorld=nextWorld;nationalCupChampion=false;continentalChampion=false;secondaryChampion=false;stateChampion=false;stateAlive=true;cupAlive=true;continentalAlive=true;secondaryAlive=true;worldAlive=true;
 currentLeagueClubs=clubDivision==="A"?serieAClubs:serieBClubs;otherLeagueClubs=clubDivision==="A"?serieBClubs:serieAClubs;standings=makeEmptyTable(currentLeagueClubs);otherStandings=makeEmptyTable(otherLeagueClubs);
 stateStandings=makeEmptyTable(stateClubs);schedule=buildSeasonSchedule();continentalGroupTable=makeEmptyTable(groupClubsFromSchedule("Copa Continental Sul-Americana"));secondaryGroupTable=makeEmptyTable(groupClubsFromSchedule("Copa Continental Secundária"));gameIndex=0;players.forEach(p=>{p.age++;p.contract=Math.max(0,(p.contract||1)-1);p.c=100;ensurePlayerStats(p);p.stats.season={year:seasonYear,apps:0,starts:0,goals:0,assists:0};p.stats.byComp={}});
 addNews("world",`Temporada ${seasonLabel()} iniciada`,`Nova FC disputará a Série ${clubDivision}.${qualifiedContinental?" Classificado para a Copa América Cup.":""}${qualifiedSecondary?" Classificado para a Sul-America Cup.":""}${qualifiedWorld?" Classificado para o Mundial como campeão continental.":""}`,"Nova temporada");
 syncBrazilWorld();save(true);render();go("dashboard");
 toast(auto?`Temporada ${finishedSeason} encerrada • ${seasonLabel()} iniciada automaticamente!`:`Nova temporada iniciada • Série ${clubDivision}`);
}
function currentGame(){
 let indexed=schedule[gameIndex];
 if(indexed&&!indexed.played)return indexed;
 let next=schedule.findIndex(g=>!g.played);
 if(next>=0){gameIndex=next;return schedule[next]}
 return null;
}
function fmtDate(s){let [y,m,d]=s.split("-");return `${d}/${m}/${y}`}
function compClass(c){return c.includes("Intercontinental")||c.includes("Mundial")?"world":c.includes("Estadual")?"state":c.includes("Secundária")?"secondary":c.includes("Continental")?"cont":c.includes("Copa Nacional do Brasil")?"cup":""}
function sortedTable(){return [...standings].sort((a,b)=>b.pts-a.pts||(b.gp-b.gc)-(a.gp-a.gc)||b.gp-a.gp)}

function renderArenaVisual(){
 let el=$("arenaVisual");if(!el)return;
 let vals=[stadium.stands||1,stadium.facilities||1,stadium.lighting||1,stadium.vip||1],avg=vals.reduce((a,b)=>a+b,0)/vals.length;
 el.classList.toggle("roof-on",(stadium.stands||1)>=8);
 el.classList.toggle("vip-on",(stadium.vip||1)>=4);
 el.classList.toggle("facility-on",(stadium.facilities||1)>=6);
 let pct=Math.max(5,Math.min(100,Math.round(avg/20*100)));
 if($("arenaProgressBar"))$("arenaProgressBar").style.width=pct+"%";
 if($("arenaProgressText"))$("arenaProgressText").textContent=pct+"%";
 if($("arenaLevelBadge"))$("arenaLevelBadge").textContent="NÍVEL "+Math.round(avg);
 if($("arenaBoardCap"))$("arenaBoardCap").textContent=capacity().toLocaleString("pt-BR")+" LUGARES";
 if($("arenaPhase"))$("arenaPhase").textContent=avg>=18?"Arena de elite":avg>=12?"Arena internacional":avg>=7?"Arena moderna":"Arena em evolução";
}


function toggleUfmMenu(){
 let open=!document.body.classList.contains("ufm-menu-open");
 document.body.classList.toggle("ufm-menu-open",open);
 let b=$("ufmMenuToggle");if(b){b.setAttribute("aria-expanded",open?"true":"false");b.setAttribute("aria-label",open?"Fechar menu":"Abrir menu")}
}
function closeUfmMenu(){
 document.body.classList.remove("ufm-menu-open");
 let b=$("ufmMenuToggle");if(b){b.setAttribute("aria-expanded","false");b.setAttribute("aria-label","Abrir menu")}
}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeUfmMenu()});

function render(){
 renderArenaVisual();
 let g=currentGame(),tab=sortedTable(),pos=tab.findIndex(t=>t.n===CONTROLLED_CLUB)+1;
 $("money").textContent=cash(money);$("dashPos").textContent=pos+"º";$("dashCapacity").textContent=capacity().toLocaleString("pt-BR");$("dashDate").textContent=g?fmtDate(g.date):"Fim";
 $("seasonText").textContent=`TEMPORADA ${seasonLabel()} • SÉRIE ${clubDivision} • ${schedule.filter(x=>x.played).length}/${schedule.length} JOGOS`;
 $("nextGameBox").innerHTML=g?matchHubHTML(g):`<div class=match-hub><div class=match-hub-body><div style="grid-column:1/-1;text-align:center"><h2>Temporada ${seasonLabel()} concluída!</h2><p class=muted>A próxima temporada será iniciada automaticamente. Se este for um save antigo já encerrado, use a opção de recuperação na aba Liga.</p><button class=btn onclick="go('league')">Ver encerramento →</button></div></div></div>`;
 let recent=schedule.filter(x=>x.played).slice(-4).reverse();$("recentGames").innerHTML=recent.length?recent.map(f=>fixtureHTML(f)).join(""):`<span class=muted>Nenhum jogo disputado.</span>`;
 renderDashboardNews();
 $("calendarList").innerHTML=schedule.map((f,i)=>fixtureHTML(f,i===gameIndex)).join("");
 normalizeBenchSelection();
 $("squadTable").innerHTML=players.map(p=>{let starter=xi.includes(p.id),status=squadStatus(p);return `<tr><td><b>${p.n}</b></td><td>${starter?'<span class="starter-tag">● TITULAR</span>':status==="Banco"?'<span class="pill">BANCO</span>':'<span class="muted">Não relacionado</span>'}</td><td><span class=pill>${p.p}</span></td><td>${p.age}</td><td><b>${p.o}</b></td><td>${p.c}%</td><td>${cash(p.v)}</td><td>${cash(p.salary)}/comp.</td><td>${p.contract} temp.</td><td><div class=squad-actions><button type=button class="btn secondary" onclick="event.stopPropagation();playerDetails(${p.id})">Detalhes</button><button type=button class=renew-btn onclick="event.stopPropagation();openContractModal(${p.id})">Renovar</button><button type=button class=sell-btn onclick="event.stopPropagation();sellPlayer(${p.id})" title="${starter?'O jogo escolherá um substituto automaticamente antes da venda':'Vender jogador'}">Vender</button></div></td></tr>`}).join("");
 $("marketList").innerHTML=market.length?market.map(p=>`<div class=market-row><b>${p.n} <span class=pill>${p.p}</span></b><span>OVR ${p.o}</span><span>${p.age} anos</span><span>${cash(p.v)}</span><button class=btn onclick="buy(${p.id})">Contratar</button></div>`).join(""):`<p class=muted>Mercado sem jogadores disponíveis.</p>`;
 $("leagueTitle").textContent=`Liga Brasileira Série ${clubDivision}`;$("seasonBadge").textContent=seasonLabel();$("leagueRules").textContent=clubDivision==="A"?"20 clubes • 38 rodadas • 1º–5º: América Cup • 6º–10º: Sul-America Cup • 4 últimos rebaixados":"20 clubes • 38 rodadas • 4 primeiros sobem para a Série A";
 $("qualificationStrip").innerHTML=clubDivision==="A"?`<span class="rule-chip cont">1º–5º • América Cup</span><span class="rule-chip secondary">6º–10º • Sul-America Cup</span><span class="rule-chip cup">🏆 Copa Nacional • América Cup</span><span class="rule-chip world">🏆 América Cup • Mundial</span><span class="rule-chip down">17º–20º • Rebaixamento</span>`:`<span class="rule-chip up">1º–4º • Acesso à Série A</span><span class="rule-chip cup">🏆 Copa Nacional • América Cup</span>`;
 $("leagueTable").innerHTML=tab.map((t,i)=>{let cls=clubDivision==="A"?(i<5?"league-row-cont":i<10?"league-row-secondary":i>=16?"league-row-down":""):(i<4?"league-row-up":"");let mark=clubDivision==="A"?(i<5?' <span class=qualify>● AMÉRICA</span>':i<10?' <span class=qualify>● SUL-AM.</span>':i>=16?' <span class=relegate>● REB.</span>':''):(i<4?' <span class=qualify>● ACESSO</span>':'');return `<tr class="${cls}"><td>${i+1}${mark}</td><td><b>${t.n}</b></td><td>${t.j}</td><td>${t.v}</td><td>${t.e}</td><td>${t.d}</td><td>${t.gp}</td><td>${t.gc}</td><td>${t.gp-t.gc}</td><td><b>${t.pts}</b></td></tr>`}).join("");
 renderLeaguePlayerStats();renderChampionHistory();
 renderSeasonControl();
 slots=formationDefinitions[selectedFormation].slots;
 let formationDef=formationDefinitions[selectedFormation],xiPlayers=xi.map(byId).filter(Boolean),xiOvr=xiPlayers.length?xiPlayers.reduce((a,p)=>a+p.o,0)/xiPlayers.length:0,xiCond=xiPlayers.length?xiPlayers.reduce((a,p)=>a+(p.c||0),0)/xiPlayers.length:0;
 if($("formationSelect"))$("formationSelect").value=selectedFormation;
 if($("formationDescription"))$("formationDescription").textContent=formationDef.desc;
 if($("formationNameBig"))$("formationNameBig").textContent=formationDef.name;
 if($("managementFormationMetric"))$("managementFormationMetric").textContent=formationDef.name;
 if($("managementOvrMetric"))$("managementOvrMetric").textContent=xiOvr.toFixed(1);
 if($("managementConditionMetric"))$("managementConditionMetric").textContent=`${xiCond.toFixed(0)}%`;
 if($("managementBenchMetric"))$("managementBenchMetric").textContent=`${benchSelection.length}/${BENCH_LIMIT}`;
 let selectedInfo=selectedSlot===null?null:{slot:slots[selectedSlot],player:byId(xi[selectedSlot])};
 if($("selectedSlotHint"))$("selectedSlotHint").textContent=selectedInfo?`${selectedInfo.slot[0]} • ${selectedInfo.player?.n||"Vazio"}`:"Nenhuma posição selecionada";
 if($("selectedSlotDetail"))$("selectedSlotDetail").textContent=selectedInfo?`${selectedInfo.slot[0]} — ${selectedInfo.player?.n||"Vazio"}`:"Selecione alguém no campo";
 document.querySelectorAll("#formationPitch .slot").forEach(x=>x.remove());slots.forEach((s,i)=>{let p=byId(xi[i]),cond=Math.max(0,Math.min(100,p?.c||0)),tone=cond>=80?"#65dc8e":cond>=60?"#e1c967":"#ef7b7b",d=document.createElement("div");d.className="slot"+(selectedSlot===i?" selected":"");d.style=`left:${s[1]}%;top:${s[2]}%`;d.innerHTML=`<div class=mgmt-slot-card><div class=mgmt-slot-top><span class=mgmt-pos>${s[0]}</span><span class=mgmt-ovr>${p?p.o:"—"}</span></div><div class=mgmt-player-name>${p?p.n:"Vazio"}</div><div class=mgmt-condition><div class=mgmt-condition-track><div class=mgmt-condition-fill style="width:${cond}%;background:${tone}"></div></div><small>${cond}%</small></div></div>`;d.onclick=()=>{selectedSlot=i;render()};$("formationPitch").appendChild(d)});
 let benchPlayers=benchSelection.map(byId).filter(Boolean),unrelatedPlayers=players.filter(p=>!xi.includes(p.id)&&!benchSelection.includes(p.id)).sort((a,b)=>b.o-a.o);
 $("bench").innerHTML=benchPlayers.length?benchPlayers.map(p=>managementPlayerHTML(p,true)).join(""):`<span class=muted>Nenhum jogador no banco.</span>`;
 $("unrelated").innerHTML=unrelatedPlayers.length?unrelatedPlayers.map(p=>managementPlayerHTML(p,false)).join(""):`<span class=muted>Todos os jogadores estão relacionados.</span>`;
 $("benchCount").textContent=`${benchPlayers.length}/${BENCH_LIMIT}`;$("unrelatedCount").textContent=unrelatedPlayers.length;$("squadManagementCount").textContent=`${players.length} jogadores`;if($("managementBenchMetric"))$("managementBenchMetric").textContent=`${benchPlayers.length}/${BENCH_LIMIT}`;
 renderWorld();renderManagementSystems();renderAuctions();renderStadium();renderAssistantDepartment();renderTrophies();renderCompetitions();renderMatchHeader();
}

function competitionTableHTML(table,qualifyCount=2){
 if(!table||!table.length)return `<p class=muted>Competição não disputada nesta temporada.</p>`;
 let sorted=sortedCompetitionTable(table);
 return `<div style="overflow:auto"><table class="mini-table modern"><thead><tr><th>#</th><th>Clube</th><th>J</th><th>V</th><th>E</th><th>D</th><th>SG</th><th>PTS</th></tr></thead><tbody>${sorted.map((x,i)=>`<tr class="${x.n===CONTROLLED_CLUB?"nova-row":""} ${i<qualifyCount?"qual-row":"out-row"}"><td><span class=table-pos>${i+1}</span></td><td><b>${x.n}</b>${x.n===CONTROLLED_CLUB?` <span class=pill>NOVA</span>`:""}</td><td>${x.j}</td><td>${x.v}</td><td>${x.e}</td><td>${x.d}</td><td>${x.gp-x.gc>0?"+":""}${x.gp-x.gc}</td><td><b>${x.pts}</b></td></tr>`).join("")}</tbody></table></div>`;
}
function aggregateForFixture(g){
 if(!g.twoLegged||g.leg!==2)return"";
 let first=schedule.find(x=>x.tieId===g.tieId&&x.leg===1&&x.played);if(!first||!g.played)return"";
 let n1=first.home?first.hg:first.ag,r1=first.home?first.ag:first.hg,n2=g.home?g.hg:g.ag,r2=g.home?g.ag:g.hg;
 return `Agregado ${n1+n2} × ${r1+r2}`;
}
function stageGames(comp,stage){
 if(stage==="Classificação")return schedule.filter(g=>g.comp===comp&&g.stateLeague);
 if(stage==="Grupos")return schedule.filter(g=>g.comp===comp&&(g.groupStage||g.worldGroup));
 return schedule.filter(g=>g.comp===comp&&g.knockout&&(g.roundName===stage||g.stage===stage));
}
function phaseRailHTML(comp,stages){
 return `<div class=phase-rail-wrap><div class=phase-rail>${stages.map(stage=>{let games=stageGames(comp,stage),cls=games.length?(games.every(g=>g.played)?"done":"active"):"locked",icon=cls==="done"?"✓":cls==="active"?"●":"○";return `<div class=phase-node><div class="phase-pill ${cls}"><span class=phase-check>${icon}</span>${stage}</div></div>`}).join("")}</div></div>`;
}
function groupFixturesHTML(comp){
 let list=schedule.filter(g=>g.comp===comp&&(g.groupStage||g.worldGroup||g.stateLeague));
 if(!list.length)return `<p class=muted>Nenhuma partida de grupo/classificação nesta edição.</p>`;
 let next=list.find(g=>!g.played);
 return `<div class=group-match-strip>${list.map(g=>{let novaScore=g.home?g.hg:g.ag,rivalScore=g.home?g.ag:g.hg,round=g.stateRound?`Rodada ${g.stateRound}`:g.groupRound?`Rodada ${g.groupRound}`:g.stage;return `<div class="group-match-card ${g.played?"done":next===g?"next":""}"><div class=group-match-top><span>${round}</span><span>${g.home?"Casa":"Fora"} • ${fmtDate(g.date)}</span></div><div class=group-match-score>Nova FC <strong>${g.played?`${novaScore} × ${rivalScore}`:"VS"}</strong> ${g.opp}</div></div>`}).join("")}</div>`;
}
function knockoutCardsHTML(comp){
 let games=schedule.filter(g=>g.comp===comp&&g.knockout);
 if(!games.length)return `<p class=muted>O mata-mata ainda não foi liberado para o Nova FC.</p>`;
 let stages=[];games.forEach(g=>{let s=g.roundName||g.stage;if(!stages.includes(s))stages.push(s)});
 return `<div class=knockout-stage-grid>${stages.map(stage=>{let gs=games.filter(g=>(g.roundName||g.stage)===stage).sort((a,b)=>(a.leg||1)-(b.leg||1)),active=gs.some(g=>!g.played),done=gs.every(g=>g.played),opp=gs[0]?.opp||"A definir",last=gs[gs.length-1],ag=last?aggregateForFixture(last):"";return `<div class="phase-card ${active?"active":done?"done":""}"><div class=phase-card-head><span class=phase-card-title>${stage}</span><span class=phase-card-state>${active?"EM DISPUTA":done?"CONCLUÍDA":"AGUARDANDO"}</span></div><div class=phase-opponent>Nova FC × ${opp}</div>${gs.map(g=>{let ns=g.home?g.hg:g.ag,rs=g.home?g.ag:g.hg;return `<div class=leg-line><span>${g.twoLegged?(g.leg===1?"Ida":"Volta"):"Jogo único"} • ${g.home?"Casa":"Fora"}</span><b>${g.played?`${ns} × ${rs}`:fmtDate(g.date)}</b></div>`}).join("")}${ag?`<div class=aggregate-line>${ag}</div>`:""}</div>`}).join("")}</div>`;
}
function competitionStatusText(comp,alive,champion=false){
 if(champion)return{txt:"Campeão",cls:"champion"};
 if(!alive)return{txt:"Participação encerrada",cls:"out"};
 let future=schedule.filter(g=>g.comp===comp&&!g.played);
 return{txt:future.length?`Próximo: ${future[0].stage}`:"Aguardando definição",cls:""};
}
function competitionPanelHTML({title,comp,format,alive,champion=false,stages,table=null,qualify=2,participates=true,groupLabel="Fase de grupos"}){
 if(!participates)return `<div class=competition-panel><div class=comp-panel-head><div><h3>${title}</h3><p class=muted>${format}</p></div><span class="comp-live-status out">Fora desta edição</span></div><div class=comp-body>${phaseRailHTML(comp,stages)}<p class=muted>O Nova FC não está classificado para esta competição nesta temporada.</p></div></div>`;
 let st=competitionStatusText(comp,alive,champion),hasGroup=stageGames(comp,stages[0]).length&&["Classificação","Grupos"].includes(stages[0]);
 return `<div class=competition-panel><div class=comp-panel-head><div><h3>${title}</h3><p class=muted>${format}</p></div><span class="comp-live-status ${st.cls}">${st.txt}</span></div><div class=comp-body>${phaseRailHTML(comp,stages)}${hasGroup?`<div class=comp-section-title>${groupLabel}</div><div class=group-dashboard>${table?`<div class=group-table-box><div class=group-box-head><b>Classificação</b><span>Verde = zona de classificação</span></div>${competitionTableHTML(table,qualify)}</div>`:""}<div class=group-fixtures-box><div class=group-box-head><b>Jogos do Nova FC</b><span>${stageGames(comp,stages[0]).filter(g=>g.played).length}/${stageGames(comp,stages[0]).length} disputados</span></div>${groupFixturesHTML(comp)}</div></div>`:""}<div class=comp-section-title>Mata-mata</div>${knockoutCardsHTML(comp)}</div></div>`;
}
function renderCompetitions(){
 if(!$("competitionOverview"))return;$("competitionSeasonBadge").textContent=seasonLabel();
 if($("calendarSeasonTitle"))$("calendarSeasonTitle").textContent=`Calendário & Competições • ${seasonLabel()}`;
 let principal=qualifiedContinental||schedule.some(g=>g.comp==="Copa Continental Sul-Americana"),secondary=qualifiedSecondary||schedule.some(g=>g.comp==="Copa Continental Secundária"),world=qualifiedWorld||schedule.some(g=>g.comp==="Mundial de Clubes");
 $("competitionOverview").innerHTML=[
  competitionPanelHTML({title:"Campeonato Estadual",comp:stateCompetitionName(),format:"G4 avança. Semifinal e final surgem somente quando o Nova FC conquista a vaga.",alive:stateAlive,champion:stateChampion,stages:["Classificação","Semifinal","Final"],table:stateStandings,qualify:4,groupLabel:"Fase classificatória"}),
  competitionPanelHTML({title:"Copa Nacional do Brasil",comp:"Copa Nacional do Brasil",format:"Confrontos eliminatórios em ida e volta. A próxima fase só aparece depois da classificação.",alive:cupAlive,champion:nationalCupChampion,stages:["1ª fase","Oitavas de final","Quartas de final","Semifinal","Final"]}),
  competitionPanelHTML({title:"América Cup",comp:"Copa Continental Sul-Americana",format:"Grupo de 4, com os dois primeiros avançando. Depois, mata-mata liberado fase por fase.",alive:continentalAlive,champion:continentalChampion,stages:["Grupos","Oitavas de final","Quartas de final","Semifinal","Final"],table:continentalGroupTable,qualify:2,participates:principal}),
  competitionPanelHTML({title:"Sul-America Cup",comp:"Copa Continental Secundária",format:"Grupo de 4, top 2 classifica. O caminho eliminatório é revelado conforme o clube avança.",alive:secondaryAlive,champion:secondaryChampion,stages:["Grupos","Oitavas de final","Quartas de final","Semifinal","Final"],table:secondaryGroupTable,qualify:2,participates:secondary}),
  competitionPanelHTML({title:"Mundial de Clubes",comp:"Mundial de Clubes",format:"Fase de grupos seguida por semifinal e final. Apenas fases realmente alcançadas são exibidas.",alive:worldAlive,champion:false,stages:["Grupos","Semifinal","Final"],participates:world,groupLabel:"Fase de grupos"})
 ].join("");
}
function addChampionHistory(competition,display,season,champion){
 if(!champion||champion==="—")return;let key=`${competition}|${season}`;if(championHistory.some(x=>`${x.competition}|${x.season}`===key))return;
 championHistory.unshift({competition,display,season,champion,real:false});
}
function renderChampionHistory(){
 let box=$("championHistory");if(!box)return;
 let groups=[
  ["Liga Brasileira","Liga Brasileira Série A"],
  ["América Cup","Copa Continental Sul-Americana"],
  ["Mundial de Clubes","Mundial de Clubes"]
 ];
 box.innerHTML=groups.map(([label,key])=>{let rows=championHistory.filter(x=>x.competition===key).sort((a,b)=>String(b.season).localeCompare(String(a.season))).slice(0,8);return `<div class=champ-history-col><h3>${label}</h3>${rows.length?rows.map(r=>`<div class=champion-line><span class=champion-year>${r.season}</span><span class="champion-club ${r.champion===CONTROLLED_CLUB?"champion-current":""}">${r.champion}</span><span class=champion-source>${r.real?"Histórico real":"Carreira"}</span></div>`).join(""):`<p class=muted>Sem registros.</p>`}</div>`}).join("");
}
function renderSeasonControl(){
 let box=$("seasonControl");if(!box)return;let pos=sortedTable().findIndex(x=>x.n===CONTROLLED_CLUB)+1;
 let status=clubDivision==="A"?(pos<=5?"Zona do América Cup":pos<=10?"Zona do Sul-America Cup":pos>=17?"Zona de rebaixamento":"Permanência na Série A"):(pos<=4?"Zona de acesso":"Disputa da Série B");
 let cup=nationalCupChampion?"Campeão":"Em disputa",cont=qualifiedContinental?"Participando nesta edição":"Fora desta edição",sec=qualifiedSecondary?"Participando nesta edição":"Fora desta edição",world=qualifiedWorld?"Participando nesta edição":"Fora desta edição";
 box.innerHTML=`<h3>Regulamento & situação do Nova FC</h3><div class=season-summary><div><span class=muted>Posição atual</span><h3>${pos||"—"}º</h3><span class=muted>${status}</span></div><div><span class=muted>Copa Nacional</span><h3>${cup}</h3><span class=muted>Campeão → América Cup</span></div><div><span class=muted>América Cup</span><h3>${cont}</h3><span class=muted>1º–5º Série A ou Copa Nacional</span></div><div><span class=muted>Sul-America Cup</span><h3>${sec}</h3><span class=muted>6º–10º da Série A</span></div><div><span class=muted>Mundial</span><h3>${world}</h3><span class=muted>Somente campeão do América Cup</span></div></div>${seasonFinished()?`<div class=finance><b>Temporada concluída.</b> A próxima temporada é iniciada automaticamente após o último compromisso. <button class="btn secondary" onclick="startNextSeason(false)">Iniciar agora</button></div>`:`<p class=muted>Ao terminar o último compromisso, a próxima temporada será criada automaticamente. As vagas internacionais serão confirmadas no encerramento.</p>`}`;
}
function fixtureHTML(f,current=false){let score=f.played?`${f.hg} × ${f.ag}`:"VS",ag=aggregateForFixture(f);return `<div class="fixture ${current?"current":""} ${f.played?"done":""}"><b>${fmtDate(f.date)}</b><span class="competition comp ${compClass(f.comp)}">${f.comp}</span><span class=teams>${f.home?CONTROLLED_CLUB:f.opp} <b>${score}</b> ${f.home?f.opp:CONTROLLED_CLUB}${ag?` <span class=aggregate-badge>${ag}</span>`:""}</span><span>${f.home?"CASA":"FORA"}</span><span class=status>${f.played?"Final":"Agendado"}</span></div>`}

function clubKey(country,league,club){return `${country}|${league}|${club}`}
function clubInitials(club){return club.split(/\s+/).filter(Boolean).map(x=>x[0]).join("").slice(0,3).toUpperCase()}
function findClubLocation(club){
 for(let c of Object.keys(worldDB))for(let l of Object.keys(worldDB[c].leagues))if(worldDB[c].leagues[l].includes(club))return{country:c,league:l};
 return{country:worldCountry,league:worldLeague};
}
function clubRosterBase(country,league,club){
 let tier=worldLeagueTier(country,league),table=country==="Brasil"?tableForBrazilLeague(league):seededWorldTable(country,league),sorted=table?[...table].sort((a,b)=>b.pts-a.pts||(b.gp-b.gc)-(a.gp-a.gc)):[],rank=sorted.findIndex(x=>x.n===club)+1;
 if(rank<1)rank=10;let countryBoost={Inglaterra:3,Espanha:3,Itália:2,Alemanha:3,França:2,Portugal:1,Brasil:2,Argentina:1}[country]||0;
 return Math.max(63,Math.min(84,(tier===1?73:66)+countryBoost+Math.round((11-rank)*.35)));
}
function worldPlayerValue(ovr,age,pot){
 let youth=Math.max(0,24-age)*.45,potential=Math.max(0,pot-ovr)*.42,elite=Math.max(0,ovr-78)*1.35;
 return +Math.max(.6,(ovr-60)*.62+youth+potential+elite).toFixed(1);
}
function generateClubRoster(country,league,club){
 let base=clubRosterBase(country,league,club),shape=["GOL","GOL","LD","LD","LE","LE","ZAG","ZAG","ZAG","ZAG","VOL","VOL","MC","MC","MC","MEI","MEI","PD","PE","ATA","ATA","ATA"];
 return shape.map((pos,i)=>{
   let age=rnd(18,33),star=i===15||i===18||i===20?rnd(2,6):0,ovr=Math.max(58,Math.min(92,base+rnd(-6,6)+star)),pot=Math.min(96,Math.max(ovr,ovr+(age<=21?rnd(5,14):age<=24?rnd(2,8):rnd(0,3)))),value=worldPlayerValue(ovr,age,pot);
   let p={wid:`wp_${Date.now()}_${Math.floor(Math.random()*99999999)}_${i}`,n:firstNames[rnd(0,firstNames.length-1)]+" "+lastNames[rnd(0,lastNames.length-1)],p:pos,age,o:ovr,pot,c:rnd(82,100),v:value,salary:+Math.max(.025,ovr*.00105*(1+Math.max(0,ovr-80)*.025)).toFixed(2),contract:rnd(1,5),attrs:null,club,country,league};
   p.attrs=makeAttrs(p);return p;
 });
}
function getClubRoster(country,league,club){
 if(club===CONTROLLED_CLUB)return players;
 let key=clubKey(country,league,club);if(!worldRosters[key]||!Array.isArray(worldRosters[key])||worldRosters[key].length<11)worldRosters[key]=generateClubRoster(country,league,club);
 return worldRosters[key];
}
function worldSquadOverall(roster){return roster.length?Math.round(roster.slice().sort((a,b)=>b.o-a.o).slice(0,11).reduce((s,p)=>s+p.o,0)/Math.min(11,roster.length)):0}
function openTeamSquad(country,league,club){
 if(club===CONTROLLED_CLUB){go("squad");return}
 let roster=getClubRoster(country,league,club);openedWorldClub={country,league,club};let avg=worldSquadOverall(roster),value=roster.reduce((s,p)=>s+(p.v||0),0),stars=[...roster].sort((a,b)=>b.o-a.o);
 $("teamModalContent").innerHTML=`<div class="team-head"><div class="team-crest-large">${clubInitials(club)}</div><div><h2>${club}</h2><p class="muted">${country} • ${league} • ${roster.length} jogadores</p><div class="squad-strength"><div style="width:${avg}%"></div></div></div><div class="team-stats"><div class="team-stat"><b>${avg}</b>OVR XI</div><div class="team-stat"><b>${cash(value)}</b>Valor elenco</div><div class="team-stat"><b>${stars[0]?.n||"—"}</b>Principal jogador</div></div></div>
 <div class="opponent-roster"><table><thead><tr><th>Jogador</th><th>POS</th><th>Idade</th><th>OVR</th><th>POT</th><th>Condição</th><th>Valor</th><th>Contrato</th><th>Ações</th></tr></thead><tbody>${roster.slice().sort((a,b)=>b.o-a.o).map(p=>`<tr><td><b>${p.n}</b></td><td><span class=pill>${p.p}</span></td><td>${p.age}</td><td><b>${p.o}</b></td><td>${p.pot||"—"}</td><td>${p.c}%</td><td>${cash(p.v)}</td><td>${p.contract} temp.</td><td><div class="world-player-actions"><button class="btn secondary" onclick="worldPlayerDetails('${escapeJS(country)}','${escapeJS(league)}','${escapeJS(club)}','${p.wid}')">Detalhes</button><button class="btn" onclick="openTransferNegotiation('${escapeJS(country)}','${escapeJS(league)}','${escapeJS(club)}','${p.wid}')">Negociar</button></div></td></tr>`).join("")}</tbody></table></div>`;
 $("teamModal").classList.add("open");save(true);
}
function escapeJS(s){return String(s).replaceAll("\\","\\\\").replaceAll("'","\\'")}
function closeTeamSquad(){$("teamModal").classList.remove("open")}
function findWorldPlayer(country,league,club,wid){return getClubRoster(country,league,club).find(p=>String(p.wid)===String(wid))}
function worldPlayerDetails(country,league,club,wid){
 let p=findWorldPlayer(country,league,club,wid);if(!p)return toast("Jogador não encontrado.");p.attrs=p.attrs||makeAttrs(p);
 let attrs=["passe","dominio","chute","marcacao","velocidade","resistencia","drible","posicionamento"],gap=Math.max(0,(p.pot||p.o)-p.o),devPct=Math.max(0,Math.min(100,((p.o-50)/Math.max(1,(p.pot||p.o)-50))*100));
 $("playerProfileContent").innerHTML=`<div class="player-profile-head"><div class="player-avatar">${playerInitials(p.n)}</div><div class="player-profile-name"><h2>${p.n}</h2><p class="muted"><span class=pill>${p.p}</span> • ${p.age} anos • ${club}</p></div><div class="player-overall"><b>${p.o}</b><span>Overall</span></div></div>
 <div class="player-summary-grid"><div class=player-summary-item><b>${p.pot}</b><span>Potencial</span></div><div class=player-summary-item><b>${p.c}%</b><span>Condição</span></div><div class=player-summary-item><b>${cash(p.v)}</b><span>Valor</span></div><div class=player-summary-item><b>${cash(p.salary)}</b><span>Salário/comp.</span></div><div class=player-summary-item><b>${p.contract}</b><span>Contrato</span></div><div class=player-summary-item><b>${gap}</b><span>Margem</span></div></div>
 <div class=player-profile-grid><div class=player-profile-panel><h3>📊 Atributos</h3>${attrs.map(k=>`<div class=attr-row><span>${attrLabel(k)}</span><div class=attr-track><div class=attr-fill style="width:${p.attrs[k]}%"></div></div><b>${p.attrs[k]}</b></div>`).join("")}</div><div class=player-profile-panel><h3>📋 Situação</h3><div class=player-info-row><span>Clube</span><b>${club}</b></div><div class=player-info-row><span>Liga</span><b>${league}</b></div><div class=player-info-row><span>Valor estimado</span><b>${cash(p.v)}</b></div><div class=player-info-row><span>Contrato restante</span><b>${p.contract} temporada(s)</b></div><div class=player-development><b>Desenvolvimento</b><div class=player-development-bar><div class=player-development-fill style="width:${devPct}%"></div></div><span class=muted>OVR ${p.o} de POT ${p.pot}</span></div></div></div>
 <div class=player-profile-actions><button class=btn onclick="closePlayerDetails();openTransferNegotiation('${escapeJS(country)}','${escapeJS(league)}','${escapeJS(club)}','${p.wid}')">Negociar contratação</button><button class="btn secondary" onclick="closePlayerDetails()">Fechar</button></div>`;
 $("playerModal").classList.add("open");
}
function transferAskingPrice(p,club){
 let importance=Math.max(0,p.o-worldSquadOverall(getClubRoster(p.country,p.league,club))),potPremium=Math.max(0,p.pot-p.o)*.025,contractPremium=Math.max(0,(p.contract||1)-1)*.055;
 return +(p.v*(1.08+Math.max(0,importance)*.035+potPremium+contractPremium)).toFixed(1);
}
function openTransferNegotiation(country,league,club,wid){
 let p=findWorldPlayer(country,league,club,wid);if(!p)return toast("Jogador não encontrado.");
 let ask=transferAskingPrice(p,club);transferTalk={country,league,club,wid,ask,offer:+Math.max(.5,p.v).toFixed(1),clubAccepted:false,counter:null};
 renderTransferNegotiation();$("transferModal").classList.add("open");
}
function closeTransferNegotiation(){$("transferModal").classList.remove("open");transferTalk=null}
function renderTransferNegotiation(){
 if(!transferTalk)return;let t=transferTalk,p=findWorldPlayer(t.country,t.league,t.club,t.wid);if(!p)return closeTransferNegotiation();
 let d=worldPlayerContractDemand(p);
 $("transferModalContent").innerHTML=`<h2>Negociação de transferência</h2><p class=muted>${t.club} • ${t.league}</p><div class=transfer-player><div class=player-avatar>${playerInitials(p.n)}</div><div><h3>${p.n}</h3><span class=muted>${p.p} • ${p.age} anos • OVR ${p.o} • POT ${p.pot}</span></div><div class=transfer-value><b>${cash(p.v)}</b><span class=muted>valor estimado</span></div></div>
 ${!t.clubAccepted?`<div class=negotiation-stage><h3>1. Negociar com o clube</h3><p class=muted>O ${t.club} avalia valor de mercado, potencial, contrato e importância do atleta.</p>${t.counter?`<div class=counter-offer>O clube recusou e sinalizou que aceita conversar a partir de <b>${cash(t.counter)}</b>.</div>`:""}<div class=offer-grid><label>Sua oferta (R$ mi)<input id=transferFeeOffer type=number min=".1" step=".1" value="${t.counter||t.offer}"></label><label>Referência do clube<input disabled value="Pedida interna: ${cash(t.ask)}"></label></div><button class=btn style="width:100%" onclick="submitClubTransferOffer()">Enviar oferta ao clube</button></div>`:
 `<div class=deal-accepted>✓ ${t.club} aceitou a transferência por <b>${cash(t.offer)}</b>. Agora é necessário chegar a um acordo com o jogador.</div><div class=negotiation-stage><h3>2. Negociar contrato com ${p.n}</h3><div class=offer-grid><label>Duração<select id=worldContractYears onchange="renderWorldContractPreview()"><option value=2>2 temporadas</option><option value=3 selected>3 temporadas</option><option value=4>4 temporadas</option><option value=5>5 temporadas</option></select></label><label>Salário<select id=worldSalaryPct onchange="renderWorldContractPreview()"><option value=.9>90% da pedida</option><option value=1 selected>Atender à pedida</option><option value=1.1>110% da pedida</option><option value=1.2>120% da pedida</option></select></label></div><div id=worldContractPreview class=contract-preview></div><button class=btn style="width:100%" onclick="submitWorldPlayerContract()">Enviar proposta ao jogador</button></div>`}`;
 if(t.clubAccepted)requestAnimationFrame(renderWorldContractPreview);
}
function submitClubTransferOffer(){
 if(!transferTalk)return;let p=findWorldPlayer(transferTalk.country,transferTalk.league,transferTalk.club,transferTalk.wid),offer=+($("transferFeeOffer")?.value||0);if(!p||offer<=0)return toast("Informe uma oferta válida.");if(money<offer)return toast("O Nova FC não possui caixa para essa oferta.");
 let threshold=transferTalk.ask*(.94+Math.random()*.07);transferTalk.offer=+offer.toFixed(1);
 if(offer>=threshold){transferTalk.clubAccepted=true;transferTalk.counter=null;renderTransferNegotiation();toast(`${transferTalk.club} aceitou a oferta!`);return}
 let distance=offer/transferTalk.ask;if(distance>=.72){transferTalk.counter=+(transferTalk.ask*(.97+Math.random()*.06)).toFixed(1);toast(`${transferTalk.club} fez uma contraproposta.`)}else{transferTalk.counter=+(transferTalk.ask*(1.02+Math.random()*.08)).toFixed(1);toast(`${transferTalk.club} considerou a oferta muito baixa.`)}
 renderTransferNegotiation();
}
function worldPlayerContractDemand(p){
 let star=1+Math.max(0,p.o-75)*.03+Math.max(0,p.pot-84)*.012,career=p.age<=23?1.08:p.age>=31?.92:1;
 return {salary:+Math.max(p.salary*1.12,p.o*.00118*star*career).toFixed(2),bonus:+Math.max(.12,p.o*.004+Math.max(0,p.o-78)*.025).toFixed(2)};
}
function renderWorldContractPreview(){
 if(!transferTalk?.clubAccepted)return;let p=findWorldPlayer(transferTalk.country,transferTalk.league,transferTalk.club,transferTalk.wid);if(!p)return;let d=worldPlayerContractDemand(p),years=+($("worldContractYears")?.value||3),pct=+($("worldSalaryPct")?.value||1),salary=+(d.salary*pct).toFixed(2),bonus=+(d.bonus*(.82+years*.08)).toFixed(2);
 $("worldContractPreview").innerHTML=`Pedida: <b>${cash(d.salary)}/compromisso</b><br>Sua oferta: <b>${cash(salary)}/compromisso</b> por <b>${years} temporadas</b><br>Luvas: <b>${cash(bonus)}</b><br>Custo imediato se fechar: <b>${cash(transferTalk.offer+bonus)}</b>`;
}
function submitWorldPlayerContract(){
 if(!transferTalk?.clubAccepted)return;let t=transferTalk,p=findWorldPlayer(t.country,t.league,t.club,t.wid);if(!p)return toast("Jogador não encontrado no elenco adversário.");
 let d=worldPlayerContractDemand(p),years=+($("worldContractYears")?.value||3),pct=+($("worldSalaryPct")?.value||1),salary=+(d.salary*pct).toFixed(2),bonus=+(d.bonus*(.82+years*.08)).toFixed(2),total=t.offer+bonus;
 if(money<total)return toast(`Caixa insuficiente. São necessários ${cash(total)}.`);
 let ambition=p.o>=84?.04:0,young=p.age<=21?.04:0,longFit=(p.age>=30&&years>=5)?-.12:0,chance=.30+(pct-.85)*2.6+longFit-ambition-young;if(pct>=1)chance=Math.max(chance,.78);if(pct>=1.1)chance=Math.max(chance,.94);
 if(Math.random()>chance){toast(`${p.n} recusou as condições pessoais. A transferência não foi concluída.`);addNews("transfer",`Negociação por ${p.n} não avança`,`Nova FC e ${t.club} tinham acordo, mas o jogador não acertou os termos pessoais.`,"Mercado");save(true);return}
 let roster=getClubRoster(t.country,t.league,t.club),idx=roster.findIndex(x=>String(x.wid)===String(p.wid));
 if(idx<0)return toast("A transferência foi cancelada: o jogador já não está disponível no clube.");
 let source={...p},newId=Date.now()+Math.floor(Math.random()*999999);
 let signed=normalizeProPlayer({...source,id:newId,wid:undefined,club:undefined,country:undefined,league:undefined,salary,contract:years,c:100,training:"Equilibrado",origin:t.club,renewals:0});
 // Commit atômico: financeiro + saída do rival + entrada no Nova FC + autosave.
 recordFinance(-t.offer,"Transferências",`Compra de ${signed.n} — ${t.club}`);
 recordFinance(-bonus,"Contratos",`Luvas de contratação — ${signed.n}`);
 roster.splice(idx,1);players.push(signed);
 addNews("transfer",`Nova FC contrata ${signed.n}`,`${signed.p}, ${signed.age} anos e OVR ${signed.o}, deixa ${t.club} por ${cash(t.offer)} e assina por ${years} temporadas.`,"Contratação");
 save(true);
 closeTransferNegotiation();closeTeamSquad();
 try{render()}catch(err){console.error("Falha visual após transferência entre clubes:",err);save(true)}
 toast(`${signed.n} é o novo reforço do Nova FC!`);
}
function renderWorld(){renderStateChampionshipsWorld();
 let countries=Object.keys(worldDB);
 $("worldCountries").innerHTML=countries.map(c=>`<button class="world-tab ${c===worldCountry?"active":""}" onclick="selectCountry('${c.replaceAll("'","\\'")}')">${worldDB[c].flag} ${c}</button>`).join("");
 $("worldFlag").textContent=worldDB[worldCountry].flag;$("worldCountryTitle").textContent=worldCountry;
 let leagues=Object.keys(worldDB[worldCountry].leagues);if(!leagues.includes(worldLeague))worldLeague=leagues[0];
 $("worldLeagueCards").innerHTML=leagues.map(l=>`<div class=league-card onclick="selectWorldLeague('${l.replaceAll("'","\\'")}')"><h3>${l}</h3><span class=muted>${worldDB[worldCountry].leagues[l].length} clubes</span></div>`).join("");
 $("worldLeagueTitle").textContent=worldLeague;$("worldLeagueInfo").textContent=`${worldCountry} • Temporada ${seasonLabel()} • ${worldLeague.includes("2")||worldLeague.includes("B")||worldLeague.includes("Segunda")||worldLeague.includes("Championship")?"2ª divisão":"1ª divisão"}`;
 let t=worldCountry==="Brasil"?tableForBrazilLeague(worldLeague):seededWorldTable(worldCountry,worldLeague);if(!t)t=seededWorldTable(worldCountry,worldLeague);
 let sorted=[...t].sort((a,b)=>b.pts-a.pts||(b.gp-b.gc)-(a.gp-a.gc)||b.gp-a.gp),tier=worldLeagueTier(worldCountry,worldLeague);
 $("worldTable").innerHTML=sorted.map((x,i)=>{let mark=tier===1?(i<5?' <span class=qualify>● AMÉRICA</span>':i<10?' <span class=qualify>● SUL-AM.</span>':i>=16?' <span class=relegate>● REB.</span>':''):(i<4?' <span class=qualify>● ACESSO</span>':'');return `<tr><td>${i+1}${mark}</td><td><button class="club-link" onclick="openTeamSquad('${escapeJS(worldCountry)}','${escapeJS(worldLeague)}','${escapeJS(x.n)}')">${x.n}</button></td><td>${x.j}</td><td>${x.v}</td><td>${x.e}</td><td>${x.d}</td><td>${x.gp-x.gc}</td><td><b>${x.pts}</b></td></tr>`}).join("");
}
function selectCountry(c){worldCountry=c;worldLeague=Object.keys(worldDB[c].leagues)[0];localStorage.setItem("ufm9_worldCountry",c);localStorage.setItem("ufm9_worldLeague",worldLeague);renderWorld()}
function selectWorldLeague(l){worldLeague=l;localStorage.setItem("ufm9_worldLeague",l);renderWorld()}
function simulateWorldMatchdays(g){
 if(!g||g.comp!==currentLeagueName()||!g.round)return;
 Object.keys(worldDB).forEach(c=>Object.keys(worldDB[c].leagues).forEach(l=>{
   if(c==="Brasil")return;
   let clubs=worldDB[c].leagues[l],t=seededWorldTable(c,l),rounds=roundRobin(clubs),leg=g.round>19?1:0,idx=(g.round-1)%19,pairs=rounds[idx]||[];
   pairs.forEach(pair=>{let h=leg===0?pair[0]:pair[1],a=leg===0?pair[1]:pair[0],hg=Math.floor(Math.random()*4),ag=Math.floor(Math.random()*4);updateTableClub(t,h,hg,ag);updateTableClub(t,a,ag,hg)});
 }));
 generateWorldNews();save(true);
}
function recentForm(){
 let games=schedule.filter(x=>x.played).slice(-5);if(!games.length)return ["D","D","D","D","D"];
 return games.map(g=>{let nova=g.home?g.hg:g.ag,opp=g.home?g.ag:g.hg;return nova>opp?"V":nova===opp?"E":"D"});
}
function formHTML(arr){return `<div class=form>${arr.map(x=>`<span class="${x==="V"?"w":x==="E"?"d":"l"}">${x}</span>`).join("")}</div>`}
function matchHubHTML(g){
 let home=g.home?CONTROLLED_CLUB:g.opp,away=g.home?g.opp:CONTROLLED_CLUB,form=recentForm();
 return `<div class=match-hub><div class=match-hub-head><span class="comp ${compClass(g.comp)}">${g.comp}</span><b>${g.stage}</b><span>${fmtDate(g.date)} • 20:30</span></div>
 <div class=match-hub-body><div><div class=club-crest>${home===CONTROLLED_CLUB?"NFC":home.split(" ").map(x=>x[0]).join("").slice(0,3)}</div><div class=club-name>${home}</div>${home===CONTROLLED_CLUB?formHTML(form):formHTML(["V","E","V","D","V"])}</div>
 <div><div class=versus>VS</div><div class=match-time>20:30</div><div class=muted style="font-size:11px;margin-top:5px">${g.home?"Nova Arena":"Visitante"}</div></div>
 <div><div class="club-crest rival">${away===CONTROLLED_CLUB?"NFC":away.split(" ").map(x=>x[0]).join("").slice(0,3)}</div><div class=club-name>${away}</div>${away===CONTROLLED_CLUB?formHTML(form):formHTML(["V","V","D","E","V"])}</div></div>
 <div class=match-hub-foot><span class=muted>Condição média do XI: ${Math.round(xi.reduce((a,id)=>a+(byId(id)?.c||80),0)/11)}% • Capacidade: ${capacity().toLocaleString("pt-BR")}</span><div style="display:flex;gap:7px;flex-wrap:wrap"><button class="btn assistant-match-btn" onclick="assistantSimulateMatch()" ${assistantCoach?'':'title="Contrate um auxiliar técnico"'}>♙ ${assistantCoach?'Auxiliar comanda':'Sem auxiliar'}</button><button class=btn onclick="go('match')">Preparar equipe →</button></div></div></div>`;
}
function seedAuctions(){
 while(auctions.filter(a=>!a.done).length<6){
   let p=generateMarketPlayer();p.id=Date.now()+Math.floor(Math.random()*999999);
   let start=Math.max(.8,+(p.v*.55).toFixed(1));
   auctions.push({id:auctionSeq++,player:p,bid:start,leader:"Atlético Azul",seconds:50+Math.floor(Math.random()*100),done:false,history:[`Atlético Azul abriu em ${cash(start)}`]});
 }
}
function renderAuctions(){
 seedAuctions();
 let live=auctions.filter(a=>!a.done);
 $("auctionGrid").innerHTML=live.map(a=>`<div class="auction-card ${a.leader===CONTROLLED_CLUB?"mybid":""}"><div class=auction-top><div><b>${a.player.n}</b> <span class=pill>${a.player.p}</span><div class=muted>${a.player.age} anos • OVR ${a.player.o}</div></div><div class="auction-timer ${a.seconds<=15?"urgent":""}">${Math.floor(a.seconds/60)}:${String(a.seconds%60).padStart(2,"0")}</div></div><div class=auction-price>${cash(a.bid)}</div><div class=bid-history>${a.history.slice(-2).join("<br>")}</div><div class=auction-actions><button class=btn onclick="placeBid(${a.id},.5)">+ R$ 0,5 mi</button><button class="btn secondary" onclick="placeBid(${a.id},1)">+ R$ 1 mi</button></div></div>`).join("");
 let mine=live.filter(a=>a.leader===CONTROLLED_CLUB);$("myAuctionStatus").innerHTML=mine.length?mine.map(a=>`<div class=finance>Você lidera por <b>${a.player.n}</b>: ${cash(a.bid)} • ${a.seconds}s restantes</div>`).join(""):"Nenhum lance liderado por você.";
}
function placeBid(id,inc){
 let a=auctions.find(x=>x.id===id&&!x.done);if(!a)return;let next=+(a.bid+inc).toFixed(1);if(money<next)return toast("Você não tem caixa para cobrir esse lance.");
 a.bid=next;a.leader=CONTROLLED_CLUB;a.seconds=Math.max(a.seconds,12);a.history.push(`Nova FC ofereceu ${cash(next)}`);renderAuctions();save(true);
}
function auctionPulse(){
 let clubs=["Real Verde","União City","Porto Branco","Estrela SC","Racing Sul"];
 auctions.filter(a=>!a.done).forEach(a=>{
   a.seconds--;
   if(a.seconds>7 && Math.random()<.018 && a.bid<a.player.v*1.35){
     let club=clubs[Math.floor(Math.random()*clubs.length)],inc=Math.random()<.7?.5:1;a.bid=+(a.bid+inc).toFixed(1);a.leader=club;a.history.push(`${club} ofereceu ${cash(a.bid)}`);
   }
   if(a.seconds<=0)finishAuction(a);
 });
 if(document.getElementById("auction").classList.contains("active"))renderAuctions();
 save(true);
}
function finishAuction(a){
 a.done=true;
 if(a.leader===CONTROLLED_CLUB){
   if(money>=a.bid){let p=normalizeProPlayer({...a.player,contract:3,training:"Equilibrado",origin:"Leilão",c:100});recordFinance(-a.bid,"Transferências",`Leilão — ${p.n}`);players.push(p);save(true);toast(`${p.n} é do Nova FC por ${cash(a.bid)}!`)}
   else toast(`Você venceu ${a.player.n}, mas não tinha caixa suficiente.`);
 }
 setTimeout(()=>{seedAuctions();render();save(true)},300);
}


function addTrophy(name,type,icon,detail=""){
 let season=seasonLabel(),key=`${season}|${name}`;if(trophyCabinet.some(t=>t.key===key))return false;
 trophyCabinet.unshift({key,name,type,icon,season,detail,date:currentGame()?.date||`${seasonYear}-08-01`});
 addNews("club",`🏆 ${name} na sala de troféus`,`${name} • temporada ${season}.`,"Conquista");return true;
}
function awardTrophy(name,type,icon,prize,detail=""){
 if(!addTrophy(name,type,icon,detail))return false;if(prize>0)recordFinance(prize,"Premiações",`${name} — campeão`);return true;
}
function renderTrophies(){
 if(!$("trophyCabinet"))return;let national=trophyCabinet.filter(t=>t.type==="national").length,continental=trophyCabinet.filter(t=>t.type==="continental").length,world=trophyCabinet.filter(t=>t.type==="world").length;
 $("trophyCount").textContent=`${trophyCabinet.length} título${trophyCabinet.length===1?"":"s"}`;$("trophyNational").textContent=national;$("trophyContinental").textContent=continental;$("trophyWorld").textContent=world;$("trophyLatest").textContent=trophyCabinet[0]?.name||"—";
 $("trophyCabinet").innerHTML=(trophyCabinet.length?trophyCabinet.map(t=>`<div class=trophy-card><div class=trophy-icon>${t.icon}</div><h3>${t.name}</h3><div class=trophy-season>${t.season}</div><div class=trophy-meta>${t.detail||"Título conquistado pelo Nova FC"}</div></div>`).join(""):`<div class=trophy-empty><div style="font-size:44px">🏆</div><h3>A sala ainda está vazia</h3><p>Quando o Nova FC conquistar uma competição, o troféu aparecerá aqui automaticamente.</p></div>`)+`<div class="awards-section" style="grid-column:1/-1"><div class=coach-head><div><h2>Prêmios individuais</h2><p class=muted>Histórico dos destaques do elenco por temporada.</p></div><span class=coach-badge>${individualAwards.length} prêmio${individualAwards.length===1?"":"s"}</span></div><div class=award-history-grid>${individualAwards.length?individualAwards.map(a=>`<div class=award-card><div class=award-icon>${a.icon}</div><h3>${a.player}</h3><div class=award-season>${a.name} • ${a.season}</div><div class=award-meta>${a.detail}</div></div>`).join(""):`<p class=muted>Os primeiros prêmios serão entregues ao final da temporada.</p>`}</div></div>`;
}
function tvRightsForGame(g){if(!g)return 0;if(g.comp.includes("Mundial"))return 2.6;if(g.comp.includes("Continental Sul"))return 1.9;if(g.comp.includes("Continental Secundária"))return 1.35;if(g.comp.includes("Copa Nacional"))return .95;if(g.comp.includes("Estadual"))return .58;if(g.comp.includes("Série A"))return 1.45;if(g.comp.includes("Série B"))return .90;return .75}
function commercialMatchRevenue(g,won){let rep=commercialScore(),base=.10+fans/90000+rep/500;return +(base*(won?1.12:1)*(g?.comp.includes("Mundial")?1.35:1)).toFixed(2)}
function stadiumExtrasRevenue(){return +(capacity()*.000018*(1+stadium.facilities*.08+stadium.vip*.06)).toFixed(2)}
function processMatchIncome(g,won){
 let tv=tvRightsForGame(g),commercial=commercialMatchRevenue(g,won),shirts=shirtSalesProjection(g,won);
 recordFinance(tv,"Direitos de transmissão",`${g.comp} • ${g.stage}`);recordFinance(commercial,"Comercial","Licenciamento e receitas comerciais");recordFinance(shirts.revenue,"Camisas",`${shirts.units} camisas oficiais vendidas • ${g.comp}`);
 let homeTotal=0;if(g.home){let tickets=+(ticketRevenue()*(.92+Math.random()*.12)).toFixed(3),extras=stadiumExtrasRevenue();recordFinance(tickets,"Bilheteria",`${projectedAttendanceCount().toLocaleString("pt-BR")} torcedores • ingresso médio R$ ${ticketPrice}`);recordFinance(extras,"Estádio",`Alimentação, camarotes e consumo — ${g.stage}`);homeTotal=tickets+extras}
 return {tv,commercial,shirts:shirts.revenue,shirtUnits:shirts.units,home:homeTotal,total:+(tv+commercial+shirts.revenue+homeTotal).toFixed(3)};
}
function projectedMatchIncome(){let g=currentGame(),tv=tvRightsForGame(g),commercial=commercialMatchRevenue(g,false),shirts=shirtSalesProjection(g,false),home=g?.home?ticketRevenue()+stadiumExtrasRevenue():0,sponsor=activeSponsors.reduce((a,x)=>a+x.perMatch,0);return{tv,commercial,shirts:shirts.revenue,shirtUnits:shirts.units,home,sponsor,total:tv+commercial+shirts.revenue+home+sponsor}}
function careerStorageKeys(){return Object.keys(localStorage).filter(k=>/^ufm(4|6|7|9)_/.test(k)||k==="ufm9_competitionRules").sort()}
function exportCareerSave(){
 save(true);let data={game:"Ultimate Football Manager 9",version:"v9-portable-save-1",exportedAt:new Date().toISOString(),storage:{}};careerStorageKeys().forEach(k=>data.storage[k]=localStorage.getItem(k));
 let blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`NovaFC_save_${seasonYear}_${String(gameIndex).padStart(2,"0")}.json`;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);toast("Save da carreira exportado!");
}
function importCareerSave(file){
 if(!file)return;let r=new FileReader();r.onload=()=>{try{let data=JSON.parse(r.result);if(!data?.storage||typeof data.storage!=="object")throw new Error("save inválido");Object.entries(data.storage).forEach(([k,v])=>{if(/^ufm(4|6|7|9)_/.test(k)||k==="ufm9_competitionRules")localStorage.setItem(k,v)});alert("Carreira importada com sucesso. O jogo será recarregado agora.");location.reload()}catch(e){console.error(e);toast("Não foi possível importar este save.")}};r.readAsText(file);if($("careerSaveInput"))$("careerSaveInput").value="";
}
function recordFinance(amount,category,description){
 amount=+amount;if(!Number.isFinite(amount)||amount===0)return 0;money=+(money+amount).toFixed(3);
 financeLedger.unshift({id:Date.now()+Math.floor(Math.random()*9999),amount:+amount.toFixed(3),category,description,game:schedule.filter(x=>x.played).length,date:currentGame()?.date||"2026-08-01"});
 if(financeLedger.length>160)financeLedger=financeLedger.slice(0,160);return amount;
}
function commercialScore(){let tab=sortedTable(),pos=tab.findIndex(t=>t.n===CONTROLLED_CLUB)+1;if(pos<1)pos=8;let perf=Math.max(0,18-(pos-1)*2.2),fan=Math.min(32,fans/900),infra=(stadium.vip+stadium.facilities)*3.2,marketing=Math.min(10,marketingBudget*20);return Math.round(Math.max(20,Math.min(99,20+fan*.55+perf+infra+marketing)))}
function renderKitDesigner(){
 if(!$("kitPreview"))return;
 $("kitPrimary").value=kitDesign.primary;$("kitSecondary").value=kitDesign.secondary;$("kitTrim").value=kitDesign.trim;$("kitPattern").value=kitDesign.pattern;
 let p=$("kitPreview");p.className=`kit-shirt-preview ${kitDesign.pattern==="classic"?"":kitDesign.pattern}`;p.style.setProperty("--kit1",kitDesign.primary);p.style.setProperty("--kit2",kitDesign.secondary);p.style.setProperty("--kit3",kitDesign.trim);document.documentElement.style.setProperty("--club-kit-primary",kitDesign.primary);document.documentElement.style.setProperty("--club-kit-secondary",kitDesign.secondary);document.documentElement.style.setProperty("--club-kit-trim",kitDesign.trim);
 let master=activeSponsors.find(x=>x.slot==="master");$("kitSponsor").textContent=master?master.brand:"NOVA FC";
 let sh=shirtSalesProjection(currentGame(),false);$("kitCommercialHint").innerHTML=`Camisa oficial a <b>R$ ${shirtPrice}</b> • projeção atual: <b>${sh.units} unidades</b> por jogo e <b>${cash(sh.revenue)}</b> de margem.`;
 if($("sponsorPageRep"))$("sponsorPageRep").textContent=`Reputação ${commercialScore()}/100`;
}
function updateKitDesign(){
 kitDesign={primary:$("kitPrimary").value,secondary:$("kitSecondary").value,trim:$("kitTrim").value,pattern:$("kitPattern").value};renderKitDesigner();save(true);toast("Uniforme atualizado.");
}
function resetKitDesign(){kitDesign={primary:"#116b3d",secondary:"#ffffff",trim:"#d7b34a",pattern:"classic"};renderKitDesigner();save(true)}
function setTicketPrice(v){ticketPrice=Math.max(20,Math.min(300,+v||65));renderFinanceSystem();renderStadium();save(true)}
function setShirtPrice(v){shirtPrice=Math.max(80,Math.min(600,+v||180));renderFinanceSystem();renderKitDesigner();save(true)}
function negotiateSalary(id,value){
 let p=byId(id);if(!p)return;let proposed=Math.max(.02,Math.min(3,+value||p.salary)),current=p.salary;
 if(proposed<current*.75)return toast("O jogador recusou: redução acima de 25% não é negociável.");
 if(proposed<current){
   let cut=1-proposed/current,chance=.88-cut*1.7+(p.contract<=1?.08:0)-(xi.includes(id)?.08:0);
   if(Math.random()>chance)return toast(`${p.n} recusou a redução salarial.`);
 }
 p.salary=+proposed.toFixed(2);addNews("club",`Salário de ${p.n} atualizado`,`${cash(current)} → ${cash(p.salary)} por compromisso.`,"Contrato");save(true);render();toast(`Novo salário de ${p.n}: ${cash(p.salary)} por compromisso.`);
}
function playerSector(p){
 if(p.p==="GOL")return"goalkeepers";if(["ZAG","LD","LE"].includes(p.p))return"defenders";if(["VOL","MC","MEI"].includes(p.p))return"midfielders";return"attackers";
}
const sectorMeta={
 goalkeepers:{name:"Goleiros",positions:"GOL",focus:["Reflexos","Reposição","Posicionamento","Físico"]},
 defenders:{name:"Defensores",positions:"ZAG • LD • LE",focus:["Marcação","Posicionamento","Saída de bola","Velocidade"]},
 midfielders:{name:"Meias",positions:"VOL • MC • MEI",focus:["Passe","Criação","Pressão","Resistência"]},
 attackers:{name:"Atacantes",positions:"PE • PD • ATA",focus:["Finalização","Movimentação","Drible","Velocidade"]}
};
function setSectorTraining(sector,key,value){if(!sectorTraining[sector])return;if(key==="focus"&&sectorMeta[sector].focus.includes(value))sectorTraining[sector].focus=value;if(key==="intensity"&&["Leve","Normal","Alta"].includes(value))sectorTraining[sector].intensity=value;renderTrainingSystem();save(true)}
function sectorAttrKey(sector,focus){
 let map={Reflexos:"posicionamento",Reposição:"passe",Posicionamento:"posicionamento",Físico:"resistencia",Marcação:"marcacao","Saída de bola":"passe",Velocidade:"velocidade",Passe:"passe",Criação:"dominio",Pressão:"resistencia",Resistência:"resistencia",Finalização:"chute",Movimentação:"posicionamento",Drible:"drible"};return map[focus]||null;
}
function renderTrainingSystem(){
 if(!$("sectorTrainingGrid"))return;
 let avg=players.length?players.reduce((a,p)=>a+p.c,0)/players.length:0;$("trainingCenterBadge").textContent=`Centro Nível ${trainingLevel}`;$("trainConditionAvg").textContent=`${avg.toFixed(0)}%`;$("trainingPlayerCount").textContent=`${players.length} jogadores`;
 $("sectorTrainingGrid").innerHTML=Object.entries(sectorMeta).map(([key,m])=>{let cfg=sectorTraining[key],count=players.filter(p=>playerSector(p)===key).length;return `<div class=sector-card><h3>${m.name}</h3><div class=sector-count>${count} jogadores • ${m.positions}</div><label>Foco do setor<select onchange="setSectorTraining('${key}','focus',this.value)">${m.focus.map(x=>`<option ${cfg.focus===x?"selected":""}>${x}</option>`).join("")}</select></label><label>Intensidade<select onchange="setSectorTraining('${key}','intensity',this.value)">${["Leve","Normal","Alta"].map(x=>`<option ${cfg.intensity===x?"selected":""}>${x}</option>`).join("")}</select></label><div class=sector-summary>${cfg.intensity==="Alta"?"Maior chance de evolução, com desgaste físico extra.":cfg.intensity==="Leve"?"Menor desgaste e evolução mais controlada.":"Equilíbrio entre evolução e recuperação."}</div></div>`}).join("");
}
function sponsorInitials(n){return n.split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase()}
function sponsorTier(rep){let roll=rep+Math.random()*34-16;if(roll>=78)return 5;if(roll>=65)return 4;if(roll>=52)return 3;if(roll>=38)return 2;return 1}
function generateSponsorOffer(slot=null){
 slot=slot||["master","sleeve","training"][Math.floor(Math.random()*3)];let rep=commercialScore(),tier=sponsorTier(rep),mult={master:1.55,sleeve:.72,training:.92}[slot],duration=[8,10,12,16][Math.floor(Math.random()*4)],brand=sponsorBrands[Math.floor(Math.random()*sponsorBrands.length)],minRep=[20,30,42,55,70][tier-1];
 let signing=+((.35+tier*.48)*mult*(.9+Math.random()*.25)).toFixed(2),perMatch=+((.055+tier*.038)*mult).toFixed(2),winBonus=+((.018+tier*.022)*mult).toFixed(2),titleBonus=+((.28+tier*.38)*mult).toFixed(2);
 return {id:Date.now()+Math.floor(Math.random()*9999999),brand,slot,tier,signing,perMatch,winBonus,titleBonus,duration,remaining:duration,minRep,totalEarned:0};
}
function seedSponsorMarket(){let tries=0;while(sponsorMarket.length<9&&tries++<50){let o=generateSponsorOffer();if(!sponsorMarket.some(x=>x.brand===o.brand&&x.slot===o.slot))sponsorMarket.push(o)}}
function refreshSponsorMarket(){if(money<.1)return toast("Caixa insuficiente para a prospecção comercial.");recordFinance(-.1,"Comercial","Prospecção de novos patrocinadores");sponsorMarket=[];seedSponsorMarket();renderManagementSystems();save(true);toast("Novas propostas comerciais chegaram.")}
function closeSponsor(id){
 let i=sponsorMarket.findIndex(x=>x.id===id);if(i<0)return;let o=sponsorMarket[i],rep=commercialScore();
 if(activeSponsors.some(x=>x.slot===o.slot))return toast("Já existe um patrocinador nessa propriedade comercial.");if(rep<o.minRep)return toast(`A marca exige reputação comercial ${o.minRep}.`);
 let c={...o,startedAt:schedule.filter(x=>x.played).length,remaining:o.duration,totalEarned:o.signing};activeSponsors.push(c);sponsorMarket.splice(i,1);recordFinance(o.signing,"Patrocínio",`Luvas de contrato — ${o.brand} (${sponsorSlots[o.slot]})`);seedSponsorMarket();render();save(true);toast(`Contrato fechado com ${o.brand}! Luvas de ${cash(o.signing)}.`)
}
function terminateSponsor(id){
 let i=activeSponsors.findIndex(x=>x.id===id);if(i<0)return;let s=activeSponsors[i],penalty=+(s.perMatch*s.remaining*.35).toFixed(2);if(money<penalty)return toast("Caixa insuficiente para pagar a multa de rescisão.");recordFinance(-penalty,"Patrocínio",`Multa de rescisão — ${s.brand}`);activeSponsors.splice(i,1);render();save(true);toast(`Contrato com ${s.brand} rescindido por ${cash(penalty)}.`)
}
function processSponsorMatch(won,g){
 let expired=[],total=0;activeSponsors.forEach(s=>{let pay=s.perMatch+(won?s.winBonus:0),champion=won&&/Final/i.test(g.stage||"");if(champion)pay+=s.titleBonus;pay=+pay.toFixed(2);recordFinance(pay,"Patrocínio",`${s.brand}: cota do jogo${won?" + bônus por vitória":""}${champion?" + bônus por título":""}`);s.totalEarned=+(s.totalEarned+pay).toFixed(2);s.remaining--;total+=pay;if(s.remaining<=0)expired.push(s.id)});if(expired.length){activeSponsors=activeSponsors.filter(s=>!expired.includes(s.id));seedSponsorMarket()}return total;
}
function setMarketingBudget(v){marketingBudget=+v;renderManagementSystems();save(true)}
function financeTotals(){let income=financeLedger.filter(x=>x.amount>0).reduce((a,x)=>a+x.amount,0),expenses=-financeLedger.filter(x=>x.amount<0).reduce((a,x)=>a+x.amount,0);return{income,expenses,result:income-expenses}}
function registerBudgetBoost(){
 if(localStorage.getItem("ufm9_budgetBoostLedgerPending")==="1"){
   financeLedger.unshift({date:new Date().toISOString(),amount:55,category:"Diretoria",description:"Aporte extraordinário para reforço do orçamento"});
   localStorage.removeItem("ufm9_budgetBoostLedgerPending");
 }
 if(localStorage.getItem("ufm9_budgetBoost10BLedgerPending")==="1"){
   financeLedger.unshift({date:new Date().toISOString(),amount:10000,category:"Diretoria",description:"Aporte extraordinário de R$ 10 bilhões"});
   localStorage.removeItem("ufm9_budgetBoost10BLedgerPending");
 }
}
function renderFinanceSystem(){
 if(!$("finIncome"))return;seedSponsorMarket();let t=financeTotals(),wage=players.reduce((a,p)=>a+p.salary,0),value=players.reduce((a,p)=>a+p.v,0),rep=commercialScore();
 $("finMoney").textContent=cash(money);$("finIncome").textContent=cash(t.income);$("finExpenses").textContent=cash(t.expenses);$("finResult").textContent=(t.result>=0?"+ ":"- ")+cash(Math.abs(t.result));$("finResult").style.color=t.result>=0?"#75e7a1":"#ff9999";$("finFans").textContent=fans.toLocaleString("pt-BR");$("wages").textContent=cash(wage);$("squadValue").textContent=cash(value);$("commercialRep").textContent=`${rep}/100`;$("finTraining").textContent=cash(trainingBudget);$("finYouth").textContent=cash(youthBudget);$("finStadium").textContent=capacity().toLocaleString("pt-BR");$("marketingBudget").value=String(marketingBudget);
 if($("ticketPriceInput")){
   $("ticketPriceInput").value=ticketPrice;$("shirtPriceInput").value=shirtPrice;
   $("projectedAttendance").textContent=projectedAttendanceCount().toLocaleString("pt-BR");
   $("projectedTicketRevenue").textContent=cash(ticketRevenue());
   let shirt=shirtSalesProjection(currentGame(),false);$("projectedShirtUnits").textContent=shirt.units.toLocaleString("pt-BR");$("projectedShirtRevenue").textContent=cash(shirt.revenue);
   $("salaryPolicySummary").textContent=`Folha atual: ${cash(wage)} por compromisso`;
   $("salaryManager").innerHTML=players.slice().sort((a,b)=>b.salary-a.salary).map(p=>`<div class=salary-row><div><b>${p.n}</b><br><span class=muted>${p.p} • OVR ${p.o} • ${p.contract} temp.</span></div><span>${cash(p.salary)}</span><input id="salary_${p.id}" type=number min=.02 max=3 step=.01 value="${p.salary.toFixed(2)}"><button class="btn secondary" onclick="negotiateSalary(${p.id},document.getElementById('salary_${p.id}').value)">Negociar</button></div>`).join("");
 }
 let health=$("financeHealth");health.className="finance-health"+(money<5?" danger":money<15?" warn":"");health.textContent=money<5?"Caixa crítico":money<15?"Atenção ao caixa":"Caixa saudável";
 let inc=projectedMatchIncome();if($("recurringIncome"))$("recurringIncome").innerHTML=`<div class=income-item><span>TV / transmissão</span><b>${cash(inc.tv)}</b></div><div class=income-item><span>Comercial</span><b>${cash(inc.commercial)}</b></div><div class=income-item><span>Camisas (${inc.shirtUnits})</span><b>${cash(inc.shirts)}</b></div><div class=income-item><span>${currentGame()?.home?"Estádio + ingressos":"Estádio"}</span><b>${currentGame()?.home?cash(inc.home):"Jogo fora"}</b></div><div class=income-item><span>Patrocínios</span><b>${cash(inc.sponsor)}</b></div>`;
 let cats={};financeLedger.forEach(x=>cats[x.category]=(cats[x.category]||0)+Math.abs(x.amount));let max=Math.max(1,...Object.values(cats));$("financeBars").innerHTML=Object.entries(cats).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([k,v])=>{let net=financeLedger.filter(x=>x.category===k).reduce((a,x)=>a+x.amount,0);return `<div class="finance-bar ${net<0?"expense":""}"><span>${k}</span><div class=finance-bar-track><i style="width:${Math.max(4,v/max*100)}%"></i></div><b>${cash(v)}</b></div>`}).join("")||"<span class=muted>As movimentações desta versão aparecerão aqui.</span>";
 let slotCards=["master","sleeve","training"].map(slot=>{let a=activeSponsors.find(x=>x.slot===slot);if(!a)return `<div class=empty-slot><div><b>${sponsorSlots[slot]}</b><br><span>Espaço comercial disponível</span></div></div>`;let pct=Math.max(0,a.remaining/a.duration*100);return `<div class="sponsor-card active"><div class=sponsor-top><div style="display:flex;gap:9px"><div class=brand-mark>${sponsorInitials(a.brand)}</div><div><div class=sponsor-brand>${a.brand}</div><div class=sponsor-slot>${sponsorSlots[a.slot]}</div></div></div><span class=pill>Nível ${a.tier}</span></div><div class=sponsor-money><div><span>Por jogo</span><b>${cash(a.perMatch)}</b></div><div><span>Vitória</span><b>+${cash(a.winBonus)}</b></div><div><span>Título</span><b>+${cash(a.titleBonus)}</b></div><div><span>Já gerou</span><b>${cash(a.totalEarned)}</b></div></div><div class=sponsor-note>${a.remaining} de ${a.duration} jogos restantes.</div><div class=sponsor-progress><span style="width:${pct}%"></span></div><button class="btn secondary" onclick="terminateSponsor(${a.id})">Rescindir contrato</button></div>`}).join("");$("activeSponsors").innerHTML=slotCards;
 let projection=activeSponsors.reduce((a,x)=>a+x.perMatch,0);$("sponsorIncomeProjection").textContent=activeSponsors.length?`Receita fixa no próximo jogo: ${cash(projection)}`:"Nenhum contrato ativo";
 $("sponsorMarket").innerHTML=sponsorMarket.map(o=>{let locked=rep<o.minRep||activeSponsors.some(x=>x.slot===o.slot);return `<div class="sponsor-card ${locked?"locked":""}"><div class=sponsor-top><div style="display:flex;gap:9px"><div class=brand-mark>${sponsorInitials(o.brand)}</div><div><div class=sponsor-brand>${o.brand}</div><div class=sponsor-slot>${sponsorSlots[o.slot]}</div></div></div><span class=pill>Nível ${o.tier}</span></div><div class=sponsor-money><div><span>Luvas</span><b>${cash(o.signing)}</b></div><div><span>Por jogo</span><b>${cash(o.perMatch)}</b></div><div><span>Vitória</span><b>+${cash(o.winBonus)}</b></div><div><span>Título</span><b>+${cash(o.titleBonus)}</b></div></div><div class=sponsor-note>${o.duration} jogos • exige reputação ${o.minRep}/100${activeSponsors.some(x=>x.slot===o.slot)?" • espaço já ocupado":""}</div><button class=btn ${locked?"disabled":""} onclick="closeSponsor(${o.id})" ${locked?"disabled":""}>${rep<o.minRep?"Reputação insuficiente":activeSponsors.some(x=>x.slot===o.slot)?"Contrato já ocupado":"Fechar contrato"}</button></div>`}).join("");
 $("financeLedger").innerHTML=financeLedger.length?financeLedger.slice(0,80).map(x=>`<tr><td>Jogo ${x.game}</td><td>${x.category}</td><td>${x.description}</td><td class="${x.amount>=0?"ledger-plus":"ledger-minus"}">${x.amount>=0?"+":"-"}${cash(Math.abs(x.amount))}</td></tr>`).join(""):`<tr><td colspan=4 class=muted>Nenhuma movimentação registrada ainda.</td></tr>`;
 $("contractSummary").innerHTML=players.slice().sort((a,b)=>a.contract-b.contract).slice(0,7).map(p=>`<div class=finance style="display:flex;justify-content:space-between;gap:7px;align-items:center"><span>${p.n}: <b class="${p.contract<=1?'contract-alert':''}">${p.contract} temporada(s)</b><br><span class=muted>${cash(p.salary)}/comp.</span></span><button class=renew-btn onclick="openContractModal(${p.id})">Renovar</button></div>`).join("");
 renderKitDesigner();
}
function renderManagementSystems(){
 $("trainLevel").textContent=`${trainingLevel}/20`;$("physioLevel").textContent=`${physioLevel}/20`;
 $("trainBudgetLabel").textContent=cash(trainingBudget);$("trainBudget").value=String(trainingBudget);
 renderTrainingSystem();
 $("trainingTable").innerHTML=players.map(p=>{let sector=sectorMeta[playerSector(p)]?.name||"Elenco";return `<tr><td><b>${p.n}</b><br><span class=muted>${p.p}</span></td><td>${sector}</td><td>${p.o}</td><td>${p.c}%</td><td><select onchange="setPlayerTraining(${p.id},this.value)"><option ${p.training==="Equilibrado"?"selected":""}>Equilibrado</option><option ${p.training==="Passe"?"selected":""}>Passe</option><option ${p.training==="Finalização"?"selected":""}>Finalização</option><option ${p.training==="Defesa"?"selected":""}>Defesa</option><option ${p.training==="Velocidade"?"selected":""}>Velocidade</option><option ${p.training==="Resistência"?"selected":""}>Resistência</option></select></td><td><span class=muted>PAS ${p.attrs.passe} • CHU ${p.attrs.chute} • MAR ${p.attrs.marcacao} • VEL ${p.attrs.velocidade}</span></td></tr>`}).join("");
 renderAcademy();renderScoutingDepartment();renderFinanceSystem();
}
function renderAcademy(){
 youth=youth.map(normalizeYouthPlayer);academyLevel=academyGeneralLevel();
 $("academyLevel").textContent=academyLevel;$("academyStatus").textContent=`Centro Nível ${academyLevel}`;$("academyCount").textContent=youth.length;$("academyAvgOvr").textContent=youth.length?academyAverageOvr().toFixed(1):"—";$("academyAvgPot").textContent=youth.length?academyAveragePot().toFixed(0):"—";$("academyAvgPerf").textContent=youth.length?academyAveragePerf().toFixed(0)+"%":"—";$("youthBudgetLabel").textContent=cash(youthBudget);$("youthBudgetSelect").value=String(youthBudget);
 $("academyBudgetEffect").textContent=`Multiplicador de desenvolvimento: ${academyBudgetMultiplier().toFixed(2)}×. O orçamento também influencia a chegada de novos talentos.`;
 $("academyFacilities").innerHTML=Object.keys(academyFacilities).map(k=>{let info=academyFacilityInfo(k),lv=academyFacilities[k],cost=+(info[2]*lv).toFixed(1),pct=lv/20*100;return `<div class=facility-card><h4>${info[0]}</h4><div class=facility-level-text><span>Nível ${lv}</span><b>${lv}/20</b></div><div class=facility-level-bar><span style="width:${pct}%"></span></div><div class=facility-effect>${info[1]}</div><button class="btn secondary" ${lv>=20?'disabled':''} onclick="upgradeAcademyFacility('${k}')">${lv>=20?'Nível máximo':`Evoluir para ${lv+1} • ${cash(cost)}`}</button></div>`}).join("");
 $("youthList").innerHTML=youth.length?youth.map(p=>{let tr=youthTrend(p),trend=tr>0?`<span class=trend-up>▲ +${tr} OVR</span>`:tr<0?`<span class=trend-down>▼ ${tr}</span>`:`<span class=trend-flat>● estável</span>`,progress=Math.max(0,Math.min(100,(p.o-50)/Math.max(1,p.pot-50)*100));return `<div class=youth-card><div class=youth-card-top><div><div class=youth-name>${p.n} <span class=pill>${p.p}</span></div><span class=muted>${p.age} anos • ${trend}</span></div><span class="potential">POT ${p.pot}</span></div><div class=youth-metrics><div class=youth-metric><b>${p.o}</b><span>OVR</span></div><div class=youth-metric><b>${p.youthPerf}%</b><span>Rendimento</span></div><div class=youth-metric><b>${p.c}%</b><span>Condição</span></div><div class=youth-metric><b>${p.pot-p.o}</b><span>Margem</span></div></div><div class=progress-track><div class=progress-fill style="width:${progress}%"></div></div><div class=youth-controls><label>Foco<select onchange="setYouthTraining(${p.id},this.value)">${youthTrainingTypes.map(x=>`<option ${p.youthTraining===x?'selected':''}>${x}</option>`).join("")}</select></label><label>Intensidade<select onchange="setYouthIntensity(${p.id},this.value)">${youthIntensityTypes.map(x=>`<option ${p.youthIntensity===x?'selected':''}>${x}</option>`).join("")}</select></label><button class=btn onclick="promoteYouth(${p.id})">Profissionalizar</button></div><div class=muted style="margin-top:8px">PAS ${p.attrs.passe} • DOM ${p.attrs.dominio} • CHU ${p.attrs.chute} • MAR ${p.attrs.marcacao} • VEL ${p.attrs.velocidade} • RES ${p.attrs.resistencia}</div></div>`}).join(""):"<p class=muted>Nenhum jovem disponível. Invista na estrutura para aumentar a captação.</p>";
 let options=`<option value="all">Média da base</option>`+youth.map(p=>`<option value="${p.id}">${p.n}</option>`).join(""),sel=$("academyChartPlayer").value||"all";$("academyChartPlayer").innerHTML=options;if([...$("academyChartPlayer").options].some(o=>o.value===sel))$("academyChartPlayer").value=sel;
 let best=[...youth].sort((a,b)=>(b.pot-b.o)-(a.pot-a.o))[0],top=[...youth].sort((a,b)=>(b.youthPerf||0)-(a.youthPerf||0))[0];
 $("academyProspectHint").textContent=best?`Maior margem de evolução: ${best.n} (+${best.pot-best.o})`:"";
 $("academyReport").innerHTML=`<div class=academy-report-item><span>Melhor rendimento</span><b>${top?top.n+" • "+top.youthPerf+"%":"—"}</b></div><div class=academy-report-item><span>Maior potencial</span><b>${best?best.n+" • POT "+best.pot:"—"}</b></div><div class=academy-report-item><span>Estrutura geral</span><b>Nível ${academyLevel}/20</b></div><div class=academy-report-item><span>Ciclo de formação</span><b>${academyCycle}</b></div><div class=academy-report-item><span>Próximo talento</span><b>Chance aumenta com estrutura + orçamento</b></div>`;
 requestAnimationFrame(renderAcademyChart);
}
function renderAcademyChart(){
 let canvas=$("academyChart");if(!canvas)return;let ctx=canvas.getContext("2d"),dpr=window.devicePixelRatio||1,rect=canvas.getBoundingClientRect(),w=Math.max(320,rect.width),h=Math.max(210,rect.height);canvas.width=w*dpr;canvas.height=h*dpr;ctx.scale(dpr,dpr);ctx.clearRect(0,0,w,h);
 let id=$("academyChartPlayer").value,data,label;
 if(id==="all"){data=academyHistory.slice(-18).map(x=>({x:x.cycle,y:x.ovr,perf:x.perf}));label="OVR médio da base"}else{let p=youth.find(x=>String(x.id)===id);data=p?(p.youthHistory||[]).slice(-18).map(x=>({x:x.cycle,y:x.ovr,perf:x.perf})):[];label=p?`Evolução de ${p.n}`:"Jogador"}
 if(data.length<2){let base=id==="all"?academyAverageOvr():(youth.find(x=>String(x.id)===id)?.o||60);data=[{x:Math.max(0,academyCycle-1),y:base},{x:academyCycle,y:base}]}
 let pad={l:42,r:18,t:22,b:32},ys=data.map(x=>x.y),min=Math.max(45,Math.floor(Math.min(...ys)-3)),max=Math.min(99,Math.ceil(Math.max(...ys)+3));if(max-min<8)max=min+8;
 ctx.font="11px Arial";ctx.fillStyle="#91a79d";ctx.strokeStyle="#21362d";ctx.lineWidth=1;
 for(let i=0;i<=4;i++){let y=pad.t+(h-pad.t-pad.b)*i/4,val=(max-(max-min)*i/4).toFixed(0);ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(w-pad.r,y);ctx.stroke();ctx.fillText(val,8,y+4)}
 let pts=data.map((d,i)=>({x:pad.l+(w-pad.l-pad.r)*(data.length===1?0:i/(data.length-1)),y:pad.t+(h-pad.t-pad.b)*(max-d.y)/(max-min),v:d.y}));
 ctx.strokeStyle="#62e394";ctx.lineWidth=3;ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();ctx.fillStyle="#62e394";pts.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,3.5,0,Math.PI*2);ctx.fill()});
 ctx.fillStyle="#d9eee4";ctx.font="bold 12px Arial";ctx.fillText(label,pad.l,14);ctx.fillStyle="#91a79d";ctx.font="10px Arial";ctx.fillText(`Último: ${pts[pts.length-1].v.toFixed?pts[pts.length-1].v.toFixed(1):pts[pts.length-1].v} OVR`,pad.l,h-8);
 $("academyChartLegend").textContent="O gráfico é atualizado após cada compromisso do clube.";
}
function setYouthBudget(v){youthBudget=+v;renderAcademy();save(true)}
function setYouthTraining(id,v){let p=youth.find(x=>x.id===id);if(p&&youthTrainingTypes.includes(v)){p.youthTraining=v;save(true);renderAcademy()}}
function setYouthIntensity(id,v){let p=youth.find(x=>x.id===id);if(p&&youthIntensityTypes.includes(v)){p.youthIntensity=v;save(true);renderAcademy()}}
function upgradeAcademyFacility(k){if(!academyFacilities[k]||academyFacilities[k]>=20)return toast("Esta estrutura já está no nível máximo 20.");let info=academyFacilityInfo(k),cost=+(info[2]*academyFacilities[k]).toFixed(1);if(money<cost)return toast("Caixa insuficiente.");recordFinance(-cost,"Infraestrutura",`Base — ${info[0]}`);academyFacilities[k]++;academyLevel=academyGeneralLevel();render();save(true);toast(`${info[0]} evoluído para o nível ${academyFacilities[k]}!`)}
function setTrainingBudget(v){trainingBudget=+v;renderManagementSystems();save(true)}
function setPlayerTraining(id,v){let p=byId(id);if(p)p.training=v;save(true)}
function upgradeTraining(){let cost=4*trainingLevel;if(trainingLevel>=20)return toast("Centro de treinamento no nível máximo 20.");if(money<cost)return toast("Caixa insuficiente.");recordFinance(-cost,"Infraestrutura","Evolução do centro de treinamento");trainingLevel++;render();save(true);toast(`Centro de treinamento evoluído para o nível ${trainingLevel}!`)}
function upgradePhysio(){let cost=3.5*physioLevel;if(physioLevel>=20)return toast("Fisioterapia no nível máximo 20.");if(money<cost)return toast("Caixa insuficiente.");recordFinance(-cost,"Infraestrutura","Evolução da fisioterapia");physioLevel++;render();save(true);toast(`Fisioterapia evoluída para o nível ${physioLevel}!`)}
function upgradeAcademy(){let lowest=Object.entries(academyFacilities).sort((a,b)=>a[1]-b[1])[0];if(!lowest||lowest[1]>=20)return toast("Estrutura da base no nível máximo 20.");upgradeAcademyFacility(lowest[0])}
function promoteYouth(id){let i=youth.findIndex(x=>x.id===id);if(i<0)return;let p=youth.splice(i,1)[0];p.salary=+.03;p.contract=3;p.training="Equilibrado";p.attrs=p.attrs||makeAttrs(p);p.origin="Academia Nova FC";players.push(p);addNews("club",`${p.n} é promovido ao profissional`,`A promessa de ${p.age} anos, OVR ${p.o} e potencial ${p.pot}, assinou seu primeiro contrato profissional.`,"Base");render();save(true);toast(`${p.n} assinou contrato profissional.`)}

function rnd(a,b){return Math.floor(a+Math.random()*(b-a+1))}
function rndf(a,b){return a+Math.random()*(b-a)}
function weightedGrade(weights){let grades=["A","B","C","D","E","F"],sum=weights.reduce((a,b)=>a+b,0),r=Math.random()*sum;for(let i=0;i<grades.length;i++){r-=weights[i];if(r<=0)return grades[i]}return "F"}
function randomScoutGrade(){return weightedGrade([3,7,14,23,28,25])}
function scoutSearchDays(grade){let d=scoutGrades[grade]||scoutGrades.F;return rnd(d.minDays,d.maxDays)}
function generateScoutCandidate(){
 let grade=randomScoutGrade(),d=scoutGrades[grade];
 return {id:Date.now()+Math.floor(Math.random()*9999999),n:firstNames[Math.floor(Math.random()*firstNames.length)]+" "+lastNames[Math.floor(Math.random()*lastNames.length)],grade,exp:rnd(d.exp[0],d.exp[1]),cost:+(d.cost*rndf(.92,1.12)).toFixed(1),task:"Jogadores jovens",days:scoutSearchDays(grade),maxDays:d.maxDays};
}
function seedScoutMarket(){while(scoutMarket.length<10)scoutMarket.push(generateScoutCandidate())}
function refreshScoutMarket(){
 if(money<.2)return toast("Caixa insuficiente para renovar os candidatos.");recordFinance(-.2,"Olheiros","Renovação da lista de olheiros");scoutMarket=[];seedScoutMarket();renderManagementSystems();save(true);toast("Nova lista de olheiros disponível.");
}
function hireScout(id){
 if(scouts.length>=8)return toast("Seu departamento comporta no máximo 8 olheiros.");
 let i=scoutMarket.findIndex(s=>s.id===id);if(i<0)return;let s=scoutMarket[i];
 if(money<s.cost)return toast("Caixa insuficiente para contratar este olheiro.");
 recordFinance(-s.cost,"Olheiros",`Contratação do olheiro ${s.n} • classe ${s.grade}`);scouts.push({...s,days:scoutSearchDays(s.grade)});scoutMarket.splice(i,1);seedScoutMarket();render();save(true);toast(`${s.n}, olheiro classe ${s.grade}, contratado!`);
}
function dismissScout(id){
 let i=scouts.findIndex(s=>s.id===id);if(i<0)return;if(scouts.length<=1)return toast("Você precisa manter ao menos um olheiro.");
 let s=scouts.splice(i,1)[0];render();save(true);toast(`${s.n} deixou o departamento de olheiros.`);
}
function assignScout(id,task){let s=scouts.find(x=>x.id===id);if(s){s.task=task;s.days=scoutSearchDays(s.grade);s.maxDays=scoutGrades[s.grade].maxDays;save(true);renderManagementSystems()}}
function generateStreetTalent(scout){
 let sg=scout.grade||"F",tg=weightedGrade((scoutGrades[sg]||scoutGrades.F).weights),d=talentGrades[tg];
 let posPool=scout.task==="Atacantes"?["ATA","PD","PE"]:scout.task==="Defensores"?["ZAG","ZAG","LD","LE","VOL"]:scout.task==="Meio-campistas"?["VOL","MC","MC","MEI"]:positions;
 let pos=posPool[Math.floor(Math.random()*posPool.length)],age=rnd(d.age[0],d.age[1]),o=rnd(d.ovr[0],d.ovr[1]),pot=Math.max(o+4,rnd(d.pot[0],d.pot[1]));
 let fee=+(rndf(d.fee[0],d.fee[1])*(1+(pot-80)*.018)).toFixed(1);fee=Math.max(.1,fee);
 let p={id:Date.now()+Math.floor(Math.random()*9999999),n:firstNames[Math.floor(Math.random()*firstNames.length)]+" "+lastNames[Math.floor(Math.random()*lastNames.length)],p:pos,age,o,pot,c:100,v:+Math.max(.5,fee*1.35).toFixed(1),streetGrade:tg,origin:"Várzea"};
 p.attrs=makeAttrs(p);
 return {id:p.id,scoutId:scout.id,scoutName:scout.n,scoutGrade:sg,grade:tg,player:p,fee,foundAt:schedule.filter(x=>x.played).length,seen:false};
}
function signScoutTalent(id){
 let i=scoutReports.findIndex(r=>r.id===id);if(i<0)return;let r=scoutReports[i],p=r.player;
 if(money<r.fee)return toast("Caixa insuficiente para trazer esta promessa.");
 recordFinance(-r.fee,"Base e captação",`Contratação de talento da várzea — ${p.n}`);p.salary=+(Math.max(.02,p.o*.00075).toFixed(2));p.contract=4;p.training="Equilibrado";p.attrs=p.attrs||makeAttrs(p);players.push(p);scoutReports.splice(i,1);
 render();save(true);toast(`${p.n}, talento classe ${r.grade}, assinou com o Nova FC!`);
}
function discardScoutReport(id){scoutReports=scoutReports.filter(r=>r.id!==id);renderManagementSystems();save(true)}
function renderScoutingDepartment(){
 seedScoutMarket();
 if(!$("scoutList"))return;
 $("scoutList").innerHTML=scouts.map(s=>{let d=scoutGrades[s.grade]||scoutGrades.F,progress=Math.max(5,Math.round((1-s.days/(s.maxDays||d.maxDays+1))*100));return `<div class=scout-card><div class=scout-card-top><div><b>${s.n}</b><div class=scout-meta>${d.label} • EXP ${s.exp}<br>${s.task}</div></div><span class="grade grade-${s.grade}">${s.grade}</span></div><div class=scout-progress><span style="width:${progress}%"></span></div><div class=scout-meta>Próximo relatório em <b>${s.days}</b> compromisso(s)</div><select style="width:100%;margin-top:9px;background:#091710;color:#fff;border:1px solid var(--line);border-radius:8px;padding:8px" onchange="assignScout(${s.id},this.value)"><option ${s.task==="Jogadores jovens"?"selected":""}>Jogadores jovens</option><option ${s.task==="Atacantes"?"selected":""}>Atacantes</option><option ${s.task==="Defensores"?"selected":""}>Defensores</option><option ${s.task==="Meio-campistas"?"selected":""}>Meio-campistas</option></select><button class="btn secondary" style="width:100%;margin-top:7px;padding:7px" onclick="dismissScout(${s.id})">Dispensar</button></div>`}).join("");
 $("scoutMarket").innerHTML=scoutMarket.map(s=>{let d=scoutGrades[s.grade];return `<div class=scout-candidate><div class=scout-card-top><b>${s.n}</b><span class="grade grade-${s.grade}">${s.grade}</span></div><div class=scout-meta>${d.label}<br>EXP ${s.exp}<br>Busca: ${d.minDays}–${d.maxDays} compromissos</div><button class=btn onclick="hireScout(${s.id})">${cash(s.cost)}</button></div>`}).join("");
 $("scoutReportCount").textContent=`${scoutReports.length} relatório(s)`;
 $("scoutReports").innerHTML=scoutReports.length?scoutReports.slice().reverse().map(r=>{let p=r.player,d=talentGrades[r.grade];return `<div class="report-card talent-${r.grade}"><div class=report-top><div><span class=muted>Encontrado por ${r.scoutName} (${r.scoutGrade})</span><div class=report-player>${p.n} <span class=pill>${p.p}</span></div><span class=muted>${p.age} anos • Várzea</span></div><span class="grade grade-${r.grade}">${r.grade}</span></div><div style="margin-top:10px"><span class=muted>OVR atual</span> <b>${p.o}</b> &nbsp; <span class=muted>Potencial estimado</span> <span class=potential>${p.pot}</span></div><div class=scout-meta>${d.label} • Compensação para contratação: <b>${cash(r.fee)}</b></div><div class=report-attrs><span>PAS ${p.attrs.passe}</span><span>CHU ${p.attrs.chute}</span><span>DRI ${p.attrs.drible}</span><span>VEL ${p.attrs.velocidade}</span><span>MAR ${p.attrs.marcacao}</span><span>POS ${p.attrs.posicionamento}</span></div><div class=report-actions><button class=btn onclick="signScoutTalent(${r.id})">Contratar</button><button class="btn secondary" onclick="discardScoutReport(${r.id})">Arquivar</button></div></div>`}).join(""):`<p class=muted>Nenhum relatório novo. Dispute partidas para seus olheiros concluírem as buscas.</p>`;
}
function playerInitials(name){return name.split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join("").toUpperCase()}
function attrLabel(k){return {passe:"Passe",dominio:"Domínio",chute:"Finalização",marcacao:"Marcação",velocidade:"Velocidade",resistencia:"Resistência",drible:"Drible",posicionamento:"Posicionamento"}[k]||k}
function playerConditionLabel(c){return c>=90?"Excelente":c>=78?"Boa":c>=65?"Regular":"Desgastado"}
function playerConditionClass(c){return c>=78?"player-status-good":c>=65?"player-status-mid":"player-status-low"}
function playerRoleText(p){if(xi.includes(p.id))return "Titular";let idx=players.findIndex(x=>x.id===p.id);return idx>=0?"Elenco profissional":"Jogador"}
function ensurePlayerStats(p){
 if(!p.stats)p.stats={career:{apps:0,starts:0,goals:0,assists:0},season:{year:seasonYear,apps:0,starts:0,goals:0,assists:0},byComp:{}};
 if(!p.stats.career)p.stats.career={apps:0,starts:0,goals:0,assists:0};
 if(!p.stats.season||p.stats.season.year!==seasonYear)p.stats.season={year:seasonYear,apps:0,starts:0,goals:0,assists:0};
 p.stats.byComp=p.stats.byComp||{};return p.stats;
}
function compPlayerStats(p,comp){let s=ensurePlayerStats(p);if(!s.byComp[comp])s.byComp[comp]={year:seasonYear,apps:0,starts:0,goals:0,assists:0};if(s.byComp[comp].year!==seasonYear)s.byComp[comp]={year:seasonYear,apps:0,starts:0,goals:0,assists:0};return s.byComp[comp]}
let currentMatchContrib={goals:{},assists:{}},matchStartingXI=[];
function statAdd(id,key,n=1,comp=currentGame()?.comp){
 let p=byId(+id);if(!p)return;let s=ensurePlayerStats(p);s.career[key]=(s.career[key]||0)+n;s.season[key]=(s.season[key]||0)+n;if(comp){let c=compPlayerStats(p,comp);c[key]=(c[key]||0)+n}
}
function weightedNovaAttacker(ids){
 let pool=ids.map(byId).filter(Boolean);if(!pool.length)return null;
 let weights=pool.map(p=>Math.max(1,(p.attrs?.chute||p.o)-45+(["ATA","PE","PD","MEI"].includes(p.p)?18:0))),total=weights.reduce((a,b)=>a+b,0),r=Math.random()*total;
 for(let i=0;i<pool.length;i++){r-=weights[i];if(r<=0)return pool[i]}return pool[pool.length-1];
}
function recordNovaGoal(){
 let scorer=weightedNovaAttacker(matchXI);if(!scorer)return;
 currentMatchContrib.goals[scorer.id]=(currentMatchContrib.goals[scorer.id]||0)+1;
 let assistPool=matchXI.filter(id=>id!==scorer.id&&byId(id));
 if(assistPool.length&&Math.random()<.78){let assister=assistPool[Math.floor(Math.random()*assistPool.length)];currentMatchContrib.assists[assister]=(currentMatchContrib.assists[assister]||0)+1;event(`🎯 ${byId(assister)?.n} deu a assistência para ${scorer.n}.`)}
 else event(`⚽ ${scorer.n} marcou para o Nova FC!`);
}
function allocateAssistantGoals(count){
 currentMatchContrib={goals:{},assists:{}};
 for(let i=0;i<count;i++){let scorer=weightedNovaAttacker(matchXI);if(!scorer)continue;currentMatchContrib.goals[scorer.id]=(currentMatchContrib.goals[scorer.id]||0)+1;let pool=matchXI.filter(id=>id!==scorer.id&&byId(id));if(pool.length&&Math.random()<.78){let a=pool[Math.floor(Math.random()*pool.length)];currentMatchContrib.assists[a]=(currentMatchContrib.assists[a]||0)+1}}
}
function commitMatchPlayerStats(g){
 let appeared=new Set(Object.entries(matchMinutes).filter(([,m])=>+m>0).map(([id])=>+id));
 appeared.forEach(id=>{statAdd(id,"apps",1,g.comp);if(matchStartingXI.includes(id))statAdd(id,"starts",1,g.comp)});
 Object.entries(currentMatchContrib.goals).forEach(([id,n])=>statAdd(+id,"goals",+n,g.comp));
 Object.entries(currentMatchContrib.assists).forEach(([id,n])=>statAdd(+id,"assists",+n,g.comp));
}
function stableHash(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return Math.abs(h>>>0)}
function rivalLeagueLeaders(){
 let clubs=currentLeagueClubs.filter(n=>n!==CONTROLLED_CLUB),rounds=Math.max(0,...standings.map(x=>x.j||0)),rows=[];
 clubs.forEach(club=>{let loc=findClubLocation(club),roster=[];try{roster=getClubRoster(loc.country,loc.league,club)}catch(e){};roster.slice().sort((a,b)=>b.o-a.o).slice(0,5).forEach((p,i)=>{let h=stableHash(`${seasonYear}|${club}|${p.n}`),attack=["ATA","PE","PD","MEI"].includes(p.p)?1.25:1,apps=Math.max(0,Math.min(rounds,rounds-(h%4))),goals=Math.floor(apps*(.08+(h%19)/100)*attack),assists=Math.floor(apps*(.05+((h>>5)%15)/100)*(p.p==="MEI"||p.p==="MC"?1.2:1));rows.push({name:p.n,club,pos:p.p,apps,goals,assists,ga:goals+assists,nova:false})})});
 return rows;
}
function leagueLeaderRows(){
 let comp=currentLeagueName(),mine=players.map(p=>{let c=compPlayerStats(p,comp);return{name:p.n,club:CONTROLLED_CLUB,pos:p.p,apps:c.apps||0,goals:c.goals||0,assists:c.assists||0,ga:(c.goals||0)+(c.assists||0),nova:true}});return mine.concat(rivalLeagueLeaders());
}
function setLeagueStatView(v,btn){leagueStatView=v;document.querySelectorAll(".stats-leader-tabs button").forEach(b=>b.classList.toggle("active",b===btn));renderLeaguePlayerStats()}
function renderLeaguePlayerStats(){
 if(!$("leaguePlayerLeaders"))return;let labels={goals:"gols",assists:"assist.",ga:"particip.",apps:"jogos"},rows=leagueLeaderRows().sort((a,b)=>b[leagueStatView]-a[leagueStatView]||b.goals-a.goals||b.assists-a.assists).slice(0,12);
 $("leagueStatsRound").textContent=`${Math.max(0,...standings.map(x=>x.j||0))} rodadas`;
 $("leaguePlayerLeaders").innerHTML=rows.map((r,i)=>`<div class="leader-row ${r.nova?"nova":""}"><span class=leader-rank>${i+1}</span><div class=leader-name><b>${r.name}</b><span>${r.club} • ${r.pos}${r.nova?" • NOVA FC":""}</span></div><div class=leader-value>${r[leagueStatView]}<small>${labels[leagueStatView]}</small></div></div>`).join("");
}
function awardIndividualSeasonHonors(){
 let season=seasonLabel(),keyBase=`${season}|`,seasonPlayers=players.map(p=>({p,s:ensurePlayerStats(p).season})).filter(x=>x.s.apps>0);if(!seasonPlayers.length)return;
 let top=(fn)=>[...seasonPlayers].sort((a,b)=>fn(b)-fn(a)||b.s.goals-a.s.goals||b.p.o-a.p.o)[0];
 let awards=[
  {name:"Artilheiro do Nova FC",icon:"⚽",x:top(x=>x.s.goals),detail:x=>`${x.s.goals} gols na temporada`},
  {name:"Rei das Assistências",icon:"🎯",x:top(x=>x.s.assists),detail:x=>`${x.s.assists} assistências na temporada`},
  {name:"Melhor Jogador da Temporada",icon:"⭐",x:top(x=>x.s.goals*4+x.s.assists*3+x.s.apps*.35+x.p.o*.08),detail:x=>`${x.s.goals} gols • ${x.s.assists} assistências • ${x.s.apps} jogos`}
 ];
 let young=seasonPlayers.filter(x=>x.p.age<=21);if(young.length)awards.push({name:"Melhor Jovem",icon:"🌟",x:[...young].sort((a,b)=>(b.s.goals*4+b.s.assists*3+b.s.apps*.3+b.p.o*.1)-(a.s.goals*4+a.s.assists*3+a.s.apps*.3+a.p.o*.1))[0],detail:x=>`${x.p.age} anos • ${x.s.goals} gols • ${x.s.assists} assistências`});
 awards.forEach(a=>{if(!a.x)return;let key=keyBase+a.name;if(individualAwards.some(x=>x.key===key))return;individualAwards.unshift({key,season,name:a.name,icon:a.icon,player:a.x.p.n,detail:a.detail(a.x)});addNews("club",`${a.icon} ${a.x.p.n} — ${a.name}`,`${a.detail(a.x)} • ${season}.`,"Prêmio individual")});
}
function playerPotentialText(p){if(p.pot)return String(p.pot);return p.age<=23?"Em avaliação":"—"}
function playerDevelopmentText(p){
 if(!p.pot)return p.age<=23?"O departamento técnico ainda está avaliando o teto de desenvolvimento deste jogador.":"Jogador consolidado no elenco profissional.";
 let gap=p.pot-p.o;if(gap>=15)return "Grande margem de evolução";if(gap>=8)return "Boa margem de evolução";if(gap>=3)return "Próximo do potencial";return "Muito próximo do teto estimado";
}
function playerDetails(id){
 let p=byId(id);if(!p)return toast("Jogador não encontrado.");
 p.attrs=p.attrs||makeAttrs(p);
 let attrs=["passe","dominio","chute","marcacao","velocidade","resistencia","drible","posicionamento"];
 let pot=p.pot||null,gap=pot?Math.max(0,pot-p.o):null,devPct=pot?Math.max(0,Math.min(100,((p.o-50)/Math.max(1,pot-50))*100)):Math.max(0,Math.min(100,(p.o-50)*2));
 let origin=p.origin||"Elenco principal",training=p.training||"Equilibrado",renewals=p.renewals||0;
 let blocked=(p.negotiationBlockedUntilGame||0)>schedule.filter(x=>x.played).length;
 $("playerProfileContent").innerHTML=`
 <div class="player-profile-head">
   <div class="player-avatar">${playerInitials(p.n)}</div>
   <div class="player-profile-name"><h2>${p.n}</h2><p class="muted"><span class="pill">${p.p}</span> • ${p.age} anos • ${playerRoleText(p)}</p></div>
   <div class="player-overall"><b>${p.o}</b><span>Overall</span></div>
 </div>
 <div class="player-career-stats">
   <div class="career-stat"><b>${ensurePlayerStats(p).season.apps}</b><span>Jogos na temporada</span></div>
   <div class="career-stat"><b>${ensurePlayerStats(p).season.goals}</b><span>Gols na temporada</span></div>
   <div class="career-stat"><b>${ensurePlayerStats(p).season.assists}</b><span>Assistências na temporada</span></div>
   <div class="career-stat"><b>${ensurePlayerStats(p).season.goals+ensurePlayerStats(p).season.assists}</b><span>Participações</span></div>
 </div>
 <div class="player-summary-grid">
   <div class="player-summary-item"><b>${playerPotentialText(p)}</b><span>Potencial</span></div>
   <div class="player-summary-item"><b class="${playerConditionClass(p.c)}">${p.c}%</b><span>Condição</span></div>
   <div class="player-summary-item"><b>${cash(p.v)}</b><span>Valor</span></div>
   <div class="player-summary-item"><b>${cash(p.salary)}</b><span>Salário/comp.</span></div>
   <div class="player-summary-item"><b>${p.contract}</b><span>Temp. contrato</span></div>
   <div class="player-summary-item"><b>${training}</b><span>Treino</span></div>
 </div>
 <div class="player-profile-grid">
   <div class="player-profile-panel">
     <h3>📊 Atributos técnicos e físicos</h3>
     ${attrs.map(k=>`<div class="attr-row"><span>${attrLabel(k)}</span><div class="attr-track"><div class="attr-fill" style="width:${p.attrs[k]}%"></div></div><b>${p.attrs[k]}</b></div>`).join("")}
   </div>
   <div class="player-profile-panel">
     <h3>📋 Informações</h3>
     <div class="player-info-row"><span>Posição</span><b>${p.p}</b></div>
     <div class="player-info-row"><span>Idade</span><b>${p.age} anos</b></div>
     <div class="player-info-row"><span>Status no elenco</span><b>${playerRoleText(p)}</b></div>
     <div class="player-info-row"><span>Condição</span><b class="${playerConditionClass(p.c)}">${playerConditionLabel(p.c)} • ${p.c}%</b></div>
     <div class="player-info-row"><span>Origem</span><b>${origin}</b></div>
     <div class="player-info-row"><span>Renovações</span><b>${renewals}</b></div>
     <div class="player-info-row"><span>Partidas na carreira</span><b>${ensurePlayerStats(p).career.apps}</b></div>
     <div class="player-info-row"><span>Titularidades na carreira</span><b>${ensurePlayerStats(p).career.starts}</b></div>
     <div class="player-info-row"><span>Gols na carreira</span><b>${ensurePlayerStats(p).career.goals}</b></div>
     <div class="player-info-row"><span>Assistências na carreira</span><b>${ensurePlayerStats(p).career.assists}</b></div>
     <div class="player-info-row"><span>Negociação</span><b class="${blocked?'player-status-mid':'player-status-good'}">${blocked?"Aguardando estafe":"Disponível"}</b></div>
     <div class="player-development">
       <b>Desenvolvimento</b><div class="muted" style="margin-top:4px">${playerDevelopmentText(p)}</div>
       <div class="player-development-bar"><div class="player-development-fill" style="width:${devPct}%"></div></div>
       <span class="muted">${pot?`OVR ${p.o} de POT ${pot}${gap!==null?` • margem +${gap}`:""}`:`OVR atual ${p.o} • potencial ainda não definido`}</span>
     </div>
   </div>
 </div>
 <div class="player-profile-actions">
   <button class="btn" onclick="closePlayerDetails();openContractModal(${p.id})">Renovar contrato</button>
   <button class="btn secondary" onclick="closePlayerDetails();go('training')">Ir para treinos</button>
   <button class="btn secondary" onclick="closePlayerDetails()">Fechar ficha</button>
 </div>`;
 $("playerModal").classList.add("open");
}
function closePlayerDetails(){$("playerModal").classList.remove("open")}
function advanceClubSystems(){
 let wages=players.reduce((a,p)=>a+p.salary,0);recordFinance(-wages,"Salários","Folha salarial do elenco");recordFinance(-trainingBudget,"Investimentos","Orçamento do centro de treinamento");recordFinance(-youthBudget,"Investimentos","Orçamento da divisão de base");if(marketingBudget>0){recordFinance(-marketingBudget,"Marketing","Investimento em marca e relacionamento com torcedores");fans=Math.round(fans*(1+.0008+marketingBudget*.0025))}
 players.forEach(p=>{
   let sector=playerSector(p),cfg=sectorTraining[sector]||{focus:"",intensity:"Normal"},intensityMult=cfg.intensity==="Alta"?1.28:cfg.intensity==="Leve"?.78:1,wear=cfg.intensity==="Alta"?4:cfg.intensity==="Leve"?0:2;
   p.c=Math.min(100,p.c+8+physioLevel*3-wear);
   let ceiling=p.pot||95,gap=Math.max(0,ceiling-p.o),prospectBoost=p.pot?Math.min(2.4,1+gap/28):1,chance=Math.min(.72,.035*trainingLevel*(trainingBudget/.35)*prospectBoost*intensityMult);
   if(p.o<ceiling&&Math.random()<chance){
     p.o=Math.min(ceiling,p.o+1);
     let individualKey=p.training==="Passe"?"passe":p.training==="Finalização"?"chute":p.training==="Defesa"?"marcacao":p.training==="Velocidade"?"velocidade":p.training==="Resistência"?"resistencia":null;
     let sectorKey=sectorAttrKey(sector,cfg.focus);if(individualKey)p.attrs[individualKey]=Math.min(99,p.attrs[individualKey]+1);if(sectorKey)p.attrs[sectorKey]=Math.min(99,p.attrs[sectorKey]+1);
   }else{
     let sectorKey=sectorAttrKey(sector,cfg.focus);if(sectorKey&&Math.random()<Math.min(.68,.10*trainingLevel*intensityMult))p.attrs[sectorKey]=Math.min(99,p.attrs[sectorKey]+1);
   }
 });
 scouts.forEach(s=>{
   s.days--;
   if(s.days<=0){
     let report=generateStreetTalent(s);scoutReports.push(report);s.exp=Math.min(99,s.exp+1);s.days=scoutSearchDays(s.grade);s.maxDays=scoutGrades[s.grade].maxDays;
     if(report.grade==="A")toast(`⭐ ${s.n} encontrou uma JOIA CLASSE A na várzea!`);
   }
 });
 advanceAcademy();academyLevel=academyGeneralLevel();
 let intakeChance=Math.min(.22,.018*academyLevel*academyBudgetMultiplier()*(1+academyFacilities.analysis*.08));
 if(Math.random()<intakeChance && youth.length<18){let np=generateAcademyProspect();youth.push(np);addNews("club",`Novo talento chega à Academia`,`A captação da base integrou ${np.n}, ${np.p}, ${np.age} anos, OVR ${np.o}.`,"Base");if(np.pot>=90)toast(`🌟 A Academia recebeu uma promessa de alto potencial: ${np.n}!`)}
}
function renderStadium(){
 $("stadCap").textContent=capacity().toLocaleString("pt-BR")+" lugares";$("stadLevel").textContent=`Nível ${Math.round((stadium.stands+stadium.facilities+stadium.lighting+stadium.vip)/4)}/20`;$("stadRevenue").textContent=`${cash(ticketRevenue()+stadiumExtrasRevenue())} • ingresso R$ ${ticketPrice}`;$("stadMoney").textContent=cash(money);
 let defs=[["stands","Arquibancadas","Amplia gradualmente a Nova Arena até 100.000 lugares",8],["facilities","Instalações","Melhora conforto, operação e estrutura geral do estádio",5],["lighting","Iluminação","Moderniza jogos noturnos, eventos e infraestrutura técnica",4],["vip","Setor VIP","Aumenta a receita premium por jogo em casa",6]];
 $("upgrades").innerHTML=defs.map(d=>{let lv=stadium[d[0]],cost=d[3]*lv,pct=lv/20*100,nextCap=d[0]==="stands"&&lv<20?(()=>{let old=stadium.stands;stadium.stands=lv+1;let c=capacity();stadium.stands=old;return c})():null;return `<div class=upgrade><div style="flex:1"><b>${d[1]}</b> <span class=level>Nível ${lv}/20</span><div class=muted>${d[2]}${nextCap?` • Próximo nível: ${nextCap.toLocaleString("pt-BR")} lugares`:""}</div><div class=upgrade-progress><span style="width:${pct}%"></span></div></div><button class=btn ${lv>=20?"disabled":""} onclick="upgrade('${d[0]}',${cost})">${lv>=20?"Máximo":"Evoluir • "+cash(cost)}</button></div>`}).join("");
}
function renderMatchHeader(){
 let g=currentGame();if(!g){$("matchComp").textContent="Temporada concluída";$("homeName").textContent=CONTROLLED_CLUB;$("awayName").textContent="—";if($("opponentStrength"))$("opponentStrength").textContent="Sem adversário";$("start").disabled=true;return}
 $("matchComp").textContent=`${g.comp} • ${g.stage} • ${fmtDate(g.date)}`;$("homeName").textContent=g.home?CONTROLLED_CLUB:g.opp;$("awayName").textContent=g.home?g.opp:CONTROLLED_CLUB;$("matchVenue").textContent=g.home?"Nova Arena • Casa":"Estádio adversário • Fora";
 if($("opponentStrength"))$("opponentStrength").textContent=opponentStrengthLabel(g);if(!running)$("start").disabled=false;
}
function upgrade(k,cost){if(stadium[k]>=20)return toast("Esta estrutura já está no nível máximo 20.");if(money<cost)return toast("Caixa insuficiente para essa melhoria.");recordFinance(-cost,"Infraestrutura",`Melhoria do estádio — ${k}`);stadium[k]++;render();save(true);toast(`${k==="stands"?"Arquibancadas":"Estrutura"} evoluída para o nível ${stadium[k]}!`)}
function swap(id){
 if(selectedSlot===null)return toast("Selecione uma posição no campo primeiro.");
 let p=byId(id);if(!p)return;let oldId=xi[selectedSlot];if(oldId===id){selectedSlot=null;return render()}
 xi[selectedSlot]=id;benchSelection=benchSelection.filter(x=>x!==id);
 if(oldId&&!xi.includes(oldId)&&!benchSelection.includes(oldId))benchSelection.unshift(oldId);
 benchSelection=benchSelection.slice(0,BENCH_LIMIT);normalizeBenchSelection();selectedSlot=null;save(true);render();toast(`${p.n} entrou no time titular.`);
}
const firstNames=["Arthur","Enzo","Gustavo","Leonardo","Miguel","Rafael","Nicolas","Samuel","Thiago","Gabriel","Matías","Tomás","Lorenzo","Bruno","Daniel"];
const lastNames=["Moura","Castro","Farias","Campos","Barros","Pires","Ramos","Vega","Silva","Torres","Rojas","Ferreira","Lima","Costa","Mendes"];
const positions=["GOL","LD","ZAG","ZAG","LE","VOL","MC","MEI","PD","PE","ATA"];

function addNews(type,title,text,tag="Geral"){
 worldNews.unshift({id:Date.now()+Math.floor(Math.random()*99999),type,title,text,tag,game:schedule.filter(x=>x.played).length});
 if(worldNews.length>70)worldNews=worldNews.slice(0,70);
}
function seedWorldNews(){
 if(worldNews.length)return;
 addNews("league","Temporada em movimento","As principais ligas do mundo fictício iniciam mais uma rodada.","Mundo");
 addNews("transfer","Mercado internacional aquecido","Clubes de diferentes países monitoram reforços para a sequência da temporada.","Mercado");
 addNews("club","Nova FC inicia novo ciclo","Diretoria aposta em estrutura, observação e gestão financeira para crescer.",CONTROLLED_CLUB);
}
function randomWorldClub(exclude=""){
 let countries=Object.keys(worldDB),c=countries[Math.floor(Math.random()*countries.length)],leagues=Object.keys(worldDB[c].leagues),l=leagues[Math.floor(Math.random()*leagues.length)],clubs=worldDB[c].leagues[l].filter(x=>x!==exclude),club=clubs[Math.floor(Math.random()*clubs.length)];return{country:c,league:l,club};
}
function generateWorldNews(){
 let a=randomWorldClub(),b=randomWorldClub(a.club),roll=Math.random();
 if(roll<.48){let n=firstNames[Math.floor(Math.random()*firstNames.length)]+" "+lastNames[Math.floor(Math.random()*lastNames.length)],ovr=rnd(69,88),fee=+Math.max(1.5,(ovr-64)*.8+rndf(0,5)).toFixed(1);addNews("transfer",`${a.club} anuncia ${n}`,`${n}, OVR ${ovr}, deixa ${b.club} e chega por aproximadamente ${cash(fee)}.`,"Contratação")}
 else if(roll<.78){let t=seededWorldTable(a.country,a.league),leader=[...t].sort((x,y)=>y.pts-x.pts)[0];addNews("league",`${a.league}: disputa pela liderança`,`${leader.n} aparece no topo após a rodada em ${a.country}.`,a.country)}
 else{addNews("spotlight",`${a.club} vive boa fase`,`O clube ganhou destaque no noticiário de ${a.country} após a rodada mais recente.`,"Destaque")}
 if(Math.random()<.42){let c=randomWorldClub(),d=randomWorldClub(c.club),n=firstNames[rnd(0,firstNames.length-1)]+" "+lastNames[rnd(0,lastNames.length-1)];addNews("transfer",`${c.club} fecha reforço`,`${n} foi apresentado após negociação com ${d.club}.`,"Contratação")}
}
function renderDashboardNews(){
 seedWorldNews();if(!$('worldNewsFeed'))return;
 let general=worldNews.filter(n=>n.type!=="transfer").slice(0,7),transfers=worldNews.filter(n=>n.type==="transfer").slice(0,6);
 $('worldNewsFeed').innerHTML=general.length?general.map(n=>`<div class=news-item><span class=news-tag>${n.tag}</span><div><b>${n.title}</b><p>${n.text}</p></div></div>`).join(""):'<span class=muted>As notícias aparecerão conforme a temporada avançar.</span>';
 $('transferNewsFeed').innerHTML=transfers.length?transfers.map(n=>`<div class=transfer-news><b>${n.title}</b><span>${n.text}</span></div>`).join(""):'<span class=muted>Nenhuma contratação noticiada ainda.</span>';
}
function contractDemand(p){
 let potential=p.pot||Math.min(94,p.o+6),ageFactor=p.age<=21?1.10:p.age>=31?.92:1,star=1+Math.max(0,p.o-72)*.025+Math.max(0,potential-84)*.009;
 let salary=+Math.max(p.salary*1.06,p.o*.00115*star*ageFactor).toFixed(2),bonus=+Math.max(.08,salary*(4+Math.max(0,p.o-75)*.18)).toFixed(2);return{salary,bonus};
}
function openContractModal(id){
 let p=byId(id);if(!p)return toast("Jogador não encontrado.");
 let played=schedule.filter(x=>x.played).length,blocked=Math.max(0,(p.negotiationBlockedUntilGame||0)-played);
 contractTalkPlayerId=id;let d=contractDemand(p);
 $('contractPlayerHead').innerHTML=`<h2>Renovação • ${p.n}</h2><p class=muted>${p.p} • ${p.age} anos • OVR ${p.o}${p.pot?` • POT ${p.pot}`:''}</p><div class=finance>Contrato atual: <b>${p.contract} temporada(s)</b> • ${cash(p.salary)}/compromisso</div><div class=finance>Pedida do estafe: <b>${cash(d.salary)}/compromisso</b> + luvas</div>${blocked?`<div class=contract-block-notice>Negociação em espera: o estafe aceita uma nova proposta após mais <b>${blocked} compromisso(s)</b>.</div>`:""}`;
 $('contractYears').value=String(Math.min(5,Math.max(2,p.contract)));$('contractSalaryPct').value='1';updateContractPreview();$('contractModal').classList.add('open');
}
function closeContractModal(){$('contractModal').classList.remove('open');contractTalkPlayerId=null}
function updateContractPreview(){let p=byId(contractTalkPlayerId);if(!p)return;let d=contractDemand(p),years=+$('contractYears').value,pct=+$('contractSalaryPct').value,salary=+(d.salary*pct).toFixed(2),bonus=+(d.bonus*(.75+years*.12)).toFixed(2);$('contractOfferPreview').innerHTML=`Novo salário: <b>${cash(salary)}/compromisso</b><br>Duração: <b>${years} temporada(s)</b><br>Luvas na assinatura: <b>${cash(bonus)}</b>`}
function submitContractOffer(){
 let p=byId(contractTalkPlayerId);if(!p)return;let played=schedule.filter(x=>x.played).length,blocked=Math.max(0,(p.negotiationBlockedUntilGame||0)-played);if(blocked)return toast(`Aguarde mais ${blocked} compromisso(s) para enviar uma nova proposta.`);
 let d=contractDemand(p),years=+$('contractYears').value,pct=+$('contractSalaryPct').value,salary=+(d.salary*pct).toFixed(2),bonus=+(d.bonus*(.75+years*.12)).toFixed(2);if(money<bonus)return toast('Caixa insuficiente para pagar as luvas.');
 let importance=xi.includes(p.id)?.06:0,ageFit=(p.age>=29&&years>=4)?-.08:(p.age<=23&&years>=3)?.05:0,chance=.24+(pct-.85)*2.5+importance+ageFit;if(pct>=1.10)chance=.99;if(pct>=1)chance=Math.max(chance,.82);
 if(Math.random()>chance){p.negotiationBlockedUntilGame=schedule.filter(x=>x.played).length+2;toast(`${p.n} recusou a proposta e espera melhores condições.`);addNews('club',`${p.n} ainda não renova`,`As primeiras conversas por um novo contrato não chegaram a um acordo.`,CONTROLLED_CLUB);save(true);return}
 recordFinance(-bonus,'Contratos',`Luvas de renovação — ${p.n}`);p.salary=salary;p.contract=years;p.renewals=(p.renewals||0)+1;addNews('club',`${p.n} renova com o Nova FC`,`O ${p.p} assinou por ${years} temporada(s), com novo salário de ${cash(salary)} por compromisso.`,"Renovação");closeContractModal();render();save(true);toast(`${p.n} renovou por ${years} temporada(s)!`)
}
function assistantGrade(score){return score>=88?'A':score>=80?'B':score>=71?'C':score>=62?'D':'E'}
function generateAssistant(){let tactical=rnd(58,94),subs=rnd(55,94),motivation=rnd(58,95),overall=Math.round((tactical*1.35+subs+motivation)/3.35),grade=assistantGrade(overall),mult={A:2.1,B:1.55,C:1.15,D:.85,E:.62}[grade];return{id:Date.now()+Math.floor(Math.random()*9999999),name:assistantNames[rnd(0,assistantNames.length-1)],tactical,subs,motivation,overall,grade,style:assistantStyles[rnd(0,assistantStyles.length-1)],signing:+(.35*mult+rndf(.05,.3)).toFixed(2),salary:+(.035*mult+rndf(.005,.025)).toFixed(2),matches:0,wins:0}}
function seedAssistantMarket(){while(assistantMarket.length<6){let a=generateAssistant();if(!assistantMarket.some(x=>x.name===a.name)&&(!assistantCoach||assistantCoach.name!==a.name))assistantMarket.push(a)}}
function refreshAssistantMarket(){assistantMarket=[];seedAssistantMarket();renderAssistantDepartment();save(true);toast('Lista de auxiliares atualizada sem custo.')}
function hireAssistant(id){
 let i=assistantMarket.findIndex(a=>a.id===id);if(i<0)return;
 let a=assistantMarket[i];if(money<a.signing)return toast('Caixa insuficiente para contratar este auxiliar.');
 recordFinance(-a.signing,'Comissão técnica',`Contratação do auxiliar — ${a.name}`);
 assistantCoach={...a,paidOnce:true};assistantMarket.splice(i,1);seedAssistantMarket();
 addNews('club',`${a.name} chega à comissão técnica`,`O auxiliar classe ${a.grade}, especialista em ${a.style.toLowerCase()}, foi contratado pelo Nova FC por pagamento único de ${cash(a.signing)}.`,CONTROLLED_CLUB);
 render();save(true);toast(`${a.name} é o novo auxiliar técnico. Não haverá cobrança por partida.`)
}
function dismissAssistant(){
 if(!assistantCoach)return;let n=assistantCoach.name;assistantCoach=null;render();save(true);toast(`${n} deixou a comissão técnica sem custo adicional.`)
}
function renderAssistantDepartment(){
 seedAssistantMarket();if(!$('activeAssistant'))return;$('assistantStatus').textContent=assistantCoach?`${assistantCoach.name} • Classe ${assistantCoach.grade}`:'Sem auxiliar contratado';
 $('activeAssistant').innerHTML=assistantCoach?`<div class=active-assistant-card><div class=assistant-card-top><div><h2 style="margin-bottom:4px">${assistantCoach.name}</h2><div class=assistant-style>${assistantCoach.style}</div><div class=assistant-money>${assistantCoach.matches||0} partidas comandadas • ${assistantCoach.wins||0} vitórias</div></div><span class=assistant-grade>${assistantCoach.grade}</span></div><div class=assistant-skills><div><span>TÁTICA</span><b>${assistantCoach.tactical}</b></div><div><span>SUBSTITUIÇÕES</span><b>${assistantCoach.subs}</b></div><div><span>MOTIVAÇÃO</span><b>${assistantCoach.motivation}</b></div></div><div class=assistant-money>Pagamento: <b>já quitado na contratação</b><br>Uso nas partidas: <b>grátis</b></div><div class=assistant-actions><button class="btn assistant-match-btn" onclick="assistantSimulateMatch()">Comandar próximo jogo</button><button class="btn secondary" onclick="dismissAssistant()">Rescindir</button></div></div>`:'<div class=empty-slot><div><b>Nenhum auxiliar técnico contratado</b><br><span>Contrate um profissional abaixo com pagamento único para liberar a simulação comandada sem custo por partida.</span></div></div>';
 $('assistantMarket').innerHTML=assistantMarket.map(a=>`<div class=assistant-card><div class=assistant-card-top><div><b>${a.name}</b><div class=assistant-style>${a.style}</div></div><span class=assistant-grade>${a.grade}</span></div><div class=assistant-skills><div><span>TÁTICA</span><b>${a.tactical}</b></div><div><span>SUBS.</span><b>${a.subs}</b></div><div><span>MOTIVAÇÃO</span><b>${a.motivation}</b></div></div><div class=assistant-money>Contratação: <b>${cash(a.signing)}</b><br>Depois de contratado: <b>sem custo por partida</b></div><button class=btn style="width:100%;margin-top:9px" onclick="hireAssistant(${a.id})">Contratar</button></div>`).join('');
}
function opponentRating(g){
 if(!g||!g.opp)return 75;
 try{
   let loc=findClubLocation(g.opp),roster=getClubRoster(loc.country,loc.league,g.opp),rating=worldSquadOverall(roster);
   if(Number.isFinite(rating)&&rating>0)return Math.max(58,Math.min(94,rating));
 }catch(err){console.warn("Não foi possível calcular força pelo elenco rival:",err)}
 let h=[...g.opp].reduce((a,c)=>a+c.charCodeAt(0),0);
 return Math.max(62,Math.min(88,70+(h%15)));
}
function opponentDifficultyMultiplier(g){return Math.max(.74,Math.min(1.24,opponentRating(g)/79))}
function opponentStrengthLabel(g){
 let o=opponentRating(g),level=o>=86?"Elite":o>=81?"Muito forte":o>=76?"Forte":o>=71?"Equilibrado":"Acessível";
 return `Força do adversário: OVR ${o} • ${level}`;
}
function poisson(lambda){let L=Math.exp(-lambda),k=0,p=1;do{k++;p*=Math.random()}while(p>L&&k<8);return k-1}
function assistantSimulateMatch(){
 try{

 let g=currentGame();if(!g)return toast('Não há partida disponível.');if(running)return toast('Uma partida já está em andamento.');if(!assistantCoach)return toast('Contrate um auxiliar técnico primeiro.');running=true;
 normalizeBenchSelection();currentMatchContrib={goals:{},assists:{}};matchXI=[...xi];matchStartingXI=[...matchXI];matchBench=benchSelection.filter(id=>!matchXI.includes(id)&&byId(id)).sort((a,b)=>{let A=byId(a),B=byId(b);return ((B?.o||0)+(B?.c||0)*.08)-((A?.o||0)+(A?.c||0)*.08)});matchSubs=[];matchMinutes={};matchXI.forEach(id=>matchMinutes[id]=90);
 let starters=matchXI.map(byId).filter(Boolean),avg=starters.reduce((a,p)=>a+p.o*(.78+.22*p.c/100),0)/Math.max(1,starters.length),opp=opponentRating(g),coach=(assistantCoach.tactical-70)*.055+(assistantCoach.motivation-70)*.025,styleBonus=assistantCoach.style==='Contra-ataque'?.7:assistantCoach.style==='Pressão alta'?.5:assistantCoach.style==='Posse de bola'?.35:0;
 let subCount=Math.max(2,Math.min(5,Math.round(2+(assistantCoach.subs-55)/14))),outCandidates=[...starters].sort((a,b)=>(a.c+a.o*.3)-(b.c+b.o*.3));for(let k=0;k<Math.min(subCount,matchBench.length,outCandidates.length);k++){let out=outCandidates[k],inn=byId(matchBench[k]);if(!inn)continue;let idx=matchXI.indexOf(out.id);if(idx<0)continue;matchXI[idx]=inn.id;matchMinutes[out.id]=60+rnd(0,12);matchMinutes[inn.id]=90-matchMinutes[out.id];matchSubs.push({out:out.id,in:inn.id,min:matchMinutes[out.id]})}
 let strength=(avg+coach+styleBonus)/Math.max(65,opp),home=g.home?1.08:.96,lambdaFor=Math.max(.35,Math.min(3.1,1.28*strength*home)),lambdaAgainst=Math.max(.3,Math.min(2.9,1.20/strength*(g.home?.94:1.08)));let nova=poisson(lambdaFor),rival=poisson(lambdaAgainst);nova=Math.min(6,nova);rival=Math.min(6,rival);homeGoals=g.home?nova:rival;awayGoals=g.home?rival:nova;min=90;allocateAssistantGoals(nova);
 st={poss:Math.round(Math.max(34,Math.min(66,50+(avg-opp)*.7+(assistantCoach.style==='Posse de bola'?7:assistantCoach.style==='Contra-ataque'?-5:0)))),sh:rnd(7,15)+nova*2,sa:rnd(6,14)+rival*2,oh:rnd(3,7)+nova,oa:rnd(2,7)+rival,ch:rnd(2,7),ca:rnd(1,7),fh:rnd(7,15),fa:rnd(7,15),ph:rnd(290,510),pa:rnd(280,500)};
 liveTactics={mentality:nova<rival?'attacking':'balanced',style:assistantCoach.style==='Posse de bola'?'possession':assistantCoach.style==='Contra-ataque'?'counter':assistantCoach.style==='Jogo direto'?'direct':'balanced',press:assistantCoach.style==='Pressão alta'?'high':'medium',tempo:'normal',line:'medium'};assistantCoach.matches=(assistantCoach.matches||0)+1;if(nova>rival)assistantCoach.wins=(assistantCoach.wins||0)+1;
 addNews('club',`${assistantCoach.name} comandou o Nova FC`,`${g.comp}: ${g.home?CONTROLLED_CLUB:g.opp} ${homeGoals} × ${awayGoals} ${g.home?g.opp:CONTROLLED_CLUB}. O auxiliar utilizou ${matchSubs.length} substituições.`,"Comissão técnica");
 try{
   finishGame(g);
   running=false;
   go('dashboard');
   toast(`Partida comandada por ${assistantCoach.name}: ${nova} × ${rival}.`);
 }catch(err){
   running=false;
   console.error("Erro ao concluir simulação do auxiliar:",err);
   /* O placar já foi calculado; força o encerramento do compromisso capturado e avança. */
   try{
     g.played=true;g.hg=homeGoals;g.ag=awayGoals;
     let nextPending=schedule.findIndex(x=>!x.played);
     gameIndex=nextPending<0?schedule.length:nextPending;
     save(true);render();go('dashboard');
   }catch(recoveryErr){console.error("Falha na recuperação da simulação:",recoveryErr)}
   toast("Partida concluída e calendário recuperado.");
 }

 }catch(err){running=false;console.error('Falha na simulação do auxiliar:',err);toast('Não foi possível concluir a simulação. Abra o console para detalhes.');}
}
function generateMarketPlayer(){
 let o=68+Math.floor(Math.random()*17),age=18+Math.floor(Math.random()*13),pos=positions[Math.floor(Math.random()*positions.length)];
 let value=Math.max(1.5,+((o-64)*.85+(25-age)*.18+Math.random()*2).toFixed(1));
 return normalizeProPlayer({id:Date.now()+Math.floor(Math.random()*999999),n:firstNames[Math.floor(Math.random()*firstNames.length)]+" "+lastNames[Math.floor(Math.random()*lastNames.length)],p:pos,age,o,c:100,v:value,origin:"Mercado"});
}
function refillMarket(){let used=new Set(market.map(p=>p.id));while(market.length<20){let p=generateMarketPlayer();while(used.has(p.id))p.id=Date.now()+Math.floor(Math.random()*9999999);used.add(p.id);market.push(p)}}
function buy(id){
 let i=market.findIndex(p=>p.id===id);if(i<0)return toast("Jogador não encontrado no mercado.");
 let source=market[i],fee=+source.v;if(!Number.isFinite(fee))return toast("Erro nos dados do jogador. Atualize o mercado.");
 if(money<fee)return toast("Orçamento insuficiente.");
 let p=normalizeProPlayer({...source,origin:source.origin||"Mercado",c:100});
 // A transação é concluída no estado antes de redesenhar a tela.
 recordFinance(-fee,"Transferências",`Compra de ${p.n}`);
 market.splice(i,1);players.push(p);refillMarket();normalizeBenchSelection();
 addNews("transfer",`Nova FC contrata ${p.n}`,`${p.p}, ${p.age} anos e OVR ${p.o}, chega ao clube por ${cash(fee)}.`,"Contratação");
 save(true);
 try{render()}catch(err){console.error("Falha visual após contratação:",err);save(true)}
 toast(`${p.n} contratado! Um novo jogador entrou no mercado.`);
}
function sellPlayer(id){
 let i=players.findIndex(p=>p.id===id);if(i<0)return toast("Jogador não encontrado.");
 if(players.length<=11)return toast("Você precisa manter pelo menos 11 jogadores no elenco.");
 let p=players[i],starterIndex=xi.indexOf(id),replacement=null;
 if(starterIndex>=0){
   let slotPos=(slots[starterIndex]||[p.p])[0];
   replacement=players.filter(x=>x.id!==id&&!xi.includes(x.id)).sort((a,b)=>(b.o+formationPositionFit(b.p,slotPos)+(b.c||100)*.015)-(a.o+formationPositionFit(a.p,slotPos)+(a.c||100)*.015))[0];
   if(!replacement)return toast("Não há jogador disponível para substituir este titular antes da venda.");
   xi[starterIndex]=replacement.id;
   benchSelection=benchSelection.filter(x=>x!==replacement.id);
 }
 let fee=+(p.v*.90).toFixed(1);
 recordFinance(fee,"Transferências",`Venda de ${p.n}`);
 addNews("transfer",`${p.n} deixa o Nova FC`,`O clube confirmou a saída do ${p.p} por ${cash(fee)}.${replacement?` ${replacement.n} assumiu sua vaga no XI.`:""}`,"Mercado");
 players.splice(i,1);benchSelection=benchSelection.filter(x=>x!==id);normalizeBenchSelection();save(true);render();
 toast(`${p.n} vendido por ${cash(fee)}.${replacement?` ${replacement.n} entrou no XI.`:""}`);
}
function go(id){closeUfmMenu();document.querySelectorAll(".page").forEach(x=>x.classList.remove("active"));$(id).classList.add("active");let navId=id==="match"?"dashboard":id;document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===navId));$("title").textContent={dashboard:"Dashboard",calendar:"Calendário & Competições",world:"Mundo do Futebol",management:"Gestão do time",squad:"Elenco",market:"Mercado",auction:"Leilão ao vivo",league:"Campeonato",training:"Treinamentos",academy:"Divisão de Base",scouts:"Olheiros",assistant:"Auxiliar Técnico",trophies:"Sala de Troféus",sponsors:"Patrocinadores & Uniforme",finance:"Finanças",stadium:"Estádio",match:"Partida"}[id];window.scrollTo({top:0,behavior:"smooth"})}
document.querySelectorAll(".nav button").forEach(b=>b.onclick=()=>go(b.dataset.page));
document.getElementById("contractYears").addEventListener("change",updateContractPreview);document.getElementById("contractSalaryPct").addEventListener("change",updateContractPreview);
function save(silent=false){localStorage.setItem("ufm4_players",JSON.stringify(players));localStorage.setItem("ufm4_market",JSON.stringify(market));localStorage.setItem("ufm4_money",money);localStorage.setItem("ufm4_xi",JSON.stringify(xi));localStorage.setItem("ufm9_formation",selectedFormation);localStorage.setItem("ufm9_benchSelection",JSON.stringify(benchSelection));localStorage.setItem("ufm4_table",JSON.stringify(standings));localStorage.setItem("ufm4_schedule",JSON.stringify(schedule));localStorage.setItem("ufm4_index",gameIndex);localStorage.setItem("ufm4_stadium",JSON.stringify(stadium));localStorage.setItem("ufm6_trainingBudget",trainingBudget);localStorage.setItem("ufm9_sectorTraining",JSON.stringify(sectorTraining));localStorage.setItem("ufm6_youthBudget",youthBudget);localStorage.setItem("ufm6_fans",fans);localStorage.setItem("ufm6_physio",physioLevel);localStorage.setItem("ufm6_trainingCenter",trainingLevel);localStorage.setItem("ufm6_academy",academyLevel);localStorage.setItem("ufm9_academyFacilities",JSON.stringify(academyFacilities));localStorage.setItem("ufm9_academyHistory",JSON.stringify(academyHistory));localStorage.setItem("ufm9_academyCycle",academyCycle);localStorage.setItem("ufm6_scouts",JSON.stringify(scouts));localStorage.setItem("ufm6_youth",JSON.stringify(youth));localStorage.setItem("ufm7_auctions",JSON.stringify(auctions));localStorage.setItem("ufm7_auctionSeq",auctionSeq);localStorage.setItem("ufm9_worldTables",JSON.stringify(worldTables));localStorage.setItem("ufm9_scoutMarket",JSON.stringify(scoutMarket));localStorage.setItem("ufm9_scoutReports",JSON.stringify(scoutReports));localStorage.setItem("ufm9_financeLedger",JSON.stringify(financeLedger));localStorage.setItem("ufm9_trophyCabinet",JSON.stringify(trophyCabinet));localStorage.setItem("ufm9_individualAwards",JSON.stringify(individualAwards));localStorage.setItem("ufm9_championHistory",JSON.stringify(championHistory));localStorage.setItem("ufm9_clubState",clubState);localStorage.setItem("ufm9_activeSponsors",JSON.stringify(activeSponsors));localStorage.setItem("ufm9_sponsorMarket",JSON.stringify(sponsorMarket));localStorage.setItem("ufm9_marketingBudget",marketingBudget);localStorage.setItem("ufm9_ticketPrice",ticketPrice);localStorage.setItem("ufm9_shirtPrice",shirtPrice);localStorage.setItem("ufm9_kitDesign",JSON.stringify(kitDesign));localStorage.setItem("ufm9_worldNews",JSON.stringify(worldNews));localStorage.setItem("ufm9_worldRosters",JSON.stringify(worldRosters));localStorage.setItem("ufm9_assistantCoach",JSON.stringify(assistantCoach));localStorage.setItem("ufm9_assistantMarket",JSON.stringify(assistantMarket));localStorage.setItem("ufm9_seasonYear",seasonYear);localStorage.setItem("ufm9_clubDivision",clubDivision);localStorage.setItem("ufm9_qualifiedContinental",qualifiedContinental?"1":"0");localStorage.setItem("ufm9_qualifiedSecondary",qualifiedSecondary?"1":"0");localStorage.setItem("ufm9_qualifiedWorld",qualifiedWorld?"1":"0");localStorage.setItem("ufm9_nationalCupChampion",nationalCupChampion?"1":"0");localStorage.setItem("ufm9_continentalChampion",continentalChampion?"1":"0");localStorage.setItem("ufm9_secondaryChampion",secondaryChampion?"1":"0");localStorage.setItem("ufm9_stateChampion",stateChampion?"1":"0");localStorage.setItem("ufm9_stateAlive",stateAlive?"1":"0");localStorage.setItem("ufm9_stateStandings",JSON.stringify(stateStandings));localStorage.setItem("ufm9_continentalGroupTable",JSON.stringify(continentalGroupTable));localStorage.setItem("ufm9_secondaryGroupTable",JSON.stringify(secondaryGroupTable));localStorage.setItem("ufm9_cupAlive",cupAlive?"1":"0");localStorage.setItem("ufm9_continentalAlive",continentalAlive?"1":"0");localStorage.setItem("ufm9_secondaryAlive",secondaryAlive?"1":"0");localStorage.setItem("ufm9_worldAlive",worldAlive?"1":"0");localStorage.setItem("ufm9_serieAClubs",JSON.stringify(serieAClubs));localStorage.setItem("ufm9_serieBClubs",JSON.stringify(serieBClubs));localStorage.setItem("ufm9_compTable",JSON.stringify(standings));localStorage.setItem("ufm9_otherCompTable",JSON.stringify(otherStandings));localStorage.setItem("ufm9_compSchedule",JSON.stringify(schedule));localStorage.setItem("ufm9_compIndex",gameIndex);localStorage.setItem("ufm9_worldLeagueClubs",JSON.stringify(worldLeagueSnapshot()));let s=$("autosaveStatus");if(s){let d=new Date();s.textContent=`● Salvo automaticamente • ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`}}
function toast(x){$("toast").textContent=x;$("toast").style.display="block";setTimeout(()=>$("toast").style.display="none",1800)}
let units=[],possession=0,carrier=9,ballAction=null,attackTicks=0,radarRAF=null,radarLast=0,radarClock=0;
let baseHome=[],baseAway=[],radarRoles=[];
function refreshMatchFormationGeometry(){
 let def=formationDefinitions[selectedFormation]||formationDefinitions["433"];
 baseHome=def.slots.map((s,i)=>i===0?[5,50]:[Math.max(10,Math.min(88,100-s[2])),s[1]]);
 baseAway=baseHome.map(p=>[100-p[0],p[1]]);
 radarRoles=[...def.roles];
}
refreshMatchFormationGeometry();
let radarBall={x:50,y:50,tx:50,ty:50};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function setupField(){
 refreshMatchFormationGeometry();
 document.querySelectorAll('.game-player').forEach(x=>x.remove());units=[];
 [baseHome,baseAway].forEach((arr,team)=>arr.forEach((p,i)=>{let d=document.createElement('div');d.className='game-player '+(team?'away':'home');d.textContent=i+1;$('gamePitch').appendChild(d);units.push({d,team,i,role:radarRoles[i],x:p[0],y:p[1],tx:p[0],ty:p[1],mark:null,press:false,seed:(i+1)*1.73+team*4.11})}));
 possession=Math.random()<.5?0:1;carrier=9;attackTicks=0;ballAction=null;let c=unit(possession,carrier);radarBall={x:c.x,y:c.y,tx:c.x,ty:c.y};assignDefensiveJobs();drawRadar();
 if(!radarRAF){radarLast=performance.now();radarRAF=requestAnimationFrame(radarLoop)}
}
function unit(team,i){return units.find(u=>u.team===team&&u.i===i)}
function teammates(team){return units.filter(u=>u.team===team)}
function opponents(team){return units.filter(u=>u.team!==team)}
function distance(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
function nearestOpponent(u){return opponents(u.team).sort((a,b)=>distance(u,a)-distance(u,b))[0]}
function nearestOpponentDistance(u){let o=nearestOpponent(u);return o?distance(u,o):99}
function syncBallToCarrier(){let u=unit(possession,carrier);if(!u)return;radarBall.tx=u.x;radarBall.ty=u.y}
function assignDefensiveJobs(){
 [0,1].forEach(team=>{
   let own=teammates(team).filter(u=>u.i!==0),opp=opponents(team).filter(u=>u.i!==0),bx=radarBall.x,by=radarBall.y;
   own.forEach(u=>{u.press=false;u.mark=null});
   let press=own.slice().sort((a,b)=>Math.hypot(a.x-bx,a.y-by)-Math.hypot(b.x-bx,b.y-by));
   if(press[0])press[0].press=true;if(press[1]&&Math.hypot(press[1].x-bx,press[1].y-by)<18)press[1].press=true;
   own.filter(u=>!u.press).forEach(d=>{let candidates=opp.filter(a=>!own.some(x=>x!==d&&x.mark===a.i));let list=candidates.length?candidates:opp;let m=list.slice().sort((a,b)=>distance(d,a)-distance(d,b))[0];d.mark=m?m.i:null})
 });
}
function roleTarget(u){
 let base=(u.team?baseAway:baseHome)[u.i],ownPoss=u.team===possession,dir=u.team===0?1:-1,bx=radarBall.x,by=radarBall.y,tx=base[0],ty=base[1],r=u.role,cu=unit(possession,carrier);
 if(r==='GK'){
   tx=base[0]+(bx-50)*.055;ty=50+(by-50)*.24;
   tx=u.team===0?clamp(tx,3,13):clamp(tx,87,97);return[tx,clamp(ty,38,62)];
 }
 if(ownPoss){
   let progress=u.team===0?(bx-50):(50-bx),advanced=clamp(progress/45,0,1);
   if(r==='LCB'||r==='RCB'){tx=base[0]+dir*(2+advanced*4);ty=base[1]+(by-base[1])*.08}
   else if(r==='LB'||r==='RB'){let side=r==='LB'?14:86;tx=base[0]+dir*(6+advanced*9);ty=side+(by-side)*.10;if(Math.abs(by-side)<23)tx+=dir*4}
   else if(r==='DM'){tx=base[0]+dir*(3+advanced*4);ty=50+(by-50)*.20}
   else if(r==='LCM'||r==='RCM'){let lane=r==='LCM'?34:66;tx=base[0]+dir*(6+advanced*7);ty=lane+(by-lane)*.30;if(cu&&cu.i===u.i)tx+=dir*2}
   else if(r==='LW'||r==='RW'){let wide=r==='LW'?12:88;tx=base[0]+dir*(7+advanced*10);ty=wide;if((r==='LW'&&by>55)||(r==='RW'&&by<45))ty+=(50-ty)*.38}
   else if(r==='ST'){tx=base[0]+dir*(5+advanced*9);ty=50+(by-50)*.12+Math.sin(radarClock*.002+u.seed)*5}
   if(cu===u){let space=nearestOpponentDistance(u);tx=u.x+dir*clamp(1.8+space*.10,2,5);ty=u.y+(50-u.y)*.025+Math.sin(radarClock*.004+u.seed)*.7}
 }else{
   let compactX=(bx-50)*(r==='ST'?.12:(r==='LCM'||r==='DM'||r==='RCM')?.20:.14),compactY=(by-base[1])*.22;
   tx=base[0]+compactX;ty=base[1]+compactY;
   if(u.press){tx=bx-dir*1.4;ty=by+(u.i%2?1.8:-1.8)}
   else if(u.mark!==null){let m=unit(1-u.team,u.mark);if(m){let gx=u.team===0?0:100,gy=50,vx=gx-m.x,vy=gy-m.y,L=Math.hypot(vx,vy)||1;let mx=m.x+vx/L*3.3,my=m.y+vy/L*3.3;tx=tx*.42+mx*.58;ty=ty*.42+my*.58}}
   if(r==='LCB'||r==='RCB'){let line=base[0]+(bx-50)*.10;tx=tx*.55+line*.45;ty=r==='LCB'?Math.min(ty,48):Math.max(ty,52)}
   if(r==='DM'){tx=base[0]+(bx-50)*.16;ty=50+(by-50)*.34}
   if(r==='LB')ty=Math.min(ty,32);if(r==='RB')ty=Math.max(ty,68);
 }
 tx+=Math.sin(radarClock*.0012+u.seed)*.22;ty+=Math.cos(radarClock*.0010+u.seed)*.28;
 return[clamp(tx,2.2,97.8),clamp(ty,3,97)];
}
function choosePass(){
 let from=unit(possession,carrier),dir=possession===0?1:-1;if(!from)return 6;
 let options=teammates(possession).filter(u=>u!==from).map(u=>{let forward=(u.x-from.x)*dir,space=nearestOpponentDistance(u),d=distance(from,u),central=1-Math.abs(u.y-50)/50,roleBonus=(u.role==='ST'?3:u.role==='LW'||u.role==='RW'?2:0);return{u,score:forward*.42+space*.52-d*.09+central*.8+roleBonus+Math.random()*3}}).sort((a,b)=>b.score-a.score);
 return options[0]?.u.i??6;
}
function startPass(target){
 let from=unit(possession,carrier),to=unit(possession,target);if(!from||!to)return;
 let pressure=nearestOpponentDistance(from),d=distance(from,to),error=clamp((d-18)*.035+(8-pressure)*.11,0,5.5),lead=(to.team===0?1:-1)*(to.i>=8?2.2:1.0);
 ballAction={type:'pass',team:possession,target,progress:0,fromX:from.x,fromY:from.y,toX:clamp(to.x+lead+(Math.random()-.5)*error,2,98),toY:clamp(to.y+(Math.random()-.5)*error,3,97),receiverX:to.x,receiverY:to.y};
}
function interceptPass(x,y,team){let defenders=teammates(1-team).filter(u=>u.i!==0).sort((a,b)=>Math.hypot(a.x-x,a.y-y)-Math.hypot(b.x-x,b.y-y));let d=defenders[0];if(d&&Math.hypot(d.x-x,d.y-y)<3.0){possession=d.team;carrier=d.i;attackTicks=0;ballAction=null;assignDefensiveJobs();event('Interceptação! A defesa leu a linha de passe.');return true}return false}
function animateBallAction(){
 if(!ballAction)return false;ballAction.progress+=ballAction.type==='shot'?.055:.038;let t=Math.min(1,ballAction.progress),ease=t*t*(3-2*t),x=ballAction.fromX+(ballAction.toX-ballAction.fromX)*ease,y=ballAction.fromY+(ballAction.toY-ballAction.fromY)*ease;radarBall.x=x;radarBall.y=y;radarBall.tx=x;radarBall.ty=y;
 if(ballAction.type==='pass'&&t>.18&&t<.90&&interceptPass(x,y,ballAction.team))return true;
 if(t>=1){if(ballAction.type==='pass'){possession=ballAction.team;carrier=ballAction.target;assignDefensiveJobs();syncBallToCarrier()}else if(ballAction.type==='shot'){let shooting=ballAction.team;possession=1-shooting;carrier=0;attackTicks=0;ballAction=null;assignDefensiveJobs();syncBallToCarrier();return true}ballAction=null}return true;
}
function tryTackle(){let cu=unit(possession,carrier);if(!cu)return false;let d=opponents(possession).sort((a,b)=>distance(a,cu)-distance(b,cu))[0];if(!d)return false;let gap=distance(d,cu);if(gap<2.4&&Math.random()<.10){possession=d.team;carrier=d.i;attackTicks=0;assignDefensiveJobs();event('Desarme limpo! '+(d.team?'O rival':CONTROLLED_CLUB)+' recupera a posse.');syncBallToCarrier();return true}return false}
function moveRealistic(){
 if(ballAction)return;let cu=unit(possession,carrier);if(!cu)return;attackTicks++;if(tryTackle())return;
 let dir=possession===0?1:-1,goalDist=possession===0?100-cu.x:cu.x,space=nearestOpponentDistance(cu);
 if(goalDist<22&&carrier>=8&&Math.random()<(.08+space*.008)){let targetX=possession===0?99:1,targetY=43+Math.random()*14;ballAction={type:'shot',team:possession,progress:0,fromX:cu.x,fromY:cu.y,toX:targetX,toY:targetY};attackTicks=0;return}
 if(space<6||Math.random()<.22||attackTicks>8){startPass(choosePass());attackTicks=0}else{radarBall.tx=cu.x;radarBall.ty=cu.y}
}
function drawRadar(){units.forEach(u=>{u.d.style.left=u.x+'%';u.d.style.top=u.y+'%'});$('ball').style.left=radarBall.x+'%';$('ball').style.top=radarBall.y+'%'}
function radarLoop(now){let dt=Math.min(.04,(now-radarLast||16)/1000);radarLast=now;radarClock=now;if(units.length){if(!ballAction)syncBallToCarrier();animateBallAction();if(Math.floor(now/700)!==Math.floor((now-dt*1000)/700))assignDefensiveJobs();units.forEach(u=>{let t=roleTarget(u);u.tx=t[0];u.ty=t[1];let reaction=(u.i===0?.055:u.i>=8?.078:u.i>=5?.068:.061)*(1+((u.i*13+u.team*7)%7-3)*.018);u.x+=(u.tx-u.x)*reaction;u.y+=(u.ty-u.y)*reaction});if(!ballAction){let c=unit(possession,carrier);if(c){radarBall.x+=(c.x-radarBall.x)*.30;radarBall.y+=(c.y-radarBall.y)*.30}}drawRadar()}radarRAF=requestAnimationFrame(radarLoop)}

function playerLabel(id){let p=byId(+id);return p?`${p.n} • ${p.p} • OVR ${p.o} • ${p.c}%`:"—"}

function renderLiveLineup(highlightId=null){
 let box=$("liveLineup");if(!box)return;
 let positionNames=(formationDefinitions[selectedFormation]?.slots||formationDefinitions["433"].slots).map(s=>s[0]);
 box.innerHTML=matchXI.map((id,i)=>{
   let p=byId(id);if(!p)return "";
   let entered=matchSubs.some(s=>s.in===id);
   return `<div class="live-player ${highlightId===id?"subbed":""}"><span class=pos>${positionNames[i]||p.p}</span><div><div class=lp-name>${p.n}${entered?' <span style="color:#65e89d">↥</span>':''}</div><div class=lp-info>${p.p} • Cond. ${p.c}%</div></div><span class=lp-ovr>${p.o}</span></div>`;
 }).join("");
 $("lineupStatus").textContent=`${matchXI.length} em campo • ${matchSubs.length}/5 substituições`;
}
function renderMatchCoach(){
 let out=$("subOut"),inn=$("subIn");if(!out||!inn)return;
 out.innerHTML=matchXI.map(id=>`<option value="${id}">${playerLabel(id)}</option>`).join("");
 inn.innerHTML=matchBench.map(id=>`<option value="${id}">${playerLabel(id)}</option>`).join("");
 $("subCount").textContent=`${matchSubs.length} / 5 realizadas`;
 $("subHint").textContent=matchSubs.length>=5?"Limite de substituições atingido.":"Escolha um titular e um jogador do banco.";
 $("subLog").innerHTML=matchSubs.slice().reverse().map(s=>`<div class="sub-item"><b>${s.min}'</b> 🔺 ${byId(s.in)?.n||"—"} &nbsp; 🔻 ${byId(s.out)?.n||"—"}</div>`).join("");
 renderLiveLineup();
}
function tacticText(){
 let m={defensive:"Bloco mais seguro e menos exposição.",balanced:"Equilíbrio entre ataque e defesa.",attacking:"Mais jogadores chegam ao ataque, com maior risco defensivo.",allin:"Máxima presença ofensiva e grande exposição defensiva."}[liveTactics.mentality];
 let s={balanced:"",possession:" Prioriza posse e circulação.",counter:" Procura transições rápidas.",direct:" Busca progressão vertical.",wings:" Explora mais os corredores."}[liveTactics.style];
 return m+s;
}
function applyLiveTactics(){
 liveTactics={mentality:$("liveMentality").value,style:$("liveStyle").value,press:$("livePress").value,tempo:$("liveTempo").value,line:$("liveLine").value};
 $("tacticEffect").textContent=tacticText();$("coachStatus").textContent=running?`Tática atual • ${min}'`:"Tática preparada";
 if(running)event(`🧠 Mudança tática: ${$("liveMentality").selectedOptions[0].text}, ${$("liveStyle").selectedOptions[0].text}, pressão ${$("livePress").selectedOptions[0].text.toLowerCase()}.`);
}
function makeSubstitution(){
 if(!running){toast("Inicie a partida para fazer substituições.");return}
 if(matchSubs.length>=5){toast("Você já utilizou as 5 substituições.");return}
 let outId=+$("subOut").value,inId=+$("subIn").value;if(!outId||!inId)return;
 let oi=matchXI.indexOf(outId),bi=matchBench.indexOf(inId);if(oi<0||bi<0)return;
 matchXI[oi]=inId;matchBench[bi]=outId;matchSubs.push({out:outId,in:inId,min});
 event(`🔄 Substituição no Nova FC: sai ${byId(outId)?.n}, entra ${byId(inId)?.n}.`);
 renderMatchCoach();renderLiveLineup(inId);$("coachStatus").textContent=`${matchSubs.length} substituição${matchSubs.length>1?"ões":""} • ${min}'`;
}
function matchFactors(){
 let squad=matchXI.map(byId).filter(Boolean),avg=squad.reduce((a,p)=>a+p.o,0)/Math.max(1,squad.length);
 let cond=squad.reduce((a,p)=>a+p.c,0)/Math.max(1,squad.length)/100;
 let fatigue=Math.max(.84,1-min*.00135);
 let f={attack:1,defense:1,poss:0,passes:1,fouls:1,fatigue:1};
 if(liveTactics.mentality==="defensive"){f.attack*=.82;f.defense*=1.18;f.poss-=3}
 if(liveTactics.mentality==="attacking"){f.attack*=1.18;f.defense*=.90;f.poss+=2}
 if(liveTactics.mentality==="allin"){f.attack*=1.34;f.defense*=.76;f.poss+=1;f.fatigue*=1.16}
 if(liveTactics.style==="possession"){f.poss+=7;f.passes*=1.22;f.attack*=.96}
 if(liveTactics.style==="counter"){f.poss-=6;f.attack*=1.10;f.defense*=1.04;f.passes*=.88}
 if(liveTactics.style==="direct"){f.poss-=3;f.attack*=1.08;f.passes*=.82}
 if(liveTactics.style==="wings"){f.attack*=1.05;f.poss+=1}
 if(liveTactics.press==="low"){f.defense*=1.04;f.poss-=2;f.fatigue*=.86}
 if(liveTactics.press==="high"){f.defense*=1.09;f.poss+=4;f.fouls*=1.28;f.fatigue*=1.22}
 if(liveTactics.tempo==="slow"){f.poss+=3;f.passes*=1.13;f.attack*=.93;f.fatigue*=.88}
 if(liveTactics.tempo==="fast"){f.attack*=1.10;f.passes*=.94;f.fatigue*=1.18}
 if(liveTactics.line==="low"){f.defense*=1.08;f.attack*=.94}
 if(liveTactics.line==="high"){f.poss+=2;f.attack*=1.04;f.defense*=.94}
 let fm=selectedFormation;
 if(fm==="442"){f.attack*=1.04;f.defense*=1.02}
 if(fm==="4231"){f.poss+=2;f.defense*=1.04}
 if(fm==="4141"){f.defense*=1.07;f.attack*=.96}
 if(fm==="352"){f.poss+=3;f.attack*=1.05;f.defense*=.97}
 if(fm==="343"){f.attack*=1.09;f.defense*=.92}
 return {our:Math.max(.72,Math.min(1.30,(avg/79)*(.72+.28*cond)*fatigue)),...f};
}
function event(x){$("feed").innerHTML=`<div class=event><b>${min}'</b> ${x}</div>`+$("feed").innerHTML}
function renderStats(){let a=100-st.poss,rows=[["Posse",st.poss+"%",a+"%"],["Chutes",st.sh,st.sa],["No alvo",st.oh,st.oa],["Escanteios",st.ch,st.ca],["Faltas",st.fh,st.fa],["Passes",st.ph,st.pa]];$("stats").innerHTML=`<div class=posbar><span class=h style="width:${st.poss}%"></span><span class=a style="width:${a}%"></span></div>`+rows.map(r=>`<div class=statrow><span class=home>${r[1]}</span><span class=label>${r[0]}</span><span class=away>${r[2]}</span></div>`).join("")}
function updateClub(name,gf,ga){updateTableClub(standings,name,gf,ga)}
function simulateLeagueRivals(g){
 if(!g.round)return;simulateTableRound(standings,currentLeagueClubs,g.round);simulateOtherDivisionRound(g.round);syncBrazilWorld();
}
function finishGame(targetGame=null){
 running=false;
 let g=targetGame||currentGame();if(!g)return;let nova=g.home?homeGoals:awayGoals,rival=g.home?awayGoals:homeGoals;g.played=true;g.hg=homeGoals;g.ag=awayGoals;addNews("club",`${g.comp}: ${nova>rival?"vitória":nova===rival?"empate":"derrota"} do Nova FC`,`${g.home?CONTROLLED_CLUB:g.opp} ${homeGoals} × ${awayGoals} ${g.home?g.opp:CONTROLLED_CLUB} • ${g.stage}.`,CONTROLLED_CLUB);
 if(g.comp===currentLeagueName()){updateClub(CONTROLLED_CLUB,nova,rival);updateClub(g.opp,rival,nova);simulateLeagueRivals(g)}
 processCompetitionResult(g,nova,rival);
 let won=nova>rival;let matchIncome=processMatchIncome(g,won);event(`Receitas do jogo: ${cash(matchIncome.total)} em transmissão, comercial${g.home?" e estádio":""}.`);
 let sponsorPay=processSponsorMatch(won,g);if(sponsorPay>0)event(`Patrocinadores: ${cash(sponsorPay)} em cotas e bônus.`);
 commitMatchPlayerStats(g);
 fans=Math.max(1000,Math.round(fans*(won?1.006:nova===rival?1.001:.997)));Object.entries(matchMinutes).forEach(([id,mins])=>{let p=byId(+id);if(p){let tf=liveTactics.press==="high"?1.16:liveTactics.tempo==="fast"?1.10:1;p.c=Math.max(35,p.c-Math.round((5+mins*.12)*tf))}});
 advanceClubSystems();
 try{simulateWorldMatchdays(g)}catch(err){console.error("Falha ao simular ligas mundiais:",err)}
 try{simulateAllOtherStates()}catch(err){console.error("Falha ao simular estaduais paralelos:",err)}
 let nextPending=schedule.findIndex(x=>!x.played);
 gameIndex=nextPending<0?schedule.length:nextPending;
 save(true);
 if(mpRoom?.status==="playing")mpPublishSharedResult(g);
 if(seasonFinished()){
   startNextSeason(true);
   return;
 }
 render();
}
function startMatch(){
 let g=currentGame();if(running||!g)return;running=true;min=homeGoals=awayGoals=0;st={poss:50,sh:0,sa:0,oh:0,oa:0,ch:0,ca:0,fh:0,fa:0,ph:0,pa:0};
 normalizeBenchSelection();matchXI=[...xi];matchStartingXI=[...matchXI];matchBench=benchSelection.filter(id=>!matchXI.includes(id)&&byId(id));matchSubs=[];matchMinutes={};currentMatchContrib={goals:{},assists:{}};applyLiveTactics();renderMatchCoach();renderLiveLineup();
 $("hs").textContent=$("as").textContent=0;$("clock").textContent="00:00 / 02:00";$("feed").innerHTML="";$("start").disabled=true;setupField();renderStats();$("coachStatus").textContent="Partida em andamento";event("Bola rolando! A partida terá 2 minutos de duração real.");
 let dif=opponentDifficultyMultiplier(g);event(`Dificuldade automática: ${opponentStrengthLabel(g)}.`);
 const TOTAL_REAL_SECONDS=120, TICK_MS=1000, SIM_MINUTES_PER_SECOND=90/TOTAL_REAL_SECONDS;
 let realSeconds=0,lastSimMinute=0,intervalAnnounced=false,finalAnnounced=false;

 function simulateFootballMinute(simMinute){
   min=simMinute;matchXI.forEach(id=>matchMinutes[id]=(matchMinutes[id]||0)+1);moveRealistic();
   let f=matchFactors(),target=50+(f.our-dif)*15+f.poss;st.poss=Math.round(Math.max(28,Math.min(72,st.poss+(target-st.poss)*.09+(Math.random()*2-1))));
   st.ph+=Math.floor((2+Math.random()*5*(st.poss/50))*f.passes);st.pa+=Math.floor(2+Math.random()*5*((100-st.poss)/50));
   let novaHome=g.home,ourAttack=.095*f.our*f.attack,oppAttack=.09*dif/Math.max(.72,f.defense);
   if(Math.random()<ourAttack){st.sh++;let on=Math.random()<Math.min(.68,.40+.04*f.attack+.03*(f.our-1));if(on)st.oh++;if(on&&Math.random()<.245*f.our*f.attack){if(novaHome){homeGoals++;$("hs").textContent=homeGoals}else{awayGoals++;$("as").textContent=awayGoals}recordNovaGoal();possession=1;carrier=9;ballAction=null}else if(Math.random()<.24){st.ch++;event("Escanteio para o Nova FC.")}else if(Math.random()<.20){event("Boa chegada do Nova FC, mas a defesa afasta.")}}
   if(Math.random()<oppAttack){st.sa++;let on=Math.random()<Math.min(.68,.42*dif);if(on)st.oa++;if(on&&Math.random()<.24*dif/Math.max(.78,f.defense)){if(novaHome){awayGoals++;$("as").textContent=awayGoals}else{homeGoals++;$("hs").textContent=homeGoals}event(`⚽ Gol do ${g.opp}.`);possession=0;carrier=9;ballAction=null}else if(Math.random()<.23){st.ca++;event(`Escanteio para o ${g.opp}.`)}else if(Math.random()<.20){event(`O ${g.opp} finaliza, mas o Nova FC consegue bloquear.`)}}
   if(Math.random()<.05*f.fouls){Math.random()<.55?st.fh++:st.fa++;event("Falta marcada pelo árbitro.")}
   if(min>=45&&!intervalAnnounced){intervalAnnounced=true;event("⏱️ Intervalo virtual. Ajuste a tática ou faça substituições.")}
   if(min>=60&&!finalAnnounced&&matchSubs.length===0){finalAnnounced=true;event("💡 O jogo entra na reta final. O banco continua disponível.")}
   renderStats();
 }

 timer=setInterval(()=>{
   realSeconds++;
   let mm=Math.floor(realSeconds/60),ss=realSeconds%60;
   $("clock").textContent=`${String(mm).padStart(2,"0")}:${String(ss).padStart(2,"0")} / 02:00`;
   let targetSimMinute=Math.min(90,Math.floor(realSeconds*SIM_MINUTES_PER_SECOND));
   while(lastSimMinute<targetSimMinute){lastSimMinute++;simulateFootballMinute(lastSimMinute)}
   if(realSeconds>=TOTAL_REAL_SECONDS){
     clearInterval(timer);min=90;running=false;$("coachStatus").textContent="Fim de jogo";$("clock").textContent="02:00 / 02:00";event("Fim de jogo!");finishGame()
   }
 },TICK_MS)
}
competitionMigration();
if(stateChampion)addTrophy("Campeonato Estadual","national","🏟️","Campeão estadual");if(nationalCupChampion)addTrophy("Copa Nacional do Brasil","national","🏆","Campeão da copa nacional");if(continentalChampion)addTrophy("Copa América Cup","continental","🌎","Campeão continental principal");if(secondaryChampion)addTrophy("Copa Continental Secundária","continental","🥈","Campeão do segundo continental");
if(localStorage.getItem("ufm9_world20Version")!=="world20-v1"){
 Object.keys(worldDB).forEach(c=>Object.keys(worldDB[c].leagues).forEach(l=>{if(c!=="Brasil")worldTables[c+"|"+l]=makeEmptyTable(worldDB[c].leagues[l])}));
 localStorage.setItem("ufm9_world20Version","world20-v1");localStorage.setItem("ufm9_worldLeagueClubs",JSON.stringify(worldLeagueSnapshot()));
}
slots=formationDefinitions[selectedFormation].slots;refreshMatchFormationGeometry();normalizeBenchSelection();
syncBrazilWorld();refillMarket();seedAuctions();seedScoutMarket();seedSponsorMarket();seedAssistantMarket();seedWorldNews();setupField();renderStats();registerBudgetBoost();render();normalizeBenchSelection();matchXI=[...xi];matchBench=[...benchSelection];renderMatchCoach();renderLiveLineup();$("tacticEffect").textContent=tacticText();
auctionTick=setInterval(auctionPulse,1000);
setInterval(()=>save(true),5000);
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")save(true)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){if($("transferModal")?.classList.contains("open"))closeTransferNegotiation();else if($("playerModal")?.classList/* ================= MULTIPLAYER ONLINE V3 =================
   Sala online via Supabase. Cada treinador mantém seu próprio save,
   escolhe um clube exclusivo e entra no mesmo servidor/sala.
======================================================== */
const UFM_SUPABASE_URL="https://pqunvhjeivqjwarehmew.supabase.co";
const UFM_SUPABASE_ANON_KEY="sb_publishable_fQ-6gR-Dk9pd2poBfUZD6A_z9PLNIyw";
const MP_ACCOUNT_KEY="ufm9_mp_account_v3",MP_ROOM_KEY="ufm9_mp_room_v3";
let mpAccount=null,mpRoom=null,mpSelectedClub=null,mpPollTimer=null;

function mpConfigured(){return /^https:\/\/.+\.supabase\.co\/?$/.test(UFM_SUPABASE_URL)&&!!UFM_SUPABASE_ANON_KEY}
async function mpFetch(path,options={}){
 const headers={apikey:UFM_SUPABASE_ANON_KEY,Authorization:`Bearer ${UFM_SUPABASE_ANON_KEY}`,"Content-Type":"application/json",Prefer:"return=representation",...(options.headers||{})};
 const res=await fetch(UFM_SUPABASE_URL.replace(/\/$/,"")+"/rest/v1/"+path,{...options,headers});
 if(!res.ok)throw new Error(`Supabase ${res.status}: ${await res.text()}`);
 if(res.status===204)return null;const t=await res.text();return t?JSON.parse(t):null;
}
const UFMOnlineAdapter={
 async createAccount(data){localStorage.setItem(MP_ACCOUNT_KEY,JSON.stringify(data));return data},
 async createRoom(room){await mpFetch("ufm_rooms",{method:"POST",body:JSON.stringify({code:room.code,data:room,updated_at:new Date().toISOString()})});localStorage.setItem(MP_ROOM_KEY,JSON.stringify(room));return room},
 async getRoom(code){const r=await mpFetch(`ufm_rooms?code=eq.${encodeURIComponent(code)}&select=data&limit=1`);return r?.[0]?.data||null},
 async saveRoom(room){room.updatedAt=new Date().toISOString();await mpFetch(`ufm_rooms?code=eq.${encodeURIComponent(room.code)}`,{method:"PATCH",body:JSON.stringify({data:room,updated_at:room.updatedAt})});localStorage.setItem(MP_ROOM_KEY,JSON.stringify(room));return room},
 async pushSnapshot(code,snapshot){if(!mpAccount)return;await mpFetch("ufm_snapshots?on_conflict=room_code,user_id",{method:"POST",headers:{Prefer:"resolution=merge-duplicates,return=representation"},body:JSON.stringify({room_code:code,user_id:mpAccount.id,data:snapshot,updated_at:new Date().toISOString()})})}
};
function mpId(){return "u_"+Date.now().toString(36)+Math.random().toString(36).slice(2,9)}
function mpCode(){let s="",a="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";for(let i=0;i<6;i++)s+=a[Math.floor(Math.random()*a.length)];return s}
function mpEsc(v){return String(v??"").replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function mpCareerSnapshot(){mpOriginalSave(true);let storage={};careerStorageKeys().forEach(k=>storage[k]=localStorage.getItem(k));return {game:"Ultimate Football Manager 9",version:"mp-online-v3",seasonYear,gameIndex,club:mpSelectedClub,storage}}
function mpOnlineError(e){console.error(e);toast("Falha de conexão com a sala online. Tente novamente.")}

function mpApplyClubLabels(){
 const club=localStorage.getItem("ufm9_mp_activeClub");if(!club)return;
 document.querySelectorAll("body *").forEach(el=>{
   if(el.children.length===0&&el.textContent&&el.textContent.includes("Nova FC"))el.textContent=el.textContent.replaceAll("Nova FC",club);
 });
}
function mpInit(){
 try{
   mpAccount=JSON.parse(localStorage.getItem(MP_ACCOUNT_KEY)||"null");
   mpRoom=JSON.parse(localStorage.getItem(MP_ROOM_KEY)||"null");
   mpSelectedClub=mpRoom?.players?.find(x=>x.userId===mpAccount?.id)?.club||localStorage.getItem("ufm9_mp_activeClub")||null;
 }catch(e){}
 let first=localStorage.getItem("ufm9_mp_welcome_seen")!=="1";
 if(first)$("mpEntry")?.classList.add("open");
 if(mpAccount){$("mpName").value=mpAccount.name||"";$("mpEmail").value=mpAccount.email||""}
 mpApplyClubLabels();mpRenderLobby();if(mpRoom)mpStartPolling();
}
async function mpCreateAccount(){
 let name=$("mpName").value.trim(),email=$("mpEmail").value.trim();
 if(name.length<2)return toast("Digite o nome do treinador.");
 if(!email.includes("@"))return toast("Digite um e-mail válido.");
 mpAccount=await UFMOnlineAdapter.createAccount({id:mpAccount?.id||mpId(),name,email,createdAt:mpAccount?.createdAt||new Date().toISOString()});
 toast("Treinador pronto!");mpShowLobby();
}
function mpContinueSingle(){localStorage.removeItem("ufm9_mp_activeClub");localStorage.setItem("ufm9_mp_welcome_seen","1");$("mpEntry").classList.remove("open")}
function mpOpenPanel(){$("mpEntry").classList.add("open");mpAccount?mpShowLobby():mpBackAuth()}
function mpBackAuth(){$("mpAuthView").classList.remove("mp-hidden");$("mpLobbyView").classList.add("mp-hidden")}
function mpShowLobby(){if(!mpAccount){$("mpAuthView").classList.remove("mp-hidden");$("mpLobbyView").classList.add("mp-hidden");return}$("mpAuthView").classList.add("mp-hidden");$("mpLobbyView").classList.remove("mp-hidden");mpRenderLobby()}

async function mpCreateRoom(){
 try{
  if(!mpAccount)return mpBackAuth();
  let name=$("mpRoomName").value.trim()||"Liga dos Amigos",tries=0;
  while(tries++<5){
   mpRoom={id:"r_"+Date.now().toString(36),code:mpCode(),name,hostId:mpAccount.id,createdAt:new Date().toISOString(),status:"lobby",season:seasonLabel(),server:{seasonYear,gameIndex:0,results:{},revision:1},players:[{userId:mpAccount.id,name:mpAccount.name,club:null,host:true}],settings:{maxPlayers:20,sharedLeague:true}};
   try{await UFMOnlineAdapter.createRoom(mpRoom);break}catch(e){if(tries>=5)throw e}
  }
  mpSelectedClub=null;mpRenderLobby();mpStartPolling();toast("Servidor online criado!");
 }catch(e){mpOnlineError(e)}
}
async function mpJoinRoom(){
 try{
  if(!mpAccount)return mpBackAuth();
  let code=$("mpJoinCode").value.trim().toUpperCase();if(!code)return toast("Digite o código.");
  let room=await UFMOnlineAdapter.getRoom(code);if(!room)return toast("Sala não encontrada.");
  if(!room.players)room.players=[];
  if(room.players.length>=Number(room.settings?.maxPlayers||20)&&!room.players.some(p=>p.userId===mpAccount.id))return toast("Sala cheia.");
  if(!room.players.some(p=>p.userId===mpAccount.id))room.players.push({userId:mpAccount.id,name:mpAccount.name,club:null,host:false});
  mpRoom=await UFMOnlineAdapter.saveRoom(room);mpSelectedClub=mpRoom.players.find(p=>p.userId===mpAccount.id)?.club||null;
  mpRenderLobby();mpStartPolling();toast("Você entrou no servidor!");
 }catch(e){mpOnlineError(e)}
}
async function mpLeaveRoom(){
 try{
  if(mpRoom&&mpAccount){
   let r=await UFMOnlineAdapter.getRoom(mpRoom.code)||mpRoom;
   r.players=(r.players||[]).filter(p=>p.userId!==mpAccount.id);
   if(r.players.length&&r.hostId===mpAccount.id){r.hostId=r.players[0].userId;r.players.forEach((p,i)=>p.host=i===0)}
   await UFMOnlineAdapter.saveRoom(r);
  }
 }catch(e){}
 clearInterval(mpPollTimer);mpPollTimer=null;mpRoom=null;mpSelectedClub=null;
 localStorage.removeItem(MP_ROOM_KEY);localStorage.removeItem("ufm9_mp_activeClub");mpRenderLobby();
}
function mpAvailableClubs(){let a=[];try{a=[...(serieAClubs||[]),...(serieBClubs||[])]}catch(e){}return [...new Set(a)].filter(Boolean).slice(0,40)}
async function mpChooseClub(club){
 try{
  let r=await UFMOnlineAdapter.getRoom(mpRoom.code)||mpRoom;
  if((r.players||[]).some(p=>p.club===club&&p.userId!==mpAccount.id))return toast("Esse clube já tem treinador.");
  let me=r.players.find(p=>p.userId===mpAccount.id);if(!me)return;
  me.club=club;mpSelectedClub=club;mpRoom=await UFMOnlineAdapter.saveRoom(r);mpRenderLobby();toast(`${club} selecionado!`);
 }catch(e){mpOnlineError(e)}
}
function mpRenderLobby(){
 let no=$("mpNoRoom"),info=$("mpRoomInfo"),playersEl=$("mpPlayers"),grid=$("mpClubGrid"),start=$("mpStartBtn");if(!no)return;
 if(mpRoom){
  no.classList.add("mp-hidden");info.classList.remove("mp-hidden");$("mpRoomCode").textContent=mpRoom.code;
  $("mpRoomStatus").textContent=mpRoom.status==="playing"?"● Servidor em andamento":"● Online • aguardando jogadores";$("mpRoomStatus").classList.remove("offline");
  playersEl.innerHTML=(mpRoom.players||[]).map(p=>`<div class="mp-player"><div><b>${mpEsc(p.name)}</b><div class="mp-note">${mpEsc(p.club||"Clube não escolhido")}</div></div>${p.userId===mpRoom.hostId?'<span class="mp-badge">HOST</span>':''}</div>`).join("");
  let taken=new Set((mpRoom.players||[]).filter(p=>p.userId!==mpAccount?.id).map(p=>p.club));
  grid.innerHTML=mpAvailableClubs().map(c=>`<button class="mp-club ${c===mpSelectedClub?'selected':''} ${taken.has(c)?'taken':''}" ${taken.has(c)?'disabled':''} onclick="mpChooseClub('${String(c).replace(/'/g,"\\'")}')">${mpEsc(c)}${taken.has(c)?" • ocupado":""}</button>`).join("");
  start.disabled=!mpSelectedClub;
  start.textContent=mpRoom.hostId===mpAccount?.id?(mpRoom.status==="playing"?"Entrar no servidor":"Iniciar servidor"):(mpRoom.status==="playing"?"Entrar no servidor":"Aguardando HOST");
 }else{
  no.classList.remove("mp-hidden");info.classList.add("mp-hidden");playersEl.innerHTML='<p class="mp-note">Crie uma sala ou entre usando um código.</p>';grid.innerHTML='<div class="mp-note">Os clubes aparecem depois que você entra em uma sala.</div>';start.disabled=true;
 }
}

function mpFixtureKey(g){
 if(!g)return "";
 return [g.comp,g.date,[CONTROLLED_CLUB,g.opp].sort().join("::"),g.stage||""].join("|");
}
async function mpPublishSharedResult(g){
 if(!mpRoom||mpRoom.status!=="playing"||!g?.played)return;
 try{
  let room=await UFMOnlineAdapter.getRoom(mpRoom.code)||mpRoom;
  room.server=room.server||{seasonYear:seasonYear,gameIndex:0,results:{},revision:1};
  room.server.results=room.server.results||{};
  let key=mpFixtureKey(g);
  room.server.results[key]={comp:g.comp,date:g.date,stage:g.stage||"",homeClub:g.home?CONTROLLED_CLUB:g.opp,awayClub:g.home?g.opp:CONTROLLED_CLUB,hg:g.hg,ag:g.ag,reportedBy:mpAccount?.id,updatedAt:new Date().toISOString()};
  room.server.seasonYear=seasonYear;room.server.gameIndex=Math.max(room.server.gameIndex||0,gameIndex);room.server.revision=(room.server.revision||0)+1;
  mpRoom=await UFMOnlineAdapter.saveRoom(room);
 }catch(e){console.warn("shared result",e)}
}
function mpConsumeSharedResults(room){
 let results=room?.server?.results||{},changed=false;
 schedule.forEach(g=>{if(g.played)return;let r=results[mpFixtureKey(g)];if(!r)return;g.played=true;g.hg=r.hg;g.ag=r.ag;changed=true});
 if(changed){let n=schedule.findIndex(x=>!x.played);gameIndex=n<0?schedule.length:n;mpOriginalSave(true);render()}
}

async function mpRefreshRoom(){
 if(!mpRoom)return;
 try{
  let latest=await UFMOnlineAdapter.getRoom(mpRoom.code);if(!latest)return;
  mpRoom=latest;localStorage.setItem(MP_ROOM_KEY,JSON.stringify(latest));
  mpSelectedClub=latest.players?.find(p=>p.userId===mpAccount?.id)?.club||mpSelectedClub;mpConsumeSharedResults(latest);mpRenderLobby();
 }catch(e){}
}
function mpStartPolling(){clearInterval(mpPollTimer);if(mpRoom)mpPollTimer=setInterval(mpRefreshRoom,2000)}
async function mpCopyCode(){if(!mpRoom)return;try{await navigator.clipboard.writeText(mpRoom.code);toast("Código copiado!")}catch(e){prompt("Código:",mpRoom.code)}}

async function mpStartLeague(){
 try{
  if(!mpRoom||!mpSelectedClub)return toast("Escolha seu clube.");
  let r=await UFMOnlineAdapter.getRoom(mpRoom.code)||mpRoom;
  let me=r.players?.find(p=>p.userId===mpAccount.id);if(!me||me.club!==mpSelectedClub)return toast("Escolha seu clube novamente.");
  if(r.hostId===mpAccount.id&&r.status!=="playing"){r.status="playing";r.startedAt=new Date().toISOString();r.server={seasonYear,gameIndex:0};r=await UFMOnlineAdapter.saveRoom(r)}
  if(r.status!=="playing")return toast("Aguarde o HOST iniciar o servidor.");
  mpRoom=r;localStorage.setItem(MP_ROOM_KEY,JSON.stringify(r));localStorage.setItem("ufm9_mp_activeClub",mpSelectedClub);
  await UFMOnlineAdapter.pushSnapshot(r.code,mpCareerSnapshot());
  localStorage.setItem("ufm9_mp_welcome_seen","1");
  // Reload once so the whole career engine is built around the selected club.
  if(CONTROLLED_CLUB!==mpSelectedClub){location.reload();return}
  $("mpEntry").classList.remove("open");mpApplyClubLabels();
  let s=$("autosaveStatus");if(s)s.textContent=`🌐 Servidor ${r.code} • ${mpSelectedClub}`;
  toast(`Você comanda ${mpSelectedClub} no servidor ${r.code}`);
 }catch(e){mpOnlineError(e)}
}
async function mpSyncNow(){
 if(!mpRoom||mpRoom.status!=="playing")return;
 try{
  let latest=await UFMOnlineAdapter.getRoom(mpRoom.code)||mpRoom;
  let me=latest.players?.find(p=>p.userId===mpAccount?.id);
  if(me){me.gameIndex=gameIndex;me.seasonYear=seasonYear;me.lastSeen=new Date().toISOString()}
  latest.server=latest.server||{};latest.server.seasonYear=Math.max(latest.server.seasonYear||seasonYear,seasonYear);latest.updatedAt=new Date().toISOString();
  mpRoom=await UFMOnlineAdapter.saveRoom(latest);await UFMOnlineAdapter.pushSnapshot(mpRoom.code,mpCareerSnapshot());
 }catch(e){}
}
const mpOriginalSave=save;
save=function(silent=false){mpOriginalSave(silent);if(mpRoom?.status==="playing"){clearTimeout(window.__mpSyncTimer);window.__mpSyncTimer=setTimeout(mpSyncNow,1000)}};
setTimeout(mpInit,0);
