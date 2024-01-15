import React from "react";
import { Earth, ViewField } from "../components";

export const HomePage: React.FC = () => {
  return (
    <ViewField
      canvasProps={{
        id: "earth",
        camera: {
          fov: 90,
          position: [0, 0, 3],
        },
        children: <Earth />,
      }}
    />
  );
};
