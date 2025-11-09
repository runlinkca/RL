// RunnersLink - Running Community Web App
// Connect with runners, organize runs, and track your progress

// Web-only application - no mobile conversions

// Data Storage (In-Memory)
// Initialize friends data for existing users
let friendsData = {
  1: { friends: [2, 4, 5], pending_requests: [3], sent_requests: [7, 9] },
  2: { friends: [1, 7], pending_requests: [6, 10], sent_requests: [8] },
  3: { friends: [], pending_requests: [], sent_requests: [1, 5] },
  4: { friends: [1, 8], pending_requests: [], sent_requests: [2] },
  5: { friends: [1, 9], pending_requests: [3], sent_requests: [] },
  6: { friends: [], pending_requests: [2], sent_requests: [] },
  7: { friends: [2, 8], pending_requests: [1], sent_requests: [] },
  8: { friends: [4, 7, 9], pending_requests: [], sent_requests: [2] },
  9: { friends: [5, 8], pending_requests: [1], sent_requests: [] },
  10: { friends: [], pending_requests: [2], sent_requests: [1] }
};

let users = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "demo@example.com",
    password: "demo123",
    age: 28,
    fitness_level: "advanced",
    pace: 8.5,
    distance_preference: 8,
    bio: "Passionate about early morning runs! I love pushing myself and training for races. Always looking for motivated running partners.",
    location: "downtown",
    city: "Denver, CO",
    profile_picture: "SC",
    running_interests: ["Marathon", "Half Marathon", "Competitive Running", "Road Running"],
    running_goals: ["Complete a Marathon", "Improve pace", "Train for a race"],
    years_running: 7,
    favorite_terrain: "Road"
  },
  {
    id: 2,
    name: "Mike Johnson",
    email: "test@example.com",
    password: "test123",
    age: 35,
    fitness_level: "intermediate",
    pace: 10.0,
    distance_preference: 5,
    bio: "Casual runner who loves the outdoors and meeting new people. Running is my stress relief and favorite way to explore the city.",
    location: "park",
    city: "Denver, CO",
    profile_picture: "MJ",
    running_interests: ["Casual Running", "Social Running", "Trail Running"],
    running_goals: ["Health and fitness", "Join a running community"],
    years_running: 4,
    favorite_terrain: "Park trails"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    email: "runner@example.com",
    password: "runner123",
    age: 31,
    fitness_level: "beginner",
    pace: 11.5,
    distance_preference: 3,
    bio: "Just started my running journey! Seeking supportive friends who understand beginner struggles. Love the supportive running community.",
    location: "waterfront",
    city: "New York, NY",
    profile_picture: "ER",
    running_interests: ["Casual Running", "Social Running", "5K"],
    running_goals: ["Complete a 5K", "Health and fitness", "Join a running community"],
    years_running: 1,
    favorite_terrain: "Waterfront paths"
  },
  {
    id: 4,
    name: "James Park",
    email: "james@example.com",
    password: "password",
    age: 42,
    fitness_level: "intermediate",
    pace: 10.5,
    distance_preference: 6,
    bio: "Marathon training is my life! I love the structure and challenge of long-distance running. Looking for training partners.",
    location: "trail",
    city: "Denver, CO",
    profile_picture: "JP",
    running_interests: ["Marathon", "Half Marathon", "Road Running"],
    running_goals: ["Complete a Marathon", "Improve pace"],
    years_running: 10,
    favorite_terrain: "Road"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa@example.com",
    password: "password",
    age: 26,
    fitness_level: "advanced",
    pace: 9.0,
    distance_preference: 10,
    bio: "Competitive runner obsessed with speed work and breaking PRs. Let's push each other to greatness!",
    location: "downtown",
    city: "Los Angeles, CA",
    profile_picture: "LT",
    running_interests: ["5K", "10K", "Half Marathon", "Competitive Running", "Track"],
    running_goals: ["Improve pace", "Train for a race"],
    years_running: 8,
    favorite_terrain: "Track and road"
  },
  {
    id: 6,
    name: "David Chen",
    email: "david@example.com",
    password: "password",
    age: 45,
    fitness_level: "beginner",
    pace: 12.0,
    distance_preference: 4,
    bio: "Getting back into running after taking a long break. Excited to rediscover my love for running with supportive friends.",
    location: "park",
    city: "Los Angeles, CA",
    profile_picture: "DC",
    running_interests: ["Casual Running"],
    running_goals: ["Health and fitness", "Build endurance"],
    years_running: 0,
    favorite_terrain: "Park"
  },
  {
    id: 7,
    name: "Jessica Martinez",
    email: "jessica@example.com",
    password: "password",
    age: 29,
    fitness_level: "intermediate",
    pace: 10.2,
    distance_preference: 5,
    bio: "Trail running is my passion! I love exploring new trails and connecting with nature while running.",
    location: "trail",
    city: "Austin, TX",
    profile_picture: "JM",
    running_interests: ["Trail Running", "10K", "Social Running"],
    running_goals: ["Build endurance", "Join a running community"],
    years_running: 5,
    favorite_terrain: "Trail"
  },
  {
    id: 8,
    name: "Robert Wilson",
    email: "robert@example.com",
    password: "password",
    age: 33,
    fitness_level: "advanced",
    pace: 8.0,
    distance_preference: 12,
    bio: "Ultra runner and trail enthusiast. I love challenging terrain and pushing my limits. Always looking for adventure partners!",
    location: "trail",
    city: "Austin, TX",
    profile_picture: "RW",
    running_interests: ["Ultra Running", "Trail Running", "Marathon", "Competitive Running"],
    running_goals: ["Complete a Marathon", "Improve pace", "Build endurance"],
    years_running: 12,
    favorite_terrain: "Trail"
  },
  {
    id: 9,
    name: "Amanda Lee",
    email: "amanda@example.com",
    password: "password",
    age: 38,
    fitness_level: "intermediate",
    pace: 10.8,
    distance_preference: 5,
    bio: "Work-life balance through running! Using running to stay healthy and find balance in my busy life.",
    location: "downtown",
    city: "New York, NY",
    profile_picture: "AL",
    running_interests: ["Casual Running", "Road Running"],
    running_goals: ["Health and fitness", "Build endurance"],
    years_running: 6,
    favorite_terrain: "Road"
  },
  {
    id: 10,
    name: "Carlos Fernandez",
    email: "carlos@example.com",
    password: "password",
    age: 27,
    fitness_level: "beginner",
    pace: 11.0,
    distance_preference: 3,
    bio: "First marathon is my big goal! Excited and nervous about the journey. Looking for experienced runners to learn from.",
    location: "waterfront",
    city: "Denver, CO",
    profile_picture: "CF",
    running_interests: ["Marathon", "Casual Running", "Social Running"],
    running_goals: ["Complete a Marathon", "Build endurance"],
    years_running: 2,
    favorite_terrain: "Mixed"
  }
];

let runs = [
  {
    id: 1,
    title: "Sunday Morning Fun Run",
    date: "2025-11-09",
    time: "08:00",
    distance: 5,
    pace: 10.5,
    difficulty: "easy",
    location: "downtown",
    city: "Denver, CO",
    organizer_id: 1,
    max_participants: 15,
    participants: [2, 4],
    description: "Easy-paced fun run with a coffee stop at the end!"
  },
  {
    id: 2,
    title: "Tempo Run Group",
    date: "2025-11-06",
    time: "18:00",
    distance: 6,
    pace: 9.0,
    difficulty: "hard",
    location: "downtown",
    city: "Denver, CO",
    organizer_id: 5,
    max_participants: 10,
    participants: [1],
    description: "Speed work session for intermediate to advanced runners"
  },
  {
    id: 3,
    title: "Beginner-Friendly Trail Run",
    date: "2025-11-08",
    time: "09:00",
    distance: 4,
    pace: 11.0,
    difficulty: "easy",
    location: "trail",
    city: "Los Angeles, CA",
    organizer_id: 3,
    max_participants: 12,
    participants: [6, 9],
    description: "Scenic trail run, beginner-friendly pace"
  },
  {
    id: 4,
    title: "Long Run Saturday",
    date: "2025-11-08",
    time: "07:00",
    distance: 10,
    pace: 10.0,
    difficulty: "moderate",
    location: "waterfront",
    city: "Austin, TX",
    organizer_id: 4,
    max_participants: 20,
    participants: [8],
    description: "Long run along the waterfront, bring water!"
  },
  {
    id: 5,
    title: "Park Loop Speed Work",
    date: "2025-11-07",
    time: "17:30",
    distance: 5,
    pace: 9.5,
    difficulty: "moderate",
    location: "park",
    city: "New York, NY",
    organizer_id: 2,
    max_participants: 15,
    participants: [1, 7],
    description: "Intervals and pace work in the park"
  }
];

let connections = [];
let messages = [];
let currentUser = null;
let currentTheme = 'light'; // Track current theme
let currentChatUserId = null;
let nextUserId = 11;
let nextRunId = 6;
let nextTournamentId = 9;
let currentTournamentId = null;
let selectedMapMarker = null;
let googleMap = null;
let googleMapMarkers = [];
let googleMapInfoWindow = null;
let mapInitialized = false;
let googleMapPolylines = [];
let freeRunGoogleMap = null;
let freeRunMapMarkers = [];
let freeRunPolyline = null;

// Safety features state
let safetySettings = {
  notifyFriendsWhenRunning: false,
  allowLiveTracking: false,
  sosContacts: [], // Array of user IDs
  emergencyContactPhone: ''
};

let activeRunners = []; // Track who is currently running: { userId, startTime, distance, pace, isWatching }
let sosAlerts = []; // Active SOS alerts: { alertId, userId, location, timestamp, acknowledged }
let runNotifications = []; // Run start notifications

// Free Run state
let freeRunState = {
  isSharingLocation: false,
  friendsWatching: [],
  isRunning: false,
  isPaused: false,
  startTime: null,
  elapsedSeconds: 0,
  pausedTime: 0,
  distance: 0,
  route: [],
  currentPosition: { x: 50, y: 50 },
  intervalId: null,
  routeIntervalId: null,
  // GPS tracking
  gpsEnabled: false,
  gpsWatchId: null,
  gpsStatus: 'inactive', // inactive, searching, connected, denied, unavailable
  lastGpsPosition: null,
  gpsAccuracy: null,
  gpsSpeed: null,
  gpsCoordinates: [], // Array of {lat, lng, timestamp}
  isDemoMode: false
};

let completedRuns = [];
let nextCompletedRunId = 1;

// City coordinates for map positioning (GPS lat/lng)
const cityCoordinates = {
  'Denver, CO': { lat: 39.7392, lng: -104.9903, x: 50, y: 50 },
  'Los Angeles, CA': { lat: 34.0522, lng: -118.2437, x: 20, y: 60 },
  'New York, NY': { lat: 40.7128, lng: -74.0060, x: 85, y: 30 },
  'Austin, TX': { lat: 30.2672, lng: -97.7431, x: 50, y: 75 },
  'Seattle, WA': { lat: 47.6062, lng: -122.3321, x: 15, y: 20 },
  'Chicago, IL': { lat: 41.8781, lng: -87.6298, x: 70, y: 45 },
  'Boston, MA': { lat: 42.3601, lng: -71.0589, x: 90, y: 25 },
  'San Francisco, CA': { lat: 37.7749, lng: -122.4194, x: 10, y: 55 },
  'Miami, FL': { lat: 25.7617, lng: -80.1918, x: 75, y: 85 },
  'Portland, OR': { lat: 45.5152, lng: -122.6784, x: 12, y: 35 }
};

let tournaments = [
  {
    id: 1,
    title: "November Distance Challenge",
    description: "Log 100 miles throughout November and compete on the leaderboard!",
    city: "Denver, CO",
    distance_goal: 100,
    start_date: "2025-11-01",
    end_date: "2025-11-30",
    creator_id: 1,
    creator_name: "Sarah Chen",
    privacy: "public",
    status: "active",
    tournament_type: "Distance Challenge",
    max_participants: 50,
    participants: [1, 2, 4, 5],
    leaderboard: [
      { user_id: 5, user_name: "Lisa Thompson", distance_logged: 125, rank: 1 },
      { user_id: 1, user_name: "Sarah Chen", distance_logged: 110, rank: 2 },
      { user_id: 2, user_name: "Mike Johnson", distance_logged: 85, rank: 3 }
    ]
  },
  {
    id: 2,
    title: "Speed Week Challenge",
    description: "Achieve your fastest 5K time this week! Compete for the top spot.",
    city: "Los Angeles, CA",
    distance_goal: 25,
    start_date: "2025-11-10",
    end_date: "2025-11-16",
    creator_id: 5,
    creator_name: "Lisa Thompson",
    privacy: "public",
    status: "active",
    tournament_type: "Speed Challenge",
    max_participants: 30,
    participants: [5, 7],
    leaderboard: [
      { user_id: 5, user_name: "Lisa Thompson", distance_logged: 28, rank: 1 }
    ]
  },
  {
    id: 3,
    title: "Friends Marathon Training",
    description: "Private tournament for close friends. Let's train together for the marathon!",
    city: "Denver, CO",
    distance_goal: 200,
    start_date: "2025-11-20",
    end_date: "2025-12-05",
    creator_id: 1,
    creator_name: "Sarah Chen",
    privacy: "friends",
    status: "active",
    tournament_type: "Marathon Training",
    max_participants: 10,
    participants: [1, 2, 4],
    leaderboard: [
      { user_id: 1, user_name: "Sarah Chen", distance_logged: 150, rank: 1 },
      { user_id: 4, user_name: "James Park", distance_logged: 120, rank: 2 }
    ]
  },
  {
    id: 4,
    title: "Trail Running Challenge",
    description: "Explore trails and log your trail miles! Experience required.",
    city: "Austin, TX",
    distance_goal: 75,
    start_date: "2025-11-12",
    end_date: "2025-12-12",
    creator_id: 8,
    creator_name: "Robert Wilson",
    privacy: "public",
    status: "active",
    tournament_type: "Distance Challenge",
    max_participants: 40,
    participants: [7, 8],
    leaderboard: [
      { user_id: 8, user_name: "Robert Wilson", distance_logged: 95, rank: 1 }
    ]
  },
  {
    id: 5,
    title: "5K Speed Competition",
    description: "Complete a 5K in your best time. All fitness levels welcome!",
    city: "New York, NY",
    distance_goal: 15,
    start_date: "2025-11-15",
    end_date: "2025-11-22",
    creator_id: 3,
    creator_name: "Emma Rodriguez",
    privacy: "public",
    status: "upcoming",
    tournament_type: "Speed Challenge",
    max_participants: 25,
    participants: [3],
    leaderboard: []
  },
  {
    id: 6,
    title: "Holiday Running Challenge",
    description: "Stay active during the holidays! 365 miles in December.",
    city: "Multiple",
    distance_goal: 365,
    start_date: "2025-12-01",
    end_date: "2025-12-31",
    creator_id: 9,
    creator_name: "Amanda Lee",
    privacy: "public",
    status: "upcoming",
    tournament_type: "Distance Challenge",
    max_participants: 100,
    participants: [],
    leaderboard: []
  },
  {
    id: 7,
    title: "Exclusive Elite Runners",
    description: "Invitation only tournament for advanced runners. Minimum trust score 85.",
    city: "Denver, CO",
    distance_goal: 150,
    start_date: "2025-11-25",
    end_date: "2025-12-10",
    creator_id: 5,
    creator_name: "Lisa Thompson",
    privacy: "private",
    status: "upcoming",
    tournament_type: "Distance Challenge",
    max_participants: 15,
    participants: [1, 5, 8],
    leaderboard: []
  },
  {
    id: 8,
    title: "Women Runners Community",
    description: "For women runners of all levels. Let's support each other!",
    city: "Denver, CO",
    distance_goal: 80,
    start_date: "2025-11-18",
    end_date: "2025-12-02",
    creator_id: 5,
    creator_name: "Lisa Thompson",
    privacy: "public",
    status: "active",
    tournament_type: "Social Challenge",
    max_participants: 35,
    participants: [1, 5, 9],
    leaderboard: [
      { user_id: 5, user_name: "Lisa Thompson", distance_logged: 95, rank: 1 }
    ]
  }
];

// Utility Functions
function generateDistance(userLocation, targetLocation) {
  const distances = {
    'downtown-downtown': 0.5,
    'downtown-park': 2.1,
    'downtown-trail': 3.5,
    'downtown-waterfront': 1.8,
    'park-park': 0.3,
    'park-trail': 2.8,
    'park-waterfront': 3.2,
    'trail-trail': 0.4,
    'trail-waterfront': 4.5,
    'waterfront-waterfront': 0.6
  };
  
  const key1 = `${userLocation}-${targetLocation}`;
  const key2 = `${targetLocation}-${userLocation}`;
  
  return distances[key1] || distances[key2] || 5.0;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

function getUserById(id) {
  return users.find(u => u.id === id);
}

function getAvatarDisplay(user) {
  if (!user.profile_picture) {
    return user.name.split(' ').map(n => n[0]).join('').toUpperCase();
  }
  
  const avatarMap = {
    'default': '👤',
    'runner1': '🏃‍♀️',
    'runner2': '🏃‍♂️',
    'runner3': '🏃',
    'runner4': '🚴‍♀️',
    'runner5': '⚡',
    'runner6': '🎯',
    'runner7': '💪'
  };
  
  if (avatarMap[user.profile_picture]) {
    return avatarMap[user.profile_picture];
  }
  
  return user.profile_picture;
}

function getAvatarStyle(user) {
  const avatarMap = {
    'default': { bg: 'rgba(212, 175, 55, 0.15)', color: '#D4AF37', border: '#D4AF37' },
    'runner1': { bg: 'rgba(212, 175, 55, 0.15)', color: 'transparent', border: '#D4AF37' },
    'runner2': { bg: 'rgba(212, 175, 55, 0.15)', color: 'transparent', border: '#D4AF37' },
    'runner3': { bg: 'rgba(212, 175, 55, 0.15)', color: 'transparent', border: '#D4AF37' },
    'runner4': { bg: 'rgba(212, 175, 55, 0.15)', color: 'transparent', border: '#D4AF37' },
    'runner5': { bg: 'rgba(212, 175, 55, 0.15)', color: 'transparent', border: '#D4AF37' },
    'runner6': { bg: 'rgba(212, 175, 55, 0.15)', color: 'transparent', border: '#D4AF37' },
    'runner7': { bg: 'rgba(212, 175, 55, 0.15)', color: 'transparent', border: '#D4AF37' }
  };
  
  const style = avatarMap[user.profile_picture] || { bg: '#D4AF37', color: '#1A1A1A', border: '#D4AF37' };
  return `background: ${style.bg}; color: ${style.color}; border: 2px solid ${style.border}; box-shadow: 0 2px 4px rgba(212, 175, 55, 0.3);`;
}

function getRunById(id) {
  return runs.find(r => r.id === id);
}

function isConnected(userId) {
  return connections.some(c => 
    (c.user1_id === currentUser.id && c.user2_id === userId) ||
    (c.user2_id === currentUser.id && c.user1_id === userId)
  );
}



function getUserConnections() {
  return connections.filter(c => 
    c.user1_id === currentUser.id || c.user2_id === currentUser.id
  );
}

function getMessagesForConnection(userId) {
  return messages.filter(m => 
    (m.sender_id === currentUser.id && m.receiver_id === userId) ||
    (m.receiver_id === currentUser.id && m.sender_id === userId)
  );
}

// Navigation
function showPage(pageName) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  const page = document.getElementById(`${pageName}-page`);
  if (page) {
    page.classList.add('active');
    
    const activeLink = document.querySelector(`[data-page="${pageName}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
    
    // Render page content
    switch(pageName) {
      case 'dashboard':
        renderDashboard();
        break;
      case 'discover':
        renderDiscoverRunners();
        break;
      case 'upcoming-runs':
        renderUpcomingRuns();
        break;
      case 'my-runs':
        renderMyRuns();
        break;
      case 'messages':
        renderMessages();
        break;
      case 'profile':
        renderProfile();
        break;
      case 'tournaments':
        renderTournaments();
        break;
      case 'tournament-details':
        renderTournamentDetails();
        break;
      case 'create-tournament':
        // Just show the page
        break;
      case 'my-tournaments':
        renderMyTournaments();
        break;
      case 'create-run':
        // Just show the create run page, no additional rendering needed
        break;
      case 'map':
        // Wait for Google Maps API to load before rendering
        if (typeof google !== 'undefined' && google.maps) {
          mapInitialized = true;
        }
        renderMap();
        break;
      case 'friends':
        renderFriends();
        break;
      case 'free-run':
        initializeFreeRun();
        break;
    }
  }
}

// Update Navigation Profile
function updateNavigationProfile() {
  if (currentUser) {
    const navAvatar = document.getElementById('navProfileAvatar');
    const navUserName = document.getElementById('navUserName');
    
    navAvatar.textContent = getAvatarDisplay(currentUser);
    navAvatar.style.cssText = `width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${currentUser.profile_picture && currentUser.profile_picture !== 'default' && currentUser.profile_picture.length <= 3 ? '11px' : '16px'}; background: #D4AF37; color: #1A1A1A; border: 2px solid #D4AF37; box-shadow: 0 2px 4px rgba(212, 175, 55, 0.3);`;
    navUserName.textContent = currentUser.name.split(' ')[0];
  }
}

// Authentication
function handleLogin(e) {
  e.preventDefault();
  
  const loginAlert = document.getElementById('login-alert');
  loginAlert.innerHTML = '';
  
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();
  
  if (!email || !password) {
    loginAlert.innerHTML = '<div class="alert alert--error">❌ Please enter email and password</div>';
    return;
  }
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    currentUser = user;
    document.getElementById('navbar').classList.remove('hidden');
    updateNavigationProfile();
    loginAlert.innerHTML = '<div class="alert alert--success">✓ Login successful!</div>';
    
    setTimeout(() => {
      showPage('dashboard');
    }, 500);
  } else {
    loginAlert.innerHTML = '<div class="alert alert--error">❌ Invalid email or password</div>';
  }
}

