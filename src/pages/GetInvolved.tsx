import { useRef, useEffect } from "react";

function GetInvolved() {
  const topOfPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topOfPage.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <h1>Get Involved Page</h1>
    </div>
  );
}

export default GetInvolved;
