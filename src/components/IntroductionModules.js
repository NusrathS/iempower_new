import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './IntroductionModules.css';

const ModuleIcon = ({ icon, name, onHover }) => (
  <div className="module-icon" onMouseEnter={() => onHover(name)}>
    {icon}
  </div>
);

const IntroductionModules = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const modules = [
    { icon: '🚕', name: 'Travel Management', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      details: [
        { 
          title: 'Trip Information', 
          items: ['Trip Data/Totals', 'Receipts, Receipts Without Plan', 'Cost Assignment'] 
        },
        { 
          title: 'Travel Management', 
          items: ['Trip Destinations', 'Expense Reporting (By Period)', 'Exceeded Trip Days'] 
        },
        { 
          title: 'Financial Aspects', 
          items: ['FI Payment Date', 'Income Related Expenses', 'Income Tax recovery'] 
        }
      ]
    },
    { icon: '🕒', name: 'Time Management', description: 'Manage employee time effectively with our comprehensive tools.',
      details: [
        { 
          title: 'Planned Time', 
          items: ['Shift Planning', 'Holiday Calendar']
        },
        { 
          title: 'Leave Management', 
          items: ['Quotas and Acurals', 'Leave Applications']
        },
        { 
          title: 'Actual Time', 
          items: ['Time and Attendance', 'leaves and Quotas', 'Punch In / Out Status']
        },
        { 
          title: 'Timesheets', 
          items: ['To Be Approved', 'Pending']
        }
      ]
    },
    { icon: '📋', name: 'Task Management', description: 'Streamline project workflows and boost team productivity.',
      details: [
        { 
          title: 'Activity Plan', 
          items: ['Start -End Time', 'Duration', 'Priority', 'Description', 'Related Projects', 'Deadline']
        },
        { 
          title: 'Task Reports', 
          items: ['Active Tasks', 'Tickets', 'Planned / Actual Tasks', 'Task Budget', 'Overdue Tasks']
        }
      ]
    },
    { icon: '💼', name: 'Purchase Requests', description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      details: [
        { 
          title: 'Raise PR', 
          items: ['Past PR', 'My PR tickets', 'PR - Pending my Action', 'PR - Completed my Action']
        },
        { 
          title: 'PR Reports', 
          items: ['PR Pending Approvals', 'PR within Budgets', 'Open PRs', 'Closed PRs', 'Project wise PRs']
        }
      ]
    },
    { icon: '💰', name: 'Expense Reimbursement', description: 'Take control of your company\'s finances with our robust tools.',
      details: [
        { 
          title: 'iExpense', 
          items: ['Raise iExpense', 'My iExpense Requests', 'iExpense - Pending (My Action)', 'iExpense - Completed (My Action)']
        },
        { 
          title: 'Reimbursements', 
          items: ['Reimbursement Requests', 'Description and Approvals']
        }
      ]
    },
    { icon: '👤', name: 'Employee Central', description: 'Empower your employees with Employee Central options.',
      details: [
        { 
          title: 'Employee Management', 
          items: ['Employee Master Data', 'Planned Timer Data']
        },
        { 
          title: 'Payroll& Compensation', 
          items: ['Payroll Data (One-time,Recurring)', 'Payslips & Form 16']
        },
        { 
          title: 'Payroll Reports', 
          items: ['CTC Report', 'Salary Register', 'Payments & Deductions', 'Bank Statements', 'FI-CO Postings']
        }
      ]
    },
  ];

  const nextModule = () => {
    if (currentModule < modules.length - 1) {
      setCurrentModule((prev) => prev + 1);
    }
  };

  const prevModule = () => {
    if (currentModule > 0) {
      setCurrentModule((prev) => prev - 1);
    }
  };

  const handleIconHover = (name) => {
    const index = modules.findIndex(module => module.name === name);
    setCurrentModule(index);
  };

  return (
    <div className="introduction-modules">
      <h1>Introduction to your iEmpPower modules:</h1>
      <p className="intro-description">
        Discover our comprehensive suite of modules designed to streamline your HR 
        processes and boost productivity. From Time Management to Employee Self 
        Service, iEmpPower offers a holistic solution to satisfy all your workforce 
        management needs.
      </p>

      <div className="module-icons">
        {modules.map((module, index) => (
          <ModuleIcon key={index} icon={module.icon} name={module.name} onHover={handleIconHover} />
        ))}
      </div>

      <div className="module-details">
        <div className="module-details-header">
          {modules[currentModule].icon}
          <h2>{modules[currentModule].name}</h2>
        </div>

        <p>{modules[currentModule].description}</p>

        <div className="module-details-grid">
          {modules[currentModule].details?.map((section, index) => (
            <div key={index} className="module-details-section">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button className="view-more-button">View More</button>

        {/* Module Navigation Buttons inside module-details */}
        {currentModule > 0 && (
        <button className="module-nav-button module-nav-button-left" onClick={prevModule} disabled={currentModule === 0}>
          <span className="triangle-left"></span>
        </button>
        )}
        {currentModule < modules.length - 1 && (
        <button className="module-nav-button module-nav-button-right" onClick={nextModule} disabled={currentModule === modules.length - 1}>
          <span className="triangle-right"></span>
        </button>
         )}
      </div>
    </div>
  );
};

export default IntroductionModules;
