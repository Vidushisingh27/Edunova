// ===== MEME URLS ===== 
const memes = {
  correct: [
    "https://media.giphy.com/media/g9GznKK0ZX9q8/giphy.gif",
    "https://media.giphy.com/media/l0HlDtKPoYJhTQcQU/giphy.gif",
    "https://media.giphy.com/media/3o7TKU2fYKXHoFMaVi/giphy.gif",
    "https://media.giphy.com/media/l3q2K5jinAlZ7tRiA/giphy.gif",
    "https://media.giphy.com/media/xTiTnfAWMpJQD3ggtG/giphy.gif",
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/3o85xIO33l7RlmLR2I/giphy.gif",
  ],
  wrong: [
    "https://media.giphy.com/media/l3q2K5jinAlZ7tRiA/giphy.gif",
    "https://media.giphy.com/media/QWw1f5iAGR7dq/giphy.gif",
    "https://media.giphy.com/media/l0HlDtKPoYJhTQcQU/giphy.gif",
    "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    "https://media.giphy.com/media/12NUj8HBaNWI0O/giphy.gif",
    "https://media.giphy.com/media/l0IycYHHLe1sGDPAc/giphy.gif",
    "https://media.giphy.com/media/l0HlDoQj8O9tiA0gM/giphy.gif",
  ]
};

