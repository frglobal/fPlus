
//check object Dec exist
var Dec = typeof parent.window.Dec !== "undefined" ? parent.window.Dec : null;

//fPlus Start
(function(global, FR, Dec){

	var fPlus = function(){

		return new fPlus.init();
	};

	//fPlus function prototype here
	fPlus.prototype = {

		//Use FR.remoteEvaluateAsync(formula,callback)
		cellFormula:function(formula,callback) {

			//FR.remoteEvaluateAsync("A1", function callback(value){
        	// callback function can not return value. use para = value here.
			//});

			FR.remoteEvaluateAsync(formula,callback);

		},

		//Hyperlink Method rewrite from FR.doHyperlink....
		doHyperlink:function(linkType, url, para, target, feature, title) {

			//linkType can be "get","post"
			let frLink = {

				byPost:function() {

					FR.doHyperlinkByPost(url,para,target,feature,title);

				},

				byGet:function() {
					FR.doHyperlinkByGet(url,para,target,feature,title);
				}
			};

			if (linkType == "post") {

				frLink.byPost();

			} else if (linkType == "get") {

				frLink.byGet();

			};

		},
		
		//FR widgets & fPlus custom widgets
		widget:{
			
			//pagination.min.js config object property 
			pagination: {

					config:function(dataset,pageCounts,target,url) {

						let configSet = {
    							dataSource: dataset,
    							pageSize: pageCounts,
    							showGoInput: true,
    							showGoButton: true,
    							callback: function(data, pagination) {
    								let path = F_.FRServletURL+"?viewlet="+url;
    								F_.doHyperlink("post", path, {pageNumber:pagination.pageNumber,pageSize:pagination.pageSize}, target);
    							}
  						};

  						return configSet;
					}

			},

			button:{

				defaultFrame:function(obj,textColor){
					let btnDom = obj.element;
					let fontColor = textColor || "white";
					btnDom.css("border-radius","5px")
					btnDom.children().css({
															"border-radius": "5px",
															"color": fontColor,
															"font-family": "微軟正黑體",
															"text-align":"center"
													});
					return this;
				},

				circleFrame:function(obj,textColor){
					let btnDom = obj.element;
					let fontColor = textColor || "white";
					btnDom.css("border-radius","50%")
					btnDom.children().css({
															"border-radius": "50%",
															"color": fontColor,
															"font-family": "微軟正黑體",
															"text-align":"center"
													});
					return this;
				},

				defaultDisplay:function(obj,html){
					let btnDom = obj.element;
					btnDom.children().children().remove();
					btnDom.children().html(html);
					btnDom.children().children().css({
													    "position": "absolute",
    													"top": "50%",
    													"-webkit-transform": "translateY(-50%)",
    													"-ms-transform": "translateY(-50%)",
    													"transform": "translateY(-50%)",
    													"left": "0",
    													"right": "0",
    													"margin": "auto",
    													"text-align": "center",
												})
					return this;
				},
				defaultEffect:function(obj){
					let btnDom = obj.element;
					let transTime = ".5s";
					btnDom.children().css({
									"cursor": "pointer",
									"-moz-transition-property": "background-color, color, left",
  									"-moz-transition-duration": transTime,
  									"-webkit-transition-property": "background-color, color, left",
  									"-webkit-transition-duration": transTime,
  									"-o-transition-property": "background-color, color, left",
  									"-o-transition-duration": transTime
								});
					btnDom.css({
									"cursor": "pointer",
									"-moz-transition-property": "background-color, color, left",
  									"-moz-transition-duration": transTime,
  									"-webkit-transition-property": "background-color, color, left",
  									"-webkit-transition-duration": transTime,
  									"-o-transition-property": "background-color, color, left",
  									"-o-transition-duration": transTime
								});
					return this;
				}

			},
			
			label:{

			},

			textEditor:{

			},

			langset:function(){
				console.log("設定顯示語言的函數");
				return this;
			},
			test:function(){
				console.log("測試串聯");
				return this;
			}

		}
	};

	fPlus.init = function() {

		var self = this;

		if (FR) {

			self.FRServletURL = FR.servletURL || 'The object(FR) is not exist';

		};

		if (Dec) {

			self.DecServletURL = Dec.fineServletURL || 'The object(Dec) is not exist';
		};
	};

	//prototype inher
	fPlus.init.prototype = fPlus.prototype;

	//set global object
	global.fPlus = global.F_ = fPlus();

    
}(window, FR, Dec));
