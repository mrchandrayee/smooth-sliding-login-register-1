# Smooth Sliding Login/Register

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/smooth-sliding-login-register-1/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Runnable reconstruction of the uploaded 15.13-second video.

## What the video shows

- Dark navy/black page with a glowing blue heading: **Smooth sliding Login/Register**.
- Compact dark authentication card.
- Left form: **Welcome Back**, email and password fields, forgot-password link and Login button.
- Right form: **Create Account**, name, email and password fields and Sign Up button.
- A bright purple-to-blue-to-cyan gradient overlay panel slides horizontally between the two forms.
- In login mode, the overlay shows **One of us?** and a Sign In button.
- In register mode, it shows **New Here?** and a Sign Up button.
- The recording demonstrates switching between the two states several times.

## Visible HTML structure transcribed

```html
<div class="overlay-container">
  <div class="overlay">
    <div class="overlay-panel overlay-left">
      <h2>One of us?</h2>
      <p>Already have an account? Sign in...</p>
      <button id="showLogin">Sign In</button>
    </div>

    <div class="overlay-panel overlay-right">
      <h2>New Here?</h2>
      <p>Create an account and get started...</p>
      <button id="showRegister">Sign Up</button>
    </div>
  </div>
</div>
```

The code panel in the recording is small and not every source line can be read reliably. The visible layout, text, two-form structure and sliding overlay behavior have been reconstructed.

## Features

- Animated sliding gradient overlay.
- Login and registration forms.
- Sign In / Sign Up toggle buttons.
- Email and password inputs with native validation.
- Responsive layout.
- Focus states and button hover effects.
- Reduced-motion accessibility support.
- No external dependencies or build step.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
smooth-sliding-login-register/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Important

This is a front-end UI demo. Form submissions display a demo confirmation; no user credentials are sent to a server and no real authentication/account creation is performed. Connect a secure backend API before production use.

## Accuracy note

The UI text, two form panels and sliding gradient overlay are based on the visible recording. CSS dimensions, responsive behavior and the interaction code are reconstructed rather than copied verbatim from the creator's full source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