// ===== OS TOPICS DATA ===== 
const osTopics = [
  {
    id: 1,
    title: "Introduction to Operating Systems",
    icon: "📚",
    duration: 45,
    lessons: 3,
    status: "in-progress",
    description: "Learn the fundamentals and basic concepts of Operating Systems",
    intro: "An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs.",
    objectives: [
      "Understand what an operating system is",
      "Learn the role and purpose of an OS",
      "Identify different types of operating systems",
      "Understand basic OS components"
    ],
    concepts: [
      { name: "OS Definition", icon: "📖" },
      { name: "OS Functions", icon: "⚙️" },
      { name: "OS Types", icon: "💻" },
      { name: "OS Components", icon: "🔧" }
    ],
    animationUrl: "https://lottie.host/93bf14f4-1939-4cc4-ae82-db2d5d29c878/czJd2jWhXl.json",
    quiz: [
      {
        question: "What is the primary role of an operating system?",
        options: [
          "To manage hardware and software resources",
          "To store data",
          "To display graphics",
          "To connect to internet"
        ],
        correct: 0,
        explanation: "The OS acts as an intermediary between the user and hardware, managing all resources efficiently."
      },
      {
        question: "Which of the following is NOT a function of an OS?",
        options: [
          "Memory management",
          "CPU scheduling",
          "Creating artwork",
          "File management"
        ],
        correct: 2,
        explanation: "Creating artwork is a function of graphics software, not the OS itself."
      },
      {
        question: "Name three common operating systems.",
        options: [
          "Windows, Mac, Linux",
          "Chrome, Firefox, Safari",
          "Word, Excel, PowerPoint",
          "Python, Java, C++"
        ],
        correct: 0,
        explanation: "Windows, macOS, and Linux are the three most common operating systems."
      },
      {
        question: "What is a process?",
        options: [
          "A program in execution",
          "A file on disk",
          "A type of memory",
          "A storage device"
        ],
        correct: 0,
        explanation: "A process is a program that is currently running in memory with its own code, data, and execution context."
      }
    ]
  },
  {
    id: 2,
    title: "Process Management",
    icon: "⚙️",
    duration: 55,
    lessons: 4,
    status: "not-started",
    description: "Master the concepts of processes, threads, and process scheduling",
    intro: "Process management is a crucial aspect of operating systems. It involves creating, scheduling, and managing processes.",
    objectives: [
      "Understand process concept and lifecycle",
      "Learn about process states and transitions",
      "Study CPU scheduling algorithms",
      "Understand thread concepts"
    ],
    concepts: [
      { name: "Process States", icon: "🔄" },
      { name: "Process Control Block", icon: "📋" },
      { name: "CPU Scheduling", icon: "⏱️" },
      { name: "Threads", icon: "🧵" }
    ],
    animationUrl: "https://lottie.host/93bf14f4-1939-4cc4-ae82-db2d5d29c878/czJd2jWhXl.json",
    quiz: [
      {
        question: "What is a process?",
        options: [
          "A program in execution",
          "A file on disk",
          "System memory",
          "A CPU core"
        ],
        correct: 0,
        explanation: "A process is an instance of a program that is being executed by the operating system."
      },
      {
        question: "Which scheduling algorithm minimizes average waiting time?",
        options: [
          "FCFS",
          "Shortest Job First",
          "Round Robin",
          "Priority Scheduling"
        ],
        correct: 1,
        explanation: "Shortest Job First (SJF) scheduling algorithm minimizes the average waiting time among all processes."
      },
      {
        question: "What is context switching?",
        options: [
          "Saving and loading process state",
          "Switching networks",
          "Changing passwords",
          "Restarting computer"
        ],
        correct: 0,
        explanation: "Context switching is the process of saving and loading the state of processes to the CPU."
      },
      {
        question: "A process can be in how many states?",
        options: [
          "3 states",
          "5 states",
          "7 states",
          "10 states"
        ],
        correct: 1,
        explanation: "A process typically has 5 main states: New, Ready, Running, Waiting, and Terminated."
      }
    ]
  },
  {
    id: 3,
    title: "Memory Management",
    icon: "🧠",
    duration: 62,
    lessons: 5,
    status: "not-started",
    description: "Explore memory allocation, virtual memory, and paging techniques",
    intro: "Memory management is the functionality of an operating system that handles or manages primary memory.",
    objectives: [
      "Understand memory hierarchy",
      "Learn memory allocation strategies",
      "Master virtual memory concepts",
      "Study paging and segmentation"
    ],
    concepts: [
      { name: "Memory Hierarchy", icon: "📊" },
      { name: "Virtual Memory", icon: "💾" },
      { name: "Paging", icon: "📄" },
      { name: "Segmentation", icon: "📑" }
    ],
    animationUrl: "https://lottie.host/93bf14f4-1939-4cc4-ae82-db2d5d29c878/czJd2jWhXl.json",
    quiz: [
      {
        question: "What is virtual memory?",
        options: [
          "Memory on the network",
          "Extended main memory using disk",
          "Cache memory",
          "ROM"
        ],
        correct: 1,
        explanation: "Virtual memory is extended main memory using disk storage to simulate more RAM than physically available."
      },
      {
        question: "What is a page fault?",
        options: [
          "A CPU error",
          "When a required page is not in main memory",
          "A disk error",
          "Network disconnection"
        ],
        correct: 1,
        explanation: "A page fault occurs when a process tries to access a page that is not currently in main memory."
      },
      {
        question: "What is paging?",
        options: [
          "Dividing memory into equal-sized blocks",
          "Writing to disk",
          "Allocating memory to processes",
          "None of above"
        ],
        correct: 0,
        explanation: "Paging is the technique of dividing memory into fixed-size blocks called pages."
      },
      {
        question: "Which memory is fastest?",
        options: [
          "RAM",
          "Cache",
          "SSD",
          "HDD"
        ],
        correct: 1,
        explanation: "Cache memory is the fastest type of memory as it's built into the CPU."
      }
    ]
  },
  {
    id: 4,
    title: "File Systems",
    icon: "📁",
    duration: 50,
    lessons: 4,
    status: "not-started",
    description: "Understand file organization, disk management, and file allocation methods",
    intro: "A file system is a method and data structure that the operating system uses to control how data is stored and retrieved.",
    objectives: [
      "Understand file concepts",
      "Learn file organization methods",
      "Study disk space allocation",
      "Master file access methods"
    ],
    concepts: [
      { name: "File Structure", icon: "📄" },
      { name: "File Allocation", icon: "🗂️" },
      { name: "Directory Structures", icon: "🌳" },
      { name: "Disk Scheduling", icon: "💿" }
    ],
    animationUrl: "https://lottie.host/93bf14f4-1939-4cc4-ae82-db2d5d29c878/czJd2jWhXl.json",
    quiz: [
      {
        question: "What is a file system?",
        options: [
          "Method to control data storage",
          "A computer",
          "A network",
          "A program"
        ],
        correct: 0,
        explanation: "A file system is the method used by the OS to organize and control data storage."
      },
      {
        question: "Which file allocation method wastes the least space?",
        options: [
          "Contiguous",
          "Linked",
          "Indexed",
          "All waste same"
        ],
        correct: 2,
        explanation: "Indexed allocation wastes the least space and provides efficient access."
      },
      {
        question: "What is a directory?",
        options: [
          "A folder containing files",
          "A type of file",
          "A storage device",
          "A program"
        ],
        correct: 0,
        explanation: "A directory is a special file that contains references to other files and directories."
      },
      {
        question: "Which is fastest file access method?",
        options: [
          "Sequential",
          "Direct",
          "Indexed Sequential",
          "Random"
        ],
        correct: 1,
        explanation: "Direct access (random access) provides the fastest file access times."
      }
    ]
  },
  {
    id: 5,
    title: "Synchronization & Deadlock",
    icon: "🔒",
    duration: 58,
    lessons: 4,
    status: "not-started",
    description: "Learn process synchronization, critical sections, and deadlock handling",
    intro: "In a multi-process environment, synchronization is important to ensure proper coordination.",
    objectives: [
      "Understand race conditions",
      "Learn critical section problem",
      "Master synchronization mechanisms",
      "Study deadlock concepts"
    ],
    concepts: [
      { name: "Race Condition", icon: "🏁" },
      { name: "Critical Section", icon: "🔐" },
      { name: "Semaphores", icon: "🚦" },
      { name: "Deadlock", icon: "💥" }
    ],
    animationUrl: "https://lottie.host/93bf14f4-1939-4cc4-ae82-db2d5d29c878/czJd2jWhXl.json",
    quiz: [
      {
        question: "What is a race condition?",
        options: [
          "When output depends on order of process execution",
          "A computer competition",
          "A type of error",
          "A network issue"
        ],
        correct: 0,
        explanation: "A race condition occurs when multiple processes access shared resources unpredictably."
      },
      {
        question: "What is the critical section?",
        options: [
          "Code where shared resources are accessed",
          "Error handling code",
          "Main program section",
          "Comment section"
        ],
        correct: 0,
        explanation: "The critical section is the code where shared resources are accessed."
      },
      {
        question: "What is deadlock?",
        options: [
          "Situation where processes wait indefinitely",
          "System crash",
          "Program end",
          "Memory full"
        ],
        correct: 0,
        explanation: "Deadlock is a situation where processes wait indefinitely for each other's resources."
      },
      {
        question: "Which can prevent deadlock?",
        options: [
          "Circular wait prevention",
          "Restarting system",
          "Clearing memory",
          "Closing files"
        ],
        correct: 0,
        explanation: "Preventing circular wait is one way to avoid deadlock."
      }
    ]
  },
  {
    id: 6,
    title: "I/O Systems & Device Management",
    icon: "🖨️",
    duration: 48,
    lessons: 3,
    status: "not-started",
    description: "Understand I/O operations, device drivers, and I/O scheduling",
    intro: "I/O systems handle communication between the computer and external devices.",
    objectives: [
      "Learn I/O hardware and software organization",
      "Understand device drivers",
      "Study I/O scheduling algorithms",
      "Learn buffering and caching"
    ],
    concepts: [
      { name: "I/O Hardware", icon: "⚡" },
      { name: "Device Drivers", icon: "🔌" },
      { name: "Buffering", icon: "📦" },
      { name: "Interrupts", icon: "🔔" }
    ],
    animationUrl: "https://lottie.host/93bf14f4-1939-4cc4-ae82-db2d5d29c878/czJd2jWhXl.json",
    quiz: [
      {
        question: "What is a device driver?",
        options: [
          "Software that controls hardware device",
          "A person driving",
          "A program",
          "A file"
        ],
        correct: 0,
        explanation: "A device driver is software that allows the OS to communicate with hardware devices."
      },
      {
        question: "What is buffering?",
        options: [
          "Storing data temporarily",
          "Deleting data",
          "Encrypting data",
          "Compressing data"
        ],
        correct: 0,
        explanation: "Buffering is the temporary storage of data during I/O operations."
      },
      {
        question: "What is an interrupt?",
        options: [
          "Signal to CPU of an event",
          "A break in code",
          "A pause",
          "An error"
        ],
        correct: 0,
        explanation: "An interrupt is a signal to the CPU indicating that an event requires attention."
      },
      {
        question: "Which is fastest I/O method?",
        options: [
          "Polling",
          "Interrupts",
          "DMA",
          "Memory mapped"
        ],
        correct: 2,
        explanation: "Direct Memory Access (DMA) is the fastest I/O method."
      }
    ]
  },
  {
    id: 7,
    title: "Security & Protection",
    icon: "🛡️",
    duration: 52,
    lessons: 4,
    status: "not-started",
    description: "Explore OS security, access control, and protection mechanisms",
    intro: "Security is a critical aspect of modern operating systems.",
    objectives: [
      "Understand security goals",
      "Learn authentication and authorization",
      "Study access control mechanisms",
      "Learn encryption basics"
    ],
    concepts: [
      { name: "Authentication", icon: "🔑" },
      { name: "Authorization", icon: "👤" },
      { name: "Encryption", icon: "🔐" },
      { name: "Audit Trail", icon: "📝" }
    ],
    animationUrl: "https://lottie.host/93bf14f4-1939-4cc4-ae82-db2d5d29c878/czJd2jWhXl.json",
    quiz: [
      {
        question: "What is authentication?",
        options: [
          "Verifying user identity",
          "Allowing access",
          "Encrypting data",
          "Logging activity"
        ],
        correct: 0,
        explanation: "Authentication is the process of verifying that a user is who they claim to be."
      },
      {
        question: "What is authorization?",
        options: [
          "Granting permission to access resources",
          "Identifying users",
          "Encrypting files",
          "Backing up data"
        ],
        correct: 0,
        explanation: "Authorization determines what authenticated users are allowed to do."
      },
      {
        question: "What is an access control list?",
        options: [
          "List of permissions for users/groups",
          "List of files",
          "List of processes",
          "List of errors"
        ],
        correct: 0,
        explanation: "An ACL specifies which users or groups have access to resources."
      },
      {
        question: "What does encryption do?",
        options: [
          "Converts data to unreadable form",
          "Deletes data",
          "Backs up data",
          "Transfers data"
        ],
        correct: 0,
        explanation: "Encryption converts data into an unreadable form that can only be read with the correct key."
      }
    ]
  },
  {
    id: 8,
    title: "Case Studies & Real OS",
    icon: "💻",
    duration: 45,
    lessons: 3,
    status: "not-started",
    description: "Study real operating systems - Windows, Linux, and macOS implementations",
    intro: "Studying how real operating systems implement these concepts helps deepen understanding.",
    objectives: [
      "Understand Windows OS architecture",
      "Learn Linux kernel design",
      "Study macOS implementation",
      "Compare different OS approaches"
    ],
    concepts: [
      { name: "Windows Architecture", icon: "🪟" },
      { name: "Linux Kernel", icon: "🐧" },
      { name: "macOS Design", icon: "🍎" },
      { name: "Comparison", icon: "⚖️" }
    ],
    animationUrl: "https://lottie.host/93bf14f4-1939-4cc4-ae82-db2d5d29c878/czJd2jWhXl.json",
    quiz: [
      {
        question: "Which OS uses a microkernel approach?",
        options: [
          "macOS",
          "Windows",
          "Linux",
          "Android"
        ],
        correct: 0,
        explanation: "macOS uses a microkernel-based architecture (Mach kernel)."
      },
      {
        question: "Linux is based on which Unix variant?",
        options: [
          "POSIX",
          "SystemV",
          "BSD",
          "SVR4"
        ],
        correct: 0,
        explanation: "Linux follows the POSIX standard for Unix-like systems."
      },
      {
        question: "Which OS is open source?",
        options: [
          "Linux",
          "Windows",
          "macOS",
          "None"
        ],
        correct: 0,
        explanation: "Linux is an open-source operating system."
      },
      {
        question: "Which has the largest market share for mobile?",
        options: [
          "Android (Linux based)",
          "iOS",
          "Windows",
          "Blackberry"
        ],
        correct: 0,
        explanation: "Android, which is based on Linux, dominates the mobile OS market."
      }
    ]
  }
];