function handleSignup(e) {
  e.preventDefault();
  console.log('Signup form submitted');
  
  const signupAlert = document.getElementById('signup-alert');
  signupAlert.innerHTML = '';
  
  // Get and validate all fields
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const age = parseInt(document.getElementById('signup-age').value);
  const fitness_level = document.getElementById('signup-fitness').value;
  const pace = parseFloat(document.getElementById('signup-pace').value);
  const distance_preference = parseInt(document.getElementById('signup-distance').value);
  const location = document.getElementById('signup-location').value;
  const city = document.getElementById('signup-city').value;
  const bio = document.getElementById('signup-bio').value.trim() || 'New runner on RunMeet';
  const profile_picture = document.getElementById('signup-profile-picture').value || 'default';
  
  // Validation
  if (!name || !email || !password) {
    signupAlert.innerHTML = '<div class="alert alert--error" style="margin-bottom: var(--space-16);">❌ Please fill in all required fields</div>';
    return;
  }
  
  if (password.length < 6) {
    signupAlert.innerHTML = '<div class="alert alert--error" style="margin-bottom: var(--space-16);">❌ Password must be at least 6 characters</div>';
    return;
  }
  
  if (!age || age < 13) {
    signupAlert.innerHTML = '<div class="alert alert--error" style="margin-bottom: var(--space-16);">❌ You must be at least 13 years old</div>';
    return;
  }
  
  if (!fitness_level || !pace || !distance_preference || !location || !city) {
    signupAlert.innerHTML = '<div class="alert alert--error" style="margin-bottom: var(--space-16);">❌ Please complete all required fields</div>';
    return;
  }
  
  // Check if email already exists
  if (users.find(u => u.email === email)) {
    signupAlert.innerHTML = '<div class="alert alert--error" style="margin-bottom: var(--space-16);">❌ Email already registered. <a href="#" onclick="showPage(\'login\'); return false;">Login</a></div>';
    return;
  }
  
  // Create new user
  const newUser = {
    id: nextUserId++,
    name,
    email,
    password,
    age,
    fitness_level,
    pace,
    distance_preference,
    location,
    city,
    bio,
    profile_picture,
    running_interests: [],
    running_goals: [],
    years_running: 0,
    favorite_terrain: ''
  };
  
  users.push(newUser);
  currentUser = newUser;
  
  // Initialize friends data for new user
  friendsData[newUser.id] = { friends: [], pending_requests: [], sent_requests: [] };
  
  // Show success and redirect
  signupAlert.innerHTML = '<div class="alert alert--success" style="margin-bottom: var(--space-16);">✓ Account created successfully!</div>';
  
  setTimeout(() => {
    document.getElementById('navbar').classList.remove('hidden');
    updateNavigationProfile();
    showPage('dashboard');
  }, 800);
}



function handleLogout() {
  currentUser = null;
  currentChatUserId = null;
  document.getElementById('navbar').classList.add('hidden');
  showPage('login');
  
  // Reset forms
  document.getElementById('loginForm').reset();
  document.getElementById('signupForm').reset();
}

// Dashboard
function renderDashboard() {
  document.getElementById('dashboard-user-name').textContent = currentUser.name;
  
  // Stats
  const joinedRuns = runs.filter(r => r.participants.includes(currentUser.id)).length;
  const organizedRuns = runs.filter(r => r.organizer_id === currentUser.id).length;
  const connectionsCount = getUserConnections().length;
  
  const myData = getFriendsData(currentUser.id);
  const friendsCount = myData.friends.length;
  
  document.getElementById('runs-joined-count').textContent = joinedRuns;
  document.getElementById('runs-organized-count').textContent = organizedRuns;
  document.getElementById('connections-count').textContent = friendsCount;
  
  // Add tournaments count to dashboard if element exists
  const tournamentsCountEl = document.getElementById('tournaments-count');
  if (tournamentsCountEl) {
    const tournamentsCount = tournaments.filter(t => t.participants.includes(currentUser.id)).length;
    tournamentsCountEl.textContent = tournamentsCount;
  }
  
  // Add tournaments section
  const dashboardTournamentsSection = document.getElementById('dashboard-tournaments-section');
  if (dashboardTournamentsSection) {
    const activeTournaments = tournaments.filter(t => t.status === 'active' && t.participants.includes(currentUser.id));
    const dashboardTournamentsContainer = document.getElementById('dashboard-tournaments');
    if (activeTournaments.length > 0) {
      dashboardTournamentsContainer.innerHTML = activeTournaments.slice(0, 2).map(t => renderTournamentCard(t)).join('');
    } else {
      dashboardTournamentsContainer.innerHTML = '<div class="empty-state"><p>No active tournaments. <a href="#" data-page="tournaments" style="color: var(--color-green-primary); font-weight: var(--font-weight-semibold);">Browse tournaments</a></p></div>';
    }
  }
  
  // Upcoming runs preview
  const dashboardRunsContainer = document.getElementById('dashboard-runs');
  const upcomingRuns = runs.slice(0, 3);
  
  if (upcomingRuns.length === 0) {
    dashboardRunsContainer.innerHTML = '<div class="empty-state"><p>No upcoming runs yet</p></div>';
  } else {
    dashboardRunsContainer.innerHTML = upcomingRuns.map(run => renderRunCard(run)).join('');
  }
  
  // Runner preview
  const dashboardRunnersContainer = document.getElementById('dashboard-runners');
  const nearbyRunners = users.filter(u => u.id !== currentUser.id).slice(0, 3);
  
  dashboardRunnersContainer.innerHTML = nearbyRunners.map(runner => renderRunnerCard(runner)).join('');
}

// Discover Runners
function renderDiscoverRunners() {
  const container = document.getElementById('discover-runners');
  
  // Get filter values
  const fitnessFilter = document.getElementById('filter-fitness').value;
  const paceMin = parseFloat(document.getElementById('filter-pace-min').value) || 0;
  const paceMax = parseFloat(document.getElementById('filter-pace-max').value) || 999;
  const distanceFilter = parseInt(document.getElementById('filter-distance').value) || 0;
  
  // Filter runners
  let filteredRunners = users.filter(u => u.id !== currentUser.id);
  
  if (fitnessFilter) {
    filteredRunners = filteredRunners.filter(u => u.fitness_level === fitnessFilter);
  }
  
  if (paceMin > 0 || paceMax < 999) {
    filteredRunners = filteredRunners.filter(u => u.pace >= paceMin && u.pace <= paceMax);
  }
  
  if (distanceFilter > 0) {
    filteredRunners = filteredRunners.filter(u => 
      Math.abs(u.distance_preference - distanceFilter) <= 2
    );
  }
  
  if (filteredRunners.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No runners found</h3><p>Try adjusting your filters</p></div>';
  } else {
    container.innerHTML = filteredRunners.map(runner => renderRunnerCard(runner)).join('');
  }
}

function renderRunnerCard(runner) {
  const distance = generateDistance(currentUser.location, runner.location);
  const friendStatus = isFriend(runner.id);
  const hasPending = hasPendingRequest(runner.id);
  const hasSent = hasSentRequest(runner.id);
  const avatarDisplay = getAvatarDisplay(runner);
  const avatarStyle = getAvatarStyle(runner);
  const fontSize = runner.profile_picture && runner.profile_picture.length <= 3 ? 'var(--font-size-lg)' : '28px';
  const interests = runner.running_interests || [];
  const interestTags = interests.slice(0, 3).map(i => `<span style="display: inline-block; padding: var(--space-4) var(--space-8); background: rgba(212, 175, 55, 0.15); color: #1A1A1A; border: 2px solid #D4AF37; border-radius: var(--radius-full); font-size: var(--space-xs); margin-right: var(--space-4); margin-bottom: var(--space-4);">${i}</span>`).join('');
  
  let actionButtons = '';
  if (friendStatus) {
    actionButtons = `<button class="btn btn--secondary btn--sm" disabled>Friends ✓</button>
                     <button class="btn btn--green btn--sm" onclick="openChat(${runner.id}); showPage('messages');">Message</button>`;
  } else if (hasPending) {
    actionButtons = `<button class="btn btn--green btn--sm" onclick="acceptFriendRequest(${runner.id}); renderDiscoverRunners();">Accept Request</button>
                     <button class="btn btn--secondary btn--sm" onclick="declineFriendRequest(${runner.id}); renderDiscoverRunners();">Decline</button>`;
  } else if (hasSent) {
    actionButtons = `<button class="btn btn--secondary btn--sm" disabled>Request Sent</button>
                     <button class="btn btn--outline btn--sm" onclick="cancelFriendRequest(${runner.id}); renderDiscoverRunners();">Cancel</button>`;
  } else {
    actionButtons = `<button class="btn btn--green btn--sm" onclick="sendFriendRequest(${runner.id}); renderDiscoverRunners();">Add Friend</button>`;
  }
  
  return `
    <div class="runner-card">
      <div style="display: flex; gap: var(--space-16); margin-bottom: var(--space-16);">
        <div style="width: 64px; height: 64px; border-radius: 50%; ${avatarStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${fontSize}; flex-shrink: 0;">${avatarDisplay}</div>
        <div style="flex: 1;">
          <div class="runner-card-header" style="margin-bottom: 0;">
            <div class="runner-info">
              <h3 style="margin-bottom: var(--space-4);">${runner.name}</h3>
              <div class="runner-meta">
                <span>${runner.age} years old</span>
                <span>•</span>
                <span>${distance} miles away</span>
              </div>
            </div>
            <span class="badge badge--${runner.fitness_level}">${runner.fitness_level}</span>
          </div>
        </div>
      </div>
      <div class="runner-stats">
        <div class="stat-item">
          <span class="label">Pace</span>
          <span class="value">${runner.pace} min/mi</span>
        </div>
        <div class="stat-item">
          <span class="label">Distance</span>
          <span class="value">${runner.distance_preference} mi</span>
        </div>
      </div>
      <div class="runner-bio">${runner.bio}</div>
      ${interests.length > 0 ? `<div style="margin-top: var(--space-12); margin-bottom: var(--space-12);">${interestTags}</div>` : ''}
      <div class="card-actions">
        ${actionButtons}
      </div>
    </div>
  `;
}

function connectWithRunner(userId) {
  if (userId === currentUser.id) return;
  if (isFriend(userId)) {
    alert('You are already friends with this runner!');
    return;
  }
  
  // Send friend request instead of direct connect
  sendFriendRequest(userId);
  renderDiscoverRunners();
}

// Upcoming Runs
function renderUpcomingRuns() {
  const container = document.getElementById('upcoming-runs-list');
  
  // Get filter values
  const paceFilter = parseFloat(document.getElementById('filter-run-pace').value) || 0;
  const distanceFilter = parseInt(document.getElementById('filter-run-distance').value) || 0;
  const difficultyFilter = document.getElementById('filter-run-difficulty').value;
  const dateFilter = document.getElementById('filter-run-date').value;
  
  // Filter runs
  let filteredRuns = [...runs];
  
  if (paceFilter > 0) {
    filteredRuns = filteredRuns.filter(r => Math.abs(r.pace - paceFilter) <= 1);
  }
  
  if (distanceFilter > 0) {
    filteredRuns = filteredRuns.filter(r => r.distance === distanceFilter);
  }
  
  if (difficultyFilter) {
    filteredRuns = filteredRuns.filter(r => r.difficulty === difficultyFilter);
  }
  
  if (dateFilter) {
    filteredRuns = filteredRuns.filter(r => r.date === dateFilter);
  }
  
  if (filteredRuns.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🏃</div><h3>No runs found</h3><p>Try adjusting your filters or create a new run</p></div>';
  } else {
    container.innerHTML = filteredRuns.map(run => renderRunCard(run)).join('');
  }
}

function renderRunCard(run) {
  const organizer = getUserById(run.organizer_id);
  const isOrganizer = run.organizer_id === currentUser.id;
  const hasJoined = run.participants.includes(currentUser.id);
  const isFull = run.participants.length >= run.max_participants;
  
  return `
    <div class="run-card">
      <div class="run-card-header">
        <h3>${run.title}</h3>
        <span class="badge badge--${run.difficulty}">${run.difficulty}</span>
      </div>
      <div class="run-date-time">
        <span>📅 ${formatDate(run.date)}</span>
        <span>🕐 ${formatTime(run.time)}</span>
        <span>📍 ${run.location}</span>
      </div>
      <div class="run-details">
        <div class="stat-item">
          <span class="label">Distance</span>
          <span class="value">${run.distance} mi</span>
        </div>
        <div class="stat-item">
          <span class="label">Pace</span>
          <span class="value">${run.pace} min/mi</span>
        </div>
        <div class="stat-item">
          <span class="label">Organizer</span>
          <span class="value">${organizer.name}</span>
        </div>
      </div>
      <div class="run-description">${run.description}</div>
      <div class="run-footer">
        <span class="participants-count">${run.participants.length}/${run.max_participants} participants</span>
        ${isOrganizer ? 
          `<button class="btn btn--secondary btn--sm" onclick="cancelRun(${run.id})">Cancel Run</button>` :
          hasJoined ?
            `<button class="btn btn--secondary btn--sm" onclick="leaveRun(${run.id})">Leave Run</button>` :
            isFull ?
              `<button class="btn btn--outline btn--sm" disabled>Full</button>` :
              `<button class="btn btn--green btn--sm" onclick="joinRun(${run.id})">Join Run</button>`
        }
      </div>
    </div>
  `;
}

function joinRun(runId) {
  const run = getRunById(runId);
  if (run && !run.participants.includes(currentUser.id) && run.participants.length < run.max_participants) {
    run.participants.push(currentUser.id);
    renderUpcomingRuns();
    // Update map in real-time if on map page
    const activePage = document.querySelector('.page.active');
    if (activePage && activePage.id === 'map-page') {
      renderMap();
    }
  }
}

function leaveRun(runId) {
  const run = getRunById(runId);
  if (run) {
    run.participants = run.participants.filter(id => id !== currentUser.id);
    renderUpcomingRuns();
  }
}

function cancelRun(runId) {
  if (confirm('Are you sure you want to cancel this run?')) {
    const index = runs.findIndex(r => r.id === runId);
    if (index !== -1) {
      runs.splice(index, 1);
      renderUpcomingRuns();
    }
  }
}

// Create Run
function handleCreateRun(e) {
  e.preventDefault();
  
  const newRun = {
    id: nextRunId++,
    title: document.getElementById('run-title').value,
    date: document.getElementById('run-date').value,
    time: document.getElementById('run-time').value,
    distance: parseInt(document.getElementById('run-distance').value),
    pace: parseFloat(document.getElementById('run-pace').value),
    difficulty: document.getElementById('run-difficulty').value,
    location: document.getElementById('run-location').value,
    city: document.getElementById('run-city').value,
    organizer_id: currentUser.id,
    max_participants: parseInt(document.getElementById('run-max-participants').value),
    participants: [],
    description: document.getElementById('run-description').value
  };
  
  runs.push(newRun);
  
  // Real-time update: new run marker appears on map
  console.log('New run created - map will update in real-time');
  
  // Show success message
  const alertDiv = document.getElementById('create-run-alert');
  alertDiv.innerHTML = '<div class="alert alert--success">✓ Run created successfully! Check "My Runs" to manage it.</div>';
  
  // Reset form
  document.getElementById('createRunForm').reset();
  
  // Clear alert after 3 seconds
  setTimeout(() => {
    alertDiv.innerHTML = '';
  }, 3000);
}

// My Runs
function renderMyRuns() {
  const activeTab = document.querySelector('.tab.active[data-tab]');
  const tabName = activeTab ? activeTab.getAttribute('data-tab') : 'joined';
  
  if (tabName === 'completed') {
    renderCompletedRuns();
    return;
  }
  
  const joinedContainer = document.getElementById('joined-runs-list');
  const organizingContainer = document.getElementById('organizing-runs-list');
  
  // Joined runs
  const joinedRuns = runs.filter(r => r.participants.includes(currentUser.id));
  
  if (joinedRuns.length === 0) {
    joinedContainer.innerHTML = '<div class="empty-state"><p>You haven\'t joined any runs yet</p></div>';
  } else {
    joinedContainer.innerHTML = joinedRuns.map(run => renderRunCard(run)).join('');
  }
  
  // Organizing runs
  const organizingRuns = runs.filter(r => r.organizer_id === currentUser.id);
  
  if (organizingRuns.length === 0) {
    organizingContainer.innerHTML = '<div class="empty-state"><p>You haven\'t organized any runs yet</p></div>';
  } else {
    organizingContainer.innerHTML = organizingRuns.map(run => renderRunCard(run)).join('');
  }
}

// Messages
function renderMessages() {
  const container = document.getElementById('connections-list');
  const userConnections = getUserConnections();
  
  if (userConnections.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>No connections yet. Connect with runners to start messaging!</p></div>';
    return;
  }
  
  container.innerHTML = userConnections.map(conn => {
    const otherUserId = conn.user1_id === currentUser.id ? conn.user2_id : conn.user1_id;
    const otherUser = getUserById(otherUserId);
    const connectionMessages = getMessagesForConnection(otherUserId);
    const lastMessage = connectionMessages[connectionMessages.length - 1];
    const avatarDisplay = getAvatarDisplay(otherUser);
    const avatarStyle = getAvatarStyle(otherUser);
    const fontSize = otherUser.profile_picture && otherUser.profile_picture.length <= 3 ? 'var(--font-size-xs)' : '16px';
    
    return `
      <div class="connection-item ${currentChatUserId === otherUserId ? 'active' : ''}" onclick="openChat(${otherUserId})" style="display: flex; align-items: center; gap: var(--space-12);">
        <div style="width: 48px; height: 48px; border-radius: 50%; ${avatarStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${fontSize}; flex-shrink: 0; border: 2px solid var(--color-green-border);">${avatarDisplay}</div>
        <div style="flex: 1; min-width: 0;">
          <h4 style="margin-bottom: var(--space-4);">${otherUser.name}</h4>
          <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${lastMessage ? lastMessage.text : 'Start a conversation'}</p>
        </div>
      </div>
    `;
  }).join('');
  
  // If a chat is active, render it
  if (currentChatUserId) {
    renderChat(currentChatUserId);
  }
}

function openChat(userId) {
  currentChatUserId = userId;
  showPage('messages');
}

function renderChat(userId) {
  const user = getUserById(userId);
  
  document.getElementById('chat-empty').classList.add('hidden');
  document.getElementById('chat-active').classList.remove('hidden');
  
  const avatarDisplay = getAvatarDisplay(user);
  const avatarStyle = getAvatarStyle(user);
  const fontSize = user.profile_picture && user.profile_picture.length <= 3 ? 'var(--font-size-sm)' : '20px';
  
  document.getElementById('chat-user-name').innerHTML = `
    <div style="display: flex; align-items: center; gap: var(--space-12);">
      <div style="width: 40px; height: 40px; border-radius: 50%; ${avatarStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${fontSize}; border: 2px solid var(--color-green-border);">${avatarDisplay}</div>
      <span>${user.name}</span>
    </div>
  `;
  
  const messagesContainer = document.getElementById('chat-messages');
  const chatMessages = getMessagesForConnection(userId);
  
  if (chatMessages.length === 0) {
    messagesContainer.innerHTML = '<div class="empty-state"><p>No messages yet. Start the conversation!</p></div>';
  } else {
    messagesContainer.innerHTML = chatMessages.map(msg => {
      const sender = getUserById(msg.sender_id);
      const senderAvatar = getAvatarDisplay(sender);
      const senderStyle = getAvatarStyle(sender);
      const senderFontSize = sender.profile_picture && sender.profile_picture.length <= 3 ? '10px' : '16px';
      const isSent = msg.sender_id === currentUser.id;
      
      return `
        <div style="display: flex; align-items: flex-end; gap: var(--space-8); ${isSent ? 'flex-direction: row-reverse;' : ''}">
          <div style="width: 28px; height: 28px; border-radius: 50%; ${senderStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${senderFontSize}; flex-shrink: 0;">${senderAvatar}</div>
          <div class="message message--${isSent ? 'sent' : 'received'}">
            ${msg.text}
          </div>
        </div>
      `;
    }).join('');
  }
  
  // Scroll to bottom
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  
  if (text && currentChatUserId) {
    messages.push({
      sender_id: currentUser.id,
      receiver_id: currentChatUserId,
      text: text,
      timestamp: new Date()
    });
    
    input.value = '';
    renderChat(currentChatUserId);
    renderMessages();
  }
}

