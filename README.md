# Youssef's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. The website showcases programming projects, hardware work, and 3D modeling/design work.

## Features

- 🌓 Dark/Light mode support
- 🌐 Arabic language support with RTL layout
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📊 Visitor counter
- 📬 Contact form with Telegram integration
- 🖼️ Project showcase with detailed views
- 🎭 Creative work gallery
- 🏆 Achievements timeline
- ❓ FAQ section

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Headless UI
- Heroicons

## Prerequisites

- Node.js 18+ and npm
- Telegram Bot Token (for contact form)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Telegram bot credentials:
   ```
   NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token
   NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects page
│   ├── creative-work/     # Creative work page
│   ├── achievements/      # Achievements page
│   ├── faq/              # FAQ page
│   └── contact/          # Contact page
├── components/            # Reusable components
├── public/               # Static assets
└── styles/              # Global styles
```

## Customization

1. Update the content in each page component
2. Replace the sample images in the `public` directory
3. Modify the color scheme in `globals.css`
4. Update social media links in the contact page
5. Add your own projects and creative work

## Deployment

The website can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or a custom server.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 