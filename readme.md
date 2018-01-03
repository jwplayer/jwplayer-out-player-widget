# JW Player Out-Player Widget
A javascript based widget to embed a feed of videos hosted in the JW Platform within your own site.

### [DEMO](http://developer.jwplayer.com)

## Configuration File
You will need to include a `config.json` at the root of your project to implement your widget appropriately. The `config.json` file is populated with default options, but you will need to include your own data for the first 3 options in the config: `widgetDivId`,`playlist`, and `videoPlayerId`. 

The JSON must remain in this format:
```
{
  "widgets": [
    {
      "widgetDivId": "<your widget div id>",
      "playlist": "<your recommendations or playlist json url>",
      "videoPlayerId": "<your video player div id>",
      "header": "More Videos",
      "textColor": "#fff",
      "backgroundColor": "#000",
      "iconColor": "#fff",
      "widgetLayout": "spotlight",
      "widgetSize": "large"
    }
  ]
}
```
### Options
Option | Description
------------ | -------------
widgetDivId | The id of the div containing the widget html. This allows for more than one widget to be included on a single page.
playlist | The json url to your playlist or recommendations feed.
videoPlayerId | The id of the div containing your JW Player video player. This tells the widget which player to send a play() event to on the page.
header | The title for your feed of videos.
textColor | Hex value for the text color in the widget UI.
backgroundColor | Hex value for the background color of the entire widget.
iconColor | Hex value for the color of the left and right arrow svgs.
widgetLayout | Defines the layout design of the widget ("spotlight" or "shelf").
widgetSize | Sets the breakpoint of the widget ("large", "medium", or "small")

## Retrieving your Playlist JSON url
To use a recommended feed of videos in your widget, follow these steps:

1. Log into your [JW Player Dashboard](https://dashboard.jwplayer.com) account.
2. Navigate to **Recommendations** using the left navigation.
3. Click into a recommendation playlist from the list.
4. Choose the **Advanced** tab and copy the JSON url from the developer resources section.

**Example recommendations JSON url:**
```
https://cdn.jwplayer.com/v2/playlists/{playlistID}?related_media_id={mediaID}
```

To use a manual or dynamically curated playlist, follow these steps:

1. Log into your [JW Player Dashboard](https://dashboard.jwplayer.com) account.
2. Navigate to **Curated Playlists** using the left navigation.
3. Click into a playlist from the list.
4. Toggle source url to JSON and copy the url.

**Example playlist JSON url:**
```
https://cdn.jwplayer.com/v2/playlists/{mediaID}
```


## Embed the HTML
1. The `widget.html` file contains the HTML template for the widget.
2. Paste this HTML wherever you'd like your widget to appear within your content.
3. Notice that the id has been left blank — **add your own unique id to specify your widget**.
For example:
```
<div id="related-videos-feed" class="jw-widget">...</div>
```
4. You'll need to host the `jw-widget-min.css` and `jw-widget-min.js` files and reference them in the head of your page.
```
<link rel="stylesheet" href="css/jw-widget-min.css" />
<script type="text/javascript" src="js/jw-widget-min.js"></script>
```


## Customizations

### Styling
The following options can be configured within your `config.json` to allow for brand control when integrating the JW Player Out-Player widget into your site.

* Widget Title
* Text color
* Icon color
* Background color

### Layout
The JW Player Out-Player widget comes with two built-in layout options.

Layout | Pagination Rules | Description 
------------ | -------------| -------------
shelf | page (items in view) | A standard UI for "more videos" components. 
spotlight | single item | A more stylized layout that includes elegant transitional animations.

### Multiple Widgets
The Out-Player widget's `config.json` was built to accept more than one widget configuration. You can have multiple widgets on a page with different configurations simply by appending a second object within the config file.

```

{
  "widgets": [
    {
      "widgetDivId": "my-discover-widget",
      "playlist": "<your recommendations or playlist json url>",
      "header": "Discover More Videos",
      "textColor": "#fff",
      "backgroundColor": "#000",
      "iconColor": "#fff",
      "widgetLayout": "spotlight",
      "widgetSize": "large",
      "videoPlayerId": "one-player"
    },
    {
      "widgetDivId": "my-related-videos-widget",
      "playlist": "<your recommendations or playlist json url>",
      "header": "You Might Like:",
      "textColor": "#e984bb",
      "backgroundColor": "#fff",
      "iconColor": "#98ac70",
      "widgetLayout": "shelf",
      "widgetSize": "medium",
      "videoPlayerId": "another-player"
    }
  ]
}
```
