import {key, keys, keysInterface} from "@typeses/config";
import {
    afterBrackets,
    afterCloseBracket,
    afterNumber, afterOpenBracket, afterOperator, checkSetCloseBracket, isFirst, isNotRepeatNull
} from "@utils/checked";

const buttons: keys = {
    '0': {
        key: '0',
        value: '0',
        checked: (current: string): boolean => !afterCloseBracket(current) && isNotRepeatNull(current)
    },
    '1': {
        key: '1',
        value: '1',
        checked: (current: string): boolean => !afterCloseBracket(current)
    },
    '2': {
        key: '2',
        value: '2',
        checked: (current: string): boolean => !afterCloseBracket(current)
    },
    '3': {
        key: '3',
        value: '3',
        checked: (current: string): boolean => !afterCloseBracket(current)
    },
    '4': {
        key: '4',
        value: '4',
        checked: (current: string): boolean => !afterCloseBracket(current)
    },
    '5': {
        key: '5',
        value: '5',
        checked: (current: string): boolean => !afterCloseBracket(current)
    },
    '6': {
        key: '6',
        value: '6',
        checked: (current: string): boolean => !afterCloseBracket(current)
    },
    '7': {
        key: '7',
        value: '7',
        checked: (current: string): boolean => !afterCloseBracket(current)
    },
    '8': {
        key: '8',
        value: '8',
        checked: (current: string): boolean => !afterCloseBracket(current)
    },
    '9': {
        key: '9',
        value: '9',
        checked: (current: string): boolean => !afterCloseBracket(current)
    },
    '*': {
        key: '*',
        value: '*',
        checked: (current: string): boolean => afterNumber(current) || afterBrackets(current)
    },
    '/': {
        key: '/',
        value: '/',
        checked: (current: string): boolean => afterNumber(current) || afterBrackets(current)
    },
    '-': {
        key: '-',
        value: '-',
        checked: (current: string): boolean => afterNumber(current) || afterBrackets(current)
    },
    '+': {
        key: '+',
        value: '+',
        checked: (current: string): boolean => afterNumber(current) || afterBrackets(current)
    },
    '(': {
        key: '(',
        value: '(',
        checked: (current: string): boolean => isFirst(current) || afterOperator(current)
    },
    ')': {
        key: ')',
        value: ')',
        checked: (current: string): boolean => checkSetCloseBracket(current) && afterNumber(current)
    },
    ',': {
        key: ',',
        value: ',',
        checked: (current: string): boolean => afterNumber(current)
    },
    '.': {
        key: ',',
        value: ',',
        checked: (current: string): boolean => afterNumber(current)
    },
    '√': {
        key: '√',
        value: '√',
        checked: (current: string): boolean => isFirst(current) || afterOperator(current) || afterOpenBracket(current)
    },
    '%': {
        key: '%',
        value: '%',
        checked: (current: string): boolean => afterOperator(current)
    },
    '00': {
        key: '00',
        value: '00',
        checked: (current: string): boolean => afterNumber(current) && isNotRepeatNull(current)
    },
};
const buttonsSubmit: keys = {
    'Enter': {
        key: 'Enter',
        value: 'Enter',
        checked: (current: string) => true
    },
    '=': {
        key: '=',
        value: '=',
        checked: (current: string) => true
    },
};
const buttonsDelete: keys = {
    'Backspace': {
        key: 'Backspace',
        value: 'Backspace',
        checked: (current: string) => true
    }
};
const buttonsInterface: keysInterface = {
    'c': {
        position: 0,
        key: 'c',
        emmit: 'clearButton'
    },
    '√': {
        position: 1,
        action: buttons["√"]
    },
    '%': {
        position: 2,
        action: buttons["%"]
    },
    '/': {
        position: 3,
        action: buttons["/"]
    },
    '7': {
        position: 4,
        action: buttons["7"]
    },
    '8': {
        position: 5,
        action: buttons["8"]
    },
    '9': {
        position: 6,
        action: buttons["9"]
    },
    '*': {
        position: 7,
        action: buttons["*"]
    },
    '4': {
        position: 8,
        action: buttons["4"]
    },
    '5': {
        position: 9,
        action: buttons["5"]
    },
    '6': {
        position: 10,
        action: buttons["6"]
    },
    '-': {
        position: 11,
        action: buttons["-"]
    },
    '1': {
        position: 12,
        action: buttons["1"]
    },
    '2': {
        position: 13,
        action: buttons["2"]
    },
    '3': {
        position: 14,
        action: buttons["3"]
    },
    '+': {
        position: 15,
        action: buttons["+"]
    },
    '00': {
        position: 16,
        action: buttons["00"]
    },
    '0': {
        position: 17,
        action: buttons["0"]
    },
    '.': {
        position: 18,
        action: buttons["."]
    },
    '=': {
        position: 19,
        key: '=',
        emmit: 'submitButton'
    },
};

export {
    buttons,
    buttonsSubmit,
    buttonsDelete,
    buttonsInterface
}