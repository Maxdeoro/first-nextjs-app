import { PProps } from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';

//Variant 1
// export const Par = ({size='m', children}: PProps): JSX.Element => {
//     switch(size) {
//         case 's': return (<p className={styles.small}>{children}</p>);
//         case 'm': return (<p className={styles.medium}>{children}</p>);
//         case 'l': return (<p className={styles.large}>{children}</p>);
//         default: return (<></>);
//     }
// };

//Variant 2
export const Par = ({size='m',children, className, ...props}: PProps): JSX.Element => {
    return (
        <p className={cn(styles.p, className, {
            [styles.small]: size == 's',
            [styles.large]: size == 'l'
        })}
        {...props}
        >
            {children}
        </p>
    );
};