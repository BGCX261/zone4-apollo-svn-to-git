/* Resolution Sniffer / Dynamic Loader - HD | Arley McBlain http://debutcreative.com via http://sixrevisions.com/*/
/* Common Computer Screens: 640,800,1024,1152,1280,1440,1600,and HD 1920 */
if (screen.width>=1920){
	document['body'].style.backgroundImage='url(http://debutcreative.com/wp-content/themes/irresistible/images/bg1920.jpg)';
	document['body'].style.backgroundRepeat='repeat-x'; 
}
else if (screen.width>=1600){
	document['body'].style.background='url(http://debutcreative.com/wp-content/themes/irresistible/images/bg1600.jpg)';
	document['body'].style.backgroundRepeat='repeat-x'; 
}
else if (screen.width>=1440){
	document['body'].style.background='url(http://debutcreative.com/wp-content/themes/irresistible/images/bg1440.jpg)';
	document['body'].style.backgroundRepeat='repeat-x'; 
}
else if (screen.width>=1280){
	document['body'].style.background='url(http://debutcreative.com/wp-content/themes/irresistible/images/bg1280.jpg)';
	document['body'].style.backgroundRepeat='repeat-x'; 
}
else if (screen.width>=1152){
	document['body'].style.background='url(http://debutcreative.com/wp-content/themes/irresistible/images/bg1152.jpg)';
	document['body'].style.backgroundRepeat='repeat-x'; 
}
else if (screen.width>=1024){
	document['body'].style.background='url(http://debutcreative.com/wp-content/themes/irresistible/images/bg1024.jpg)';
	document['body'].style.backgroundRepeat='repeat-x'; 
}
/*else if (screen.width>=800){
	document['body'].style.background='url(http://debutcreative.com/wp-content/themes/irresistible/images/bg800.jpg)';
	document['body'].style.backgroundRepeat='repeat-x'; 
}*/
else if (screen.width<=799){
	document['body'].style.backgroundImage='url(http://debutcreative.com/wp-content/themes/irresistible/images/bg0.jpg)';
	document['body'].style.backgroundRepeat='repeat';
}
else	{
	document['body'].style.backgroundImage='url(http://debutcreative.com/wp-content/themes/irresistible/images/bg1024.jpg)';
	document['body'].style.backgroundRepeat='repeat-x'; 
}