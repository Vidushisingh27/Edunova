const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');

dotenv.config();

const app = express();

// ===== MIDDLEWARE ===== 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static('uploads'));

// ===== DATABASE CONNECTION ===== 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/edunova', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// ===== MULTER SETUP ===== 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// ===== MODELS ===== 

// User Model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  phone: String,
  bio: String,
  profileImage: String,
  learningPace: {
    type: String,
    enum: ['slow', 'moderate', 'fast'],
    default: 'moderate'
  },
  dailyGoal: {
    type: Number,
    default: 60
  },
  emailNotifications: {
    type: Boolean,
    default: true
  },
  pushNotifications: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

// Course Model
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  description: String,
  rating: {
    type: Number,
    default: 4.5
  },
  studentsCount: {
    type: Number,
    default: 0
  },
  topics: [{
    id: Number,
    title: String,
    icon: String,
    duration: Number,
    lessons: Number,
    description: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Course = mongoose.model('Course', courseSchema);

// Topic Progress Model
const topicProgressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  topicId: Number,
  status: {
    type: String,
    enum: ['not-started', 'in-progress', 'completed'],
    default: 'not-started'
  },
  progress: {
    type: Number,
    default: 0
  },
  quizScore: Number,
  completedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const TopicProgress = mongoose.model('TopicProgress', topicProgressSchema);

// Note Model
const noteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  topicId: Number,
  title: String,
  content: {
    type: String,
    required: true
  },
  subject: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Note = mongoose.model('Note', noteSchema);

// Subject Model
const subjectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  color: String,
  teacher: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Subject = mongoose.model('Subject', subjectSchema);

// ===== MIDDLEWARE: VERIFY TOKEN ===== 
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// ===== AUTH ROUTES ===== 

// Register
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password
    });

    await user.save();

    // Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Google Auth