// Profile
function renderProfile() {
  // Update theme options UI when profile loads
  setTimeout(() => {
    updateThemeOptionsUI();
    loadSafetySettings();
    updateSosContactsSummary();
  }, 100);
  
  document.getElementById('profile-name').textContent = currentUser.name;
  document.getElementById('profile-age').textContent = `${currentUser.age} years old`;
  document.getElementById('profile-location').textContent = currentUser.location;
  
  const fitnessBadge = document.getElementById('profile-fitness');
  fitnessBadge.textContent = currentUser.fitness_level;
  fitnessBadge.className = `badge badge--${currentUser.fitness_level}`;
  
  document.getElementById('profile-bio').textContent = currentUser.bio;
  document.getElementById('profile-pace').textContent = `${currentUser.pace} min/mi`;
  document.getElementById('profile-distance').textContent = `${currentUser.distance_preference} miles`;
  
  // Profile Avatar
  const avatarLarge = document.getElementById('profileAvatarLarge');
  avatarLarge.textContent = getAvatarDisplay(currentUser);
  const fontSize = currentUser.profile_picture && currentUser.profile_picture.length <= 3 ? 'var(--font-size-4xl)' : '48px';
  avatarLarge.style.cssText = `width: 120px; height: 120px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${fontSize}; border: 4px solid #D4AF37; flex-shrink: 0; background: #D4AF37; color: #1A1A1A; box-shadow: 0 4px 8px rgba(212, 175, 55, 0.4);`;
  
  // Running Interests
  const interests = currentUser.running_interests || [];
  const interestsContainer = document.getElementById('profile-interests');
  if (interests.length > 0) {
    interestsContainer.innerHTML = `<div><strong style="color: #1A1A1A; margin-bottom: var(--space-8); display: block; font-size: var(--font-size-sm);">Running Interests:</strong><div>${interests.map(i => `<span style="display: inline-block; padding: var(--space-6) var(--space-12); background: rgba(212, 175, 55, 0.15); color: #1A1A1A; border: 2px solid #D4AF37; border-radius: var(--radius-full); font-size: var(--font-size-sm); font-weight: var(--font-weight-medium); margin-right: var(--space-8); margin-bottom: var(--space-8);">${i}</span>`).join('')}</div></div>`;
  } else {
    interestsContainer.innerHTML = '';
  }
  
  // Running Goals
  const goals = currentUser.running_goals || [];
  const goalsContainer = document.getElementById('profile-goals');
  if (goals.length > 0) {
    goalsContainer.innerHTML = `<div><strong style="color: #1A1A1A; margin-bottom: var(--space-8); display: block; font-size: var(--font-size-sm);">Running Goals:</strong><div>${goals.map(g => `<span style="display: inline-block; padding: var(--space-6) var(--space-12); background: rgba(156, 175, 136, 0.15); color: #1A1A1A; border: 2px solid #9CAF88; border-radius: var(--radius-base); font-size: var(--font-size-sm); margin-right: var(--space-8); margin-bottom: var(--space-8);">🎯 ${g}</span>`).join('')}</div></div>`;
  } else {
    goalsContainer.innerHTML = '';
  }
  
  // Years Running and Terrain
  const yearsRunning = currentUser.years_running || 0;
  const terrain = currentUser.favorite_terrain || 'Not specified';
  document.getElementById('profile-years-running').textContent = `${yearsRunning} ${yearsRunning === 1 ? 'year' : 'years'} running`;
  document.getElementById('profile-favorite-terrain').textContent = `Favorite: ${terrain}`;
  
  // Stats
  const joinedRuns = runs.filter(r => r.participants.includes(currentUser.id)).length;
  const organizedRuns = runs.filter(r => r.organizer_id === currentUser.id).length;
  const connectionsCount = getUserConnections().length;
  const tournamentsCount = tournaments.filter(t => t.participants.includes(currentUser.id)).length;
  
  const myFriendsData = getFriendsData(currentUser.id);
  const myFriendsCount = myFriendsData.friends.length;
  
  document.getElementById('profile-runs-joined').textContent = joinedRuns;
  document.getElementById('profile-runs-organized').textContent = organizedRuns;
  document.getElementById('profile-connections').textContent = myFriendsCount;
  
  // Update tournaments stat if element exists
  const profileTournamentsEl = document.getElementById('profile-tournaments');
  if (profileTournamentsEl) {
    profileTournamentsEl.textContent = tournamentsCount;
  }
  
  // Trust Score (based on activity)
  const trustScore = Math.min(100, (joinedRuns * 10) + (organizedRuns * 15) + (connectionsCount * 5));
  document.getElementById('trust-score-value').textContent = trustScore;
  
  // Hide edit forms
  document.getElementById('edit-profile-form').classList.add('hidden');
  document.getElementById('edit-stats-form').classList.add('hidden');
}



function showEditProfile() {
  document.getElementById('edit-profile-form').classList.remove('hidden');
  
  // Populate form
  document.getElementById('edit-bio').value = currentUser.bio;
  document.getElementById('edit-pace').value = currentUser.pace;
  document.getElementById('edit-distance').value = currentUser.distance_preference;
  document.getElementById('edit-fitness').value = currentUser.fitness_level;
  document.getElementById('edit-profile-picture').value = currentUser.profile_picture || 'default';
  document.getElementById('edit-years-running').value = currentUser.years_running || 0;
  document.getElementById('edit-favorite-terrain').value = currentUser.favorite_terrain || '';
  
  // Select current avatar
  document.querySelectorAll('.profile-avatar-option-edit').forEach(opt => {
    opt.style.borderColor = opt.getAttribute('data-initials') === currentUser.profile_picture ? 'var(--color-green-primary)' : 'transparent';
    opt.style.borderWidth = '3px';
  });
  
  // Check current interests
  const interests = currentUser.running_interests || [];
  document.querySelectorAll('.interest-checkbox').forEach(cb => {
    cb.checked = interests.includes(cb.value);
  });
  
  // Check current goals
  const goals = currentUser.running_goals || [];
  document.querySelectorAll('.goal-checkbox').forEach(cb => {
    cb.checked = goals.includes(cb.value);
  });
}

function handleEditProfile(e) {
  e.preventDefault();
  
  currentUser.bio = document.getElementById('edit-bio').value;
  currentUser.pace = parseFloat(document.getElementById('edit-pace').value);
  currentUser.distance_preference = parseInt(document.getElementById('edit-distance').value);
  currentUser.fitness_level = document.getElementById('edit-fitness').value;
  currentUser.profile_picture = document.getElementById('edit-profile-picture').value;
  currentUser.years_running = parseInt(document.getElementById('edit-years-running').value) || 0;
  currentUser.favorite_terrain = document.getElementById('edit-favorite-terrain').value;
  
  // Get selected interests
  const interests = [];
  document.querySelectorAll('.interest-checkbox:checked').forEach(cb => {
    interests.push(cb.value);
  });
  currentUser.running_interests = interests;
  
  // Get selected goals
  const goals = [];
  document.querySelectorAll('.goal-checkbox:checked').forEach(cb => {
    goals.push(cb.value);
  });
  currentUser.running_goals = goals;
  
  // Update in users array
  const userIndex = users.findIndex(u => u.id === currentUser.id);
  if (userIndex !== -1) {
    users[userIndex] = currentUser;
  }
  
  // Update navigation
  updateNavigationProfile();
  
  // Show success message
  const alertDiv = document.getElementById('edit-profile-alert');
  alertDiv.innerHTML = '<div class="alert alert--success">✓ Profile updated successfully!</div>';
  
  setTimeout(() => {
    alertDiv.innerHTML = '';
    renderProfile();
  }, 2000);
}

function cancelEdit() {
  document.getElementById('edit-profile-form').classList.add('hidden');
}

// Theme Functions
function initializeTheme() {
  // Load saved theme preference (using in-memory variable, not localStorage)
  // Default to light theme
  currentTheme = 'light';
  applyTheme(currentTheme);
}

function applyTheme(theme) {
  currentTheme = theme;
  
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
  
  // Update theme option highlights
  updateThemeOptionsUI();
}

function updateThemeOptionsUI() {
  const lightOption = document.getElementById('light-theme-option');
  const darkOption = document.getElementById('dark-theme-option');
  
  if (!lightOption || !darkOption) return;
  
  if (currentTheme === 'light') {
    lightOption.style.borderWidth = '4px';
    lightOption.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.3)';
    darkOption.style.borderWidth = '3px';
    darkOption.style.boxShadow = 'none';
  } else {
    darkOption.style.borderWidth = '4px';
    darkOption.style.boxShadow = '0 0 0 4px rgba(212, 175, 55, 0.3)';
    lightOption.style.borderWidth = '3px';
    lightOption.style.boxShadow = 'none';
  }
}

function switchTheme(theme) {
  if (theme === currentTheme) return;
  
  applyTheme(theme);
  
  // Show confirmation
  const themeName = theme === 'light' ? 'Light Theme' : 'Dark Theme';
  console.log(`✅ Switched to ${themeName}`);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme on page load
  initializeTheme();
  // Profile picture selection in signup
  document.querySelectorAll('.profile-avatar-option').forEach(option => {
    option.addEventListener('click', function() {
      document.querySelectorAll('.profile-avatar-option').forEach(opt => {
        opt.style.borderColor = 'transparent';
      });
      this.style.borderColor = 'var(--color-green-primary)';
      this.style.borderWidth = '3px';
      document.getElementById('signup-profile-picture').value = this.getAttribute('data-initials');
    });
  });
  
  // Profile picture selection in edit form
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('profile-avatar-option-edit')) {
      document.querySelectorAll('.profile-avatar-option-edit').forEach(opt => {
        opt.style.borderColor = 'transparent';
      });
      e.target.style.borderColor = 'var(--color-green-primary)';
      e.target.style.borderWidth = '3px';
      document.getElementById('edit-profile-picture').value = e.target.getAttribute('data-initials');
    }
  });
  
  // User profile nav click
  document.getElementById('userProfileNav').addEventListener('click', function(e) {
    e.preventDefault();
    showPage('profile');
  });
  
  // Auth
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('signupForm').addEventListener('submit', handleSignup);
  document.getElementById('showSignupLink').addEventListener('click', () => showPage('signup'));
  document.getElementById('showLoginLink').addEventListener('click', () => showPage('login'));
  document.getElementById('logoutBtn').addEventListener('click', handleLogout);
  
  // Navigation
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showPage(link.getAttribute('data-page'));
    });
  });
  
  // Filters
  document.getElementById('filter-fitness').addEventListener('change', renderDiscoverRunners);
  document.getElementById('filter-pace-min').addEventListener('input', renderDiscoverRunners);
  document.getElementById('filter-pace-max').addEventListener('input', renderDiscoverRunners);
  document.getElementById('filter-distance').addEventListener('input', renderDiscoverRunners);
  
  document.getElementById('filter-run-pace').addEventListener('input', renderUpcomingRuns);
  document.getElementById('filter-run-distance').addEventListener('input', renderUpcomingRuns);
  document.getElementById('filter-run-difficulty').addEventListener('change', renderUpcomingRuns);
  document.getElementById('filter-run-date').addEventListener('change', renderUpcomingRuns);
  
  // Create Run
  document.getElementById('createRunForm').addEventListener('submit', handleCreateRun);
  
  // Tabs for My Runs
  document.querySelectorAll('.tab[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const parent = tab.closest('.tabs');
      parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      const tabName = tab.getAttribute('data-tab');
      const content = document.getElementById(`${tabName}-runs`);
      if (content) content.classList.add('active');
    });
  });
  

  
  // Messages
  document.getElementById('send-message-btn').addEventListener('click', sendMessage);
  document.getElementById('chat-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // Profile
  document.getElementById('edit-profile-btn').addEventListener('click', showEditProfile);
  document.getElementById('editProfileForm').addEventListener('submit', handleEditProfile);
  document.getElementById('cancel-edit-btn').addEventListener('click', cancelEdit);
  
  // Tournaments
  document.getElementById('createTournamentForm').addEventListener('submit', handleCreateTournament);
  document.getElementById('filter-tournament-city').addEventListener('change', () => renderTournaments());
  document.getElementById('filter-tournament-sort').addEventListener('change', () => renderTournaments());
  
  // Map filters - add real-time updates
  document.getElementById('map-show-runners').addEventListener('change', () => {
    renderMap();
  });
  document.getElementById('map-show-runs').addEventListener('change', () => {
    renderMap();
  });
  document.getElementById('map-show-tournaments').addEventListener('change', () => {
    renderMap();
  });
  document.getElementById('map-city-filter').addEventListener('change', () => {
    const selectedCity = document.getElementById('map-city-filter').value;
    if (selectedCity && googleMap && cityCoordinates[selectedCity]) {
      const coords = cityCoordinates[selectedCity];
      googleMap.panTo({ lat: coords.lat, lng: coords.lng });
      googleMap.setZoom(12);
    }
    renderMap();
  });
  document.getElementById('map-distance-filter').addEventListener('change', renderMap);
  document.getElementById('map-search').addEventListener('input', renderMap);
  document.getElementById('map-show-gps-routes').addEventListener('change', renderMap);
  
  // Friends filters
  document.getElementById('friend-search').addEventListener('input', renderFindFriends);
  document.getElementById('friend-city-filter').addEventListener('change', renderFindFriends);
  document.getElementById('friend-fitness-filter').addEventListener('change', renderFindFriends);
  
  // Free Run controls
  document.getElementById('start-run-btn').addEventListener('click', startFreeRun);
  document.getElementById('pause-run-btn').addEventListener('click', pauseFreeRun);
  document.getElementById('resume-run-btn').addEventListener('click', resumeFreeRun);
  document.getElementById('end-run-btn').addEventListener('click', endFreeRun);
  document.getElementById('discard-run-btn').addEventListener('click', discardFreeRun);
  document.getElementById('save-run-btn').addEventListener('click', saveFreeRun);
  document.getElementById('discard-summary-btn').addEventListener('click', discardRunSummary);
  
  // Theme switching
  document.addEventListener('click', function(e) {
    if (e.target.closest('.theme-option')) {
      const themeOption = e.target.closest('.theme-option');
      const selectedTheme = themeOption.getAttribute('data-theme');
      switchTheme(selectedTheme);
    }
  });
  
  // Safety settings toggle handlers
  const notifyToggle = document.getElementById('safety-notify-friends');
  const liveTrackingToggle = document.getElementById('safety-live-tracking');
  if (notifyToggle) {
    notifyToggle.addEventListener('change', function() {
      safetySettings.notifyFriendsWhenRunning = this.checked;
    });
  }
  if (liveTrackingToggle) {
    liveTrackingToggle.addEventListener('change', function() {
      safetySettings.allowLiveTracking = this.checked;
    });
  }
  
  // Handle dynamic tournament tab switching
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('tab') && e.target.hasAttribute('data-tab')) {
      const tabName = e.target.getAttribute('data-tab');
      if (tabName.includes('tournament')) {
        const parent = e.target.closest('.tabs');
        parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        e.target.classList.add('active');
        const content = document.getElementById(tabName);
        if (content) {
          content.classList.add('active');
          renderTournaments();
        }
      }
      // Handle My Runs tab switching
      if (tabName === 'joined' || tabName === 'organizing' || tabName === 'completed') {
        const parent = e.target.closest('.tabs');
        parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        e.target.classList.add('active');
        const content = document.getElementById(`${tabName}-runs`);
        if (content) {
          content.classList.add('active');
          renderMyRuns();
        }
      }
      // Handle friends tab switching
      if (tabName.includes('friend') || tabName === 'all-friends' || tabName === 'pending-requests' || tabName === 'sent-requests' || tabName === 'find-friends') {
        const parent = e.target.closest('.tabs');
        parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        e.target.classList.add('active');
        const content = document.getElementById(tabName);
        if (content) {
          content.classList.add('active');
          renderFriends();
        }
      }
    }
  });
  
  // Re-attach navigation for dynamically created tournament links
  document.addEventListener('click', function(e) {
    if (e.target.hasAttribute('data-page')) {
      e.preventDefault();
      showPage(e.target.getAttribute('data-page'));
    }
  });
});

// Tournament Functions
function renderTournaments() {
  const activeTab = document.querySelector('.tab.active[data-tab*="tournament"]');
  if (!activeTab) return;
  
  const tabName = activeTab.getAttribute('data-tab');
  
  if (tabName === 'global-tournaments') {
    renderGlobalTournaments();
  } else if (tabName === 'friends-tournaments') {
    renderFriendsTournaments();
  } else if (tabName === 'private-tournaments') {
    renderPrivateTournaments();
  }
}

function renderGlobalTournaments() {
  const container = document.getElementById('global-tournaments-list');
  const cityFilter = document.getElementById('filter-tournament-city').value;
  const sortFilter = document.getElementById('filter-tournament-sort').value;
  
  let filteredTournaments = tournaments.filter(t => t.privacy === 'public');
  
  if (cityFilter) {
    filteredTournaments = filteredTournaments.filter(t => t.city === cityFilter);
  }
  
  // Sort tournaments
  if (sortFilter === 'newest') {
    filteredTournaments.sort((a, b) => b.id - a.id);
  } else if (sortFilter === 'popular') {
    filteredTournaments.sort((a, b) => b.participants.length - a.participants.length);
  } else if (sortFilter === 'ending') {
    filteredTournaments.sort((a, b) => new Date(a.end_date) - new Date(b.end_date));
  }
  
  if (filteredTournaments.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🏆</div><h3>No tournaments found</h3><p>Try adjusting your filters or create a new tournament</p></div>';
  } else {
    container.innerHTML = filteredTournaments.map(t => renderTournamentCard(t)).join('');
  }
}

function renderFriendsTournaments() {
  const container = document.getElementById('friends-tournaments-list');
  const friendTournaments = tournaments.filter(t => t.privacy === 'friends');
  
  if (friendTournaments.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">👥</div><h3>No friends tournaments</h3><p>Create a friends-only tournament to train with your running buddies</p></div>';
  } else {
    container.innerHTML = friendTournaments.map(t => renderTournamentCard(t)).join('');
  }
}

function renderPrivateTournaments() {
  const container = document.getElementById('private-tournaments-list');
  const privateTournaments = tournaments.filter(t => 
    t.privacy === 'private' && t.participants.includes(currentUser.id)
  );
  
  if (privateTournaments.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔒</div><h3>No private tournaments</h3><p>You haven\'t been invited to any private tournaments yet</p></div>';
  } else {
    container.innerHTML = privateTournaments.map(t => renderTournamentCard(t)).join('');
  }
}

