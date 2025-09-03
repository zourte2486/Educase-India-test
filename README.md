 # PopX Mobile App

A pixel-perfect React JS mobile application built for internship qualifier task.

## Features

- 🎨 **Pixel-perfect design** matching Adobe XD specifications
- 📱 **Mobile-first responsive design** (375x812 viewport)
- 🧩 **Reusable components** for maintainable code
- 🚀 **React Router** for seamless navigation
- 🎯 **Tailwind CSS** for consistent styling
- ⚡ **Vite** for fast development and building

## Pages

1. **Welcome Page** - Landing page with Create Account and Login options
2. **Login Page** - User authentication with email and password
3. **Create Account Page** - Registration form with all required fields
4. **Account Settings Page** - User profile and settings

## Tech Stack

- **React 19** with TypeScript
- **React Router DOM** for navigation
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd popx-mobile-app
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Design Specifications

- **Viewport**: 375x812 (iPhone X/11/12/13/14)
- **Colors**: 
  - Primary Purple: #6C25FF
  - Dark Text: #1D2226
  - Gray Text: #919191
  - Light Gray: #E5E5E5
- **Typography**: Rubik font family
- **Navigation**: Bottom navigation with page indicators

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── RadioButton.tsx
│   ├── ProfilePicture.tsx
│   └── BottomNavigation.tsx
├── pages/              # Page components
│   ├── WelcomePage.tsx
│   ├── LoginPage.tsx
│   ├── CreateAccountPage.tsx
│   └── AccountSettingsPage.tsx
├── assets/             # Static assets
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Contributing

This is an internship qualifier task. Please follow the existing code style and patterns.

## License

This project is created for educational purposes as part of an internship application.