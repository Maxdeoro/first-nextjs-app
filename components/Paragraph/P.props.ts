import React, {ReactNode} from 'react';
import { DetailedHTMLProps,HTMLAttributes } from 'react';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement>{
    children: ReactNode;
    size?: 's' | 'm' | 'l';
};