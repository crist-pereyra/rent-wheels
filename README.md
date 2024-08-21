# Rent Wheels 🚗

## 🌐 Live Demo

Check out the live version of the project: [rent-wheels](https://rent-wheels-five.vercel.app)

![Rent Wheels Preview](/public/demo1.png)

![Rent Wheels Preview](/public/images/demo2.png)

Welcome to **Rent Wheels**, your go-to solution for renting cars with ease and efficiency! This platform provides a seamless experience for customers looking to book vehicles, as well as a robust admin dashboard to manage listings. Built using cutting-edge technologies, it ensures performance, security, and scalability. Here's an overview of the tech behind Rent Wheels:

⚡ **Next.js 14** for server-side rendering and static site generation  
🔒 **Clerk** for authentication and user management  
📦 **Prisma ORM & Neon** for smooth database management
🛠️ **ESLint and Prettier** for code quality and consistency  
🔧 **React Table** for efficient data tables  
🖼️ **Uploadthing** for handling image uploads
🎨 **Tailwind CSS** for beautiful and customizable UI components  
🖌️ **Shadcn/ui** for sleek UI components  
📝 **Zod** & **React Hook Form** for schema validation and form handling  
💨 **Framer Motion** for smooth animations  
🐻 **Zustand** for state management  
🔗 **Axios** for API requests

## 🚀 Getting Started

Follow these instructions to get the project up and running locally.

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- Neon PostgreSQL database instance

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/crist-pereyra/rent-wheels
   cd rent-wheels
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Development Server

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to see Rent Wheels in action!

## 📂 Project Structure

Here's an overview of the project's structure:

```php
rent-wheels/
├── app/                    # Source code
│ ├── (auth)/               # Log In/ Sign In pages
│ ├── (routes)/             # Dashboard pages
│ ├── (home)/               # Landing page and Car listing pages
│ ├── order-confirmation/   # Confirmation page
│ ├── order-error/          # Error page
│ ├── api/                  # API endpoints
│ ├── globals.css           # CSS styles
│ └── layout.tsx            # Main layout
├── components/             # Reusable React components
├── hooks/                  # Custom React hooks
├── lib/                    # Stripe, database scripts
├── prisma/                 # Prisma database setup
├── public/                 # Public assets
├── utils/                  # Uploadthing setup
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── middleware.ts           # Middleware setup
├── next.config.mjs         # Next.js configuration
├── package-lock.json       # Lock file for npm
├── package.json            # Project metadata and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Key Features

- **Home Landing Page**: Clean and modern landing page showcasing available cars for rent.
- **Car Listings**: Browse, filter, and reserve vehicles from the car inventory.
- **Client Dashboard**: Users can manage their bookings and view rental history.
- **Admin Dashboard**: Admins can create, update, delete, publish, or unpublish car listings.
- **Image Uploads**: Easily upload images for car listings with Uploadthing.
- **State Management**: Smooth state management using Zustand.
- **Form Handling**: Robust form validation and handling with Zod and React Hook Form.
- **Animations**: Enhance the user experience with Framer Motion animations.

Ready to hit the road? Jump in and explore the smooth workflow of Rent Wheels! 🚗✨
