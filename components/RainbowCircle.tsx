import { RoughNotation } from 'react-rough-notation';

const RainbowCircle = ({ children }: { children: any }) => {
  // animation duration is dependent on text length
  const animationDuration =
    typeof children === 'string' ? Math.floor(30 * children.length) : 3;

  return (
    <RoughNotation
      type="circle"
      multiline={true}
      padding={[0, 1]}
      iterations={2}
      animationDuration={animationDuration}
      color="#000"
    >
      {children}
    </RoughNotation>
  );
};

export default RainbowCircle;
