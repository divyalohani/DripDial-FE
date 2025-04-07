# DripDial - AI-Powered Fashion Newsletter Platform

DripDial is a cutting-edge fashion newsletter subscription service designed for Gen Z audiences, delivering personalized style experiences through AI-powered curation.

## Features

- Modern, responsive UI with clean black/white design
- TikTok/Instagram-style animated fashion feeds
- Interactive subscription form with style preference selection
- PostgreSQL database integration for subscriber management
- Mobile-optimized user experience

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Drizzle ORM
- **Database**: PostgreSQL (Neon)
- **Animation**: Tailwind Animation, Framer Motion

## Vercel Deployment Guide

### Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
2. A PostgreSQL database (e.g., Neon, Supabase, or any other PostgreSQL provider)

### Deployment Steps

#### 1. Connect to Vercel

1. Log in to your Vercel account
2. Click on "Add New..." > "Project"
3. Import your GitHub repository (DripDial-FE)
4. Configure the project:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist/client`
   - Install Command: `npm install`

#### 2. Environment Variables

Add the following environment variables to your Vercel project settings:

- `DATABASE_URL`: Your PostgreSQL connection string (from Neon, Supabase, etc.)

#### 3. Deploy

Click "Deploy" and wait for the deployment to complete.

#### 4. Database Setup

Once deployed, you'll need to run the database migrations:

Option 1: Run locally against the production database
```
DATABASE_URL=your_production_db_url npm run db:push
```

Option 2: Use Vercel CLI to run it in the deployment environment
```
vercel env pull .env.production
npm run db:push
```

### Custom Domain

To set up a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain and follow the instructions to verify ownership

## Local Development

1. Clone the repository:
```
git clone https://github.com/divyalohani/DripDial-FE.git
cd DripDial-FE
```

2. Install dependencies:
```
npm install
```

3. Set up environment variables:
- Create a `.env` file and add your `DATABASE_URL` for your PostgreSQL database

4. Start the development server:
```
npm run dev
```

5. Open your browser and navigate to `http://localhost:5000`

## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License

MIT