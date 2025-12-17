# Tsevire - Online Shop with Authentication

A modern e-commerce website built with Next.js, featuring user authentication, product catalog, and responsive design.

## Features

- 🔐 **User Authentication**: JWT-based login/register system
- 🛒 **Product Catalog**: Display products with categories
- 👤 **User Dashboard**: Protected user profile page
- 🎨 **Modern UI**: Responsive design with Tailwind CSS and custom components
- ⚡ **Fast Performance**: Built with Next.js 16 and optimized for production

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, Lucide Icons
- **Authentication**: JWT tokens, bcryptjs
- **Deployment**: Vercel-ready with serverless functions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd tsevire
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add:

```
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Set Environment Variables**

   - In Vercel dashboard, go to your project
   - Navigate to Settings → Environment Variables
   - Add: `JWT_SECRET` with a secure random string

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add JWT_SECRET
```

## API Routes

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/user` - Get user profile (protected)
- `PUT /api/user` - Update user profile (protected)

## Important Notes

### Data Storage

Currently using in-memory storage for development/demo purposes. **Data will be lost on each deployment.**

For production, consider:

- Vercel KV (Redis)
- Vercel Postgres
- PlanetScale
- MongoDB Atlas

### Security

- Change the `JWT_SECRET` in production
- The JWT tokens expire in 1 hour
- Passwords are hashed with bcryptjs

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── auth/
│   │   └── user/
│   ├── context/
│   │   └── AuthContext.tsx
│   └── (pages)/
├── components/
│   ├── LoginModal.tsx
│   └── ...
├── lib/
│   └── storage.ts
└── public/
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. 2. Install dependencies:

```bash
npm install
```

3. Set up environment variables by creating a `.env.local` file:

```env
SHOPEE_PARTNER_ID=your_partner_id
SHOPEE_PARTNER_KEY=your_partner_key
SHOPEE_SHOP_ID=your_shop_id
SHOPEE_ACCESS_TOKEN=your_access_token
```

### Getting Shopee API Credentials

1. Register as a developer on [Shopee Open Platform](https://open.shopee.com/)
2. Create an app
3. Obtain your Partner ID and Partner Key
4. Authorize your app to get Access Token and Shop ID

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the catalog.

## API Routes

- `GET /api/products` - Fetches products from Shopee

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Shopee Open API

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Tsevire
