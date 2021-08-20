import { RoughNotation } from 'react-rough-notation';

export const RainbowHighlight = ({
  color,
  children,
}: {
  color: string;
  children: string;
}) => {
  // animation duration is dependent on text length
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={2}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
