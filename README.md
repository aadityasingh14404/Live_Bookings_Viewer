# 🎉 Live Bookings Viewer

A real-time web application that displays live venue booking updates using Socket.IO for instant communication between server and clients.

## 📋 Project Description

Live Bookings Viewer is a full-stack real-time application that simulates and displays venue bookings as they happen. The application features a clean, modern interface that updates instantly when new bookings are made, providing a live dashboard experience for venue managers or booking administrators.

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with flexbox, animations, and responsive design
- **Vanilla JavaScript** - DOM manipulation and Socket.IO client integration
- **Socket.IO Client** - Real-time communication with the server

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Socket.IO** - Real-time bidirectional event-based communication
- **In-memory storage** - Simple array-based data storage

## ✨ Features

- **Real-time Updates**: New bookings appear instantly across all connected clients
- **Modern UI**: Clean, card-based design with smooth animations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Connection Status**: Visual indicator showing connection status to the server
- **Booking Simulation**: Automatic generation of realistic booking data every 5 seconds
- **Performance Optimized**: Limits displayed bookings to prevent memory issues

## 🚀 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node server.js
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

1. **Start the application** by running `node server.js`
2. **Open multiple browser tabs** to `http://localhost:3000` to see real-time synchronization
3. **Watch live bookings** appear automatically every 5 seconds
4. **Observe real-time updates** across all open browser instances

## 📁 File Structure

```
live-bookings-viewer/
├── server.js              # Express server with Socket.IO and booking simulation
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── public/                # Static files served to clients
    ├── index.html         # Main HTML page with Socket.IO client
    └── style.css          # Modern CSS styling with animations
```

## 🔧 Configuration

The application runs on port 3000 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 node server.js
```

## 🎨 Customization

### Adding New Venue Names
Edit the `venueNames` array in `server.js`:

```javascript
const venueNames = [
  'Your Venue Name',
  'Another Venue',
  // Add more venues here
];
```

### Adjusting Booking Frequency
Change the interval in `server.js` (currently set to 5000ms):

```javascript
setInterval(() => {
  // Booking generation logic
}, 5000); // Change this value (in milliseconds)
```

### Styling Modifications
All visual styling can be customized in `public/style.css`. The application uses:
- CSS Grid and Flexbox for layouts
- CSS animations for smooth transitions
- Responsive design with media queries
- Modern card-based UI components

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📊 Performance Notes

- The application limits stored bookings to 50 items to prevent memory issues
- The UI displays a maximum of 20 bookings for optimal performance
- Smooth animations are optimized for 60fps rendering

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy your real-time booking experience! 🎉**