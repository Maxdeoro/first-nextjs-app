import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({children,color,href,size,className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.small]: size == 'small',
            [styles.large]: size == 'large',
            [styles.ghost]: color == 'ghost',
            [styles.green]: color == 'green',
            [styles.red]: color == 'red',
            [styles.grey]: color == 'grey',
            [styles.primary]: color == 'primary'
        })}
        {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};