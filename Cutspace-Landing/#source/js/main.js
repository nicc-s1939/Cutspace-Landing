function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
}
ibg();
// menu burger
const iconMenu = document.querySelector('.menu_icon');
if(iconMenu){
	const menuBody = document.querySelector('.menu_body');
	iconMenu.addEventListener("click", function (e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}