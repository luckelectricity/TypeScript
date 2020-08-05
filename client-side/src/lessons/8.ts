// const fullName = ({ fistName, lastName }: {fistName: string, lastName: string}): string => `${fistName}${lastName}`;
interface Info {
  fistName: string;
  lastName: string;
}
const fullName = ({ fistName, lastName }: Info) => `${fistName}${lastName}`;

interface Vegetables {
  color?: string;
  type: string;
}

const getVegetables = ({color, type}: Vegetables) => `${color ? color : "" } ${type}`;

export default {
  fullName,
  getVegetables,
};
