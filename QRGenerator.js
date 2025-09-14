import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRGenerator = ({tripno}) => {
  const value = 0+{tripno};

  return (
    <View style={styles.container}>
      
      <QRCode
        value={value}
        size={200}
        color="black"
        backgroundColor="white"
      />
      <Text style={styles.title}>- QR Code</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default QRGenerator;