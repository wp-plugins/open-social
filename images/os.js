function login_button_click(id){
	var back = location.href;
	try{if(location.href.indexOf('wp-login.php')>0) back = document.loginform.redirect_to.value;}catch(e){back = '/';}
	if(/iPhone/.test(navigator.userAgent)){
		location.href='?connect='+id+'&action=login&back='+escape(back);
	}else{
		window.open('?connect='+id+'&action=login&back='+escape(back),'xmOpenWindow','width=550,height=400,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1');
	}
}

function share_button_click(link){
	var url = encodeURIComponent(location.href);
	var title = encodeURIComponent(document.title);
	window.open(link.replace("%URL%",url).replace("%TITLE%",title),'xmOpenWindow','width=600,height=480,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1');
}

jQuery(function() {
    jQuery( document ).tooltip({ position: { my: "left top+5", at: "left bottom" }, show: { effect: "blind", duration: 200 } });
});
