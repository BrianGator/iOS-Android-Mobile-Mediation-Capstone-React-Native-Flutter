# Capstone Deliverables: Questions and Answers
*Written by Brian McCarthy*

This document outlines the systematic questions, answers, and analytical reflections compiled for the React Native Mobile App Development Capstone project. It showcases code implementation details, technical and methodology explanations, and the underlying architecture.

---

## Question 1: What are the main technologies, frameworks, and packages integrated into this Capstone Mobile App project, and what are their specific roles?
### Answer:
The meditation application is built upon a high-performance, modular mobile engineering architecture. The principal technical elements include:
1. **React / React Native (v19/v18 Core)**: Serves as the component-based user interface rendering engine, enabling declarative cross-platform visual layers.
2. **Expo & Expo SDK**: Provides the foundational client framework, permitting fast compilation, asset pipelines, and native-like testing bridges without direct Xcode/Android Studio compiler bottlenecks.
3. **Expo Router**: Leverages file-system route structures (`_layout.js`, `settings.js`, etc.) to supply nested stack layouts, state preservation, and native animation triggers.
4. **AsyncStorage (`@react-native-async-storage/async-storage`)**: Serves as the client-side persistent key-value document store. Used for user logins, profiles, and favorites bookmark arrays.
5. **Fetch HTTP Client (Standard API)**: Connects the mobile client with remote REST servers, handling asynchronous network requests, validating responses, and translating raw JSON documents into local state objects.
6. **React Context Engine**: Forms the global state machine for cross-screen configurations, such as the Light/Dark mode state, bypassing prop-drilling patterns.

---

## Question 2: Elaborate on how data persistence behaves through AsyncStorage within this codebase. What prevents memory leaks and stale data issues on page navigation?
### Answer:
Data persistence in our React Native capstone is handled asynchronously through system Storage calls.
For example, on the **Favourites Screen**, persistent data is kept synchronized upon focus updates by relying on the crucial React Native lifecycle hook `useFocusEffect` paired with `useCallback`. This pattern prevents the screen from displaying stale cached data when navigating back and forth.

### Code Sample (AsyncStorage Data Recovery in Favourites.js):
```javascript
// Written by Brian McCarthy
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      const favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
      setFavorites(favoritesArray);
    } catch (error) {
      console.error("Error loading favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Re-loads state every time the favorites view becomes focused
  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );
  
  return (
    // Render pipeline...
  );
};
```
By loading bookmarks inside `useFocusEffect`, we guarantee that if a user removes a session from their favorites inside the Detail page, the parent Favourites screen reacts naturally to the changed store upon receiving focus.

---

## Question 3: How is API Integration structured, and what strategies manage asynchronous state transitions gracefully?
### Answer:
The system retrieves random inspirational daily quotes from a remote REST API (`https://dummyjson.com/quotes/random`). State modeling is structured dynamically around three explicit states: **Loading state** (`loading`), **Fetched data state** (`quote`), and **Error trapping**.

### Code Sample (External API Integration in DailyQuote.js):
```javascript
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
        <Text style={styles.quoteText}>"{quote || 'Breathe deeply...'}"</Text>
      )}
    </View>
  );
};
```
Through this architecture, users are never exposed to broken interfaces, unformatted raw texts, or blank containers. The UI transitions cleanly from state to state with responsive visual spinners.

---

## Question 4: How does the Context API support the global Dark Mode configuration, and how is it initialized?
### Answer:
Since screens like the Home page, Detail screen, and Settings require a shared styled flag without repeating state declarations, a specialized React Theme Context is initialized. The context provider `ThemeProvider` shares the `"light"` or `"dark"` string along with a `toggleTheme()` invocation callback down the tree.

### Code Sample (Context Architecture in ThemeProvider.js):
```javascript
// Written by Brian McCarthy
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
```

---

## Question 5: What primary agile, testing, and implementation methodologies were integrated during this development cycle?
### Answer:
The project combined industry-standard development paradigms:
1. **Agile Scrum Methodology**: Development was structured in micro-sprints based on user story criteria, moving from authentication, home lists, details tabs, global states (theme support), and local persistence systematically.
2. **Separation of Concerns (SoC)**: Views, display components, styles, themes, and hooks were kept strongly separated in layout files, styled scripts, utility helpers, and distinct folders to keep code maintainable.
3. **Defensive Coding Practices**: Errors during AsyncStorage requests and network fetches are handled inside transparent `try-catch-finally` pipelines with helpful logging fallbacks.
4. **Mock Local Environment Testing**: Leveraged isolated web previews and standard debug protocols to inspect state parameters, ensuring layout boundaries, colors, font pairing, and typography scale fluidly across viewports.
