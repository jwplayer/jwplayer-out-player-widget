# JW Player Out-Player Widget
A javascript based widget to embed a feed of videos hosted in the JW Platform within your own content.

## Configuration File
By default the `config.json` file is populated with default options but you will need to include your own data for the first 3 options in the config: `widgetDivId`,`playlist`, and `videoPlayerId`. You will need to include the config.json at the root of your project to implement your widget properly. The JSON must remain in this format.

```
{
  "widgets": [
    {
      "widgetDivId": "<your widget div id>",
      "playlist": "<input your recommendations or playlist json url>",
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
widgetDivId | The id of the div container you will include the widget html within. This allows for more than widget to be included on a single page.
playlist | The json url to your playlist or recommendations feed.
videoPlayerId | The id of the div that is wrapping your JW Player video player. This tells the widget which player to send a play() event to on the page.
header | The title for your feed of videos.
textColor | This hex value will set the color for all text within the widget.
backgroundColor | This hex value will set the background of the entire widget.
iconColor | This hex value will set the color of the left and right arrow svgs.
widgetLayout | Sets the layout of the widget ("spotlight" or "shelf").
widgetSize | Sets the breakpoint of the widget ("large", "medium", or "small")

## Playlist JSON url
To use a recommended feed of videos for your widget, you can follow these steps:

1. Log into your JW Player Dashboard account.
2. Navigate to **Recommendations** using the left navigation.
3. Click into a recommendation playlist from the list.
4. Choose the **Advanced** tab and copy the JSON url from the developer resources section.

**Example recommendations JSON url:**
```
https://cdn.jwplayer.com/v2/playlists/{playlistID}?related_media_id={mediaID}
```

To use a manual or dynamically curated playlist, you can follow these steps:

1. Log into your JW Player Dashboard account.
2. Navigate to *Curated Playlists* using the left navigation.
3. Click into a playlist from the list.
4. Toggle source url to JSON and copy the url.

**Example playlist JSON url:**
```
https://cdn.jwplayer.com/v2/playlists/{mediaID}
```


## Embed the HTML
1. `widget.html` contains the HTML template for the widget.
2. Paste this HTML wherever you'd like your widget to appear in your content.
3. Notice that the id has been left blank — **add your own unique id to keep track of your widget**.
For example:
```
<div id="related-videos-feed" class="jw-widget">...</div>
```
4. You'll need to host the `jw-widget-min.css` and `jw-widget-min.js` files and reference them in the head of your page.
```
<link rel="stylesheet" href="jw-widget-min.css" />
<script type="text/javascript" src="jw-widget-min.js"></script>
```


## Customize Your Widget
1. You can customize font color, background color and icon color, the title and size of your widget, and choose between two layouts:
  * Spotlight Layout
(insert image of spotlight)
  * Shelf Layout
(insert image of shelf)
