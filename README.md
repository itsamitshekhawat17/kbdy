# 🎂 Happy Birthday Khyati - Interactive Birthday Website

A romantic, magical birthday surprise website created with love for Khyati's birthday on **7 December**.

## 🌟 Features

This interactive website includes:

1. **Pre-Landing Gate** - A romantic entry screen
2. **Landing Page** - Main birthday greeting with photo and floating balloons
3. **Love Letter Machine** - Click to reveal heartfelt messages with typewriter effect
4. **Puzzle Game** - Complete a couple photo puzzle to unlock a special message
5. **Photo Slideshow** - Romantic slideshow of memories together
6. **Wish Wall** - Clickable balloons with love messages
7. **Love Wheel** - Spin to win romantic rewards
8. **Final Message** - Heartfelt ending with replay option

## 🎨 Design Theme

- **Colors**: Cute pink (#ff6fa9), romantic red (#ff3b6b), dark galaxy background
- **Fonts**: Dancing Script (cursive) + Poppins (body text)
- **Animations**: Floating hearts, butterflies, balloons, confetti, and smooth transitions
- **Responsive**: Optimized for mobile, tablet, and desktop

## 📁 Project Structure

```
kbdysevendec/
│
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
│
└── assets/
    ├── khyati/         # Solo photos of Khyati
    │   └── main-photo.jpg  (Add your photo here)
    │
    ├── us/             # Couple photos
    │   ├── puzzle-photo.jpg  (Puzzle image)
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   ├── photo3.jpg
    │   ├── photo4.jpg
    │   └── photo5.jpg
    │
    ├── audio/          # Audio files
    │   ├── background-music.mp3  (Romantic background music)
    │   └── voice-message.mp3     (Your birthday voice message)
    │
    └── icons/          # Optional SVG icons
```

## 🚀 How to Set Up

### Step 1: Add Your Images

1. **Main Photo** (Landing Page):
   - Add a photo of Khyati to `assets/khyati/`
   - Rename it to `main-photo.jpg` (or update the path in `index.html` line 76)

2. **Puzzle Photo**:
   - Add a couple photo to `assets/us/`
   - Rename it to `puzzle-photo.jpg`
   - This will be used for the puzzle game

3. **Slideshow Photos**:
   - Add at least 5 couple photos to `assets/us/`
   - Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`, `photo5.jpg`
   - You can add more! Just update the array in `script.js` (lines 75-81)

### Step 2: Add Audio Files

1. **Background Music**:
   - Add a romantic music file to `assets/audio/`
   - Name it `background-music.mp3`
   - Should be instrumental or soft romantic music (around 3-5 minutes, will loop)

2. **Voice Message**:
   - Record a birthday voice message
   - Save it as `voice-message.mp3` in `assets/audio/`
   - This plays when the puzzle is completed

### Step 3: Customize Content (Optional)

#### Love Messages
Edit the love messages in `script.js` (lines 13-38). Add or modify messages as you like:

```javascript
let loveMessages = [
    "Your custom message here ✨",
    "Another sweet message 💖",
    // Add as many as you want!
];
```

#### Wish Wall Messages
Edit balloon messages in `script.js` (lines 68-88):

```javascript
let wishMessages = [
    "Your wish message here ✨",
    // Add 15-20 messages
];
```

#### Slideshow Captions
Edit photo captions in `script.js` (lines 75-81):

```javascript
let slideshowImages = [
    { src: "assets/us/photo1.jpg", caption: "Your caption" },
    // Add more photos
];
```

#### Love Wheel Rewards
Edit wheel rewards in `script.js` (lines 93-102):

```javascript
let wheelSegments = [
    { text: "Your Reward", emoji: "🎁" },
    // Customize all 8 rewards
];
```

## 🖥️ How to Run

### Option 1: Direct File Opening
1. Double-click `index.html`
2. It will open in your default browser

### Option 2: Live Server (Recommended)
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Python Server
```bash
# Navigate to project folder
cd kbdysevendec

# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile viewing. All interactive elements work with touch gestures.

**Best viewed on:**
- Mobile phones (primary)
- Tablets
- Desktop browsers

## 🎯 User Flow

1. **Gate Screen**: She clicks "Yes, Show Me 😳❤️"
2. **Landing**: Birthday greeting with her photo and balloons
3. **Love Machine**: Click "Reveal Love ✨" to read messages
4. **Puzzle**: Complete the 3x3 puzzle by clicking pieces to swap
5. **Slideshow**: Automatically starts after puzzle completion
6. **Wish Wall**: Pop balloons to reveal wishes
7. **Love Wheel**: Spin to win romantic rewards
8. **Final Message**: Heartfelt conclusion with replay option

## ⚙️ Technical Details

- **No frameworks required** - Pure HTML, CSS, and JavaScript
- **Smooth scrolling** between sections
- **CSS animations** for all visual effects
- **Canvas-based** love wheel and confetti
- **Audio controls** for background music
- **Local storage** not used (fresh experience every time)

## 🎨 Color Palette

```css
Background Gradient: #0b0320 → #2b1055 → #4e0f6b
Primary Pink: #ff6fa9
Accent Red: #ff3b6b
Light Pink: #ffa6c9
White: #ffffff
```

## 🐛 Troubleshooting

### Music not playing?
- Some browsers block autoplay. Make sure audio files are in the correct path.
- User needs to interact with the page first (click the gate button).

### Images not showing?
- Check that image paths match exactly (case-sensitive on some systems).
- Verify images are in the correct folders.

### Puzzle pieces not displaying correctly?
- Make sure the puzzle photo is square (ideally 360x360px or similar).
- The CSS automatically handles the cropping.

## 💝 Customization Tips

1. **Change colors**: Edit CSS variables in `style.css`
2. **Add more sections**: Copy a section structure and add navigation
3. **More love messages**: Add to the arrays in `script.js`
4. **Different fonts**: Change Google Fonts links in `index.html`
5. **Custom animations**: Modify keyframes in `style.css`

## 📝 Code Comments

All code is heavily commented for easy understanding and modification. Key sections:

- **HTML**: Clear section structure with IDs
- **CSS**: Organized by section with animation details
- **JavaScript**: Modular functions with explanatory comments

## ❤️ Made With Love

Created as a surprise birthday gift for Khyati.

**Technologies Used:**
- HTML5
- CSS3 (Animations, Gradients, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Canvas API (Wheel & Confetti)
- Google Fonts

---

## 🎁 Final Checklist Before Launch

- [ ] Add main photo of Khyati to `assets/khyati/main-photo.jpg`
- [ ] Add puzzle photo to `assets/us/puzzle-photo.jpg`
- [ ] Add 5+ slideshow photos to `assets/us/`
- [ ] Add background music to `assets/audio/background-music.mp3`
- [ ] Record and add voice message to `assets/audio/voice-message.mp3`
- [ ] Test on mobile device
- [ ] Test all interactive elements
- [ ] Verify music plays correctly
- [ ] Check that all images load
- [ ] Test puzzle completion and slideshow

**Once everything is ready, share the website link with Khyati on her birthday! 🎉**

---

*"Thank you for being born, Khyati. You are the best part of my life."* ❤️
