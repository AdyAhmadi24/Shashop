# Shashop - Online Shop Catalog Connected to Shopee

This is a Next.js project that displays a product catalog connected to Shopee.

## Features

- Product catalog display
- Integration with Shopee API to fetch products
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- Shopee Partner Account

### Installation

1. Clone the repository
2. Install dependencies:

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

# Shashop
