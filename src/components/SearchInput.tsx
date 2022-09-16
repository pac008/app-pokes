import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Platform, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    style?: StyleProp<ViewStyle>;
    onDebounce: (value:string) => void;
}
export const SearchInput = ({style,onDebounce}:Props) => {

    const [textValue, setTextValue] = useState('')
    const debouncedValue = useDebouncedValue(textValue)

    useEffect(() => {
        onDebounce(debouncedValue)
    },[debouncedValue])
  return (
    <View style={{
        ...styles.container,
        ...style as any
        
        }}>
        <View style={styles.textBackground}>
            <TextInput 
                placeholder='Buscar pokemón' 
                style={{...styles.textinput, top: Platform.OS == 'ios' ? 0 : 2}}
                autoCapitalize='none'
                autoCorrect={false}
                value={textValue}
                onChangeText={setTextValue}
             />

             <Icon
                name='search-outline'
                size={30}
                color={'grey'}
             />
        </View> 
    </View>
  )
}




const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    textBackground: {
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    textinput: {
        fontSize: 18,
        flex: 1,
        
    }
})