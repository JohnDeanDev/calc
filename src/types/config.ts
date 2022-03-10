export interface key {
    key: string,
    value: string,
    checked(current: string): boolean
}

export interface keys {
    [detail: string]: key
}

export interface keysInterface {
    [detail: string]: {
        position: number,
        action: key,
        callback?(): void
    } | {
        position: number,
        key: string,
        emmit: string
    }
}