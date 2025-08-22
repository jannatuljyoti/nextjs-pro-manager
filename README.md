
# Next.js Pro Manager

## Project Description

Next.js Pro Manager is a full-stack product management application built with Next.js and MongoDB.  
It allows users to view, add, and manage products through an intuitive interface.  
The app also uses NextAuth for authentication and role-based access control.

---

## Setup & Installation Instructions

### 1. Clone the repository

```bash
git clone https://github.com/jannatuljyoti/nextjs-pro-manager.git
cd nextjs-pro-manager

2. Install dependencies
npm install

3.Run the development server
npm run dev

4. Build for production
npm run build


###Route Summary

##Public Routes:

/ → GET → Home / Landing Page

/products → GET → View all products

##Protected Routes (Require Auth):

/admin/products/add → POST → Add a new product

/admin/products → GET → Manage all products

/api/products → GET / POST → API route to fetch/add products



##Tech Stack

Frontend: Next.js, React, Tailwind CSS

Backend: Node.js, API Routes

Database: MongoDB

Authentication: NextAuth.js

Deployment: Vercel

