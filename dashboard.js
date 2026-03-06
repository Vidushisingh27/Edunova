// ===== DATA MANAGEMENT WITH TOPICS ===== 
const dashboardData = {
  courses: [
    {
      id: 1,
      title: "Operating Systems",
      instructor: "Dr. Tech Expert",
      progress: 65,
      status: "in-progress",
      gradientClass: "gradient-1",
      icon: "fas fa-microchip",
      topics: [
        { id: 1, name: "Introduction to OS", status: "completed" },
        { id: 2, name: "Process Management", status: "completed" },
        { id: 3, name: "Memory Management", status: "in-progress" },
        { id: 4, name: "File Systems", status: "not-started" }
      ]
    },
    {
      id: 2,
      title: "Database Design",
      instructor: "Prof. Data Master",
      progress: 100,
      status: "completed",
      gradientClass: "gradient-1",
      icon: "fas fa-database",
      topics: [
        { id: 1, name: "SQL Basics", status: "completed" },
        { id: 2, name: "Normalization", status: "completed" },
        { id: 3, name: "Indexing", status: "completed" },
        { id: 4, name: "Advanced Queries", status: "completed" }
      ]
    },
    {
      id: 3,
      title: "Computer Networks",
      instructor: "Prof. Network Guru",
      progress: 0,
      status: "not-started",
      gradientClass: "gradient-2",
      icon: "fas fa-network-wired",
      topics: [
        { id: 1, name: "OSI Model", status: "not-started" },
        { id: 2, name: "TCP/IP", status: "not-started" },
        { id: 3, name: "Routing Protocols", status: "not-started" },
        { id: 4, name: "Network Security", status: "not-started" }
      ]
    },
    {
      id: 4,
      title: "Web Development",
      instructor: "Mr. Web Master",
      progress: 45,
      status: "in-progress",
      gradientClass: "gradient-3",
      icon: "fas fa-code",
      topics: [
        { id: 1, name: "HTML & CSS", status: "completed" },
        { id: 2, name: "JavaScript Basics", status: "in-progress" },
        { id: 3, name: "React Fundamentals", status: "not-started" },
        { id: 4, name: "Backend Integration", status: "not-started" }
      ]
    }
  ],
  activities: [
    {
      id: 1,
      type: "completed",
      title: "Completed Topic: Memory Management",
      subtitle: "Operating Systems Course",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "learning",
      title: "Started Learning: File Systems",
      subtitle: "Operating Systems Course",
      time: "5 hours ago"
    },
    {
      id: 3,
      type: "completed",
      title: "Completed Course: Database Design",
      subtitle: "All 4 topics mastered",
      time: "Yesterday"
    }
  ]
};

// ===== INITIALIZATION ===== 
window.addEventListener('load', () => {
  const authToken = localStorage.getItem('authToken');
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  if (!authToken || !user) {
    window.location.href = 'login.html';
    return;
  }

  document.getElementById('userName').textContent = user.name.split(' ')[0];
  document.getElementById('userAvatar').src = user.profileImage;
  document.querySelector('.user-name').textContent = user.name;
  document.querySelector('.user-email').textContent = user.email;
  document.getElementById('fullName').value = user.name;
  document.getElementById('email').value = user.email;

  // Load data
  loadDashboardData();
  loadCoursesGrid();
  loadActivityList();
  setupEventListeners();
});

// ===== LOAD DASHBOARD DATA ===== 
function loadDashboardData() {
  const dashboardCourses = document.getElementById('dashboardCourses');
  dashboardCourses.innerHTML = '';

  dashboardData.courses.forEach(course => {
    const courseCard = createCourseCard(course);
    dashboardCourses.appendChild(courseCard);
  });
}

