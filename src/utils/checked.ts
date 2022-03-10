export const isFirst = (current: string): boolean => current?.length == 0;

export const afterNumber = (current: string): boolean => !!current?.[current?.length-1]?.match('[0-9]');

export const afterOperator = (current: string): boolean => !!current?.[current?.length-1]?.match('[-+/*]');

export const afterBrackets = (current: string): boolean => !!current?.[current?.length-1]?.match('[()]');

export const afterCloseBracket = (current: string): boolean => !!current?.[current?.length-1]?.match('[)]');

export const afterOpenBracket = (current: string): boolean => !!current?.[current?.length-1]?.match('[(]');

export const checkSetCloseBracket = (current: string): boolean => !!current?.match('\\([0-9]{1,}[+-\\/*][^)]*$');

export const isNotRepeatNull = (current: string): boolean => !`${current}0`?.match('[^\,][0]{2,}');