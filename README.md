# Hariharan NKS - Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and shadcn/ui. This portfolio showcases my skills, experience, projects, and blog posts in a professional and tech-focused design.

## 🚀 Features

### Core Sections
- **Hero Section**: Animated introduction with call-to-action buttons
- **About Section**: Personal information and technical skills display
- **Experience & Education**: Professional journey and academic background
- **Projects Section**: Showcase of featured projects with filtering
- **Blog Section**: Latest blog posts with load more functionality
- **Contact Section**: Contact form and information

### Additional Pages
- **Blog Page**: Complete blog listing with load more functionality
- **Individual Blog Posts**: Dynamic blog post pages
- **Projects Page**: All projects with search and filter capabilities

### Technical Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Mode**: Built-in theme support
- **Smooth Animations**: Framer Motion animations throughout
- **Modern UI**: shadcn/ui components for consistent design
- **TypeScript**: Full type safety
- **Performance Optimized**: Next.js App Router with optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Data Management**: JSON files (easily replaceable with Firebase/Supabase)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/profile.json`:
- Name, title, and description
- Contact information and social links
- Skills and technologies
- Experience and education
- Projects and blog posts

### Styling
- Colors and themes are managed through Tailwind CSS variables
- Customize the design system in `src/app/globals.css`
- Modify component styles in individual component files

### Data Management
Currently using JSON files for data storage. To integrate with a database:

1. **Firebase Setup**:
   ```bash
   npm install firebase
   ```
   Create a Firebase project and update the configuration

2. **Supabase Setup**:
   ```bash
   npm install @supabase/supabase-js
   ```
   Create a Supabase project and update the configuration

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # shadcn/ui components
├── data/                  # Data files
│   └── profile.json       # Profile data
├── lib/                   # Utility functions
│   ├── data.ts           # Data loading functions
│   └── utils.ts          # Utility functions
└── types/                 # TypeScript type definitions
    └── index.ts          # Type definitions
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js.

## 📝 Content Management

### Adding New Projects
1. Edit `src/data/profile.json`
2. Add a new project object to the `projects` array
3. Include required fields: id, title, description, technologies, etc.

### Adding New Blog Posts
1. Edit `src/data/profile.json`
2. Add a new blog post object to the `blog` array
3. Include required fields: id, title, excerpt, content, tags, etc.

### Updating Skills
1. Edit the `skills` array in `src/data/profile.json`
2. Skills are automatically categorized in the About section

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for best user experience
- **SEO**: Built-in SEO optimization with Next.js
- **Accessibility**: WCAG 2.1 compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the beautiful icons

## 📞 Contact

- **Email**: shariharan@example.com
- **LinkedIn**: [Hariharan NKS](https://linkedin.com/in/nkshariharan)
- **GitHub**: [nkshariharan](https://github.com/nkshariharan)

---

Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
