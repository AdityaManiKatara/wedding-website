# Wedding Website - Deployment Ready

A beautiful, modern Indian wedding website with animations, RSVP functionality, and full customization through a single config file.

## 📁 Folder Structure

```
wedding-website/
├── index.html              # Main website file
├── config.js               # ALL CONFIGURATION HERE - Edit this file only!
├── README.md              # This file
└── images/
    ├── logo/              # Put Ganesh/wedding logo here
    │   └── ganesh.png
    ├── hero/              # Home page background image
    │   └── hero-bg.jpg
    ├── families/          # Family photos
    │   ├── groom-side.jpg
    │   └── bride-side.jpg
    └── ceremonies/        # Ceremony background images
        ├── ceremony-1.jpg  (Lagan)
        ├── ceremony-2.jpg  (Baraat)
        ├── ceremony-3.jpg  (Varmala)
        ├── ceremony-4.jpg  (Pheras)
        └── ceremony-5.jpg  (Vidaayi)
```

## 🚀 Quick Setup (3 Steps)

### Step 1: Add Your Images

Place your images in the correct folders with these exact names:

**Required Images:**
- `images/logo/ganesh.png` - Your Ganesh or wedding logo
- `images/hero/hero-bg.jpg` - Main home page background
- `images/families/groom-side.jpg` - Groom's family photo
- `images/families/bride-side.jpg` - Bride's family photo
- `images/ceremonies/ceremony-1.jpg` - Lagan background
- `images/ceremonies/ceremony-2.jpg` - Baraat background
- `images/ceremonies/ceremony-3.jpg` - Varmala background
- `images/ceremonies/ceremony-4.jpg` - Pheras background
- `images/ceremonies/ceremony-5.jpg` - Vidaayi background

**Image Guidelines:**
- Use high-resolution images (1920x1080 or higher)
- JPG format for photos, PNG for logo
- Keep file sizes reasonable (< 2MB each)

### Step 2: Edit config.js

Open `config.js` and update:

1. **Couple Details** - Names and parents' names
2. **Wedding Date & Venue**
3. **Hindi Mantras** - Use your preferred mantras
4. **Ceremonies** - Update dates, times, venues, and Google Maps URLs
5. **Side Labels** - Mark each ceremony as "bride", "groom", or "both"

### Step 3: Deploy

Choose one of these deployment methods:

#### Option A: Netlify (Recommended - Free & Easy)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire `wedding-website` folder
3. Done! You get a free URL like `yournames.netlify.app`

#### Option B: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named `yournames-wedding`
3. Upload all files
4. Enable GitHub Pages in Settings
5. Your site will be at `username.github.io/yournames-wedding`

#### Option C: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import the folder
3. Deploy instantly

#### Option D: Any Web Hosting
Upload all files to your web hosting via FTP.

## ✨ Features

- 🎨 **Beautiful Animations** - Smooth scrolling, fade-ins, hover effects
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🗺️ **Individual Maps** - Each ceremony has its own Google Map
- 📝 **RSVP Popup** - Elegant popup form with name & phone
- 👥 **Visitor Counter** - Tracks website visits
- 🎭 **Full-Screen Ceremonies** - Click any ceremony for details
- 🏷️ **Side Labels** - Shows "From Bride Side" / "From Groom Side"
- ⚙️ **Single Config File** - Change everything from one file

## 🎨 Customization

### Updating Mantras
Edit in `config.js`:
```javascript
mantras: {
    ganesh: "ॐ गं गणपतये नमः",
    hero: "श्री गणेशाय नमः । शुभम् भवतु ।",
    footer: "सर्वे भवन्तु सुखिनः । सर्वे सन्तु निरामयाः ।"
}
```

### Adding/Removing Ceremonies
Edit the `ceremonies` array in `config.js`:
```javascript
ceremonies: [
    {
        id: "new-event",
        name: "New Event",
        date: "Date here",
        time: "Time here",
        venue: "Venue name",
        description: "Description",
        mapUrl: "Google Maps embed URL",
        side: "both" // or "bride" or "groom"
    }
]
```

### Getting Google Maps Embed URL
1. Go to [Google Maps](https://maps.google.com)
2. Search for your venue
3. Click "Share" → "Embed a map"
4. Copy the URL from the iframe src
5. Paste into `mapUrl` in config.js

### Changing Colors (Advanced)
Edit in `config.js`:
```javascript
theme: {
    primary: "#8B4513",    // Brown
    secondary: "#DAA520",  // Gold
    accent: "#CD853F",     // Tan
    gold: "#D4AF37"        // Bright Gold
}
```

## 📊 Viewing RSVP Responses

RSVP data is stored in browser localStorage. To view responses:

1. Open the website
2. Press F12 (Developer Tools)
3. Go to "Console" tab
4. Type: `JSON.parse(localStorage.getItem('weddingRSVPs'))`
5. Press Enter

This shows all RSVP submissions with names, phone numbers, and timestamps.

## 🔧 Troubleshooting

**Images not showing?**
- Check file names match exactly (including .jpg vs .png)
- Check images are in correct folders
- Check file paths in config.js

**Website looks broken?**
- Make sure all files are uploaded together
- Check that config.js is in the same folder as index.html

**Maps not working?**
- Verify the Google Maps embed URL is correct
- Make sure you copied the full URL from the iframe src

## 📞 Support

For issues or questions:
1. Check this README first
2. Verify all file paths in config.js
3. Ensure all images are uploaded correctly

## 🎉 That's It!

Your wedding website is ready! Just add images, edit config.js, and deploy.

**Pro Tip:** Test locally first by opening index.html in your browser before deploying.

---

Made with ❤️ for your special day
