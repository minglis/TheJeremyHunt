enyo.kind({
    name: "MyApps.TheJeremyHunt",
    kind: enyo.VFlexBox,
    components: [
	{kind: "PageHeader", content: "The Jeremy Hunt"},
	{
			kind: "RowGroup", 
			caption: "Feed URL", 
			components: [
				{
					kind: "Input", 
					components: [
						{
							kind: "Button", caption: "Get Position", onclick: "getPos"},
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
		    kind: "Sound", name: 'sound1', src: "resources/beep-2.mp3"
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
	this.$.sound1.play();
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
	this.$.getCurPosition.call();
    }
});