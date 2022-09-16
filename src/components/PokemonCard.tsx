import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native'
import ImageColors from 'react-native-image-colors'
import { getImageColor } from '../helpers/getColors';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowsWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({pokemon}:Props) => {
    const {navigate} = useNavigation()
    const [bgColor, setBgColor] = useState('grey')
    const isMounted = useRef(true)
    const newBgColor = async () => {
        const  [primary = 'grey'] = await getImageColor(pokemon.picture)
        setBgColor(primary)
    }
 
    useEffect(()   => {
        if (!isMounted.current) return;
        newBgColor()
        return () => { 
            isMounted.current = false
        }
    }, [])
    
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate('PokemonScreen',{simplePokemon:pokemon, color: bgColor})}
    >
        <View style={{...styles.cardContainer, backgroundColor: bgColor   }}>
            <View>
                <Text style={styles.name}>
                    {pokemon.name}
                    { '\n#' + pokemon.id}
                </Text>
            </View>
            <View style={styles.pokebolaContainer}>

                <Image 
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                    />
                </View>
         <FadeInImage uri={pokemon.picture} 
                      style={styles.pokemonImage} 
                      
                      />
        {/* <Text>
            {pokemon.name}
        </Text>  */}
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        // backgroundColor: 'red',
        height: 120,
        width: windowsWidth*0.4,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 100,
        height:100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        // opacity: 0.5,
        
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5

    },
    pokebolaContainer: {
        width: 100,
        height:100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5,
    }
})