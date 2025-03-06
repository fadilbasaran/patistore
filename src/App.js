import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import ProductCard from './components/ProductCard/ProductCard';
import ProductData from './pati-store-data.json';
export default function App() {
  const renderProduct = ({item}) => <ProductCard product={item} />
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PatikaStore</Text>
      <TextInput style={styles.textInput} placeholder='Ara...'/>
      <FlatList
      numColumns={2}
      data={ProductData}
      keyExtractor={item => item.id.toString()}
      renderItem={({item})=>renderProduct({item})}
      // columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontWeight: 'bold',
    color:'purple',
    textTransform: 'uppercase',
    fontSize: 40,
    margin: 5,
    fontFamily:'semibold',
  },
  textInput:{
    backgroundColor:'#EDEFF1',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

});
