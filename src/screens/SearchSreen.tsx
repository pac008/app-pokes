import React, { useEffect, useState } from 'react'
import { Platform, Text, View, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
const screenWidth =Dimensions.get('screen').width
export const SearchSreen = () => {
    const {top} = useSafeAreaInsets()
    const { isFetching, simplePokemonList } = usePokemonSearch()
    const [pokemonsFiltered, setPokemonsFiltered] = useState<SimplePokemon[]>([])
    
    
    const [term, setTerm] = useState('')


    useEffect(() => {
       if (term.length == 0) {
            return setPokemonsFiltered([])
           
       } 
      if ( isNaN(Number(term))) {
          setPokemonsFiltered(
              simplePokemonList.filter(poke => poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
  
          )
        } else {
            const pokemonById = simplePokemonList.find(poke => poke.id.includes(term) )
            setPokemonsFiltered(
                (pokemonById) ? [pokemonById] : []
    
            )
            
      }
       
    }, [term])
    


    if ( isFetching) {
        return (
         <Loading />
        )
    }




    return (
        <View style={{
            flex:1, 
            // marginTop: Platform.OS == 'ios' ? top : top+10,
            marginHorizontal: 20
            }}>
            <SearchInput 
                onDebounce={setTerm}
                style={{
                position: 'absolute',
                zIndex: 999,
                width: screenWidth -40,
                top: Platform.OS == 'ios' ? top : top +28
            }} />

            <FlatList 
          data={pokemonsFiltered}
          keyExtractor={pokemon => pokemon.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          //header
          ListHeaderComponent={(
          <Text style={{...styles.title, ...styles.globalMargin, marginTop: Platform.OS == 'ios' ? top+60 : top +80, paddingBottom: 10}}>
              {term}
          </Text>
          )}
          // renderItem={({item,index}) => <FadeInImage uri={item.picture} style={{height:100, width: 100}} /> }
          renderItem={({item,index}) => <PokemonCard pokemon={item} /> }
          
          />

        </View>
    )
}
