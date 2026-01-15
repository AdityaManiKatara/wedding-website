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
        mainVenue: "The Grand Palms",
        mainVenueAddress: "Address Line 1, City, State, PIN"
    },

    // ============================================
    // HERO SECTION TEXT
    // ============================================
    hero: {
        label: "Together With Their Families",
        conjunction: "&", // The symbol between names (& or and)
        greeting: "" // Optional greeting text
    },

    // ============================================
    // MANTRAS & BLESSINGS
    // ============================================
    mantras: {
        ganesh: "ॐ श्री गणेशाय नमः",
        ganeshFull: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
        hero: "Celebrating the Union of Two Families",
        footer: "May this union bring joy and prosperity to both families"
    },

    // ============================================
    // SECTION TITLES & SUBTITLES
    // ============================================
    sections: {
        families: {
            title: "The Families",
            subtitle: "Joining together in celebration",
            groomLabel: "Groom",
            brideLabel: "Bride",
            groomRelation: "Son of",
            brideRelation: "Daughter of"
        },
        rsvp: {
            title: "RSVP",
            subtitle: "Kindly confirm your attendance",
            nameLabel: "Full Name *",
            namePlaceholder: "Enter your full name",
            phoneLabel: "Contact Number *",
            phonePlaceholder: "10-digit mobile number",
            sideLabel: "Attending From *",
            groomSideOption: "Groom's Family",
            brideSideOption: "Bride's Family",
            submitButton: "Confirm Attendance",
            submittingButton: "Submitting...",
            successMessage: "Thank you for confirming your attendance. We look forward to your presence at this auspicious occasion.",
            errorRequired: "Please fill in all required fields",
            errorPhone: "Please enter a valid 10-digit contact number"
        }
    },

    // ============================================
    // FOOTER TEXT
    // ============================================
    footer: {
        blessingsText: "With the blessings of our families",
        copyrightText: "© 2026 • Wedding Celebration",
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
            description: "Traditional engagement ceremony marking the formal union of two families",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d443.70391879038624!2d78.00020217297018!3d27.167886902850015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1768480354660!5m2!1sen!2sin"
        },
        {
            id: "baraat",
            name: "Baraat (बारात)",
            date: "19th February 2026",
            time: "6:00 PM",
            venue: "Taj Signature",
            venueAddress: "Taj Signature Hotel Address",
            description: "The groom's ceremonial procession accompanied by family and celebration",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.0800871540964!2d78.05990170000001!3d27.153770299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397471c31db886a7%3A0x660b2b313dbdfa4b!2sHotel%20Taj%20Signature!5e0!3m2!1sen!2sin!4v1768480405752!5m2!1sen!2sin"
        },
        {
            id: "varmala",
            name: "Varmala (वरमाला)",
            date: "19th February 2026",
            time: "8:30 PM",
            venue: "The Grand Palms",
            venueAddress: "The Grand Palms Address",
            description: "Exchange of garlands symbolizing mutual acceptance and respect",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.01968844888!2d78.05706627587753!3d27.155670749606628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974710b5b87bccd%3A0x596f8b1720f5789!2sThe%20Grand%20Palms!5e0!3m2!1sen!2sin!4v1768480215215!5m2!1sen!2sin"
        },
        {
            id: "pheras",
            name: "Pheras (फेरे)",
            date: "19th February 2026",
            time: "10:00 PM",
            venue: "The Grand Palms",
            venueAddress: "The Grand Palms Address",
            description: "The sacred ceremony of seven vows, establishing the matrimonial bond",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.01968844888!2d78.05706627587753!3d27.155670749606628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974710b5b87bccd%3A0x596f8b1720f5789!2sThe%20Grand%20Palms!5e0!3m2!1sen!2sin!4v1768480215215!5m2!1sen!2sin"
        },
        {
            id: "vidaayi",
            name: "Vidaayi (विदाई)",
            date: "20th February 2026",
            time: "5:00 AM",
            venue: "The Grand Palms",
            venueAddress: "The Grand Palms Address",
            description: "The bride's departure ceremony as she embarks on a new chapter",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.01968844888!2d78.05706627587753!3d27.155670749606628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974710b5b87bccd%3A0x596f8b1720f5789!2sThe%20Grand%20Palms!5e0!3m2!1sen!2sin!4v1768480215215!5m2!1sen!2sin"
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
