import * as React from 'react';

import { cn } from '@/lib/utils';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

export interface NumberInputProps extends NumericFormatProps {}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(({ className, type, decimalScale = 2, thousandSeparator = ',', value, ...props }, ref) => {
  return (
    <NumericFormat
      getInputRef={ref}
      decimalScale={decimalScale}
      thousandSeparator={thousandSeparator}
      value={value}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
});
NumberInput.displayName = 'NumberInput';

export { NumberInput };
