# GitHub Deployment Guide

## Step 1: Create GitHub Repository

Go to GitHub and create:

educational-faq-system

---

## Step 2: Upload Project

Open terminal:

git init
git add .
git commit -m "Initial Commit"

git branch -M main

git remote add origin https://github.com/yourusername/educational-faq-system.git

git push -u origin main

---

## Step 3: Deploy Frontend

Use Vercel:

https://vercel.com

Import GitHub repository.

---

## Step 4: Deploy Backend

Use Render:

https://render.com

Connect GitHub repository and deploy.

---

## Step 5: Add MongoDB Atlas

Create free cluster and copy connection string.

Add it to Render environment variables.

