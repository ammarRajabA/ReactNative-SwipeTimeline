# Swipe Timeline

## Summary
Timeline component that can be used for:
  - Showing posts (like Facebook with profile name and image in addition to posting images)
  - Ability to add actions buttons (like "Share" "Like" and "Comment" and of course any kind of actions)
  - Ability to make Swipe actions (swipe right and left)
  - This also contains a Date picker shown as stripe (User can customize its position and colors).
  - It can be used for ToDo list apps and similar ones. 


<img src="https://github.com/ammarRajabA/ReactNative-SwipeTimeline/raw/master/example/Screenshot_20190622-201740.png" width="400">|<img src="https://github.com/ammarRajabA/ReactNative-SwipeTimeline/raw/master/example/Screenshot_20190622-201802.png" width="400">
<img src="https://github.com/ammarRajabA/ReactNative-SwipeTimeline/raw/master/example/Screenshot_20190622-201810.png" width="400">|<img src="https://github.com/ammarRajabA/ReactNative-SwipeTimeline/raw/master/example/Screenshot_20190622-201823.png" width="400">

## Usage
Props are : data, itemKey, preview, dateStripe, onDateSelected, onThumbnailPressed, onCardPress, onCardOpen, onAction
### data
  - Define *Data* as array of JSON objects which are the data you want to show in timeline, as the following structure (all mandatory unless mentioned not - You can experiment and change as you want):
    - id : Number
    - title: String
    - titleColor: String (You can use "Colors.js" inside the project)
    - description: String
    - thumbnail: Object ({uri:"link of image"} or require(/path-to-image))
    - photo: Object (Optional) ({uri:"link of image"} or require(/path-to-image))
    - time: String (you can put any string but it's main purpose to display time)
    - timeColor: String (optional)
    - swipeLeft: Object (
      - enabled: Boolean
      - color: String,
      - icon: Object ({name: String,type: String ,color:String } where icons are from react-native-elements icons)
    - swipeRight: Object (same as swipeLeft)
    - backgroundColor: String
    - actions: Object ({id: Number, name:String, type: String, color: String, value: Any})

### itemKey:
key name used for "extractKey" in the FlatList
### preview:
show a preview of swipe
### dateStripe:
Object {enabled: Boolean, primaryColor: String, secondaryColor: String, fontColor: String, startDate:
Date, endDate: Date, currentDate: Date}
### onDateSelected:
callback when date is selected.
Parameters: (date)
### onThumbnailPressed:
when thumbnail image is pressed.
Parameters: (item)
### onCardPress:
when the whole card is pressed.
Parameters: (item)
### onCardOpen:
when card is swiped.
Parameters: (toValue, item)
### onAction:
when a certain action is pressed.
Parameters: (item, action)

___________________________________________

***Note*** There's a provided example.