function renderTournamentCard(tournament) {
  const creator = getUserById(tournament.creator_id);
  const isParticipating = tournament.participants.includes(currentUser.id);
  const isFull = tournament.participants.length >= tournament.max_participants;
  const isCreator = tournament.creator_id === currentUser.id;
  const statusColor = tournament.status === 'active' ? 'var(--color-green-primary)' : tournament.status === 'upcoming' ? 'var(--color-warning)' : 'var(--color-text-secondary)';
  const creatorAvatar = getAvatarDisplay(creator);
  const creatorStyle = getAvatarStyle(creator);
  const creatorFontSize = creator.profile_picture && creator.profile_picture.length <= 3 ? '12px' : '18px';
  
  return `
    <div class="tournament-card" onclick="viewTournament(${tournament.id})" style="cursor: pointer;">
      <div class="tournament-header">
        <div>
          <h3 style="margin-bottom: var(--space-8);">${tournament.title}</h3>
          <div style="display: flex; align-items: center; gap: var(--space-12); margin-bottom: var(--space-8);">
            <div style="width: 32px; height: 32px; border-radius: 50%; ${creatorStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${creatorFontSize}; border: 2px solid var(--color-green-border);">${creatorAvatar}</div>
            <span style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">by ${tournament.creator_name}</span>
          </div>
        </div>
        <span class="badge" style="background: rgba(${statusColor === 'var(--color-green-primary)' ? '34, 197, 94' : statusColor === 'var(--color-warning)' ? '245, 158, 11' : '119, 124, 124'}, 0.15); color: ${statusColor}; border: 1px solid ${statusColor}; text-transform: uppercase;">${tournament.status}</span>
      </div>
      
      <div class="tournament-meta">
        <span style="display: inline-flex; align-items: center; gap: var(--space-4); padding: var(--space-4) var(--space-10); background: #FFFFFF; color: var(--color-green-primary); border: 2px solid var(--color-green-primary); border-radius: var(--radius-full); font-size: var(--font-size-xs); font-weight: var(--font-weight-medium);">📍 ${tournament.city}</span>
        <span>🎯 ${tournament.distance_goal} miles</span>
        <span>👥 ${tournament.participants.length}/${tournament.max_participants}</span>
      </div>
      
      <div style="padding: var(--space-12); background: #FFFFFF; border-radius: var(--radius-base); margin-bottom: var(--space-12); border: 2px solid var(--color-green-primary);">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-8);">
          <span style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Type:</span>
          <span style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">${tournament.tournament_type}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Duration:</span>
          <span style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">${formatDate(tournament.start_date)} - ${formatDate(tournament.end_date)}</span>
        </div>
      </div>
      
      <div class="run-description" style="margin-bottom: var(--space-16);">${tournament.description}</div>
      
      ${tournament.leaderboard.length > 0 ? `
        <div class="leaderboard" style="margin-bottom: var(--space-16);">
          <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: var(--color-text);">🏆 Leaderboard Preview</div>
          ${tournament.leaderboard.slice(0, 3).map(entry => `
            <div class="leaderboard-item">
              <div style="display: flex; align-items: center; gap: var(--space-8);">
                <span class="leaderboard-rank">#${entry.rank}</span>
                <span style="font-size: var(--font-size-sm);">${entry.user_name}</span>
              </div>
              <span style="font-weight: var(--font-weight-semibold); color: var(--color-green-primary);">${entry.distance_logged} mi</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      <div class="card-actions" onclick="event.stopPropagation();">
        ${isCreator ? 
          `<button class="btn btn--secondary btn--sm" disabled>Your Tournament</button>` :
          isParticipating ?
            `<button class="btn btn--secondary btn--sm" onclick="leaveTournament(${tournament.id})">Leave</button>
             <button class="btn btn--green btn--sm" onclick="viewTournament(${tournament.id})">View Leaderboard</button>` :
            isFull ?
              `<button class="btn btn--outline btn--sm" disabled>Full</button>` :
              `<button class="btn btn--green btn--sm" onclick="joinTournament(${tournament.id})">Join Tournament</button>`
        }
      </div>
    </div>
  `;
}

function viewTournament(tournamentId) {
  currentTournamentId = tournamentId;
  showPage('tournament-details');
}

function renderTournamentDetails() {
  const tournament = tournaments.find(t => t.id === currentTournamentId);
  if (!tournament) return;
  
  const creator = getUserById(tournament.creator_id);
  const isParticipating = tournament.participants.includes(currentUser.id);
  const isFull = tournament.participants.length >= tournament.max_participants;
  const isCreator = tournament.creator_id === currentUser.id;
  const creatorAvatar = getAvatarDisplay(creator);
  const creatorStyle = getAvatarStyle(creator);
  const creatorFontSize = creator.profile_picture && creator.profile_picture.length <= 3 ? 'var(--font-size-lg)' : '28px';
  
  const container = document.getElementById('tournament-details-content');
  container.innerHTML = `
    <div style="max-width: 900px; margin: 0 auto;">
      <div class="tournament-card" style="margin-bottom: var(--space-24);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-24);">
          <div style="flex: 1;">
            <h1 style="font-size: var(--font-size-3xl); margin-bottom: var(--space-16); color: var(--color-green-primary);">${tournament.title}</h1>
            <div style="display: flex; align-items: center; gap: var(--space-16); margin-bottom: var(--space-16);">
              <div style="width: 56px; height: 56px; border-radius: 50%; ${creatorStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${creatorFontSize}; border: 3px solid var(--color-green-border);">${creatorAvatar}</div>
              <div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Organized by</div>
                <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-semibold);">${creator.name}</div>
              </div>
            </div>
          </div>
          <span class="badge" style="background: rgba(${tournament.status === 'active' ? '34, 197, 94' : tournament.status === 'upcoming' ? '245, 158, 11' : '119, 124, 124'}, 0.15); color: ${tournament.status === 'active' ? 'var(--color-green-primary)' : tournament.status === 'upcoming' ? 'var(--color-warning)' : 'var(--color-text-secondary)'}; border: 1px solid; text-transform: uppercase; font-size: var(--font-size-base); padding: var(--space-8) var(--space-16);">${tournament.status}</span>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-16); padding: var(--space-20); background: #FFFFFF; border-radius: var(--radius-base); margin-bottom: var(--space-24); border: 2px solid var(--color-green-primary);">
          <div class="stat-item">
            <span class="label">City</span>
            <span class="value" style="font-size: var(--font-size-lg);">📍 ${tournament.city}</span>
          </div>
          <div class="stat-item">
            <span class="label">Distance Goal</span>
            <span class="value" style="font-size: var(--font-size-lg);">🎯 ${tournament.distance_goal} mi</span>
          </div>
          <div class="stat-item">
            <span class="label">Participants</span>
            <span class="value" style="font-size: var(--font-size-lg);">👥 ${tournament.participants.length}/${tournament.max_participants}</span>
          </div>
          <div class="stat-item">
            <span class="label">Type</span>
            <span class="value" style="font-size: var(--font-size-lg);">${tournament.tournament_type}</span>
          </div>
        </div>
        
        <div style="padding: var(--space-16); background: #FFFFFF; border: 2px solid var(--color-green-primary); border-radius: var(--radius-base); margin-bottom: var(--space-24);">
          <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: var(--color-text); font-size: var(--font-size-base);">📅 Duration</div>
          <div style="font-size: var(--font-size-lg);"><strong>Start:</strong> ${formatDate(tournament.start_date)}</div>
          <div style="font-size: var(--font-size-lg);"><strong>End:</strong> ${formatDate(tournament.end_date)}</div>
        </div>
        
        <div style="margin-bottom: var(--space-24);">
          <h3 style="margin-bottom: var(--space-12); color: var(--color-text);">Description</h3>
          <p style="line-height: 1.8; color: var(--color-text);">${tournament.description}</p>
        </div>
        
        <div class="card-actions" style="margin-bottom: var(--space-32);">
          ${isCreator ? 
            `<button class="btn btn--secondary" disabled>Your Tournament</button>
             <button class="btn btn--green" onclick="showPage('my-tournaments')">Manage Tournament</button>` :
            isParticipating ?
              `<button class="btn btn--secondary" onclick="leaveTournament(${tournament.id}); showPage('tournaments');">Leave Tournament</button>` :
              isFull ?
                `<button class="btn btn--outline" disabled>Tournament Full</button>` :
                `<button class="btn btn--green" onclick="joinTournament(${tournament.id}); renderTournamentDetails();">Join Tournament</button>`
          }
        </div>
      </div>
      
      <div class="tournament-card">
        <h2 style="margin-bottom: var(--space-20); color: var(--color-green-primary);">🏆 Leaderboard</h2>
        ${tournament.leaderboard.length > 0 ? `
          <div class="leaderboard">
            ${tournament.leaderboard.map(entry => {
              const user = getUserById(entry.user_id);
              const userAvatar = getAvatarDisplay(user);
              const userStyle = getAvatarStyle(user);
              const userFontSize = user.profile_picture && user.profile_picture.length <= 3 ? '12px' : '18px';
              const percentage = Math.round((entry.distance_logged / tournament.distance_goal) * 100);
              const performanceColor = percentage >= 100 ? 'var(--color-green-primary)' : percentage >= 75 ? 'var(--color-warning)' : 'var(--color-text-secondary)';
              
              return `
                <div class="leaderboard-item" style="padding: var(--space-16); ${entry.rank <= 3 ? 'background: #FFFFFF; border: 3px solid var(--color-green-primary);' : 'background: #FFFFFF;'}">
                  <div style="display: flex; align-items: center; gap: var(--space-12);">
                    <span class="leaderboard-rank" style="font-size: var(--font-size-xl); min-width: 40px;">${entry.rank <= 3 ? (entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉') : '#' + entry.rank}</span>
                    <div style="width: 40px; height: 40px; border-radius: 50%; ${userStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${userFontSize}; border: 2px solid var(--color-green-border);">${userAvatar}</div>
                    <div style="flex: 1;">
                      <div style="font-weight: var(--font-weight-semibold); font-size: var(--font-size-base);">${entry.user_name}</div>
                      <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">${percentage}% complete</div>
                    </div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-weight: var(--font-weight-bold); color: ${performanceColor}; font-size: var(--font-size-xl);">${entry.distance_logged} mi</div>
                    <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">of ${tournament.distance_goal} mi</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : `
          <div class="empty-state">
            <div class="empty-state-icon">🏃</div>
            <h3>No activity yet</h3>
            <p>Be the first to log your distance!</p>
          </div>
        `}
      </div>
      
      <div class="tournament-card" style="margin-top: var(--space-24);">
        <h2 style="margin-bottom: var(--space-20); color: var(--color-green-primary);">👥 Participants (${tournament.participants.length})</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: var(--space-16);">
          ${tournament.participants.map(participantId => {
            const participant = getUserById(participantId);
            const participantAvatar = getAvatarDisplay(participant);
            const participantStyle = getAvatarStyle(participant);
            const participantFontSize = participant.profile_picture && participant.profile_picture.length <= 3 ? 'var(--font-size-lg)' : '28px';
            
            return `
              <div style="text-align: center; padding: var(--space-12); background: #FFFFFF; border-radius: var(--radius-base); border: 2px solid var(--color-green-primary);">
                <div style="width: 56px; height: 56px; border-radius: 50%; ${participantStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${participantFontSize}; margin: 0 auto var(--space-8); border: 2px solid var(--color-green-border);">${participantAvatar}</div>
                <div style="font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">${participant.name}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function joinTournament(tournamentId) {
  const tournament = tournaments.find(t => t.id === tournamentId);
  if (tournament && !tournament.participants.includes(currentUser.id) && tournament.participants.length < tournament.max_participants) {
    tournament.participants.push(currentUser.id);
    
    // Update map in real-time if on map page
    const activePage = document.querySelector('.page.active');
    if (activePage && activePage.id === 'map-page') {
      renderMap();
    }
    
    // Add to leaderboard if active
    if (tournament.status === 'active' && !tournament.leaderboard.find(l => l.user_id === currentUser.id)) {
      const randomDistance = Math.floor(Math.random() * 30) + 10;
      tournament.leaderboard.push({
        user_id: currentUser.id,
        user_name: currentUser.name,
        distance_logged: randomDistance,
        rank: tournament.leaderboard.length + 1
      });
      // Re-sort leaderboard
      tournament.leaderboard.sort((a, b) => b.distance_logged - a.distance_logged);
      tournament.leaderboard.forEach((entry, index) => entry.rank = index + 1);
    }
    
    alert('Successfully joined tournament!');
    renderTournaments();
  }
}

function leaveTournament(tournamentId) {
  const tournament = tournaments.find(t => t.id === tournamentId);
  if (tournament) {
    tournament.participants = tournament.participants.filter(id => id !== currentUser.id);
    tournament.leaderboard = tournament.leaderboard.filter(l => l.user_id !== currentUser.id);
    // Re-rank
    tournament.leaderboard.forEach((entry, index) => entry.rank = index + 1);
    alert('Left tournament');
    renderTournaments();
  }
}

function handleCreateTournament(e) {
  e.preventDefault();
  
  const newTournament = {
    id: nextTournamentId++,
    title: document.getElementById('tournament-title').value,
    description: document.getElementById('tournament-description').value,
    city: document.getElementById('tournament-city').value,
    distance_goal: parseInt(document.getElementById('tournament-distance').value),
    start_date: document.getElementById('tournament-start').value,
    end_date: document.getElementById('tournament-end').value,
    creator_id: currentUser.id,
    creator_name: currentUser.name,
    privacy: document.getElementById('tournament-privacy').value,
    status: new Date(document.getElementById('tournament-start').value) > new Date() ? 'upcoming' : 'active',
    tournament_type: document.getElementById('tournament-type').value,
    max_participants: parseInt(document.getElementById('tournament-max').value),
    participants: [currentUser.id],
    leaderboard: []
  };
  
  tournaments.push(newTournament);
  
  // Real-time update: new tournament marker appears on map
  console.log('New tournament created - map will update in real-time');
  
  const alertDiv = document.getElementById('create-tournament-alert');
  alertDiv.innerHTML = '<div class="alert alert--success">✓ Tournament created successfully! View it in "My Tournaments".</div>';
  
  document.getElementById('createTournamentForm').reset();
  
  setTimeout(() => {
    alertDiv.innerHTML = '';
    showPage('my-tournaments');
  }, 2000);
}

function renderMyTournaments() {
  const participatingContainer = document.getElementById('participating-tournaments-list');
  const organizingContainer = document.getElementById('organizing-tournaments-list');
  
  // Participating tournaments
  const participatingTournaments = tournaments.filter(t => t.participants.includes(currentUser.id) && t.creator_id !== currentUser.id);
  
  if (participatingTournaments.length === 0) {
    participatingContainer.innerHTML = '<div class="empty-state"><p>You haven\'t joined any tournaments yet</p></div>';
  } else {
    participatingContainer.innerHTML = participatingTournaments.map(t => renderTournamentCard(t)).join('');
  }
  
  // Organizing tournaments
  const organizingTournaments = tournaments.filter(t => t.creator_id === currentUser.id);
  
  if (organizingTournaments.length === 0) {
    organizingContainer.innerHTML = '<div class="empty-state"><p>You haven\'t created any tournaments yet</p></div>';
  } else {
    organizingContainer.innerHTML = organizingTournaments.map(t => renderTournamentCard(t)).join('');
  }
}

// Automated Map Initialization for BOTH Maps Tab and Free Run
function initMap() {
  // This function is called automatically when Google Maps API loads
  mapInitialized = true;
  window.mapInitialized = true;
  console.log('✅ Google Maps API initialized successfully');
  console.log('🗺️ Interactive maps ready with satellite view');
  console.log('📍 Real-time tracking: runners, runs, tournaments, GPS routes');
  console.log('🏃 Free Run GPS tracking fully enabled');
  console.log('🛰️ API Key: Integrated and automated for all users');
  
  // Initialize map if on map page
  const activePage = document.querySelector('.page.active');
  if (activePage && activePage.id === 'map-page') {
    setTimeout(() => renderMap(), 200);
  } else if (activePage && activePage.id === 'free-run-page') {
    setTimeout(() => initializeFreeRunMap(), 200);
  }
}

// Initialize Free Run Google Map
function initializeFreeRunMap() {
  console.log('🗺️ Initializing Free Run map with Google Maps API...');
  console.log('🛰️ Using integrated API key for GPS tracking');
  
  // Check if Google Maps API is available
  if (typeof google !== 'undefined' && google.maps && !freeRunState.isDemoMode) {
    try {
      const mapContainer = document.getElementById('free-run-google-map');
      if (!mapContainer) return;
      
      // Get user's city coordinates for initial center
      const userCity = currentUser?.city || 'Denver, CO';
      const center = cityCoordinates[userCity] || cityCoordinates['Denver, CO'];
      
      freeRunGoogleMap = new google.maps.Map(mapContainer, {
        center: { lat: center.lat, lng: center.lng },
        zoom: 15,
        mapTypeId: 'roadmap',
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true
      });
      
      console.log('✅ Free Run Google Map initialized with API key');
      console.log('📍 GPS tracking ready - real coordinates will be plotted');
      
      // Hide canvas, show Google Map
      const canvas = document.getElementById('route-canvas');
      if (canvas) canvas.style.display = 'none';
      
    } catch (error) {
      console.error('⚠️ Error initializing Google Maps for Free Run:', error);
      console.log('📊 Falling back to canvas visualization');
      useFreeRunCanvasFallback();
    }
  } else {
    console.log('⏳ Google Maps API not loaded yet for Free Run');
    console.log('📊 Using canvas visualization as fallback');
    useFreeRunCanvasFallback();
  }
}

function useFreeRunCanvasFallback() {
  const canvas = document.getElementById('route-canvas');
  const mapContainer = document.getElementById('free-run-google-map');
  if (canvas && mapContainer) {
    canvas.style.display = 'block';
    mapContainer.style.display = 'none';
  }
}

// Map Functions
function renderMap() {
  if (!mapInitialized) {
    console.log('⏳ Initializing map system...');
    // Show loading indicator
    const mapContainer = document.getElementById('google-map');
    if (mapContainer && !mapContainer.querySelector('.map-loading')) {
      mapContainer.innerHTML = '<div class="map-loading" style="display: flex; align-items: center; justify-content: center; height: 100%; flex-direction: column; gap: var(--space-16);"><div style="font-size: 48px;">🗺️</div><div style="font-size: var(--font-size-lg); color: var(--color-text-secondary);">Loading Interactive Map...</div><div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Automated - No Setup Required</div></div>';
    }
    setTimeout(renderMap, 500);
    return;
  }
  
  // Check if Google Maps API is available, otherwise use automated canvas rendering
  if (typeof google !== 'undefined' && google.maps) {
    console.log('🗺️ Using Google Maps with satellite view');
    renderGoogleMap();
  } else {
    console.log('🗺️ Using automated interactive map visualization');
    renderAutomatedMap();
  }
}

function renderGoogleMap() {
  // Check if Google Maps API is loaded
  if (typeof google === 'undefined' || !google.maps) {
    console.log('⏳ Google Maps API still loading, using fallback visualization...');
    renderAutomatedMap();
    return;
  }
  
  console.log('✅ Using Google Maps with integrated API key');
  
  const showRunners = document.getElementById('map-show-runners').checked;
  const showRuns = document.getElementById('map-show-runs').checked;
  const showTournaments = document.getElementById('map-show-tournaments').checked;
  const showGpsRoutes = document.getElementById('map-show-gps-routes').checked;
  const cityFilter = document.getElementById('map-city-filter').value;
  const distanceFilter = document.getElementById('map-distance-filter').value;
  const searchQuery = document.getElementById('map-search').value.toLowerCase();
  
  // Clear existing markers
  clearGoogleMapMarkers();
  
  // Initialize Google Map if not already done
  if (!googleMap) {
    initializeGoogleMap();
    return;
  }
  
  let markersData = [];
  
  // Get user's city for distance calculations
  const userCity = users.find(u => u.id === currentUser.id)?.city || 'Denver, CO';
  
  // Add runners to map
  if (showRunners) {
    const filteredRunners = users.filter(u => {
      if (u.id === currentUser.id) return false;
      if (!u.city) return false;
      if (cityFilter && u.city !== cityFilter) return false;
      if (searchQuery && !u.name.toLowerCase().includes(searchQuery)) return false;
      
      // Distance filter
      if (distanceFilter !== 'all') {
        const distance = calculateCityDistance(userCity, u.city);
        if (distance > parseInt(distanceFilter)) return false;
      }
      
      return true;
    });
    
    filteredRunners.forEach(runner => {
      markersData.push({
        type: 'runner',
        data: runner,
        city: runner.city
      });
    });
  }
  
  // Add runs to map
  if (showRuns) {
    const filteredRuns = runs.filter(r => {
      if (!r.city) return false;
      if (cityFilter && r.city !== cityFilter) return false;
      
      // Distance filter
      if (distanceFilter !== 'all') {
        const distance = calculateCityDistance(userCity, r.city);
        if (distance > parseInt(distanceFilter)) return false;
      }
      
      return true;
    });
    
    filteredRuns.forEach(run => {
      markersData.push({
        type: 'run',
        data: run,
        city: run.city
      });
    });
  }
  
  // Add tournaments to map
  if (showTournaments) {
    const filteredTournaments = tournaments.filter(t => {
      if (!t.city || t.city === 'Multiple') return false;
      if (cityFilter && t.city !== cityFilter) return false;
      
      // Distance filter
      if (distanceFilter !== 'all') {
        const distance = calculateCityDistance(userCity, t.city);
        if (distance > parseInt(distanceFilter)) return false;
      }
      
      return true;
    });
    
    filteredTournaments.forEach(tournament => {
      markersData.push({
        type: 'tournament',
        data: tournament,
        city: tournament.city
      });
    });
  }
  
  // Add GPS routes if enabled
  if (showGpsRoutes) {
    const userCompletedRuns = completedRuns.filter(r => r.user_id === currentUser.id && r.gps_coordinates && r.gps_coordinates.length > 1);
    userCompletedRuns.forEach(run => {
      markersData.push({
        type: 'gps-route',
        data: run,
        city: userCity
      });
    });
  }
  
  // Add current user marker
  markersData.push({
    type: 'current-user',
    data: currentUser,
    city: userCity
  });
  
  // Render markers on Google Map
  markersData.forEach(marker => {
    if (marker.type === 'gps-route') {
      // Render GPS route as polyline
      overlayGpsRouteOnMap(marker.data);
    } else {
      const coords = cityCoordinates[marker.city];
      if (!coords) return;
      
      // Add some random offset for markers in same city to prevent overlap (in meters)
      const offsetLat = (Math.random() - 0.5) * 0.01;
      const offsetLng = (Math.random() - 0.5) * 0.01;
      
      createGoogleMapMarker(marker, coords.lat + offsetLat, coords.lng + offsetLng);
    }
  });
  
  // Adjust map bounds to show all markers
  if (googleMapMarkers.length > 0) {
    const bounds = new google.maps.LatLngBounds();
    googleMapMarkers.forEach(marker => bounds.extend(marker.getPosition()));
    googleMap.fitBounds(bounds);
    
    // Don't zoom in too much for single markers
    google.maps.event.addListenerOnce(googleMap, 'bounds_changed', function() {
      if (googleMap.getZoom() > 13) {
        googleMap.setZoom(13);
      }
    });
  }
  
  // Update results count
  const resultsCount = markersData.filter(m => m.type !== 'current-user').length;
  document.getElementById('map-results-count').textContent = `Showing ${resultsCount} marker${resultsCount !== 1 ? 's' : ''} on map`;
}

function initializeGoogleMap() {
  const userCity = users.find(u => u.id === currentUser.id)?.city || 'Denver, CO';
  const center = cityCoordinates[userCity] || cityCoordinates['Denver, CO'];
  
  console.log('🗺️ Initializing Google Maps with integrated API...');
  console.log('📍 Center: ' + userCity + ' (' + center.lat + ', ' + center.lng + ')');
  
  try {
    googleMap = new google.maps.Map(document.getElementById('google-map'), {
      center: { lat: center.lat, lng: center.lng },
      zoom: 12,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ],
      mapTypeControl: true,
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      streetViewControl: true,
      fullscreenControl: true
    });
    
    googleMapInfoWindow = new google.maps.InfoWindow();
    
    console.log('✅ Google Maps initialized successfully');
    console.log('🛰️ Satellite view available via map controls');
    console.log('📍 Real-time marker updates enabled');
    console.log('✨ Integrated API key working for all users');
  } catch (error) {
    console.log('⚠️ Google Maps not available, using automated visualization');
    renderAutomatedMap();
  }
}

// Automated Map Rendering (Canvas-based, works without Google Maps API)
function renderAutomatedMap() {
  const showRunners = document.getElementById('map-show-runners').checked;
  const showRuns = document.getElementById('map-show-runs').checked;
  const showTournaments = document.getElementById('map-show-tournaments').checked;
  const showGpsRoutes = document.getElementById('map-show-gps-routes').checked;
  const cityFilter = document.getElementById('map-city-filter').value;
  const distanceFilter = document.getElementById('map-distance-filter').value;
  const searchQuery = document.getElementById('map-search').value.toLowerCase();
  
  const mapContainer = document.getElementById('google-map');
  const userCity = users.find(u => u.id === currentUser.id)?.city || 'Denver, CO';
  
  let markersData = [];
  
  // Add runners
  if (showRunners) {
    const filteredRunners = users.filter(u => {
      if (u.id === currentUser.id) return false;
      if (!u.city) return false;
      if (cityFilter && u.city !== cityFilter) return false;
      if (searchQuery && !u.name.toLowerCase().includes(searchQuery)) return false;
      if (distanceFilter !== 'all') {
        const distance = calculateCityDistance(userCity, u.city);
        if (distance > parseInt(distanceFilter)) return false;
      }
      return true;
    });
    filteredRunners.forEach(r => markersData.push({ type: 'runner', data: r, city: r.city }));
  }
  
  // Add runs
  if (showRuns) {
    const filteredRuns = runs.filter(r => {
      if (!r.city) return false;
      if (cityFilter && r.city !== cityFilter) return false;
      if (distanceFilter !== 'all') {
        const distance = calculateCityDistance(userCity, r.city);
        if (distance > parseInt(distanceFilter)) return false;
      }
      return true;
    });
    filteredRuns.forEach(r => markersData.push({ type: 'run', data: r, city: r.city }));
  }
  
  // Add tournaments
  if (showTournaments) {
    const filteredTournaments = tournaments.filter(t => {
      if (!t.city || t.city === 'Multiple') return false;
      if (cityFilter && t.city !== cityFilter) return false;
      if (distanceFilter !== 'all') {
        const distance = calculateCityDistance(userCity, t.city);
        if (distance > parseInt(distanceFilter)) return false;
      }
      return true;
    });
    filteredTournaments.forEach(t => markersData.push({ type: 'tournament', data: t, city: t.city }));
  }
  
  // Add current user
  markersData.push({ type: 'current-user', data: currentUser, city: userCity });
  
  // Render automated canvas map
  mapContainer.innerHTML = '<canvas id="automated-map-canvas" style="width: 100%; height: 100%; border-radius: var(--radius-base); cursor: pointer;"></canvas>';
  
  const canvas = document.getElementById('automated-map-canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  
  // Draw background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#E0F2F1');
  gradient.addColorStop(1, '#B2DFDB');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw markers
  markersData.forEach(marker => {
    const coords = cityCoordinates[marker.city];
    if (!coords) return;
    
    const offsetX = (Math.random() - 0.5) * 15;
    const offsetY = (Math.random() - 0.5) * 15;
    const x = (coords.x / 100) * canvas.width + offsetX;
    const y = (coords.y / 100) * canvas.height + offsetY;
    
    // Draw marker
    ctx.save();
    
    if (marker.type === 'runner') {
      ctx.fillStyle = '#22C55E';
      ctx.strokeStyle = '#15803D';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = 'white';
      ctx.font = 'bold 10px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const initials = marker.data.name.split(' ').map(n => n[0]).join('').toUpperCase();
      ctx.fillText(initials, x, y);
    } else if (marker.type === 'run') {
      ctx.fillStyle = '#3B82F6';
      ctx.strokeStyle = '#1E40AF';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🏃', x, y);
    } else if (marker.type === 'tournament') {
      ctx.fillStyle = '#A855F7';
      ctx.strokeStyle = '#7C3AED';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🏆', x, y);
    } else if (marker.type === 'current-user') {
      ctx.fillStyle = '#FBBF24';
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('📍', x, y);
    }
    
    ctx.restore();
    
    // Store marker position for click handling
    marker._canvasX = x;
    marker._canvasY = y;
  });
  
  // Handle clicks
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    
    for (const marker of markersData) {
      if (marker.type === 'current-user') continue;
      const dx = clickX - marker._canvasX;
      const dy = clickY - marker._canvasY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 20) {
        selectedMapMarker = marker;
        showMapMarkerDetails(marker);
        break;
      }
    }
  });
  
  // Update results count
  const resultsCount = markersData.filter(m => m.type !== 'current-user').length;
  document.getElementById('map-results-count').textContent = `Showing ${resultsCount} marker${resultsCount !== 1 ? 's' : ''} on map`;
  
  console.log(`✅ Automated map rendered with ${markersData.length} markers`);
}

function clearGoogleMapMarkers() {
  googleMapMarkers.forEach(marker => marker.setMap(null));
  googleMapMarkers = [];
  googleMapPolylines.forEach(polyline => polyline.setMap(null));
  googleMapPolylines = [];
}

function createGoogleMapMarker(marker, lat, lng) {
  let iconUrl, iconSize, markerTitle;
  
  if (marker.type === 'runner') {
    iconUrl = 'data:image/svg+xml,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="#22C55E" stroke="#15803D" stroke-width="3"/>
        <text x="20" y="26" font-family="Arial" font-size="14" font-weight="bold" fill="white" text-anchor="middle">${marker.data.name.split(' ').map(n => n[0]).join('').toUpperCase()}</text>
      </svg>
    `);
    iconSize = new google.maps.Size(40, 40);
    markerTitle = `Runner: ${marker.data.name}`;
  } else if (marker.type === 'run') {
    iconUrl = 'data:image/svg+xml,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="#3B82F6" stroke="#1E40AF" stroke-width="3"/>
        <text x="18" y="24" font-size="20" text-anchor="middle">🏃</text>
      </svg>
    `);
    iconSize = new google.maps.Size(36, 36);
    markerTitle = `Run: ${marker.data.title}`;
  } else if (marker.type === 'tournament') {
    iconUrl = 'data:image/svg+xml,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="#A855F7" stroke="#7C3AED" stroke-width="3"/>
        <text x="18" y="24" font-size="20" text-anchor="middle">🏆</text>
      </svg>
    `);
    iconSize = new google.maps.Size(36, 36);
    markerTitle = `Tournament: ${marker.data.title}`;
  } else if (marker.type === 'current-user') {
    iconUrl = 'data:image/svg+xml,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="20" fill="#FFEB3B" stroke="#FDD835" stroke-width="4"/>
        <text x="22" y="28" font-size="24" text-anchor="middle">📍</text>
      </svg>
    `);
    iconSize = new google.maps.Size(44, 44);
    markerTitle = 'You';
  }
  
  const googleMarker = new google.maps.Marker({
    position: { lat, lng },
    map: googleMap,
    icon: {
      url: iconUrl,
      scaledSize: iconSize,
      anchor: new google.maps.Point(iconSize.width / 2, iconSize.height / 2)
    },
    title: markerTitle,
    animation: google.maps.Animation.DROP
  });
  
  // Add click listener for info window (except for current user)
  if (marker.type !== 'current-user') {
    googleMarker.addListener('click', () => {
      selectedMapMarker = marker;
      showGoogleMapInfoWindow(googleMarker, marker);
      showMapMarkerDetails(marker);
    });
  }
  
  googleMapMarkers.push(googleMarker);
}

function showGoogleMapInfoWindow(googleMarker, marker) {
  let content = '';
  
  if (marker.type === 'runner') {
    const runner = marker.data;
    content = `
      <div style="padding: 8px; max-width: 250px;">
        <h3 style="margin: 0 0 8px 0; color: #F59E0B; font-size: 16px;">${runner.name}</h3>
        <p style="margin: 4px 0; font-size: 13px; color: #666;">${runner.age} years old • ${runner.fitness_level}</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Pace:</strong> ${runner.pace} min/mi</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Distance:</strong> ${runner.distance_preference} mi</p>
        <p style="margin: 8px 0 4px 0; font-size: 12px; color: #888;">${runner.bio}</p>
      </div>
    `;
  } else if (marker.type === 'run') {
    const run = marker.data;
    const organizer = getUserById(run.organizer_id);
    content = `
      <div style="padding: 8px; max-width: 250px;">
        <h3 style="margin: 0 0 8px 0; color: #3B82F6; font-size: 16px;">${run.title}</h3>
        <p style="margin: 4px 0; font-size: 13px;"><strong>📅</strong> ${formatDate(run.date)} at ${formatTime(run.time)}</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Distance:</strong> ${run.distance} mi • <strong>Pace:</strong> ${run.pace} min/mi</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Organizer:</strong> ${organizer.name}</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Participants:</strong> ${run.participants.length}/${run.max_participants}</p>
        <p style="margin: 8px 0 4px 0; font-size: 12px; color: #888;">${run.description}</p>
      </div>
    `;
  } else if (marker.type === 'tournament') {
    const tournament = marker.data;
    content = `
      <div style="padding: 8px; max-width: 250px;">
        <h3 style="margin: 0 0 8px 0; color: #A855F7; font-size: 16px;">${tournament.title}</h3>
        <p style="margin: 4px 0; font-size: 13px;"><span style="background: ${tournament.status === 'active' ? '#22C55E' : '#F59E0B'}; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px; text-transform: uppercase;">${tournament.status}</span></p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Goal:</strong> ${tournament.distance_goal} miles</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Type:</strong> ${tournament.tournament_type}</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Participants:</strong> ${tournament.participants.length}/${tournament.max_participants}</p>
        <p style="margin: 8px 0 4px 0; font-size: 12px; color: #888;">${tournament.description}</p>
      </div>
    `;
  }
  
  googleMapInfoWindow.setContent(content);
  googleMapInfoWindow.open(googleMap, googleMarker);
}

function overlayGpsRouteOnMap(run) {
  // Overlay GPS route from completed run on Google Maps
  if (!run.gps_coordinates || run.gps_coordinates.length < 2) {
    // Fallback to simulated route if GPS not available
    if (run.route && run.route.length > 1) {
      overlaySimulatedRouteOnMap(run);
    }
    return;
  }
  
  const path = run.gps_coordinates.map(coord => ({
    lat: coord.lat,
    lng: coord.lng
  }));
  
  const polyline = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: '#FFEB3B',
    strokeOpacity: 0.8,
    strokeWeight: 4,
    map: googleMap
  });
  
  googleMapPolylines.push(polyline);
  
  // Add start marker
  const startMarker = new google.maps.Marker({
    position: path[0],
    map: googleMap,
    icon: {
      url: 'data:image/svg+xml,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#3B82F6" stroke="#1E40AF" stroke-width="2"/>
        </svg>
      `),
      scaledSize: new google.maps.Size(24, 24),
      anchor: new google.maps.Point(12, 12)
    },
    title: 'Start'
  });
  
  // Add end marker
  const endMarker = new google.maps.Marker({
    position: path[path.length - 1],
    map: googleMap,
    icon: {
      url: 'data:image/svg+xml,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="#EF4444" stroke="#DC2626" stroke-width="2"/>
        </svg>
      `),
      scaledSize: new google.maps.Size(24, 24),
      anchor: new google.maps.Point(12, 12)
    },
    title: 'End'
  });
  
  googleMapMarkers.push(startMarker, endMarker);
  
  // Add info window for route
  polyline.addListener('click', (event) => {
    const content = `
      <div style="padding: 8px; max-width: 250px;">
        <h3 style="margin: 0 0 8px 0; color: #22C55E; font-size: 16px;">${run.name}</h3>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Distance:</strong> ${run.distance.toFixed(2)} mi</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Time:</strong> ${run.elapsed_time}</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Date:</strong> ${formatDate(run.date)}</p>
        <p style="margin: 4px 0; font-size: 13px;"><span style="background: #F59E0B; color: white; padding: 2px 6px; border-radius: 8px; font-size: 10px;">📍 GPS Tracked</span></p>
        <button onclick="viewCompletedRunDetails(${run.id})" style="margin-top: 8px; padding: 6px 12px; background: #22C55E; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;">View Details</button>
      </div>
    `;
    googleMapInfoWindow.setContent(content);
    googleMapInfoWindow.setPosition(event.latLng);
    googleMapInfoWindow.open(googleMap);
  });
}

