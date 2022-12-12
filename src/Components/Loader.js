import { StyleSheet, Text, View, ActivityIndicator, Modal } from 'react-native'
import React from 'react'

const Loader = ({ isLoading = false }) => {
  if (isLoading) {
    return (
      <Modal transparent>
        <View style={styles.LoaderStyle}>
          <ActivityIndicator color='red' size={24} />
        </View>
      </Modal>
    )
  }
  return null;
}

export default Loader

const styles = StyleSheet.create({
  LoaderStyle: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  }

})