enyo.kind({
  name: "Clues",
  kind: enyo.Control,
  currentClueNumber: 0,
  cluelist: [
      		{text: "Pub named after tabloid name for redundancy, \n an item of footwear that's on the other foot now", 
      		lat: "51.52752928357828", long: "-0.12396097183227539"},
      		{text: "Road that shares the name with a famous prison", lat: "51.53088659545675", long: "-0.12214779853820801"},
      		{text: "Street name that indicates unauthorised information sharing", lat: "51.5302024", long: "-0.1187108"},
      		{text: "Perhaps a meeting with Alan Rusbridger would help", lat: "51.53473752109559", long: "-0.12216925621032715"},
      		{text: "You've won!!", lat: "51.53473752109559", long: "-0.12216925621032715"}
      ],
  
  components: [
		{
			kind: "Input",
			name: "clueInput" ,
			components: [
				{
					kind: "Button", caption: "Get Clue", onclick: "getClue"},
		]}
	],
	getClue: function() {
		console.log(this.cluelist[0].clue1);
		this.$.clueInput.setValue(this.cluelist[this.currentClueNumber].text);
	},
	getCurrentClue: function () {
	  return this.cluelist[this.currentClueNumber]
	},
	incrementClueNumber: function (){
	  this.currentClueNumber ++;
	  this.$.clueInput.setValue(this.cluelist[this.currentClueNumber].text);
	},
});
