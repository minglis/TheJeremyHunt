enyo.kind({
  name: "Clues",
  kind: enyo.Control,
  currentClueNumber: 0,
  cluelist: [
      		{text: "I'm clue 1"},
      		{text: "I'm clue 2"},
      		{text: "I'm clue 3"}
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
