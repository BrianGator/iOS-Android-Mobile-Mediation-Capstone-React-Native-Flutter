# User Stories
*Written by Brian McCarthy*

This document outlines the nine primary user stories that govern the features and development lifecycle of the Meditation Capstone Mobile Application.

---

## User Story 1: User Registration (Sign-Up)
**As a** new learner of the meditation app,  
**I want to** create a secure account by entering a username, email address, and password,  
**So that** my personalized data, progress, and preferences can be stored and accessed across sessions.

### Acceptance Criteria:
- The screen contains exactly three input fields: **Username**, **Email**, and **Password**.
- Includes a primary **Sign Up** button and a clickable text link that navigates to the **Login** screen.
- Validates that all fields are filled before submitting; displays a clean validation warning if any field is empty.
- Upon successful registration, saves user registration details locally using `AsyncStorage` and initiates navigation to the Login screen.

---

## User Story 2: Secure User Login
**As a** registered meditation app user,  
**I want to** authenticate using my registered email address and password,  
**So that** my personalized account is securely loaded.

### Acceptance Criteria:
- The login screen contains exactly two input fields: **Email** and **Password**.
- Includes a primary **Login** button and a clickable link to navigate to the **Sign Up** screen.
- Validates inputs; compares provided credentials with existing user records stored in `AsyncStorage`.
- Displays an error alert if credentials are incorrect or if no account is found.
- On successful validation, redirects the user immediately to the app's **Home Screen**.

---

## User Story 3: Personalized Welcome Display
**As an** authenticated meditation app user,  
**I want to** see my registered username and a warm greeting at the top of the Home screen,  
**So that** the experience feels customized and welcoming.

### Acceptance Criteria:
- Upon launching the Home screen, the application retrieves the registered user details from `AsyncStorage`.
- Renders a top welcome header styled with the user's name (e.g., `"Hello Jon! Find your perfect meditation."`).
- Fits cleanly into the responsive layout of the Home screen workspace.

---

## User Story 4: Browsing Recommended (Popular) Meditations
**As a** user looking for trending sessions,  
**I want to** view a horizontal sliding showcase of popular meditations,  
**So that** I can easily discover highly recommended exercises.

### Acceptance Criteria:
- Displays a horizontal list of cards representing top trending meditation sessions.
- Displays loading indicators (ActivityIndicator spinners) when fetching content.
- Highlights the selected meditation card visually in contrast to inactive cards.
- Clicking any card triggers dynamic routing to the corresponding dynamic Meditation Detail view.

---

## User Story 5: Detailed Meditation Exercise Guides
**As a** user interested in a specific meditation session,  
**I want to** select it and view dedicated detail screens displaying its cover art, category target, and session duration,  
**So that** I know exactly what to expect before practicing.

### Acceptance Criteria:
- Includes high-quality visual cover image, dynamic session Title, and target metadata.
- Integrates a visual duration banner (pulling from a clock icon or descriptive text).
- Includes an elegant header with a sharing button and navigation options.

---

## User Story 6: Interactive Instructions View
**As a** user practicing a selected meditation,  
**I want to** toggle between "About" and sequential "Instructions" tabs,  
**So that** I can consume the steps systematically or read the background context.

### Acceptance Criteria:
- Provides clean horizontal tab navigation selectors (**About** and **Instructions**).
- When "About" is active, renders comprehensive high-level background paragraphs describing the session.
- When "Instructions" is active, displays a structured list with custom bullet-points detailing each execution step.

---

## User Story 7: Handled "Favorites" Persistence
**As an** active practitioner,  
**I want to** bookmark my preferred sessions with a heart button on the details display,  
**So that** they are saved persistently to a separate list that I can consult later.

### Acceptance Criteria:
- Detail layouts feature a visual heart icon button in the Footer.
- Toggling the heart saves the meditation object to a saved list in `AsyncStorage` or removes it if already present.
- Interactive text changes instantly from `"Add to favorites"` to `"Remove from favorites"`, and highlights the heart icon in crimson.
- Fetches and renders compiled bookmarks on a dedicated **My Favourites** screen.

---

## User Story 8: Dynamic Dark/Light Theme Switching
**As a** night-time meditation student,  
**I want to** toggle light and dark background themes globally,  
**So that** I can prevent eye strain during nocturnal sessions.

### Acceptance Criteria:
- Renders a responsive Theme toggle switch inside the settings structure.
- Employs a custom React Context Provider (`ThemeContext`) wrapping the root structure to maintain and distribute theme states globally.
- Updates background layouts, text color elements, panels, and input borders dynamically across all screens instantly when activated.

---

## User Story 9: Daily Reminders & Notification Toggles
**As a** structured learner,  
**I want to** configure daily notifications and execute a test reminder,  
**So that** I can build a persistent, disciplined meditation habit.

### Acceptance Criteria:
- Displays settings toggles to activate/deactivate daily meditation push alerts.
- Displays dropdown time pickers or quick interval options to configure delivery.
- Includes a **Trigger Test Event** interactive trigger button that triggers an instantaneous simulated visual/sound notification alert system displaying a success message.