// ===== CREATE COURSE CARD WITH TOPICS ===== 
function createCourseCard(course) {
  const card = document.createElement('div');
  card.className = 'course-card';

  const statusBadgeClass = course.status === 'completed' ? 'completed' : 
                           course.status === 'in-progress' ? '' : 'not-started';

  const topicsHTML = course.topics.map(topic => `
    <div class="topic-item">
      <div class="topic-icon ${topic.status}">
        ${topic.status === 'completed' ? '✓' : topic.status === 'in-progress' ? '→' : '○'}
      </div>
      <span class="topic-name">${topic.name}</span>
      <span class="topic-status">${topic.status === 'completed' ? 'Done' : topic.status === 'in-progress' ? 'In Progress' : 'Pending'}</span>
    </div>
  `).join('');

  card.innerHTML = `
    <div class="course-header ${course.gradientClass}">
      <i class="${course.icon}"></i>
      <div class="course-badge ${statusBadgeClass}">
        ${course.status === 'completed' ? 'Completed' : 
          course.status === 'in-progress' ? 'In Progress' : 'Not Started'}
      </div>
    </div>
    <div class="course-info">
      <div class="course-title-section">
        <h3>${course.title}</h3>
      </div>
      <div class="course-instructor">
        <i class="fas fa-user-circle"></i>
        ${course.instructor}
      </div>
      <div class="progress-section">
        <div class="progress-header">
          <span>Progress</span>
          <span class="progress-percent">${course.progress}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${course.progress}%"></div>
        </div>
      </div>

      <div class="topics-section">
        <div class="topics-title">
          <i class="fas fa-list"></i>
          Topics (${course.topics.length})
        </div>
        <div class="topics-list">
          ${topicsHTML}
        </div>
      </div>

      <button class="btn-continue ${course.status === 'completed' ? 'disabled' : ''}">
        <span>${course.status === 'completed' ? 'Review Course' : 'Continue Learning'}</span>
        <i class="fas fa-${course.status === 'completed' ? 'redo' : 'arrow-right'}"></i>
      </button>
    </div>
  `;

  return card;
}

// ===== LOAD COURSES GRID ===== 
function loadCoursesGrid() {
  const coursesGrid = document.getElementById('coursesGrid');
  coursesGrid.innerHTML = '';

  dashboardData.courses.forEach(course => {
    const courseCard = createCourseCard(course);
    coursesGrid.appendChild(courseCard);
  });
}

// ===== LOAD ACTIVITY LIST ===== 
function loadActivityList() {
  const activityList = document.getElementById('activityList');
  activityList.innerHTML = '';

  dashboardData.activities.forEach(activity => {
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item';
    activityItem.innerHTML = `
      <div class="activity-icon ${activity.type}">
        <i class="fas fa-${
          activity.type === 'completed' ? 'check-circle' :
          activity.type === 'learning' ? 'book' :
          'star'
        }"></i>
      </div>
      <div class="activity-content">
        <p class="activity-title">${activity.title}</p>
        <p class="activity-subtitle">${activity.subtitle}</p>
      </div>
      <span class="activity-time">${activity.time}</span>
    `;
    activityList.appendChild(activityItem);
  });
}

// ===== SETUP EVENT LISTENERS ===== 
function setupEventListeners() {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const navItems = document.querySelectorAll('.nav-item');
  const logoutBtn = document.querySelector('.logout-btn');
  const userProfile = document.querySelector('.user-profile');
  const userMenu = document.querySelector('.user-menu');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Sidebar toggle
  sidebarToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });

  // Navigation
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      const pageName = item.getAttribute('data-page');
      switchPage(pageName);
      
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
      }
    });
  });

  // Logout
  logoutBtn?.addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = 'login.html';
    }
  });

  // User profile
  userProfile?.addEventListener('click', () => {
    userMenu?.classList.toggle('active');
  });

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      const coursesGrid = document.getElementById('coursesGrid');
      
      if (coursesGrid) {
        const cards = coursesGrid.querySelectorAll('.course-card');
        cards.forEach(card => {
          const badge = card.querySelector('.course-badge');
          const status = badge.textContent.toLowerCase().replace(' ', '-');
          
          if (filter === 'all') {
            card.style.display = 'block';
          } else if (filter === 'in-progress' && status === 'in-progress') {
            card.style.display = 'block';
          } else if (filter === 'completed' && status === 'completed') {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  });

  // Forms
  document.getElementById('profileForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  });

  document.getElementById('preferencesForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Preferences saved successfully!');
  });

  // Course buttons
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-continue:not(.disabled)')) {
      alert('Opening course...');
    }
  });
}

// ===== SWITCH PAGE FUNCTION ===== 
function switchPage(pageName) {
  const pages = document.querySelectorAll('.page-content');
  pages.forEach(page => page.classList.remove('page-active'));
  
  const targetPage = document.getElementById(pageName + 'Page');
  if (targetPage) {
    targetPage.classList.add('page-active');
  }
}

console.log('Dashboard loaded successfully!');