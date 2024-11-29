$(document).ready(function(){
	$('#inputUser').focus(function(){
		var condition = $('.saiuser').hasClass('text-danger');
		if(condition)
			$('.saiuser').removeClass('text-danger').empty();
		});
	$('#inputPass').focus(function(){
		var condition = $('.saipass').hasClass('text-danger');
		if(condition)
			$('.saipass').removeClass('text-danger').empty();
		});
	$('#inputRePass').focus(function(){
		var condition = $('.sairepass').hasClass('text-danger');
		if(condition)
			$('.sairepass').removeClass('text-danger').empty();
		});
});
function GetURLParameter(sParam) {

	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function validateRegester(){
	var user = $('#inputUser').val();
	var userp = /(\w|\d){5,}/;
	var pass = $('#inputPass').val();
	var passp = /(\w|\d){6,}/;
	var repass = $('#inputRePass').val();
	if( !userp.test(user) ) {
		$('.saiuser').addClass('text-danger').text('bạn nhập sai định dạng tài khoản');
		return false;
	}else if(!passp.test(pass)){
		$('.saipass').addClass('text-danger').text('bạn nhập sai định dạng mật khẩu');
		return false;
	}else if(!passp.test(repass)){

		$('.sairepass').addClass('text-danger').text('bạn nhập sai định nhập lại mật khẩu');
		return false;
	}else if(pass != repass){

		$('.sairepass').addClass('text-danger').text('không khớp với mật khẩu');
		return false;
	}
	var w=window.open("");
	$(w.document.body).html("Noi dung chuyen qua");
	return true;
}
function validateLogin(){
	var user = $('#inputUser').val();
	var userp = /(\w|\d){5,}/;
	var pass = $('#inputPass').val();
	var passp = /(\w|\d){6,}/;
	if( !userp.test(user) ) {
		$('.saiuser').addClass('text-danger').text('bạn nhập sai định dạng tài khoản');
		return false;
	}else if(!passp.test(pass)){
		$('.saipass').addClass('text-danger').text('bạn nhập sai định dạng mật khẩu');
		return false;
	}
	return true;
}
