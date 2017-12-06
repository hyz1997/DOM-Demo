
window.onload = function() {
	var but = document.getElementById('button');
	var div = document.getElementById('getStyle');
	but.onclick = function() {
		var a;
		if (getComputedStyle) {
			a = document.defaultView.getComputedStyle(div);
			alert(div.style.width);
		    alert(a.width);
		    alert(a.background);//reb(255,0,0) none repeat sroll 0% 0% / auto padding-box border-box
		    alert(a.backgroundColor);//red};
		} else {
			a = div.currentStyle;
			alert(a.width);
		}
    }
    var m;
    var i;
    for(i=0;i<5;i++){
    	//alert(i);
    }
}