//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#0080FF"; colorText="#000000"; colorSele="#2CF807";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Muy bien! :)"; messageTime="Se acabó el tiempo...:("; messageError="Perdiste, vuelve a empezar...Tu puedes"; messageErrorG="Perdiste, vuelve a empezar...Tu puedes"; messageAttempts="Se acabaron los intentos :("; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lncmFtYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","Rw","","","","","","","",""],["Qw","Tw","Vw","","","","","","",""],["SA","Tw","Ug","Uw","RQ","","","","",""],["SQ","Uw","","SA","RQ","Tg","","","",""],["Qw","RQ","","RQ","","","","","",""],["Sw","","","RQ","","","","","",""],["RQ","","","UA","SQ","Rw","","","",""],["Tg","","","","RA","Tw","Tg","Sw","RQ","WQ"],["","","","","Qw","QQ","VA","","",""],["Ug","QQ","Qg","Qg","SQ","VA","","","",""]];
var x1=[1,1,5,5,1,4,4,1,2,4,6];
var y1=[2,3,8,9,10,7,4,2,1,3,7];
var x2=[3,5,10,7,6,6,6,1,2,4,6];
var y2=[2,3,8,9,10,7,4,8,5,7,10];
var imaCW=["crucigrama_resources/media/vaca.jpg","crucigrama_resources/media/caballo.jpg","crucigrama_resources/media/burro.jpg","crucigrama_resources/media/gato.jpg","crucigrama_resources/media/conejo.jpg","crucigrama_resources/media/cerdo.jpg","crucigrama_resources/media/gallina.jpg","crucigrama_resources/media/pollito.jpg","crucigrama_resources/media/ganso.jpg","crucigrama_resources/media/oveja.jpg","crucigrama_resources/media/cabra.jpg"];
var audioCW=["audio0","audio1","audio2","audio3","","audio5","audio6","audio7","audio8","audio9","audio10"];
var defCW=["vaca","caballo","burro","gato","conejo","cerdo","gallina","pollo","ganso","oveja","cabra"];
var colNum=10;
var rowNum=10;
