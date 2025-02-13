---

# **Bible Verse Finder - Expo App** 📖  

## **Overview**  
The **Bible Verse Finder** is a mobile application built using **React Native and Expo**. It allows users to search for Bible verses by entering a reference (e.g., *John 3:16*). The app fetches the corresponding verse using the **Bible API** and displays it in a clean, user-friendly interface.  

Additionally, the app features an animated intro screen displaying *"RANDRIA INDUSTRIES PRODUCTION"* for 5 seconds before transitioning to the main interface.  

---

## **Features**  

✅ **Animated Intro Screen** – Smooth fade-out effect that lasts for 5 seconds.  
✅ **Bible Verse Search** – Users can enter a verse reference to fetch the corresponding scripture.  
✅ **Responsive UI** – Stylish and minimalistic design with scrollable content.  
✅ **Error Handling** – Ensures the app runs smoothly, even if an invalid reference is entered.  

---

## **Installation & Setup**  

### **1. Prerequisites**  
Ensure you have the following installed on your system:  
- **Node.js** (Recommended: Node 16 or LTS version)  
- **Expo CLI** (Latest version)  
- **Android Emulator** or a **Physical Android Device**  

### **2. Clone the Repository**  
```bash
git clone https://github.com/your-repo/bible-verse-finder.git
cd bible-verse-finder
```

### **3. Install Dependencies**  
```bash
npm install
```

### **4. Run the App**  
For Android:  
```bash
npx expo run:android
```
For iOS (on macOS):  
```bash
npx expo run:ios
```
For Web Preview:  
```bash
npx expo start
```

---

## **Project Structure**  
```
/bible-verse-finder
│── assets/               # Static assets (images, icons, etc.)
│── App.tsx               # Main Application Code
│── package.json          # Project Dependencies
│── babel.config.js       # Babel Configuration
└── README.md             # Documentation
```

---

## **API Integration**  
This app uses the **Bible API** to fetch Bible verses. The API endpoint follows this format:  

```
https://bible-api.com/{verse_reference}
```
Example request:  
```
https://bible-api.com/john 3:16
```
Response format:  
```json
{
  "reference": "John 3:16",
  "text": "For God so loved the world...",
  "translation_id": "kjv"
}
```

---

## **Code Breakdown**  

### **1. Animated Intro Screen**  
The intro screen displays *"RANDRIA INDUSTRIES PRODUCTION"* for 5 seconds before fading out.  

```tsx
useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 5000,
    useNativeDriver: true,
  }).start(() => setShowIntro(false));
}, []);
```

### **2. Fetching Bible Verses**  
The app fetches the verse based on user input.  

```tsx
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
```

### **3. Styling the App**  
The app uses **React Native's StyleSheet** to ensure a clean UI.  

```tsx
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
});
```

---

## **Deployment**  

To generate an APK for Android:  
```bash
eas build --platform android
```
To generate an iOS build:  
```bash
eas build --platform ios
```

---

## **Future Improvements**  
🚀 Add a history feature to save previous searches  
🚀 Implement offline support  
🚀 Improve UI with better animations  

---

## **Contributors**  
👤 **Liantsoa RANDRIANASIMBOLARIVELO** – *Founder of Randria Industries*  

---

Let me know if you want modifications or additions! 😊
