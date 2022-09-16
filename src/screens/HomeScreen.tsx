import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ActivityIndicator, Button, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';
export const HomeScreen = () => {
    const { top } = useSafeAreaInsets()
    const {isLoading, simplePokemonList, loadPokemons} =usePokemonPaginated()
    // console.log(simplePokemonList)
  return (
    <>
      <Image 
        source={ require('../assets/pokebola.png')}
        style={styles.pokeBolaBG}
      />
      <View style={{
        // ...styles.globalMargin,
        alignItems: 'center'
      }}>
        <FlatList 
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          //header
          ListHeaderComponent={(
          <Text style={{...styles.title, ...styles.globalMargin,top: top +20, marginBottom: top+20, paddingBottom: 10}}>
              Pokes
          </Text>
          )}
          // renderItem={({item,index}) => <FadeInImage uri={item.picture} style={{height:100, width: 100}} /> }
          renderItem={({item,index}) => <PokemonCard pokemon={item} /> }
          numColumns={2}
          //Infinity scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.5}

          ListFooterComponent={<ActivityIndicator style={{height:100}} size={30} color='black' /> }
          />
        
        </View>
    </>
  )
}
