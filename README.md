# Blockrise Security Measures Display

A Next.js React component designed for lobby touchscreen displays that showcases Blockrise's 5 key Bitcoin security features in an easy-to-understand, non-technical format.

## Features

- **Automatic Cycling**: Displays each security measure for 8 seconds with smooth fade transitions
- **Manual Navigation**: Touch-friendly dots allow users to jump to any security measure
- **Trust-Inspiring Design**: Clean blue and white color palette with large, readable fonts
- **Responsive Layout**: Works on various screen sizes from tablets to large displays
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Security Measures Covered

1. **Swiss Hardware Security** - Explains how Swiss-grade HSMs protect private keys
2. **Backup Keys Safeguard** - Describes global backup key storage for loss prevention
3. **Transparent Blockchain Audits** - Shows how blockchain transparency builds trust
4. **Legacy Planning** - Explains family protection and inheritance planning
5. **Separate Wallets Per Service** - Describes isolation for enhanced security

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Component Structure

The main component is located at `src/app/components/SecurityMeasuresDisplay.tsx` and includes:

- **State Management**: Uses React hooks for current slide and transition states
- **Automatic Cycling**: useEffect hook manages the 8-second timer
- **Manual Navigation**: Click handlers for dot navigation
- **Smooth Transitions**: CSS transitions for fade effects
- **Responsive Design**: Tailwind CSS classes for different screen sizes

## Customization

### Changing Content

Edit the `securityMeasures` array in the component to modify:
- Headlines
- Explanations
- Icons (currently using emoji placeholders)

### Styling

The component uses Tailwind CSS classes. Key customization points:
- Color scheme: Blue gradient (`from-blue-50 to-white`)
- Typography: Large, bold fonts for headlines
- Spacing: Responsive padding and margins
- Animations: Subtle pulse effect on icons

### Timing

Adjust the cycling speed by modifying the interval in the useEffect hook:
```javascript
setInterval(() => {
  // ... transition logic
}, 8000); // Change this value (in milliseconds)
```

## Future Enhancements

- Voice narration for accessibility
- Interactive elements (tap to learn more)
- Real-time data integration
- Multi-language support
- Gesture controls for navigation
- Custom SVG icons instead of emoji placeholders

## Technical Details

- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4
- **TypeScript**: Full type safety
- **Client-side**: Uses 'use client' directive for interactivity
- **Performance**: Optimized with Next.js build system

## License

This project is part of the Blockrise compliance and security measures display system.
#   L u c a s S c r e e n S e c u r i t y  
 