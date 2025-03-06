import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:product.imgURL}} />
      <Text style={styles.headerText}>{product.title}</Text>
        <Text style={styles.priceText}>{product.price}</Text>
        {product.inStock&&<Text style={{color:'red', margin:5, fontFamily:'semibold'}}>Stokta Yok</Text>}
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEFF1',
        margin: 10,
        rounded: 10,
        width:Dimensions.get('window').width/2.24 ,
        height:Dimensions.get('window').height/2.8,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 17,
        margin: 5,
        fontFamily:'semibold',
    },
    priceText:{
        fontSize: 16,
        margin: 5,
        color:'gray',
        fontFamily:'semibold',
    },
    image:{
        height:Dimensions.get('window').height/5,
        margin:10,
        borderRadius:10,
    },
})