import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, color, onPress, text, bgColor = '' }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed
          ? [
              styles.pressed,
              styles.container,
              { backgroundColor: `${bgColor}` },
            ]
          : [styles.container, { backgroundColor: `${bgColor}` }]
      }
    >
      <Ionicons name={icon} size={24} color={color} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#1F75FE',
    padding: 6,
    borderRadius: 8,
    width: 100,
  },
  text: {
    color: 'white',
  },
});
