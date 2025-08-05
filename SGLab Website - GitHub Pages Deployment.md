# SGLab Website - GitHub Pages Deployment

## Overview
This is the complete SGLab website for Dr. Javier E. Sanchez-Galan's research laboratory at Universidad Tecnológica de Panamá. The website showcases the lab's research in AI for Biology, team members, publications, and contact information.

## Website Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Complete Sections**:
  - Home: Hero section with lab introduction
  - About: Lab mission and research focus
  - Research: Four main research areas with detailed descriptions
  - Publications: Academic papers and theses
  - Team: Principal investigator and student information
  - Contact: Complete contact details and research opportunities

## GitHub Pages Setup Instructions

### Method 1: Create New Repository
1. Create a new repository on GitHub (e.g., `sglab-website`)
2. Upload all files from this folder to the repository
3. Go to repository Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your website will be available at: `https://yourusername.github.io/sglab-website`

### Method 2: Use Existing Repository
1. Create a new branch called `gh-pages` in your existing repository
2. Upload all files from this folder to the `gh-pages` branch
3. Go to repository Settings → Pages
4. Select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click Save

### Method 3: Use GitHub Username Repository
1. Create a repository named `yourusername.github.io`
2. Upload all files from this folder to the repository
3. The website will automatically be available at: `https://yourusername.github.io`

## File Structure
```
sglab-github-pages/
├── index.html              # Main HTML file
├── favicon.ico             # Website icon
├── assets/                 # All assets (CSS, JS, images)
│   ├── index-*.css        # Compiled CSS styles
│   ├── index-*.js         # Compiled JavaScript
│   ├── sglab_logo-*.png   # SGLab logo
│   └── *.jpg/*.png        # Research and lab images
└── README.md              # This file
```

## Customization Guide

### Updating Content
To update the website content, you'll need to:
1. Modify the React source code in the original project
2. Rebuild the project using `npm run build`
3. Replace the files in your GitHub repository with the new build

### Key Areas to Customize
- **Team Members**: Add current students and alumni information
- **Publications**: Update with latest research papers
- **Research Projects**: Add specific ongoing projects
- **Contact Information**: Verify all contact details are current
- **Images**: Replace placeholder images with actual lab photos

### Adding New Team Members
To add team members, you'll need to modify the `teamMembers` array in the React component and rebuild.

### Adding New Publications
Publications can be updated by modifying the `publications` array in the source code.

## Technical Details
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React icons
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized images and minified code

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Features
- Proper meta tags
- Semantic HTML structure
- Optimized images
- Fast loading times

## Maintenance
- Regularly update publications and team information
- Keep contact details current
- Update research areas as they evolve
- Add new lab photos and achievements

## Support
For technical issues or customization help, refer to:
- React documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- GitHub Pages: https://pages.github.com

## License
This website template is created for SGLab at Universidad Tecnológica de Panamá.

---

**Website URL**: Will be available after GitHub Pages deployment
**Last Updated**: June 2025
**Version**: 1.0

