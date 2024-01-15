import React from "react";
import { Ball, ViewField } from "../components";

export const BallPage: React.FC = () => {
  return (
    <ViewField
      withOutLight
      canvasProps={{
        id: "dragon",
        camera: {
          fov: 90,
          position: [0, 0, 4],
        },
        children: <Ball />,
      }}
    />
  );
};
