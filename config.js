// ============================================
// WEDDING WEBSITE CONFIGURATION
// Edit this file to customize your wedding website
// All text, dates, venues, and settings are here
// ============================================

const WEDDING_CONFIG = {
    // ============================================
    // COUPLE DETAILS
    // ============================================
    couple: {
        groom: {
            name: "Aditya Mani",
            mother: "Alka Katara",
            father: "Brajendra Kant Katara"
        },
        bride: {
            name: "Deepti",
            mother: "Shashi Prabha Upadhyaya",
            father: "Dr. Krishna Kant Upadhyaya"
        }
    },

    // ============================================
    // WEDDING DATE & VENUE
    // ============================================
    wedding: {
        date: "19th February 2026",
        dateForCountdown: "2026-02-19T00:00:00", // Format: YYYY-MM-DDTHH:MM:SS
        mainVenue: "The Grand Palm Court",
        mainVenueAddress: "Address Line 1, City, State, PIN"
    },

    // ============================================
    // HERO SECTION TEXT
    // ============================================
    hero: {
        label: "Together With Their Families",
        conjunction: "&" // The symbol between names (& or and)
    },

    // ============================================
    // MANTRAS & BLESSINGS
    // Edit these to your preferred Hindi mantras
    // ============================================
    mantras: {
        ganesh: "ॐ गं गणपतये नमः",
        hero: "श्री गणेशाय नमः । शुभम् भवतु ।",
        footer: "सर्वे भवन्तु सुखिनः । सर्वे सन्तु निरामयाः ।"
    },

    // ============================================
    // SECTION TITLES & SUBTITLES
    // ============================================
    sections: {
        families: {
            title: "The Families",
            subtitle: "United by love and blessings",
            groomLabel: "Groom",
            brideLabel: "Bride",
            groomRelation: "Son of",
            brideRelation: "Daughter of"
        },
        rsvp: {
            title: "RSVP",
            subtitle: "Please confirm your attendance",
            nameLabel: "Full Name *",
            namePlaceholder: "Enter your full name",
            phoneLabel: "Phone Number *",
            phonePlaceholder: "10-digit mobile number",
            sideLabel: "Attending From *",
            groomSideOption: "Groom's Side",
            brideSideOption: "Bride's Side",
            submitButton: "Confirm Attendance",
            submittingButton: "Submitting...",
            successMessage: "🎉 Thank you! Your RSVP has been confirmed. We look forward to celebrating with you!",
            errorRequired: "Please fill in all fields",
            errorPhone: "Please enter a valid 10-digit phone number"
        }
    },

    // ============================================
    // FOOTER TEXT
    // ============================================
    footer: {
        blessingsText: "With the blessings of our families",
        copyrightText: "© 2026 • Shubh Vivah",
        developedBy: "Developed by NewbieTech",
        developerEmail: "newbietech11@gmail.com"
    },

    // ============================================
    // IMAGE PATHS
    // Put your images in the respective folders
    // ============================================
    images: {
        // Logo image (Ganesh or wedding logo)
        logo: "images/logo/ganesh-final.png",
        
        // Hero/Home section background
        hero: "images/hero/hero-bg.jpg",
        
        // Family group background image
        familyGroup: "images/families/family-group.png",
        
        // Individual family images (not currently displayed)
        families: {
            groomSide: "images/families/groom-side.jpg",
            brideSide: "images/families/bride-side.jpg"
        },
        
        // Ceremony background images
        ceremonies: {
            lagan: "images/ceremonies/lagan.png",
            baraat: "images/ceremonies/baraat.png",
            varmala: "images/ceremonies/varmala.png",
            pheras: "images/ceremonies/pheras-new.png",
            vidaayi: "images/ceremonies/vidaayi.png"
        }
    },

    // ============================================
    // CEREMONIES/EVENTS DETAILS
    // Add or remove ceremonies as needed
    // Each ceremony can have custom Google Maps URL
    // ============================================
    ceremonies: [
        {
            id: "lagan",
            name: "Lagan (लगन)",
            date: "17th February 2026",
            time: "10:00 AM",
            venue: "Groom's Residence",
            venueAddress: "Address here",
            description: "Sacred engagement ceremony with family blessings and rituals",
            // To get your Google Maps embed URL:
            // 1. Go to Google Maps
            // 2. Search for your location
            // 3. Click Share > Embed a map
            // 4. Copy the iframe src URL
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215275390381!2d-73.98823492346471!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1705340000000!5m2!1sen!2sus"
        },
        {
            id: "baraat",
            name: "Baraat (बारात)",
            date: "19th February 2026",
            time: "6:00 PM",
            venue: "Taj Signature",
            venueAddress: "Taj Signature Hotel Address",
            description: "The groom's grand procession with music, dance, and celebration",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215275390381!2d-73.98823492346471!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1705340000000!5m2!1sen!2sus"
        },
        {
            id: "varmala",
            name: "Varmala (वरमाला)",
            date: "19th February 2026",
            time: "8:30 PM",
            venue: "The Grand Palm Court",
            venueAddress: "Grand Palm Court Address",
            description: "Exchange of garlands marking the sacred union of two souls",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215275390381!2d-73.98823492346471!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1705340000000!5m2!1sen!2sus"
        },
        {
            id: "pheras",
            name: "Pheras (फेरे)",
            date: "19th February 2026",
            time: "10:00 PM",
            venue: "The Grand Palm Court",
            venueAddress: "Grand Palm Court Address",
            description: "Sacred seven vows around the holy fire, binding two souls forever",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215275390381!2d-73.98823492346471!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1705340000000!5m2!1sen!2sus"
        },
        {
            id: "vidaayi",
            name: "Vidaayi (विदाई)",
            date: "20th February 2026",
            time: "5:00 AM",
            venue: "The Grand Palm Court",
            venueAddress: "Grand Palm Court Address",
            description: "Emotional farewell as the bride begins her new journey with love",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215275390381!2d-73.98823492346471!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1705340000000!5m2!1sen!2sus"
        }
    ],

    // ============================================
    // NAVIGATION LINKS
    // ============================================
    navigation: {
        links: [
            { text: "Families", href: "#families" },
            { text: "Ceremonies", href: "#ceremonies" },
            { text: "RSVP", href: "#rsvp" },
            { text: "Contact", href: "#footer" }
        ]
    },

    // ============================================
    // FEATURES TOGGLE
    // Enable or disable features
    // ============================================
    features: {
        countdown: true,        // Show countdown timer
        confetti: true,        // Show confetti animation
        musicPlayer: true,     // Show music player
        scrollToTop: true,     // Show scroll to top button
        rsvp: true            // Show RSVP section
    },

    // ============================================
    // MUSIC SETTINGS
    // ============================================
    music: {
        // You can replace this with your own audio file URL
        // Formats supported: .mp3, .ogg, .wav
        url: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
        defaultVolume: 30  // 0-100
    },

    // ============================================
    // COLOR THEME (Advanced)
    // CSS color values - change carefully
    // ============================================
    theme: {
        primary: "#8B4513",      // Brown
        secondary: "#DAA520",    // Gold
        accent: "#CD853F",       // Light Brown
        gold: "#D4AF37"          // Gold accent
    }
};
