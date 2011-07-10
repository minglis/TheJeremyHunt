enyo.kind({
    name: "Clues",
    kind: enyo.Control,
    currentClueNumber: 0,
    cluelist: [
	{text: "Perhaps a meeting with Alan Rusbridger would help", lat: "51.53", lon: "-0.12", image: 'images/question_1.png'},
      	{text: "Pub named after tabloid name for redundancy, \n an item of footwear that's on the other foot now", lat: "51.52", lon: "-0.12", image: 'images/question_2.png'},
      	{text: "Road that shares the name with a famous prison", lat: "51.53", lon: "-0.12", image: 'images/question_3.png'},
      	{text: "You've won!!", lat: "51.53", lon: "-0.12", image: 'images/win.png'}
    ],
    
    getClue: function() {
	console.log(this.cluelist[0].clue1);
	//this.$.cluetext.setContent(this.cluelist[this.currentClueNumber].text);
    },
    getCurrentClue: function () {
	return this.cluelist[this.currentClueNumber]
    },
    incrementClueNumber: function (){
	this.currentClueNumber ++;
    },
    // create: function(){
    // 	this.inherited(arguments);
    // 	this.getClue();
    // }
});
