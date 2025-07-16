const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Backend is running!', timestamp: new Date().toISOString() });
});

// Auth routes for testing
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email === 'test@example.com' && password === 'password123') {
    res.json({
      success: true,
      token: 'test-jwt-token-123',
      user: {
        id: 1,
        email: 'test@example.com',
        name: 'Test User'
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

// Registration endpoint
app.post('/auth/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  // Basic validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }
  
  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 8 characters'
    });
  }
  
  // Check if email already exists (in a real app, this would check the database)
  if (email === 'test@example.com') {
    return res.status(409).json({
      success: false,
      message: 'Email already exists'
    });
  }
  
  // Simulate successful registration
  res.json({
    success: true,
    token: 'test-jwt-token-new-user',
    user: {
      id: 2,
      email: email,
      name: `${firstName} ${lastName}`
    }
  });
});

// Dashboard Statistics
app.get('/user/dashboard/stats', (req, res) => {
  const token = req.headers.authorization;
  
  if (token && token.includes('test-jwt-token')) {
    res.json({
      success: true,
      data: {
        totalLabels: 1247,
        inTransit: 23,
        monthlySpend: 2847.50,
        savedContacts: 145,
        growth: {
          labels: 12,
          transit: 8,
          spend: -5,
          contacts: 3
        }
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }
});

// Recent Shipments
app.get('/user/shipments/recent', (req, res) => {
  const token = req.headers.authorization;
  const limit = req.query.limit || 5;
  
  if (token && token.includes('test-jwt-token')) {
    const shipments = [
      {
        id: 'LBL-023',
        trackingNumber: '1Z999AA1234567890',
        status: 'delivered',
        carrier: 'UPS',
        destination: 'New York, NY',
        createdAt: '2025-07-15T10:30:00Z',
        deliveredAt: '2025-07-16T14:20:00Z'
      },
      {
        id: 'LBL-022',
        trackingNumber: '1Z999AA1234567891',
        status: 'in_transit',
        carrier: 'FedEx',
        destination: 'Los Angeles, CA',
        createdAt: '2025-07-14T15:45:00Z',
        estimatedDelivery: '2025-07-17T12:00:00Z'
      },
      {
        id: 'LBL-021',
        trackingNumber: '1Z999AA1234567892',
        status: 'pending',
        carrier: 'USPS',
        destination: 'Chicago, IL',
        createdAt: '2025-07-13T09:15:00Z'
      },
      {
        id: 'LBL-020',
        trackingNumber: '1Z999AA1234567893',
        status: 'delivered',
        carrier: 'DHL',
        destination: 'Miami, FL',
        createdAt: '2025-07-12T11:20:00Z',
        deliveredAt: '2025-07-14T16:30:00Z'
      },
      {
        id: 'LBL-019',
        trackingNumber: '1Z999AA1234567894',
        status: 'delivered',
        carrier: 'UPS',
        destination: 'Seattle, WA',
        createdAt: '2025-07-11T08:30:00Z',
        deliveredAt: '2025-07-13T14:45:00Z'
      }
    ];
    
    res.json({
      success: true,
      data: shipments.slice(0, limit)
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }
});

// Notifications
app.get('/user/notifications', (req, res) => {
  const token = req.headers.authorization;
  const unreadOnly = req.query.unread === 'true';
  
  if (token && token.includes('test-jwt-token')) {
    const notifications = [
      {
        id: 1,
        type: 'delivery',
        title: 'Label delivered',
        message: 'Your label #LBL-023 has been delivered.',
        isRead: false,
        createdAt: '2025-07-16T12:30:00Z',
        icon: 'location1'
      },
      {
        id: 2,
        type: 'payment',
        title: 'Automatic Top Up Failed',
        message: 'Please navigate to Billing to update your credit card details.',
        isRead: false,
        createdAt: '2025-07-16T09:15:00Z',
        icon: 'rotate'
      },
      {
        id: 3,
        type: 'transit',
        title: 'Label is in Transit',
        message: 'Your label #LBL-003 changed status to \'In Transit\'',
        isRead: false,
        createdAt: '2025-07-15T16:45:00Z',
        icon: 'delivery'
      },
      {
        id: 4,
        type: 'delivery',
        title: 'Label delivered',
        message: 'Your label #LBL-019 has been delivered.',
        isRead: true,
        createdAt: '2025-07-14T16:30:00Z',
        icon: 'location1'
      }
    ];
    
    const filteredNotifications = unreadOnly 
      ? notifications.filter(n => !n.isRead)
      : notifications;
    
    res.json({
      success: true,
      data: filteredNotifications
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }
});

// User Profile Summary
app.get('/user/profile/summary', (req, res) => {
  const token = req.headers.authorization;
  
  if (token && token.includes('test-jwt-token')) {
    res.json({
      success: true,
      data: {
        id: 1,
        name: 'Test User',
        email: 'test@example.com',
        subscription: 'Starter',
        walletBalance: 127.50
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }
});

app.get('/user/profile', (req, res) => {
  const token = req.headers.authorization;
  
  if (token && token.includes('test-jwt-token')) {
    res.json({
      success: true,
      data: {
        id: 1,
        name: 'Test User',
        email: 'test@example.com'
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Test server running on http://localhost:${PORT}`);
  console.log('📝 Available endpoints:');
  console.log('  GET  /test');
  console.log('  POST /auth/login');
  console.log('  POST /auth/register');
  console.log('  GET  /user/dashboard/stats');
  console.log('  GET  /user/shipments/recent');
  console.log('  GET  /user/notifications');
  console.log('  GET  /user/profile/summary');
  console.log('  GET  /user/profile');
}); 