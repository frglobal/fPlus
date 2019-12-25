(function(global,$,FR){

function iframeLink(frameId,iurl){
	$("#"+frameId).attr('src', iurl)
}

function iframeSetCellValue(frameId,col,row,value){
	document.getElementById(frameId).contentWindow.contentPane.setCellValue(col,row,value);
}

function addFuncMenu() {
	$("#funcMenu").append("<div>hello</div>");
}
}(window,jQuery,FR));