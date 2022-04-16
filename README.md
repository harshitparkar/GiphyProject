## React Native - [Giphy.com](https://giphy.com/)

> This project is to demonstrate implementation of API's provided by the [Developers.giphy.com](https://developers.giphy.com/)

_Functionality_

1. Auto Search
2. Pagination with infinite scroll
3. Smooth loading of Images.
4. Responsive

_API's Used_

1. Search
2. Trending

### Try It Out? Follow this steps:

- Clone this project to the local directory.
- Go to your project's root folder and run `npm install`.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install --`repo-update`
- Run `npm run ios` or `npm run android` to start your application!

Note: Please install the pre-requisite needed to run React-Native App.

### Package Dependencies:

1. [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv)
2. [react-native-snackbar](https://www.npmjs.com/package/react-native-snackbar)

### Explanation: 
**Functions In App()**
1. `useState()`
    1.To store the custome search value.
    2.To store the data fetched from the API calls.
    3.To set pagination concept through page number.
    4.To set some functional attributes like Loading, Headers, Title.
2. `fetchGifs()`
    1.This is a async function in which we are fetching data though API's like Search & Trending.
    2.All this fetched data is stores in useStates.
    3.We are using try catch so that if any error occures during the fetch a Snackbar will apperar asking to restart the app.
3. `searchRenderItem()`
    1.This function renders the item based on the word searched.
    2.We fetch the data and store it inside searchedGifs array.
    3.Image is fetched using item.images.original.url.
4. `renderTrendingItem()`
    1.This function renders the item based on the data fetched from Trending API.
    2.We fetch the data and store it inside trendingGifs array.
    3.Image is fetched using item.images.original.url.

**UI in App()**
1. Custom Components:

> `<RenderHeader/>` is a custom functional Component which is used to render the Logo and Subsection button on the top of the app.

> `<RenderImage/>` is custom functional Component which is used to render Image which accepts props as url string called LinkImage.

> `<RenderTitle/>` is custom functional Component which is used to render Text which accepts props as string called Title.

2. React - Native Components:

> `<TextInput/>` is React-native Component which helps you enter keyword to search which is lated stores as term in useState, which is lated used by API to fetch data related to that term.

> `<FlatList/>` is React-native Component which helps you to render the data in UI form. We have used numColums to divide page into 2 section to display gifs. onEndReachedThreshold & onEndReached helps us fetch data once you reach the end of the page. We use useState variables as data.



