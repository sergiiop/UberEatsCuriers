import { StatusBar, StyleSheet, Text, View } from 'react-native'
import orders from '../assets/data/orders.json'
import { Image } from 'expo-image'
import { Entypo } from '@expo/vector-icons'

const order = orders[0]

export default function App () {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: order.Restaurant.image
          }}
        />
        <Text>{order.Restaurant.name}</Text>
        <Text>{order.Restaurant.address}</Text>
        <Text>Delivery Details</Text>
        <Text>{order.User.name}</Text>
        <Text>{order.User.address}</Text>
        <Entypo name='check' size={30} color='black' />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
