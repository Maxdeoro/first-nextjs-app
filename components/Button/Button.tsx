import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowSVG from './arrowSVG';

export const Button = ({children,appearance,arrow='none',className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost'
        })}
        {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down',
                [styles.right]: arrow == 'right'
            })}>
                <ArrowSVG width={6} height={8} fill="#3B434E"/>
             </span>
            }
        </button>
    );

};