function overlaySimulatedRouteOnMap(run) {
  // Overlay simulated route (from demo mode) on Google Maps
  // Convert percentage coordinates to GPS coordinates relative to user's city
  const userCity = users.find(u => u.id === currentUser.id)?.city || 'Denver, CO';
  const center = cityCoordinates[userCity] || cityCoordinates['Denver, CO'];
  
  const path = run.route.map(point => {
    // Convert 0-100 range to approximate GPS offset
    const latOffset = ((point.y - 50) / 100) * 0.05; // ~5km range
    const lngOffset = ((point.x - 50) / 100) * 0.05;
    return {
      lat: center.lat - latOffset, // Inverted Y
      lng: center.lng + lngOffset
    };
  });
  
  const polyline = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: '#FFEB3B',
    strokeOpacity: 0.7,
    strokeWeight: 3,
    map: googleMap
  });
  
  googleMapPolylines.push(polyline);
  
  // Add info window
  polyline.addListener('click', (event) => {
    const content = `
      <div style="padding: 8px; max-width: 250px;">
        <h3 style="margin: 0 0 8px 0; color: #F59E0B; font-size: 16px;">${run.name}</h3>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Distance:</strong> ${run.distance.toFixed(2)} mi</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Time:</strong> ${run.elapsed_time}</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Date:</strong> ${formatDate(run.date)}</p>
        <p style="margin: 4px 0; font-size: 13px;"><span style="background: #F59E0B; color: white; padding: 2px 6px; border-radius: 8px; font-size: 10px;">🎮 Demo Mode</span></p>
        <button onclick="viewCompletedRunDetails(${run.id})" style="margin-top: 8px; padding: 6px 12px; background: #F59E0B; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px;">View Details</button>
      </div>
    `;
    googleMapInfoWindow.setContent(content);
    googleMapInfoWindow.setPosition(event.latLng);
    googleMapInfoWindow.open(googleMap);
  });
}

