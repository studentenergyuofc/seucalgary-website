import { TeamMember } from "@interfaces/Project";
import "./TeamMembers.css";
import ImgComponent from "@components/shared/ImgComponent/ImgComponent";

interface TeamMembersProps {
  team: TeamMember[];
}

const TeamMembers: React.FC<TeamMembersProps> = ({ team }) => {
  return (
    <div className="team-members-overview">
      <h1>Project Team Members</h1>
      <div className="team-members">
        {team.map((member: TeamMember) => {
          return (
            <div className="team-member">
              <div className="team-member-img">
                <ImgComponent
                  src={member.image.src}
                  altimages={member.image.altimagesizes}
                  altimagesizes={"(max-width: 440px) 130px, 300px"}
                  blurhash={member.image.blurhash}
                />
              </div>
              <div className="member-description">
                <h3>{member.name}</h3>
                <p>{member.major}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMembers;
