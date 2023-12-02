import React, {ReactNode} from 'react';
import { DetailedHTMLProps,HTMLAttributes } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode;
    color: 'ghost' | 'green' | 'red' | 'primary' | 'grey';
    href?: string;
    size: 'large' | 'small';
};