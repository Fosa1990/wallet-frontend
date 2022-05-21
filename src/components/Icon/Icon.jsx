import sprite from '../../images/svg/sprite.svg';

const Icon = ({ iconName, width, height, fill, stroke, ...props }) => {
  return (
    <svg width={width} height={height} fill={fill} stroke={stroke}>
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
