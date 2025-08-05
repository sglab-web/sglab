# SGLab Website - Development Guide

## 🛠️ Development Setup

If you want to modify the website, use this source code package.

### Prerequisites
- Node.js (version 16 or higher)
- npm or pnpm package manager

### Setup Instructions

1. **Install Dependencies**
   ```bash
   cd sglab-website-source
   npm install
   # or
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
   
3. **Open Browser**
   - Visit: http://localhost:5173
   - The website will auto-reload when you make changes

### Making Changes

#### Update Team Members
Edit the `teamMembers` array in `src/App.jsx`:
```javascript
const teamMembers = [
  {
    name: "New Team Member",
    role: "PhD Student",
    description: "Research focus description...",
    image: "/path/to/image"
  }
]
```

#### Update Publications
Edit the `publications` array in `src/App.jsx`:
```javascript
const publications = [
  {
    title: "New Publication Title",
    type: "Journal Article",
    year: "2025",
    venue: "Journal Name"
  }
]
```

#### Update Research Areas
Edit the `researchAreas` array in `src/App.jsx`:
```javascript
const researchAreas = [
  {
    title: "New Research Area",
    description: "Description of the research...",
    icon: "🔬"
  }
]
```

#### Add New Images
1. Place images in `src/assets/` folder
2. Import in `src/App.jsx`:
   ```javascript
   import newImage from './assets/new-image.jpg'
   ```
3. Use in the component:
   ```javascript
   <img src={newImage} alt="Description" />
   ```

### Building for Production

1. **Build the Project**
   ```bash
   npm run build
   # or
   pnpm build
   ```

2. **Files will be generated in `dist/` folder**

3. **Upload `dist/` contents to GitHub repository**

### Project Structure
```
sglab-website-source/
├── src/
│   ├── App.jsx           # Main component with all content
│   ├── App.css           # Styles and Tailwind config
│   ├── main.jsx          # Entry point
│   └── assets/           # Images and static files
├── public/
├── package.json          # Dependencies and scripts
└── vite.config.js        # Build configuration
```

### Key Technologies
- **React 18**: Main framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling framework
- **shadcn/ui**: UI components
- **Lucide React**: Icons

### Common Customizations

#### Change Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary: your-color-here;
  --secondary: your-color-here;
}
```

#### Update Contact Information
Find the contact section in `src/App.jsx` and update:
```javascript
<div className="flex items-center space-x-4">
  <Mail className="text-primary" size={24} />
  <div>
    <p className="font-medium">Email</p>
    <p className="text-muted-foreground">your-email@domain.com</p>
  </div>
</div>
```

#### Add New Sections
1. Create a new section in the JSX
2. Add navigation item to the nav array
3. Add scroll functionality

### Deployment
After making changes:
1. Run `npm run build`
2. Copy contents of `dist/` folder
3. Upload to your GitHub repository
4. GitHub Pages will automatically update

### Troubleshooting
- **Build errors**: Check console for specific error messages
- **Images not loading**: Ensure images are in `src/assets/` and properly imported
- **Styles not applying**: Check Tailwind class names and CSS imports

### Getting Help
- React docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite docs: https://vitejs.dev

---
**Happy coding!** 🚀

