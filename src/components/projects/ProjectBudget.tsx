import { BudgetItem } from "@interfaces/Project";
import "./ProjectBudget.css";

interface ProjectBudgetProps {
  budget_breakdown: BudgetItem[];
  total_budget_statement: string;
}

const ProjectBudget: React.FC<ProjectBudgetProps> = ({
  budget_breakdown,
  total_budget_statement,
}) => {
  return (
    <div className="project-budget">
      <h1>Project Budget</h1>
      <div className="project-budget-details">
        <div className="project-budget-list">
          {budget_breakdown.map((item) => {
            return (
              <div className="budget-item">
                <item.icon size={55} />
                <div className="text">
                  <h4>{item.name}</h4>
                  <p>{item.amount}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p>
          <strong>Total Budget:</strong> {total_budget_statement}
        </p>
      </div>
    </div>
  );
};

export default ProjectBudget;
