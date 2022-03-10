import {key} from "@typeses/config";

export const keydown =
    (
        current: {[detail: string]: any},
        callback: (action: key) => void
    ) => {
        const handler = (e: KeyboardEvent) => {
            const { key } = e;

            key && !!current[key] && callback(current[key]);
        };

        document.addEventListener('keydown', handler)
    }