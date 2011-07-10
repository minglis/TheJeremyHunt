enyo.kind({
  name: "Clues",
  kind: enyo.Control,
  currentClueNumber: 0,
  cluelist: [
			{text: "Perhaps a meeting with Alan Rusbridger would help", lat: "51.53", lon: "-0.12"},
      		{text: "Pub named after tabloid name for redundancy, \n an item of footwear that's on the other foot now", 
      		lat: "51.52", lon: "-0.12"},
      		{text: "Road that shares the name with a famous prison", lat: "51.53", lon: "-0.12"},
      		{text: "Street name that indicates unauthorised information sharing", lat: "51.53", lon: "-0.11"},
      		{text: "You've won!!", lat: "51.53", lon: "-0.12"}
      ],
  
  components: [
		{
			kind: "HFlexBox",
			name: "clueInput" ,
			components: [
				{content: "", name: "cluetext", flex: 1},{
					kind: "Button", caption: "Get Clue", onclick: "getClue"}
		]}
	],
	getClue: function() {
		//console.log(this.cluelist[0].clue1);
		this.$.cluetext.setContent(this.cluelist[this.currentClueNumber].text);
	},
	getCurrentClue: function () {
	  return this.cluelist[this.currentClueNumber]
	},
	incrementClueNumber: function (){
	  this.currentClueNumber ++;
	  this.$.clueInput.setValue(this.cluelist[this.currentClueNumber].text);
	},
	create: function(){
		this.inherited(arguments);
		this.getClue();
	}
});
