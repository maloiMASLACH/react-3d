import { Props } from "@react-three/fiber";

export interface ViewFieldProps {
  canvasProps: Props & React.RefAttributes<HTMLCanvasElement>;
  withOutLight?: boolean;
}
