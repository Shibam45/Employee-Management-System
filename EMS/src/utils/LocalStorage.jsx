const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Landing Page",
        "taskDescription": "Design and develop the landing page for the new product.",
        "taskDate": "2026-08-20",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Login Bug",
        "taskDescription": "Investigate and fix the login authentication issue.",
        "taskDate": "2026-08-21",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Documentation",
        "taskDescription": "Update the project documentation with the latest API changes.",
        "taskDate": "2026-08-17",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deploy Website",
        "taskDescription": "Deploy the updated website to the production server.",
        "taskDate": "2026-08-15",
        "category": "Deployment"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Create unit tests for the authentication module.",
        "taskDate": "2026-08-22",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Dashboard",
        "taskDescription": "Create a responsive dashboard design for the admin panel.",
        "taskDate": "2026-08-20",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Create API Endpoint",
        "taskDescription": "Develop the API endpoint for fetching employee data.",
        "taskDate": "2026-08-21",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Backup",
        "taskDescription": "Create a complete backup of the project database.",
        "taskDate": "2026-08-16",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Performance Testing",
        "taskDescription": "Test the application performance under heavy traffic.",
        "taskDate": "2026-08-14",
        "category": "Testing"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Review Code",
        "taskDescription": "Review the latest pull requests and provide feedback.",
        "taskDate": "2026-08-23",
        "category": "Code Review"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Build Profile Page",
        "taskDescription": "Develop the employee profile page with editable information.",
        "taskDate": "2026-08-20",
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement Search",
        "taskDescription": "Add search functionality to the employee management page.",
        "taskDate": "2026-08-22",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Navbar",
        "taskDescription": "Fix responsive navigation issues on smaller screens.",
        "taskDate": "2026-08-17",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update UI Components",
        "taskDescription": "Update buttons and cards according to the latest design.",
        "taskDate": "2026-08-16",
        "category": "UI/UX"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Add Form Validation",
        "taskDescription": "Add client-side validation to the registration form.",
        "taskDate": "2026-08-24",
        "category": "Frontend"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Report",
        "taskDescription": "Prepare the weekly project progress report.",
        "taskDate": "2026-08-20",
        "category": "Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly development team meeting.",
        "taskDate": "2026-08-21",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Feedback",
        "taskDescription": "Collect and organize feedback from the client.",
        "taskDate": "2026-08-18",
        "category": "Client"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Project Presentation",
        "taskDescription": "Prepare and present the latest project progress.",
        "taskDate": "2026-08-13",
        "category": "Presentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Sprint Planning",
        "taskDescription": "Plan tasks and priorities for the upcoming sprint.",
        "taskDate": "2026-08-25",
        "category": "Management"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop Login Page",
        "taskDescription": "Create the login page with email and password validation.",
        "taskDate": "2026-08-20",
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Connect API",
        "taskDescription": "Connect the frontend application with the backend API.",
        "taskDate": "2026-08-22",
        "category": "Integration"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Components",
        "taskDescription": "Create reusable React components for the application.",
        "taskDate": "2026-08-17",
        "category": "React"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Responsive Issues",
        "taskDescription": "Fix layout issues on mobile and tablet screens.",
        "taskDate": "2026-08-16",
        "category": "UI/UX"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Add Notifications",
        "taskDescription": "Implement notifications for new and completed tasks.",
        "taskDate": "2026-08-24",
        "category": "Development"
      }
    ]
  }
]

const admin = [
  {
    "id": 101,
    "email": "admin@example.com",
    "password": "123",
  }
]

export const setLocalStorage = () => {
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
}