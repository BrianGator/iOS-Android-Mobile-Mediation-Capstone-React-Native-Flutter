// Written by Brian McCarthy
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (response.ok) {
        const data = await response.json();
        setQuote(data.quote);
      } else {
        console.error('Error fetching quote:', response.status);
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#FE7654" />
      ) : (
        <>
          <Text style={styles.quoteText}>"{quote || 'Inhale positive energy, exhale doubt.'}"</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 15,
    backgroundColor: '#FAF9F6',
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
  },
});

export default DailyQuote;
