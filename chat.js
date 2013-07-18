setTimeout(function(){
	var comm = $("iframe").contents().find("#comm");
	var messages = $("iframe").contents().find("#plexts");
	var messagebox = $("iframe").contents().find("#send_plext_form");
	var loggedinCheck = $('iframe').contents().find('h2').text();
	var channelSwitcher = $('iframe').contents().find('#plext_tab_group_container');
	var loadingText = $('iframe').contents().find('#pl_status_text');
	if(loggedinCheck == "Welcome to Ingress."){
		$("#errorMsg").append("Please go to www.ingress.com/intel and log in.");
	}
	$(".chatter").append(channelSwitcher);
	setTimeout(function(){
		$(".chatter").append(loadingText);
		$(".chatter").append(messages);
		setTimeout(function(){
			$(".chatter").append(messagebox);
		}, 100)
	}, 100)
}, 1000)

function sendMessage(a) {
  var b = u(this.refresh, this, k), c = this.p.getCenter(), d = Math.floor(c.lat() * 1E6), e = Math.floor(c.lng() * 1E6), c = this.z, a = {message:a, latE6:d, lngE6:e};
  this.j == "faction" && (a.factionOnly = k);
  Jc(c, "dashboard.sendPlext", a, b, 5)
};

function clickHandler(e){
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#exitButton').addEventListener('click', clickHandler);
});