enyo.kind({
  name: "Clues",
  kind: enyo.Control,
  cluelist: [
      		{clue1: "I'm clue 1"}
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
		this.$.clueInput.setValue(this.cluelist[0].clue1)
	},
});
