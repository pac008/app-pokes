import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull
}

export const PokemonDetails = ({pokemon}:Props) => {
  return (

    <ScrollView
        style={{
            ...StyleSheet.absoluteFillObject,
            
        }}
    >
         <View style={{
             ...styles.container,
             marginTop: 370

             }} >
             <Text style={{
                 ...styles.title
             }}>
                 Types
             </Text> 
              {/* TYpes  */}
                <View style={{
                    flexDirection: 'row'
                }}>

                    {
                    pokemon.types.map( ({type}) => (
                        <Text
                        style={{...styles.regularText, marginRight: 10}}
                        key={type.name}
                        >
                            {type.name}
                        </Text>  
                        
                        ) )
                    }     
                </View>
                {/* Peso */}
                <Text style={{
                 ...styles.title
             }}>
                 Peso
             </Text> 
             <Text
                style={{...styles.regularText  }}
                >
                {pokemon.weight}kg
                </Text>  
         </View>
        {/* sprite */}
        <View style={{
            ...styles.container,

        }}>
            <Text style={styles.title}> Sprites</Text>
        </View>
        <ScrollView
            // style
            horizontal={true}

        >
            <FadeInImage uri={pokemon.sprites.front_default } style={styles.basicSprite}/>
            <FadeInImage uri={pokemon.sprites.back_default } style={styles.basicSprite}/>
            <FadeInImage uri={pokemon.sprites.front_shiny } style={styles.basicSprite}/>
            <FadeInImage uri={pokemon.sprites.back_shiny } style={styles.basicSprite}/>
        </ScrollView>
        {/* Habilidades */}
        <View style={{
            ...styles.container,

        }}>
            <Text style={styles.title}> Habilidades base</Text>
            <View style={{
                    flexDirection: 'row'
                }}>

                    {
                    pokemon.abilities.map( ({ability}) => (
                        <Text
                        style={{...styles.regularText, marginRight: 10}}
                        key={ability.name}
                        >
                            {ability.name}
                        </Text>  
                        
                        ) )
                    }     
                </View>
        </View>
        {/* MovimientOS */}
        <View style={{
            ...styles.container,

        }}>
            <Text style={styles.title}>Movimientos</Text>
            <View style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row'
                }}>

                    {
                    pokemon.moves.map( ({move}) => (
                        <Text
                        style={{...styles.regularText, marginRight: 10}}
                        key={move.name}
                        >
                            {move.name}
                        </Text>  
                        
                        ) )
                    }     
                </View>
        </View>
        {/* sTATS */}
        <View style={{
            ...styles.container,

        }}>
            <Text style={styles.title}>Stats</Text>
            <View style={{
                    // flexWrap: 'wrap',
                    // flexDirection: 'row'
                }}>

                    {
                    pokemon.stats.map( (stat,index) => (
                        <View key={stat.stat.name+index}
                        style={{
                            // flexWrap: 'wrap',
                            flexDirection: 'row'
                        }}>
                            <Text
                            style={{...styles.regularText, marginRight: 10, width: 150}}
                            
                            >
                                {stat.stat.name}
                            </Text>  
                            <Text
                            style={{...styles.regularText, fontWeight: 'bold'}}
                            >
                                {stat.base_stat}
                            </Text>  

                        </View>
                        
                        ) )
                    }     
                </View>
        </View>
        {/* sprite final */}
        <View style={{
            marginBottom: 20,
            alignItems: 'center'

        }}>
            <FadeInImage uri={pokemon.sprites.front_default } style={styles.basicSprite}/>
            
        </View>

    </ScrollView>

  )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 19,

    },
    basicSprite: {
        width: 100,
        height: 100
    }
})