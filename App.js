import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  ActivityIndicator,
  View,
  Button
} from 'react-native';
import {API_KEY, BASE_URL, SEARCH, TRENDING} from '@env';
import Snackbar from 'react-native-snackbar';
import {RenderImage} from './src/Component/RenderImage';
import {RenderTitle} from './src/Component/RenderTitle';
import {RenderHeader} from './src/Component/RenderHeader';

export default function App() {
  //Gifs States
  const [searchedGifs, setsearchedGifs] = useState([]);
  const [term, updateTerm] = useState('');
  const [trendingGifs, settrendingGifs] = useState([]);

  // Functional States
  const [heading, setheading] = useState(false);
  const [isLoaded, setisLoaded] = useState(false);
  const [isTrendingLoaded, setisTrendingLoaded] = useState(false);
  const [pageNo, setpageNo] = useState(1);

  async function fetchGifs() {
    try {
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
  useEffect(() => {
    fetchGifs();
  }, [pageNo]);

  useEffect(() => {
    onEdit();
  },[]);

  // ************************* Render Item ********************
  function searchRenderItem({item}) {
    if (isLoaded === false) {
      return <ActivityIndicator color={'white'} size={'large'} />;
    } else {
      setheading(true);
      return <RenderImage LinkImage={item.images.original.url} />;
    }
  }

  function renderTrendingItem({item}) {
    if (isTrendingLoaded === false) {
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
        backgroundColor: 'black',
      }}>
      <RenderHeader />
      {/* Search Input Section */}
      <TextInput
        placeholder="What's on your mind...."
        placeholderTextColor="black"
        style={styles.textInput}
        onChangeText={text => onEdit(text)}
      />
      {/* Search Section */}
      {heading ? (
        <Text style={[styles.searchText]}>Your Search</Text>
      ) : (
        <Text style={[styles.searchText, {fontSize: 12}]}>
          Your Search is Empty. It will be visible here
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
