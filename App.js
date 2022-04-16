import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {API_KEY, BASE_URL, SEARCH, TRENDING} from '@env';
import Snackbar from 'react-native-snackbar';
import {RenderImage} from './src/Component/RenderImage';
import {RenderTitle} from './src/Component/RenderTitle';
import {RenderHeader} from './src/Component/RenderHeader';

export default function App() {
  //Search States
  const [searchedGifs, setsearchedGifs] = useState([]);
  const [term, updateTerm] = useState('');

  //Gif Categories
  const [trendingGifs, settrendingGifs] = useState([]);
  const [pageNo, setpageNo] = useState(1);

  // Functional States
  const [heading, setheading] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const [isTrendingLoaded, setisTrendingLoaded] = useState(false);
  
  async function fetchGifs() {
    try {
      // Search
      const searchJson = await fetch(
        `${BASE_URL}/${SEARCH}?api_key=${API_KEY}&q=${term}&limit=10`,
      );
      const searchRes = await searchJson.json();
      setsearchedGifs(searchRes.data);

      //Trending
      const trendingJson = await fetch(
        `${BASE_URL}/${TRENDING}?api_key=${API_KEY}&rating=pg-${pageNo}`,
      );
      const trendingRes = await trendingJson.json();
      settrendingGifs(trendingRes.data);

      setisLoaded(true);
      setisTrendingLoaded(true);
    } catch (error) {
      Snackbar.show({
        text: 'Please Restart the App',
        duration: Snackbar.LENGTH_LONG,
      });
    }
  } /// add facebook fresco
  // console.log(artistsGifs)
  useEffect(() => {
    fetchGifs();
  }, [pageNo]);
  
  useEffect(() => {
    fetchGifs();
  });
  

  // ************************* Render Item ********************

  function searchRenderItem({item}) {
    if (isLoaded == false) {
      return <ActivityIndicator color={'white'} size={'large'} />;
    } else {
      setheading(true);
      return <RenderImage LinkImage={item.images.original.url} />;
    }
  }

  function renderTrendingItem({item}) {
    if (isTrendingLoaded == false) {
      return <ActivityIndicator color={'white'} size={'large'} />;
    } else {
      return <RenderImage LinkImage={item.images.original.url} />;
    }
  }

  function onEdit(newTerm) {
    updateTerm(newTerm);
  }
 
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <RenderHeader />
      {/* Search Input Section */}
      <TextInput
        placeholder="What's on your mind...."
        placeholderTextColor="black"
        style={styles.textInput}
        value={term}
        onChangeText={text => onEdit(text)}
      />
      {/* Search Section */}
      {heading ? (
        <Text style={[styles.searchText]}>Your Search</Text>
      ) : (
        <Text style={[styles.searchText, {fontSize: 12}]}>
          Your Search is Empty. It will be visible here. It May Take Some Time to Load.
        </Text>
      )}
      <FlatList horizontal data={searchedGifs} renderItem={searchRenderItem} />

      {/* Trending  Section */}
      <RenderTitle Title={'Trending'} />
      <FlatList
        numColumns={2}
        onEndReachedThreshold={0.5}
        onEndReached={() => setpageNo(pageNo + 1)}
        data={trendingGifs}
        renderItem={renderTrendingItem}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textInput: {
    width: Dimensions.get('screen').width / 1,
    height: 40,
    color: 'black',
    backgroundColor: 'white',
    marginHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  searchText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});
