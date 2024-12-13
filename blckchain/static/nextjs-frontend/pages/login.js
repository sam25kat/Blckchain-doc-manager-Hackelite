// Dynamically create the login page
const app = document.getElementById('app');

// Create Login Form
const createLoginForm = () => {
    const loginSection = document.createElement('section');

    const loginHeading = document.createElement('h2');
    loginHeading.textContent = 'Login';

    const loginForm = document.createElement('form');
    loginForm.action = '/login';
    loginForm.method = 'post';

    const usernameLabel = document.createElement('label');
    usernameLabel.for = 'username';
    usernameLabel.textContent = 'Username:';

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'username';
    usernameInput.name = 'username';
    usernameInput.required = true;

    const passwordLabel = document.createElement('label');
    passwordLabel.for = 'password';
    passwordLabel.textContent = 'Password:';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.name = 'password';
    passwordInput.required = true;

    const loginButton = document.createElement('button');
    loginButton.type = 'submit';
    loginButton.textContent = 'Login';

    loginForm.appendChild(usernameLabel);
    loginForm.appendChild(usernameInput);
    loginForm.appendChild(document.createElement('br'));
    loginForm.appendChild(passwordLabel);
    loginForm.appendChild(passwordInput);
    loginForm.appendChild(document.createElement('br'));
    loginForm.appendChild(loginButton);

    const signupLink = document.createElement('p');
    signupLink.innerHTML = `Don't have an account? <a href="/signup">Signup</a>`;

    loginSection.appendChild(loginHeading);
    loginSection.appendChild(loginForm);
    loginSection.appendChild(signupLink);

    return loginSection;
};

// Create Admin Login Form
const createAdminLoginForm = () => {
    const adminSection = document.createElement('section');

    const adminHeading = document.createElement('h2');
    adminHeading.textContent = 'Admin Login';

    const adminForm = document.createElement('form');
    adminForm.action = '/admin_login';
    adminForm.method = 'post';

    const adminPasswordLabel = document.createElement('label');
    adminPasswordLabel.for = 'adminpassword';
    adminPasswordLabel.textContent = 'Admin Password:';

    const adminPasswordInput = document.createElement('input');
    adminPasswordInput.type = 'password';
    adminPasswordInput.id = 'adminpassword';
    adminPasswordInput.name = 'adminpassword';
    adminPasswordInput.required = true;

    const adminButton = document.createElement('button');
    adminButton.type = 'submit';
    adminButton.textContent = 'Admin Login';

    adminForm.appendChild(adminPasswordLabel);
    adminForm.appendChild(adminPasswordInput);
    adminForm.appendChild(adminButton);

    adminSection.appendChild(adminHeading);
    adminSection.appendChild(adminForm);

    return adminSection;
};

// Render forms to the app div
app.appendChild(createLoginForm());
app.appendChild(createAdminLoginForm());