let currentTopic = null;
let quizAnswers = {};
let quizFeedback = {};

// ===== INITIALIZATION =====
window.addEventListener('load', () => {
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    window.location.href = 'login.html';
    return;
  }

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  document.getElementById('userName').textContent = user.name?.split(' ')[0] || 'Student';
  document.getElementById('userAvatar').src = user.profileImage || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Student';
  document.querySelector('.user-name').textContent = user.name || 'Student Name';
  document.querySelector('.user-email').textContent = user.email || 'student@edunova.com';
  document.getElementById('fullName').value = user.name || '';
  document.getElementById('email').value = user.email || '';

  loadDashboardData();
  setupEventListeners();
});

// ===== LOAD DASHBOARD DATA =====
function loadDashboardData() {
  const dashboardCourses = document.getElementById('dashboardCourses');
  dashboardCourses.innerHTML = '';

  osTopics.slice(0, 3).forEach(topic => {
    const card = createCourseCard(topic);
    dashboardCourses.appendChild(card);
  });
}

// ===== CREATE COURSE CARD =====
function createCourseCard(topic) {
  const card = document.createElement('div');
  card.className = 'course-card';

  const statusBadgeClass = topic.status === 'completed' ? 'completed' : 
                           topic.status === 'in-progress' ? '' : 'not-started';

  const progressPercent = topic.status === 'completed' ? '100' : topic.status === 'in-progress' ? '50' : '0';

  card.innerHTML = `
    <div class="course-header">
      ${topic.icon}
      <div class="course-badge ${statusBadgeClass}">
        ${topic.status === 'completed' ? 'Completed' : 
          topic.status === 'in-progress' ? 'In Progress' : 'Not Started'}
      </div>
    </div>
    <div class="course-info">
      <h3>${topic.title}</h3>
      <p class="course-instructor">
        <i class="fas fa-user-circle"></i>
        Dr. Tech Expert
      </p>
      <div class="progress-section">
        <div class="progress-header">
          <span>Progress</span>
          <span class="progress-percent">${progressPercent}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>
      </div>
      <div class="course-stats">
        <span><i class="fas fa-video"></i> ${topic.lessons} lessons</span>
        <span><i class="fas fa-clock"></i> ${topic.duration} mins</span>
      </div>
      <button class="btn-continue" onclick="openTopicModal(${topic.id})">
        <span>${topic.status === 'completed' ? 'Review' : 'Continue'}</span>
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  `;

  return card;
}

