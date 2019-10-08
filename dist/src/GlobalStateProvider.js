"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
exports.GlobalStateContext = react_1.default.createContext({ globalData: {}, setGlobalData: function () { } });
exports.GlobalStateProvider = function (props) {
    var _a = react_1.useState({}), globalData = _a[0], setGlobalData = _a[1];
    var setData = function (namespace, value) {
        if (globalData[namespace] === undefined) {
            globalData[namespace] = {};
        }
        for (var key in value) {
            globalData[namespace][key] = value[key];
        }
        setGlobalData(Object.assign({}, globalData));
    };
    return (react_1.default.createElement(exports.GlobalStateContext.Provider, { value: { globalData: globalData, setGlobalData: setData } }, props.children));
};