app.post('/api/auth/google-auth', async (req, res) => {
  try {
    const { email, name, picture } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name,
        email,
        password: Math.random().toString(36).slice(-8),
        profileImage: picture
      });
      await user.save();
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Google auth successful',
      authToken: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage || picture
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== USER ROUTES ===== 

// Get user profile
app.get('/api/users/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user profile
app.put('/api/users/profile', verifyToken, async (req, res) => {
  try {
    const { name, phone, bio, learningPace, dailyGoal, emailNotifications, pushNotifications } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        name,
        phone,
        bio,
        learningPace,
        dailyGoal,
        emailNotifications,
        pushNotifications
      },
      { new: true }
    ).select('-password');

    res.json({
      message: 'Profile updated successfully',
      user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update profile image
app.post('/api/users/profile-image', verifyToken, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      { profileImage: `/uploads/${req.file.filename}` },
      { new: true }
    ).select('-password');

    res.json({
      message: 'Profile image updated',
      user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== COURSE ROUTES ===== 

// Get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get course by ID
app.get('/api/courses/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create course (Admin)
app.post('/api/courses', async (req, res) => {
  try {
    const { title, instructor, description, topics } = req.body;

    const course = new Course({
      title,
      instructor,
      description,
      topics
    });

    await course.save();

    res.status(201).json({
      message: 'Course created successfully',
      course
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== TOPIC PROGRESS ROUTES ===== 

// Get user's topic progress
app.get('/api/progress/:courseId', verifyToken, async (req, res) => {
  try {
    const progress = await TopicProgress.find({
      userId: req.userId,
      courseId: req.params.courseId
    });

    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update topic progress
app.post('/api/progress/update', verifyToken, async (req, res) => {
  try {
    const { courseId, topicId, status, progress, quizScore } = req.body;

    let topicProgress = await TopicProgress.findOne({
      userId: req.userId,
      courseId,
      topicId
    });

    if (!topicProgress) {
      topicProgress = new TopicProgress({
        userId: req.userId,
        courseId,
        topicId,
        status,
        progress,
        quizScore,
        completedAt: status === 'completed' ? new Date() : null
      });
    } else {
      topicProgress.status = status || topicProgress.status;
      topicProgress.progress = progress || topicProgress.progress;
      topicProgress.quizScore = quizScore || topicProgress.quizScore;
      if (status === 'completed') {
        topicProgress.completedAt = new Date();
      }
    }

    await topicProgress.save();

    res.json({
      message: 'Progress updated successfully',
      progress: topicProgress
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get overall progress
app.get('/api/progress/overall/:courseId', verifyToken, async (req, res) => {
  try {
    const progress = await TopicProgress.find({
      userId: req.userId,
      courseId: req.params.courseId
    });

    const completed = progress.filter(p => p.status === 'completed').length;
    const total = progress.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    res.json({
      completed,
      total,
      percentage,
      progress
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== NOTES ROUTES ===== 

// Get all notes for user
app.get('/api/notes', verifyToken, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get notes for specific topic
app.get('/api/notes/:courseId/:topicId', verifyToken, async (req, res) => {
  try {
    const notes = await Note.find({
      userId: req.userId,
      courseId: req.params.courseId,
      topicId: req.params.topicId
    });

    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create note
app.post('/api/notes', verifyToken, async (req, res) => {
  try {
    const { courseId, topicId, title, content, subject } = req.body;

    const note = new Note({
      userId: req.userId,
      courseId,
      topicId,
      title,
      content,
      subject
    });

    await note.save();

    res.status(201).json({
      message: 'Note created successfully',
      note
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update note
app.put('/api/notes/:id', verifyToken, async (req, res) => {
  try {
    const { title, content, subject } = req.body;

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        subject,
        updatedAt: new Date()
      },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json({
      message: 'Note updated successfully',
      note
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete note
app.delete('/api/notes/:id', verifyToken, async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== SUBJECT ROUTES ===== 

// Get all subjects for user
app.get('/api/subjects', verifyToken, async (req, res) => {
  try {
    const subjects = await Subject.find({ userId: req.userId });
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create subject
app.post('/api/subjects', verifyToken, async (req, res) => {
  try {
    const { name, color, teacher, description } = req.body;

    const subject = new Subject({
      userId: req.userId,
      name,
      color,
      teacher,
      description
    });

    await subject.save();

    res.status(201).json({
      message: 'Subject created successfully',
      subject
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update subject
app.put('/api/subjects/:id', verifyToken, async (req, res) => {
  try {
    const { name, color, teacher, description } = req.body;

    const subject = await Subject.findByIdAndUpdate(
      req.params.id,
      { name, color, teacher, description },
      { new: true }
    );

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    res.json({
      message: 'Subject updated successfully',
      subject
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete subject
app.delete('/api/subjects/:id', verifyToken, async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    res.json({ message: 'Subject deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== DASHBOARD STATS ===== 

// Get dashboard stats
app.get('/api/stats/dashboard', verifyToken, async (req, res) => {
  try {
    const courseId = req.query.courseId;

    const progress = await TopicProgress.find({
      userId: req.userId,
      ...(courseId && { courseId })
    });

    const completed = progress.filter(p => p.status === 'completed').length;
    const inProgress = progress.filter(p => p.status === 'in-progress').length;
    const notStarted = progress.filter(p => p.status === 'not-started').length;

    const avgScore = progress.length > 0
      ? Math.round(progress.reduce((sum, p) => sum + (p.quizScore || 0), 0) / progress.length)
      : 0;

    res.json({
      completed,
      inProgress,
      notStarted,
      total: progress.length,
      percentage: progress.length > 0 ? Math.round((completed / progress.length) * 100) : 0,
      avgScore
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== QUIZ ROUTES ===== 

// Submit quiz
app.post('/api/quiz/submit', verifyToken, async (req, res) => {
  try {
    const { courseId, topicId, score, answers } = req.body;

    const progress = await TopicProgress.findOneAndUpdate(
      {
        userId: req.userId,
        courseId,
        topicId
      },
      {
        quizScore: score,
        status: 'completed'
      },
      { new: true, upsert: true }
    );

    res.json({
      message: 'Quiz submitted successfully',
      score,
      progress
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== SEARCH ROUTES ===== 

// Search courses and topics
app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q;

    const courses = await Course.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { 'topics.title': { $regex: query, $options: 'i' } }
      ]
    });

    res.json({ courses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== ACTIVITY ROUTES ===== 

// Get user activity
app.get('/api/activity', verifyToken, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .limit(10);

    const progress = await TopicProgress.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .limit(10)
      .populate('courseId');

    const activity = [
      ...progress.map(p => ({
        type: 'topic',
        title: `${p.status === 'completed' ? 'Completed' : 'Started'} topic`,
        date: p.createdAt
      })),
      ...notes.map(n => ({
        type: 'note',
        title: `Created note: ${n.title}`,
        date: n.createdAt
      }))
    ].sort((a, b) => b.date - a.date);

    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===== ERROR HANDLING ===== 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// ===== START SERVER ===== 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});