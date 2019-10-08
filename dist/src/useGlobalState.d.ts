export declare const useGlobalState: <T extends {}>(namespace?: string | number | undefined, defaultValue?: T | undefined) => [T, (value: Partial<T>) => void];
