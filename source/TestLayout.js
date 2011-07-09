enyo.kind({
    name: "MyApps.TestLayout",
    kind: enyo.VFlexBox,
    components: [
	{kind: "PageHeader", content: "The Jeremy Hunt"},
	{kind: "Group", caption: "How many mice live under the tree to the north of the bus?",
	 components: [{kind: "Control", layoutKind: "HFlexLayout",
		       style: "height: 200px;",
		       pack: "center", align: "end", components: [
			   {kind: "IconButton", caption: "First Try", icon: "resources/question.jpg", width: "100"},
			   {kind: "IconButton", caption: "Second Try", icon: "resources/question.jpg"},
			   {kind: "IconButton", caption: "Third Try", icon: "resources/question.jpg"}

		       ]}]}]})
