import React from 'react';
interface IGlobal {
    globalData: {
        [key: string]: any;
    };
    setGlobalData: (namespace: React.ReactText, value: {
        [key: string]: any;
    }) => void;
}
export declare const GlobalStateContext: React.Context<IGlobal>;
export declare const GlobalStateProvider: (props: {
    children: React.ReactNode;
}) => JSX.Element;
export {};
