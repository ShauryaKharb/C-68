import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class TransactionScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.container, { flex: 1 }]}>
          <Text>Issue</Text>
        </View>
        <View style={[styles.container, { flex: 1 }]}>
          <Text>Return</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