// ===== SHOW ALL COURSES =====
function showAllCourses() {
  switchPage('courses');
  loadTopicsGrid();
}

// ===== LOAD TOPICS GRID =====
function loadTopicsGrid() {
  const topicsGrid = document.getElementById('topicsGrid');
  topicsGrid.innerHTML = '';

  osTopics.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';

    const statusClass = topic.status === 'completed' ? 'completed' : 
                        topic.status === 'in-progress' ? 'in-progress' : '';

    card.innerHTML = `
      <div class="card-header">
        ${topic.icon}
        <div class="card-status ${statusClass}">
          ${topic.status === 'completed' ? '✓ Completed' : 
            topic.status === 'in-progress' ? 'In Progress' : 'Start'}
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${topic.title}</h3>
        <p class="card-description">${topic.description}</p>
        <div class="card-meta">
          <span><i class="fas fa-book"></i> ${topic.lessons} lessons</span>
          <span><i class="fas fa-clock"></i> ${topic.duration} mins</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openTopicModal(topic.id));
    topicsGrid.appendChild(card);
  });
}

// ===== OPEN TOPIC MODAL =====
function openTopicModal(topicId) {
  currentTopic = osTopics.find(t => t.id === topicId);
  if (!currentTopic) return;

  // Load topic content
  document.getElementById('topicTitle').textContent = currentTopic.title;
  document.getElementById('topicDescription').textContent = currentTopic.intro;
  document.getElementById('videoTitle').textContent = currentTopic.title;
  document.getElementById('videoDurationTime').textContent = currentTopic.duration;
  document.getElementById('videoDescription').textContent = currentTopic.description;
  document.getElementById('quizInfo').textContent = `Test your understanding of ${currentTopic.title}`;

  // Load objectives
  const objectivesList = document.getElementById('objectives');
  objectivesList.innerHTML = '';
  currentTopic.objectives.forEach(obj => {
    const li = document.createElement('li');
    li.textContent = obj;
    objectivesList.appendChild(li);
  });

  // Load concepts
  const conceptsList = document.getElementById('conceptsList');
  conceptsList.innerHTML = '';
  currentTopic.concepts.forEach(concept => {
    const div = document.createElement('div');
    div.className = 'concept-item';
    div.innerHTML = `
      <div class="concept-icon">${concept.icon}</div>
      <div class="concept-name">${concept.name}</div>
    `;
    conceptsList.appendChild(div);
  });

  // Load animation
  const player = document.getElementById('topicAnimation');
  player.src = currentTopic.animationUrl;

  // Load quiz
  loadQuiz();

  // Show modal
  const modal = document.getElementById('topicModal');
  modal.style.display = 'flex';

  // Reset tabs
  switchTab(null, 'intro');
}

// ===== CLOSE TOPIC MODAL =====
function closeTopicModal() {
  document.getElementById('topicModal').style.display = 'none';
  quizAnswers = {};
  quizFeedback = {};
}

// ===== SWITCH TAB =====
function switchTab(event, tabName) {
  // Update button states
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (event) {
    event.target.closest('.tab-btn').classList.add('active');
  } else {
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  }

  // Show tab content
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
}

// ===== LOAD QUIZ =====
function loadQuiz() {
  const quizContainer = document.getElementById('quizContainer');
  quizContainer.innerHTML = '';
  quizAnswers = {};
  quizFeedback = {};

  currentTopic.quiz.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-card';

    const optionsHtml = question.options.map((option, optionIndex) => `
      <label class="option" id="option-${index}-${optionIndex}">
        <input type="radio" name="question-${index}" value="${optionIndex}">
        <label>${option}</label>
      </label>
    `).join('');

    questionDiv.innerHTML = `
      <div class="question-number">Question ${index + 1} of ${currentTopic.quiz.length}</div>
      <div class="question-text">${question.question}</div>
      <div class="options" id="options-${index}">
        ${optionsHtml}
      </div>
      <div class="question-feedback" id="feedback-${index}" style="display: none;">
        <!-- Feedback will appear here -->
      </div>
    `;

    const radioButtons = questionDiv.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
      radio.addEventListener('change', (e) => {
        handleQuestionAnswer(index, parseInt(e.target.value), question);
      });
    });

    quizContainer.appendChild(questionDiv);
  });
}

// ===== HANDLE QUESTION ANSWER =====
function handleQuestionAnswer(questionIndex, selectedAnswer, question) {
  quizAnswers[questionIndex] = selectedAnswer;
  const isCorrect = selectedAnswer === question.correct;

  showQuestionFeedback(questionIndex, selectedAnswer, question, isCorrect);
}

// ===== SHOW QUESTION FEEDBACK =====
function showQuestionFeedback(questionIndex, selectedAnswer, question, isCorrect) {
  const feedbackDiv = document.getElementById(`feedback-${questionIndex}`);
  
  // Remove previous feedback
  feedbackDiv.innerHTML = '';
  feedbackDiv.style.display = 'none';

  // Update selected option styling
  document.querySelectorAll(`[id^="option-${questionIndex}"]`).forEach(opt => {
    opt.classList.remove('selected', 'correct', 'incorrect');
  });

  const selectedOption = document.getElementById(`option-${questionIndex}-${selectedAnswer}`);
  selectedOption.classList.add('selected');

  if (isCorrect) {
    selectedOption.classList.add('correct');
    feedbackDiv.innerHTML = `
      <div class="feedback-box correct-feedback">
        <div class="feedback-meme-small">
          <img src="${memes.correct[Math.floor(Math.random() * memes.correct.length)]}" alt="Correct!" style="width: 100%; border-radius: 6px;">
        </div>
        <div>
          <p class="feedback-text">✅ Correct!</p>
          <p class="feedback-explanation">${question.explanation || ''}</p>
        </div>
      </div>
    `;
  } else {
    selectedOption.classList.add('incorrect');
    const correctOption = document.getElementById(`option-${questionIndex}-${question.correct}`);
    if (correctOption) {
      correctOption.classList.add('correct');
    }
    feedbackDiv.innerHTML = `
      <div class="feedback-box incorrect-feedback">
        <div class="feedback-meme-small">
          <img src="${memes.wrong[Math.floor(Math.random() * memes.wrong.length)]}" alt="Incorrect!" style="width: 100%; border-radius: 6px;">
        </div>
        <div>
          <p class="feedback-text">❌ Incorrect!</p>
          <p class="feedback-explanation"><strong>Correct Answer:</strong> ${question.options[question.correct]}</p>
          <p class="feedback-explanation">${question.explanation || 'Try again!'}</p>
        </div>
      </div>
    `;
  }

  feedbackDiv.style.display = 'block';
}

// ===== SUBMIT QUIZ =====
function submitQuiz() {
  const totalQuestions = currentTopic.quiz.length;
  const answeredQuestions = Object.keys(quizAnswers).length;

  if (answeredQuestions < totalQuestions) {
    alert(`Please answer all ${totalQuestions} questions before submitting.`);
    return;
  }

  let correctAnswers = 0;
  quizFeedback = {};

  currentTopic.quiz.forEach((question, index) => {
    const isCorrect = quizAnswers[index] === question.correct;
    if (isCorrect) {
      correctAnswers++;
    }
    quizFeedback[index] = isCorrect;
  });

  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const message = percentage >= 80 ? '🎉 Excellent!' : 
                  percentage >= 60 ? '✅ Good Job!' : 
                  '📚 Keep Learning!';

  // Show result
  document.getElementById('quizContainer').style.display = 'none';
  document.getElementById('quizActions').style.display = 'none';
  document.getElementById('quizResult').style.display = 'block';
  document.getElementById('scoreValue').textContent = percentage + '%';
  document.getElementById('resultMessage').textContent = message;
  document.getElementById('correctCount').textContent = `${correctAnswers}/${totalQuestions}`;
  document.getElementById('incorrectCount').textContent = `${totalQuestions - correctAnswers}/${totalQuestions}`;

  // Show feedback meme
  showFeedbackMeme(percentage >= 60);

  // Save progress
  saveProgress(percentage);
}

// ===== SHOW FEEDBACK MEME =====
function showFeedbackMeme(isCorrect) {
  const memeArray = isCorrect ? memes.correct : memes.wrong;
  const randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];

  const memeContainer = document.createElement('div');
  memeContainer.className = 'feedback-meme-container';
  memeContainer.innerHTML = `
    <img src="${randomMeme}" alt="Feedback meme" class="feedback-meme">
  `;

  const resultContent = document.querySelector('.result-content');
  if (resultContent.querySelector('.feedback-meme-container')) {
    resultContent.querySelector('.feedback-meme-container').remove();
  }
  resultContent.insertBefore(memeContainer, resultContent.querySelector('.score-circle').nextSibling);
}

// ===== RETAKE QUIZ =====
function retakeQuiz() {
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizContainer').style.display = 'block';
  document.getElementById('quizActions').style.display = 'flex';
  loadQuiz();
}

// ===== SAVE PROGRESS =====
function saveProgress(score) {
  let userProgress = JSON.parse(localStorage.getItem('userProgress') || '{}');
  if (!userProgress.topics) userProgress.topics = {};
  
  userProgress.topics[currentTopic.id] = {
    status: score >= 60 ? 'completed' : 'in-progress',
    score: score,
    completedAt: new Date().toISOString()
  };

  localStorage.setItem('userProgress', JSON.stringify(userProgress));
}

// ===== SWITCH PAGE =====
function switchPage(pageName) {
  document.querySelectorAll('.page-content').forEach(page => page.classList.remove('page-active'));
  document.getElementById(pageName + 'Page').classList.add('page-active');

  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');

  sidebarToggle?.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const pageName = item.getAttribute('data-page');
      switchPage(pageName);
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
      }
    });
  });

  const userProfile = document.querySelector('.user-profile');
  const userMenu = document.querySelector('.user-menu');
  userProfile?.addEventListener('click', () => {
    userMenu?.classList.toggle('active');
  });

  document.getElementById('profileForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  });
}

// ===== LOGOUT =====
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = 'login.html';
  }
}

// ===== CREATE NEW NOTE =====
function createNewNote() {
  alert('Create note feature coming soon!');
}