enyo.kind({
    name: "MyApps.TestLayout",
    kind: enyo.VFlexBox,
    components: [
	{kind: 'Clues'},
	{kind: "PageHeader", content: "The Jeremy Hunt"},
	
	{kind: "Group", caption: "How many mice live under the tree to the north of the bus?",
	 components: [

	     {kind: "Image", src: "resources/clue-image2.jpg"},

	     {kind: "ToolButtonGroup", 
	      pack: "center", align: "end", components: [
		  {kind: "IconButton", name: 'firstTry', toggling: true,
		   icon: 'resources/qmark.png', caption: 'First try', style: "width: 100px;", onclick: 'try1'},
		  {kind: "IconButton", name: 'secondTry', toggling: true, disabled: true,
		   icon: 'resources/qmark.png', caption: 'Second try', style: "width: 100px;", onclick: 'try2'},
		  {kind: "IconButton", name: 'thirdTry', toggling: true, disabled: true,
		   icon: 'resources/qmark.png', caption: 'Third try', style: "width: 100px;", onclick: 'try3'},
	      ]}]},
	{kind: "ProgressBar", minimum: 1, maximum: 4, position: 3}],
    try1: function() {
	if( !this.checkLocation() ) {
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
	return true;
    },
    nextQuestion: function() {
	console.log( 'next question' );
    }
})
