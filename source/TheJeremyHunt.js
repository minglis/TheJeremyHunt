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
							kind: "Button", caption: "Get Feed", onclick: "getPos"},
				]}
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