function showLiveGpsRouteOnMap() {
  // Show live GPS route during active Free Run
  if (!freeRunState.isRunning || !googleMap) return;
  
  // Clear existing polylines
  googleMapPolylines.forEach(polyline => polyline.setMap(null));
  googleMapPolylines = [];
  
  if (freeRunState.gpsCoordinates.length < 2) return;
  
  const path = freeRunState.gpsCoordinates.map(coord => ({
    lat: coord.lat,
    lng: coord.lng
  }));
  
  const polyline = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: '#22C55E',
    strokeOpacity: 0.9,
    strokeWeight: 5,
    map: googleMap
  });
  
  googleMapPolylines.push(polyline);
  
  // Update current position marker
  if (freeRunState.lastGpsPosition) {
    const currentPos = {
      lat: freeRunState.lastGpsPosition.lat,
      lng: freeRunState.lastGpsPosition.lng
    };
    
    // Remove old current position marker
    const oldMarkers = googleMapMarkers.filter(m => m.getTitle() === 'Current Position');
    oldMarkers.forEach(m => m.setMap(null));
    
    // Add new current position marker
    const currentMarker = new google.maps.Marker({
      position: currentPos,
      map: googleMap,
      icon: {
        url: 'data:image/svg+xml,' + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" fill="#22C55E" stroke="#15803D" stroke-width="3"/>
            <circle cx="16" cy="16" r="6" fill="white"/>
          </svg>
        `),
        scaledSize: new google.maps.Size(32, 32),
        anchor: new google.maps.Point(16, 16)
      },
      title: 'Current Position',
      animation: google.maps.Animation.BOUNCE
    });
    
    googleMapMarkers.push(currentMarker);
    
    // Center map on current position
    googleMap.panTo(currentPos);
  }
}

// Legacy function - now using Google Maps
function createMapMarker_LEGACY(marker, x, y) {
  const markerEl = document.createElement('div');
  markerEl.style.position = 'absolute';
  markerEl.style.left = `${x}%`;
  markerEl.style.top = `${y}%`;
  markerEl.style.transform = 'translate(-50%, -50%)';
  markerEl.style.cursor = 'pointer';
  markerEl.style.transition = 'all 0.2s ease';
  
  let markerColor, markerBorder, markerSize, markerContent;
  
  if (marker.type === 'runner') {
    markerColor = 'var(--color-gold-primary)';
    markerBorder = 'var(--color-gold-dark)';
    markerSize = '32px';
    const initials = marker.data.name.split(' ').map(n => n[0]).join('').toUpperCase();
    markerContent = `<div style="font-size: 10px; font-weight: bold; color: white;">${initials}</div>`;
  } else if (marker.type === 'run') {
    markerColor = '#3B82F6';
    markerBorder = '#1E40AF';
    markerSize = '28px';
    markerContent = '<div style="font-size: 16px;">🏃</div>';
  } else if (marker.type === 'tournament') {
    markerColor = '#A855F7';
    markerBorder = '#7C3AED';
    markerSize = '28px';
    markerContent = '<div style="font-size: 16px;">🏆</div>';
  } else if (marker.type === 'current-user') {
    markerColor = '#FBBF24';
    markerBorder = '#F59E0B';
    markerSize = '40px';
    markerContent = '<div style="font-size: 20px;">📍</div>';
  }
  
  markerEl.innerHTML = `
    <div style="
      width: ${markerSize};
      height: ${markerSize};
      background: ${markerColor};
      border: 3px solid ${markerBorder};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    ">
      ${markerContent}
    </div>
  `;
  
  // Hover effect
  markerEl.addEventListener('mouseenter', function() {
    this.style.transform = 'translate(-50%, -50%) scale(1.2)';
    this.style.zIndex = '1000';
  });
  
  markerEl.addEventListener('mouseleave', function() {
    this.style.transform = 'translate(-50%, -50%) scale(1)';
    this.style.zIndex = 'auto';
  });
  
  // Click to show details
  if (marker.type !== 'current-user') {
    markerEl.addEventListener('click', () => {
      selectedMapMarker = marker;
      showMapMarkerDetails(marker);
    });
  }
  
  return markerEl;
}

function calculateCityDistance(city1, city2) {
  if (city1 === city2) return 0;
  
  const coords1 = cityCoordinates[city1];
  const coords2 = cityCoordinates[city2];
  
  if (!coords1 || !coords2) return 999;
  
  // Simple Euclidean distance, scaled to approximate miles
  const dx = coords1.x - coords2.x;
  const dy = coords1.y - coords2.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  // Scale to approximate miles (rough approximation)
  return Math.round(distance * 20);
}

function showMapMarkerDetails(marker) {
  document.getElementById('map-details-empty').classList.add('hidden');
  const detailsContent = document.getElementById('map-details-content');
  detailsContent.classList.remove('hidden');
  
  const userCity = users.find(u => u.id === currentUser.id)?.city || 'Denver, CO';
  
  if (marker.type === 'runner') {
    const runner = marker.data;
    const distance = calculateCityDistance(userCity, runner.city);
    const connected = isConnected(runner.id);
    const avatarDisplay = getAvatarDisplay(runner);
    const avatarStyle = getAvatarStyle(runner);
    const fontSize = runner.profile_picture && runner.profile_picture.length <= 3 ? 'var(--font-size-xl)' : '32px';
    const interests = runner.running_interests || [];
    
    detailsContent.innerHTML = `
      <div>
        <h3 style="margin-bottom: var(--space-16); color: var(--color-green-primary); display: flex; align-items: center; gap: var(--space-8);">
          <span>👤</span> Runner Details
        </h3>
        
        <div style="text-align: center; margin-bottom: var(--space-20);">
          <div style="width: 80px; height: 80px; border-radius: 50%; ${avatarStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${fontSize}; margin: 0 auto var(--space-12); border: 3px solid var(--color-green-border);">${avatarDisplay}</div>
          <h2 style="color: #1A1A1A; margin-bottom: var(--space-4);">${runner.name}</h2>
          <div style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-bottom: var(--space-8);">${runner.age} years old</div>
          <span class="badge badge--${runner.fitness_level}">${runner.fitness_level}</span>
        </div>
        
        <div style="background: #FFFFFF; border: 2px solid var(--color-green-primary); border-radius: var(--radius-base); padding: var(--space-16); margin-bottom: var(--space-16);">
          <div style="display: flex; align-items: center; gap: var(--space-8); margin-bottom: var(--space-8); color: var(--color-text-secondary);">
            <span>📍</span>
            <strong style="color: var(--color-green-primary);">${distance} miles away</strong>
          </div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">City: ${runner.city}</div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-12); margin-bottom: var(--space-16);">
          <div style="background: #FFFFFF; border: 2px solid var(--color-green-primary); border-radius: var(--radius-base); padding: var(--space-12); text-align: center;">
            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">Pace</div>
            <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-green-primary);">${runner.pace} min/mi</div>
          </div>
          <div style="background: #FFFFFF; border: 2px solid var(--color-green-primary); border-radius: var(--radius-base); padding: var(--space-12); text-align: center;">
            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">Distance</div>
            <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-green-primary);">${runner.distance_preference} mi</div>
          </div>
        </div>
        
        <div style="margin-bottom: var(--space-16);">
          <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: var(--color-text);">Bio</div>
          <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); line-height: 1.6;">${runner.bio}</p>
        </div>
        
        ${interests.length > 0 ? `
          <div style="margin-bottom: var(--space-16);">
            <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: #1A1A1A;">Interests</div>
            <div>${interests.map(i => `<span style="display: inline-block; padding: var(--space-4) var(--space-8); background: rgba(212, 175, 55, 0.15); color: #1A1A1A; border: 2px solid #D4AF37; border-radius: var(--radius-full); font-size: var(--font-size-xs); margin-right: var(--space-4); margin-bottom: var(--space-4);">${i}</span>`).join('')}</div>
          </div>
        ` : ''}
        
        <div style="display: flex; flex-direction: column; gap: var(--space-8);">
          ${connected ? 
            `<button class="btn btn--secondary btn--sm" disabled>Already Connected</button>
             <button class="btn btn--green" onclick="openChat(${runner.id}); showPage('messages');">Send Message</button>` :
            `<button class="btn btn--green" onclick="connectWithRunner(${runner.id}); renderMap();">Connect</button>`
          }
          <button class="btn btn--outline" onclick="viewRunnerProfile(${runner.id})">View Full Profile</button>
        </div>
      </div>
    `;
  } else if (marker.type === 'run') {
    const run = marker.data;
    const organizer = getUserById(run.organizer_id);
    const isOrganizer = run.organizer_id === currentUser.id;
    const hasJoined = run.participants.includes(currentUser.id);
    const isFull = run.participants.length >= run.max_participants;
    const distance = calculateCityDistance(userCity, run.city);
    
    detailsContent.innerHTML = `
      <div>
        <h3 style="margin-bottom: var(--space-16); color: var(--color-green-primary); display: flex; align-items: center; gap: var(--space-8);">
          <span>🏃</span> Run Details
        </h3>
        
        <h2 style="color: #1A1A1A; margin-bottom: var(--space-16);">${run.title}</h2>
        
        <div style="background: #FFFFFF; border: 2px solid var(--color-green-primary); border-radius: var(--radius-base); padding: var(--space-16); margin-bottom: var(--space-16);">
          <div style="display: flex; align-items: center; gap: var(--space-8); margin-bottom: var(--space-8);">
            <span>📅</span>
            <span style="font-size: var(--font-size-sm);">${formatDate(run.date)}</span>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-8); margin-bottom: var(--space-8);">
            <span>🕐</span>
            <span style="font-size: var(--font-size-sm);">${formatTime(run.time)}</span>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-8); margin-bottom: var(--space-8);">
            <span>📍</span>
            <span style="font-size: var(--font-size-sm);">${run.city} (${distance} miles away)</span>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-8);">
            <span>👥</span>
            <span style="font-size: var(--font-size-sm);">${run.participants.length}/${run.max_participants} participants</span>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-12); margin-bottom: var(--space-16);">
          <div style="background: #FFFFFF; border: 2px solid var(--color-green-primary); border-radius: var(--radius-base); padding: var(--space-12); text-align: center;">
            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">Distance</div>
            <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-green-primary);">${run.distance} mi</div>
          </div>
          <div style="background: #FFFFFF; border: 2px solid var(--color-green-primary); border-radius: var(--radius-base); padding: var(--space-12); text-align: center;">
            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">Pace</div>
            <div style="font-size: var(--font-size-lg); font-weight: var(--font-weight-bold); color: var(--color-green-primary);">${run.pace}</div>
          </div>
          <div style="background: #FFFFFF; border: 2px solid var(--color-green-primary); border-radius: var(--radius-base); padding: var(--space-12); text-align: center;">
            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--space-4);">Difficulty</div>
            <div><span class="badge badge--${run.difficulty}" style="font-size: var(--font-size-xs);">${run.difficulty}</span></div>
          </div>
        </div>
        
        <div style="margin-bottom: var(--space-16);">
          <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: var(--color-text);">Organizer</div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">${organizer.name}</div>
        </div>
        
        <div style="margin-bottom: var(--space-16);">
          <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: var(--color-text);">Description</div>
          <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); line-height: 1.6;">${run.description}</p>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: var(--space-8);">
          ${isOrganizer ? 
            `<button class="btn btn--secondary" onclick="cancelRun(${run.id}); renderMap();">Cancel Run</button>` :
            hasJoined ?
              `<button class="btn btn--secondary" onclick="leaveRun(${run.id}); renderMap();">Leave Run</button>
               <button class="btn btn--green" onclick="showPage('my-runs')">View in My Runs</button>` :
              isFull ?
                `<button class="btn btn--outline" disabled>Run is Full</button>` :
                `<button class="btn btn--green" onclick="joinRun(${run.id}); renderMap(); showMapMarkerDetails(selectedMapMarker);">Join Run</button>`
          }
          <button class="btn btn--outline" onclick="showPage('upcoming-runs')">View All Runs</button>
        </div>
      </div>
    `;
  } else if (marker.type === 'tournament') {
    const tournament = marker.data;
    const creator = getUserById(tournament.creator_id);
    const isParticipating = tournament.participants.includes(currentUser.id);
    const isFull = tournament.participants.length >= tournament.max_participants;
    const isCreator = tournament.creator_id === currentUser.id;
    const distance = calculateCityDistance(userCity, tournament.city);
    
    detailsContent.innerHTML = `
      <div>
        <h3 style="margin-bottom: var(--space-16); color: var(--color-green-primary); display: flex; align-items: center; gap: var(--space-8);">
          <span>🏆</span> Tournament Details
        </h3>
        
        <h2 style="color: #1A1A1A; margin-bottom: var(--space-8);">${tournament.title}</h2>
        <span class="badge" style="background: rgba(${tournament.status === 'active' ? '34, 197, 94' : '245, 158, 11'}, 0.15); color: ${tournament.status === 'active' ? 'var(--color-green-primary)' : 'var(--color-warning)'}; border: 1px solid; margin-bottom: var(--space-16); display: inline-block;">${tournament.status}</span>
        
        <div style="background: #FFFFFF; border: 2px solid var(--color-green-primary); border-radius: var(--radius-base); padding: var(--space-16); margin-bottom: var(--space-16);">
          <div style="display: flex; align-items: center; gap: var(--space-8); margin-bottom: var(--space-8);">
            <span>📍</span>
            <span style="font-size: var(--font-size-sm);">${tournament.city} (${distance} miles away)</span>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-8); margin-bottom: var(--space-8);">
            <span>🎯</span>
            <span style="font-size: var(--font-size-sm);">Goal: ${tournament.distance_goal} miles</span>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-8); margin-bottom: var(--space-8);">
            <span>👥</span>
            <span style="font-size: var(--font-size-sm);">${tournament.participants.length}/${tournament.max_participants} participants</span>
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-8);">
            <span>👤</span>
            <span style="font-size: var(--font-size-sm);">by ${tournament.creator_name}</span>
          </div>
        </div>
        
        <div style="margin-bottom: var(--space-16);">
          <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: var(--color-text);">Type</div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">${tournament.tournament_type}</div>
        </div>
        
        <div style="margin-bottom: var(--space-16);">
          <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: var(--color-text);">Duration</div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">${formatDate(tournament.start_date)} - ${formatDate(tournament.end_date)}</div>
        </div>
        
        <div style="margin-bottom: var(--space-16);">
          <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: var(--color-text);">Description</div>
          <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); line-height: 1.6;">${tournament.description}</p>
        </div>
        
        ${tournament.leaderboard.length > 0 ? `
          <div style="margin-bottom: var(--space-16);">
            <div style="font-weight: var(--font-weight-semibold); margin-bottom: var(--space-8); color: var(--color-text);">🏆 Top 3</div>
            <div style="background: #FFFFFF; border: 2px solid var(--color-green-primary); border-radius: var(--radius-base); padding: var(--space-12);">
              ${tournament.leaderboard.slice(0, 3).map(entry => `
                <div style="display: flex; justify-content: space-between; padding: var(--space-8); border-bottom: 1px solid var(--color-border);">
                  <div><span style="font-weight: bold; color: var(--color-green-primary);">#${entry.rank}</span> ${entry.user_name}</div>
                  <div style="font-weight: bold;">${entry.distance_logged} mi</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
        
        <div style="display: flex; flex-direction: column; gap: var(--space-8);">
          ${isCreator ? 
            `<button class="btn btn--secondary" disabled>Your Tournament</button>` :
            isParticipating ?
              `<button class="btn btn--secondary" onclick="leaveTournament(${tournament.id}); renderMap();">Leave Tournament</button>
               <button class="btn btn--green" onclick="viewTournament(${tournament.id})">View Full Leaderboard</button>` :
              isFull ?
                `<button class="btn btn--outline" disabled>Tournament Full</button>` :
                `<button class="btn btn--green" onclick="joinTournament(${tournament.id}); renderMap(); showMapMarkerDetails(selectedMapMarker);">Join Tournament</button>`
          }
          <button class="btn btn--outline" onclick="showPage('tournaments')">View All Tournaments</button>
        </div>
      </div>
    `;
  }
}

function viewRunnerProfile(runnerId) {
  // This would ideally navigate to the runner's profile
  alert('Runner profile view would show full details here. Navigate to Discover page to connect.');
  showPage('discover');
}

// Friends Functions
function getFriendsData(userId) {
  if (!friendsData[userId]) {
    friendsData[userId] = { friends: [], pending_requests: [], sent_requests: [] };
  }
  return friendsData[userId];
}

function isFriend(userId) {
  const myData = getFriendsData(currentUser.id);
  return myData.friends.includes(userId);
}

function hasPendingRequest(userId) {
  const myData = getFriendsData(currentUser.id);
  return myData.pending_requests.includes(userId);
}

function hasSentRequest(userId) {
  const myData = getFriendsData(currentUser.id);
  return myData.sent_requests.includes(userId);
}

function sendFriendRequest(userId) {
  if (userId === currentUser.id) return;
  if (isFriend(userId) || hasSentRequest(userId)) return;
  
  const myData = getFriendsData(currentUser.id);
  const theirData = getFriendsData(userId);
  
  myData.sent_requests.push(userId);
  theirData.pending_requests.push(currentUser.id);
  
  console.log('Friend request sent - real-time connection update');
  alert('Friend request sent!');
  renderFriends();
}

function acceptFriendRequest(userId) {
  const myData = getFriendsData(currentUser.id);
  const theirData = getFriendsData(userId);
  
  // Remove from pending and sent
  myData.pending_requests = myData.pending_requests.filter(id => id !== userId);
  theirData.sent_requests = theirData.sent_requests.filter(id => id !== currentUser.id);
  
  // Add to friends
  myData.friends.push(userId);
  theirData.friends.push(currentUser.id);
  
  // Also create connection for messaging
  if (!isConnected(userId)) {
    connections.push({
      user1_id: currentUser.id,
      user2_id: userId
    });
  }
  
  alert('Friend request accepted!');
  renderFriends();
}

function declineFriendRequest(userId) {
  const myData = getFriendsData(currentUser.id);
  const theirData = getFriendsData(userId);
  
  myData.pending_requests = myData.pending_requests.filter(id => id !== userId);
  theirData.sent_requests = theirData.sent_requests.filter(id => id !== currentUser.id);
  
  alert('Friend request declined');
  renderFriends();
}

function cancelFriendRequest(userId) {
  const myData = getFriendsData(currentUser.id);
  const theirData = getFriendsData(userId);
  
  myData.sent_requests = myData.sent_requests.filter(id => id !== userId);
  theirData.pending_requests = theirData.pending_requests.filter(id => id !== currentUser.id);
  
  alert('Friend request cancelled');
  renderFriends();
}

function removeFriend(userId) {
  if (!confirm('Are you sure you want to remove this friend?')) return;
  
  const myData = getFriendsData(currentUser.id);
  const theirData = getFriendsData(userId);
  
  myData.friends = myData.friends.filter(id => id !== userId);
  theirData.friends = theirData.friends.filter(id => id !== currentUser.id);
  
  alert('Friend removed');
  renderFriends();
}

function renderFriends() {
  const activeTab = document.querySelector('.tab.active[data-tab*="friend"]');
  if (!activeTab) {
    renderAllFriends();
    return;
  }
  
  const tabName = activeTab.getAttribute('data-tab');
  
  if (tabName === 'all-friends') {
    renderAllFriends();
  } else if (tabName === 'pending-requests') {
    renderPendingRequests();
  } else if (tabName === 'sent-requests') {
    renderSentRequests();
  } else if (tabName === 'find-friends') {
    renderFindFriends();
  }
}

function renderAllFriends() {
  const container = document.getElementById('all-friends-list');
  const myData = getFriendsData(currentUser.id);
  const friendUsers = myData.friends.map(id => getUserById(id)).filter(u => u);
  
  if (friendUsers.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">👥</div><h3>No friends yet</h3><p>Find friends to connect with and start your running journey together!</p></div>';
    return;
  }
  
  container.innerHTML = friendUsers.map(friend => renderFriendCard(friend, 'friend')).join('');
}

function renderPendingRequests() {
  const container = document.getElementById('pending-requests-list');
  const myData = getFriendsData(currentUser.id);
  const pendingUsers = myData.pending_requests.map(id => getUserById(id)).filter(u => u);
  
  if (pendingUsers.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📬</div><h3>No pending requests</h3><p>You don\'t have any friend requests at the moment</p></div>';
    return;
  }
  
  container.innerHTML = pendingUsers.map(user => renderFriendCard(user, 'pending')).join('');
}

function renderSentRequests() {
  const container = document.getElementById('sent-requests-list');
  const myData = getFriendsData(currentUser.id);
  const sentUsers = myData.sent_requests.map(id => getUserById(id)).filter(u => u);
  
  if (sentUsers.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📤</div><h3>No sent requests</h3><p>You haven\'t sent any friend requests yet</p></div>';
    return;
  }
  
  container.innerHTML = sentUsers.map(user => renderFriendCard(user, 'sent')).join('');
}

function renderFindFriends() {
  const container = document.getElementById('find-friends-list');
  const searchQuery = document.getElementById('friend-search').value.toLowerCase();
  const cityFilter = document.getElementById('friend-city-filter').value;
  const fitnessFilter = document.getElementById('friend-fitness-filter').value;
  
  let potentialFriends = users.filter(u => {
    if (u.id === currentUser.id) return false;
    if (isFriend(u.id)) return false;
    
    if (searchQuery && !u.name.toLowerCase().includes(searchQuery)) return false;
    if (cityFilter && u.city !== cityFilter) return false;
    if (fitnessFilter && u.fitness_level !== fitnessFilter) return false;
    
    return true;
  });
  
  if (potentialFriends.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No runners found</h3><p>Try adjusting your filters</p></div>';
    return;
  }
  
  container.innerHTML = potentialFriends.map(user => renderFriendCard(user, 'find')).join('');
}

// Free Run Functions
function initializeFreeRun() {
  resetFreeRunState();
  updateFreeRunDisplay();
  initializeFreeRunMap();
  drawFreeRunMap();
  updateGpsStatusDisplay('inactive');
  document.getElementById('map-status').textContent = 'Ready to start';
  updateSafetyControls();
  loadSafetySettings();
}

function resetFreeRunState() {
  if (freeRunState.intervalId) clearInterval(freeRunState.intervalId);
  if (freeRunState.routeIntervalId) clearInterval(freeRunState.routeIntervalId);
  if (freeRunState.gpsWatchId !== null) {
    navigator.geolocation.clearWatch(freeRunState.gpsWatchId);
  }
  
  freeRunState = {
    isRunning: false,
    isPaused: false,
    startTime: null,
    elapsedSeconds: 0,
    pausedTime: 0,
    distance: 0,
    route: [],
    currentPosition: { x: 50, y: 50 },
    intervalId: null,
    routeIntervalId: null,
    gpsEnabled: false,
    gpsWatchId: null,
    gpsStatus: 'inactive',
    lastGpsPosition: null,
    gpsAccuracy: null,
    gpsSpeed: null,
    gpsCoordinates: [],
    isDemoMode: false
  };
  
  // Show/hide buttons
  document.getElementById('start-run-btn').classList.remove('hidden');
  document.getElementById('pause-run-btn').classList.add('hidden');
  document.getElementById('resume-run-btn').classList.add('hidden');
  document.getElementById('end-run-btn').classList.add('hidden');
  document.getElementById('discard-run-btn').classList.add('hidden');
  
  // Hide safety controls
  const sosBtn = document.getElementById('sos-emergency-btn');
  const safetyStatus = document.getElementById('safety-status');
  if (sosBtn) sosBtn.classList.add('hidden');
  if (safetyStatus) safetyStatus.classList.add('hidden');
  
  // Hide summary, show interface
  document.getElementById('free-run-interface').classList.remove('hidden');
  document.getElementById('run-summary').classList.add('hidden');
}

function startFreeRun() {
  // Request GPS permission first
  requestGpsPermission();
}

function pauseFreeRun() {
  freeRunState.isPaused = true;
  freeRunState.pausedTime = Date.now();
  
  if (freeRunState.intervalId) clearInterval(freeRunState.intervalId);
  if (freeRunState.routeIntervalId) clearInterval(freeRunState.routeIntervalId);
  
  // Stop GPS tracking temporarily
  if (freeRunState.gpsWatchId !== null) {
    navigator.geolocation.clearWatch(freeRunState.gpsWatchId);
    freeRunState.gpsWatchId = null;
  }
  
  document.getElementById('pause-run-btn').classList.add('hidden');
  document.getElementById('resume-run-btn').classList.remove('hidden');
  document.getElementById('map-status').textContent = 'Paused';
  document.getElementById('map-status').style.color = 'var(--color-warning)';
}

function resumeFreeRun() {
  freeRunState.isPaused = false;
  const pauseDuration = Date.now() - freeRunState.pausedTime;
  freeRunState.startTime = new Date(freeRunState.startTime.getTime() + pauseDuration);
  
  document.getElementById('resume-run-btn').classList.add('hidden');
  document.getElementById('pause-run-btn').classList.remove('hidden');
  
  if (freeRunState.isDemoMode) {
    document.getElementById('map-status').textContent = '🎮 Demo Mode - Running...';
  } else {
    document.getElementById('map-status').textContent = '📍 GPS Tracking Active';
  }
  document.getElementById('map-status').style.color = 'var(--color-green-primary)';
  
  freeRunState.intervalId = setInterval(updateFreeRunTimer, 1000);
  
  // Resume GPS tracking if not in demo mode
  if (!freeRunState.isDemoMode && freeRunState.gpsEnabled) {
    startGpsTracking();
  } else if (freeRunState.isDemoMode) {
    freeRunState.routeIntervalId = setInterval(simulateRunMovement, 2000);
  }
}

function endFreeRun() {
  freeRunState.isRunning = false;
  
  if (freeRunState.intervalId) clearInterval(freeRunState.intervalId);
  if (freeRunState.routeIntervalId) clearInterval(freeRunState.routeIntervalId);
  
  // Stop GPS tracking
  if (freeRunState.gpsWatchId !== null) {
    navigator.geolocation.clearWatch(freeRunState.gpsWatchId);
    freeRunState.gpsWatchId = null;
  }
  
  // Safety: Stop live location sharing
  stopLiveLocationSharing();
  
  // Safety: Notify friends run ended
  notifyFriendsRunEnded();
  
  showRunSummary();
}

function discardFreeRun() {
  if (!confirm('Are you sure you want to discard this run?')) return;
  initializeFreeRun();
}

function updateFreeRunTimer() {
  if (freeRunState.isPaused) return;
  
  const now = new Date();
  freeRunState.elapsedSeconds = Math.floor((now - freeRunState.startTime) / 1000);
  
  updateFreeRunDisplay();
}

function updateFreeRunDisplay() {
  // Update timer
  const hours = Math.floor(freeRunState.elapsedSeconds / 3600);
  const minutes = Math.floor((freeRunState.elapsedSeconds % 3600) / 60);
  const seconds = freeRunState.elapsedSeconds % 60;
  document.getElementById('free-run-timer').textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  // Update distance
  document.getElementById('free-run-distance').textContent = freeRunState.distance.toFixed(2);
  
  // Update pace (min/mile)
  let pace = '0:00';
  if (freeRunState.distance > 0 && freeRunState.elapsedSeconds > 0) {
    const paceMinutes = freeRunState.elapsedSeconds / 60 / freeRunState.distance;
    const paceMin = Math.floor(paceMinutes);
    const paceSec = Math.floor((paceMinutes - paceMin) * 60);
    pace = `${paceMin}:${String(paceSec).padStart(2, '0')}`;
  }
  document.getElementById('free-run-pace').textContent = pace;
  
  // Update speed (mph) - use GPS speed if available, otherwise calculate
  let speed = 0;
  if (freeRunState.gpsSpeed !== null && freeRunState.gpsSpeed !== undefined) {
    // GPS speed is in m/s, convert to mph
    speed = freeRunState.gpsSpeed * 2.23694;
  } else if (freeRunState.distance > 0 && freeRunState.elapsedSeconds > 0) {
    speed = (freeRunState.distance / (freeRunState.elapsedSeconds / 3600));
  }
  document.getElementById('free-run-speed').textContent = speed.toFixed(1);
  
  // Update calories (rough estimate: 100 calories per mile)
  const calories = Math.floor(freeRunState.distance * 100);
  document.getElementById('free-run-calories').textContent = calories;
  
  // Update GPS status if running
  if (freeRunState.isRunning) {
    updateGpsStatusDisplay(freeRunState.gpsStatus);
  }
}

function simulateRunMovement() {
  // Simulate user movement on map
  const moveDistance = 0.05; // miles per update
  freeRunState.distance += moveDistance;
  
  // Random walk simulation
  const angle = Math.random() * Math.PI * 2;
  const stepSize = 3;
  
  freeRunState.currentPosition.x += Math.cos(angle) * stepSize;
  freeRunState.currentPosition.y += Math.sin(angle) * stepSize;
  
  // Keep within bounds
  freeRunState.currentPosition.x = Math.max(10, Math.min(90, freeRunState.currentPosition.x));
  freeRunState.currentPosition.y = Math.max(10, Math.min(90, freeRunState.currentPosition.y));
  
  // Add to route
  freeRunState.route.push({ x: freeRunState.currentPosition.x, y: freeRunState.currentPosition.y });
  
  // Update display and map
  updateFreeRunDisplay();
  drawFreeRunMap();
}

function drawFreeRunMap() {
  // Use Google Maps if available, otherwise use canvas
  if (freeRunGoogleMap && !freeRunState.isDemoMode) {
    updateFreeRunGoogleMap();
    return;
  }
  
  // Fallback to canvas rendering
  const canvas = document.getElementById('route-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if (freeRunState.route.length === 0) return;
  
  // Draw route
  ctx.strokeStyle = '#FFEB3B';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  ctx.beginPath();
  freeRunState.route.forEach((point, index) => {
    const x = (point.x / 100) * canvas.width;
    const y = (point.y / 100) * canvas.height;
    
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();
  
  // Draw start marker
  if (freeRunState.route.length > 0) {
    const start = freeRunState.route[0];
    const startX = (start.x / 100) * canvas.width;
    const startY = (start.y / 100) * canvas.height;
    
    ctx.fillStyle = '#3B82F6';
    ctx.beginPath();
    ctx.arc(startX, startY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1E40AF';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  
  // Draw current position marker
  if (freeRunState.isRunning || freeRunState.isPaused) {
    const current = freeRunState.currentPosition;
    const currentX = (current.x / 100) * canvas.width;
    const currentY = (current.y / 100) * canvas.height;
    
    ctx.fillStyle = freeRunState.isPaused ? '#FDD835' : '#FFEB3B';
    ctx.beginPath();
    ctx.arc(currentX, currentY, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = freeRunState.isPaused ? '#FBC02D' : '#FDD835';
    ctx.lineWidth = 3;
    ctx.stroke();
  }
}

// Update Free Run Google Map with GPS tracking
function updateFreeRunGoogleMap() {
  if (!freeRunGoogleMap || freeRunState.gpsCoordinates.length === 0) return;
  
  // Clear existing polyline
  if (freeRunPolyline) {
    freeRunPolyline.setMap(null);
  }
  
  // Clear existing markers
  freeRunMapMarkers.forEach(marker => marker.setMap(null));
  freeRunMapMarkers = [];
  
  // Draw GPS route as polyline
  const path = freeRunState.gpsCoordinates.map(coord => ({
    lat: coord.lat,
    lng: coord.lng
  }));
  
  freeRunPolyline = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: '#FFEB3B',
    strokeOpacity: 1.0,
    strokeWeight: 5,
    map: freeRunGoogleMap
  });
  
  // Add start marker (blue)
  if (path.length > 0) {
    const startMarker = new google.maps.Marker({
      position: path[0],
      map: freeRunGoogleMap,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: '#3B82F6',
        fillOpacity: 1,
        strokeColor: '#1E40AF',
        strokeWeight: 3
      },
      title: 'Start'
    });
    freeRunMapMarkers.push(startMarker);
  }
  
  // Add current position marker (green, pulsing)
  if (freeRunState.lastGpsPosition && (freeRunState.isRunning || freeRunState.isPaused)) {
    const currentMarker = new google.maps.Marker({
      position: { lat: freeRunState.lastGpsPosition.lat, lng: freeRunState.lastGpsPosition.lng },
      map: freeRunGoogleMap,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: freeRunState.isPaused ? '#FBC02D' : '#FFEB3B',
        fillOpacity: 1,
        strokeColor: freeRunState.isPaused ? '#F9A825' : '#FDD835',
        strokeWeight: 4
      },
      title: 'Current Position',
      animation: freeRunState.isPaused ? null : google.maps.Animation.BOUNCE
    });
    freeRunMapMarkers.push(currentMarker);
    
    // Center map on current position
    freeRunGoogleMap.panTo({ lat: freeRunState.lastGpsPosition.lat, lng: freeRunState.lastGpsPosition.lng });
  }
  
  // Adjust zoom to show full route if multiple points
  if (path.length > 1) {
    const bounds = new google.maps.LatLngBounds();
    path.forEach(point => bounds.extend(point));
    freeRunGoogleMap.fitBounds(bounds);
    
    // Don't zoom in too much
    google.maps.event.addListenerOnce(freeRunGoogleMap, 'bounds_changed', function() {
      if (freeRunGoogleMap.getZoom() > 17) {
        freeRunGoogleMap.setZoom(17);
      }
    });
  }
}

function showRunSummary() {
  // Hide interface, show summary
  document.getElementById('free-run-interface').classList.add('hidden');
  document.getElementById('run-summary').classList.remove('hidden');
  
  // Calculate final distance from GPS if available
  if (freeRunState.gpsCoordinates.length > 1 && !freeRunState.isDemoMode) {
    let totalDistance = 0;
    for (let i = 1; i < freeRunState.gpsCoordinates.length; i++) {
      const prev = freeRunState.gpsCoordinates[i - 1];
      const curr = freeRunState.gpsCoordinates[i];
      const dist = calculateHaversineDistance(prev.lat, prev.lng, curr.lat, curr.lng);
      if (dist < 0.05) { // Filter out GPS noise
        totalDistance += dist;
      }
    }
    freeRunState.distance = totalDistance;
  }
  
  // Update GPS badge in summary
  const gpsBadge = document.getElementById('summary-gps-badge');
  if (gpsBadge) {
    if (freeRunState.gpsEnabled && !freeRunState.isDemoMode) {
      gpsBadge.textContent = '📍 GPS Tracked';
      gpsBadge.style.display = 'inline-block';
      gpsBadge.style.background = 'var(--color-green-light)';
      gpsBadge.style.color = 'var(--color-green-dark)';
    } else if (freeRunState.isDemoMode) {
      gpsBadge.textContent = '🎮 Demo Mode';
      gpsBadge.style.display = 'inline-block';
      gpsBadge.style.background = '#FEF3C7';
      gpsBadge.style.color = '#92400E';
    } else {
      gpsBadge.style.display = 'none';
    }
  }
  
  // Calculate final stats
  const hours = Math.floor(freeRunState.elapsedSeconds / 3600);
  const minutes = Math.floor((freeRunState.elapsedSeconds % 3600) / 60);
  const seconds = freeRunState.elapsedSeconds % 60;
  const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  let pace = '0:00';
  if (freeRunState.distance > 0 && freeRunState.elapsedSeconds > 0) {
    const paceMinutes = freeRunState.elapsedSeconds / 60 / freeRunState.distance;
    const paceMin = Math.floor(paceMinutes);
    const paceSec = Math.floor((paceMinutes - paceMin) * 60);
    pace = `${paceMin}:${String(paceSec).padStart(2, '0')}`;
  }
  
  const calories = Math.floor(freeRunState.distance * 100);
  
  // Update summary display
  document.getElementById('summary-distance').textContent = `${freeRunState.distance.toFixed(2)} mi`;
  document.getElementById('summary-time').textContent = timeStr;
  document.getElementById('summary-pace').textContent = `${pace} min/mi`;
  document.getElementById('summary-calories').textContent = `${calories} kcal`;
  
  // Format start time
  const startDate = freeRunState.startTime;
  const dateStr = startDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const timeOfDay = startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  document.getElementById('summary-start-time').textContent = `${dateStr} at ${timeOfDay}`;
  
  // Draw route on summary map
  drawSummaryMap();
  
  // Generate default run name
  const now = new Date();
  const hour = now.getHours();
  let timeOfDayName = 'Morning';
  if (hour >= 12 && hour < 17) timeOfDayName = 'Afternoon';
  else if (hour >= 17) timeOfDayName = 'Evening';
  
  const modeLabel = freeRunState.isDemoMode ? 'Demo ' : freeRunState.gpsEnabled ? 'GPS ' : '';
  document.getElementById('run-name-input').value = `${timeOfDayName} ${modeLabel}Run - ${freeRunState.distance.toFixed(2)} mi`;
}

function drawSummaryMap() {
  const canvas = document.getElementById('summary-route-canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if (freeRunState.route.length === 0) return;
  
  // Draw route
  ctx.strokeStyle = '#FFEB3B';
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  ctx.beginPath();
  freeRunState.route.forEach((point, index) => {
    const x = (point.x / 100) * canvas.width;
    const y = (point.y / 100) * canvas.height;
    
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.stroke();
  
  // Draw start marker
  const start = freeRunState.route[0];
  const startX = (start.x / 100) * canvas.width;
  const startY = (start.y / 100) * canvas.height;
  
  ctx.fillStyle = '#3B82F6';
  ctx.beginPath();
  ctx.arc(startX, startY, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1E40AF';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Draw end marker
  const end = freeRunState.route[freeRunState.route.length - 1];
  const endX = (end.x / 100) * canvas.width;
  const endY = (end.y / 100) * canvas.height;
  
  ctx.fillStyle = '#EF4444';
  ctx.beginPath();
  ctx.arc(endX, endY, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#DC2626';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function saveFreeRun() {
  const runName = document.getElementById('run-name-input').value.trim() || 'Free Run';
  
  // Calculate pace for storage
  let paceValue = 0;
  if (freeRunState.distance > 0 && freeRunState.elapsedSeconds > 0) {
    paceValue = freeRunState.elapsedSeconds / 60 / freeRunState.distance;
  }
  
  const completedRun = {
    id: nextCompletedRunId++,
    name: runName,
    date: freeRunState.startTime.toISOString().split('T')[0],
    time: freeRunState.startTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    distance: freeRunState.distance,
    elapsed_time: formatElapsedTime(freeRunState.elapsedSeconds),
    average_pace: paceValue,
    calories: Math.floor(freeRunState.distance * 100),
    route: freeRunState.route,
    gps_coordinates: freeRunState.gpsCoordinates,
    gps_enabled: freeRunState.gpsEnabled && !freeRunState.isDemoMode,
    is_demo_mode: freeRunState.isDemoMode,
    gps_accuracy: freeRunState.gpsAccuracy,
    user_id: currentUser.id
  };
  
  completedRuns.push(completedRun);
  
  console.log('Free run saved - GPS route available on map');
  
  alert('✅ Run saved successfully! View your GPS route on the Map page.');
  
  // Reset and return to free run page
  initializeFreeRun();
}

function discardRunSummary() {
  if (!confirm('Are you sure you want to discard this run?')) return;
  initializeFreeRun();
}

function formatElapsedTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// GPS Permission Request
function requestGpsPermission() {
  requestWebGps();
}

function requestWebGps() {
  if (!navigator.geolocation) {
    // Geolocation not supported
    showGpsError('unavailable', 'GPS is not supported by your browser');
    offerDemoMode();
    return;
  }
  
  // Check if we're on HTTPS or localhost
  const isSecure = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  
  if (!isSecure) {
    showGpsError('https', 'Location access requires a secure connection (HTTPS)');
    offerDemoMode();
    return;
  }
  
  updateGpsStatusDisplay('requesting');
  
  // Request permission and start watching position
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // Permission granted
      freeRunState.gpsEnabled = true;
      freeRunState.gpsStatus = 'searching';
      updateGpsStatusDisplay('searching');
      startGpsTracking();
      startRunWithGps();
    },
    (error) => {
      // Permission denied or error
      handleGpsError(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

function startGpsTracking() {
  if (!navigator.geolocation) return;
  
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  freeRunState.gpsWatchId = navigator.geolocation.watchPosition(
    (position) => {
      handleGpsPosition(position);
    },
    (error) => {
      console.error('GPS tracking error:', error);
      if (freeRunState.gpsStatus !== 'denied') {
        updateGpsStatusDisplay('searching');
      }
    },
    options
  );
}

function handleGpsPosition(position) {
  const { latitude, longitude, accuracy, speed } = position.coords;
  
  // Update GPS status to connected
  if (freeRunState.gpsStatus !== 'connected') {
    freeRunState.gpsStatus = 'connected';
    updateGpsStatusDisplay('connected');
  }
  
  // Store GPS data
  const currentGpsPoint = {
    lat: latitude,
    lng: longitude,
    timestamp: position.timestamp,
    accuracy: accuracy
  };
  
  freeRunState.gpsCoordinates.push(currentGpsPoint);
  freeRunState.gpsAccuracy = Math.round(accuracy);
  freeRunState.gpsSpeed = speed;
  
  // Calculate distance if we have a previous position
  if (freeRunState.lastGpsPosition) {
    const distanceIncrement = calculateHaversineDistance(
      freeRunState.lastGpsPosition.lat,
      freeRunState.lastGpsPosition.lng,
      latitude,
      longitude
    );
    
    // Only add distance if it's reasonable (not GPS noise)
    if (distanceIncrement < 0.05 && distanceIncrement > 0.0001) {
      freeRunState.distance += distanceIncrement;
    }
  }
  
  freeRunState.lastGpsPosition = currentGpsPoint;
  
  // Update map position (convert GPS to map coordinates)
  updateMapPositionFromGps(latitude, longitude);
  
  // Update FREE RUN Google Map with live GPS tracking
  updateFreeRunGoogleMap();
  
  // Also update main Maps tab if active
  const activePage = document.querySelector('.page.active');
  if (activePage && activePage.id === 'map-page' && googleMap) {
    showLiveGpsRouteOnMap();
  }
  
  // Update display
  updateFreeRunDisplay();
  drawFreeRunMap();
}

function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
  // Haversine formula to calculate distance between two GPS coordinates
  const R = 3958.8; // Earth's radius in miles
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function updateMapPositionFromGps(lat, lng) {
  // Convert GPS coordinates to map position (simple normalization)
  // This is a simplified conversion - in a real app you'd use proper map projection
  const latRange = 0.1; // Approximate range for local area
  const lngRange = 0.1;
  
  // Normalize to 0-100 range for map display
  const centerLat = freeRunState.gpsCoordinates[0]?.lat || lat;
  const centerLng = freeRunState.gpsCoordinates[0]?.lng || lng;
  
  const x = 50 + ((lng - centerLng) / lngRange) * 40;
  const y = 50 - ((lat - centerLat) / latRange) * 40;
  
  freeRunState.currentPosition = {
    x: Math.max(10, Math.min(90, x)),
    y: Math.max(10, Math.min(90, y))
  };
  
  freeRunState.route.push({ x: freeRunState.currentPosition.x, y: freeRunState.currentPosition.y });
}

function handleGpsError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      freeRunState.gpsStatus = 'denied';
      showGpsError('denied', '❌ GPS permission denied. You can enable it in your browser settings.');
      updateGpsStatusDisplay('denied');
      break;
    case error.POSITION_UNAVAILABLE:
      freeRunState.gpsStatus = 'unavailable';
      showGpsError('unavailable', '⚠️ GPS signal not found. Please ensure location services are enabled.');
      updateGpsStatusDisplay('unavailable');
      break;
    case error.TIMEOUT:
      freeRunState.gpsStatus = 'timeout';
      showGpsError('timeout', '⏱️ Location request timed out. Retrying...');
      updateGpsStatusDisplay('searching');
      // Retry after timeout
      setTimeout(() => {
        if (!freeRunState.isRunning || freeRunState.gpsStatus === 'timeout') {
          requestGpsPermission();
        }
      }, 3000);
      return;
    default:
      showGpsError('unknown', '❌ An unknown error occurred with GPS.');
      updateGpsStatusDisplay('unavailable');
  }
  
  // Offer demo mode
  offerDemoMode();
}

function showGpsError(type, message) {
  const statusEl = document.getElementById('map-status');
  statusEl.textContent = message;
  statusEl.style.color = type === 'denied' || type === 'unavailable' ? 'var(--color-error)' : 'var(--color-warning)';
}

function offerDemoMode() {
  const proceed = confirm(freeRunState.gpsStatus === 'denied' 
    ? 'GPS permission was denied. Would you like to continue in Demo Mode with simulated tracking?'
    : 'GPS is not available. Would you like to continue in Demo Mode with simulated tracking?');
  
  if (proceed) {
    startDemoMode();
  } else {
    // Reset to initial state
    resetFreeRunState();
    document.getElementById('start-run-btn').classList.remove('hidden');
    document.getElementById('map-status').textContent = 'Ready to start';
    document.getElementById('map-status').style.color = 'var(--color-text-secondary)';
  }
}

function startDemoMode() {
  freeRunState.isDemoMode = true;
  freeRunState.gpsEnabled = false;
  updateGpsStatusDisplay('demo');
  startRunWithGps(); // Use same start logic but with demo tracking
}

function startRunWithGps() {
  freeRunState.isRunning = true;
  freeRunState.isPaused = false;
  freeRunState.startTime = new Date();
  
  // Safety: Notify friends if enabled
  if (safetySettings.notifyFriendsWhenRunning) {
    notifyFriendsRunStarted();
  }
  
  // Safety: Enable live location sharing if allowed
  if (safetySettings.allowLiveTracking) {
    freeRunState.isSharingLocation = true;
    startLiveLocationSharing();
  }
  
  updateSafetyControls();
  
  if (freeRunState.route.length === 0) {
    freeRunState.route = [{ x: freeRunState.currentPosition.x, y: freeRunState.currentPosition.y }];
  }
  
  // Update UI
  document.getElementById('start-run-btn').classList.add('hidden');
  document.getElementById('pause-run-btn').classList.remove('hidden');
  document.getElementById('end-run-btn').classList.remove('hidden');
  document.getElementById('discard-run-btn').classList.remove('hidden');
  
  // Show SOS emergency button
  const sosBtn = document.getElementById('sos-emergency-btn');
  if (sosBtn) sosBtn.classList.remove('hidden');
  
  // Show safety status
  updateSafetyStatusDisplay();
  
  if (freeRunState.isDemoMode) {
    document.getElementById('map-status').textContent = '🎮 Demo Mode - Simulated Tracking';
    document.getElementById('map-status').style.color = 'var(--color-warning)';
  } else {
    document.getElementById('map-status').textContent = '📍 GPS Tracking Active';
    document.getElementById('map-status').style.color = 'var(--color-green-primary)';
  }
  
  // Start timer
  freeRunState.intervalId = setInterval(updateFreeRunTimer, 1000);
  
  // If demo mode, use simulated movement
  if (freeRunState.isDemoMode) {
    freeRunState.routeIntervalId = setInterval(simulateRunMovement, 2000);
  }
  // Otherwise GPS watchPosition handles position updates
}

function updateGpsStatusDisplay(status) {
  // Update map status text
  const statusMessages = {
    'inactive': 'Ready to start',
    'requesting': '📡 Requesting GPS permission...',
    'searching': '🔍 Searching for GPS signal...',
    'connected': `📍 GPS Connected${freeRunState.gpsAccuracy ? ' - Accuracy: ' + freeRunState.gpsAccuracy + 'm' : ''}`,
    'denied': '❌ GPS Permission Denied',
    'unavailable': '⚠️ GPS Unavailable',
    'demo': '🎮 Demo Mode Active'
  };
  
  const statusEl = document.getElementById('map-status');
  if (statusEl && !freeRunState.isRunning) {
    statusEl.textContent = statusMessages[status] || statusMessages.inactive;
    
    // Set color based on status
    if (status === 'connected') {
      statusEl.style.color = 'var(--color-green-primary)';
    } else if (status === 'searching' || status === 'requesting') {
      statusEl.style.color = 'var(--color-warning)';
    } else if (status === 'denied' || status === 'unavailable') {
      statusEl.style.color = 'var(--color-error)';
    } else if (status === 'demo') {
      statusEl.style.color = 'var(--color-warning)';
    } else {
      statusEl.style.color = 'var(--color-text-secondary)';
    }
  }
  
  // Update GPS info box
  const gpsInfoBox = document.getElementById('gps-info-box');
  const gpsStatusIndicator = document.getElementById('gps-status-indicator');
  const gpsAccuracyDisplay = document.getElementById('gps-accuracy-display');
  const gpsAccuracyValue = document.getElementById('gps-accuracy-value');
  
  if (freeRunState.isRunning && gpsInfoBox) {
    gpsInfoBox.style.display = 'block';
    
    // Update status indicator
    const indicatorText = {
      'inactive': 'Inactive',
      'requesting': 'Requesting...',
      'searching': 'Searching...',
      'connected': 'Connected ✅',
      'denied': 'Denied ❌',
      'unavailable': 'Unavailable ⚠️',
      'demo': 'Demo Mode 🎮'
    };
    
    if (gpsStatusIndicator) {
      gpsStatusIndicator.textContent = indicatorText[status] || 'Unknown';
    }
    
    // Show/hide accuracy
    if (status === 'connected' && freeRunState.gpsAccuracy && gpsAccuracyDisplay && gpsAccuracyValue) {
      gpsAccuracyDisplay.style.display = 'inline';
      gpsAccuracyValue.textContent = freeRunState.gpsAccuracy;
    } else if (gpsAccuracyDisplay) {
      gpsAccuracyDisplay.style.display = 'none';
    }
  } else if (gpsInfoBox) {
    gpsInfoBox.style.display = 'none';
  }
}

function renderCompletedRuns() {
  const container = document.getElementById('completed-runs-list');
  const userCompletedRuns = completedRuns.filter(r => r.user_id === currentUser.id);
  
  if (userCompletedRuns.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🏃</div><h3>No completed runs yet</h3><p>Start a free run to track your progress!</p><button class="btn btn--green" onclick="showPage(\'free-run\')">Start Free Run</button></div>';
    return;
  }
  
  container.innerHTML = userCompletedRuns.reverse().map(run => renderCompletedRunCard(run)).join('');
}

function renderCompletedRunCard(run) {
  // Determine tracking method badge
  let trackingBadge = '';
  if (run.gps_enabled) {
    trackingBadge = '<span style="font-size: var(--font-size-xs); padding: var(--space-4) var(--space-8); background: var(--color-green-light); color: var(--color-green-dark); border-radius: var(--radius-full); margin-left: var(--space-8); font-weight: var(--font-weight-medium);">📍 GPS</span>';
  } else if (run.is_demo_mode) {
    trackingBadge = '<span style="font-size: var(--font-size-xs); padding: var(--space-4) var(--space-8); background: #FEF3C7; color: #92400E; border-radius: var(--radius-full); margin-left: var(--space-8); font-weight: var(--font-weight-medium);">🎮 Demo</span>';
  }
  
  return `
    <div class="run-card">
      <div class="run-card-header">
        <h3>${run.name}${trackingBadge}</h3>
        <span class="badge" style="background: var(--color-green-light); color: var(--color-green-dark); border: 2px solid var(--color-green-primary);">Completed</span>
      </div>
      <div class="run-date-time">
        <span>📅 ${formatDate(run.date)}</span>
        <span>🕐 ${run.time}</span>
        <span>⏱️ ${run.elapsed_time}</span>
        ${run.gps_enabled && run.gps_accuracy ? `<span>🎯 ${run.gps_accuracy}m accuracy</span>` : ''}
      </div>
      <div class="run-details">
        <div class="stat-item">
          <span class="label">Distance</span>
          <span class="value">${run.distance.toFixed(2)} mi</span>
        </div>
        <div class="stat-item">
          <span class="label">Avg Pace</span>
          <span class="value">${Math.floor(run.average_pace)}:${String(Math.floor((run.average_pace % 1) * 60)).padStart(2, '0')}</span>
        </div>
        <div class="stat-item">
          <span class="label">Calories</span>
          <span class="value">${run.calories}</span>
        </div>
      </div>
      <div style="margin-top: var(--space-16);">
        <button class="btn btn--green btn--sm" onclick="viewCompletedRunDetails(${run.id})">View Route</button>
        <button class="btn btn--outline btn--sm" onclick="deleteCompletedRun(${run.id})">Delete</button>
      </div>
    </div>
  `;
}

function viewCompletedRunDetails(runId) {
  const run = completedRuns.find(r => r.id === runId);
  if (!run) return;
  
  // Tracking method display
  let trackingInfo = '';
  if (run.gps_enabled) {
    trackingInfo = `<div style="background: var(--color-gold-light); border: 1px solid var(--color-gold-primary); border-radius: var(--radius-base); padding: var(--space-12); margin-bottom: var(--space-16); text-align: center;">
      <div style="font-size: var(--font-size-sm); color: var(--color-gold-dark); font-weight: var(--font-weight-semibold);">📍 GPS Tracked Run</div>
      ${run.gps_accuracy ? `<div style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-top: var(--space-4);">Average Accuracy: ${run.gps_accuracy}m</div>` : ''}
      ${run.gps_coordinates && run.gps_coordinates.length > 0 ? `<div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">GPS Points: ${run.gps_coordinates.length}</div>` : ''}
    </div>`;
  } else if (run.is_demo_mode) {
    trackingInfo = `<div style="background: #FEF3C7; border: 1px solid #F59E0B; border-radius: var(--radius-base); padding: var(--space-12); margin-bottom: var(--space-16); text-align: center;">
      <div style="font-size: var(--font-size-sm); color: #92400E; font-weight: var(--font-weight-semibold);">🎮 Demo Mode Run</div>
      <div style="font-size: var(--font-size-xs); color: #78350F; margin-top: var(--space-4);">Simulated tracking</div>
    </div>`;
  }
  
  const modalHtml = `
    <div id="run-details-modal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000; padding: var(--space-20);" onclick="closeRunDetailsModal(event)">
      <div style="background: #FFFFFF; border: 3px solid var(--color-green-primary); border-radius: var(--radius-lg); padding: var(--space-32); max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto;" onclick="event.stopPropagation();">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-20);">
          <h2 style="color: var(--color-green-primary);">${run.name}</h2>
          <button onclick="closeRunDetailsModal()" style="background: none; border: none; font-size: var(--font-size-2xl); cursor: pointer; color: var(--color-text-secondary);">&times;</button>
        </div>
        
        ${trackingInfo}
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-16); margin-bottom: var(--space-20);">
          <div style="background: #FFFFFF; border: 2px solid var(--color-gold-primary); border-radius: var(--radius-base); padding: var(--space-16); text-align: center;">
            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">Distance</div>
            <div style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-gold-primary);">${run.distance.toFixed(2)} mi</div>
          </div>
          <div style="background: #FFFFFF; border: 2px solid var(--color-gold-primary); border-radius: var(--radius-base); padding: var(--space-16); text-align: center;">
            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">Time</div>
            <div style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-gold-primary);">${run.elapsed_time}</div>
          </div>
          <div style="background: #FFFFFF; border: 2px solid var(--color-gold-primary); border-radius: var(--radius-base); padding: var(--space-16); text-align: center;">
            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">Avg Pace</div>
            <div style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-gold-primary);">${Math.floor(run.average_pace)}:${String(Math.floor((run.average_pace % 1) * 60)).padStart(2, '0')}</div>
          </div>
          <div style="background: #FFFFFF; border: 2px solid var(--color-gold-primary); border-radius: var(--radius-base); padding: var(--space-16); text-align: center;">
            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">Calories</div>
            <div style="font-size: var(--font-size-2xl); font-weight: var(--font-weight-bold); color: var(--color-gold-primary);">${run.calories}</div>
          </div>
        </div>
        
        <div style="margin-bottom: var(--space-16);">
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-4);">Date & Time</div>
          <div>${formatDate(run.date)} at ${run.time}</div>
        </div>
        
        <div>
          <h3 style="margin-bottom: var(--space-12); color: var(--color-gold-dark);">Route</h3>
          <div style="width: 100%; height: 300px; background: linear-gradient(135deg, #E0F2F1 0%, #B2DFDB 100%); border-radius: var(--radius-base); border: 2px solid var(--color-gold-primary); position: relative; overflow: hidden;">
            <canvas id="modal-route-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></canvas>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  
  // Draw route
  setTimeout(() => {
    const canvas = document.getElementById('modal-route-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (run.route && run.route.length > 0) {
      ctx.strokeStyle = '#FFEB3B';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      ctx.beginPath();
      run.route.forEach((point, index) => {
        const x = (point.x / 100) * canvas.width;
        const y = (point.y / 100) * canvas.height;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      ctx.stroke();
      
      // Start marker
      const start = run.route[0];
      const startX = (start.x / 100) * canvas.width;
      const startY = (start.y / 100) * canvas.height;
      
      ctx.fillStyle = '#3B82F6';
      ctx.beginPath();
      ctx.arc(startX, startY, 6, 0, Math.PI * 2);
      ctx.fill();
      
      // End marker
      const end = run.route[run.route.length - 1];
      const endX = (end.x / 100) * canvas.width;
      const endY = (end.y / 100) * canvas.height;
      
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.arc(endX, endY, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }, 100);
}

function closeRunDetailsModal(event) {
  const modal = document.getElementById('run-details-modal');
  if (modal) {
    modal.remove();
  }
}

function deleteCompletedRun(runId) {
  if (!confirm('Are you sure you want to delete this run?')) return;
  
  const index = completedRuns.findIndex(r => r.id === runId);
  if (index !== -1) {
    completedRuns.splice(index, 1);
    renderCompletedRuns();
  }
}

// Safety Feature Functions

function saveSafetySettings() {
  const notifyToggle = document.getElementById('safety-notify-friends');
  const liveTrackingToggle = document.getElementById('safety-live-tracking');
  const emergencyContact = document.getElementById('safety-emergency-contact');
  
  if (notifyToggle) safetySettings.notifyFriendsWhenRunning = notifyToggle.checked;
  if (liveTrackingToggle) safetySettings.allowLiveTracking = liveTrackingToggle.checked;
  if (emergencyContact) safetySettings.emergencyContactPhone = emergencyContact.value;
  
  alert('✅ Safety settings saved successfully!');
  console.log('Safety settings:', safetySettings);
}

function loadSafetySettings() {
  const notifyToggle = document.getElementById('safety-notify-friends');
  const liveTrackingToggle = document.getElementById('safety-live-tracking');
  const emergencyContact = document.getElementById('safety-emergency-contact');
  
  if (notifyToggle) notifyToggle.checked = safetySettings.notifyFriendsWhenRunning;
  if (liveTrackingToggle) liveTrackingToggle.checked = safetySettings.allowLiveTracking;
  if (emergencyContact) emergencyContact.value = safetySettings.emergencyContactPhone || '';
}

function openSosContactsModal() {
  const myData = getFriendsData(currentUser.id);
  const friends = myData.friends.map(id => getUserById(id)).filter(u => u);
  
  if (friends.length === 0) {
    alert('You need to add friends before configuring SOS contacts.');
    return;
  }
  
  const modalHtml = `
    <div id="sos-contacts-modal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10000; padding: var(--space-20);" onclick="closeSosContactsModal(event)">
      <div style="background: #FFFFFF; border: 3px solid var(--color-gold-primary); border-radius: var(--radius-lg); padding: var(--space-32); max-width: 500px; width: 100%; max-height: 90vh; overflow-y: auto;" onclick="event.stopPropagation();">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-20);">
          <h2 style="color: var(--color-gold-primary);">🚨 SOS Emergency Contacts</h2>
          <button onclick="closeSosContactsModal()" style="background: none; border: none; font-size: var(--font-size-2xl); cursor: pointer; color: var(--color-text-secondary);">&times;</button>
        </div>
        
        <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-20);">Select friends who will receive emergency SOS alerts with your location during runs.</p>
        
        <div id="sos-contacts-list" style="margin-bottom: var(--space-20);">
          ${friends.map(friend => {
            const isSelected = safetySettings.sosContacts.includes(friend.id);
            const avatarDisplay = getAvatarDisplay(friend);
            const avatarStyle = getAvatarStyle(friend);
            return `
              <label style="display: flex; align-items: center; padding: var(--space-12); border: 2px solid var(--color-gold-primary); border-radius: var(--radius-base); margin-bottom: var(--space-8); cursor: pointer; background: ${isSelected ? 'rgba(212, 175, 55, 0.1)' : '#FFFFFF'};">
                <input type="checkbox" class="sos-contact-checkbox" data-user-id="${friend.id}" ${isSelected ? 'checked' : ''} style="width: 18px; height: 18px; margin-right: var(--space-12); cursor: pointer; accent-color: var(--color-gold-primary);">
                <div style="width: 40px; height: 40px; border-radius: 50%; ${avatarStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: 16px; margin-right: var(--space-12); flex-shrink: 0;">${avatarDisplay}</div>
                <div>
                  <div style="font-weight: var(--font-weight-semibold);">${friend.name}</div>
                  <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">${friend.city}</div>
                </div>
              </label>
            `;
          }).join('')}
        </div>
        
        <div style="display: flex; gap: var(--space-8);">
          <button class="btn btn--green" onclick="saveSosContacts()">Save SOS Contacts</button>
          <button class="btn btn--secondary" onclick="closeSosContactsModal()">Cancel</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeSosContactsModal(event) {
  const modal = document.getElementById('sos-contacts-modal');
  if (modal) modal.remove();
}

function saveSosContacts() {
  const checkboxes = document.querySelectorAll('.sos-contact-checkbox');
  safetySettings.sosContacts = [];
  
  checkboxes.forEach(cb => {
    if (cb.checked) {
      safetySettings.sosContacts.push(parseInt(cb.getAttribute('data-user-id')));
    }
  });
  
  updateSosContactsSummary();
  closeSosContactsModal();
  alert(`✅ SOS contacts updated: ${safetySettings.sosContacts.length} friend${safetySettings.sosContacts.length !== 1 ? 's' : ''} selected`);
}

function updateSosContactsSummary() {
  const summaryEl = document.getElementById('sos-contacts-summary');
  if (!summaryEl) return;
  
  if (safetySettings.sosContacts.length === 0) {
    summaryEl.innerHTML = '<em>No SOS contacts selected - all friends will be notified</em>';
  } else {
    const contactNames = safetySettings.sosContacts.map(id => {
      const user = getUserById(id);
      return user ? user.name : '';
    }).filter(n => n).join(', ');
    summaryEl.innerHTML = `<strong>${safetySettings.sosContacts.length} contact${safetySettings.sosContacts.length !== 1 ? 's' : ''}:</strong> ${contactNames}`;
  }
}

function notifyFriendsRunStarted() {
  const myData = getFriendsData(currentUser.id);
  const notificationId = Date.now();
  
  // Create notification for all friends
  myData.friends.forEach(friendId => {
    runNotifications.push({
      id: notificationId,
      runnerId: currentUser.id,
      runnerName: currentUser.name,
      friendId: friendId,
      type: 'run-started',
      timestamp: new Date(),
      acknowledged: false
    });
  });
  
  // Add to active runners list
  activeRunners.push({
    userId: currentUser.id,
    userName: currentUser.name,
    startTime: new Date(),
    distance: 0,
    pace: 0,
    currentLocation: freeRunState.lastGpsPosition || null,
    friendsWatching: []
  });
  
  console.log(`📢 Friends notified: ${currentUser.name} started running`);
  console.log(`👥 ${myData.friends.length} friends can now watch live`);
}

function notifyFriendsRunEnded() {
  // Remove from active runners
  const index = activeRunners.findIndex(r => r.userId === currentUser.id);
  if (index !== -1) {
    activeRunners.splice(index, 1);
  }
  
  freeRunState.isSharingLocation = false;
  freeRunState.friendsWatching = [];
  
  console.log(`✅ Run ended - friends notified`);
}

function startLiveLocationSharing() {
  console.log('📍 Live location sharing enabled');
  console.log('👁️ Friends can watch your run in real-time');
}

function stopLiveLocationSharing() {
  console.log('🔒 Live location sharing stopped');
}

function sendSosAlert() {
  if (!freeRunState.isRunning) {
    alert('SOS can only be sent during an active run');
    return;
  }
  
  if (!confirm('🚨 SEND EMERGENCY SOS ALERT?\n\nThis will immediately notify your emergency contacts with your current location.')) {
    return;
  }
  
  const myData = getFriendsData(currentUser.id);
  const recipients = safetySettings.sosContacts.length > 0 ? safetySettings.sosContacts : myData.friends;
  
  if (recipients.length === 0) {
    alert('⚠️ No emergency contacts available. Add friends first.');
    return;
  }
  
  const sosAlert = {
    alertId: Date.now(),
    userId: currentUser.id,
    userName: currentUser.name,
    location: freeRunState.lastGpsPosition || { lat: 0, lng: 0 },
    timestamp: new Date(),
    recipients: recipients,
    acknowledged: []
  };
  
  sosAlerts.push(sosAlert);
  
  // Show SOS sent confirmation
  const confirmationHtml = `
    <div id="sos-confirmation" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #EF4444; color: white; padding: var(--space-32); border-radius: var(--radius-lg); z-index: 10001; text-align: center; box-shadow: 0 8px 24px rgba(0,0,0,0.3); min-width: 300px;">
      <div style="font-size: 48px; margin-bottom: var(--space-16);">🚨</div>
      <h2 style="margin-bottom: var(--space-12); color: white;">SOS ALERT SENT</h2>
      <p style="margin-bottom: var(--space-16); font-size: var(--font-size-lg);">Emergency contacts notified</p>
      <div style="background: rgba(255,255,255,0.2); padding: var(--space-12); border-radius: var(--radius-base); margin-bottom: var(--space-16);">
        <div style="font-size: var(--font-size-sm); margin-bottom: var(--space-4);"><strong>${recipients.length}</strong> contact${recipients.length !== 1 ? 's' : ''} alerted</div>
        <div style="font-size: var(--font-size-sm);">Location: ${freeRunState.lastGpsPosition ? '📍 GPS' : '❌ Unavailable'}</div>
      </div>
      <button class="btn" style="background: white; color: #EF4444; border: none;" onclick="closeSosConfirmation()">Close</button>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', confirmationHtml);
  
  console.log(`🚨 SOS ALERT SENT to ${recipients.length} contact${recipients.length !== 1 ? 's' : ''}`);
  console.log('📍 Location:', freeRunState.lastGpsPosition || 'Not available');
  console.log('⏰ Time:', new Date().toLocaleTimeString());
  
  // Auto-close after 5 seconds
  setTimeout(() => {
    closeSosConfirmation();
  }, 5000);
}

function closeSosConfirmation() {
  const confirmation = document.getElementById('sos-confirmation');
  if (confirmation) confirmation.remove();
}

function updateSafetyControls() {
  // This would update the UI to show watching status, etc.
  if (freeRunState.isRunning && freeRunState.isSharingLocation) {
    const watchingCount = freeRunState.friendsWatching.length;
    if (watchingCount > 0) {
      console.log(`👁️ ${watchingCount} friend${watchingCount !== 1 ? 's' : ''} watching your run`);
    }
  }
  updateSafetyStatusDisplay();
}

function updateSafetyStatusDisplay() {
  const safetyStatus = document.getElementById('safety-status');
  if (!safetyStatus || !freeRunState.isRunning) return;
  
  safetyStatus.classList.remove('hidden');
  
  // Update friends notified status
  const notifiedStatus = document.getElementById('friends-notified-status');
  if (notifiedStatus && safetySettings.notifyFriendsWhenRunning) {
    notifiedStatus.style.display = 'block';
  } else if (notifiedStatus) {
    notifiedStatus.style.display = 'none';
  }
  
  // Update watching status
  const watchingStatus = document.getElementById('friends-watching-status');
  const watchingCount = document.getElementById('watching-count');
  if (watchingStatus && safetySettings.allowLiveTracking) {
    watchingStatus.style.display = 'block';
    if (watchingCount) {
      // Simulate friends watching (in real app, this would be actual count)
      const count = Math.floor(Math.random() * 3); // 0-2 friends watching
      watchingCount.textContent = count;
      freeRunState.friendsWatching = Array(count).fill(0).map((_, i) => i + 1);
    }
  } else if (watchingStatus) {
    watchingStatus.style.display = 'none';
  }
  
  // Update location sharing status
  const locationStatus = document.getElementById('location-sharing-status');
  if (locationStatus && freeRunState.isSharingLocation) {
    locationStatus.style.display = 'block';
  } else if (locationStatus) {
    locationStatus.style.display = 'none';
  }
}

function renderFriendCard(user, type) {
  const distance = generateDistance(currentUser.location, user.location);
  const avatarDisplay = getAvatarDisplay(user);
  const avatarStyle = getAvatarStyle(user);
  const fontSize = user.profile_picture && user.profile_picture.length <= 3 ? 'var(--font-size-lg)' : '28px';
  const interests = user.running_interests || [];
  const interestTags = interests.slice(0, 3).map(i => `<span style="display: inline-block; padding: var(--space-4) var(--space-8); background: rgba(212, 175, 55, 0.15); color: #1A1A1A; border: 2px solid #D4AF37; border-radius: var(--radius-full); font-size: var(--font-size-xs); margin-right: var(--space-4); margin-bottom: var(--space-4);">${i}</span>`).join('');
  
  let actionButtons = '';
  
  if (type === 'friend') {
    actionButtons = `
      <button class="btn btn--green btn--sm" onclick="openChat(${user.id}); showPage('messages');">Message</button>
      <button class="btn btn--secondary btn--sm" onclick="removeFriend(${user.id})">Remove Friend</button>
    `;
  } else if (type === 'pending') {
    actionButtons = `
      <button class="btn btn--green btn--sm" onclick="acceptFriendRequest(${user.id})">Accept</button>
      <button class="btn btn--secondary btn--sm" onclick="declineFriendRequest(${user.id})">Decline</button>
    `;
  } else if (type === 'sent') {
    actionButtons = `
      <button class="btn btn--secondary btn--sm" disabled>Request Sent</button>
      <button class="btn btn--outline btn--sm" onclick="cancelFriendRequest(${user.id})">Cancel</button>
    `;
  } else if (type === 'find') {
    if (hasSentRequest(user.id)) {
      actionButtons = `
        <button class="btn btn--secondary btn--sm" disabled>Request Sent</button>
        <button class="btn btn--outline btn--sm" onclick="cancelFriendRequest(${user.id}); renderFindFriends();">Cancel</button>
      `;
    } else if (hasPendingRequest(user.id)) {
      actionButtons = `
        <button class="btn btn--green btn--sm" onclick="acceptFriendRequest(${user.id}); renderFindFriends();">Accept Request</button>
        <button class="btn btn--secondary btn--sm" onclick="declineFriendRequest(${user.id}); renderFindFriends();">Decline</button>
      `;
    } else {
      actionButtons = `<button class="btn btn--green btn--sm" onclick="sendFriendRequest(${user.id})">Add Friend</button>`;
    }
  }
  
  return `
    <div class="runner-card">
      <div style="display: flex; gap: var(--space-16); margin-bottom: var(--space-16);">
        <div style="width: 64px; height: 64px; border-radius: 50%; ${avatarStyle} display: flex; align-items: center; justify-content: center; font-weight: var(--font-weight-bold); font-size: ${fontSize}; flex-shrink: 0; border: 3px solid var(--color-green-border);">${avatarDisplay}</div>
        <div style="flex: 1;">
          <div class="runner-card-header" style="margin-bottom: 0;">
            <div class="runner-info">
              <h3 style="margin-bottom: var(--space-4);">${user.name}</h3>
              <div class="runner-meta">
                <span>${user.age} years old</span>
                <span>•</span>
                <span>${user.city}</span>
                ${type !== 'friend' ? `<span>•</span><span>${distance} miles away</span>` : ''}
              </div>
            </div>
            <span class="badge badge--${user.fitness_level}">${user.fitness_level}</span>
          </div>
        </div>
      </div>
      <div class="runner-stats">
        <div class="stat-item">
          <span class="label">Pace</span>
          <span class="value">${user.pace} min/mi</span>
        </div>
        <div class="stat-item">
          <span class="label">Distance</span>
          <span class="value">${user.distance_preference} mi</span>
        </div>
      </div>
      <div class="runner-bio">${user.bio}</div>
      ${interests.length > 0 ? `<div style="margin-top: var(--space-12); margin-bottom: var(--space-12);">${interestTags}</div>` : ''}
      <div class="card-actions">
        ${actionButtons}
      </div>
    </div>
  `;
}