// Frontend API Client Helper

const API_BASE_URL = 'http://localhost:5000/api';

class APIClient {
  constructor() {
    this.token = localStorage.getItem('authToken');
  }

  getHeaders() {
    return {
      'Content-Type': 'application/json',
      ...(this.token && { 'Authorization': `Bearer ${this.token}` })
    };
  }

  async request(endpoint, options = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: this.getHeaders()
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // ===== AUTH =====
  async signup(name, email, password) {
    const data = await this.request('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password })
    });
    this.token = data.token;
    localStorage.setItem('authToken', data.token);
    return data;
  }

  async login(email, password) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    this.token = data.token;
    localStorage.setItem('authToken', data.token);
    return data;
  }

  async googleAuth(email, name, picture) {
    const data = await this.request('/auth/google-auth', {
      method: 'POST',
      body: JSON.stringify({ email, name, picture })
    });
    this.token = data.authToken;
    localStorage.setItem('authToken', data.authToken);
    return data;
  }

  // ===== USER =====
  async getUserProfile() {
    return this.request('/users/profile');
  }

  async updateProfile(profileData) {
    return this.request('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData)
    });
  }

  // ===== COURSES =====
  async getCourses() {
    return this.request('/courses');
  }

  async getCourse(courseId) {
    return this.request(`/courses/${courseId}`);
  }

  // ===== PROGRESS =====
  async getProgress(courseId) {
    return this.request(`/progress/${courseId}`);
  }

  async updateProgress(courseId, topicId, status, progress, quizScore) {
    return this.request('/progress/update', {
      method: 'POST',
      body: JSON.stringify({ courseId, topicId, status, progress, quizScore })
    });
  }

  async getOverallProgress(courseId) {
    return this.request(`/progress/overall/${courseId}`);
  }

  // ===== NOTES =====
  async getNotes() {
    return this.request('/notes');
  }

  async getTopicNotes(courseId, topicId) {
    return this.request(`/notes/${courseId}/${topicId}`);
  }

  async createNote(courseId, topicId, title, content, subject) {
    return this.request('/notes', {
      method: 'POST',
      body: JSON.stringify({ courseId, topicId, title, content, subject })
    });
  }

  async updateNote(noteId, title, content, subject) {
    return this.request(`/notes/${noteId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content, subject })
    });
  }

  async deleteNote(noteId) {
    return this.request(`/notes/${noteId}`, { method: 'DELETE' });
  }

  // ===== SUBJECTS =====
  async getSubjects() {
    return this.request('/subjects');
  }

  async createSubject(name, color, teacher, description) {
    return this.request('/subjects', {
      method: 'POST',
      body: JSON.stringify({ name, color, teacher, description })
    });
  }

  async updateSubject(subjectId, name, color, teacher, description) {
    return this.request(`/subjects/${subjectId}`, {
      method: 'PUT',
      body: JSON.stringify({ name, color, teacher, description })
    });
  }

  async deleteSubject(subjectId) {
    return this.request(`/subjects/${subjectId}`, { method: 'DELETE' });
  }

  // ===== STATS =====
  async getDashboardStats(courseId = null) {
    const query = courseId ? `?courseId=${courseId}` : '';
    return this.request(`/stats/dashboard${query}`);
  }

  // ===== QUIZ =====
  async submitQuiz(courseId, topicId, score, answers) {
    return this.request('/quiz/submit', {
      method: 'POST',
      body: JSON.stringify({ courseId, topicId, score, answers })
    });
  }

  // ===== SEARCH =====
  async search(query) {
    return this.request(`/search?q=${encodeURIComponent(query)}`);
  }

  // ===== ACTIVITY =====
  async getActivity() {
    return this.request('/activity');
  }
}

// Create global instance
const apiClient = new APIClient();