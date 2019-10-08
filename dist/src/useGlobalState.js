"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var GlobalStateProvider_1 = require("./GlobalStateProvider");
exports.useGlobalState = function (namespace, defaultValue) {
    var _a = react_1.useContext(GlobalStateProvider_1.GlobalStateContext), globalData = _a.globalData, setGlobalData = _a.setGlobalData;
    var globalNamespace = react_1.useState(namespace || "default")[0];
    react_1.useEffect(function () {
        if (defaultValue !== undefined) {
            setGlobalData(globalNamespace, defaultValue);
        }
    }, []);
    var set = function (value) {
        setGlobalData(globalNamespace, value);
    };
    return [globalData[globalNamespace] || defaultValue || {}, set];
};
