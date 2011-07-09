enyo.kind({
  name: "Clues",
  kind: enyo.Control,
  currentClue: 1,
  cluelist: [
      		{text: "I'm clue 1"},
      		{text: "I'm clue 2"}
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
		this.$.clueInput.setValue(this.cluelist[this.currentClue].text)
	},
});
