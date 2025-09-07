export interface Dimensions {
  width: string;
  height: string;
  length: string;
}

export interface Drone {
  id: number;
  name: string;
  color: string;
  dimensions: Dimensions;
  weight: string;
  applications: string;
  operation_time: string;
  version: string;
  category: string;
}
