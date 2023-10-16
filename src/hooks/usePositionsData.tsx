import { useEffect, useState } from "react";
import { Position } from "../vite-env";

async function fetchPositions() {
  try {
    const response: Response = await fetch("positions.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.status !== 200) {
      throw new Error("Failed to fetch positions data");
    }
    return await response.json();
  } catch (error) {
    console.error("[ERROR] Fetching positions: ", error);
    return [];
  }
}

function usePositionsData() {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data: Position[] = await fetchPositions();
      setPositions(data);
    }
    fetchData();
  }, []);
  return positions;
}

export default usePositionsData;
