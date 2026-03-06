// Configuration - Replace with your actual Google Client ID
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID_HERE';

// Initialize on page load
window.addEventListener('load', () => {
  initializeGoogleSignIn();
  setupPasswordValidation();
});

// Initialize Google Sign-In
function initializeGoogleSignIn() {
  if (!window.google) {
    console.error('Google API not loaded');
    return;
  }

  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleSignIn,
    auto_select: false
  });

  // Render Login button
  google.accounts.id.renderButton(
    document.getElementById('googleSignInContainer'),
    {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      width: '100%'
    }
  );

  // Render Signup button
  google.accounts.id.renderButton(
    document.getElementById('googleSignUpContainer'),
    {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      width: '100%'
    }
  );
}

// Toggle between Login and Signup
function toggleForms(event) {
  event.preventDefault();

  const loginContainer = document.getElementById('loginFormContainer');
  const signupContainer = document.getElementById('signupFormContainer');
  const navToggleText = document.getElementById('navToggleText');

  loginContainer.classList.toggle('hidden');
  signupContainer.classList.toggle('hidden');

  // Update nav button text
  navToggleText.textContent = loginContainer.classList.contains('hidden') ? 'Sign In' : 'Sign Up';

  // Clear forms
  document.getElementById('emailLoginForm').reset();
  document.getElementById('emailSignupForm').reset();
  clearErrors();
}

// Toggle password visibility
function togglePasswordVisibility(fieldId) {
  const field = document.getElementById(fieldId);
  const icon = event.target;

  if (field.type === 'password') {
    field.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    field.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}

// Setup password validation
function setupPasswordValidation() {
  const passwordInput = document.getElementById('signupPassword');
  
  passwordInput?.addEventListener('input', () => {
    validatePassword(passwordInput.value);
  });
}

// Validate password strength
function validatePassword(password) {
  const lengthReq = document.getElementById('req-length');
  const uppercaseReq = document.getElementById('req-uppercase');
  const numberReq = document.getElementById('req-number');

  const PASSWORD_PATTERNS = {
    length: /.{8,}/,
    uppercase: /[A-Z]/,
    number: /[0-9]/
  };

  // Check length
  if (PASSWORD_PATTERNS.length.test(password)) {
    lengthReq.classList.add('valid');
  } else {
    lengthReq.classList.remove('valid');
  }

  // Check uppercase
  if (PASSWORD_PATTERNS.uppercase.test(password)) {
    uppercaseReq.classList.add('valid');
  } else {
    uppercaseReq.classList.remove('valid');
  }

  // Check number
  if (PASSWORD_PATTERNS.number.test(password)) {
    numberReq.classList.add('valid');
  } else {
    numberReq.classList.remove('valid');
  }
}

// Email Login Handler
async function handleEmailLogin(event) {
  event.preventDefault();
  clearErrors();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  // Validation
  if (!validateLoginForm(email, password)) {
    return;
  }

  try {
    showToast('Signing in...', 'warning');

    // Simulate successful login - Replace with actual backend call
    setTimeout(() => {
      // Store auth data
      localStorage.setItem('authToken', 'sample-token-' + Date.now());
      localStorage.setItem('user', JSON.stringify({
        id: 1,
        name: email.split('@')[0],
        email: email,
        profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email
      }));

      showToast(`Welcome back!`, 'success');

      // Redirect to dashboard after 1.5 seconds
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    }, 1000);

  } catch (error) {
    console.error('Login error:', error);
    showToast('An error occurred. Please try again.', 'error');
  }
}

// Email Signup Handler
async function handleEmailSignup(event) {
  event.preventDefault();
  clearErrors();

  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  const agreeTerms = document.getElementById('agreeTerms').checked;

  // Validation
  if (!validateSignupForm(name, email, password, confirmPassword, agreeTerms)) {
    return;
  }

  try {
    showToast('Creating your account...', 'warning');

    // Simulate successful signup - Replace with actual backend call
    setTimeout(() => {
      // Store auth data
      localStorage.setItem('authToken', 'sample-token-' + Date.now());
      localStorage.setItem('user', JSON.stringify({
        id: Date.now(),
        name: name,
        email: email,
        profileImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + name
      }));

      showToast(`Welcome to EduNOVA, ${name}!`, 'success');

      // Redirect to dashboard after 1.5 seconds
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    }, 1000);

  } catch (error) {
    console.error('Signup error:', error);
    showToast('An error occurred. Please try again.', 'error');
  }
}

// Google Sign-In Handler
async function handleGoogleSignIn(response) {
  try {
    const token = response.credential;

    // Decode JWT token to get user info
    const decoded = parseJwt(token);

    showToast('Authenticating with Google...', 'warning');

    // Simulate backend verification - Replace with actual backend call
    setTimeout(() => {
      // Store auth data
      localStorage.setItem('authToken', 'google-token-' + Date.now());
      localStorage.setItem('user', JSON.stringify({
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
        profileImage: decoded.picture || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + decoded.email
      }));

      showToast(`Welcome, ${decoded.name}!`, 'success');

      // Redirect to dashboard after 1.5 seconds
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1500);
    }, 1000);

  } catch (error) {
    console.error('Google sign-in error:', error);
    showToast('Google sign-in failed. Please try again.', 'error');
  }
}

// Validate Login Form
function validateLoginForm(email, password) {
  let isValid = true;

  if (!email) {
    showError('loginEmailError', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('loginEmailError', 'Please enter a valid email');
    isValid = false;
  }

  if (!password) {
    showError('loginPasswordError', 'Password is required');
    isValid = false;
  }

  return isValid;
}

// Validate Signup Form
function validateSignupForm(name, email, password, confirmPassword, agreeTerms) {
  let isValid = true;

  const PASSWORD_PATTERNS = {
    length: /.{8,}/,
    uppercase: /[A-Z]/,
    number: /[0-9]/
  };

  if (!name) {
    showError('signupNameError', 'Full name is required');
    isValid = false;
  }

  if (!email) {
    showError('signupEmailError', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError('signupEmailError', 'Please enter a valid email');
    isValid = false;
  }

  if (!password) {
    showError('signupPasswordError', 'Password is required');
    isValid = false;
  } else if (password.length < 8) {
    showError('signupPasswordError', 'Password must be at least 8 characters');
    isValid = false;
  } else if (!PASSWORD_PATTERNS.uppercase.test(password)) {
    showError('signupPasswordError', 'Password must contain an uppercase letter');
    isValid = false;
  } else if (!PASSWORD_PATTERNS.number.test(password)) {
    showError('signupPasswordError', 'Password must contain a number');
    isValid = false;
  }

  if (password !== confirmPassword) {
    showError('signupConfirmPasswordError', 'Passwords do not match');
    isValid = false;
  }

  if (!agreeTerms) {
    showError('signupTermsError', 'You must agree to the terms and conditions');
    isValid = false;
  }

  return isValid;
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show error message
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

// Clear all errors
function clearErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(el => {
    el.textContent = '';
    el.classList.remove('show');
  });
}

// Parse JWT token
function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error parsing JWT:', error);
    return null;
  }
}

// Show toast notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}