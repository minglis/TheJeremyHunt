enyo.kind({
	name: "MyApps.TheJeremyHunt",
	kind: enyo.VFlexBox,
	components: [
	             {kind: "PageHeader", content: "The Jeremy Hunt"},
	             {
	            	 kind: "RowGroup", 
	            	 caption: "Check in Now", 
	            	 components: [
	            	              {
	            	            	  name : "getCurPosition",
	            	            	  kind: "PalmService",
	            	            	  service : "palm://com.palm.location/",
	            	            	  method : "getCurrentPosition",
	            	            	  onSuccess : "posFinished",
	            	            	  onFailure : "posFail",
	            	            	  onResponse : "gotResponse",
	            	            	  subscribe : false
	            	              },
	            	              {
	            	            	  kind: "Clues"
	            	              },
	            	              {
	            	            	  kind: "Button", caption: "Play Sound", onclick: "playSound",
	            	              },
	            	              {
	            	            	  kind: "Sound", src: "resources/beep-2.mp3"
	            	              },
	            	              {
	            	            	  kind: enyo.VFlexBox, 
	            	            	  components: [
	            	            	               {
	            	            	            	   kind: "Button", caption: "Guess 1", onclick: "getPos"
	            	            	               },
	            	            	               {kind: "Image", name: "checkInImage", src: "resources/question.jpg"},

	            	            	               {
	            	            	            	   kind: "Button", caption: "Guess 2", onclick: "getPos"
	            	            	               },
	            	            	               {kind: "Image", name: "checkInImage", src: "resources/question.jpg"},

	            	            	               {
	            	            	            	   kind: "Button", caption: "Guess 3", onclick: "getPos"
	            	            	               },
	            	            	               {kind: "Image", name: "checkInImage", src: "resources/question.jpg"},
	            	            	               {kind: "Image", name: "checkInImage", src: "images/question_mark.png"}

	            	            	               ]},
	            	            	               {
	            	            	            	   kind: "Input", 
	            	            	            	   components: [
	            	            	            	                {
	            	            	            	                	kind: "Button", caption: "Play Sound", onclick: "playSound"},
	            	            	            	                	]},
	            	            	            	                	{
	            	            	            	                		kind: "Sound", name: 'sound1', src: "resources/beep-2.mp3"
	            	            	            	                	}
	            	            	            	                	]},

	            	            	            	                	],
	            	            	            	                	btnClick: function() {
	            	            	            	                		this.$.pageHeader.setContent("yoo");
	            	            	            	                	},
	            	            	            	                	playSound: function() {
	            	            	            	                		this.$.sound1.play();
	            	            	            	                	},
	            	            	            	                	gotResponse : function (inSender, inResponse) {
	            	            	            	                	},
	            	            	            	                	posFinished: function(inSender, inResponse) {
	            	            	            	                		this.$.pageHeader.setContent("location retrieved" + enyo.json.stringify(inResponse));

	            	            	            	                		var actualLat = Math.round(parseFloat(inResponse.latitude) * 100) / 100;
	            	            	            	                		var actualLong = Math.round(parseFloat(inResponse.longitude) * 100) / 100;

	            	            	            	                		console.log(actualLat + " " + actualLong);
	            	            	            	                		console.log(this.$.clues.getCurrentClue().lat  + " " + this.$.clues.getCurrentClue().lon);

	            	            	            	                		console.log(actualLat == this.$.clues.getCurrentClue().lat);
	            	            	            	                		console.log(actualLong == this.$.clues.getCurrentClue().lon);

	            	            	            	                		if(actualLat == this.$.clues.getCurrentClue().lat && actualLong == this.$.clues.getCurrentClue().lon) {
	            	            	            	                			this.$.checkInImage.setSrc("images/tick.png");
	            	            	            	                			this.$.clues.incrementClueNumber();
	            	            	            	                		} else {
	            	            	            	                			this.$.pageHeader.setContent("you missed");	
	            	            	            	                			this.$.checkInImage.setSrc("images/cross.png");

	            	            	            	                		}

	            	            	            	                	},
	            	            	            	                	posFail : function(inSender, inResponse) {
	            	            	            	                		this.$.pageHeader.setContent("location lookup failed");
	            	            	            	                	},
	            	            	            	                	getPos: function() {
	            	            	            	                		console.log("HERE");
	            	            	            	                		this.$.getCurPosition.call();
	            	            	            	                	}
});