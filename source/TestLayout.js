enyo.kind({
    name: "MyApps.TestLayout",
    kind: enyo.VFlexBox,
    components: [
	{kind: "PageHeader", content: "The Jeremy Hunt"},
	
	{kind: "Group", caption: "How many mice live under the tree to the north of the bus?",
	 components: [

	     {kind: "Image", src: "resources/clue-image1.jpg"},

	     {kind: "ToolButtonGroup", 
	      pack: "center", align: "end", components: [
		  {kind: "IconButton", icon: 'resources/tick.png', caption: 'First try', style: "width: 100px;", onclick: 'phart'},
		  {kind: "IconButton", icon: 'resources/qmark.png', caption: 'Second try', style: "width: 100px;", onclick: 'phart'},
		  {kind: "IconButton", icon: 'resources/cross.jpg', caption: 'Third try', style: "width: 100px;", onclick: 'phart'},
		  
		  
	      ]}]},
	{kind: "ProgressBar", minimum: 1, maximum: 4, position: 3}],
    phart: function() {
	console.log( 'phart' );
    }
})
