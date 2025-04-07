# Vercel Deployment Guide for DripDial

This guide will help you deploy your DripDial application to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
2. A PostgreSQL database (e.g., Neon, Supabase, or any other PostgreSQL provider)

## Deployment Steps

### 1. Fork or Clone the Repository

Make sure your repository is on GitHub and you have push access to it.

### 2. Connect to Vercel

1. Log in to your Vercel account
2. Click on "Add New..." > "Project"
3. Import your GitHub repository (DripDial-FE)
4. Configure the project:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist/client`
   - Install Command: `npm install`

### 3. Environment Variables

Add the following environment variables to your Vercel project settings:

- `DATABASE_URL`: Your PostgreSQL connection string (from Neon, Supabase, etc.)

### 4. Deploy

Click "Deploy" and wait for the deployment to complete.

### 5. Database Setup

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

## Troubleshooting

If you encounter any issues with your deployment:

1. Check the Vercel deployment logs for errors
2. Ensure your database connection string is correct
3. Verify that all environment variables are properly set
4. Make sure your database is accessible from Vercel's servers

## Updating Your Deployment

Any new commits to your main branch will automatically trigger a new deployment in Vercel.

## Custom Domain

To set up a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain and follow the instructions to verify ownership