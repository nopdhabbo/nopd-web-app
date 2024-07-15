/** @type {import('next').NextConfig} */
const nextConfig = {
	 content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  images: {
    domains: ["i.imgur.com", "www.habbo.com"],
  },
   plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default nextConfig;
