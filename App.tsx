import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Animated } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function App() {
  const [data, setData] = useState<{ reference: string, text: string }[]>([]);
  const [value, setValue] = useState<string>('');
  const [fadeAnim] = useState(new Animated.Value(1));
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => setShowIntro(false));
  }, []);

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const fetchData = () => {
    if (value.trim() === '') return;
    const dataFetch = `https://bible-api.com/${encodeURIComponent(value)}`;
    fetch(dataFetch)
      .then((response) => response.json())
      .then((json) => {
        setData([{ reference: json.reference, text: json.text }]);
      })
      .catch((error) => console.error(error));
  };

  if (showIntro) {
    return (
      <Animated.View style={[styles.introContainer, { opacity: fadeAnim }]}> 
        <Text style={styles.introText}>RANDRIA INDUSTRIES PRODUCTION</Text>
      </Animated.View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BIBLE VERSE FINDER</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Type a verse which you want to see</Text>
        <TextInput
          mode="outlined"
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="Enter verse"
        />
        <Button mode="contained" onPress={fetchData} style={styles.button}>
          Fetch Verse
        </Button>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {data.map((element, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <Title>{element.reference}</Title>
              <Paragraph>{element.text}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  introContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  introText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  scrollView: {
    alignItems: 'center',
  },
  card: {
    marginVertical: 10,
    width: '90%',
  },
});
