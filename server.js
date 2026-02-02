const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to handle data sent from your forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve your static files (HTML, CSS, JS) from your project folder
app.use(express.static(__dirname));

// --- ROUTE: Handle Bookings ---
app.post('/api/book', (req, res) => {
    const { checkIn, checkOut, guests } = req.body;
    console.log(`New Booking Request: From ${checkIn} to ${checkOut} for ${guests}`);
    
    // In a real app, you'd save this to a database like MongoDB or SQL here
    res.json({ success: true, message: "Booking received! Our concierge will contact you." });
});

// --- ROUTE: Handle Contact Inquiries ---
app.post('/api/contact', (req, res) => {
    const inquiry = req.body;
    console.log("New Message Received:", inquiry);
    
    res.json({ success: true, message: "Message sent successfully." });
});

app.listen(PORT, () => {
    console.log(`LuxeStay Server running at http://localhost:${PORT}`);
});
