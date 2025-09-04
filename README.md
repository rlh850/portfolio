# Robert Harris - Portfolio

My personal portfolio website built with modern web technologies. Open sourced because why not! 🤷‍♂️

## ✨ Features

- **🎭 Interactive Hero Section** - Smooth animations with my bio and skills
- **💬 AI Chat Integration** - Talk to an AI version of me powered by OpenAI
- **🎨 Modern Design** - Clean, responsive design with smooth animations
- **⚡ Fast & Performant** - Built with Next.js 15 and optimized for speed
- **📱 Mobile Responsive** - Looks great on all devices

## 🛠️ Tech Stack

| Technology        | Purpose                                     |
| ----------------- | ------------------------------------------- |
| **Next.js 15**    | React framework with App Router             |
| **TypeScript**    | Type safety and better developer experience |
| **Tailwind CSS**  | Utility-first CSS for rapid styling         |
| **Framer Motion** | Smooth animations and transitions           |
| **OpenAI API**    | AI chat functionality                       |
| **Convex**        | Real-time backend and database              |
| **React Icons**   | Beautiful icons throughout the site         |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/rlh850/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file with:

   ```env
   CONVEX_DEPLOYMENT=your-convex-deployment
   NEXT_PUBLIC_CONVEX_URL=your-convex-url
   OPENAI_API_KEY=your-openai-api-key
   ```

4. **Start Convex**

   ```bash
   npx convex dev
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/chat/          # OpenAI chat API endpoint
│   ├── components/        # React components
│   │   ├── chat/         # Chat interface components
│   │   ├── Hero.tsx      # Main hero section
│   │   └── Navigation.tsx # Top navigation
│   ├── controllers/       # Business logic
│   ├── services/         # External API integrations
│   └── repository/       # Data access layer
├── convex/               # Backend functions
└── public/               # Static assets
```

## 🎨 Key Components

### Hero Section

- Animated name and title reveal
- Interactive skill tags with hover effects
- GitHub repository link
- Smooth entrance animations

### AI Chat

- Real-time chat interface
- OpenAI-powered responses
- Clean, modern chat UI
- Persistent conversation handling

## 🌐 Deployment

This site is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy!

### Environment Variables for Production

- `CONVEX_DEPLOYMENT` - Your Convex deployment URL
- `NEXT_PUBLIC_CONVEX_URL` - Public Convex URL
- `OPENAI_API_KEY` - Your OpenAI API key

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🤔 Why Open Source?

I believe in sharing knowledge and helping others learn. Feel free to:

- Use this as inspiration for your own portfolio
- Learn from the code structure and implementations
- Contribute improvements or suggestions
- Ask questions about any part of the code

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this code for your own projects!

## 🙏 Acknowledgments

- **OpenAI** for the incredible API that powers the chat
- **Convex** for the seamless real-time backend
- **Vercel** for amazing Next.js hosting
- **The open source community** for all the amazing tools

---

**Built with ❤️ by Robert Harris**

_Self-taught Software Engineer who believes there's always room to improve_

---

⭐ **Star this repo if you found it helpful or interesting!**
