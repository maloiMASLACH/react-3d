import React from "react";
import { Dragon, ViewField } from "../components";

export const DragonPage: React.FC = () => {
  return (
    <ViewField
      withOutLight
      canvasProps={{
        id: "dragon",
        camera: {
          fov: 90,
          position: [0, 0, 4],
        },
        children: <Dragon />,
      }}
    />
  );
};
