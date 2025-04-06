import "./ClubStats.css";

const ClubStats: React.FC = () => {
  return (
    <div className="section club-stats">
      <h1>Become a part of a global community!</h1>
      <div className="stats">
        <div className="stat">
          <h1>56</h1>
          <p>chapters</p>
        </div>
        <div className="stat">
          <h1>30,000+</h1>
          <p>students</p>
        </div>
        <div className="stat">
          <h1>29</h1>
          <p>countries</p>
        </div>
      </div>
    </div>
  );
};

export default ClubStats;
