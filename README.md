# 🚀 Employee Management System (EMS)

A modern, glassmorphic **Employee Management System** built with **React**, **Vite**, **Tailwind CSS v4**, and **Context API**. This application allows administrators to assign tasks to employees in real-time, track team performance, and enable employees to manage their assigned tasks with interactive progress states.

---

## ✨ Features

### 👑 Admin Control Panel
- **Assign New Tasks**: Create and publish tasks for specific team members with category tags, due dates, titles, and detailed descriptions.
- **Real-Time Team Matrix**: Live overview of task distribution (New, Active, Completed, Failed) for all employees in a clean data grid.
- **Persistent Storage**: Real-time state synchronization with localStorage and React Context API.

### 👤 Employee Dashboard
- **Personalized Header**: Displays the logged-in user's name, role badge ("Employee Dashboard"), and initial avatar.
- **Task Summary Metrics**: 4 dynamic metric widgets showing real-time task counts (New Tasks, Completed, In Progress, Failed).
- **Interactive Task List**:
  - **New Tasks**: Accept new tasks into the active pipeline.
  - **Active Tasks**: Mark tasks as **Completed** or **Failed**.
  - **Completed & Failed Tasks**: Read-only history of completed or failed items.

### 🎨 Next-Level UI / UX Design
- **Glassmorphism Aesthetic**: Backdrop blur cards, dark background glows, and subtle borders.
- **Modern Typography**: Powered by Google Fonts (**Outfit** for bold headings and **Inter** for body text).
- **Responsive Layout**: Designed to look great on desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

- **Frontend**: React (JSX, Hooks, Context API)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 + Vanilla CSS Utilities
- **State & Persistence**: React Context API + LocalStorage
- **Typography**: Google Fonts (Outfit & Inter)
