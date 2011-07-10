enyo.kind({
    currentTry : "firstTry",
    name: "MyApps.TestLayout",
    kind: enyo.VFlexBox,
    components: [
	{
    	    name : "getCurPosition",
    	    kind: "PalmService",
    	    service : "palm://com.palm.location/",
    	    method : "getCurrentPosition",
    	    onSuccess : "posFinished",
    	    onFailure : "posFail",
    	    onResponse : "gotResponse",
    	    subscribe : false
	},
	{kind: 'Clues'},
	{kind: "PageHeader", content: "The Jeremy Hunt"},
	{kind: "Sound", name: 'soundPlayer', src: 'resources/audio_1.mp3'},
	
	{kind: "Group", name: 'clueText', caption: "",
	 components: [

	     {kind: "Image", name: 'picture', src: ''},

	     {kind: "ToolButtonGroup", 
	      pack: "center", align: "end", components: [
		  {kind: "IconButton", name: 'firstTry', toggling: false,
		   icon: 'resources/qmark.png', caption: 'First try', style: "width: 100px;", onclick: 'checkLocation'},
		  {kind: "IconButton", name: 'secondTry', toggling: false, disabled: true,
		   icon: 'resources/qmark.png', caption: 'Second try', style: "width: 100px;", onclick: 'checkLocation'},
		  {kind: "IconButton", name: 'thirdTry', toggling: false, disabled: true,
		   icon: 'resources/qmark.png', caption: 'Third try', style: "width: 100px;", onclick: 'checkLocation'},
		  {kind: "IconButton", name: 'audioButton', icon: 'images/audio.png', caption: 'Listen', style: "width: 100px;", onclick: 'listen'}
	      ]}]},
	{kind: "ProgressBar", minimum: 1, maximum: 4, position: 3}],
    try1: function() {
	
	if( !this.checkLocation()) {
	    this.$.firstTry.setIcon( 'resources/cross.jpg' );
	    this.$.firstTry.disabled = true;
	    this.$.secondTry.disabled = false;
	} else {
	    this.nextQuestion();
	}
    },
    try2: function() {
	if( !this.checkLocation() ) {
	    this.$.secondTry.setIcon( 'resources/cross.jpg' );
	    this.$.secondTry.disabled = true;
	    this.$.thirdTry.disabled = false;
	} else {
	    this.nextQuestion();
	}
    },
    try3: function() {
	if( !this.checkLocation() ) {
	    // set caption and image to game over
	} else {
	    this.nextQuestion();
	}
    },
    checkLocation: function() {
	this.$[this.currentTry].disabled = true;
	
	this.$.getCurPosition.call();
    },
    listen: function() {
	this.$.soundPlayer.play();
    },
    nextQuestion: function() {
	console.log( 'next question' );
	var clue = this.$.clues.incrementClueNumber();
	this.initialize();
    },
    initialize: function() {
	console.log( 'initialize' );
	var clue = this.$.clues.getCurrentClue();
	this.$.clueText.setCaption( clue.text );
	this.$.picture.setSrc( clue.image );
	this.$.soundPlayer.setSrc( clue.sound );
	this.resetButtons();
    },
    resetButtons: function() {
	console.log( 'resetting buttons' );
	this.currentTry == "firstTry";
	
	this.$.firstTry.disabled = false;
	this.$.secondTry.disabled = true;
	this.$.thirdTry.disabled = true;
	
	this.$.firstTry.setIcon('resources/qmark.png')
	this.$.secondTry.setIcon('resources/qmark.png')
	this.$.thirdTry.setIcon('resources/qmark.png')
    },
    failed: function() {
	this.$.clueText.setCaption("Loooooooser");
    },
    nextTry: function() {
	console.log("NEXT TRY");
	this.$[this.currentTry].setIcon( 'resources/cross.jpg' );
    	this.$[this.currentTry].disabled = true;

	if(this.currentTry == 'firstTry') {
	    this.currentTry = "secondTry";
	}else if(this.currentTry == 'secondTry') {
	    this.currentTry = "thirdTry";
	} else  {
	    this.failed();
	}

    	this.$[this.currentTry].disabled = false;
    },
    gotResponse : function (inSender, inResponse) {
	console.log("GOT RESPONSE");
    	
    },
    posFinished: function(inSender, inResponse) {
    	//	this.$.pageHeader.setContent("location retrieved" + enyo.json.stringify(inResponse));

    	var actualLat = Math.round(parseFloat(inResponse.latitude) * 100) / 100;
    	var actualLong = Math.round(parseFloat(inResponse.longitude) * 100) / 100;

    	console.log(actualLat + " " + actualLong);
    	console.log(this.$.clues.getCurrentClue().lat  + " " + this.$.clues.getCurrentClue().lon);

    	console.log(actualLat == this.$.clues.getCurrentClue().lat);
    	console.log(actualLong == this.$.clues.getCurrentClue().lon);

	

    	var result = (actualLat == this.$.clues.getCurrentClue().lat && actualLong == this.$.clues.getCurrentClue().lon) ;


	console.log("RESULT " + result);
	if(result) {
	    this.nextQuestion();
	} else {
	    this.nextTry();
	}
    },
    posFail : function(inSender, inResponse) {
    	this.$.pageHeader.setContent("location lookup failed");
    },
    getPos: function() {
    	console.log("HERE");
    	this.$.getCurPosition.call();
    }
})
