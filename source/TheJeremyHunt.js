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
					kind: "Input", 
					components: [
						{
							kind: "Button", caption: "Check In Here", onclick: "getPos"
						},
						{kind: "Image", name: "checkInImage", src: "resources/question.jpg"}
							
				]},
				{
				  kind: "Clues"
				},
			
		{
		    kind: "Input", 
		    components: [
			{
			    kind: "Button", caption: "Play Sound", onclick: "playSound"},
		    ]},
		{
		    kind: "Sound", src: "resources/beep-2.mp3"
		}
	    ]},
	{
	    name : "getCurPosition",
	    kind: "PalmService",
	    service : "palm://com.palm.location/",
	    method : "getCurrentPosition",
	    onSuccess : "posFinished",
	    onFailure : "posFail",
	    onResponse : "gotResponse",
	    subscribe : false
	}
    ],
    btnClick: function() {
	this.$.pageHeader.setContent("yoo");
    },
    playSound: function() {
	this.$.sound.play();
    },
    gotResponse : function (inSender, inResponse) {
	console.log("GOT RESPONSE"+ enyo.json.stringify(inResponse));
    },
    posFinished: function(inSender, inResponse) {
	console.log("SUCCESS");
	this.$.pageHeader.setContent("location retrieved" + enyo.json.stringify(inResponse));
    },
    posFail : function(inSender, inResponse) {
	console.log("FAILED");
	this.$.pageHeader.setContent("location failed"+ enyo.json.stringify(inResponse));
    },
    getPos: function() {
	console.log("Calling location services");
	this.$.checkInImage.setSrc("resources/tick.jpg");
	this.$.clues.incrementClueNumber();
	console.log(this.$.clues.getCurrentClue().text)
	this.$.getCurPosition.call();
    }
});