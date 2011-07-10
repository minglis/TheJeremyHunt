enyo.kind({
    name: "Clues",
    kind: enyo.Control,
    currentClueNumber: 0,
    cluelist: [
	{text: "Mr M is coming to town to sort things out. He's arriving from Paris... ", lat: "51.53", lon: "-0.12", image: 'images/question_1.png', sound: 'resources/audio_1.mp3'},
      	{text: "You need to speak to Ms Brooks. We've had a tip-off you'll find her seeking solace in the bottle.", lat: "51.52", lon: "-0.12", image: 'images/question_2.png', sound: 'resources/audio_2.mp3'},
      	{text: "If only there was a place you could go to find a more honest and truthful account of events... ", lat: "51.53", lon: "-0.12", image: 'images/question_3.png', sound: 'resources/audio_3.mp3'},
	
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
