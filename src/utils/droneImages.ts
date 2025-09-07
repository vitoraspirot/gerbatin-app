interface Props {
  id: number;
}

export const getDroneAssets = ({ id }: Props) => {
  switch (id) {
    case 33:
      return require("@images/iniciante/033/drone.png");
    case 47:
      return require("@images/iniciante/047/drone.png");
    case 50:
      return require("@images/iniciante/050/drone.png");
    case 51:
      return require("@images/iniciante/051/drone.png");
    case 52:
      return require("@images/iniciante/052/drone.png");
    case 57:
      return require("@images/iniciante/057/drone.png");
    case 58:
      return require("@images/iniciante/058/drone.png");
    case 59:
      return require("@images/iniciante/059/drone.png");
    case 60:
      return require("@images/iniciante/060/drone.png");
    case 61:
      return require("@images/iniciante/061/drone.png");
    case 41:
      return require("@images/intermediario/041/drone.png");
    case 44:
      return require("@images/intermediario/044/drone.png");
    case 48:
      return require("@images/intermediario/048/drone.png");
    case 36:
      return require("@images/avancado/036/drone.png");
    case 55:
      return require("@images/avancado/055/drone.png");
    default:
      return;
  }
};
