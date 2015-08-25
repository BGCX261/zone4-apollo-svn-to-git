

/* Resolution Sniffer / Dynamic CSS Loader - HD |
via Arley McBlain http://debutcreative.com */

/* Common Computer Screens: 640,800,1024,1152,1280,1440,1600,and HD 1920 */

// File path to background images folder

window.onload=function (){

var bgFolder = 'images/';

if (screen.width>=1920){
 document['body'].style.backgroundImage='url('+bgFolder+'Apollo_layout_1920x1080.jpg)';
 document['body'].style.backgroundRepeat='repeat-x';
}
else if (screen.width>=1600){
 document['body'].style.background='url('+bgFolder+'Apollo_layout_1600x1080.jpg)';
 document['body'].style.backgroundRepeat='repeat-x';
}
else if (screen.width>=1440){
 document['body'].style.background='url('+bgFolder+'Apollo_layout_1440x1080.jpg)';
 document['body'].style.backgroundRepeat='repeat-x';
}
else if (screen.width>=1280){
 document['body'].style.background='url('+bgFolder+'Apollo_layout_1280x1080.jpg)';
 document['body'].style.backgroundRepeat='repeat-x';
}
else if (screen.width>=1152){
 document['body'].style.background='url('+bgFolder+'Apollo_layout_1152x1080.jpg)';
 document['body'].style.backgroundRepeat='repeat-x';
}
else if (screen.width>=1024){
 document['body'].style.background='url('+bgFolder+'Apollo_layout_1024x1080.jpg)';
 document['body'].style.backgroundRepeat='repeat-x';
}
// Optional
/* else if (screen.width>=800){
 document['body'].style.background='url('+bgFolder+'bg800.jpg)';
 document['body'].style.backgroundRepeat='repeat-x';
} */
else if (screen.width<=799){
document['body'].style.backgroundImage='url('+bgFolder+'Apollo_layout.jpg)';
document['body'].style.backgroundRepeat='repeat';
}
else {
 document['body'].style.backgroundImage='url('+bgFolder+'Apollo_layout_1024x1080.jpg)';
 document['body'].style.backgroundRepeat='repeat-x';
}

}