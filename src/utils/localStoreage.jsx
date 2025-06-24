const employees = [
    {
      "id": 1,
      "name": "John Smith",
      "email": "john.smith@company.com",
      "password": "123",
      "taskCount": {
        "active": 3,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "id": 101,
          "title": "Update user authentication system",
          "description": "Implement OAuth 2.0 authentication for improved security",
          "priority": "high",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-20",
          "category": "Development"
        },
        {
          "id": 102,
          "title": "Code review for payment module",
          "description": "Review and test the new payment gateway integration",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2025-06-22",
          "category": "Review"
        },
        {
          "id": 103,
          "title": "Database optimization",
          "description": "Optimize slow-running queries in the user management system",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "date": "2025-06-15",
          "category": "Maintenance"
        },
        {
          "id": 104,
          "title": "API documentation update",
          "description": "Update API documentation for v2.0 release",
          "priority": "low",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-25",
          "category": "Documentation"
        },
        {
          "id": 105,
          "title": "Bug fix: Login timeout issue",
          "description": "Fix the session timeout bug affecting mobile users",
          "priority": "high",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "date": "2025-06-18",
          "category": "Bug Fix"
        }
      ]
    },
    {
      "id": 2,
      "name": "Sarah Johnson",
      "email": "sarah.johnson@company.com",
      "password": "123",
      "taskCount": {
        "active": 5,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "id": 201,
          "title": "Design new dashboard layout",
          "description": "Create wireframes and mockups for the admin dashboard redesign",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2025-06-23",
          "category": "Design"
        },
        {
          "id": 202,
          "title": "User research for mobile app",
          "description": "Conduct user interviews to understand mobile app pain points",
          "priority": "high",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-21",
          "category": "Research"
        },
        {
          "id": 203,
          "title": "Logo redesign approval",
          "description": "Present final logo concepts to stakeholders for approval",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "date": "2025-06-16",
          "category": "Design"
        },
        {
          "id": 204,
          "title": "Color palette standardization",
          "description": "Standardize color schemes across all product interfaces",
          "priority": "low",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-26",
          "category": "Design"
        },
        {
          "id": 205,
          "title": "Accessibility audit",
          "description": "Review current designs for WCAG 2.1 compliance",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2025-06-24",
          "category": "Audit"
        },
        {
          "id": 206,
          "title": "Icon library update",
          "description": "Update and organize the company icon library",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "date": "2025-06-17",
          "category": "Assets"
        },
        {
          "id": 207,
          "title": "Prototype mobile checkout flow",
          "description": "Create interactive prototype for new checkout process",
          "priority": "high",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-27",
          "category": "Prototyping"
        }
      ]
    },
    {
      "id": 3,
      "name": "Michael Davis",
      "email": "michael.davis@company.com",
      "password": "123",
      "taskCount": {
        "active": 4,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "id": 301,
          "title": "Q2 financial report preparation",
          "description": "Compile and analyze Q2 financial data for board presentation",
          "priority": "high",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-28",
          "category": "Finance"
        },
        {
          "id": 302,
          "title": "Budget variance analysis",
          "description": "Analyze budget vs actual spending for all departments",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2025-06-25",
          "category": "Analysis"
        },
        {
          "id": 303,
          "title": "Vendor payment processing",
          "description": "Process monthly payments to all approved vendors",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "date": "2025-06-19",
          "category": "Operations"
        },
        {
          "id": 304,
          "title": "Tax compliance review",
          "description": "Review quarterly tax filings for accuracy",
          "priority": "high",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-26",
          "category": "Compliance"
        },
        {
          "id": 305,
          "title": "Expense report audit",
          "description": "Audit employee expense reports for May 2025",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "date": "2025-06-20",
          "category": "Audit"
        },
        {
          "id": 306,
          "title": "Investment portfolio review",
          "description": "Review company investment portfolio performance",
          "priority": "low",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-30",
          "category": "Investment"
        }
      ]
    },
    {
      "id": 4,
      "name": "Emily Wilson",
      "email": "emily.wilson@company.com",
      "password": "123",
      "taskCount": {
        "active": 5,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "id": 401,
          "title": "New hire onboarding program",
          "description": "Develop comprehensive onboarding process for new employees",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2025-06-25",
          "category": "HR"
        },
        {
          "id": 402,
          "title": "Performance review cycle planning",
          "description": "Plan and schedule Q2 performance reviews for all departments",
          "priority": "high",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-27",
          "category": "HR"
        },
        {
          "id": 403,
          "title": "Employee handbook update",
          "description": "Update employee handbook with new remote work policies",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "date": "2025-06-18",
          "category": "Documentation"
        },
        {
          "id": 404,
          "title": "Diversity training workshop",
          "description": "Organize mandatory diversity and inclusion training sessions",
          "priority": "high",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-29",
          "category": "Training"
        },
        {
          "id": 405,
          "title": "Salary benchmarking study",
          "description": "Conduct market research for competitive salary analysis",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "date": "2025-06-21",
          "category": "Research"
        },
        {
          "id": 406,
          "title": "Benefits enrollment support",
          "description": "Assist employees with annual benefits enrollment process",
          "priority": "low",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-26",
          "category": "Benefits"
        },
        {
          "id": 407,
          "title": "Exit interview analysis",
          "description": "Analyze trends from recent exit interviews and prepare report",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2025-06-24",
          "category": "Analysis"
        },
        {
          "id": 408,
          "title": "Office space planning",
          "description": "Plan new office layout for hybrid work model",
          "priority": "low",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-07-01",
          "category": "Operations"
        }
      ]
    },
    {
      "id": 5,
      "name": "David Brown",
      "email": "david.brown@company.com",
      "password": "123",
      "taskCount": {
        "active": 6,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "id": 501,
          "title": "Social media campaign launch",
          "description": "Launch summer product promotion campaign across all social platforms",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2025-06-26",
          "category": "Marketing"
        },
        {
          "id": 502,
          "title": "Email newsletter design",
          "description": "Design and schedule monthly newsletter for July 2025",
          "priority": "high",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-28",
          "category": "Communications"
        },
        {
          "id": 503,
          "title": "Website SEO optimization",
          "description": "Optimize website content for better search engine rankings",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "date": "2025-06-20",
          "category": "SEO"
        },
        {
          "id": 504,
          "title": "Competitor analysis report",
          "description": "Analyze competitor marketing strategies and prepare insights report",
          "priority": "high",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-25",
          "category": "Research"
        },
        {
          "id": 505,
          "title": "Trade show booth planning",
          "description": "Plan and coordinate company presence at upcoming tech conference",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "date": "2025-06-22",
          "category": "Events"
        },
        {
          "id": 506,
          "title": "Content calendar update",
          "description": "Update Q3 content calendar with new product announcements",
          "priority": "low",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-27",
          "category": "Planning"
        },
        {
          "id": 507,
          "title": "Customer testimonial collection",
          "description": "Collect and organize customer testimonials for website update",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "date": "2025-06-29",
          "category": "Content"
        },
        {
          "id": 508,
          "title": "Brand guidelines review",
          "description": "Review and update company brand guidelines document",
          "priority": "low",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-06-30",
          "category": "Branding"
        },
        {
          "id": 509,
          "title": "Marketing automation setup",
          "description": "Configure new marketing automation workflows for lead nurturing",
          "priority": "high",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "date": "2025-07-02",
          "category": "Automation"
        }
      ]
    }
  ];

  
 const admin=[
    {
        "id": 11,
        "name": "Mehul Poshattiwar",
        "email": "admin@company.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
} 

export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem('employees'));
    const adminData = JSON.parse(localStorage.getItem('admin'));

    return {employeesData,adminData};
  }