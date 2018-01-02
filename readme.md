# Load Widget with Custom JSON
How to simply embed a custom feed of recommended videos into your own content.

### Embed the HTML
1. You can find the necessary code block in `widget.html` at the root of this project. This HTML will work for every widget layout.
2. Paste this HTML wherever you'd like your widget to appear in your content.
3. Notice that the id has been left blank — **add your own unique id to keep track of your widget**.
For example:
`<div id="winter-olympics" class="jw-widget">...</div>`

### Customize Your Widget
1. You can customize font color, background color and icon color, the title and size of your widget, and choose between two layouts:
  * Spotlight Layout
(insert image of spotlight)
  * Shelf Layout
(insert image of shelf)
2. You'll need to include a `config.json` at the root of your project to assemble your widget. The JSON must remain in this format. We've included an example of how you can customize more than one widget with one config file.
3. Be sure to include your custom div id in the `widgetDivId` field in order for your widget to populate in the right location, for example, `winter-olympics`.
4. The "playlist" field is required. Insert a path to your content here.

### Link Widget to a Video Player
1. The `config.json` has a field called `videoPlayerId`.
