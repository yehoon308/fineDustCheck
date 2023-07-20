// export interface ButtonProps {
//   clickHandler?: () => void;
//   label?: string;
//   size?: 'sm' | 'md' | 'lg';
//   backgroundColor?: string;
//   color?: string;
//   borderRadius?: string;
// }

// export const Button = ({
//   label,
//   backgroundColor,
//   size,
//   color,
//   clickHandler,
//   borderRadius,
// }: ButtonProps) => {
//   let scale = 1;
//   if (size === 'sm') scale = 0.75;
//   if (size === 'lg') scale = 1.5;
//   const style = {
//     backgroundColor,
//     padding: `${scale * 0.5}rem ${scale * 1}rem`,
//     border: 'none',
//     color,
//     borderRadius,
//   };
//   return (
//     <button onClick={clickHandler} style={style}>
//       {label}
//     </button>
//   );
// };
// export default Button;
