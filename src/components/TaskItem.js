import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TaskItem({ id, value, onDelete }) {
  return (
    <View style={styles.task}>
      <Text style={styles.text}>{value}</Text>
      <Button title="Delete" onPress={() => onDelete(id)} color="#ff5c5c" />
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  text: { fontSize: 16 },
});
