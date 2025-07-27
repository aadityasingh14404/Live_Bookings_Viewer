const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Store bookings in memory
let bookings = [];

// Sample venue names for simulation
const venueNames = [
  'Ocean Hall',
  'Garden Palace',
  'Sky Lounge',
  'Crystal Ballroom',
  'Sunset Terrace',
  'Royal Grand',
  'Azure Restaurant',
  'Golden Gate Hall',
  'Emerald Room',
  'Diamond Club',
  'Silver Moon',
  'Ruby Restaurant',
  'Sapphire Dining',
  'Pearl Banquet',
  'Platinum Hall'
];

// Function to generate random booking
function generateRandomBooking() {
  const venue = venueNames[Math.floor(Math.random() * venueNames.length)];
  const partySize = Math.floor(Math.random() * 100) + 1; // 1-100 people
  const now = new Date();
  const time = now.toLocaleString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  });

  return {
    id: Date.now() + Math.random(), // Simple unique ID
    venueName: venue,
    partySize: partySize,
    time: time,
    timestamp: now.toISOString()
  };
}

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  // Send existing bookings to newly connected client
  socket.emit('initial-bookings', bookings);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Simulate new bookings every 5 seconds
setInterval(() => {
  const newBooking = generateRandomBooking();
  bookings.unshift(newBooking); // Add to beginning of array
  
  // Keep only last 50 bookings to prevent memory issues
  if (bookings.length > 50) {
    bookings = bookings.slice(0, 50);
  }
  
  console.log('New booking generated:', newBooking);
  
  // Emit new booking to all connected clients
  io.emit('new-booking', newBooking);
}, 5000);

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Live Bookings Viewer server running on http://localhost:${PORT}`);
  console.log('📊 Generating new bookings every 5 seconds...');
});