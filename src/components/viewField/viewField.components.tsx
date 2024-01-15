import React, { useEffect, useRef } from "react";
import { ViewFieldProps } from "./viewField.model";
import { CanvasWrapper } from "./viewField.styles";
import { useGetMousePosition } from "../../hooks";

export const ViewField: React.FC<ViewFieldProps> = ({
  canvasProps,
  withOutLight,
}) => {
  const mousePosition = useGetMousePosition(withOutLight);

  const viewRef = useRef(null);

  const xCenter = window.innerWidth / 2;
  const yCenter = window.innerHeight / 2;

  return (
    <CanvasWrapper ref={viewRef} {...canvasProps}>
      {!withOutLight && (
        <>
          <ambientLight intensity={0.1} />
          <directionalLight
            position={[
              ((mousePosition.x - xCenter) / xCenter) * 2,
              ((yCenter - mousePosition.y) / yCenter) * 2,
              1,
            ]}
            intensity={2}
          />
        </>
      )}
      {canvasProps.children}
    </CanvasWrapper>
  );
};
