# WebHatchery Tracker

A comprehensive project tracking and management dashboard for WebHatchery applications.

## Features

- **Project Overview**: Track progress across all WebHatchery projects
- **Feature Requests**: Submit and manage feature requests
- **Project Suggestions**: Community-driven project ideas
- **Analytics Dashboard**: Visual project metrics and statistics
- **Activity Feed**: Real-time updates on project activities

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build System**: Vite
- **Styling**: Tailwind CSS with CSS Modules
- **State Management**: Zustand
- **Charts**: Chart.js
- **Animations**: Framer Motion

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```

3. **Build**
   ```bash
   npm run build
   ```

4. **Lint**
   ```bash
   npm run lint
   ```

5. **Type Check**
   ```bash
   npm run type-check
   ```

## Project Structure

```
src/
├── components/          # React components
├── api/                 # API communication
├── stores/              # Zustand state management  
├── hooks/               # Custom React hooks
├── types/               # TypeScript definitions
├── styles/              # Global styles
└── mocks/               # Mock data for development
```

## Development Workflow

- Projects data is automatically copied from `public/projects.json` during development
- Use the dashboard to track project progress and manage features
- Submit feature requests and project suggestions through the interface
- Monitor analytics and activity feeds for project insights

## Contributing

1. Follow the established component patterns
2. Use TypeScript for all new code
3. Follow the existing CSS Modules + Tailwind approach
4. Ensure all components are responsive
5. Add appropriate error handling and loading states