function login_button_click(id){
	window.open('?connect='+id+'&action=login','xmOpenWindow','width=550,height=400,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1');
}

function share_button_click(link){
	var url = encodeURIComponent(location.href);
	var title = encodeURIComponent(document.title);
	window.open(link.replace("%URL%",url).replace("%TITLE%",title),'xmOpenWindow','width=550,height=400,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1');
}

jQuery(function() {
    jQuery( document ).tooltip({ show: { effect: "blind", duration: 200 } });
});
