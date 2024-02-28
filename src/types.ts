export type Variant = 'yellow' | 'blue' | 'gray';

export type Size = 'normal' | 'full';

export type VariantClasses = {
    [key in Variant]: string;
};
  
export type SizeClasses = {
    [key in Size]: string
}

export type ButtonInfo = {
    name: string,
    size: Size,
    variant: Variant
};

export type ButtonList = ButtonInfo[][];