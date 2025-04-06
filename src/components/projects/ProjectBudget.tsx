import { BudgetItem } from "@interfaces/Project";
import "./ProjectBudget.css";
import useMediaQuery from "@hooks/useMediaQuery";

interface ProjectBudgetProps {
  budget_breakdown: BudgetItem[];
  total_budget_statement: string;
}

const ProjectBudget: React.FC<ProjectBudgetProps> = ({
  budget_breakdown,
  total_budget_statement,
}) => {
  const isBelow440 = useMediaQuery("(max-width: 440px)");
  const isBelow768 = useMediaQuery("(max-width: 768px)");

  const iconSize = isBelow440 ? 35 : isBelow768 ? 45 : 55;

  return (
    <div className="project-budget">
      <h1>Project Budget</h1>
      <div className="project-budget-details">
        <div className="project-budget-list">
          {budget_breakdown.map((item) => {
            return (
              <div className="budget-item">
                <item.icon size={iconSize} />
                <div className="text">
                  <h4>{item.name}</h4>
                  <p>{item.amount}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="budget-calc">
          <strong>Total Budget: </strong>
          <p>{total_budget_statement}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBudget;
