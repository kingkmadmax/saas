(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/saas/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/saas/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=mergeClasses.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
 //# sourceMappingURL=toKebabCase.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
 //# sourceMappingURL=toCamelCase.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-client] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
 //# sourceMappingURL=toPascalCase.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
 //# sourceMappingURL=hasA11yProp.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$hasA11yProp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>PanelLeft
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ]
];
const PanelLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("panel-left", __iconNode);
;
 //# sourceMappingURL=panel-left.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript) <export default as PanelLeftIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelLeftIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Bot
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 8V4H8",
            key: "hb8ula"
        }
    ],
    [
        "rect",
        {
            width: "16",
            height: "12",
            x: "4",
            y: "8",
            rx: "2",
            key: "enze0r"
        }
    ],
    [
        "path",
        {
            d: "M2 14h2",
            key: "vft8re"
        }
    ],
    [
        "path",
        {
            d: "M20 14h2",
            key: "4cs60a"
        }
    ],
    [
        "path",
        {
            d: "M15 13v2",
            key: "1xurst"
        }
    ],
    [
        "path",
        {
            d: "M9 13v2",
            key: "rq6x2g"
        }
    ]
];
const Bot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("bot", __iconNode);
;
 //# sourceMappingURL=bot.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as BotIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BotIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as StarIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Video
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
            key: "ftymec"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "6",
            width: "14",
            height: "12",
            rx: "2",
            key: "158x01"
        }
    ]
];
const Video = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("video", __iconNode);
;
 //# sourceMappingURL=video.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as VideoIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDownIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CreditCard
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }
    ]
];
const CreditCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("credit-card", __iconNode);
;
 //# sourceMappingURL=credit-card.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCardIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreditCardIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LogOut
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 17 5-5-5-5",
            key: "1bji2h"
        }
    ],
    [
        "path",
        {
            d: "M21 12H9",
            key: "dn1m92"
        }
    ],
    [
        "path",
        {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }
    ]
];
const LogOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("log-out", __iconNode);
;
 //# sourceMappingURL=log-out.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOutIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogOutIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Check
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("check", __iconNode);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronRight
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRightIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Circle
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle", __iconNode);
;
 //# sourceMappingURL=circle.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircleIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>PanelLeftClose
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }
    ],
    [
        "path",
        {
            d: "M9 3v18",
            key: "fh3hqa"
        }
    ],
    [
        "path",
        {
            d: "m16 15-3-3 3-3",
            key: "14y99z"
        }
    ]
];
const PanelLeftClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("panel-left-close", __iconNode);
;
 //# sourceMappingURL=panel-left-close.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript) <export default as PanelLeftCloseIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelLeftCloseIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/saas/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as SearchIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
// packages/react/compose-refs/src/compose-refs.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
// src/slot.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-arrow/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-tooltip/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-visually-hidden/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
// src/primitive.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Separator",
    ()=>Separator
]);
// src/separator.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-separator/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = [
    "horizontal",
    "vertical"
];
var Separator = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
    const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
    const ariaOrientation = orientation === "vertical" ? orientation : void 0;
    const semanticProps = decorative ? {
        role: "none"
    } : {
        "aria-orientation": ariaOrientation,
        role: "separator"
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-orientation": orientation,
        ...semanticProps,
        ...domProps,
        ref: forwardedRef
    });
});
Separator.displayName = NAME;
function isValidOrientation(orientation) {
    return ORIENTATIONS.includes(orientation);
}
var Root = Separator;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript) <export * as Separator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseDOM",
    ()=>canUseDOM,
    "composeEventHandlers",
    ()=>composeEventHandlers,
    "getActiveElement",
    ()=>getActiveElement,
    "getOwnerDocument",
    ()=>getOwnerDocument,
    "getOwnerWindow",
    ()=>getOwnerWindow,
    "isFrame",
    ()=>isFrame
]);
// src/primitive.tsx
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
function getOwnerWindow(element) {
    if (!canUseDOM) {
        throw new Error("Cannot access window outside of the DOM");
    }
    return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
    if (!canUseDOM) {
        throw new Error("Cannot access document outside of the DOM");
    }
    return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
    const { activeElement } = getOwnerDocument(node);
    if (!activeElement?.nodeName) {
        return null;
    }
    if (isFrame(activeElement) && activeElement.contentDocument) {
        return getActiveElement(activeElement.contentDocument.body, activeDescendant);
    }
    if (activeDescendant) {
        const id = activeElement.getAttribute("aria-activedescendant");
        if (id) {
            const element = getOwnerDocument(activeElement).getElementById(id);
            if (element) {
                return element;
            }
        }
    }
    return activeElement;
}
function isFrame(element) {
    return element.tagName === "IFRAME";
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
// packages/react/context/src/create-context.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "createContext2.Provider.useMemo[value]": ()=>context
        }["createContext2.Provider.useMemo[value]"], Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createContext3.Provider.useMemo[value]": ()=>context
            }["createContextScope.createContext3.Provider.useMemo[value]"], Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "composeContextScopes.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
// packages/react/use-layout-effect/src/use-layout-effect.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var useLayoutEffect2 = globalThis?.document ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useId",
    ()=>useId
]);
// packages/react/id/src/id.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
;
;
var useReactId = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useId ".trim().toString()] || (()=>void 0);
var count = 0;
function useId(deterministicId) {
    const [id, setId] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(useReactId());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useId.useLayoutEffect": ()=>{
            if (!deterministicId) setId({
                "useId.useLayoutEffect": (reactId)=>reactId ?? String(count++)
            }["useId.useLayoutEffect"]);
        }
    }["useId.useLayoutEffect"], [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEffectEvent",
    ()=>useEffectEvent
]);
// src/use-effect-event.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var useReactEffectEvent = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
    if (typeof useReactEffectEvent === "function") {
        return useReactEffectEvent(callback);
    }
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef({
        "useEffectEvent.useRef[ref]": ()=>{
            throw new Error("Cannot call an event handler while rendering.");
        }
    }["useEffectEvent.useRef[ref]"]);
    if (typeof useReactInsertionEffect === "function") {
        useReactInsertionEffect({
            "useEffectEvent.useReactInsertionEffect": ()=>{
                ref.current = callback;
            }
        }["useEffectEvent.useReactInsertionEffect"]);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
            "useEffectEvent.useLayoutEffect": ()=>{
                ref.current = callback;
            }
        }["useEffectEvent.useLayoutEffect"]);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useEffectEvent.useMemo": ()=>({
                "useEffectEvent.useMemo": (...args)=>ref.current?.(...args)
            })["useEffectEvent.useMemo"]
    }["useEffectEvent.useMemo"], []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useControllableState",
    ()=>useControllableState,
    "useControllableStateReducer",
    ()=>useControllableStateReducer
]);
// src/use-controllable-state.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$effect$2d$event$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs [app-client] (ecmascript)");
;
;
var useInsertionEffect = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[" useInsertionEffect ".trim().toString()] || __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
function useControllableState({ prop, defaultProp, onChange = ()=>{}, caller }) {
    const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    if ("TURBOPACK compile-time truthy", 1) {
        const isControlledRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(prop !== void 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
            "useControllableState.useEffect": ()=>{
                const wasControlled = isControlledRef.current;
                if (wasControlled !== isControlled) {
                    const from = wasControlled ? "controlled" : "uncontrolled";
                    const to = isControlled ? "controlled" : "uncontrolled";
                    console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
                }
                isControlledRef.current = isControlled;
            }
        }["useControllableState.useEffect"], [
            isControlled,
            caller
        ]);
    }
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useControllableState.useCallback[setValue]": (nextValue)=>{
            if (isControlled) {
                const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
                if (value2 !== prop) {
                    onChangeRef.current?.(value2);
                }
            } else {
                setUncontrolledProp(nextValue);
            }
        }
    }["useControllableState.useCallback[setValue]"], [
        isControlled,
        prop,
        setUncontrolledProp,
        onChangeRef
    ]);
    return [
        value,
        setValue
    ];
}
function useUncontrolledState({ defaultProp, onChange }) {
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(defaultProp);
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(value);
    const onChangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(onChange);
    useInsertionEffect({
        "useUncontrolledState.useInsertionEffect": ()=>{
            onChangeRef.current = onChange;
        }
    }["useUncontrolledState.useInsertionEffect"], [
        onChange
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useUncontrolledState.useEffect": ()=>{
            if (prevValueRef.current !== value) {
                onChangeRef.current?.(value);
                prevValueRef.current = value;
            }
        }
    }["useUncontrolledState.useEffect"], [
        value,
        prevValueRef
    ]);
    return [
        value,
        setValue,
        onChangeRef
    ];
}
function isFunction(value) {
    return typeof value === "function";
}
;
;
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
    const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
    const isControlled = controlledState !== void 0;
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$effect$2d$event$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(onChangeProp);
    if ("TURBOPACK compile-time truthy", 1) {
        const isControlledRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(controlledState !== void 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
            "useControllableStateReducer.useEffect": ()=>{
                const wasControlled = isControlledRef.current;
                if (wasControlled !== isControlled) {
                    const from = wasControlled ? "controlled" : "uncontrolled";
                    const to = isControlled ? "controlled" : "uncontrolled";
                    console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
                }
                isControlledRef.current = isControlled;
            }
        }["useControllableStateReducer.useEffect"], [
            isControlled,
            caller
        ]);
    }
    const args = [
        {
            ...initialArg,
            state: defaultProp
        }
    ];
    if (init) {
        args.push(init);
    }
    const [internalState, dispatch] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useReducer({
        "useControllableStateReducer.useReducer": (state2, action)=>{
            if (action.type === SYNC_STATE) {
                return {
                    ...state2,
                    state: action.state
                };
            }
            const next = reducer(state2, action);
            if (isControlled && !Object.is(next.state, state2.state)) {
                onChange(next.state);
            }
            return next;
        }
    }["useControllableStateReducer.useReducer"], ...args);
    const uncontrolledState = internalState.state;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(uncontrolledState);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useControllableStateReducer.useEffect": ()=>{
            if (prevValueRef.current !== uncontrolledState) {
                prevValueRef.current = uncontrolledState;
                if (!isControlled) {
                    onChange(uncontrolledState);
                }
            }
        }
    }["useControllableStateReducer.useEffect"], [
        onChange,
        uncontrolledState,
        prevValueRef,
        isControlled
    ]);
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useControllableStateReducer.useMemo[state]": ()=>{
            const isControlled2 = controlledState !== void 0;
            if (isControlled2) {
                return {
                    ...internalState,
                    state: controlledState
                };
            }
            return internalState;
        }
    }["useControllableStateReducer.useMemo[state]"], [
        internalState,
        controlledState
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useControllableStateReducer.useEffect": ()=>{
            if (isControlled && !Object.is(controlledState, internalState.state)) {
                dispatch({
                    type: SYNC_STATE,
                    state: controlledState
                });
            }
        }
    }["useControllableStateReducer.useEffect"], [
        controlledState,
        internalState.state,
        isControlled
    ]);
    return [
        state,
        dispatch
    ];
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
// packages/react/use-callback-ref/src/use-callback-ref.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useCallbackRef.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useCallbackRef.useEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCallbackRef.useMemo": ()=>({
                "useCallbackRef.useMemo": (...args)=>callbackRef.current?.(...args)
            })["useCallbackRef.useMemo"]
    }["useCallbackRef.useMemo"], []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEscapeKeydown",
    ()=>useEscapeKeydown
]);
// packages/react/use-escape-keydown/src/use-escape-keydown.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
;
;
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
    const onEscapeKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEscapeKeyDownProp);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useEscapeKeydown.useEffect": ()=>{
            const handleKeyDown = {
                "useEscapeKeydown.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        onEscapeKeyDown(event);
                    }
                }
            }["useEscapeKeydown.useEffect.handleKeyDown"];
            ownerDocument.addEventListener("keydown", handleKeyDown, {
                capture: true
            });
            return ({
                "useEscapeKeydown.useEffect": ()=>ownerDocument.removeEventListener("keydown", handleKeyDown, {
                        capture: true
                    })
            })["useEscapeKeydown.useEffect"];
        }
    }["useEscapeKeydown.useEffect"], [
        onEscapeKeyDown,
        ownerDocument
    ]);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Branch",
    ()=>Branch,
    "DismissableLayer",
    ()=>DismissableLayer,
    "DismissableLayerBranch",
    ()=>DismissableLayerBranch,
    "Root",
    ()=>Root
]);
// src/dismissable-layer.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "DismissableLayer.useComposedRefs[composedRefs]": (node2)=>setNode(node2)
    }["DismissableLayer.useComposedRefs[composedRefs]"]);
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside({
        "DismissableLayer.usePointerDownOutside[pointerDownOutside]": (event)=>{
            const target = event.target;
            const isPointerDownOnBranch = [
                ...context.branches
            ].some({
                "DismissableLayer.usePointerDownOutside[pointerDownOutside].isPointerDownOnBranch": (branch)=>branch.contains(target)
            }["DismissableLayer.usePointerDownOutside[pointerDownOutside].isPointerDownOnBranch"]);
            if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
            onPointerDownOutside?.(event);
            onInteractOutside?.(event);
            if (!event.defaultPrevented) onDismiss?.();
        }
    }["DismissableLayer.usePointerDownOutside[pointerDownOutside]"], ownerDocument);
    const focusOutside = useFocusOutside({
        "DismissableLayer.useFocusOutside[focusOutside]": (event)=>{
            const target = event.target;
            const isFocusInBranch = [
                ...context.branches
            ].some({
                "DismissableLayer.useFocusOutside[focusOutside].isFocusInBranch": (branch)=>branch.contains(target)
            }["DismissableLayer.useFocusOutside[focusOutside].isFocusInBranch"]);
            if (isFocusInBranch) return;
            onFocusOutside?.(event);
            onInteractOutside?.(event);
            if (!event.defaultPrevented) onDismiss?.();
        }
    }["DismissableLayer.useFocusOutside[focusOutside]"], ownerDocument);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$escape$2d$keydown$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEscapeKeydown"])({
        "DismissableLayer.useEscapeKeydown": (event)=>{
            const isHighestLayer = index === context.layers.size - 1;
            if (!isHighestLayer) return;
            onEscapeKeyDown?.(event);
            if (!event.defaultPrevented && onDismiss) {
                event.preventDefault();
                onDismiss();
            }
        }
    }["DismissableLayer.useEscapeKeydown"], ownerDocument);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            if (!node) return;
            if (disableOutsidePointerEvents) {
                if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                    originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                    ownerDocument.body.style.pointerEvents = "none";
                }
                context.layersWithOutsidePointerEventsDisabled.add(node);
            }
            context.layers.add(node);
            dispatchUpdate();
            return ({
                "DismissableLayer.useEffect": ()=>{
                    if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                        ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
                    }
                }
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            return ({
                "DismissableLayer.useEffect": ()=>{
                    if (!node) return;
                    context.layers.delete(node);
                    context.layersWithOutsidePointerEventsDisabled.delete(node);
                    dispatchUpdate();
                }
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], [
        node,
        context
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayer.useEffect": ()=>{
            const handleUpdate = {
                "DismissableLayer.useEffect.handleUpdate": ()=>force({})
            }["DismissableLayer.useEffect.handleUpdate"];
            document.addEventListener(CONTEXT_UPDATE, handleUpdate);
            return ({
                "DismissableLayer.useEffect": ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate)
            })["DismissableLayer.useEffect"];
        }
    }["DismissableLayer.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DismissableLayerContext);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DismissableLayerBranch.useEffect": ()=>{
            const node = ref.current;
            if (node) {
                context.branches.add(node);
                return ({
                    "DismissableLayerBranch.useEffect": ()=>{
                        context.branches.delete(node);
                    }
                })["DismissableLayerBranch.useEffect"];
            }
        }
    }["DismissableLayerBranch.useEffect"], [
        context.branches
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPointerDownOutside);
    const isPointerInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleClickRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        "usePointerDownOutside.useRef[handleClickRef]": ()=>{}
    }["usePointerDownOutside.useRef[handleClickRef]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePointerDownOutside.useEffect": ()=>{
            const handlePointerDown = {
                "usePointerDownOutside.useEffect.handlePointerDown": (event)=>{
                    if (event.target && !isPointerInsideReactTreeRef.current) {
                        let handleAndDispatchPointerDownOutsideEvent2 = {
                            "usePointerDownOutside.useEffect.handlePointerDown.handleAndDispatchPointerDownOutsideEvent2": function() {
                                handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                                    discrete: true
                                });
                            }
                        }["usePointerDownOutside.useEffect.handlePointerDown.handleAndDispatchPointerDownOutsideEvent2"];
                        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                        const eventDetail = {
                            originalEvent: event
                        };
                        if (event.pointerType === "touch") {
                            ownerDocument.removeEventListener("click", handleClickRef.current);
                            handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                            ownerDocument.addEventListener("click", handleClickRef.current, {
                                once: true
                            });
                        } else {
                            handleAndDispatchPointerDownOutsideEvent2();
                        }
                    } else {
                        ownerDocument.removeEventListener("click", handleClickRef.current);
                    }
                    isPointerInsideReactTreeRef.current = false;
                }
            }["usePointerDownOutside.useEffect.handlePointerDown"];
            const timerId = window.setTimeout({
                "usePointerDownOutside.useEffect.timerId": ()=>{
                    ownerDocument.addEventListener("pointerdown", handlePointerDown);
                }
            }["usePointerDownOutside.useEffect.timerId"], 0);
            return ({
                "usePointerDownOutside.useEffect": ()=>{
                    window.clearTimeout(timerId);
                    ownerDocument.removeEventListener("pointerdown", handlePointerDown);
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                }
            })["usePointerDownOutside.useEffect"];
        }
    }["usePointerDownOutside.useEffect"], [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onFocusOutside);
    const isFocusInsideReactTreeRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFocusOutside.useEffect": ()=>{
            const handleFocus = {
                "useFocusOutside.useEffect.handleFocus": (event)=>{
                    if (event.target && !isFocusInsideReactTreeRef.current) {
                        const eventDetail = {
                            originalEvent: event
                        };
                        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                            discrete: false
                        });
                    }
                }
            }["useFocusOutside.useEffect.handleFocus"];
            ownerDocument.addEventListener("focusin", handleFocus);
            return ({
                "useFocusOutside.useEffect": ()=>ownerDocument.removeEventListener("focusin", handleFocus)
            })["useFocusOutside.useEffect"];
        }
    }["useFocusOutside.useEffect"], [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var Root = DismissableLayer;
var Branch = DismissableLayerBranch;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusScope",
    ()=>FocusScope,
    "Root",
    ()=>Root
]);
// src/focus-scope.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const onMountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onUnmountAutoFocusProp);
    const lastFocusedElementRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "FocusScope.useComposedRefs[composedRefs]": (node)=>setContainer(node)
    }["FocusScope.useComposedRefs[composedRefs]"]);
    const focusScope = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FocusScope.useEffect": ()=>{
            if (trapped) {
                let handleFocusIn2 = {
                    "FocusScope.useEffect.handleFocusIn2": function(event) {
                        if (focusScope.paused || !container) return;
                        const target = event.target;
                        if (container.contains(target)) {
                            lastFocusedElementRef.current = target;
                        } else {
                            focus(lastFocusedElementRef.current, {
                                select: true
                            });
                        }
                    }
                }["FocusScope.useEffect.handleFocusIn2"], handleFocusOut2 = {
                    "FocusScope.useEffect.handleFocusOut2": function(event) {
                        if (focusScope.paused || !container) return;
                        const relatedTarget = event.relatedTarget;
                        if (relatedTarget === null) return;
                        if (!container.contains(relatedTarget)) {
                            focus(lastFocusedElementRef.current, {
                                select: true
                            });
                        }
                    }
                }["FocusScope.useEffect.handleFocusOut2"], handleMutations2 = {
                    "FocusScope.useEffect.handleMutations2": function(mutations) {
                        const focusedElement = document.activeElement;
                        if (focusedElement !== document.body) return;
                        for (const mutation of mutations){
                            if (mutation.removedNodes.length > 0) focus(container);
                        }
                    }
                }["FocusScope.useEffect.handleMutations2"];
                var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
                document.addEventListener("focusin", handleFocusIn2);
                document.addEventListener("focusout", handleFocusOut2);
                const mutationObserver = new MutationObserver(handleMutations2);
                if (container) mutationObserver.observe(container, {
                    childList: true,
                    subtree: true
                });
                return ({
                    "FocusScope.useEffect": ()=>{
                        document.removeEventListener("focusin", handleFocusIn2);
                        document.removeEventListener("focusout", handleFocusOut2);
                        mutationObserver.disconnect();
                    }
                })["FocusScope.useEffect"];
            }
        }
    }["FocusScope.useEffect"], [
        trapped,
        container,
        focusScope.paused
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "FocusScope.useEffect": ()=>{
            if (container) {
                focusScopesStack.add(focusScope);
                const previouslyFocusedElement = document.activeElement;
                const hasFocusedCandidate = container.contains(previouslyFocusedElement);
                if (!hasFocusedCandidate) {
                    const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                    container.dispatchEvent(mountEvent);
                    if (!mountEvent.defaultPrevented) {
                        focusFirst(removeLinks(getTabbableCandidates(container)), {
                            select: true
                        });
                        if (document.activeElement === previouslyFocusedElement) {
                            focus(container);
                        }
                    }
                }
                return ({
                    "FocusScope.useEffect": ()=>{
                        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                        setTimeout({
                            "FocusScope.useEffect": ()=>{
                                const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                                container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                                container.dispatchEvent(unmountEvent);
                                if (!unmountEvent.defaultPrevented) {
                                    focus(previouslyFocusedElement ?? document.body, {
                                        select: true
                                    });
                                }
                                container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                                focusScopesStack.remove(focusScope);
                            }
                        }["FocusScope.useEffect"], 0);
                    }
                })["FocusScope.useEffect"];
            }
        }
    }["FocusScope.useEffect"], [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "FocusScope.useCallback[handleKeyDown]": (event)=>{
            if (!loop && !trapped) return;
            if (focusScope.paused) return;
            const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
            const focusedElement = document.activeElement;
            if (isTabKey && focusedElement) {
                const container2 = event.currentTarget;
                const [first, last] = getTabbableEdges(container2);
                const hasTabbableElementsInside = first && last;
                if (!hasTabbableElementsInside) {
                    if (focusedElement === container2) event.preventDefault();
                } else {
                    if (!event.shiftKey && focusedElement === last) {
                        event.preventDefault();
                        if (loop) focus(first, {
                            select: true
                        });
                    } else if (event.shiftKey && focusedElement === first) {
                        event.preventDefault();
                        if (loop) focus(last, {
                            select: true
                        });
                    }
                }
            }
        }
    }["FocusScope.useCallback[handleKeyDown]"], [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root = FocusScope;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root
]);
// src/portal.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-portal/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
var PORTAL_NAME = "Portal";
var Portal = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Portal.useLayoutEffect": ()=>setMounted(true)
    }["Portal.useLayoutEffect"], []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...portalProps,
        ref: forwardedRef
    }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = Portal;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presence",
    ()=>Presence,
    "Root",
    ()=>Root
]);
// src/presence.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"]({
        "useStateMachine.useReducer": (state, event)=>{
            const nextState = machine[state][event];
            return nextState ?? state;
        }
    }["useStateMachine.useReducer"], initialState);
}
// src/presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePresence.useEffect": ()=>{
            const currentAnimationName = getAnimationName(stylesRef.current);
            prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
        }
    }["usePresence.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePresence.useLayoutEffect": ()=>{
            const styles = stylesRef.current;
            const wasPresent = prevPresentRef.current;
            const hasPresentChanged = wasPresent !== present;
            if (hasPresentChanged) {
                const prevAnimationName = prevAnimationNameRef.current;
                const currentAnimationName = getAnimationName(styles);
                if (present) {
                    send("MOUNT");
                } else if (currentAnimationName === "none" || styles?.display === "none") {
                    send("UNMOUNT");
                } else {
                    const isAnimating = prevAnimationName !== currentAnimationName;
                    if (wasPresent && isAnimating) {
                        send("ANIMATION_OUT");
                    } else {
                        send("UNMOUNT");
                    }
                }
                prevPresentRef.current = present;
            }
        }
    }["usePresence.useLayoutEffect"], [
        present,
        send
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePresence.useLayoutEffect": ()=>{
            if (node) {
                let timeoutId;
                const ownerWindow = node.ownerDocument.defaultView ?? window;
                const handleAnimationEnd = {
                    "usePresence.useLayoutEffect.handleAnimationEnd": (event)=>{
                        const currentAnimationName = getAnimationName(stylesRef.current);
                        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
                        if (event.target === node && isCurrentAnimation) {
                            send("ANIMATION_END");
                            if (!prevPresentRef.current) {
                                const currentFillMode = node.style.animationFillMode;
                                node.style.animationFillMode = "forwards";
                                timeoutId = ownerWindow.setTimeout({
                                    "usePresence.useLayoutEffect.handleAnimationEnd": ()=>{
                                        if (node.style.animationFillMode === "forwards") {
                                            node.style.animationFillMode = currentFillMode;
                                        }
                                    }
                                }["usePresence.useLayoutEffect.handleAnimationEnd"]);
                            }
                        }
                    }
                }["usePresence.useLayoutEffect.handleAnimationEnd"];
                const handleAnimationStart = {
                    "usePresence.useLayoutEffect.handleAnimationStart": (event)=>{
                        if (event.target === node) {
                            prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                        }
                    }
                }["usePresence.useLayoutEffect.handleAnimationStart"];
                node.addEventListener("animationstart", handleAnimationStart);
                node.addEventListener("animationcancel", handleAnimationEnd);
                node.addEventListener("animationend", handleAnimationEnd);
                return ({
                    "usePresence.useLayoutEffect": ()=>{
                        ownerWindow.clearTimeout(timeoutId);
                        node.removeEventListener("animationstart", handleAnimationStart);
                        node.removeEventListener("animationcancel", handleAnimationEnd);
                        node.removeEventListener("animationend", handleAnimationEnd);
                    }
                })["usePresence.useLayoutEffect"];
            } else {
                send("ANIMATION_END");
            }
        }
    }["usePresence.useLayoutEffect"], [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "usePresence.useCallback": (node2)=>{
                stylesRef.current = node2 ? getComputedStyle(node2) : null;
                setNode(node2);
            }
        }["usePresence.useCallback"], [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Presence;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusGuards",
    ()=>FocusGuards,
    "Root",
    ()=>FocusGuards,
    "useFocusGuards",
    ()=>useFocusGuards
]);
// src/focus-guards.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFocusGuards.useEffect": ()=>{
            const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
            document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
            document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
            count++;
            return ({
                "useFocusGuards.useEffect": ()=>{
                    if (count === 1) {
                        document.querySelectorAll("[data-radix-focus-guard]").forEach({
                            "useFocusGuards.useEffect": (node)=>node.remove()
                        }["useFocusGuards.useEffect"]);
                    }
                    count--;
                }
            })["useFocusGuards.useEffect"];
        }
    }["useFocusGuards.useEffect"], []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullWidthClassName",
    ()=>fullWidthClassName,
    "noScrollbarsClassName",
    ()=>noScrollbarsClassName,
    "removedBarSizeVariable",
    ()=>removedBarSizeVariable,
    "zeroRightClassName",
    ()=>zeroRightClassName
]);
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
}),
"[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGapWidth",
    ()=>getGapWidth,
    "zeroGap",
    ()=>zeroGap
]);
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
};
}),
"[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollBar",
    ()=>RemoveScrollBar,
    "lockAttribute",
    ()=>lockAttribute,
    "useLockAttribute",
    ()=>useLockAttribute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
var Style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noScrollbarsClassName"], " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"], " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " .").concat(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"], " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removedBarSizeVariable"], ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLockAttribute.useEffect": function() {
            document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
            return ({
                "useLockAttribute.useEffect": function() {
                    var newCounter = getCurrentUseCounter() - 1;
                    if (newCounter <= 0) {
                        document.body.removeAttribute(lockAttribute);
                    } else {
                        document.body.setAttribute(lockAttribute, newCounter.toString());
                    }
                }
            })["useLockAttribute.useEffect"];
        }
    }["useLockAttribute.useEffect"], []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "RemoveScrollBar.useMemo[gap]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGapWidth"])(gapMode);
        }
    }["RemoveScrollBar.useMemo[gap]"], [
        gapMode
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
}),
"[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/saas/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */ __turbopack_context__.s([
    "assignRef",
    ()=>assignRef
]);
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
    return ref;
}
}),
"[project]/saas/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCallbackRef.useState": function() {
            return {
                // value
                value: initialValue,
                // last callback
                callback: callback,
                // "memoized" public interface
                facade: {
                    get current () {
                        return ref.value;
                    },
                    set current (value){
                        var last = ref.value;
                        if (last !== value) {
                            ref.value = value;
                            ref.callback(value, last);
                        }
                    }
                }
            };
        }
    }["useCallbackRef.useState"])[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
}),
"[project]/saas/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMergeRefs",
    ()=>useMergeRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)");
;
;
;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(defaultValue || null, {
        "useMergeRefs.useCallbackRef[callbackRef]": function(newValue) {
            return refs.forEach({
                "useMergeRefs.useCallbackRef[callbackRef]": function(ref) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, newValue);
                }
            }["useMergeRefs.useCallbackRef[callbackRef]"]);
        }
    }["useMergeRefs.useCallbackRef[callbackRef]"]);
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect({
        "useMergeRefs.useIsomorphicLayoutEffect": function() {
            var oldValue = currentValues.get(callbackRef);
            if (oldValue) {
                var prevRefs_1 = new Set(oldValue);
                var nextRefs_1 = new Set(refs);
                var current_1 = callbackRef.current;
                prevRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!nextRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, null);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
                nextRefs_1.forEach({
                    "useMergeRefs.useIsomorphicLayoutEffect": function(ref) {
                        if (!prevRefs_1.has(ref)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$assignRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assignRef"])(ref, current_1);
                        }
                    }
                }["useMergeRefs.useIsomorphicLayoutEffect"]);
            }
            currentValues.set(callbackRef, refs);
        }
    }["useMergeRefs.useIsomorphicLayoutEffect"], [
        refs
    ]);
    return callbackRef;
}
}),
"[project]/saas/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMedium",
    ()=>createMedium,
    "createSidecarMedium",
    ()=>createSidecarMedium
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
        async: true,
        ssr: false
    }, options);
    return medium;
}
}),
"[project]/saas/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportSidecar",
    ()=>exportSidecar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
}),
"[project]/saas/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectCar",
    ()=>effectCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)");
;
var effectCar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSidecarMedium"])();
}),
"[project]/saas/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>RemoveScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__rest"])(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$callback$2d$ref$2f$dist$2f$es2015$2f$useMergeRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMergeRefs"])([
        ref,
        parentRef
    ]);
    var containerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, rest), callbacks);
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, enabled && __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](SideCar, {
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"],
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children), (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullWidthClassName"],
    zeroRight: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeroRightClassName"]
};
;
}),
"[project]/saas/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonPassive",
    ()=>nonPassive
]);
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function() {
                passiveSupported = true;
                return true;
            }
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    } catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
}),
"[project]/saas/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleScroll",
    ()=>handleScroll,
    "locationCouldBeScrolled",
    ()=>locationCouldBeScrolled
]);
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
}),
"[project]/saas/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScrollSideCar",
    ()=>RemoveScrollSideCar,
    "getDeltaXY",
    ()=>getDeltaXY,
    "getTouchXY",
    ()=>getTouchXY
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)");
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]();
    var id = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleSingleton"])[0];
    var lastProps = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](props);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lastProps.current = props;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            if (props.inert) {
                document.body.classList.add("block-interactivity-".concat(id));
                var allow_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                    props.lockRef.current
                ], (props.shards || []).map(extractRef), true).filter(Boolean);
                allow_1.forEach({
                    "RemoveScrollSideCar.useEffect": function(el) {
                        return el.classList.add("allow-interactivity-".concat(id));
                    }
                }["RemoveScrollSideCar.useEffect"]);
                return ({
                    "RemoveScrollSideCar.useEffect": function() {
                        document.body.classList.remove("block-interactivity-".concat(id));
                        allow_1.forEach({
                            "RemoveScrollSideCar.useEffect": function(el) {
                                return el.classList.remove("allow-interactivity-".concat(id));
                            }
                        }["RemoveScrollSideCar.useEffect"]);
                    }
                })["RemoveScrollSideCar.useEffect"];
            }
            return;
        }
    }["RemoveScrollSideCar.useEffect"], [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancelEvent]": function(event, parent) {
            if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
                return !lastProps.current.allowPinchZoom;
            }
            var touch = getTouchXY(event);
            var touchStart = touchStartRef.current;
            var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
            var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
            var currentAxis;
            var target = event.target;
            var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
            // allow horizontal touch move on Range inputs. They will not cause any scroll
            if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
                return false;
            }
            // allow drag selection (iOS); check if selection's anchorNode is the same as target or contains target
            var selection = window.getSelection();
            var anchorNode = selection && selection.anchorNode;
            var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
            if (isTouchingSelection) {
                return false;
            }
            var canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            if (!canBeScrolledInMainDirection) {
                return true;
            }
            if (canBeScrolledInMainDirection) {
                currentAxis = moveDirection;
            } else {
                currentAxis = moveDirection === 'v' ? 'h' : 'v';
                canBeScrolledInMainDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["locationCouldBeScrolled"])(moveDirection, target);
            // other axis might be not scrollable
            }
            if (!canBeScrolledInMainDirection) {
                return false;
            }
            if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
                activeAxis.current = currentAxis;
            }
            if (!currentAxis) {
                return true;
            }
            var cancelingAxis = activeAxis.current || currentAxis;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$handleScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleScroll"])(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancelEvent]"], []);
    var shouldPrevent = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldPrevent]": function(_event) {
            var event = _event;
            if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
                // not the last active
                return;
            }
            var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
            var sourceEvent = shouldPreventQueue.current.filter({
                "RemoveScrollSideCar.useCallback[shouldPrevent]": function(e) {
                    return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
                }
            }["RemoveScrollSideCar.useCallback[shouldPrevent]"])[0];
            // self event, and should be canceled
            if (sourceEvent && sourceEvent.should) {
                if (event.cancelable) {
                    event.preventDefault();
                }
                return;
            }
            // outside or shard event
            if (!sourceEvent) {
                var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter({
                    "RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes": function(node) {
                        return node.contains(event.target);
                    }
                }["RemoveScrollSideCar.useCallback[shouldPrevent].shardNodes"]);
                var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
                if (shouldStop) {
                    if (event.cancelable) {
                        event.preventDefault();
                    }
                }
            }
        }
    }["RemoveScrollSideCar.useCallback[shouldPrevent]"], []);
    var shouldCancel = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[shouldCancel]": function(name, delta, target, should) {
            var event = {
                name: name,
                delta: delta,
                target: target,
                should: should,
                shadowParent: getOutermostShadowParent(target)
            };
            shouldPreventQueue.current.push(event);
            setTimeout({
                "RemoveScrollSideCar.useCallback[shouldCancel]": function() {
                    shouldPreventQueue.current = shouldPreventQueue.current.filter({
                        "RemoveScrollSideCar.useCallback[shouldCancel]": function(e) {
                            return e !== event;
                        }
                    }["RemoveScrollSideCar.useCallback[shouldCancel]"]);
                }
            }["RemoveScrollSideCar.useCallback[shouldCancel]"], 1);
        }
    }["RemoveScrollSideCar.useCallback[shouldCancel]"], []);
    var scrollTouchStart = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchStart]": function(event) {
            touchStartRef.current = getTouchXY(event);
            activeAxis.current = undefined;
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchStart]"], []);
    var scrollWheel = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollWheel]": function(event) {
            shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollWheel]"], []);
    var scrollTouchMove = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "RemoveScrollSideCar.useCallback[scrollTouchMove]": function(event) {
            shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
        }
    }["RemoveScrollSideCar.useCallback[scrollTouchMove]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RemoveScrollSideCar.useEffect": function() {
            lockStack.push(Style);
            props.setCallbacks({
                onScrollCapture: scrollWheel,
                onWheelCapture: scrollWheel,
                onTouchMoveCapture: scrollTouchMove
            });
            document.addEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            document.addEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
            return ({
                "RemoveScrollSideCar.useEffect": function() {
                    lockStack = lockStack.filter({
                        "RemoveScrollSideCar.useEffect": function(inst) {
                            return inst !== Style;
                        }
                    }["RemoveScrollSideCar.useEffect"]);
                    document.removeEventListener('wheel', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchmove', shouldPrevent, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                    document.removeEventListener('touchstart', scrollTouchStart, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$aggresiveCapture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonPassive"]);
                }
            })["RemoveScrollSideCar.useEffect"];
        }
    }["RemoveScrollSideCar.useEffect"], []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, inert ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2d$bar$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollBar"], {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
}),
"[project]/saas/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$sidecar$2f$dist$2f$es2015$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportSidecar"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$medium$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectCar"], __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$SideEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScrollSideCar"]);
}),
"[project]/saas/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)");
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$sidecar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }));
});
ReactRemoveScroll.classNames = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveScroll"].classNames;
const __TURBOPACK__default__export__ = ReactRemoveScroll;
}),
"[project]/saas/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveScroll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNonce",
    ()=>getNonce,
    "setNonce",
    ()=>setNonce
]);
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
}),
"[project]/saas/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stylesheetSingleton",
    ()=>stylesheetSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)");
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$get$2d$nonce$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNonce"])();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
}),
"[project]/saas/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleHookSingleton",
    ()=>styleHookSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
;
;
var styleHookSingleton = function() {
    var sheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stylesheetSingleton"])();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
            "styleHookSingleton.useEffect": function() {
                sheet.add(styles);
                return ({
                    "styleHookSingleton.useEffect": function() {
                        sheet.remove();
                    }
                })["styleHookSingleton.useEffect"];
            }
        }["styleHookSingleton.useEffect"], [
            styles && isDynamic
        ]);
    };
};
}),
"[project]/saas/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "styleSingleton",
    ()=>styleSingleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
var styleSingleton = function() {
    var useStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styleHookSingleton"])();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
}),
"[project]/saas/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$singleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$style$2d$singleton$2f$dist$2f$es2015$2f$hook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)");
;
;
;
}),
"[project]/saas/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hideOthers",
    ()=>hideOthers,
    "inertOthers",
    ()=>inertOthers,
    "supportsInert",
    ()=>supportsInert,
    "suppressOthers",
    ()=>suppressOthers
]);
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
}),
"[project]/saas/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Close",
    ()=>Close,
    "Content",
    ()=>Content,
    "Description",
    ()=>Description,
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger,
    "Overlay",
    ()=>Overlay,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root,
    "Title",
    ()=>Title,
    "Trigger",
    ()=>Trigger,
    "WarningProvider",
    ()=>WarningProvider,
    "createDialogScope",
    ()=>createDialogScope
]);
// src/dialog.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-dialog/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props)=>{
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: DIALOG_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        titleId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        descriptionId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "Dialog.useCallback": ()=>setOpen({
                    "Dialog.useCallback": (prevOpen)=>!prevOpen
                }["Dialog.useCallback"])
        }["Dialog.useCallback"], [
            setOpen
        ]),
        modal,
        children
    });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
    forceMount: void 0
});
var DialogPortal = (props)=>{
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
                present: forceMount || context.open,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                    asChild: true,
                    container,
                    children: child
                })
            }))
    });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return(// Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
        as: Slot,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ],
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "auto",
                ...overlayProps.style
            }
        })
    }));
});
var CONTENT_NAME = "DialogContent";
var DialogContent = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.contentRef, contentRef);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DialogContentModal.useEffect": ()=>{
            const content = contentRef.current;
            if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideOthers"])(content);
        }
    }["DialogContentModal.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault())
    });
});
var DialogContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerDownOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DialogContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var DialogContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                loop: true,
                trapped: trapFocus,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    role: "dialog",
                    id: context.contentId,
                    "aria-describedby": context.descriptionId,
                    "aria-labelledby": context.titleId,
                    "data-state": getState(context.open),
                    ...contentProps,
                    ref: composedRefs,
                    onDismiss: ()=>context.onOpenChange(false)
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TitleWarning, {
                        titleId: context.titleId
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DescriptionWarning, {
                        contentRef,
                        descriptionId: context.descriptionId
                    })
                ]
            })
        ]
    });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].h2, {
        id: context.titleId,
        ...titleProps,
        ref: forwardedRef
    });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].p, {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
    });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, ()=>context.onOpenChange(false))
    });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
});
var TitleWarning = ({ titleId })=>{
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TitleWarning.useEffect": ()=>{
            if (titleId) {
                const hasTitle = document.getElementById(titleId);
                if (!hasTitle) console.error(MESSAGE);
            }
        }
    }["TitleWarning.useEffect"], [
        MESSAGE,
        titleId
    ]);
    return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId })=>{
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "DescriptionWarning.useEffect": ()=>{
            const describedById = contentRef.current?.getAttribute("aria-describedby");
            if (descriptionId && describedById) {
                const hasDescription = document.getElementById(descriptionId);
                if (!hasDescription) console.warn(MESSAGE);
            }
        }
    }["DescriptionWarning.useEffect"], [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript) <export * as Dialog>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alignments",
    ()=>alignments,
    "clamp",
    ()=>clamp,
    "createCoords",
    ()=>createCoords,
    "evaluate",
    ()=>evaluate,
    "expandPaddingObject",
    ()=>expandPaddingObject,
    "floor",
    ()=>floor,
    "getAlignment",
    ()=>getAlignment,
    "getAlignmentAxis",
    ()=>getAlignmentAxis,
    "getAlignmentSides",
    ()=>getAlignmentSides,
    "getAxisLength",
    ()=>getAxisLength,
    "getExpandedPlacements",
    ()=>getExpandedPlacements,
    "getOppositeAlignmentPlacement",
    ()=>getOppositeAlignmentPlacement,
    "getOppositeAxis",
    ()=>getOppositeAxis,
    "getOppositeAxisPlacements",
    ()=>getOppositeAxisPlacements,
    "getOppositePlacement",
    ()=>getOppositePlacement,
    "getPaddingObject",
    ()=>getPaddingObject,
    "getSide",
    ()=>getSide,
    "getSideAxis",
    ()=>getSideAxis,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "placements",
    ()=>placements,
    "rectToClientRect",
    ()=>rectToClientRect,
    "round",
    ()=>round,
    "sides",
    ()=>sides
]);
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */ const sides = [
    'top',
    'right',
    'bottom',
    'left'
];
const alignments = [
    'start',
    'end'
];
const placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v)=>({
        x: v,
        y: v
    });
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
};
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
    return placement.split('-')[0];
}
function getAlignment(placement) {
    return placement.split('-')[1];
}
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/ new Set([
    'top',
    'bottom'
]);
function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
        rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment)=>oppositeAlignmentMap[alignment]);
}
const lrPlacement = [
    'left',
    'right'
];
const rlPlacement = [
    'right',
    'left'
];
const tbPlacement = [
    'top',
    'bottom'
];
const btPlacement = [
    'bottom',
    'top'
];
function getSideList(side, isStart, rtl) {
    switch(side){
        case 'top':
        case 'bottom':
            if (rtl) return isStart ? rlPlacement : lrPlacement;
            return isStart ? lrPlacement : rlPlacement;
        case 'left':
        case 'right':
            return isStart ? tbPlacement : btPlacement;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) {
            list = list.concat(list.map(getOppositeAlignmentPlacement));
        }
    }
    return list;
}
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side)=>oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
    };
}
;
}),
"[project]/saas/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComputedStyle",
    ()=>getComputedStyle,
    "getContainingBlock",
    ()=>getContainingBlock,
    "getDocumentElement",
    ()=>getDocumentElement,
    "getFrameElement",
    ()=>getFrameElement,
    "getNearestOverflowAncestor",
    ()=>getNearestOverflowAncestor,
    "getNodeName",
    ()=>getNodeName,
    "getNodeScroll",
    ()=>getNodeScroll,
    "getOverflowAncestors",
    ()=>getOverflowAncestors,
    "getParentNode",
    ()=>getParentNode,
    "getWindow",
    ()=>getWindow,
    "isContainingBlock",
    ()=>isContainingBlock,
    "isElement",
    ()=>isElement,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isLastTraversableNode",
    ()=>isLastTraversableNode,
    "isNode",
    ()=>isNode,
    "isOverflowElement",
    ()=>isOverflowElement,
    "isShadowRoot",
    ()=>isShadowRoot,
    "isTableElement",
    ()=>isTableElement,
    "isTopLayer",
    ()=>isTopLayer,
    "isWebKit",
    ()=>isWebKit
]);
function hasWindow() {
    return typeof window !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
        return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/ new Set([
    'inline',
    'contents'
]);
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/ new Set([
    'table',
    'td',
    'th'
]);
function isTableElement(element) {
    return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [
    ':popover-open',
    ':modal'
];
function isTopLayer(element) {
    return topLayerSelectors.some((selector)=>{
        try {
            return element.matches(selector);
        } catch (_e) {
            return false;
        }
    });
}
const transformProperties = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective'
];
const willChangeValues = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
    'filter'
];
const containValues = [
    'paint',
    'layout',
    'strict',
    'content'
];
function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return transformProperties.some((value)=>css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some((value)=>(css.willChange || '').includes(value)) || containValues.some((value)=>(css.contain || '').includes(value));
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) {
            return currentNode;
        } else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/ new Set([
    'html',
    'body',
    '#document'
]);
function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') {
        return node;
    }
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
        list = [];
    }
    if (traverseIframes === void 0) {
        traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
;
}),
"[project]/saas/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
;
;
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
    const alignmentAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
    const alignLength = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisLength"])(alignmentAxis);
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
        options = {};
    }
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for(let i = 0; i < validMiddleware.length; i++){
        var _platform$detectOverf;
        const { name, fn } = validMiddleware[i];
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform: {
                ...platform,
                detectOverflow: (_platform$detectOverf = platform.detectOverflow) != null ? _platform$detectOverf : detectOverflow
            },
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
            ...middlewareData,
            [name]: {
                ...middlewareData[name],
                ...data
            }
        };
        if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) {
                    statefulPlacement = reset.placement;
                }
                if (reset.rects) {
                    rects = reset.rects === true ? await platform.getElementRects({
                        reference,
                        floating,
                        strategy
                    }) : reset.rects;
                }
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state) || {};
            if (element == null) {
                return {};
            }
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentAxis"])(placement);
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisLength"])(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
                clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment),
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement) === alignment || (autoAlignment ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAlignmentPlacement"])(placement) !== placement : false);
        }
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"], autoAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["placements"] ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) {
                return {};
            }
            const alignmentSides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentSides"])(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) {
                return {
                    reset: {
                        placement: placements$1[0]
                    }
                };
            }
            const currentOverflows = [
                overflow[(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
            }
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const initialSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(initialPlacement);
            const isBasePlacement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositePlacement"])(initialPlacement)
            ] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpandedPlacements"])(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
                fallbackPlacements.push(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxisPlacements"])(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            }
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
                overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
                const sides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentSides"])(placement, rects, rtl);
                overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) {
                    const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(nextPlacement) : false;
                    if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
                    // overflows the main axis.
                    overflowsData.every((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
                        // Try next placement and re-run the lifecycle.
                        return {
                            data: {
                                index: nextIndex,
                                overflows: overflowsData
                            },
                            reset: {
                                placement: nextPlacement
                            }
                        };
                    }
                }
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) {
                    switch(fallbackStrategy){
                        case 'bestFit':
                            {
                                var _overflowsData$filter2;
                                const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                    if (hasFallbackAxisSideDirection) {
                                        const currentSideAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(d.placement);
                                        return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                        // reading directions favoring greater width.
                                        currentSideAxis === 'y';
                                    }
                                    return true;
                                }).map((d)=>[
                                        d.placement,
                                        d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                    ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                                if (placement) {
                                    resetPlacement = placement;
                                }
                                break;
                            }
                        case 'initialPlacement':
                            resetPlacement = initialPlacement;
                            break;
                    }
                }
                if (placement !== resetPlacement) {
                    return {
                        reset: {
                            placement: resetPlacement
                        }
                    };
                }
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sides"].some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects, platform } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await platform.detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await platform.detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    {
                        return {};
                    }
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.left));
    const minY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...rects.map((rect)=>rect.top));
    const maxX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.right));
    const maxY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
            groups.push([
                rect
            ]);
        } else {
            groups[groups.length - 1].push(rect);
        }
        prevRect = rect;
    }
    return groups.map((rect)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(getBoundingRect(nativeClientRects));
            const paddingObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingObject"])(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                    // Find the first rect in which the point is fully inside.
                    return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                }
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement) === 'left';
                    const maxRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(...clientRects.map((rect)=>rect.right));
                    const minLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
                return {
                    reset: {
                        rects: resetRects
                    }
                };
            }
            return {};
        }
    };
};
const originSides = /*#__PURE__*/ new Set([
    'left',
    'top'
]);
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
    const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
    const isVertical = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') {
        crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) {
        options = 0;
    }
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement, platform } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement));
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement);
            const mainAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) {
                    mainAxisCoord = limitMin;
                } else if (mainAxisCoord > limitMax) {
                    mainAxisCoord = limitMax;
                }
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = originSides.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) {
                    crossAxisCoord = limitMin;
                } else if (crossAxisCoord > limitMax) {
                    crossAxisCoord = limitMax;
                }
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["evaluate"])(options, state);
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const side = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSide"])(placement);
            const alignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignment"])(placement);
            const isYAxis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSideAxis"])(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
                availableWidth = maximumClippingWidth;
            }
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
                availableHeight = maximumClippingHeight;
            }
            if (noShift && !alignment) {
                const xMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.left, 0);
                const xMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.right, 0);
                const yMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.top, 0);
                const yMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.bottom, 0);
                if (isYAxis) {
                    availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.left, overflow.right));
                } else {
                    availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(overflow.top, overflow.bottom));
                }
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) {
                return {
                    reset: {
                        rects: true
                    }
                };
            }
            return {};
        }
    };
};
;
}),
"[project]/saas/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "autoUpdate",
    ()=>autoUpdate,
    "computePosition",
    ()=>computePosition,
    "detectOverflow",
    ()=>detectOverflow,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "platform",
    ()=>platform,
    "shift",
    ()=>shift,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)");
;
;
;
;
function getCssDimensions(element) {
    const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(width) !== offsetWidth || (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(domElement)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    }
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.width) : rect.width) / width;
    let y = ($ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) {
        x = 1;
    }
    if (!y || !Number.isFinite(y)) {
        y = 1;
    }
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
function getVisualOffsets(element) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])() || !win.visualViewport) {
        return noOffsets;
    }
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element)) {
        return false;
    }
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(offsetParent)) {
                scale = getScale(offsetParent);
            }
        } else {
            scale = getScale(element);
        }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(domElement);
        const offsetWin = offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(offsetParent) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(currentIFrame);
            currentIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFrameElement"])(currentWin);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(element).scrollLeft;
    if (!rect) {
        return getBoundingClientRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const topLayer = elements ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
    }
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(element);
    const body = element.ownerDocument.body;
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(body).direction === 'rtl') {
        x += (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(html.clientWidth, body.clientWidth) - width;
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
    // visual width of the <html> but this is not considered in the size
    // of `html.clientWidth`.
    if (windowScrollbarX <= 0) {
        const doc = html.ownerDocument;
        const body = doc.body;
        const bodyStyles = getComputedStyle(body);
        const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
        const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
        if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
            width -= clippingStableScrollbarWidth;
        }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
        // If the <body> scrollbar is on the left, the width needs to be extended
        // by the scrollbar amount so there isn't extra space on the right.
        width += windowScrollbarX;
    }
    return {
        width,
        height,
        x,
        y
    };
}
const absoluteOrFixed = /*#__PURE__*/ new Set([
    'absolute',
    'fixed'
]);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) ? getScale(element) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
        rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
        rect = getDocumentRect((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element));
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectToClientRect"])(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element);
    if (parentNode === stopNode || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(parentNode) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(parentNode)) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
        return cachedResult;
    }
    let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(element, [], false).filter((el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(el) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(currentNode) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(currentNode)){
        const computedStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(currentNode);
        const currentNodeIsContaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContainingBlock"])(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
            currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
            // Drop non-containing blocks.
            result = result.filter((ancestor)=>ancestor !== currentNode);
        } else {
            // Record last containing block for next iteration.
            currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor)=>{
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.top, accRect.top);
        accRect.right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.right, accRect.right);
        accRect.bottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(rect.bottom, accRect.bottom);
        accRect.left = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(offsetParent);
    const documentElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeScroll"])(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
            setLeftRTLScrollbarOffset();
        }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
        setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCoords"])(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).position === 'fixed') {
        return null;
    }
    if (polyfill) {
        return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element) === rawOffsetParent) {
        rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindow"])(element);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTopLayer"])(element)) {
        return win;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(element)) {
        let svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(element);
        while(svgOffsetParent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(svgOffsetParent)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"])(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
                return svgOffsetParent;
            }
            svgOffsetParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParentNode"])(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTableElement"])(offsetParent) && isStaticPositioned(offsetParent)){
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLastTraversableNode"])(offsetParent) && isStaticPositioned(offsetParent) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContainingBlock"])(offsetParent)) {
        return win;
    }
    return offsetParent || (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContainingBlock"])(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(element).direction === 'rtl';
}
const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"],
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElement"],
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentElement"])(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) {
            skip = false;
        }
        if (threshold === void 0) {
            threshold = 1;
        }
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) {
            onMove();
        }
        if (!width || !height) {
            return;
        }
        const insetTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(top);
        const insetRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(root.clientWidth - (left + width));
        const insetBottom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(root.clientHeight - (top + height));
        const insetLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floor"])(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }
                if (!ratio) {
                    // If the reference is clipped, the ratio is 0. Throttle the refresh
                    // to prevent an infinite loop of updates.
                    timeoutId = setTimeout(()=>{
                        refresh(false, 1e-7);
                    }, 1000);
                } else {
                    refresh(false, ratio);
                }
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                // It's possible that even though the ratio is reported as 1, the
                // element is not actually fully within the IntersectionObserver's root
                // area anymore. This can happen under performance constraints. This may
                // be a bug in the browser's IntersectionObserver implementation. To
                // work around this, we compare the element's bounding rect now with
                // what it was at the time we created the IntersectionObserver. If they
                // are not equal then the element moved, so we refresh.
                refresh();
            }
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
        options = {};
    }
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(referenceEl) : [],
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$utils$2f$dist$2f$floating$2d$ui$2e$utils$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOverflowAncestors"])(floating)
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) {
            resizeObserver.observe(referenceEl);
        }
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
        frameLoop();
    }
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
            update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) {
            cancelAnimationFrame(frameId);
        }
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectOverflow"];
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"];
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"];
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"];
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"];
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"];
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"];
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"];
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"];
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"];
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$core$2f$dist$2f$floating$2d$ui$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};
;
}),
"[project]/saas/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrow",
    ()=>arrow,
    "autoPlacement",
    ()=>autoPlacement,
    "flip",
    ()=>flip,
    "hide",
    ()=>hide,
    "inline",
    ()=>inline,
    "limitShift",
    ()=>limitShift,
    "offset",
    ()=>offset,
    "shift",
    ()=>shift,
    "size",
    ()=>size,
    "useFloating",
    ()=>useFloating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
;
;
;
var isClient = typeof document !== 'undefined';
var noop = function noop() {};
var index = isClient ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : noop;
// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'function' && a.toString() === b.toString()) {
        return true;
    }
    let length;
    let i;
    let keys;
    if (a && b && typeof a === 'object') {
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;){
                if (!deepEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }
        for(i = length; i-- !== 0;){
            if (!({}).hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
}
function getDPR(element) {
    if (typeof window === 'undefined') {
        return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](value);
    index(()=>{
        ref.current = value;
    });
    return ref;
}
/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */ function useFloating(options) {
    if (options === void 0) {
        options = {};
    }
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
    const [data, setData] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        x: 0,
        y: 0,
        strategy,
        placement,
        middlewareData: {},
        isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
        setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [_floating, _setFloating] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const setReference = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[setReference]": (node)=>{
            if (node !== referenceRef.current) {
                referenceRef.current = node;
                _setReference(node);
            }
        }
    }["useFloating.useCallback[setReference]"], []);
    const setFloating = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[setFloating]": (node)=>{
            if (node !== floatingRef.current) {
                floatingRef.current = node;
                _setFloating(node);
            }
        }
    }["useFloating.useCallback[setFloating]"], []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const floatingRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const dataRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform);
    const openRef = useLatestRef(open);
    const update = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useFloating.useCallback[update]": ()=>{
            if (!referenceRef.current || !floatingRef.current) {
                return;
            }
            const config = {
                placement,
                strategy,
                middleware: latestMiddleware
            };
            if (platformRef.current) {
                config.platform = platformRef.current;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["computePosition"])(referenceRef.current, floatingRef.current, config).then({
                "useFloating.useCallback[update]": (data)=>{
                    const fullData = {
                        ...data,
                        // The floating element's position may be recomputed while it's closed
                        // but still mounted (such as when transitioning out). To ensure
                        // `isPositioned` will be `false` initially on the next open, avoid
                        // setting it to `true` when `open === false` (must be specified).
                        isPositioned: openRef.current !== false
                    };
                    if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
                        dataRef.current = fullData;
                        __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"]({
                            "useFloating.useCallback[update]": ()=>{
                                setData(fullData);
                            }
                        }["useFloating.useCallback[update]"]);
                    }
                }
            }["useFloating.useCallback[update]"]);
        }
    }["useFloating.useCallback[update]"], [
        latestMiddleware,
        placement,
        strategy,
        platformRef,
        openRef
    ]);
    index(()=>{
        if (open === false && dataRef.current.isPositioned) {
            dataRef.current.isPositioned = false;
            setData((data)=>({
                    ...data,
                    isPositioned: false
                }));
        }
    }, [
        open
    ]);
    const isMountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    index(()=>{
        isMountedRef.current = true;
        return ()=>{
            isMountedRef.current = false;
        };
    }, []);
    index(()=>{
        if (referenceEl) referenceRef.current = referenceEl;
        if (floatingEl) floatingRef.current = floatingEl;
        if (referenceEl && floatingEl) {
            if (whileElementsMountedRef.current) {
                return whileElementsMountedRef.current(referenceEl, floatingEl, update);
            }
            update();
        }
    }, [
        referenceEl,
        floatingEl,
        update,
        whileElementsMountedRef,
        hasWhileElementsMounted
    ]);
    const refs = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[refs]": ()=>({
                reference: referenceRef,
                floating: floatingRef,
                setReference,
                setFloating
            })
    }["useFloating.useMemo[refs]"], [
        setReference,
        setFloating
    ]);
    const elements = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[elements]": ()=>({
                reference: referenceEl,
                floating: floatingEl
            })
    }["useFloating.useMemo[elements]"], [
        referenceEl,
        floatingEl
    ]);
    const floatingStyles = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo[floatingStyles]": ()=>{
            const initialStyles = {
                position: strategy,
                left: 0,
                top: 0
            };
            if (!elements.floating) {
                return initialStyles;
            }
            const x = roundByDPR(elements.floating, data.x);
            const y = roundByDPR(elements.floating, data.y);
            if (transform) {
                return {
                    ...initialStyles,
                    transform: "translate(" + x + "px, " + y + "px)",
                    ...getDPR(elements.floating) >= 1.5 && {
                        willChange: 'transform'
                    }
                };
            }
            return {
                position: strategy,
                left: x,
                top: y
            };
        }
    }["useFloating.useMemo[floatingStyles]"], [
        strategy,
        transform,
        elements.floating,
        data.x,
        data.y
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFloating.useMemo": ()=>({
                ...data,
                update,
                refs,
                elements,
                floatingStyles
            })
    }["useFloating.useMemo"], [
        data,
        update,
        refs,
        elements,
        floatingStyles
    ]);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow$1 = (options)=>{
    function isRef(value) {
        return ({}).hasOwnProperty.call(value, 'current');
    }
    return {
        name: 'arrow',
        options,
        fn (state) {
            const { element, padding } = typeof options === 'function' ? options(state) : options;
            if (element && isRef(element)) {
                if (element.current != null) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                        element: element.current,
                        padding
                    }).fn(state);
                }
                return {};
            }
            if (element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                    element,
                    padding
                }).fn(state);
            }
            return {};
        }
    };
};
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoPlacement"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = (options, deps)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["inline"])(options),
        options: [
            options,
            deps
        ]
    });
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options, deps)=>({
        ...arrow$1(options),
        options: [
            options,
            deps
        ]
    });
;
}),
"[project]/saas/node_modules/@radix-ui/react-arrow/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow,
    "Root",
    ()=>Root
]);
// src/arrow.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$arrow$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-arrow/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var NAME = "Arrow";
var Arrow = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, width = 10, height = 5, ...arrowProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$arrow$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].svg, {
        ...arrowProps,
        ref: forwardedRef,
        width,
        height,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: props.asChild ? children : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("polygon", {
            points: "0,0 30,0 15,10"
        })
    });
});
Arrow.displayName = NAME;
var Root = Arrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSize",
    ()=>useSize
]);
// packages/react/use-size/src/use-size.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
;
;
function useSize(element) {
    const [size, setSize] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](void 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useSize.useLayoutEffect": ()=>{
            if (element) {
                setSize({
                    width: element.offsetWidth,
                    height: element.offsetHeight
                });
                const resizeObserver = new ResizeObserver({
                    "useSize.useLayoutEffect": (entries)=>{
                        if (!Array.isArray(entries)) {
                            return;
                        }
                        if (!entries.length) {
                            return;
                        }
                        const entry = entries[0];
                        let width;
                        let height;
                        if ("borderBoxSize" in entry) {
                            const borderSizeEntry = entry["borderBoxSize"];
                            const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
                            width = borderSize["inlineSize"];
                            height = borderSize["blockSize"];
                        } else {
                            width = element.offsetWidth;
                            height = element.offsetHeight;
                        }
                        setSize({
                            width,
                            height
                        });
                    }
                }["useSize.useLayoutEffect"]);
                resizeObserver.observe(element, {
                    box: "border-box"
                });
                return ({
                    "useSize.useLayoutEffect": ()=>resizeObserver.unobserve(element)
                })["useSize.useLayoutEffect"];
            } else {
                setSize(void 0);
            }
        }
    }["useSize.useLayoutEffect"], [
        element
    ]);
    return size;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-popper/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALIGN_OPTIONS",
    ()=>ALIGN_OPTIONS,
    "Anchor",
    ()=>Anchor,
    "Arrow",
    ()=>Arrow,
    "Content",
    ()=>Content,
    "Popper",
    ()=>Popper,
    "PopperAnchor",
    ()=>PopperAnchor,
    "PopperArrow",
    ()=>PopperArrow,
    "PopperContent",
    ()=>PopperContent,
    "Root",
    ()=>Root2,
    "SIDE_OPTIONS",
    ()=>SIDE_OPTIONS,
    "createPopperScope",
    ()=>createPopperScope
]);
// src/popper.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$arrow$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-arrow/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-size/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
var SIDE_OPTIONS = [
    "top",
    "right",
    "bottom",
    "left"
];
var ALIGN_OPTIONS = [
    "start",
    "center",
    "end"
];
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props)=>{
    const { __scopePopper, children } = props;
    const [anchor, setAnchor] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopperProvider, {
        scope: __scopePopper,
        anchor,
        onAnchorChange: setAnchor,
        children
    });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const anchorRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PopperAnchor.useEffect": ()=>{
            const previousAnchor = anchorRef.current;
            anchorRef.current = virtualRef?.current || ref.current;
            if (previousAnchor !== anchorRef.current) {
                context.onAnchorChange(anchorRef.current);
            }
        }
    }["PopperAnchor.useEffect"]);
    return virtualRef ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...anchorProps,
        ref: composedRefs
    });
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "PopperContent.useComposedRefs[composedRefs]": (node)=>setContent(node)
    }["PopperContent.useComposedRefs[composedRefs]"]);
    const [arrow, setArrow] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const arrowSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$size$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSize"])(arrow);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter(isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: "fixed",
        placement: desiredPlacement,
        whileElementsMounted: {
            "PopperContent.useFloating": (...args)=>{
                const cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"])(...args, {
                    animationFrame: updatePositionStrategy === "always"
                });
                return cleanup;
            }
        }["PopperContent.useFloating"],
        elements: {
            reference: context.anchor
        },
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions && (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === "partial" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["limitShift"])() : void 0,
                ...detectOverflowOptions
            }),
            avoidCollisions && (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                ...detectOverflowOptions
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])({
                ...detectOverflowOptions,
                apply: {
                    "PopperContent.useFloating": ({ elements, rects, availableWidth, availableHeight })=>{
                        const { width: anchorWidth, height: anchorHeight } = rects.reference;
                        const contentStyle = elements.floating.style;
                        contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
                        contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
                        contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
                        contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
                    }
                }["PopperContent.useFloating"]
            }),
            arrow && (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                element: arrow,
                padding: arrowPadding
            }),
            transformOrigin({
                arrowWidth,
                arrowHeight
            }),
            hideWhenDetached && (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hide"])({
                strategy: "referenceHidden",
                ...detectOverflowOptions
            })
        ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onPlaced);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "PopperContent.useLayoutEffect": ()=>{
            if (isPositioned) {
                handlePlaced?.();
            }
        }
    }["PopperContent.useLayoutEffect"], [
        isPositioned,
        handlePlaced
    ]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "PopperContent.useLayoutEffect": ()=>{
            if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
        }
    }["PopperContent.useLayoutEffect"], [
        content
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...floatingStyles,
            transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
            // keep off the page when measuring
            minWidth: "max-content",
            zIndex: contentZIndex,
            ["--radix-popper-transform-origin"]: [
                middlewareData.transformOrigin?.x,
                middlewareData.transformOrigin?.y
            ].join(" "),
            // hide the content if using the hide middleware and should be hidden
            // set visibility to hidden and disable pointer events so the UI behaves
            // as if the PopperContent isn't there at all
            ...middlewareData.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: props.dir,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopperContentProvider, {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                    ...contentProps.style,
                    // if the PopperContent hasn't been placed yet (not all measurements done)
                    // we prevent animations so that users's animation don't kick in too early referring wrong sides
                    animation: !isPositioned ? "none" : void 0
                }
            })
        })
    });
});
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
};
var PopperArrow = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function PopperArrow2(props, forwardedRef) {
    const { __scopePopper, ...arrowProps } = props;
    const contentContext = useContentContext(ARROW_NAME, __scopePopper);
    const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
    return(// we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        ref: contentContext.onArrowChange,
        style: {
            position: "absolute",
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[contentContext.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: `rotate(180deg)`,
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$arrow$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            ...arrowProps,
            ref: forwardedRef,
            style: {
                ...arrowProps.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
            }
        })
    }));
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
    return value !== null;
}
var transformOrigin = (options)=>({
        name: "transformOrigin",
        options,
        fn (data) {
            const { placement, rects, middlewareData } = data;
            const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[placedAlign];
            const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
            const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
            let x = "";
            let y = "";
            if (placedSide === "bottom") {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === "top") {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === "right") {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === "left") {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x,
                    y
                }
            };
        }
    });
function getSideAndAlignFromPlacement(placement) {
    const [side, align = "center"] = placement.split("-");
    return [
        side,
        align
    ];
}
var Root2 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow = PopperArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "VISUALLY_HIDDEN_STYLES",
    ()=>VISUALLY_HIDDEN_STYLES,
    "VisuallyHidden",
    ()=>VisuallyHidden
]);
// src/visually-hidden.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-visually-hidden/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var VISUALLY_HIDDEN_STYLES = Object.freeze({
    // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
});
var NAME = "VisuallyHidden";
var VisuallyHidden = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...props,
        ref: forwardedRef,
        style: {
            ...VISUALLY_HIDDEN_STYLES,
            ...props.style
        }
    });
});
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "Content",
    ()=>Content2,
    "Portal",
    ()=>Portal,
    "Provider",
    ()=>Provider,
    "Root",
    ()=>Root3,
    "Tooltip",
    ()=>Tooltip,
    "TooltipArrow",
    ()=>TooltipArrow,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipPortal",
    ()=>TooltipPortal,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger,
    "Trigger",
    ()=>Trigger,
    "createTooltipScope",
    ()=>createTooltipScope
]);
// src/tooltip.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-popper/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-tooltip/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var [createTooltipContext, createTooltipScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])("Tooltip", [
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopperScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopperScope"])();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props)=>{
    const { __scopeTooltip, delayDuration = DEFAULT_DELAY_DURATION, skipDelayDuration = 300, disableHoverableContent = false, children } = props;
    const isOpenDelayedRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](true);
    const isPointerInTransitRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const skipDelayTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipProvider.useEffect": ()=>{
            const skipDelayTimer = skipDelayTimerRef.current;
            return ({
                "TooltipProvider.useEffect": ()=>window.clearTimeout(skipDelayTimer)
            })["TooltipProvider.useEffect"];
        }
    }["TooltipProvider.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipProviderContextProvider, {
        scope: __scopeTooltip,
        isOpenDelayedRef,
        delayDuration,
        onOpen: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "TooltipProvider.useCallback": ()=>{
                window.clearTimeout(skipDelayTimerRef.current);
                isOpenDelayedRef.current = false;
            }
        }["TooltipProvider.useCallback"], []),
        onClose: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "TooltipProvider.useCallback": ()=>{
                window.clearTimeout(skipDelayTimerRef.current);
                skipDelayTimerRef.current = window.setTimeout({
                    "TooltipProvider.useCallback": ()=>isOpenDelayedRef.current = true
                }["TooltipProvider.useCallback"], skipDelayDuration);
            }
        }["TooltipProvider.useCallback"], [
            skipDelayDuration
        ]),
        isPointerInTransitRef,
        onPointerInTransitChange: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "TooltipProvider.useCallback": (inTransit)=>{
                isPointerInTransitRef.current = inTransit;
            }
        }["TooltipProvider.useCallback"], []),
        disableHoverableContent,
        children
    });
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props)=>{
    const { __scopeTooltip, children, open: openProp, defaultOpen, onOpenChange, disableHoverableContent: disableHoverableContentProp, delayDuration: delayDurationProp } = props;
    const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const [trigger, setTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const contentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const openTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
    const delayDuration = delayDurationProp ?? providerContext.delayDuration;
    const wasOpenDelayedRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: {
            "Tooltip.useControllableState": (open2)=>{
                if (open2) {
                    providerContext.onOpen();
                    document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
                } else {
                    providerContext.onClose();
                }
                onOpenChange?.(open2);
            }
        }["Tooltip.useControllableState"],
        caller: TOOLTIP_NAME
    });
    const stateAttribute = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Tooltip.useMemo[stateAttribute]": ()=>{
            return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
        }
    }["Tooltip.useMemo[stateAttribute]"], [
        open
    ]);
    const handleOpen = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Tooltip.useCallback[handleOpen]": ()=>{
            window.clearTimeout(openTimerRef.current);
            openTimerRef.current = 0;
            wasOpenDelayedRef.current = false;
            setOpen(true);
        }
    }["Tooltip.useCallback[handleOpen]"], [
        setOpen
    ]);
    const handleClose = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Tooltip.useCallback[handleClose]": ()=>{
            window.clearTimeout(openTimerRef.current);
            openTimerRef.current = 0;
            setOpen(false);
        }
    }["Tooltip.useCallback[handleClose]"], [
        setOpen
    ]);
    const handleDelayedOpen = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Tooltip.useCallback[handleDelayedOpen]": ()=>{
            window.clearTimeout(openTimerRef.current);
            openTimerRef.current = window.setTimeout({
                "Tooltip.useCallback[handleDelayedOpen]": ()=>{
                    wasOpenDelayedRef.current = true;
                    setOpen(true);
                    openTimerRef.current = 0;
                }
            }["Tooltip.useCallback[handleDelayedOpen]"], delayDuration);
        }
    }["Tooltip.useCallback[handleDelayedOpen]"], [
        delayDuration,
        setOpen
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Tooltip.useEffect": ()=>{
            return ({
                "Tooltip.useEffect": ()=>{
                    if (openTimerRef.current) {
                        window.clearTimeout(openTimerRef.current);
                        openTimerRef.current = 0;
                    }
                }
            })["Tooltip.useEffect"];
        }
    }["Tooltip.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipContextProvider, {
            scope: __scopeTooltip,
            contentId,
            open,
            stateAttribute,
            trigger,
            onTriggerChange: setTrigger,
            onTriggerEnter: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
                "Tooltip.useCallback": ()=>{
                    if (providerContext.isOpenDelayedRef.current) handleDelayedOpen();
                    else handleOpen();
                }
            }["Tooltip.useCallback"], [
                providerContext.isOpenDelayedRef,
                handleDelayedOpen,
                handleOpen
            ]),
            onTriggerLeave: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
                "Tooltip.useCallback": ()=>{
                    if (disableHoverableContent) {
                        handleClose();
                    } else {
                        window.clearTimeout(openTimerRef.current);
                        openTimerRef.current = 0;
                    }
                }
            }["Tooltip.useCallback"], [
                handleClose,
                disableHoverableContent
            ]),
            onOpen: handleOpen,
            onClose: handleClose,
            disableHoverableContent,
            children
        })
    });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger";
var TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerMoveOpenedRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handlePointerUp = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TooltipTrigger.useCallback[handlePointerUp]": ()=>isPointerDownRef.current = false
    }["TooltipTrigger.useCallback[handlePointerUp]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipTrigger.useEffect": ()=>{
            return ({
                "TooltipTrigger.useEffect": ()=>document.removeEventListener("pointerup", handlePointerUp)
            })["TooltipTrigger.useEffect"];
        }
    }["TooltipTrigger.useEffect"], [
        handlePointerUp
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
            "aria-describedby": context.open ? context.contentId : void 0,
            "data-state": context.stateAttribute,
            ...triggerProps,
            ref: composedRefs,
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, (event)=>{
                if (event.pointerType === "touch") return;
                if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
                    context.onTriggerEnter();
                    hasPointerMoveOpenedRef.current = true;
                }
            }),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, ()=>{
                context.onTriggerLeave();
                hasPointerMoveOpenedRef.current = false;
            }),
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, ()=>{
                if (context.open) {
                    context.onClose();
                }
                isPointerDownRef.current = true;
                document.addEventListener("pointerup", handlePointerUp, {
                    once: true
                });
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>{
                if (!isPointerDownRef.current) context.onOpen();
            }),
            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, context.onClose),
            onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onClose)
        })
    });
});
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, {
    forceMount: void 0
});
var TooltipPortal = (props)=>{
    const { __scopeTooltip, forceMount, children, container } = props;
    const context = useTooltipContext(PORTAL_NAME, __scopeTooltip);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeTooltip,
        forceMount,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                asChild: true,
                container,
                children
            })
        })
    });
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent";
var TooltipContent = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.disableHoverableContent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipContentImpl, {
            side,
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipContentHoverable, {
            side,
            ...contentProps,
            ref: forwardedRef
        })
    });
});
var TooltipContentHoverable = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
    const providerContext = useTooltipProviderContext(CONTENT_NAME, props.__scopeTooltip);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const [pointerGraceArea, setPointerGraceArea] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const { trigger, onClose } = context;
    const content = ref.current;
    const { onPointerInTransitChange } = providerContext;
    const handleRemoveGraceArea = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TooltipContentHoverable.useCallback[handleRemoveGraceArea]": ()=>{
            setPointerGraceArea(null);
            onPointerInTransitChange(false);
        }
    }["TooltipContentHoverable.useCallback[handleRemoveGraceArea]"], [
        onPointerInTransitChange
    ]);
    const handleCreateGraceArea = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "TooltipContentHoverable.useCallback[handleCreateGraceArea]": (event, hoverTarget)=>{
            const currentTarget = event.currentTarget;
            const exitPoint = {
                x: event.clientX,
                y: event.clientY
            };
            const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
            const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
            const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
            const graceArea = getHull([
                ...paddedExitPoints,
                ...hoverTargetPoints
            ]);
            setPointerGraceArea(graceArea);
            onPointerInTransitChange(true);
        }
    }["TooltipContentHoverable.useCallback[handleCreateGraceArea]"], [
        onPointerInTransitChange
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipContentHoverable.useEffect": ()=>{
            return ({
                "TooltipContentHoverable.useEffect": ()=>handleRemoveGraceArea()
            })["TooltipContentHoverable.useEffect"];
        }
    }["TooltipContentHoverable.useEffect"], [
        handleRemoveGraceArea
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipContentHoverable.useEffect": ()=>{
            if (trigger && content) {
                const handleTriggerLeave = {
                    "TooltipContentHoverable.useEffect.handleTriggerLeave": (event)=>handleCreateGraceArea(event, content)
                }["TooltipContentHoverable.useEffect.handleTriggerLeave"];
                const handleContentLeave = {
                    "TooltipContentHoverable.useEffect.handleContentLeave": (event)=>handleCreateGraceArea(event, trigger)
                }["TooltipContentHoverable.useEffect.handleContentLeave"];
                trigger.addEventListener("pointerleave", handleTriggerLeave);
                content.addEventListener("pointerleave", handleContentLeave);
                return ({
                    "TooltipContentHoverable.useEffect": ()=>{
                        trigger.removeEventListener("pointerleave", handleTriggerLeave);
                        content.removeEventListener("pointerleave", handleContentLeave);
                    }
                })["TooltipContentHoverable.useEffect"];
            }
        }
    }["TooltipContentHoverable.useEffect"], [
        trigger,
        content,
        handleCreateGraceArea,
        handleRemoveGraceArea
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipContentHoverable.useEffect": ()=>{
            if (pointerGraceArea) {
                const handleTrackPointerGrace = {
                    "TooltipContentHoverable.useEffect.handleTrackPointerGrace": (event)=>{
                        const target = event.target;
                        const pointerPosition = {
                            x: event.clientX,
                            y: event.clientY
                        };
                        const hasEnteredTarget = trigger?.contains(target) || content?.contains(target);
                        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
                        if (hasEnteredTarget) {
                            handleRemoveGraceArea();
                        } else if (isPointerOutsideGraceArea) {
                            handleRemoveGraceArea();
                            onClose();
                        }
                    }
                }["TooltipContentHoverable.useEffect.handleTrackPointerGrace"];
                document.addEventListener("pointermove", handleTrackPointerGrace);
                return ({
                    "TooltipContentHoverable.useEffect": ()=>document.removeEventListener("pointermove", handleTrackPointerGrace)
                })["TooltipContentHoverable.useEffect"];
            }
        }
    }["TooltipContentHoverable.useEffect"], [
        trigger,
        content,
        pointerGraceArea,
        onClose,
        handleRemoveGraceArea
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipContentImpl, {
        ...props,
        ref: composedRefs
    });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, {
    isInside: false
});
var Slottable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlottable"])("TooltipContent");
var TooltipContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTooltip, children, "aria-label": ariaLabel, onEscapeKeyDown, onPointerDownOutside, ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const { onClose } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipContentImpl.useEffect": ()=>{
            document.addEventListener(TOOLTIP_OPEN, onClose);
            return ({
                "TooltipContentImpl.useEffect": ()=>document.removeEventListener(TOOLTIP_OPEN, onClose)
            })["TooltipContentImpl.useEffect"];
        }
    }["TooltipContentImpl.useEffect"], [
        onClose
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "TooltipContentImpl.useEffect": ()=>{
            if (context.trigger) {
                const handleScroll = {
                    "TooltipContentImpl.useEffect.handleScroll": (event)=>{
                        const target = event.target;
                        if (target?.contains(context.trigger)) onClose();
                    }
                }["TooltipContentImpl.useEffect.handleScroll"];
                window.addEventListener("scroll", handleScroll, {
                    capture: true
                });
                return ({
                    "TooltipContentImpl.useEffect": ()=>window.removeEventListener("scroll", handleScroll, {
                            capture: true
                        })
                })["TooltipContentImpl.useEffect"];
            }
        }
    }["TooltipContentImpl.useEffect"], [
        context.trigger,
        onClose
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DismissableLayer"], {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event)=>event.preventDefault(),
        onDismiss: onClose,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-state": context.stateAttribute,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
                ...contentProps.style,
                // re-namespace exposed content custom properties
                ...{
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                }
            },
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Slottable, {
                    children
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(VisuallyHiddenContentContextProvider, {
                    scope: __scopeTooltip,
                    isInside: true,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$visually$2d$hidden$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                        id: context.contentId,
                        role: "tooltip",
                        children: ariaLabel || children
                    })
                })
            ]
        })
    });
});
TooltipContent.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow";
var TooltipArrow = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(ARROW_NAME, __scopeTooltip);
    return visuallyHiddenContentContext.isInside ? null : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(point, rect) {
    const top = Math.abs(rect.top - point.y);
    const bottom = Math.abs(rect.bottom - point.y);
    const right = Math.abs(rect.right - point.x);
    const left = Math.abs(rect.left - point.x);
    switch(Math.min(top, bottom, right, left)){
        case left:
            return "left";
        case right:
            return "right";
        case top:
            return "top";
        case bottom:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
    const paddedExitPoints = [];
    switch(exitSide){
        case "top":
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y + padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y + padding
            });
            break;
        case "bottom":
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y - padding
            });
            break;
        case "left":
            paddedExitPoints.push({
                x: exitPoint.x + padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x + padding,
                y: exitPoint.y + padding
            });
            break;
        case "right":
            paddedExitPoints.push({
                x: exitPoint.x - padding,
                y: exitPoint.y - padding
            }, {
                x: exitPoint.x - padding,
                y: exitPoint.y + padding
            });
            break;
    }
    return paddedExitPoints;
}
function getPointsFromRect(rect) {
    const { top, right, bottom, left } = rect;
    return [
        {
            x: left,
            y: top
        },
        {
            x: right,
            y: top
        },
        {
            x: right,
            y: bottom
        },
        {
            x: left,
            y: bottom
        }
    ];
}
function isPointInPolygon(point, polygon) {
    const { x, y } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const ii = polygon[i];
        const jj = polygon[j];
        const xi = ii.x;
        const yi = ii.y;
        const xj = jj.x;
        const yj = jj.y;
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function getHull(points) {
    const newPoints = points.slice();
    newPoints.sort((a, b)=>{
        if (a.x < b.x) return -1;
        else if (a.x > b.x) return 1;
        else if (a.y < b.y) return -1;
        else if (a.y > b.y) return 1;
        else return 0;
    });
    return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
    if (points.length <= 1) return points.slice();
    const upperHull = [];
    for(let i = 0; i < points.length; i++){
        const p = points[i];
        while(upperHull.length >= 2){
            const q = upperHull[upperHull.length - 1];
            const r = upperHull[upperHull.length - 2];
            if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
            else break;
        }
        upperHull.push(p);
    }
    upperHull.pop();
    const lowerHull = [];
    for(let i = points.length - 1; i >= 0; i--){
        const p = points[i];
        while(lowerHull.length >= 2){
            const q = lowerHull[lowerHull.length - 1];
            const r = lowerHull[lowerHull.length - 2];
            if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
            else break;
        }
        lowerHull.push(p);
    }
    lowerHull.pop();
    if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
        return upperHull;
    } else {
        return upperHull.concat(lowerHull);
    }
}
var Provider = TooltipProvider;
var Root3 = Tooltip;
var Trigger = TooltipTrigger;
var Portal = TooltipPortal;
var Content2 = TooltipContent;
var Arrow2 = TooltipArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript) <export * as Tooltip>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/saas/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/saas/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/saas/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/saas/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/saas/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsHydrated",
    ()=>useIsHydrated
]);
// src/use-is-hydrated.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
;
function useIsHydrated() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "useIsHydrated.useSyncExternalStore": ()=>true
    }["useIsHydrated.useSyncExternalStore"], {
        "useIsHydrated.useSyncExternalStore": ()=>false
    }["useIsHydrated.useSyncExternalStore"]);
}
function subscribe() {
    return ()=>{};
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage,
    "Fallback",
    ()=>Fallback,
    "Image",
    ()=>Image,
    "Root",
    ()=>Root,
    "createAvatarScope",
    ()=>createAvatarScope
]);
// src/avatar.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-avatar/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$is$2d$hydrated$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("idle");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AvatarProvider, {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
            ...avatarProps,
            ref: forwardedRef
        })
    });
});
Avatar.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAvatar, src, onLoadingStatusChange = ()=>{}, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps);
    const handleLoadingStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])({
        "AvatarImage.useCallbackRef[handleLoadingStatusChange]": (status)=>{
            onLoadingStatusChange(status);
            context.onImageLoadingStatusChange(status);
        }
    }["AvatarImage.useCallbackRef[handleLoadingStatusChange]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "AvatarImage.useLayoutEffect": ()=>{
            if (imageLoadingStatus !== "idle") {
                handleLoadingStatusChange(imageLoadingStatus);
            }
        }
    }["AvatarImage.useLayoutEffect"], [
        imageLoadingStatus,
        handleLoadingStatusChange
    ]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].img, {
        ...imageProps,
        ref: forwardedRef,
        src
    }) : null;
});
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](delayMs === void 0);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "AvatarFallback.useEffect": ()=>{
            if (delayMs !== void 0) {
                const timerId = window.setTimeout({
                    "AvatarFallback.useEffect.timerId": ()=>setCanRender(true)
                }["AvatarFallback.useEffect.timerId"], delayMs);
                return ({
                    "AvatarFallback.useEffect": ()=>window.clearTimeout(timerId)
                })["AvatarFallback.useEffect"];
            }
        }
    }["AvatarFallback.useEffect"], [
        delayMs
    ]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
        ...fallbackProps,
        ref: forwardedRef
    }) : null;
});
AvatarFallback.displayName = FALLBACK_NAME;
function resolveLoadingStatus(image, src) {
    if (!image) {
        return "idle";
    }
    if (!src) {
        return "error";
    }
    if (image.src !== src) {
        image.src = src;
    }
    return image.complete && image.naturalWidth > 0 ? "loaded" : "loading";
}
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
    const isHydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$is$2d$hydrated$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsHydrated"])();
    const imageRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const image = (()=>{
        if (!isHydrated) return null;
        if (!imageRef.current) {
            imageRef.current = new window.Image();
        }
        return imageRef.current;
    })();
    const [loadingStatus, setLoadingStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useImageLoadingStatus.useState": ()=>resolveLoadingStatus(image, src)
    }["useImageLoadingStatus.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useImageLoadingStatus.useLayoutEffect": ()=>{
            setLoadingStatus(resolveLoadingStatus(image, src));
        }
    }["useImageLoadingStatus.useLayoutEffect"], [
        image,
        src
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useImageLoadingStatus.useLayoutEffect": ()=>{
            const updateStatus = {
                "useImageLoadingStatus.useLayoutEffect.updateStatus": (status)=>({
                        "useImageLoadingStatus.useLayoutEffect.updateStatus": ()=>{
                            setLoadingStatus(status);
                        }
                    })["useImageLoadingStatus.useLayoutEffect.updateStatus"]
            }["useImageLoadingStatus.useLayoutEffect.updateStatus"];
            if (!image) return;
            const handleLoad = updateStatus("loaded");
            const handleError = updateStatus("error");
            image.addEventListener("load", handleLoad);
            image.addEventListener("error", handleError);
            if (referrerPolicy) {
                image.referrerPolicy = referrerPolicy;
            }
            if (typeof crossOrigin === "string") {
                image.crossOrigin = crossOrigin;
            }
            return ({
                "useImageLoadingStatus.useLayoutEffect": ()=>{
                    image.removeEventListener("load", handleLoad);
                    image.removeEventListener("error", handleError);
                }
            })["useImageLoadingStatus.useLayoutEffect"];
        }
    }["useImageLoadingStatus.useLayoutEffect"], [
        image,
        crossOrigin,
        referrerPolicy
    ]);
    return loadingStatus;
}
var Root = Avatar;
var Image = AvatarImage;
var Fallback = AvatarFallback;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript) <export * as Avatar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@dicebear/core/lib/utils/escape.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xml",
    ()=>xml
]);
function xml(content) {
    return content.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
}),
"[project]/saas/node_modules/@dicebear/core/lib/utils/license.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "text",
    ()=>text,
    "xml",
    ()=>xml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/utils/escape.js [app-client] (ecmascript)");
;
function xml(style) {
    var _a, _b, _c, _d, _e, _f, _g;
    const title = (_a = style.meta) === null || _a === void 0 ? void 0 : _a.title;
    const creator = (_b = style.meta) === null || _b === void 0 ? void 0 : _b.creator;
    const source = (_c = style.meta) === null || _c === void 0 ? void 0 : _c.source;
    const license = (_e = (_d = style.meta) === null || _d === void 0 ? void 0 : _d.license) === null || _e === void 0 ? void 0 : _e.url;
    const rights = text(style);
    if (!title && !creator && !source && !license && !rights) {
        return '';
    }
    // https://nsteffel.github.io/dublin_core_generator/generator.html
    return '<metadata' + ' xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"' + ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' + ' xmlns:dc="http://purl.org/dc/elements/1.1/"' + ' xmlns:dcterms="http://purl.org/dc/terms/">' + '<rdf:RDF>' + '<rdf:Description>' + (title ? `<dc:title>${__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xml"](title)}</dc:title>` : '') + (creator ? `<dc:creator>${__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xml"](creator)}</dc:creator>` : '') + (source ? `<dc:source xsi:type="dcterms:URI">${__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xml"]((_g = (_f = style.meta) === null || _f === void 0 ? void 0 : _f.source) !== null && _g !== void 0 ? _g : '')}</dc:source>` : '') + (license ? `<dcterms:license xsi:type="dcterms:URI">${__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xml"](license)}</dcterms:license>` : '') + (rights ? `<dc:rights>${__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xml"](rights)}</dc:rights>` : '') + '</rdf:Description>' + '</rdf:RDF>' + '</metadata>';
}
function text(style) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    let title = ((_a = style.meta) === null || _a === void 0 ? void 0 : _a.title) ? `„${(_b = style.meta) === null || _b === void 0 ? void 0 : _b.title}”` : 'Design';
    let creator = `„${(_d = (_c = style.meta) === null || _c === void 0 ? void 0 : _c.creator) !== null && _d !== void 0 ? _d : 'Unknown'}”`;
    if ((_e = style.meta) === null || _e === void 0 ? void 0 : _e.source) {
        title += ` (${style.meta.source})`;
    }
    let result = '';
    if (((_g = (_f = style.meta) === null || _f === void 0 ? void 0 : _f.license) === null || _g === void 0 ? void 0 : _g.name) !== 'MIT' && ((_h = style.meta) === null || _h === void 0 ? void 0 : _h.creator) !== 'DiceBear' && ((_j = style.meta) === null || _j === void 0 ? void 0 : _j.title)) {
        result += 'Remix of ';
    }
    result += `${title} by ${creator}`;
    if ((_l = (_k = style.meta) === null || _k === void 0 ? void 0 : _k.license) === null || _l === void 0 ? void 0 : _l.name) {
        result += `, licensed under „${(_o = (_m = style.meta) === null || _m === void 0 ? void 0 : _m.license) === null || _o === void 0 ? void 0 : _o.name}”`;
        if ((_q = (_p = style.meta) === null || _p === void 0 ? void 0 : _p.license) === null || _q === void 0 ? void 0 : _q.url) {
            result += ` (${style.meta.license.url})`;
        }
    }
    return result;
}
}),
"[project]/saas/node_modules/@dicebear/core/lib/utils/prng.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create
]);
const MIN = -2147483648;
const MAX = 2147483647;
function xorshift(value) {
    value ^= value << 13;
    value ^= value >> 17;
    value ^= value << 5;
    return value;
}
function hashSeed(seed) {
    let hash = 0;
    for(let i = 0; i < seed.length; i++){
        hash = (hash << 5) - hash + seed.charCodeAt(i) | 0;
        hash = xorshift(hash);
    }
    return hash;
}
function create(seed = '') {
    // Ensure that seed is a string
    seed = seed.toString();
    let value = hashSeed(seed) || 1;
    const next = ()=>value = xorshift(value);
    const integer = (min, max)=>{
        return Math.floor((next() - MIN) / (MAX - MIN) * (max + 1 - min) + min);
    };
    return {
        seed,
        next,
        bool (likelihood = 50) {
            return integer(1, 100) <= likelihood;
        },
        integer (min, max) {
            return integer(min, max);
        },
        pick (arr, fallback) {
            var _a;
            if (arr.length === 0) {
                next();
                return fallback;
            }
            return (_a = arr[integer(0, arr.length - 1)]) !== null && _a !== void 0 ? _a : fallback;
        },
        shuffle (arr) {
            // Each method call should call the `next` function only once.
            // Therefore, we use a separate instance of the PRNG here.
            const internalPrng = create(next().toString());
            // Fisher-Yates shuffle algorithm - We do not use the Array.sort method
            // because it is not stable and produces different results when used in
            // different browsers. See: https://github.com/dicebear/dicebear/issues/394
            const workingArray = [
                ...arr
            ];
            for(let i = workingArray.length - 1; i > 0; i--){
                const j = internalPrng.integer(0, i);
                [workingArray[i], workingArray[j]] = [
                    workingArray[j],
                    workingArray[i]
                ];
            }
            return workingArray;
        },
        string (length, characters = 'abcdefghijklmnopqrstuvwxyz1234567890') {
            // Each method call should call the `next` function only once.
            // Therefore, we use a separate instance of the PRNG here.
            const internalPrng = create(next().toString());
            let str = '';
            for(let i = 0; i < length; i++){
                str += characters[internalPrng.integer(0, characters.length - 1)];
            }
            return str;
        }
    };
}
}),
"[project]/saas/node_modules/@dicebear/core/lib/utils/svg.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBackground",
    ()=>addBackground,
    "addFlip",
    ()=>addFlip,
    "addRotate",
    ()=>addRotate,
    "addScale",
    ()=>addScale,
    "addTranslate",
    ()=>addTranslate,
    "addViewboxMask",
    ()=>addViewboxMask,
    "createAttrString",
    ()=>createAttrString,
    "getViewBox",
    ()=>getViewBox,
    "randomizeIds",
    ()=>randomizeIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/utils/escape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$prng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/utils/prng.js [app-client] (ecmascript)");
;
;
function getViewBox(result) {
    let viewBox = result.attributes['viewBox'].split(' ');
    let x = parseInt(viewBox[0]);
    let y = parseInt(viewBox[1]);
    let width = parseInt(viewBox[2]);
    let height = parseInt(viewBox[3]);
    return {
        x,
        y,
        width,
        height
    };
}
function addBackground(result, primaryColor, secondaryColor, type, rotation) {
    let { width, height, x, y } = getViewBox(result);
    const solidBackground = `<rect fill="${primaryColor}" width="${width}" height="${height}" x="${x}" y="${y}" />`;
    switch(type){
        case 'solid':
            return solidBackground + result.body;
        case 'gradientLinear':
            return `<rect fill="url(#backgroundLinear)" width="${width}" height="${height}" x="${x}" y="${y}" />` + `<defs>` + `<linearGradient id="backgroundLinear" gradientTransform="rotate(${rotation} 0.5 0.5)">` + `<stop stop-color="${primaryColor}"/>` + `<stop offset="1" stop-color="${secondaryColor}"/>` + `</linearGradient>` + `</defs>` + result.body;
    }
}
function addScale(result, scale) {
    let { width, height, x, y } = getViewBox(result);
    let percent = scale ? (scale - 100) / 100 : 0;
    let translateX = (width / 2 + x) * percent * -1;
    let translateY = (height / 2 + y) * percent * -1;
    return `<g transform="translate(${translateX} ${translateY}) scale(${scale / 100})">${result.body}</g>`;
}
function addTranslate(result, x, y) {
    let viewBox = getViewBox(result);
    let translateX = (viewBox.width + viewBox.x * 2) * ((x !== null && x !== void 0 ? x : 0) / 100);
    let translateY = (viewBox.height + viewBox.y * 2) * ((y !== null && y !== void 0 ? y : 0) / 100);
    return `<g transform="translate(${translateX} ${translateY})">${result.body}</g>`;
}
function addRotate(result, rotate) {
    let { width, height, x, y } = getViewBox(result);
    return `<g transform="rotate(${rotate}, ${width / 2 + x}, ${height / 2 + y})">${result.body}</g>`;
}
function addFlip(result) {
    let { width, x } = getViewBox(result);
    return `<g transform="scale(-1 1) translate(${width * -1 - x * 2} 0)">${result.body}</g>`;
}
function addViewboxMask(result, radius) {
    let { width, height, x, y } = getViewBox(result);
    let rx = radius ? width * radius / 100 : 0;
    let ry = radius ? height * radius / 100 : 0;
    return `<mask id="viewboxMask">` + `<rect width="${width}" height="${height}" rx="${rx}" ry="${ry}" x="${x}" y="${y}" fill="#fff" />` + `</mask>` + `<g mask="url(#viewboxMask)">${result.body}</g>`;
}
function createAttrString(result) {
    const attributes = {
        xmlns: 'http://www.w3.org/2000/svg',
        ...result.attributes
    };
    return Object.keys(attributes).map((attr)=>`${__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xml"](attr)}="${__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xml"](attributes[attr])}"`).join(' ');
}
function randomizeIds(result) {
    const prng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$prng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(Math.random().toString());
    const ids = {};
    return result.body.replace(/(id="|url\(#)([a-z0-9-_]+)([")])/gi, (match, m1, m2, m3)=>{
        ids[m2] = ids[m2] || prng.string(8);
        return `${m1}${ids[m2]}${m3}`;
    });
}
}),
"[project]/saas/node_modules/@dicebear/core/lib/schema.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schema",
    ()=>schema
]);
const schema = {
    type: 'object',
    $schema: 'http://json-schema.org/draft-07/schema#',
    properties: {
        seed: {
            type: 'string'
        },
        flip: {
            type: 'boolean',
            default: false
        },
        rotate: {
            type: 'integer',
            minimum: 0,
            maximum: 360,
            default: 0
        },
        scale: {
            type: 'integer',
            minimum: 0,
            maximum: 200,
            default: 100
        },
        radius: {
            type: 'integer',
            minimum: 0,
            maximum: 50,
            default: 0
        },
        size: {
            type: 'integer',
            minimum: 1
        },
        backgroundColor: {
            type: 'array',
            items: {
                type: 'string',
                pattern: '^(transparent|[a-fA-F0-9]{6})$'
            }
        },
        backgroundType: {
            type: 'array',
            items: {
                type: 'string',
                enum: [
                    'solid',
                    'gradientLinear'
                ]
            },
            default: [
                'solid'
            ]
        },
        backgroundRotation: {
            type: 'array',
            items: {
                type: 'integer',
                minimum: -360,
                maximum: 360
            },
            default: [
                0,
                360
            ]
        },
        translateX: {
            type: 'integer',
            minimum: -100,
            maximum: 100,
            default: 0
        },
        translateY: {
            type: 'integer',
            minimum: -100,
            maximum: 100,
            default: 0
        },
        clip: {
            type: 'boolean',
            default: true
        },
        randomizeIds: {
            type: 'boolean',
            default: false
        }
    }
};
}),
"[project]/saas/node_modules/@dicebear/core/lib/utils/options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaults",
    ()=>defaults,
    "merge",
    ()=>merge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/schema.js [app-client] (ecmascript)");
;
function defaults(schema) {
    var _a;
    let result = {};
    let props = (_a = schema.properties) !== null && _a !== void 0 ? _a : {};
    Object.keys(props).forEach((key)=>{
        let val = props[key];
        if (typeof val === 'object' && undefined !== val.default) {
            if (Array.isArray(val.default)) {
                result[key] = [
                    ...val.default
                ];
            } else if (typeof val.default === 'object') {
                result[key] = {
                    ...val.default
                };
            } else {
                result[key] = val.default;
            }
        }
    });
    return result;
}
function merge(style, options) {
    var _a;
    let result = {
        ...defaults(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"]),
        ...defaults((_a = style.schema) !== null && _a !== void 0 ? _a : {}),
        ...options
    };
    // Return a complete copy because the styles could partially customize the
    // options and thus modify nested objects and arrays.
    return JSON.parse(JSON.stringify(result));
}
}),
"[project]/saas/node_modules/@dicebear/core/lib/utils/color.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertColor",
    ()=>convertColor,
    "getBackgroundColors",
    ()=>getBackgroundColors
]);
function convertColor(color) {
    return 'transparent' === color ? color : `#${color}`;
}
function getBackgroundColors(prng, backgroundColor, backgroundType) {
    var _a;
    let shuffledBackgroundColors = prng.shuffle(backgroundColor);
    if (shuffledBackgroundColors.length <= 1) {
        // If no background colour or only one background colour has been selected,
        // the random sorting logic can be omitted.
        shuffledBackgroundColors = backgroundColor;
        // A function call should in any case make an identical number of calls to the PRNG.
        prng.next();
    } else if (backgroundColor.length == 2 && backgroundType == 'gradientLinear') {
        // If the background is to be a colour gradient and exactly two background
        // colours have been specified, do not sort them randomly. In this case, we
        // assume that the order of the background colours was chosen on purpose.
        shuffledBackgroundColors = backgroundColor;
        // A function call should in any case make an identical number of calls to the PRNG.
        prng.next();
    } else {
        shuffledBackgroundColors = prng.shuffle(backgroundColor);
    }
    if (shuffledBackgroundColors.length === 0) {
        shuffledBackgroundColors = [
            'transparent'
        ];
    }
    const primary = shuffledBackgroundColors[0];
    const secondary = (_a = shuffledBackgroundColors[1]) !== null && _a !== void 0 ? _a : shuffledBackgroundColors[0];
    return {
        primary: convertColor(primary),
        secondary: convertColor(secondary)
    };
}
}),
"[project]/saas/node_modules/@dicebear/core/lib/core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAvatar",
    ()=>createAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/utils/svg.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/utils/options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$prng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/utils/prng.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$license$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/utils/license.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/utils/color.js [app-client] (ecmascript)");
;
;
;
;
;
function createAvatar(style, options = {}) {
    var _a, _b, _c, _d, _e;
    options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(style, options);
    const prng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$prng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(options.seed);
    const result = style.create({
        prng: prng,
        options
    });
    const backgroundType = prng.pick((_a = options.backgroundType) !== null && _a !== void 0 ? _a : [], 'solid');
    const { primary: primaryBackgroundColor, secondary: secondaryBackgroundColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBackgroundColors"])(prng, (_b = options.backgroundColor) !== null && _b !== void 0 ? _b : [], backgroundType);
    const backgroundRotation = prng.integer(((_c = options.backgroundRotation) === null || _c === void 0 ? void 0 : _c.length) ? Math.min(...options.backgroundRotation) : 0, ((_d = options.backgroundRotation) === null || _d === void 0 ? void 0 : _d.length) ? Math.max(...options.backgroundRotation) : 0);
    if (options.size) {
        result.attributes.width = options.size.toString();
        result.attributes.height = options.size.toString();
    }
    if (options.scale !== undefined && options.scale !== 100) {
        result.body = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addScale"](result, options.scale);
    }
    if (options.flip) {
        result.body = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addFlip"](result);
    }
    if (options.rotate) {
        result.body = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRotate"](result, options.rotate);
    }
    if (options.translateX || options.translateY) {
        result.body = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTranslate"](result, options.translateX, options.translateY);
    }
    if (primaryBackgroundColor !== 'transparent' && secondaryBackgroundColor !== 'transparent') {
        result.body = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBackground"](result, primaryBackgroundColor, secondaryBackgroundColor, backgroundType, backgroundRotation);
    }
    if (options.radius || options.clip) {
        result.body = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addViewboxMask"](result, (_e = options.radius) !== null && _e !== void 0 ? _e : 0);
    }
    if (options.randomizeIds) {
        // Reduces the occurrence of ID collisions when rendering multiple avatars on one HTML page.
        result.body = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomizeIds"](result);
    }
    const attributes = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$svg$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAttrString"](result);
    const metadata = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$license$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xml"](style);
    const svg = `<svg ${attributes}>${metadata}${result.body}</svg>`;
    return {
        toString: ()=>svg,
        toJson: ()=>{
            var _a;
            return {
                svg: svg,
                extra: {
                    primaryBackgroundColor,
                    secondaryBackgroundColor,
                    backgroundType,
                    backgroundRotation,
                    ...(_a = result.extra) === null || _a === void 0 ? void 0 : _a.call(result)
                }
            };
        },
        toDataUri: ()=>{
            return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
        }
    };
}
}),
"[project]/saas/node_modules/@dicebear/core/lib/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/saas/node_modules/@dicebear/core/lib/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/*!
 * DiceBear (@dicebear/core)
 *
 * Code licensed under MIT (https://github.com/dicebear/dicebear/blob/main/LICENSE)
 * Copyright (c) 2024 Florian Körner
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$license$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/utils/license.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/utils/escape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/schema.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$core$2f$lib$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/core/lib/types.js [app-client] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/mouth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/4nf3pyoOuM1U9Pa8M0cL6u
 */ __turbopack_context__.s([
    "mouth",
    ()=>mouth
]);
const mouth = {
    bite: (components, colors)=>`<rect x="4" y="5" width="68" height="22" rx="5" fill="#000" fill-opacity=".2"/><rect x="8" y="9" width="60" height="14" rx="2" fill="#000" fill-opacity=".6"/><path fill-rule="evenodd" clip-rule="evenodd" d="m20 17 6-8H14l6 8ZM32 17l6-8H26l6 8ZM44 17l6-8H38l6 8ZM56 17l6-8H50l6 8Z" fill="#E1E6E8"/>`,
    diagram: (components, colors)=>`<rect x="4" y="4" width="68" height="24" rx="5" fill="#000" fill-opacity=".2"/><rect x="8" y="8" width="60" height="16" rx="2" fill="#000" fill-opacity=".8"/><path d="M9 17h11l2-4 3 7 4-8 2 9 3-11 3 10 3-3h15l3-4 2 7 3-3h4" stroke="#4EFAC9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    grill01: (components, colors)=>`<g fill="#000" fill-opacity=".6"><rect x="12" y="12" width="4" height="8" rx="2"/><rect x="36" y="12" width="4" height="8" rx="2"/><rect x="24" y="12" width="4" height="8" rx="2"/><rect x="48" y="12" width="4" height="8" rx="2"/><rect x="60" y="12" width="4" height="8" rx="2"/></g>`,
    grill02: (components, colors)=>`<g fill="#000" fill-opacity=".6"><rect x="28" y="10" width="6" height="14" rx="2"/><rect x="14" y="10" width="6" height="14" rx="2"/><rect x="42" y="10" width="6" height="14" rx="2"/><rect x="56" y="10" width="6" height="14" rx="2"/></g>`,
    grill03: (components, colors)=>`<rect x="4" y="5" width="68" height="22" rx="5" fill="#000" fill-opacity=".2"/><rect x="8" y="9" width="60" height="14" rx="2" fill="#fff"/><path fill="#000" fill-opacity=".1" d="M18 9h4v14h-4zM42 9h4v14h-4zM30 9h4v14h-4zM54 9h4v14h-4z"/>`,
    smile01: (components, colors)=>`<path d="M27.05 8.44a2 2 0 1 1 3.9-.88C31.72 10.96 34.4 13 38 13c3.6 0 6.28-2.04 7.05-5.44a2 2 0 1 1 3.9.88C47.75 13.7 43.43 17 38 17s-9.76-3.3-10.95-8.56Z" fill="#000" fill-opacity=".6"/>`,
    smile02: (components, colors)=>`<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10.22C18 21.78 24.47 28 38 28c13.52 0 20-6.34 20-17.78C58 9.5 57.17 8 55 8H21c-2.05 0-3 1.38-3 2.22Z" fill="#000" fill-opacity=".8"/><mask id="mouthSmile02-a" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="18" y="8" width="40" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 10.22C18 21.78 24.47 28 38 28c13.52 0 20-6.34 20-17.78C58 9.5 57.17 8 55 8H21c-2.05 0-3 1.38-3 2.22Z" fill="#fff"/></mask><g mask="url(#mouthSmile02-a)"><rect x="30" y="2" width="16" height="14" rx="2" fill="#fff"/></g>`,
    square01: (components, colors)=>`<rect x="24" y="6" width="27" height="8" rx="4" fill="#000" fill-opacity=".8"/>`,
    square02: (components, colors)=>`<rect x="16" y="8" width="44" height="4" rx="2" fill="#000" fill-opacity=".8"/>`
};
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/eyes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/4nf3pyoOuM1U9Pa8M0cL6u
 */ __turbopack_context__.s([
    "eyes",
    ()=>eyes
]);
const eyes = {
    bulging: (components, colors)=>`<circle cx="28" cy="24" r="18" fill="#000" fill-opacity=".2"/><circle cx="74" cy="24" r="18" fill="#000" fill-opacity=".2"/><circle cx="28" cy="24" r="15" fill="#F1EEDA"/><circle cx="74" cy="24" r="15" fill="#F1EEDA"/><rect x="26" y="15" width="10" height="10" rx="2" fill="#000" fill-opacity=".8"/><rect x="74" y="15" width="10" height="10" rx="2" fill="#000" fill-opacity=".8"/>`,
    dizzy: (components, colors)=>`<path d="m25 27.2 5.5 5.5c.5.4 1.2.4 1.6 0l1.6-1.6c.4-.5.4-1.2 0-1.6L28.2 24l5.5-5.5c.4-.5.4-1.2 0-1.6l-1.6-1.6c-.5-.4-1.2-.4-1.6 0L25 20.8l-5.5-5.5c-.5-.4-1.2-.4-1.6 0l-1.6 1.6c-.4.4-.4 1.1 0 1.6l5.5 5.5-5.5 5.5c-.4.5-.4 1.2 0 1.6l1.6 1.6c.5.4 1.2.4 1.6 0l5.5-5.5ZM79 27.2l5.5 5.5c.5.4 1.2.4 1.6 0l1.6-1.6c.4-.5.4-1.2 0-1.6L82.2 24l5.5-5.5c.4-.5.4-1.2 0-1.6l-1.6-1.6c-.5-.4-1.2-.4-1.6 0L79 20.8l-5.5-5.5c-.5-.4-1.2-.4-1.6 0l-1.6 1.6c-.4.4-.4 1.1 0 1.6l5.5 5.5-5.5 5.5c-.4.5-.4 1.2 0 1.6l1.6 1.6c.5.4 1.2.4 1.6 0l5.5-5.5Z" fill="#000" fill-opacity=".8"/>`,
    eva: (components, colors)=>`<g fill-rule="evenodd" clip-rule="evenodd"><path d="M53 0c34.75 0 49 17.47 49 31 0 13.53-19.59 17-49 17-29.05 0-51-3.47-51-17S17.11 0 53 0Z" fill="#000" fill-opacity=".8"/><path d="M28.82 34.65c-6.53-1.35-11.24-6.34-10.52-11.14.72-4.79 6.6-7.58 13.12-6.23 6.53 1.36 11.24 6.35 10.52 11.15-.72 4.8-6.6 7.59-13.12 6.23ZM75.42 34.65c-6.52 1.36-12.4-1.43-13.12-6.23-.72-4.8 4-9.8 10.52-11.15 6.52-1.35 12.4 1.44 13.12 6.24.72 4.81-4 9.8-10.52 11.15Z" fill="#25A6F5"/></g>`,
    frame1: (components, colors)=>`<rect y="4" width="104" height="42" rx="4" fill="#000" fill-opacity=".8"/><rect x="28" y="25" width="10" height="11" rx="2" fill="#8BDDFF"/><rect x="66" y="25" width="10" height="11" rx="2" fill="#8BDDFF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 4h8L12 46H4L21 4Z" fill="#fff" fill-opacity=".4"/>`,
    frame2: (components, colors)=>`<rect x="8" y="10" width="88" height="36" rx="4" fill="#000" fill-opacity=".8"/><rect x="28" y="21" width="10" height="17" rx="2" fill="#5EF2B8"/><rect x="66" y="21" width="10" height="17" rx="2" fill="#5EF2B8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M83 10h5L76 46h-5l12-36Z" fill="#fff" fill-opacity=".4"/>`,
    glow: (components, colors)=>`<g fill="#fff"><circle cx="21" cy="30" r="15" fill-opacity=".1"/><circle cx="83" cy="30" r="15" fill-opacity=".1"/><circle cx="21" cy="30" r="12" fill-opacity=".1"/><circle cx="83" cy="30" r="12" fill-opacity=".1"/><circle cx="21" cy="30" r="6" fill-opacity=".8"/><circle cx="83" cy="30" r="6" fill-opacity=".8"/><circle cx="21" cy="30" r="3" fill-opacity=".8"/><circle cx="83" cy="30" r="3" fill-opacity=".8"/></g>`,
    happy: (components, colors)=>`<path d="m18 19 12-2M20 31c0-3.31 2.9-6 7-6 3.1 0 6 2.69 6 6M86 20l-12-3M84 31c0-3.31-2.9-6-6-6-4.1 0-7 2.69-7 6" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
    hearts: (components, colors)=>`<path d="M29.27 9.68c-2.55.13-4.96 2.24-6.25 4.15-1.48-1.76-4.1-3.6-6.65-3.47-5.48.28-8.85 3.8-8.63 8.1.3 5.72 4.88 8.89 9.7 12.24 1.71 1.15 5 4.15 5.42 4.82.42.67 2.14.6 2.58-.13a37.8 37.8 0 0 1 4.9-5.36c4.43-3.84 8.66-7.47 8.36-13.2-.23-4.3-3.95-7.44-9.43-7.15ZM87.63 10.36c-2.55-.14-5.17 1.7-6.65 3.47-1.3-1.9-3.7-4.02-6.25-4.15-5.48-.29-9.2 2.86-9.43 7.16-.3 5.72 3.93 9.35 8.36 13.19 1.6 1.32 4.55 4.64 4.9 5.36.35.7 2.06.82 2.58.13.51-.7 3.7-3.67 5.42-4.82 4.81-3.35 9.4-6.52 9.7-12.24.22-4.3-3.15-7.82-8.63-8.1Z" fill="#FF5353" fill-opacity=".8"/>`,
    robocop: (components, colors)=>`<rect x="7" y="16" width="91" height="16" rx="4" fill="#000" fill-opacity=".8"/><mask id="eyesRobocop-a" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="7" y="16" width="91" height="16"><rect x="7" y="16" width="91" height="16" rx="4" fill="#fff"/></mask><g mask="url(#eyesRobocop-a)" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" fill-opacity=".8"><path d="M76 7h18L82 37H64L76 7ZM52 7h9L49 37h-9L52 7Z"/></g>`,
    round: (components, colors)=>`<g fill="#fff"><circle cx="24" cy="30" r="6"/><circle cx="80" cy="30" r="6"/></g>`,
    roundFrame01: (components, colors)=>`<rect y="12" width="104" height="32" rx="16" fill="#000" fill-opacity=".8"/><rect x="24" y="22" width="10" height="12" rx="2" fill="#F4F4F4"/><rect x="70" y="22" width="10" height="12" rx="2" fill="#F4F4F4"/>`,
    roundFrame02: (components, colors)=>`<rect y="11" width="104" height="34" rx="17" fill="#000" fill-opacity=".8"/><circle cx="29" cy="28" r="13" fill="#F1EEDA"/><circle cx="75" cy="28" r="13" fill="#F1EEDA"/><rect x="24" y="23" width="10" height="10" rx="2" fill="#000" fill-opacity=".8"/><rect x="70" y="23" width="10" height="10" rx="2" fill="#000" fill-opacity=".8"/>`,
    sensor: (components, colors)=>`<path d="M28 44a20 20 0 0 0 19.9-18h41.52a5 5 0 1 0 0-4H47.9A20 20 0 1 0 28 44Z" fill="#000" fill-opacity=".2"/><circle cx="94" cy="24" r="2" fill="#fff"/><circle cx="28" cy="24" r="16" fill="#000" fill-opacity=".6"/><circle cx="34" cy="16" r="3" fill="#fff"/>`,
    shade01: (components, colors)=>`<path d="M96 2H8c-4.5 0-8 3.5-8 8.03V28c0 4.5 3.5 8 8 8h13c8 0 11 8 18 8h27c7 0 9-8 17-8h13c4.5 0 8-3.5 8-8V10c0-4.5-3.5-8-8-8Z" fill="#000" fill-opacity=".8"/><path d="M87 14H17c-3.5 0-5 3-5 5v2c0 2 1.5 5 5 5h12c6 0 11.62 8 17 8h14c5.38 0 9-8 15-8h12c3.5 0 5-3 5-5v-2c0-2-1.5-5-5-5Z" fill="#FF3D3D"/><path d="M22.44 36.09 37.26 2h11L31.4 40.78l-.76-.58c-2.38-1.82-4.83-3.69-8.2-4.11ZM11.48 36 26.26 2h4L15.48 36h-4Z" fill="#fff" fill-opacity=".2"/>`
};
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/4nf3pyoOuM1U9Pa8M0cL6u
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$components$2f$mouth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/mouth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$components$2f$eyes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/eyes.js [app-client] (ecmascript)");
;
;
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eyes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$components$2f$eyes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eyes"],
    "mouth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$components$2f$mouth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mouth"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$components$2f$mouth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/mouth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$components$2f$eyes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/eyes.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/utils/pickComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pickComponent",
    ()=>pickComponent
]);
/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/4nf3pyoOuM1U9Pa8M0cL6u
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/components/index.js [app-client] (ecmascript)");
;
function pickComponent({ prng, group, values = [] }) {
    const componentCollection = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
    const key = prng.pick(values);
    if (key && componentCollection[group][key]) {
        return {
            name: key,
            value: componentCollection[group][key]
        };
    } else {
        return undefined;
    }
}
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/utils/getComponents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComponents",
    ()=>getComponents
]);
/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/4nf3pyoOuM1U9Pa8M0cL6u
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$utils$2f$pickComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/utils/pickComponent.js [app-client] (ecmascript)");
;
function getComponents({ prng, options }) {
    const mouthComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$utils$2f$pickComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickComponent"])({
        prng,
        group: 'mouth',
        values: options.mouth
    });
    const eyesComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$utils$2f$pickComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickComponent"])({
        prng,
        group: 'eyes',
        values: options.eyes
    });
    return {
        mouth: mouthComponent,
        eyes: eyesComponent
    };
}
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/utils/getColors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/4nf3pyoOuM1U9Pa8M0cL6u
 */ __turbopack_context__.s([
    "getColors",
    ()=>getColors
]);
function getColors({ prng, options }) {
    return {};
}
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/schema.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/4nf3pyoOuM1U9Pa8M0cL6u
 */ __turbopack_context__.s([
    "schema",
    ()=>schema
]);
const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    properties: {
        backgroundColor: {
            type: 'array',
            items: {
                type: 'string',
                pattern: '^(transparent|[a-fA-F0-9]{6})$'
            },
            default: [
                'ffb300',
                '1e88e5',
                '546e7a',
                '6d4c41',
                '00acc1',
                'f4511e',
                '5e35b1',
                '43a047',
                '757575',
                '3949ab',
                '039be5',
                '7cb342',
                'c0ca33',
                'fb8c00',
                'd81b60',
                '8e24aa',
                'e53935',
                '00897b',
                'fdd835'
            ]
        },
        eyes: {
            type: 'array',
            items: {
                type: 'string',
                enum: [
                    'bulging',
                    'dizzy',
                    'eva',
                    'frame1',
                    'frame2',
                    'glow',
                    'happy',
                    'hearts',
                    'robocop',
                    'round',
                    'roundFrame01',
                    'roundFrame02',
                    'sensor',
                    'shade01'
                ]
            },
            default: [
                'bulging',
                'dizzy',
                'eva',
                'frame1',
                'frame2',
                'glow',
                'happy',
                'hearts',
                'robocop',
                'round',
                'roundFrame01',
                'roundFrame02',
                'sensor',
                'shade01'
            ]
        },
        mouth: {
            type: 'array',
            items: {
                type: 'string',
                enum: [
                    'bite',
                    'diagram',
                    'grill01',
                    'grill02',
                    'grill03',
                    'smile01',
                    'smile02',
                    'square01',
                    'square02'
                ]
            },
            default: [
                'bite',
                'diagram',
                'grill01',
                'grill02',
                'grill03',
                'smile01',
                'smile02',
                'square01',
                'square02'
            ]
        }
    }
};
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "meta",
    ()=>meta
]);
/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/4nf3pyoOuM1U9Pa8M0cL6u
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$utils$2f$getComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/utils/getComponents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$utils$2f$getColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/utils/getColors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/schema.js [app-client] (ecmascript)");
;
;
const meta = {
    title: 'Bottts',
    creator: 'Pablo Stanley',
    source: 'https://bottts.com/',
    homepage: 'https://twitter.com/pablostanley',
    license: {
        name: 'Free for personal and commercial use',
        url: 'https://bottts.com/'
    }
};
const create = ({ prng, options })=>{
    var _a, _b, _c, _d;
    const components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$utils$2f$getComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComponents"])({
        prng,
        options
    });
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$utils$2f$getColors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getColors"])({
        prng,
        options
    });
    return {
        attributes: {
            viewBox: '0 0 120 120',
            fill: 'none',
            'shape-rendering': 'auto'
        },
        body: `<g transform="translate(22 68)">${(_b = (_a = components.mouth) === null || _a === void 0 ? void 0 : _a.value(components, colors)) !== null && _b !== void 0 ? _b : ''}</g><g transform="translate(8 20)">${(_d = (_c = components.eyes) === null || _c === void 0 ? void 0 : _c.value(components, colors)) !== null && _d !== void 0 ? _d : ''}</g>`,
        extra: ()=>({
                ...Object.entries(components).reduce((acc, [key, value])=>{
                    acc[key] = value === null || value === void 0 ? void 0 : value.name;
                    return acc;
                }, {}),
                ...Object.entries(colors).reduce((acc, [key, value])=>{
                    acc[`${key}Color`] = value;
                    return acc;
                }, {})
            })
    };
};
;
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"],
    "meta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["meta"],
    "schema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/schema.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@dicebear/bottts-neutral/lib/index.js [app-client] (ecmascript) <export * as botttsNeutral>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "botttsNeutral",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$bottts$2d$neutral$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/bottts-neutral/lib/index.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@dicebear/initials/lib/utils/initials.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @see https://www.regular-expressions.info/unicode.html
__turbopack_context__.s([
    "getInitials",
    ()=>getInitials
]);
function getInitials(seed, discardAtSymbol = true) {
    let input = seed;
    // Optionally discard everything after `@`-symbol
    if (discardAtSymbol) {
        input = seed.replace(/@.*/, '');
    }
    // Remove common apostrophes
    input = input.replace(/[`´‘’'ʼ]/g, '');
    const matches = input.match(/(\p{L}[\p{L}\p{M}]*)/gu);
    if (!matches) {
        // Re-run without discarding `@`-symbol, if no matches
        return discardAtSymbol ? getInitials(seed, false) : '';
    }
    if (matches.length === 1) {
        return matches[0].match(/^(?:\p{L}\p{M}*){1,2}/u)[0].toUpperCase();
    }
    const firstCharacter = matches[0].match(/^(?:\p{L}\p{M}*)/u)[0];
    const secondCharacter = matches[matches.length - 1].match(/^(?:\p{L}\p{M}*)/u)[0];
    return (firstCharacter + secondCharacter).toUpperCase();
}
}),
"[project]/saas/node_modules/@dicebear/initials/lib/utils/convertColor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertColor",
    ()=>convertColor
]);
function convertColor(color) {
    return 'transparent' === color ? color : `#${color}`;
}
}),
"[project]/saas/node_modules/@dicebear/initials/lib/utils/escape.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeXml",
    ()=>escapeXml
]);
function escapeXml(content) {
    return content.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
}),
"[project]/saas/node_modules/@dicebear/initials/lib/schema.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schema",
    ()=>schema
]);
const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    properties: {
        backgroundColor: {
            type: 'array',
            items: {
                type: 'string',
                pattern: '^(transparent|[a-fA-F0-9]{6})$'
            },
            default: [
                'e53935',
                'd81b60',
                '8e24aa',
                '5e35b1',
                '3949ab',
                '1e88e5',
                '039be5',
                '00acc1',
                '00897b',
                '43a047',
                '7cb342',
                'c0ca33',
                'fdd835',
                'ffb300',
                'fb8c00',
                'f4511e'
            ]
        },
        textColor: {
            type: 'array',
            items: {
                type: 'string',
                pattern: '^(transparent|[a-fA-F0-9]{6})$'
            },
            default: [
                'ffffff'
            ]
        },
        fontFamily: {
            type: 'array',
            minItems: 1,
            items: {
                type: 'string',
                enum: [
                    'Arial',
                    'Verdana',
                    'Helvetica',
                    'Tahoma',
                    'Trebuchet MS',
                    'Times New Roman',
                    'Georgia',
                    'Garamond',
                    'Courier New',
                    'Brush Script MT',
                    'sans-serif',
                    'serif'
                ]
            },
            default: [
                'Arial',
                'sans-serif'
            ]
        },
        fontSize: {
            type: 'integer',
            minimum: 1,
            maximum: 100,
            default: 50
        },
        chars: {
            type: 'integer',
            minimum: 0,
            maximum: 2,
            default: 2
        },
        fontWeight: {
            type: 'integer',
            default: 400,
            enum: [
                100,
                200,
                300,
                400,
                500,
                600,
                700,
                800,
                900
            ]
        }
    }
};
}),
"[project]/saas/node_modules/@dicebear/initials/lib/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "meta",
    ()=>meta
]);
/*!
 * DiceBear Initials (@dicebear/initials)
 *
 * Code licensed under MIT (https://github.com/dicebear/dicebear/blob/v4/packages/initials/LICENSE)
 * Copyright (c) 2024 Florian Körner
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$utils$2f$initials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/initials/lib/utils/initials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$utils$2f$convertColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/initials/lib/utils/convertColor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/initials/lib/utils/escape.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/initials/lib/schema.js [app-client] (ecmascript)");
;
;
;
const meta = {
    title: 'Initials',
    creator: 'DiceBear',
    source: 'https://github.com/dicebear/dicebear',
    license: {
        name: 'CC0 1.0',
        url: 'https://creativecommons.org/publicdomain/zero/1.0/'
    }
};
const create = ({ prng, options })=>{
    var _a, _b, _c, _d, _e, _f, _g;
    const fontFamily = (_b = (_a = options.fontFamily) === null || _a === void 0 ? void 0 : _a.join(', ')) !== null && _b !== void 0 ? _b : 'Arial, sans-serif';
    const fontSize = (_c = options.fontSize) !== null && _c !== void 0 ? _c : 50;
    const fontWeight = (_d = options.fontWeight) !== null && _d !== void 0 ? _d : 400;
    const textColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$utils$2f$convertColor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertColor"])((_f = prng.pick((_e = options.textColor) !== null && _e !== void 0 ? _e : [])) !== null && _f !== void 0 ? _f : 'ffffff');
    const initials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$utils$2f$initials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitials"])(prng.seed.trim()).slice(0, (_g = options.chars) !== null && _g !== void 0 ? _g : 2);
    // prettier-ignore
    const svg = [
        `<text x="50%" y="50%" font-family="${fontFamily}" font-size="${fontSize}" font-weight="${fontWeight}" fill="${textColor}" text-anchor="middle" dy="${(fontSize * .356).toFixed(3)}">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$utils$2f$escape$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeXml"])(initials)}</text>`
    ].join('');
    return {
        attributes: {
            viewBox: '0 0 100 100'
        },
        body: svg,
        extra: ()=>({
                fontFamily,
                fontSize,
                fontWeight,
                textColor,
                initials
            })
    };
};
;
}),
"[project]/saas/node_modules/@dicebear/initials/lib/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"],
    "meta",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["meta"],
    "schema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/initials/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$schema$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/initials/lib/schema.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@dicebear/initials/lib/index.js [app-client] (ecmascript) <export * as initials>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initials",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$dicebear$2f$initials$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@dicebear/initials/lib/index.js [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@better-auth/core/dist/env-D6s-lvJz.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>shouldPublishLog,
    "c",
    ()=>env,
    "d",
    ()=>isDevelopment,
    "f",
    ()=>isProduction,
    "i",
    ()=>logger,
    "l",
    ()=>getBooleanEnvVar,
    "m",
    ()=>nodeENV,
    "n",
    ()=>createLogger,
    "o",
    ()=>getColorDepth,
    "p",
    ()=>isTest,
    "r",
    ()=>levels,
    "s",
    ()=>ENV,
    "t",
    ()=>TTY_COLORS,
    "u",
    ()=>getEnvVar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/saas/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
//#region src/env/env-impl.ts
const _envShim = Object.create(null);
const _getEnv = (useShim)=>globalThis.process?.env || globalThis.Deno?.env.toObject() || globalThis.__env__ || (useShim ? _envShim : globalThis);
const env = new Proxy(_envShim, {
    get (_, prop) {
        return _getEnv()[prop] ?? _envShim[prop];
    },
    has (_, prop) {
        return prop in _getEnv() || prop in _envShim;
    },
    set (_, prop, value) {
        const env$1 = _getEnv(true);
        env$1[prop] = value;
        return true;
    },
    deleteProperty (_, prop) {
        if (!prop) return false;
        const env$1 = _getEnv(true);
        delete env$1[prop];
        return true;
    },
    ownKeys () {
        const env$1 = _getEnv(true);
        return Object.keys(env$1);
    }
});
function toBoolean(val) {
    return val ? val !== "false" : false;
}
const nodeENV = typeof __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") || "";
/** Detect if `NODE_ENV` environment variable is `production` */ const isProduction = nodeENV === "production";
/** Detect if `NODE_ENV` environment variable is `dev` or `development` */ const isDevelopment = ()=>nodeENV === "dev" || nodeENV === "development";
/** Detect if `NODE_ENV` environment variable is `test` */ const isTest = ()=>nodeENV === "test" || toBoolean(env.TEST);
/**
* Get environment variable with fallback
*/ function getEnvVar(key, fallback) {
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[key] ?? fallback;
    if (typeof Deno !== "undefined") return Deno.env.get(key) ?? fallback;
    if (typeof Bun !== "undefined") return Bun.env[key] ?? fallback;
    return fallback;
}
/**
* Get boolean environment variable
*/ function getBooleanEnvVar(key, fallback = true) {
    const value = getEnvVar(key);
    if (!value) return fallback;
    return value !== "0" && value.toLowerCase() !== "false" && value !== "";
}
/**
* Common environment variables used in Better Auth
*/ const ENV = Object.freeze({
    get BETTER_AUTH_SECRET () {
        return getEnvVar("BETTER_AUTH_SECRET");
    },
    get AUTH_SECRET () {
        return getEnvVar("AUTH_SECRET");
    },
    get BETTER_AUTH_TELEMETRY () {
        return getEnvVar("BETTER_AUTH_TELEMETRY");
    },
    get BETTER_AUTH_TELEMETRY_ID () {
        return getEnvVar("BETTER_AUTH_TELEMETRY_ID");
    },
    get NODE_ENV () {
        return getEnvVar("NODE_ENV", "development");
    },
    get PACKAGE_VERSION () {
        return getEnvVar("PACKAGE_VERSION", "0.0.0");
    },
    get BETTER_AUTH_TELEMETRY_ENDPOINT () {
        return getEnvVar("BETTER_AUTH_TELEMETRY_ENDPOINT", "https://telemetry.better-auth.com/v1/track");
    }
});
//#endregion
//#region src/env/color-depth.ts
const COLORS_2 = 1;
const COLORS_16 = 4;
const COLORS_256 = 8;
const COLORS_16m = 24;
const TERM_ENVS = {
    eterm: COLORS_16,
    cons25: COLORS_16,
    console: COLORS_16,
    cygwin: COLORS_16,
    dtterm: COLORS_16,
    gnome: COLORS_16,
    hurd: COLORS_16,
    jfbterm: COLORS_16,
    konsole: COLORS_16,
    kterm: COLORS_16,
    mlterm: COLORS_16,
    mosh: COLORS_16m,
    putty: COLORS_16,
    st: COLORS_16,
    "rxvt-unicode-24bit": COLORS_16m,
    terminator: COLORS_16m,
    "xterm-kitty": COLORS_16m
};
const CI_ENVS_MAP = new Map(Object.entries({
    APPVEYOR: COLORS_256,
    BUILDKITE: COLORS_256,
    CIRCLECI: COLORS_16m,
    DRONE: COLORS_256,
    GITEA_ACTIONS: COLORS_16m,
    GITHUB_ACTIONS: COLORS_16m,
    GITLAB_CI: COLORS_256,
    TRAVIS: COLORS_256
}));
const TERM_ENVS_REG_EXP = [
    /ansi/,
    /color/,
    /linux/,
    /direct/,
    /^con[0-9]*x[0-9]/,
    /^rxvt/,
    /^screen/,
    /^xterm/,
    /^vt100/,
    /^vt220/
];
function getColorDepth() {
    if (getEnvVar("FORCE_COLOR") !== void 0) switch(getEnvVar("FORCE_COLOR")){
        case "":
        case "1":
        case "true":
            return COLORS_16;
        case "2":
            return COLORS_256;
        case "3":
            return COLORS_16m;
        default:
            return COLORS_2;
    }
    if (getEnvVar("NODE_DISABLE_COLORS") !== void 0 && getEnvVar("NODE_DISABLE_COLORS") !== "" || getEnvVar("NO_COLOR") !== void 0 && getEnvVar("NO_COLOR") !== "" || getEnvVar("TERM") === "dumb") return COLORS_2;
    if (getEnvVar("TMUX")) return COLORS_16m;
    if ("TF_BUILD" in env && "AGENT_NAME" in env) return COLORS_16;
    if ("CI" in env) {
        for (const { 0: envName, 1: colors } of CI_ENVS_MAP)if (envName in env) return colors;
        if (getEnvVar("CI_NAME") === "codeship") return COLORS_256;
        return COLORS_2;
    }
    if ("TEAMCITY_VERSION" in env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.exec(getEnvVar("TEAMCITY_VERSION")) !== null ? COLORS_16 : COLORS_2;
    switch(getEnvVar("TERM_PROGRAM")){
        case "iTerm.app":
            if (!getEnvVar("TERM_PROGRAM_VERSION") || /^[0-2]\./.exec(getEnvVar("TERM_PROGRAM_VERSION")) !== null) return COLORS_256;
            return COLORS_16m;
        case "HyperTerm":
        case "MacTerm":
            return COLORS_16m;
        case "Apple_Terminal":
            return COLORS_256;
    }
    if (getEnvVar("COLORTERM") === "truecolor" || getEnvVar("COLORTERM") === "24bit") return COLORS_16m;
    if (getEnvVar("TERM")) {
        if (/truecolor/.exec(getEnvVar("TERM")) !== null) return COLORS_16m;
        if (/^xterm-256/.exec(getEnvVar("TERM")) !== null) return COLORS_256;
        const termEnv = getEnvVar("TERM").toLowerCase();
        if (TERM_ENVS[termEnv]) return TERM_ENVS[termEnv];
        if (TERM_ENVS_REG_EXP.some((term)=>term.exec(termEnv) !== null)) return COLORS_16;
    }
    if (getEnvVar("COLORTERM")) return COLORS_16;
    return COLORS_2;
}
//#endregion
//#region src/env/logger.ts
const TTY_COLORS = {
    reset: "\x1B[0m",
    bright: "\x1B[1m",
    dim: "\x1B[2m",
    undim: "\x1B[22m",
    underscore: "\x1B[4m",
    blink: "\x1B[5m",
    reverse: "\x1B[7m",
    hidden: "\x1B[8m",
    fg: {
        black: "\x1B[30m",
        red: "\x1B[31m",
        green: "\x1B[32m",
        yellow: "\x1B[33m",
        blue: "\x1B[34m",
        magenta: "\x1B[35m",
        cyan: "\x1B[36m",
        white: "\x1B[37m"
    },
    bg: {
        black: "\x1B[40m",
        red: "\x1B[41m",
        green: "\x1B[42m",
        yellow: "\x1B[43m",
        blue: "\x1B[44m",
        magenta: "\x1B[45m",
        cyan: "\x1B[46m",
        white: "\x1B[47m"
    }
};
const levels = [
    "debug",
    "info",
    "success",
    "warn",
    "error"
];
function shouldPublishLog(currentLogLevel, logLevel) {
    return levels.indexOf(logLevel) >= levels.indexOf(currentLogLevel);
}
const levelColors = {
    info: TTY_COLORS.fg.blue,
    success: TTY_COLORS.fg.green,
    warn: TTY_COLORS.fg.yellow,
    error: TTY_COLORS.fg.red,
    debug: TTY_COLORS.fg.magenta
};
const formatMessage = (level, message, colorsEnabled)=>{
    const timestamp = /* @__PURE__ */ new Date().toISOString();
    if (colorsEnabled) return `${TTY_COLORS.dim}${timestamp}${TTY_COLORS.reset} ${levelColors[level]}${level.toUpperCase()}${TTY_COLORS.reset} ${TTY_COLORS.bright}[Better Auth]:${TTY_COLORS.reset} ${message}`;
    return `${timestamp} ${level.toUpperCase()} [Better Auth]: ${message}`;
};
const createLogger = (options)=>{
    const enabled = options?.disabled !== true;
    const logLevel = options?.level ?? "error";
    const colorsEnabled = options?.disableColors !== void 0 ? !options.disableColors : getColorDepth() !== 1;
    const LogFunc = (level, message, args = [])=>{
        if (!enabled || !shouldPublishLog(logLevel, level)) return;
        const formattedMessage = formatMessage(level, message, colorsEnabled);
        if (!options || typeof options.log !== "function") {
            if (level === "error") console.error(formattedMessage, ...args);
            else if (level === "warn") console.warn(formattedMessage, ...args);
            else console.log(formattedMessage, ...args);
            return;
        }
        options.log(level === "success" ? "info" : level, message, ...args);
    };
    return {
        ...Object.fromEntries(levels.map((level)=>[
                level,
                (...[message, ...args])=>LogFunc(level, message, args)
            ])),
        get level () {
            return logLevel;
        }
    };
};
const logger = createLogger();
;
}),
"[project]/saas/node_modules/@better-auth/core/dist/env/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/env-D6s-lvJz.mjs [app-client] (ecmascript)");
;
;
}),
"[project]/saas/node_modules/@better-auth/core/dist/env-D6s-lvJz.mjs [app-client] (ecmascript) <export c as env>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/env-D6s-lvJz.mjs [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@better-auth/core/dist/utils-BqQC77zO.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>defineErrorCodes,
    "n",
    ()=>safeJSONParse,
    "r",
    ()=>generateId,
    "t",
    ()=>capitalizeFirstLetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/env-D6s-lvJz.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/utils/dist/random.mjs [app-client] (ecmascript)");
;
;
//#region src/utils/error-codes.ts
function defineErrorCodes(codes) {
    return codes;
}
//#endregion
//#region src/utils/id.ts
const generateId = (size)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRandomStringGenerator"])("a-z", "A-Z", "0-9")(size || 32);
};
//#endregion
//#region src/utils/json.ts
function safeJSONParse(data) {
    function reviver(_, value) {
        if (typeof value === "string") {
            if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) {
                const date = new Date(value);
                if (!isNaN(date.getTime())) return date;
            }
        }
        return value;
    }
    try {
        if (typeof data !== "string") return data;
        return JSON.parse(data, reviver);
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"].error("Error parsing JSON", {
            error: e
        });
        return null;
    }
}
//#endregion
//#region src/utils/string.ts
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
;
}),
"[project]/saas/node_modules/@better-auth/core/dist/error-CMXuwPsa.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>BASE_ERROR_CODES,
    "t",
    ()=>BetterAuthError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$BqQC77zO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/utils-BqQC77zO.mjs [app-client] (ecmascript)");
;
//#region src/error/codes.ts
const BASE_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$BqQC77zO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])({
    USER_NOT_FOUND: "User not found",
    FAILED_TO_CREATE_USER: "Failed to create user",
    FAILED_TO_CREATE_SESSION: "Failed to create session",
    FAILED_TO_UPDATE_USER: "Failed to update user",
    FAILED_TO_GET_SESSION: "Failed to get session",
    INVALID_PASSWORD: "Invalid password",
    INVALID_EMAIL: "Invalid email",
    INVALID_EMAIL_OR_PASSWORD: "Invalid email or password",
    SOCIAL_ACCOUNT_ALREADY_LINKED: "Social account already linked",
    PROVIDER_NOT_FOUND: "Provider not found",
    INVALID_TOKEN: "Invalid token",
    ID_TOKEN_NOT_SUPPORTED: "id_token not supported",
    FAILED_TO_GET_USER_INFO: "Failed to get user info",
    USER_EMAIL_NOT_FOUND: "User email not found",
    EMAIL_NOT_VERIFIED: "Email not verified",
    PASSWORD_TOO_SHORT: "Password too short",
    PASSWORD_TOO_LONG: "Password too long",
    USER_ALREADY_EXISTS: "User already exists.",
    USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "User already exists. Use another email.",
    EMAIL_CAN_NOT_BE_UPDATED: "Email can not be updated",
    CREDENTIAL_ACCOUNT_NOT_FOUND: "Credential account not found",
    SESSION_EXPIRED: "Session expired. Re-authenticate to perform this action.",
    FAILED_TO_UNLINK_LAST_ACCOUNT: "You can't unlink your last account",
    ACCOUNT_NOT_FOUND: "Account not found",
    USER_ALREADY_HAS_PASSWORD: "User already has a password. Provide that to delete the account."
});
//#endregion
//#region src/error/index.ts
var BetterAuthError = class extends Error {
    constructor(message, cause){
        super(message);
        this.name = "BetterAuthError";
        this.message = message;
        this.cause = cause;
        this.stack = "";
    }
};
;
}),
"[project]/saas/node_modules/@better-auth/core/dist/error/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/env-D6s-lvJz.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$BqQC77zO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/utils-BqQC77zO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CMXuwPsa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/error-CMXuwPsa.mjs [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/saas/node_modules/@better-auth/core/dist/error-CMXuwPsa.mjs [app-client] (ecmascript) <export t as BetterAuthError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BetterAuthError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CMXuwPsa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CMXuwPsa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/error-CMXuwPsa.mjs [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@better-auth/core/dist/utils/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/env-D6s-lvJz.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$BqQC77zO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/utils-BqQC77zO.mjs [app-client] (ecmascript)");
;
;
;
}),
"[project]/saas/node_modules/@better-auth/core/dist/utils-BqQC77zO.mjs [app-client] (ecmascript) <export t as capitalizeFirstLetter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "capitalizeFirstLetter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$BqQC77zO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$BqQC77zO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/utils-BqQC77zO.mjs [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/@better-auth/utils/dist/random.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRandomStringGenerator",
    ()=>createRandomStringGenerator
]);
function expandAlphabet(alphabet) {
    switch(alphabet){
        case "a-z":
            return "abcdefghijklmnopqrstuvwxyz";
        case "A-Z":
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        case "0-9":
            return "0123456789";
        case "-_":
            return "-_";
        default:
            throw new Error(`Unsupported alphabet: ${alphabet}`);
    }
}
function createRandomStringGenerator(...baseAlphabets) {
    const baseCharSet = baseAlphabets.map(expandAlphabet).join("");
    if (baseCharSet.length === 0) {
        throw new Error("No valid characters provided for random string generation.");
    }
    const baseCharSetLength = baseCharSet.length;
    return (length, ...alphabets)=>{
        if (length <= 0) {
            throw new Error("Length must be a positive integer.");
        }
        let charSet = baseCharSet;
        let charSetLength = baseCharSetLength;
        if (alphabets.length > 0) {
            charSet = alphabets.map(expandAlphabet).join("");
            charSetLength = charSet.length;
        }
        const maxValid = Math.floor(256 / charSetLength) * charSetLength;
        const buf = new Uint8Array(length * 2);
        const bufLength = buf.length;
        let result = "";
        let bufIndex = bufLength;
        let rand;
        while(result.length < length){
            if (bufIndex >= bufLength) {
                crypto.getRandomValues(buf);
                bufIndex = 0;
            }
            rand = buf[bufIndex++];
            if (rand < maxValid) {
                result += charSet[rand % charSetLength];
            }
        }
        return result;
    };
}
;
}),
"[project]/saas/node_modules/better-auth/dist/url-B7VXiggp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>getProtocol,
    "n",
    ()=>getHost,
    "r",
    ()=>getOrigin,
    "t",
    ()=>getBaseURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/env/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/env-D6s-lvJz.mjs [app-client] (ecmascript) <export c as env>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/error/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CMXuwPsa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/error-CMXuwPsa.mjs [app-client] (ecmascript) <export t as BetterAuthError>");
;
;
//#region src/utils/url.ts
function checkHasPath(url) {
    try {
        return (new URL(url).pathname.replace(/\/+$/, "") || "/") !== "/";
    } catch (error) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CMXuwPsa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Invalid base URL: ${url}. Please provide a valid base URL.`);
    }
}
function assertHasProtocol(url) {
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") throw new __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CMXuwPsa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Invalid base URL: ${url}. URL must include 'http://' or 'https://'`);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CMXuwPsa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]) throw error;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CMXuwPsa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Invalid base URL: ${url}. Please provide a valid base URL.`, String(error));
    }
}
function withPath(url, path = "/api/auth") {
    assertHasProtocol(url);
    if (checkHasPath(url)) return url;
    const trimmedUrl = url.replace(/\/+$/, "");
    if (!path || path === "/") return trimmedUrl;
    path = path.startsWith("/") ? path : `/${path}`;
    return `${trimmedUrl}${path}`;
}
function getBaseURL(url, path, request, loadEnv, trustedProxyHeaders) {
    if (url) return withPath(url, path);
    if (loadEnv !== false) {
        const fromEnv = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].NEXT_PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].NUXT_PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].NUXT_PUBLIC_AUTH_URL || (__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BASE_URL !== "/" ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$D6s$2d$lvJz$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BASE_URL : void 0);
        if (fromEnv) return withPath(fromEnv, path);
    }
    const fromRequest = request?.headers.get("x-forwarded-host");
    const fromRequestProto = request?.headers.get("x-forwarded-proto");
    if (fromRequest && fromRequestProto && trustedProxyHeaders) return withPath(`${fromRequestProto}://${fromRequest}`, path);
    if (request) {
        const url$1 = getOrigin(request.url);
        if (!url$1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$CMXuwPsa$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("Could not get origin from request. Please provide a valid base URL.");
        return withPath(url$1, path);
    }
    if (typeof window !== "undefined" && window.location) return withPath(window.location.origin, path);
}
function getOrigin(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.origin === "null" ? null : parsedUrl.origin;
    } catch (error) {
        return null;
    }
}
function getProtocol(url) {
    try {
        return new URL(url).protocol;
    } catch (error) {
        return null;
    }
}
function getHost(url) {
    try {
        return new URL(url).host;
    } catch (error) {
        return null;
    }
}
;
}),
"[project]/saas/node_modules/better-auth/dist/parser-g6CH-tVp.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>parseJSON
]);
//#region src/client/parser.ts
const PROTO_POLLUTION_PATTERNS = {
    proto: /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    constructor: /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    protoShort: /"__proto__"\s*:/,
    constructorShort: /"constructor"\s*:/
};
const JSON_SIGNATURE = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
const SPECIAL_VALUES = {
    true: true,
    false: false,
    null: null,
    undefined: void 0,
    nan: NaN,
    infinity: Number.POSITIVE_INFINITY,
    "-infinity": Number.NEGATIVE_INFINITY
};
const ISO_DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
}
function parseISODate(value) {
    const match = ISO_DATE_REGEX.exec(value);
    if (!match) return null;
    const [, year, month, day, hour, minute, second, ms, offsetSign, offsetHour, offsetMinute] = match;
    let date = new Date(Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), parseInt(hour, 10), parseInt(minute, 10), parseInt(second, 10), ms ? parseInt(ms.padEnd(3, "0"), 10) : 0));
    if (offsetSign) {
        const offset = (parseInt(offsetHour, 10) * 60 + parseInt(offsetMinute, 10)) * (offsetSign === "+" ? -1 : 1);
        date.setUTCMinutes(date.getUTCMinutes() + offset);
    }
    return isValidDate(date) ? date : null;
}
function betterJSONParse(value, options = {}) {
    const { strict = false, warnings = false, reviver, parseDates = true } = options;
    if (typeof value !== "string") return value;
    const trimmed = value.trim();
    if (trimmed.length > 0 && trimmed[0] === "\"" && trimmed.endsWith("\"") && !trimmed.slice(1, -1).includes("\"")) return trimmed.slice(1, -1);
    const lowerValue = trimmed.toLowerCase();
    if (lowerValue.length <= 9 && lowerValue in SPECIAL_VALUES) return SPECIAL_VALUES[lowerValue];
    if (!JSON_SIGNATURE.test(trimmed)) {
        if (strict) throw new SyntaxError("[better-json] Invalid JSON");
        return value;
    }
    if (Object.entries(PROTO_POLLUTION_PATTERNS).some(([key, pattern])=>{
        const matches = pattern.test(trimmed);
        if (matches && warnings) console.warn(`[better-json] Detected potential prototype pollution attempt using ${key} pattern`);
        return matches;
    }) && strict) throw new Error("[better-json] Potential prototype pollution attempt detected");
    try {
        const secureReviver = (key, value$1)=>{
            if (key === "__proto__" || key === "constructor" && value$1 && typeof value$1 === "object" && "prototype" in value$1) {
                if (warnings) console.warn(`[better-json] Dropping "${key}" key to prevent prototype pollution`);
                return;
            }
            if (parseDates && typeof value$1 === "string") {
                const date = parseISODate(value$1);
                if (date) return date;
            }
            return reviver ? reviver(key, value$1) : value$1;
        };
        return JSON.parse(trimmed, secureReviver);
    } catch (error) {
        if (strict) throw error;
        return value;
    }
}
function parseJSON(value, options = {
    strict: true
}) {
    return betterJSONParse(value, options);
}
;
}),
"[project]/saas/node_modules/better-auth/dist/proxy-DNjQepc2.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>kOnlineManager,
    "c",
    ()=>kBroadcastChannel,
    "i",
    ()=>useAuthQuery,
    "n",
    ()=>getClientConfig,
    "o",
    ()=>kFocusManager,
    "r",
    ()=>createSessionRefreshManager,
    "s",
    ()=>getGlobalBroadcastChannel,
    "t",
    ()=>createDynamicPathProxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$B7VXiggp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/better-auth/dist/url-B7VXiggp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$better$2d$auth$2f$dist$2f$parser$2d$g6CH$2d$tVp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/better-auth/dist/parser-g6CH-tVp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/nanostores/atom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/nanostores/lifecycle/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-fetch/fetch/dist/index.js [app-client] (ecmascript)");
;
;
;
;
//#region src/client/broadcast-channel.ts
const kBroadcastChannel = Symbol.for("better-auth:broadcast-channel");
const now$1 = ()=>Math.floor(Date.now() / 1e3);
var WindowBroadcastChannel = class {
    listeners = /* @__PURE__ */ new Set();
    name;
    constructor(name = "better-auth.message"){
        this.name = name;
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>{
            this.listeners.delete(listener);
        };
    }
    post(message) {
        if (typeof window === "undefined") return;
        try {
            localStorage.setItem(this.name, JSON.stringify({
                ...message,
                timestamp: now$1()
            }));
        } catch  {}
    }
    setup() {
        if (typeof window === "undefined" || typeof window.addEventListener === "undefined") return ()=>{};
        const handler = (event)=>{
            if (event.key !== this.name) return;
            const message = JSON.parse(event.newValue ?? "{}");
            if (message?.event !== "session" || !message?.data) return;
            this.listeners.forEach((listener)=>listener(message));
        };
        window.addEventListener("storage", handler);
        return ()=>{
            window.removeEventListener("storage", handler);
        };
    }
};
function getGlobalBroadcastChannel(name = "better-auth.message") {
    if (!globalThis[kBroadcastChannel]) globalThis[kBroadcastChannel] = new WindowBroadcastChannel(name);
    return globalThis[kBroadcastChannel];
}
//#endregion
//#region src/client/focus-manager.ts
const kFocusManager = Symbol.for("better-auth:focus-manager");
var WindowFocusManager = class {
    listeners = /* @__PURE__ */ new Set();
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>{
            this.listeners.delete(listener);
        };
    }
    setFocused(focused) {
        this.listeners.forEach((listener)=>listener(focused));
    }
    setup() {
        if (typeof window === "undefined" || typeof document === "undefined" || typeof window.addEventListener === "undefined") return ()=>{};
        const visibilityHandler = ()=>{
            if (document.visibilityState === "visible") this.setFocused(true);
        };
        document.addEventListener("visibilitychange", visibilityHandler, false);
        return ()=>{
            document.removeEventListener("visibilitychange", visibilityHandler, false);
        };
    }
};
function getGlobalFocusManager() {
    if (!globalThis[kFocusManager]) globalThis[kFocusManager] = new WindowFocusManager();
    return globalThis[kFocusManager];
}
//#endregion
//#region src/client/online-manager.ts
const kOnlineManager = Symbol.for("better-auth:online-manager");
var WindowOnlineManager = class {
    listeners = /* @__PURE__ */ new Set();
    isOnline = typeof navigator !== "undefined" ? navigator.onLine : true;
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>{
            this.listeners.delete(listener);
        };
    }
    setOnline(online) {
        this.isOnline = online;
        this.listeners.forEach((listener)=>listener(online));
    }
    setup() {
        if (typeof window === "undefined" || typeof window.addEventListener === "undefined") return ()=>{};
        const onOnline = ()=>this.setOnline(true);
        const onOffline = ()=>this.setOnline(false);
        window.addEventListener("online", onOnline, false);
        window.addEventListener("offline", onOffline, false);
        return ()=>{
            window.removeEventListener("online", onOnline, false);
            window.removeEventListener("offline", onOffline, false);
        };
    }
};
function getGlobalOnlineManager() {
    if (!globalThis[kOnlineManager]) globalThis[kOnlineManager] = new WindowOnlineManager();
    return globalThis[kOnlineManager];
}
//#endregion
//#region src/client/query.ts
const isServer = ()=>typeof window === "undefined";
const useAuthQuery = (initializedAtom, path, $fetch, options)=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])({
        data: null,
        error: null,
        isPending: true,
        isRefetching: false,
        refetch: (queryParams)=>fn(queryParams)
    });
    const fn = async (queryParams)=>{
        return new Promise((resolve)=>{
            const opts = typeof options === "function" ? options({
                data: value.get().data,
                error: value.get().error,
                isPending: value.get().isPending
            }) : options;
            $fetch(path, {
                ...opts,
                query: {
                    ...opts?.query,
                    ...queryParams?.query
                },
                async onSuccess (context) {
                    value.set({
                        data: context.data,
                        error: null,
                        isPending: false,
                        isRefetching: false,
                        refetch: value.value.refetch
                    });
                    await opts?.onSuccess?.(context);
                },
                async onError (context) {
                    const { request } = context;
                    const retryAttempts = typeof request.retry === "number" ? request.retry : request.retry?.attempts;
                    const retryAttempt = request.retryAttempt || 0;
                    if (retryAttempts && retryAttempt < retryAttempts) return;
                    value.set({
                        error: context.error,
                        data: null,
                        isPending: false,
                        isRefetching: false,
                        refetch: value.value.refetch
                    });
                    await opts?.onError?.(context);
                },
                async onRequest (context) {
                    const currentValue = value.get();
                    value.set({
                        isPending: currentValue.data === null,
                        data: currentValue.data,
                        error: null,
                        isRefetching: true,
                        refetch: value.value.refetch
                    });
                    await opts?.onRequest?.(context);
                }
            }).catch((error)=>{
                value.set({
                    error,
                    data: null,
                    isPending: false,
                    isRefetching: false,
                    refetch: value.value.refetch
                });
            }).finally(()=>{
                resolve(void 0);
            });
        });
    };
    initializedAtom = Array.isArray(initializedAtom) ? initializedAtom : [
        initializedAtom
    ];
    let isMounted = false;
    for (const initAtom of initializedAtom)initAtom.subscribe(async ()=>{
        if (isServer()) return;
        if (isMounted) await fn();
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onMount"])(value, ()=>{
            const timeoutId = setTimeout(async ()=>{
                if (!isMounted) {
                    await fn();
                    isMounted = true;
                }
            }, 0);
            return ()=>{
                value.off();
                initAtom.off();
                clearTimeout(timeoutId);
            };
        });
    });
    return value;
};
//#endregion
//#region src/client/session-refresh.ts
const now = ()=>Math.floor(Date.now() / 1e3);
/**
* Rate limit: don't refetch on focus if a session request was made within this many seconds
*/ const FOCUS_REFETCH_RATE_LIMIT_SECONDS = 5;
function createSessionRefreshManager(opts) {
    const { sessionAtom, sessionSignal, $fetch, options = {} } = opts;
    const refetchInterval = options.sessionOptions?.refetchInterval ?? 0;
    const refetchOnWindowFocus = options.sessionOptions?.refetchOnWindowFocus ?? true;
    const refetchWhenOffline = options.sessionOptions?.refetchWhenOffline ?? false;
    const state = {
        lastSync: 0,
        lastSessionRequest: 0,
        cachedSession: void 0
    };
    const shouldRefetch = ()=>{
        return refetchWhenOffline || getGlobalOnlineManager().isOnline;
    };
    const triggerRefetch = (event)=>{
        if (!shouldRefetch()) return;
        if (event?.event === "storage") {
            state.lastSync = now();
            sessionSignal.set(!sessionSignal.get());
            return;
        }
        const currentSession = sessionAtom.get();
        if (event?.event === "poll") {
            state.lastSessionRequest = now();
            $fetch("/get-session").then((res)=>{
                sessionAtom.set({
                    ...currentSession,
                    data: res.data,
                    error: res.error || null
                });
                state.lastSync = now();
                sessionSignal.set(!sessionSignal.get());
            }).catch(()=>{});
            return;
        }
        if (event?.event === "visibilitychange") {
            if (now() - state.lastSessionRequest < FOCUS_REFETCH_RATE_LIMIT_SECONDS && currentSession?.data !== null && currentSession?.data !== void 0) return;
        }
        if (currentSession?.data === null || currentSession?.data === void 0 || event?.event === "visibilitychange") {
            if (event?.event === "visibilitychange") state.lastSessionRequest = now();
            state.lastSync = now();
            sessionSignal.set(!sessionSignal.get());
        }
    };
    const broadcastSessionUpdate = (trigger)=>{
        getGlobalBroadcastChannel().post({
            event: "session",
            data: {
                trigger
            },
            clientId: Math.random().toString(36).substring(7)
        });
    };
    const setupPolling = ()=>{
        if (refetchInterval && refetchInterval > 0) state.pollInterval = setInterval(()=>{
            if (sessionAtom.get()?.data) triggerRefetch({
                event: "poll"
            });
        }, refetchInterval * 1e3);
    };
    const setupBroadcast = ()=>{
        state.unsubscribeBroadcast = getGlobalBroadcastChannel().subscribe(()=>{
            triggerRefetch({
                event: "storage"
            });
        });
    };
    const setupFocusRefetch = ()=>{
        if (!refetchOnWindowFocus) return;
        state.unsubscribeFocus = getGlobalFocusManager().subscribe(()=>{
            triggerRefetch({
                event: "visibilitychange"
            });
        });
    };
    const setupOnlineRefetch = ()=>{
        state.unsubscribeOnline = getGlobalOnlineManager().subscribe((online)=>{
            if (online) triggerRefetch({
                event: "visibilitychange"
            });
        });
    };
    const init = ()=>{
        setupPolling();
        setupBroadcast();
        setupFocusRefetch();
        setupOnlineRefetch();
        getGlobalBroadcastChannel().setup();
        getGlobalFocusManager().setup();
        getGlobalOnlineManager().setup();
    };
    const cleanup = ()=>{
        if (state.pollInterval) {
            clearInterval(state.pollInterval);
            state.pollInterval = void 0;
        }
        if (state.unsubscribeBroadcast) {
            state.unsubscribeBroadcast();
            state.unsubscribeBroadcast = void 0;
        }
        if (state.unsubscribeFocus) {
            state.unsubscribeFocus();
            state.unsubscribeFocus = void 0;
        }
        if (state.unsubscribeOnline) {
            state.unsubscribeOnline();
            state.unsubscribeOnline = void 0;
        }
        state.lastSync = 0;
        state.lastSessionRequest = 0;
        state.cachedSession = void 0;
    };
    return {
        init,
        cleanup,
        triggerRefetch,
        broadcastSessionUpdate
    };
}
//#endregion
//#region src/client/fetch-plugins.ts
const redirectPlugin = {
    id: "redirect",
    name: "Redirect",
    hooks: {
        onSuccess (context) {
            if (context.data?.url && context.data?.redirect) {
                if (typeof window !== "undefined" && window.location) {
                    if (window.location) try {
                        window.location.href = context.data.url;
                    } catch  {}
                }
            }
        }
    }
};
//#endregion
//#region src/client/session-atom.ts
function getSessionAtom($fetch, options) {
    const $signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])(false);
    const session = useAuthQuery($signal, "/get-session", $fetch, {
        method: "GET"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onMount"])(session, ()=>{
        const refreshManager = createSessionRefreshManager({
            sessionAtom: session,
            sessionSignal: $signal,
            $fetch,
            options
        });
        refreshManager.init();
        return ()=>{
            refreshManager.cleanup();
        };
    });
    return {
        session,
        $sessionSignal: $signal
    };
}
//#endregion
//#region src/client/config.ts
const getClientConfig = (options, loadEnv)=>{
    const isCredentialsSupported = "credentials" in Request.prototype;
    const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$B7VXiggp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(options?.baseURL, options?.basePath, void 0, loadEnv) ?? "/api/auth";
    const pluginsFetchPlugins = options?.plugins?.flatMap((plugin)=>plugin.fetchPlugins).filter((pl)=>pl !== void 0) || [];
    const lifeCyclePlugin = {
        id: "lifecycle-hooks",
        name: "lifecycle-hooks",
        hooks: {
            onSuccess: options?.fetchOptions?.onSuccess,
            onError: options?.fetchOptions?.onError,
            onRequest: options?.fetchOptions?.onRequest,
            onResponse: options?.fetchOptions?.onResponse
        }
    };
    const { onSuccess, onError, onRequest, onResponse, ...restOfFetchOptions } = options?.fetchOptions || {};
    const $fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFetch"])({
        baseURL,
        ...isCredentialsSupported ? {
            credentials: "include"
        } : {},
        method: "GET",
        jsonParser (text) {
            if (!text) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$better$2d$auth$2f$dist$2f$parser$2d$g6CH$2d$tVp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(text, {
                strict: false
            });
        },
        customFetchImpl: fetch,
        ...restOfFetchOptions,
        plugins: [
            lifeCyclePlugin,
            ...restOfFetchOptions.plugins || [],
            ...options?.disableDefaultFetchPlugins ? [] : [
                redirectPlugin
            ],
            ...pluginsFetchPlugins
        ]
    });
    const { $sessionSignal, session } = getSessionAtom($fetch, options);
    const plugins = options?.plugins || [];
    let pluginsActions = {};
    let pluginsAtoms = {
        $sessionSignal,
        session
    };
    let pluginPathMethods = {
        "/sign-out": "POST",
        "/revoke-sessions": "POST",
        "/revoke-other-sessions": "POST",
        "/delete-user": "POST"
    };
    const atomListeners = [
        {
            signal: "$sessionSignal",
            matcher (path) {
                return path === "/sign-out" || path === "/update-user" || path === "/sign-up/email" || path === "/sign-in/email" || path === "/delete-user" || path === "/verify-email" || path === "/revoke-sessions" || path === "/revoke-session" || path === "/change-email";
            }
        }
    ];
    for (const plugin of plugins){
        if (plugin.getAtoms) Object.assign(pluginsAtoms, plugin.getAtoms?.($fetch));
        if (plugin.pathMethods) Object.assign(pluginPathMethods, plugin.pathMethods);
        if (plugin.atomListeners) atomListeners.push(...plugin.atomListeners);
    }
    const $store = {
        notify: (signal)=>{
            pluginsAtoms[signal].set(!pluginsAtoms[signal].get());
        },
        listen: (signal, listener)=>{
            pluginsAtoms[signal].subscribe(listener);
        },
        atoms: pluginsAtoms
    };
    for (const plugin of plugins)if (plugin.getActions) Object.assign(pluginsActions, plugin.getActions?.($fetch, $store, options));
    return {
        get baseURL () {
            return baseURL;
        },
        pluginsActions,
        pluginsAtoms,
        pluginPathMethods,
        atomListeners,
        $fetch,
        $store
    };
};
//#endregion
//#region src/utils/is-atom.ts
function isAtom(value) {
    return typeof value === "object" && value !== null && "get" in value && typeof value.get === "function" && "lc" in value && typeof value.lc === "number";
}
//#endregion
//#region src/client/proxy.ts
function getMethod(path, knownPathMethods, args) {
    const method = knownPathMethods[path];
    const { fetchOptions, query, ...body } = args || {};
    if (method) return method;
    if (fetchOptions?.method) return fetchOptions.method;
    if (body && Object.keys(body).length > 0) return "POST";
    return "GET";
}
function createDynamicPathProxy(routes, client, knownPathMethods, atoms, atomListeners) {
    function createProxy(path = []) {
        return new Proxy(function() {}, {
            get (_, prop) {
                if (typeof prop !== "string") return;
                if (prop === "then" || prop === "catch" || prop === "finally") return;
                const fullPath = [
                    ...path,
                    prop
                ];
                let current = routes;
                for (const segment of fullPath)if (current && typeof current === "object" && segment in current) current = current[segment];
                else {
                    current = void 0;
                    break;
                }
                if (typeof current === "function") return current;
                if (isAtom(current)) return current;
                return createProxy(fullPath);
            },
            apply: async (_, __, args)=>{
                const routePath = "/" + path.map((segment)=>segment.replace(/[A-Z]/g, (letter)=>`-${letter.toLowerCase()}`)).join("/");
                const arg = args[0] || {};
                const fetchOptions = args[1] || {};
                const { query, fetchOptions: argFetchOptions, ...body } = arg;
                const options = {
                    ...fetchOptions,
                    ...argFetchOptions
                };
                const method = getMethod(routePath, knownPathMethods, arg);
                return await client(routePath, {
                    ...options,
                    body: method === "GET" ? void 0 : {
                        ...body,
                        ...options?.body || {}
                    },
                    query: query || options?.query,
                    method,
                    async onSuccess (context) {
                        await options?.onSuccess?.(context);
                        if (!atomListeners || options.disableSignal) return;
                        /**
						* We trigger listeners
						*/ const matches = atomListeners.filter((s)=>s.matcher(routePath));
                        if (!matches.length) return;
                        for (const match of matches){
                            const signal = atoms[match.signal];
                            if (!signal) return;
                            /**
							* To avoid race conditions we set the signal in a setTimeout
							*/ const val = signal.get();
                            setTimeout(()=>{
                                signal.set(!val);
                            }, 10);
                        }
                    }
                });
            }
        });
    }
    return createProxy();
}
;
}),
"[project]/saas/node_modules/better-auth/dist/client/react/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAuthClient",
    ()=>createAuthClient,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$B7VXiggp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/better-auth/dist/url-B7VXiggp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$better$2d$auth$2f$dist$2f$proxy$2d$DNjQepc2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/better-auth/dist/proxy-DNjQepc2.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$better$2d$auth$2f$dist$2f$parser$2d$g6CH$2d$tVp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/better-auth/dist/parser-g6CH-tVp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/utils/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$BqQC77zO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__capitalizeFirstLetter$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/@better-auth/core/dist/utils-BqQC77zO.mjs [app-client] (ecmascript) <export t as capitalizeFirstLetter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$listen$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/nanostores/listen-keys/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
//#region src/client/react/react-store.ts
/**
* Subscribe to store changes and get store's value.
*
* Can be used with store builder too.
*
* ```js
* import { useStore } from 'nanostores/react'
*
* import { router } from '../store/router'
*
* export const Layout = () => {
*   let page = useStore(router)
*   if (page.route === 'home') {
*     return <HomePage />
*   } else {
*     return <Error404 />
*   }
* }
* ```
*
* @param store Store instance.
* @returns Store value.
*/ function useStore(store, options = {}) {
    let snapshotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(store.get());
    const { keys, deps = [
        store,
        keys
    ] } = options;
    let subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useStore.useCallback[subscribe]": (onChange)=>{
            const emitChange = {
                "useStore.useCallback[subscribe].emitChange": (value)=>{
                    if (snapshotRef.current === value) return;
                    snapshotRef.current = value;
                    onChange();
                }
            }["useStore.useCallback[subscribe].emitChange"];
            emitChange(store.value);
            if (keys?.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$listen$2d$keys$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listenKeys"])(store, keys, emitChange);
            return store.listen(emitChange);
        }
    }["useStore.useCallback[subscribe]"], deps);
    let get = ()=>snapshotRef.current;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, get, get);
}
//#endregion
//#region src/client/react/index.ts
function getAtomKey(str) {
    return `use${(0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2d$BqQC77zO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__capitalizeFirstLetter$3e$__["capitalizeFirstLetter"])(str)}`;
}
function createAuthClient(options) {
    const { pluginPathMethods, pluginsActions, pluginsAtoms, $fetch, $store, atomListeners } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$better$2d$auth$2f$dist$2f$proxy$2d$DNjQepc2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"])(options);
    let resolvedHooks = {};
    for (const [key, value] of Object.entries(pluginsAtoms))resolvedHooks[getAtomKey(key)] = ()=>useStore(value);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$better$2d$auth$2f$dist$2f$proxy$2d$DNjQepc2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])({
        ...pluginsActions,
        ...resolvedHooks,
        $fetch,
        $store
    }, $fetch, pluginPathMethods, pluginsAtoms, atomListeners);
}
;
}),
"[project]/saas/node_modules/nanostores/task/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allTasks",
    ()=>allTasks,
    "cleanTasks",
    ()=>cleanTasks,
    "startTask",
    ()=>startTask,
    "task",
    ()=>task
]);
let tasks = 0;
let resolves = [];
function startTask() {
    tasks += 1;
    return ()=>{
        tasks -= 1;
        if (tasks === 0) {
            let prevResolves = resolves;
            resolves = [];
            for (let i of prevResolves)i();
        }
    };
}
function task(cb) {
    let endTask = startTask();
    let promise = cb().finally(endTask);
    promise.t = true;
    return promise;
}
function allTasks() {
    if (tasks === 0) {
        return Promise.resolve();
    } else {
        return new Promise((resolve)=>{
            resolves.push(resolve);
        });
    }
}
function cleanTasks() {
    tasks = 0;
}
}),
"[project]/saas/node_modules/nanostores/clean-stores/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clean",
    ()=>clean,
    "cleanStores",
    ()=>cleanStores
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/saas/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$task$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/nanostores/task/index.js [app-client] (ecmascript)");
;
let clean = Symbol('clean');
let cleanStores = (...stores)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$task$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanTasks"])();
    for (let $store of stores){
        if ($store) {
            if ($store.mocked) delete $store.mocked;
            if ($store[clean]) $store[clean]();
        }
    }
};
}),
"[project]/saas/node_modules/nanostores/atom/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "atom",
    ()=>atom,
    "epoch",
    ()=>epoch,
    "readonlyType",
    ()=>readonlyType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/saas/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/nanostores/clean-stores/index.js [app-client] (ecmascript)");
;
let listenerQueue = [];
let lqIndex = 0;
const QUEUE_ITEMS_PER_LISTENER = 4;
let epoch = 0;
const atom = (initialValue)=>{
    let listeners = [];
    let $atom = {
        get () {
            if (!$atom.lc) {
                $atom.listen(()=>{})();
            }
            return $atom.value;
        },
        lc: 0,
        listen (listener) {
            $atom.lc = listeners.push(listener);
            return ()=>{
                for(let i = lqIndex + QUEUE_ITEMS_PER_LISTENER; i < listenerQueue.length;){
                    if (listenerQueue[i] === listener) {
                        listenerQueue.splice(i, QUEUE_ITEMS_PER_LISTENER);
                    } else {
                        i += QUEUE_ITEMS_PER_LISTENER;
                    }
                }
                let index = listeners.indexOf(listener);
                if (~index) {
                    listeners.splice(index, 1);
                    if (!--$atom.lc) $atom.off();
                }
            };
        },
        notify (oldValue, changedKey) {
            epoch++;
            let runListenerQueue = !listenerQueue.length;
            for (let listener of listeners){
                listenerQueue.push(listener, $atom.value, oldValue, changedKey);
            }
            if (runListenerQueue) {
                for(lqIndex = 0; lqIndex < listenerQueue.length; lqIndex += QUEUE_ITEMS_PER_LISTENER){
                    listenerQueue[lqIndex](listenerQueue[lqIndex + 1], listenerQueue[lqIndex + 2], listenerQueue[lqIndex + 3]);
                }
                listenerQueue.length = 0;
            }
        },
        /* It will be called on last listener unsubscribing.
       We will redefine it in onMount and onStop. */ off () {},
        set (newValue) {
            let oldValue = $atom.value;
            if (oldValue !== newValue) {
                $atom.value = newValue;
                $atom.notify(oldValue);
            }
        },
        subscribe (listener) {
            let unbind = $atom.listen(listener);
            listener($atom.value);
            return unbind;
        },
        value: initialValue
    };
    if ("TURBOPACK compile-time truthy", 1) {
        $atom[__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"]] = ()=>{
            listeners = [];
            $atom.lc = 0;
            $atom.off();
        };
    }
    return $atom;
};
const readonlyType = (store)=>store;
}),
"[project]/saas/node_modules/nanostores/lifecycle/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STORE_UNMOUNT_DELAY",
    ()=>STORE_UNMOUNT_DELAY,
    "on",
    ()=>on,
    "onMount",
    ()=>onMount,
    "onNotify",
    ()=>onNotify,
    "onSet",
    ()=>onSet,
    "onStart",
    ()=>onStart,
    "onStop",
    ()=>onStop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/saas/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/nanostores/clean-stores/index.js [app-client] (ecmascript)");
;
const START = 0;
const STOP = 1;
const SET = 2;
const NOTIFY = 3;
const MOUNT = 5;
const UNMOUNT = 6;
const REVERT_MUTATION = 10;
let on = (object, listener, eventKey, mutateStore)=>{
    object.events = object.events || {};
    if (!object.events[eventKey + REVERT_MUTATION]) {
        object.events[eventKey + REVERT_MUTATION] = mutateStore((eventProps)=>{
            // eslint-disable-next-line no-sequences
            object.events[eventKey].reduceRight((event, l)=>(l(event), event), {
                shared: {},
                ...eventProps
            });
        });
    }
    object.events[eventKey] = object.events[eventKey] || [];
    object.events[eventKey].push(listener);
    return ()=>{
        let currentListeners = object.events[eventKey];
        let index = currentListeners.indexOf(listener);
        currentListeners.splice(index, 1);
        if (!currentListeners.length) {
            delete object.events[eventKey];
            object.events[eventKey + REVERT_MUTATION]();
            delete object.events[eventKey + REVERT_MUTATION];
        }
    };
};
let onStart = ($store, listener)=>on($store, listener, START, (runListeners)=>{
        let originListen = $store.listen;
        $store.listen = (arg)=>{
            if (!$store.lc && !$store.starting) {
                $store.starting = true;
                runListeners();
                delete $store.starting;
            }
            return originListen(arg);
        };
        return ()=>{
            $store.listen = originListen;
        };
    });
let onStop = ($store, listener)=>on($store, listener, STOP, (runListeners)=>{
        let originOff = $store.off;
        $store.off = ()=>{
            runListeners();
            originOff();
        };
        return ()=>{
            $store.off = originOff;
        };
    });
let onSet = ($store, listener)=>on($store, listener, SET, (runListeners)=>{
        let originSet = $store.set;
        let originSetKey = $store.setKey;
        if ($store.setKey) {
            $store.setKey = (changed, changedValue)=>{
                let isAborted;
                let abort = ()=>{
                    isAborted = true;
                };
                runListeners({
                    abort,
                    changed,
                    newValue: {
                        ...$store.value,
                        [changed]: changedValue
                    }
                });
                if (!isAborted) return originSetKey(changed, changedValue);
            };
        }
        $store.set = (newValue)=>{
            let isAborted;
            let abort = ()=>{
                isAborted = true;
            };
            runListeners({
                abort,
                newValue
            });
            if (!isAborted) return originSet(newValue);
        };
        return ()=>{
            $store.set = originSet;
            $store.setKey = originSetKey;
        };
    });
let onNotify = ($store, listener)=>on($store, listener, NOTIFY, (runListeners)=>{
        let originNotify = $store.notify;
        $store.notify = (oldValue, changed)=>{
            let isAborted;
            let abort = ()=>{
                isAborted = true;
            };
            runListeners({
                abort,
                changed,
                oldValue
            });
            if (!isAborted) return originNotify(oldValue, changed);
        };
        return ()=>{
            $store.notify = originNotify;
        };
    });
let STORE_UNMOUNT_DELAY = 1000;
let onMount = ($store, initialize)=>{
    let listener = (payload)=>{
        let destroy = initialize(payload);
        if (destroy) $store.events[UNMOUNT].push(destroy);
    };
    return on($store, listener, MOUNT, (runListeners)=>{
        let originListen = $store.listen;
        $store.listen = (...args)=>{
            if (!$store.lc && !$store.active) {
                $store.active = true;
                runListeners();
            }
            return originListen(...args);
        };
        let originOff = $store.off;
        $store.events[UNMOUNT] = [];
        $store.off = ()=>{
            originOff();
            setTimeout(()=>{
                if ($store.active && !$store.lc) {
                    $store.active = false;
                    for (let destroy of $store.events[UNMOUNT])destroy();
                    $store.events[UNMOUNT] = [];
                }
            }, STORE_UNMOUNT_DELAY);
        };
        if ("TURBOPACK compile-time truthy", 1) {
            let originClean = $store[__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"]];
            $store[__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$nanostores$2f$clean$2d$stores$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clean"]] = ()=>{
                for (let destroy of $store.events[UNMOUNT])destroy();
                $store.events[UNMOUNT] = [];
                $store.active = false;
                originClean();
            };
        }
        return ()=>{
            $store.listen = originListen;
            $store.off = originOff;
        };
    });
};
}),
"[project]/saas/node_modules/nanostores/listen-keys/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listenKeys",
    ()=>listenKeys,
    "subscribeKeys",
    ()=>subscribeKeys
]);
function listenKeys($store, keys, listener) {
    let keysSet = new Set(keys).add(undefined);
    return $store.listen((value, oldValue, changed)=>{
        if (keysSet.has(changed)) {
            listener(value, oldValue, changed);
        }
    });
}
function subscribeKeys($store, keys, listener) {
    let unbind = listenKeys($store, keys, listener);
    listener($store.value);
    return unbind;
}
}),
"[project]/saas/node_modules/@better-fetch/fetch/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BetterFetchError",
    ()=>BetterFetchError,
    "ValidationError",
    ()=>ValidationError,
    "applySchemaPlugin",
    ()=>applySchemaPlugin,
    "betterFetch",
    ()=>betterFetch,
    "bodyParser",
    ()=>bodyParser,
    "createFetch",
    ()=>createFetch,
    "createRetryStrategy",
    ()=>createRetryStrategy,
    "createSchema",
    ()=>createSchema,
    "detectContentType",
    ()=>detectContentType,
    "detectResponseType",
    ()=>detectResponseType,
    "getBody",
    ()=>getBody,
    "getFetch",
    ()=>getFetch,
    "getHeaders",
    ()=>getHeaders,
    "getMethod",
    ()=>getMethod,
    "getTimeout",
    ()=>getTimeout,
    "getURL",
    ()=>getURL,
    "initializePlugins",
    ()=>initializePlugins,
    "isFunction",
    ()=>isFunction,
    "isJSONParsable",
    ()=>isJSONParsable,
    "isJSONSerializable",
    ()=>isJSONSerializable,
    "isPayloadMethod",
    ()=>isPayloadMethod,
    "isRouteMethod",
    ()=>isRouteMethod,
    "jsonParse",
    ()=>jsonParse,
    "methods",
    ()=>methods,
    "parseStandardSchema",
    ()=>parseStandardSchema
]);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));
// src/error.ts
var BetterFetchError = class extends Error {
    constructor(status, statusText, error){
        super(statusText || status.toString(), {
            cause: error
        });
        this.status = status;
        this.statusText = statusText;
        this.error = error;
    }
};
// src/plugins.ts
var initializePlugins = async (url, options)=>{
    var _a, _b, _c, _d, _e, _f;
    let opts = options || {};
    const hooks = {
        onRequest: [
            options == null ? void 0 : options.onRequest
        ],
        onResponse: [
            options == null ? void 0 : options.onResponse
        ],
        onSuccess: [
            options == null ? void 0 : options.onSuccess
        ],
        onError: [
            options == null ? void 0 : options.onError
        ],
        onRetry: [
            options == null ? void 0 : options.onRetry
        ]
    };
    if (!options || !(options == null ? void 0 : options.plugins)) {
        return {
            url,
            options: opts,
            hooks
        };
    }
    for (const plugin of (options == null ? void 0 : options.plugins) || []){
        if (plugin.init) {
            const pluginRes = await ((_a = plugin.init) == null ? void 0 : _a.call(plugin, url.toString(), options));
            opts = pluginRes.options || opts;
            url = pluginRes.url;
        }
        hooks.onRequest.push((_b = plugin.hooks) == null ? void 0 : _b.onRequest);
        hooks.onResponse.push((_c = plugin.hooks) == null ? void 0 : _c.onResponse);
        hooks.onSuccess.push((_d = plugin.hooks) == null ? void 0 : _d.onSuccess);
        hooks.onError.push((_e = plugin.hooks) == null ? void 0 : _e.onError);
        hooks.onRetry.push((_f = plugin.hooks) == null ? void 0 : _f.onRetry);
    }
    return {
        url,
        options: opts,
        hooks
    };
};
// src/retry.ts
var LinearRetryStrategy = class {
    constructor(options){
        this.options = options;
    }
    shouldAttemptRetry(attempt, response) {
        if (this.options.shouldRetry) {
            return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
        }
        return Promise.resolve(attempt < this.options.attempts);
    }
    getDelay() {
        return this.options.delay;
    }
};
var ExponentialRetryStrategy = class {
    constructor(options){
        this.options = options;
    }
    shouldAttemptRetry(attempt, response) {
        if (this.options.shouldRetry) {
            return Promise.resolve(attempt < this.options.attempts && this.options.shouldRetry(response));
        }
        return Promise.resolve(attempt < this.options.attempts);
    }
    getDelay(attempt) {
        const delay = Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** attempt);
        return delay;
    }
};
function createRetryStrategy(options) {
    if (typeof options === "number") {
        return new LinearRetryStrategy({
            type: "linear",
            attempts: options,
            delay: 1e3
        });
    }
    switch(options.type){
        case "linear":
            return new LinearRetryStrategy(options);
        case "exponential":
            return new ExponentialRetryStrategy(options);
        default:
            throw new Error("Invalid retry strategy");
    }
}
// src/auth.ts
var getAuthHeader = async (options)=>{
    const headers = {};
    const getValue = async (value)=>typeof value === "function" ? await value() : value;
    if (options == null ? void 0 : options.auth) {
        if (options.auth.type === "Bearer") {
            const token = await getValue(options.auth.token);
            if (!token) {
                return headers;
            }
            headers["authorization"] = `Bearer ${token}`;
        } else if (options.auth.type === "Basic") {
            const username = getValue(options.auth.username);
            const password = getValue(options.auth.password);
            if (!username || !password) {
                return headers;
            }
            headers["authorization"] = `Basic ${btoa(`${username}:${password}`)}`;
        } else if (options.auth.type === "Custom") {
            const value = getValue(options.auth.value);
            if (!value) {
                return headers;
            }
            headers["authorization"] = `${getValue(options.auth.prefix)} ${value}`;
        }
    }
    return headers;
};
// src/utils.ts
var JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(request) {
    const _contentType = request.headers.get("content-type");
    const textTypes = /* @__PURE__ */ new Set([
        "image/svg",
        "application/xml",
        "application/xhtml",
        "application/html"
    ]);
    if (!_contentType) {
        return "json";
    }
    const contentType = _contentType.split(";").shift() || "";
    if (JSON_RE.test(contentType)) {
        return "json";
    }
    if (textTypes.has(contentType) || contentType.startsWith("text/")) {
        return "text";
    }
    return "blob";
}
function isJSONParsable(value) {
    try {
        JSON.parse(value);
        return true;
    } catch (error) {
        return false;
    }
}
function isJSONSerializable(value) {
    if (value === void 0) {
        return false;
    }
    const t = typeof value;
    if (t === "string" || t === "number" || t === "boolean" || t === null) {
        return true;
    }
    if (t !== "object") {
        return false;
    }
    if (Array.isArray(value)) {
        return true;
    }
    if (value.buffer) {
        return false;
    }
    return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
function jsonParse(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return text;
    }
}
function isFunction(value) {
    return typeof value === "function";
}
function getFetch(options) {
    if (options == null ? void 0 : options.customFetchImpl) {
        return options.customFetchImpl;
    }
    if (typeof globalThis !== "undefined" && isFunction(globalThis.fetch)) {
        return globalThis.fetch;
    }
    if (typeof window !== "undefined" && isFunction(window.fetch)) {
        return window.fetch;
    }
    throw new Error("No fetch implementation found");
}
function isPayloadMethod(method) {
    if (!method) {
        return false;
    }
    const payloadMethod = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    return payloadMethod.includes(method.toUpperCase());
}
function isRouteMethod(method) {
    const routeMethod = [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    if (!method) {
        return false;
    }
    return routeMethod.includes(method.toUpperCase());
}
async function getHeaders(opts) {
    const headers = new Headers(opts == null ? void 0 : opts.headers);
    const authHeader = await getAuthHeader(opts);
    for (const [key, value] of Object.entries(authHeader || {})){
        headers.set(key, value);
    }
    if (!headers.has("content-type")) {
        const t = detectContentType(opts == null ? void 0 : opts.body);
        if (t) {
            headers.set("content-type", t);
        }
    }
    return headers;
}
function getURL(url, options) {
    if (url.startsWith("@")) {
        const m = url.toString().split("@")[1].split("/")[0];
        if (methods.includes(m)) {
            url = url.replace(`@${m}/`, "/");
        }
    }
    let _url;
    try {
        if (url.startsWith("http")) {
            _url = url;
        } else {
            let baseURL = options == null ? void 0 : options.baseURL;
            if (baseURL && !(baseURL == null ? void 0 : baseURL.endsWith("/"))) {
                baseURL = baseURL + "/";
            }
            if (url.startsWith("/")) {
                _url = new URL(url.substring(1), baseURL);
            } else {
                _url = new URL(url, options == null ? void 0 : options.baseURL);
            }
        }
    } catch (e) {
        if (e instanceof TypeError) {
            if (!(options == null ? void 0 : options.baseURL)) {
                throw TypeError(`Invalid URL ${url}. Are you passing in a relative url but not setting the baseURL?`);
            }
            throw TypeError(`Invalid URL ${url}. Please validate that you are passing the correct input.`);
        }
        throw e;
    }
    if (options == null ? void 0 : options.params) {
        if (Array.isArray(options == null ? void 0 : options.params)) {
            const params = (options == null ? void 0 : options.params) ? Array.isArray(options.params) ? `/${options.params.join("/")}` : `/${Object.values(options.params).join("/")}` : "";
            _url = _url.toString().split("/:")[0];
            _url = `${_url.toString()}${params}`;
        } else {
            for (const [key, value] of Object.entries(options == null ? void 0 : options.params)){
                _url = _url.toString().replace(`:${key}`, String(value));
            }
        }
    }
    const __url = new URL(_url);
    const queryParams = options == null ? void 0 : options.query;
    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)){
            __url.searchParams.append(key, String(value));
        }
    }
    return __url;
}
function detectContentType(body) {
    if (isJSONSerializable(body)) {
        return "application/json";
    }
    return null;
}
function getBody(options) {
    if (!(options == null ? void 0 : options.body)) {
        return null;
    }
    const headers = new Headers(options == null ? void 0 : options.headers);
    if (isJSONSerializable(options.body) && !headers.has("content-type")) {
        for (const [key, value] of Object.entries(options == null ? void 0 : options.body)){
            if (value instanceof Date) {
                options.body[key] = value.toISOString();
            }
        }
        return JSON.stringify(options.body);
    }
    return options.body;
}
function getMethod(url, options) {
    var _a;
    if (options == null ? void 0 : options.method) {
        return options.method.toUpperCase();
    }
    if (url.startsWith("@")) {
        const pMethod = (_a = url.split("@")[1]) == null ? void 0 : _a.split("/")[0];
        if (!methods.includes(pMethod)) {
            return (options == null ? void 0 : options.body) ? "POST" : "GET";
        }
        return pMethod.toUpperCase();
    }
    return (options == null ? void 0 : options.body) ? "POST" : "GET";
}
function getTimeout(options, controller) {
    let abortTimeout;
    if (!(options == null ? void 0 : options.signal) && (options == null ? void 0 : options.timeout)) {
        abortTimeout = setTimeout(()=>controller == null ? void 0 : controller.abort(), options == null ? void 0 : options.timeout);
    }
    return {
        abortTimeout,
        clearTimeout: ()=>{
            if (abortTimeout) {
                clearTimeout(abortTimeout);
            }
        }
    };
}
function bodyParser(data, responseType) {
    if (responseType === "json") {
        return JSON.parse(data);
    }
    return data;
}
var ValidationError = class _ValidationError extends Error {
    constructor(issues, message){
        super(message || JSON.stringify(issues, null, 2));
        this.issues = issues;
        Object.setPrototypeOf(this, _ValidationError.prototype);
    }
};
async function parseStandardSchema(schema, input) {
    let result = await schema["~standard"].validate(input);
    if (result.issues) {
        throw new ValidationError(result.issues);
    }
    return result.value;
}
// src/create-fetch/schema.ts
var methods = [
    "get",
    "post",
    "put",
    "patch",
    "delete"
];
var createSchema = (schema, config)=>{
    return {
        schema,
        config
    };
};
// src/create-fetch/index.ts
var applySchemaPlugin = (config)=>({
        id: "apply-schema",
        name: "Apply Schema",
        version: "1.0.0",
        async init (url, options) {
            var _a, _b, _c, _d;
            const schema = ((_b = (_a = config.plugins) == null ? void 0 : _a.find((plugin)=>{
                var _a2;
                return ((_a2 = plugin.schema) == null ? void 0 : _a2.config) ? url.startsWith(plugin.schema.config.baseURL || "") || url.startsWith(plugin.schema.config.prefix || "") : false;
            })) == null ? void 0 : _b.schema) || config.schema;
            if (schema) {
                let urlKey = url;
                if ((_c = schema.config) == null ? void 0 : _c.prefix) {
                    if (urlKey.startsWith(schema.config.prefix)) {
                        urlKey = urlKey.replace(schema.config.prefix, "");
                        if (schema.config.baseURL) {
                            url = url.replace(schema.config.prefix, schema.config.baseURL);
                        }
                    }
                }
                if ((_d = schema.config) == null ? void 0 : _d.baseURL) {
                    if (urlKey.startsWith(schema.config.baseURL)) {
                        urlKey = urlKey.replace(schema.config.baseURL, "");
                    }
                }
                const keySchema = schema.schema[urlKey];
                if (keySchema) {
                    let opts = __spreadProps(__spreadValues({}, options), {
                        method: keySchema.method,
                        output: keySchema.output
                    });
                    if (!(options == null ? void 0 : options.disableValidation)) {
                        opts = __spreadProps(__spreadValues({}, opts), {
                            body: keySchema.input ? await parseStandardSchema(keySchema.input, options == null ? void 0 : options.body) : options == null ? void 0 : options.body,
                            params: keySchema.params ? await parseStandardSchema(keySchema.params, options == null ? void 0 : options.params) : options == null ? void 0 : options.params,
                            query: keySchema.query ? await parseStandardSchema(keySchema.query, options == null ? void 0 : options.query) : options == null ? void 0 : options.query
                        });
                    }
                    return {
                        url,
                        options: opts
                    };
                }
            }
            return {
                url,
                options
            };
        }
    });
var createFetch = (config)=>{
    async function $fetch(url, options) {
        const opts = __spreadProps(__spreadValues(__spreadValues({}, config), options), {
            plugins: [
                ...(config == null ? void 0 : config.plugins) || [],
                applySchemaPlugin(config || {})
            ]
        });
        if (config == null ? void 0 : config.catchAllError) {
            try {
                return await betterFetch(url, opts);
            } catch (error) {
                return {
                    data: null,
                    error: {
                        status: 500,
                        statusText: "Fetch Error",
                        message: "Fetch related error. Captured by catchAllError option. See error property for more details.",
                        error
                    }
                };
            }
        }
        return await betterFetch(url, opts);
    }
    return $fetch;
};
// src/url.ts
function getURL2(url, option) {
    let { baseURL, params, query } = option || {
        query: {},
        params: {},
        baseURL: ""
    };
    let basePath = url.startsWith("http") ? url.split("/").slice(0, 3).join("/") : baseURL || "";
    if (url.startsWith("@")) {
        const m = url.toString().split("@")[1].split("/")[0];
        if (methods.includes(m)) {
            url = url.replace(`@${m}/`, "/");
        }
    }
    if (!basePath.endsWith("/")) basePath += "/";
    let [path, urlQuery] = url.replace(basePath, "").split("?");
    const queryParams = new URLSearchParams(urlQuery);
    for (const [key, value] of Object.entries(query || {})){
        if (value == null) continue;
        queryParams.set(key, String(value));
    }
    if (params) {
        if (Array.isArray(params)) {
            const paramPaths = path.split("/").filter((p)=>p.startsWith(":"));
            for (const [index, key] of paramPaths.entries()){
                const value = params[index];
                path = path.replace(key, value);
            }
        } else {
            for (const [key, value] of Object.entries(params)){
                path = path.replace(`:${key}`, String(value));
            }
        }
    }
    path = path.split("/").map(encodeURIComponent).join("/");
    if (path.startsWith("/")) path = path.slice(1);
    let queryParamString = queryParams.toString();
    queryParamString = queryParamString.length > 0 ? `?${queryParamString}`.replace(/\+/g, "%20") : "";
    if (!basePath.startsWith("http")) {
        return `${basePath}${path}${queryParamString}`;
    }
    const _url = new URL(`${path}${queryParamString}`, basePath);
    return _url;
}
// src/fetch.ts
var betterFetch = async (url, options)=>{
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { hooks, url: __url, options: opts } = await initializePlugins(url, options);
    const fetch = getFetch(opts);
    const controller = new AbortController();
    const signal = (_a = opts.signal) != null ? _a : controller.signal;
    const _url = getURL2(__url, opts);
    const body = getBody(opts);
    const headers = await getHeaders(opts);
    const method = getMethod(__url, opts);
    let context = __spreadProps(__spreadValues({}, opts), {
        url: _url,
        headers,
        body,
        method,
        signal
    });
    for (const onRequest of hooks.onRequest){
        if (onRequest) {
            const res = await onRequest(context);
            if (res instanceof Object) {
                context = res;
            }
        }
    }
    if ("pipeTo" in context && typeof context.pipeTo === "function" || typeof ((_b = options == null ? void 0 : options.body) == null ? void 0 : _b.pipe) === "function") {
        if (!("duplex" in context)) {
            context.duplex = "half";
        }
    }
    const { clearTimeout: clearTimeout2 } = getTimeout(opts, controller);
    let response = await fetch(context.url, context);
    clearTimeout2();
    const responseContext = {
        response,
        request: context
    };
    for (const onResponse of hooks.onResponse){
        if (onResponse) {
            const r = await onResponse(__spreadProps(__spreadValues({}, responseContext), {
                response: ((_c = options == null ? void 0 : options.hookOptions) == null ? void 0 : _c.cloneResponse) ? response.clone() : response
            }));
            if (r instanceof Response) {
                response = r;
            } else if (r instanceof Object) {
                response = r.response;
            }
        }
    }
    if (response.ok) {
        const hasBody = context.method !== "HEAD";
        if (!hasBody) {
            return {
                data: "",
                error: null
            };
        }
        const responseType = detectResponseType(response);
        const successContext = {
            data: "",
            response,
            request: context
        };
        if (responseType === "json" || responseType === "text") {
            const text = await response.text();
            const parser2 = (_d = context.jsonParser) != null ? _d : jsonParse;
            const data = await parser2(text);
            successContext.data = data;
        } else {
            successContext.data = await response[responseType]();
        }
        if (context == null ? void 0 : context.output) {
            if (context.output && !context.disableValidation) {
                successContext.data = await parseStandardSchema(context.output, successContext.data);
            }
        }
        for (const onSuccess of hooks.onSuccess){
            if (onSuccess) {
                await onSuccess(__spreadProps(__spreadValues({}, successContext), {
                    response: ((_e = options == null ? void 0 : options.hookOptions) == null ? void 0 : _e.cloneResponse) ? response.clone() : response
                }));
            }
        }
        if (options == null ? void 0 : options.throw) {
            return successContext.data;
        }
        return {
            data: successContext.data,
            error: null
        };
    }
    const parser = (_f = options == null ? void 0 : options.jsonParser) != null ? _f : jsonParse;
    const responseText = await response.text();
    const isJSONResponse = isJSONParsable(responseText);
    const errorObject = isJSONResponse ? await parser(responseText) : null;
    const errorContext = {
        response,
        responseText,
        request: context,
        error: __spreadProps(__spreadValues({}, errorObject), {
            status: response.status,
            statusText: response.statusText
        })
    };
    for (const onError of hooks.onError){
        if (onError) {
            await onError(__spreadProps(__spreadValues({}, errorContext), {
                response: ((_g = options == null ? void 0 : options.hookOptions) == null ? void 0 : _g.cloneResponse) ? response.clone() : response
            }));
        }
    }
    if (options == null ? void 0 : options.retry) {
        const retryStrategy = createRetryStrategy(options.retry);
        const _retryAttempt = (_h = options.retryAttempt) != null ? _h : 0;
        if (await retryStrategy.shouldAttemptRetry(_retryAttempt, response)) {
            for (const onRetry of hooks.onRetry){
                if (onRetry) {
                    await onRetry(responseContext);
                }
            }
            const delay = retryStrategy.getDelay(_retryAttempt);
            await new Promise((resolve)=>setTimeout(resolve, delay));
            return await betterFetch(url, __spreadProps(__spreadValues({}, options), {
                retryAttempt: _retryAttempt + 1
            }));
        }
    }
    if (options == null ? void 0 : options.throw) {
        throw new BetterFetchError(response.status, response.statusText, isJSONResponse ? errorObject : responseText);
    }
    return {
        data: null,
        error: __spreadProps(__spreadValues({}, errorObject), {
            status: response.status,
            statusText: response.statusText
        })
    };
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/saas/node_modules/@radix-ui/react-collection/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCollection",
    ()=>createCollection,
    "unstable_createCollection",
    ()=>createCollection2
]);
// src/collection-legacy.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope, children } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const itemMap = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            scope,
            itemMap,
            collectionRef: ref,
            children
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(COLLECTION_SLOT_NAME);
    const CollectionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionSlotImpl, {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(ITEM_SLOT_NAME);
    const CollectionItemSlot = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
            "createCollection.CollectionItemSlot.useEffect": ()=>{
                context.itemMap.set(ref, {
                    ref,
                    ...itemData
                });
                return ({
                    "createCollection.CollectionItemSlot.useEffect": ()=>void context.itemMap.delete(ref)
                })["createCollection.CollectionItemSlot.useEffect"];
            }
        }["createCollection.CollectionItemSlot.useEffect"]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionItemSlotImpl, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
            "createCollection.useCollection.useCallback[getItems]": ()=>{
                const collectionNode = context.collectionRef.current;
                if (!collectionNode) return [];
                const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
                const items = Array.from(context.itemMap.values());
                const orderedItems = items.sort({
                    "createCollection.useCollection.useCallback[getItems].orderedItems": (a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
                }["createCollection.useCollection.useCallback[getItems].orderedItems"]);
                return orderedItems;
            }
        }["createCollection.useCollection.useCallback[getItems]"], [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
;
;
;
;
// src/ordered-dictionary.ts
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = class _OrderedDict extends Map {
    #keys;
    constructor(entries){
        super(entries);
        this.#keys = [
            ...super.keys()
        ];
        __instanciated.set(this, true);
    }
    set(key, value) {
        if (__instanciated.get(this)) {
            if (this.has(key)) {
                this.#keys[this.#keys.indexOf(key)] = key;
            } else {
                this.#keys.push(key);
            }
        }
        super.set(key, value);
        return this;
    }
    insert(index, key, value) {
        const has = this.has(key);
        const length = this.#keys.length;
        const relativeIndex = toSafeInteger(index);
        let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
        const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
        if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
            this.set(key, value);
            return this;
        }
        const size = this.size + (has ? 0 : 1);
        if (relativeIndex < 0) {
            actualIndex++;
        }
        const keys = [
            ...this.#keys
        ];
        let nextValue;
        let shouldSkip = false;
        for(let i = actualIndex; i < size; i++){
            if (actualIndex === i) {
                let nextKey = keys[i];
                if (keys[i] === key) {
                    nextKey = keys[i + 1];
                }
                if (has) {
                    this.delete(key);
                }
                nextValue = this.get(nextKey);
                this.set(key, value);
            } else {
                if (!shouldSkip && keys[i - 1] === key) {
                    shouldSkip = true;
                }
                const currentKey = keys[shouldSkip ? i : i - 1];
                const currentValue = nextValue;
                nextValue = this.get(currentKey);
                this.delete(currentKey);
                this.set(currentKey, currentValue);
            }
        }
        return this;
    }
    with(index, key, value) {
        const copy = new _OrderedDict(this);
        copy.insert(index, key, value);
        return copy;
    }
    before(key) {
        const index = this.#keys.indexOf(key) - 1;
        if (index < 0) {
            return void 0;
        }
        return this.entryAt(index);
    }
    /**
   * Sets a new key-value pair at the position before the given key.
   */ setBefore(key, newKey, value) {
        const index = this.#keys.indexOf(key);
        if (index === -1) {
            return this;
        }
        return this.insert(index, newKey, value);
    }
    after(key) {
        let index = this.#keys.indexOf(key);
        index = index === -1 || index === this.size - 1 ? -1 : index + 1;
        if (index === -1) {
            return void 0;
        }
        return this.entryAt(index);
    }
    /**
   * Sets a new key-value pair at the position after the given key.
   */ setAfter(key, newKey, value) {
        const index = this.#keys.indexOf(key);
        if (index === -1) {
            return this;
        }
        return this.insert(index + 1, newKey, value);
    }
    first() {
        return this.entryAt(0);
    }
    last() {
        return this.entryAt(-1);
    }
    clear() {
        this.#keys = [];
        return super.clear();
    }
    delete(key) {
        const deleted = super.delete(key);
        if (deleted) {
            this.#keys.splice(this.#keys.indexOf(key), 1);
        }
        return deleted;
    }
    deleteAt(index) {
        const key = this.keyAt(index);
        if (key !== void 0) {
            return this.delete(key);
        }
        return false;
    }
    at(index) {
        const key = at(this.#keys, index);
        if (key !== void 0) {
            return this.get(key);
        }
    }
    entryAt(index) {
        const key = at(this.#keys, index);
        if (key !== void 0) {
            return [
                key,
                this.get(key)
            ];
        }
    }
    indexOf(key) {
        return this.#keys.indexOf(key);
    }
    keyAt(index) {
        return at(this.#keys, index);
    }
    from(key, offset) {
        const index = this.indexOf(key);
        if (index === -1) {
            return void 0;
        }
        let dest = index + offset;
        if (dest < 0) dest = 0;
        if (dest >= this.size) dest = this.size - 1;
        return this.at(dest);
    }
    keyFrom(key, offset) {
        const index = this.indexOf(key);
        if (index === -1) {
            return void 0;
        }
        let dest = index + offset;
        if (dest < 0) dest = 0;
        if (dest >= this.size) dest = this.size - 1;
        return this.keyAt(dest);
    }
    find(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return entry;
            }
            index++;
        }
        return void 0;
    }
    findIndex(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return index;
            }
            index++;
        }
        return -1;
    }
    filter(predicate, thisArg) {
        const entries = [];
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                entries.push(entry);
            }
            index++;
        }
        return new _OrderedDict(entries);
    }
    map(callbackfn, thisArg) {
        const entries = [];
        let index = 0;
        for (const entry of this){
            entries.push([
                entry[0],
                Reflect.apply(callbackfn, thisArg, [
                    entry,
                    index,
                    this
                ])
            ]);
            index++;
        }
        return new _OrderedDict(entries);
    }
    reduce(...args) {
        const [callbackfn, initialValue] = args;
        let index = 0;
        let accumulator = initialValue ?? this.at(0);
        for (const entry of this){
            if (index === 0 && args.length === 1) {
                accumulator = entry;
            } else {
                accumulator = Reflect.apply(callbackfn, this, [
                    accumulator,
                    entry,
                    index,
                    this
                ]);
            }
            index++;
        }
        return accumulator;
    }
    reduceRight(...args) {
        const [callbackfn, initialValue] = args;
        let accumulator = initialValue ?? this.at(-1);
        for(let index = this.size - 1; index >= 0; index--){
            const entry = this.at(index);
            if (index === this.size - 1 && args.length === 1) {
                accumulator = entry;
            } else {
                accumulator = Reflect.apply(callbackfn, this, [
                    accumulator,
                    entry,
                    index,
                    this
                ]);
            }
        }
        return accumulator;
    }
    toSorted(compareFn) {
        const entries = [
            ...this.entries()
        ].sort(compareFn);
        return new _OrderedDict(entries);
    }
    toReversed() {
        const reversed = new _OrderedDict();
        for(let index = this.size - 1; index >= 0; index--){
            const key = this.keyAt(index);
            const element = this.get(key);
            reversed.set(key, element);
        }
        return reversed;
    }
    toSpliced(...args) {
        const entries = [
            ...this.entries()
        ];
        entries.splice(...args);
        return new _OrderedDict(entries);
    }
    slice(start, end) {
        const result = new _OrderedDict();
        let stop = this.size - 1;
        if (start === void 0) {
            return result;
        }
        if (start < 0) {
            start = start + this.size;
        }
        if (end !== void 0 && end > 0) {
            stop = end - 1;
        }
        for(let index = start; index <= stop; index++){
            const key = this.keyAt(index);
            const element = this.get(key);
            result.set(key, element);
        }
        return result;
    }
    every(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (!Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return false;
            }
            index++;
        }
        return true;
    }
    some(predicate, thisArg) {
        let index = 0;
        for (const entry of this){
            if (Reflect.apply(predicate, thisArg, [
                entry,
                index,
                this
            ])) {
                return true;
            }
            index++;
        }
        return false;
    }
};
function at(array, index) {
    if ("at" in Array.prototype) {
        return Array.prototype.at.call(array, index);
    }
    const actualIndex = toSafeIndex(array, index);
    return actualIndex === -1 ? void 0 : array[actualIndex];
}
function toSafeIndex(array, index) {
    const length = array.length;
    const relativeIndex = toSafeInteger(index);
    const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
    return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
function toSafeInteger(number) {
    return number !== number || number === 0 ? 0 : Math.trunc(number);
}
;
function createCollection2(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(PROVIDER_NAME);
    const [CollectionContextProvider, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionElement: null,
        collectionRef: {
            current: null
        },
        collectionRefObject: {
            current: null
        },
        itemMap: new OrderedDict(),
        setItemMap: ()=>void 0
    });
    const CollectionProvider = ({ state, ...props })=>{
        return state ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            ...props,
            state
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionInit, {
            ...props
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const CollectionInit = (props)=>{
        const state = useInitCollection();
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            ...props,
            state
        });
    };
    CollectionInit.displayName = PROVIDER_NAME + "Init";
    const CollectionProviderImpl = (props)=>{
        const { scope, children, state } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const [collectionElement, setCollectionElement] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
        const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, setCollectionElement);
        const [itemMap, setItemMap] = state;
        __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
            "createCollection2.CollectionProviderImpl.useEffect": ()=>{
                if (!collectionElement) return;
                const observer = getChildListObserver({
                    "createCollection2.CollectionProviderImpl.useEffect.observer": ()=>{}
                }["createCollection2.CollectionProviderImpl.useEffect.observer"]);
                observer.observe(collectionElement, {
                    childList: true,
                    subtree: true
                });
                return ({
                    "createCollection2.CollectionProviderImpl.useEffect": ()=>{
                        observer.disconnect();
                    }
                })["createCollection2.CollectionProviderImpl.useEffect"];
            }
        }["createCollection2.CollectionProviderImpl.useEffect"], [
            collectionElement
        ]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionContextProvider, {
            scope,
            itemMap,
            setItemMap,
            collectionRef: composeRefs,
            collectionRefObject: ref,
            collectionElement,
            children
        });
    };
    CollectionProviderImpl.displayName = PROVIDER_NAME + "Impl";
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(COLLECTION_SLOT_NAME);
    const CollectionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionSlotImpl, {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlotImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(ITEM_SLOT_NAME);
    const CollectionItemSlot = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const [element, setElement] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, setElement);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        const { setItemMap } = context;
        const itemDataRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(itemData);
        if (!shallowEqual(itemDataRef.current, itemData)) {
            itemDataRef.current = itemData;
        }
        const memoizedItemData = itemDataRef.current;
        __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
            "createCollection2.CollectionItemSlot.useEffect": ()=>{
                const itemData2 = memoizedItemData;
                setItemMap({
                    "createCollection2.CollectionItemSlot.useEffect": (map)=>{
                        if (!element) {
                            return map;
                        }
                        if (!map.has(element)) {
                            map.set(element, {
                                ...itemData2,
                                element
                            });
                            return map.toSorted(sortByDocumentPosition);
                        }
                        return map.set(element, {
                            ...itemData2,
                            element
                        }).toSorted(sortByDocumentPosition);
                    }
                }["createCollection2.CollectionItemSlot.useEffect"]);
                return ({
                    "createCollection2.CollectionItemSlot.useEffect": ()=>{
                        setItemMap({
                            "createCollection2.CollectionItemSlot.useEffect": (map)=>{
                                if (!element || !map.has(element)) {
                                    return map;
                                }
                                map.delete(element);
                                return new OrderedDict(map);
                            }
                        }["createCollection2.CollectionItemSlot.useEffect"]);
                    }
                })["createCollection2.CollectionItemSlot.useEffect"];
            }
        }["createCollection2.CollectionItemSlot.useEffect"], [
            element,
            memoizedItemData,
            setItemMap
        ]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionItemSlotImpl, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useInitCollection() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(new OrderedDict());
    }
    function useCollection(scope) {
        const { itemMap } = useCollectionContext(name + "CollectionConsumer", scope);
        return itemMap;
    }
    const functions = {
        createCollectionScope,
        useCollection,
        useInitCollection
    };
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        functions
    ];
}
function shallowEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== "object" || typeof b !== "object") return false;
    if (a == null || b == null) return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA){
        if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
        if (a[key] !== b[key]) return false;
    }
    return true;
}
function isElementPreceding(a, b) {
    return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
function sortByDocumentPosition(a, b) {
    return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
function getChildListObserver(callback) {
    const observer = new MutationObserver((mutationsList)=>{
        for (const mutation of mutationsList){
            if (mutation.type === "childList") {
                callback();
                return;
            }
        }
    });
    return observer;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-direction/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DirectionProvider",
    ()=>DirectionProvider,
    "Provider",
    ()=>Provider,
    "useDirection",
    ()=>useDirection
]);
// packages/react/direction/src/direction.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
var DirectionContext = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0);
var DirectionProvider = (props)=>{
    const { dir, children } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DirectionContext.Provider, {
        value: dir,
        children
    });
};
function useDirection(localDir) {
    const globalDir = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DirectionContext);
    return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-roving-focus/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Item",
    ()=>Item,
    "Root",
    ()=>Root,
    "RovingFocusGroup",
    ()=>RovingFocusGroup,
    "RovingFocusGroupItem",
    ()=>RovingFocusGroupItem,
    "createRovingFocusGroupScope",
    ()=>createRovingFocusGroupScope
]);
// src/roving-focus-group.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-collection/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-roving-focus/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-direction/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCollection"])(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(GROUP_NAME, [
    createCollectionScope
]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeRovingFocusGroup,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
            scope: props.__scopeRovingFocusGroup,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RovingFocusGroupImpl, {
                ...props,
                ref: forwardedRef
            })
        })
    });
});
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const [currentTabStopId, setCurrentTabStopId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId ?? null,
        onChange: onCurrentTabStopIdChange,
        caller: GROUP_NAME
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const handleEntryFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onEntryFocus);
    const getItems = useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const [focusableItemsCount, setFocusableItemsCount] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RovingFocusGroupImpl.useEffect": ()=>{
            const node = ref.current;
            if (node) {
                node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
                return ({
                    "RovingFocusGroupImpl.useEffect": ()=>node.removeEventListener(ENTRY_FOCUS, handleEntryFocus)
                })["RovingFocusGroupImpl.useEffect"];
            }
        }
    }["RovingFocusGroupImpl.useEffect"], [
        handleEntryFocus
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "RovingFocusGroupImpl.useCallback": (tabStopId)=>setCurrentTabStopId(tabStopId)
        }["RovingFocusGroupImpl.useCallback"], [
            setCurrentTabStopId
        ]),
        onItemShiftTab: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "RovingFocusGroupImpl.useCallback": ()=>setIsTabbingBackOut(true)
        }["RovingFocusGroupImpl.useCallback"], []),
        onFocusableItemAdd: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "RovingFocusGroupImpl.useCallback": ()=>setFocusableItemsCount({
                    "RovingFocusGroupImpl.useCallback": (prevCount)=>prevCount + 1
                }["RovingFocusGroupImpl.useCallback"])
        }["RovingFocusGroupImpl.useCallback"], []),
        onFocusableItemRemove: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "RovingFocusGroupImpl.useCallback": ()=>setFocusableItemsCount({
                    "RovingFocusGroupImpl.useCallback": (prevCount)=>prevCount - 1
                }["RovingFocusGroupImpl.useCallback"])
        }["RovingFocusGroupImpl.useCallback"], []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation,
            ...groupProps,
            ref: composedRefs,
            style: {
                outline: "none",
                ...props.style
            },
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, ()=>{
                isClickFocusRef.current = true;
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, (event)=>{
                const isKeyboardFocus = !isClickFocusRef.current;
                if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                    const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
                    event.currentTarget.dispatchEvent(entryFocusEvent);
                    if (!entryFocusEvent.defaultPrevented) {
                        const items = getItems().filter((item)=>item.focusable);
                        const activeItem = items.find((item)=>item.active);
                        const currentItem = items.find((item)=>item.id === currentTabStopId);
                        const candidateItems = [
                            activeItem,
                            currentItem,
                            ...items
                        ].filter(Boolean);
                        const candidateNodes = candidateItems.map((item)=>item.ref.current);
                        focusFirst(candidateNodes, preventScrollOnEntryFocus);
                    }
                }
                isClickFocusRef.current = false;
            }),
            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, ()=>setIsTabbingBackOut(false))
        })
    });
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, children, ...itemProps } = props;
    const autoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "RovingFocusGroupItem.useEffect": ()=>{
            if (focusable) {
                onFocusableItemAdd();
                return ({
                    "RovingFocusGroupItem.useEffect": ()=>onFocusableItemRemove()
                })["RovingFocusGroupItem.useEffect"];
            }
        }
    }["RovingFocusGroupItem.useEffect"], [
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onMouseDown, (event)=>{
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id);
            }),
            onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>context.onItemFocus(id)),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                if (event.key === "Tab" && event.shiftKey) {
                    context.onItemShiftTab();
                    return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                    event.preventDefault();
                    const items = getItems().filter((item)=>item.focusable);
                    let candidateNodes = items.map((item)=>item.ref.current);
                    if (focusIntent === "last") candidateNodes.reverse();
                    else if (focusIntent === "prev" || focusIntent === "next") {
                        if (focusIntent === "prev") candidateNodes.reverse();
                        const currentIndex = candidateNodes.indexOf(event.currentTarget);
                        candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                    }
                    setTimeout(()=>focusFirst(candidateNodes));
                }
            }),
            children: typeof children === "function" ? children({
                isCurrentTabStop,
                hasTabStop: currentTabStopId != null
            }) : children
        })
    });
});
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && [
        "ArrowLeft",
        "ArrowRight"
    ].includes(key)) return void 0;
    if (orientation === "horizontal" && [
        "ArrowUp",
        "ArrowDown"
    ].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus({
            preventScroll
        });
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-menu/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Anchor",
    ()=>Anchor2,
    "Arrow",
    ()=>Arrow2,
    "CheckboxItem",
    ()=>CheckboxItem,
    "Content",
    ()=>Content2,
    "Group",
    ()=>Group,
    "Item",
    ()=>Item2,
    "ItemIndicator",
    ()=>ItemIndicator,
    "Label",
    ()=>Label,
    "Menu",
    ()=>Menu,
    "MenuAnchor",
    ()=>MenuAnchor,
    "MenuArrow",
    ()=>MenuArrow,
    "MenuCheckboxItem",
    ()=>MenuCheckboxItem,
    "MenuContent",
    ()=>MenuContent,
    "MenuGroup",
    ()=>MenuGroup,
    "MenuItem",
    ()=>MenuItem,
    "MenuItemIndicator",
    ()=>MenuItemIndicator,
    "MenuLabel",
    ()=>MenuLabel,
    "MenuPortal",
    ()=>MenuPortal,
    "MenuRadioGroup",
    ()=>MenuRadioGroup,
    "MenuRadioItem",
    ()=>MenuRadioItem,
    "MenuSeparator",
    ()=>MenuSeparator,
    "MenuSub",
    ()=>MenuSub,
    "MenuSubContent",
    ()=>MenuSubContent,
    "MenuSubTrigger",
    ()=>MenuSubTrigger,
    "Portal",
    ()=>Portal,
    "RadioGroup",
    ()=>RadioGroup,
    "RadioItem",
    ()=>RadioItem,
    "Root",
    ()=>Root3,
    "Separator",
    ()=>Separator,
    "Sub",
    ()=>Sub,
    "SubContent",
    ()=>SubContent,
    "SubTrigger",
    ()=>SubTrigger,
    "createMenuScope",
    ()=>createMenuScope
]);
// src/menu.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-collection/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-direction/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-popper/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-menu/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-roving-focus/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/saas/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var SELECTION_KEYS = [
    "Enter",
    " "
];
var FIRST_KEYS = [
    "ArrowDown",
    "PageUp",
    "Home"
];
var LAST_KEYS = [
    "ArrowUp",
    "PageDown",
    "End"
];
var FIRST_LAST_KEYS = [
    ...FIRST_KEYS,
    ...LAST_KEYS
];
var SUB_OPEN_KEYS = {
    ltr: [
        ...SELECTION_KEYS,
        "ArrowRight"
    ],
    rtl: [
        ...SELECTION_KEYS,
        "ArrowLeft"
    ]
};
var SUB_CLOSE_KEYS = {
    ltr: [
        "ArrowLeft"
    ],
    rtl: [
        "ArrowRight"
    ]
};
var MENU_NAME = "Menu";
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCollection"])(MENU_NAME);
var [createMenuContext, createMenuScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(MENU_NAME, [
    createCollectionScope,
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopperScope"],
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopperScope"])();
var useRovingFocusGroupScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRovingFocusGroupScope"])();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props)=>{
    const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
    const popperScope = usePopperScope(__scopeMenu);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const isUsingKeyboardRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onOpenChange);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Menu.useEffect": ()=>{
            const handleKeyDown = {
                "Menu.useEffect.handleKeyDown": ()=>{
                    isUsingKeyboardRef.current = true;
                    document.addEventListener("pointerdown", handlePointer, {
                        capture: true,
                        once: true
                    });
                    document.addEventListener("pointermove", handlePointer, {
                        capture: true,
                        once: true
                    });
                }
            }["Menu.useEffect.handleKeyDown"];
            const handlePointer = {
                "Menu.useEffect.handlePointer": ()=>isUsingKeyboardRef.current = false
            }["Menu.useEffect.handlePointer"];
            document.addEventListener("keydown", handleKeyDown, {
                capture: true
            });
            return ({
                "Menu.useEffect": ()=>{
                    document.removeEventListener("keydown", handleKeyDown, {
                        capture: true
                    });
                    document.removeEventListener("pointerdown", handlePointer, {
                        capture: true
                    });
                    document.removeEventListener("pointermove", handlePointer, {
                        capture: true
                    });
                }
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuProvider, {
            scope: __scopeMenu,
            open,
            onOpenChange: handleOpenChange,
            content,
            onContentChange: setContent,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuRootProvider, {
                scope: __scopeMenu,
                onClose: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
                    "Menu.useCallback": ()=>handleOpenChange(false)
                }["Menu.useCallback"], [
                    handleOpenChange
                ]),
                isUsingKeyboardRef,
                dir: direction,
                modal,
                children
            })
        })
    });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor";
var MenuAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        ...popperScope,
        ...anchorProps,
        ref: forwardedRef
    });
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME, {
    forceMount: void 0
});
var MenuPortal = (props)=>{
    const { __scopeMenu, forceMount, children, container } = props;
    const context = useMenuContext(PORTAL_NAME, __scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopeMenu,
        forceMount,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                asChild: true,
                container,
                children
            })
        })
    });
};
MenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME);
var MenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeMenu,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeMenu,
                children: rootContext.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuRootContentModal, {
                    ...contentProps,
                    ref: forwardedRef
                }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuRootContentNonModal, {
                    ...contentProps,
                    ref: forwardedRef
                })
            })
        })
    });
});
var MenuRootContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "MenuRootContentModal.useEffect": ()=>{
            const content = ref.current;
            if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideOthers"])(content);
        }
    }["MenuRootContentModal.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault(), {
            checkForDefaultPrevented: false
        }),
        onDismiss: ()=>context.onOpenChange(false)
    });
});
var MenuRootContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        onDismiss: ()=>context.onOpenChange(false)
    });
});
var Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])("MenuContent.ScrollLock");
var MenuContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef, context.onContentChange);
    const timerRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const searchRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("");
    const pointerGraceTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const pointerGraceIntentRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const pointerDirRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("right");
    const lastPointerXRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const ScrollLockWrapper = disableOutsideScroll ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"] : __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
    const scrollLockWrapperProps = disableOutsideScroll ? {
        as: Slot,
        allowPinchZoom: true
    } : void 0;
    const handleTypeaheadSearch = (key)=>{
        const search = searchRef.current + key;
        const items = getItems().filter((item)=>!item.disabled);
        const currentItem = document.activeElement;
        const currentMatch = items.find((item)=>item.ref.current === currentItem)?.textValue;
        const values = items.map((item)=>item.textValue);
        const nextMatch = getNextMatch(values, search, currentMatch);
        const newItem = items.find((item)=>item.textValue === nextMatch)?.ref.current;
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current);
            if (value !== "") timerRef.current = window.setTimeout(()=>updateSearch(""), 1e3);
        })(search);
        if (newItem) {
            setTimeout(()=>newItem.focus());
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "MenuContentImpl.useEffect": ()=>{
            return ({
                "MenuContentImpl.useEffect": ()=>window.clearTimeout(timerRef.current)
            })["MenuContentImpl.useEffect"];
        }
    }["MenuContentImpl.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    const isPointerMovingToSubmenu = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "MenuContentImpl.useCallback[isPointerMovingToSubmenu]": (event)=>{
            const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
            return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
        }
    }["MenuContentImpl.useCallback[isPointerMovingToSubmenu]"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuContentProvider, {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "MenuContentImpl.useCallback": (event)=>{
                if (isPointerMovingToSubmenu(event)) event.preventDefault();
            }
        }["MenuContentImpl.useCallback"], [
            isPointerMovingToSubmenu
        ]),
        onItemLeave: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "MenuContentImpl.useCallback": (event)=>{
                if (isPointerMovingToSubmenu(event)) return;
                contentRef.current?.focus();
                setCurrentItemId(null);
            }
        }["MenuContentImpl.useCallback"], [
            isPointerMovingToSubmenu
        ]),
        onTriggerLeave: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "MenuContentImpl.useCallback": (event)=>{
                if (isPointerMovingToSubmenu(event)) event.preventDefault();
            }
        }["MenuContentImpl.useCallback"], [
            isPointerMovingToSubmenu
        ]),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "MenuContentImpl.useCallback": (intent)=>{
                pointerGraceIntentRef.current = intent;
            }
        }["MenuContentImpl.useCallback"], []),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollLockWrapper, {
            ...scrollLockWrapperProps,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusScope"], {
                asChild: true,
                trapped: trapFocus,
                onMountAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onOpenAutoFocus, (event)=>{
                    event.preventDefault();
                    contentRef.current?.focus({
                        preventScroll: true
                    });
                }),
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DismissableLayer"], {
                    asChild: true,
                    disableOutsidePointerEvents,
                    onEscapeKeyDown,
                    onPointerDownOutside,
                    onFocusOutside,
                    onInteractOutside,
                    onDismiss,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                        asChild: true,
                        ...rovingFocusGroupScope,
                        dir: rootContext.dir,
                        orientation: "vertical",
                        loop,
                        currentTabStopId: currentItemId,
                        onCurrentTabStopIdChange: setCurrentItemId,
                        onEntryFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onEntryFocus, (event)=>{
                            if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
                        }),
                        preventScrollOnEntryFocus: true,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                            role: "menu",
                            "aria-orientation": "vertical",
                            "data-state": getOpenState(context.open),
                            "data-radix-menu-content": "",
                            dir: rootContext.dir,
                            ...popperScope,
                            ...contentProps,
                            ref: composedRefs,
                            style: {
                                outline: "none",
                                ...contentProps.style
                            },
                            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(contentProps.onKeyDown, (event)=>{
                                const target = event.target;
                                const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                                const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                                const isCharacterKey = event.key.length === 1;
                                if (isKeyDownInside) {
                                    if (event.key === "Tab") event.preventDefault();
                                    if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
                                }
                                const content = contentRef.current;
                                if (event.target !== content) return;
                                if (!FIRST_LAST_KEYS.includes(event.key)) return;
                                event.preventDefault();
                                const items = getItems().filter((item)=>!item.disabled);
                                const candidateNodes = items.map((item)=>item.ref.current);
                                if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
                                focusFirst(candidateNodes);
                            }),
                            onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, (event)=>{
                                if (!event.currentTarget.contains(event.target)) {
                                    window.clearTimeout(timerRef.current);
                                    searchRef.current = "";
                                }
                            }),
                            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenMouse((event)=>{
                                const target = event.target;
                                const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                                if (event.currentTarget.contains(target) && pointerXHasChanged) {
                                    const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                                    pointerDirRef.current = newDir;
                                    lastPointerXRef.current = event.clientX;
                                }
                            }))
                        })
                    })
                })
            })
        })
    });
});
MenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "MenuGroup";
var MenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        role: "group",
        ...groupProps,
        ref: forwardedRef
    });
});
MenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "MenuLabel";
var MenuLabel = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...labelProps,
        ref: forwardedRef
    });
});
MenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const rootContext = useMenuRootContext(ITEM_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME, props.__scopeMenu);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const isPointerDownRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const handleSelect = ()=>{
        const menuItem = ref.current;
        if (!disabled && menuItem) {
            const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
                bubbles: true,
                cancelable: true
            });
            menuItem.addEventListener(ITEM_SELECT, (event)=>onSelect?.(event), {
                once: true
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dispatchDiscreteCustomEvent"])(menuItem, itemSelectEvent);
            if (itemSelectEvent.defaultPrevented) {
                isPointerDownRef.current = false;
            } else {
                rootContext.onClose();
            }
        }
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuItemImpl, {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, handleSelect),
        onPointerDown: (event)=>{
            props.onPointerDown?.(event);
            isPointerDownRef.current = true;
        },
        onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, (event)=>{
            if (!isPointerDownRef.current) event.currentTarget?.click();
        }),
        onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
            const isTypingAhead = contentContext.searchRef.current !== "";
            if (disabled || isTypingAhead && event.key === " ") return;
            if (SELECTION_KEYS.includes(event.key)) {
                event.currentTarget.click();
                event.preventDefault();
            }
        })
    });
});
MenuItem.displayName = ITEM_NAME;
var MenuItemImpl = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const [isFocused, setIsFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [textContent, setTextContent] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]("");
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "MenuItemImpl.useEffect": ()=>{
            const menuItem = ref.current;
            if (menuItem) {
                setTextContent((menuItem.textContent ?? "").trim());
            }
        }
    }["MenuItemImpl.useEffect"], [
        itemProps.children
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$roving$2d$focus$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
            asChild: true,
            ...rovingFocusGroupScope,
            focusable: !disabled,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
                role: "menuitem",
                "data-highlighted": isFocused ? "" : void 0,
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                ...itemProps,
                ref: composedRefs,
                onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenMouse((event)=>{
                    if (disabled) {
                        contentContext.onItemLeave(event);
                    } else {
                        contentContext.onItemEnter(event);
                        if (!event.defaultPrevented) {
                            const item = event.currentTarget;
                            item.focus({
                                preventScroll: true
                            });
                        }
                    }
                })),
                onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, whenMouse((event)=>contentContext.onItemLeave(event))),
                onFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocus, ()=>setIsFocused(true)),
                onBlur: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onBlur, ()=>setIsFocused(false))
            })
        })
    });
});
var CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var MenuCheckboxItem = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuItem, {
            role: "menuitemcheckbox",
            "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
            ...checkboxItemProps,
            ref: forwardedRef,
            "data-state": getCheckedState(checked),
            onSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(checkboxItemProps.onSelect, ()=>onCheckedChange?.(isIndeterminate(checked) ? true : !checked), {
                checkForDefaultPrevented: false
            })
        })
    });
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME, {
    value: void 0,
    onValueChange: ()=>{}
});
var MenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onValueChange);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RadioGroupProvider, {
        scope: props.__scopeMenu,
        value,
        onValueChange: handleValueChange,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuGroup, {
            ...groupProps,
            ref: forwardedRef
        })
    });
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuItem, {
            role: "menuitemradio",
            "aria-checked": checked,
            ...radioItemProps,
            ref: forwardedRef,
            "data-state": getCheckedState(checked),
            onSelect: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(radioItemProps.onSelect, ()=>context.onValueChange?.(value), {
                checkForDefaultPrevented: false
            })
        })
    });
});
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME, {
    checked: false
});
var MenuItemIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].span, {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
        })
    });
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME = "MenuSeparator";
var MenuSeparator = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
    });
});
MenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "MenuArrow";
var MenuArrow = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
MenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = (props)=>{
    const { __scopeMenu, children, open = false, onOpenChange } = props;
    const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const [trigger, setTrigger] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const handleOpenChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onOpenChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "MenuSub.useEffect": ()=>{
            if (parentMenuContext.open === false) handleOpenChange(false);
            return ({
                "MenuSub.useEffect": ()=>handleOpenChange(false)
            })["MenuSub.useEffect"];
        }
    }["MenuSub.useEffect"], [
        parentMenuContext.open,
        handleOpenChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuProvider, {
            scope: __scopeMenu,
            open,
            onOpenChange: handleOpenChange,
            content,
            onContentChange: setContent,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuSubProvider, {
                scope: __scopeMenu,
                contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
                triggerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
                trigger,
                onTriggerChange: setTrigger,
                children
            })
        })
    });
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenuSubTrigger";
var MenuSubTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = {
        __scopeMenu: props.__scopeMenu
    };
    const clearOpenTimer = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "MenuSubTrigger.useCallback[clearOpenTimer]": ()=>{
            if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
            openTimerRef.current = null;
        }
    }["MenuSubTrigger.useCallback[clearOpenTimer]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "MenuSubTrigger.useEffect": ()=>clearOpenTimer
    }["MenuSubTrigger.useEffect"], [
        clearOpenTimer
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "MenuSubTrigger.useEffect": ()=>{
            const pointerGraceTimer = pointerGraceTimerRef.current;
            return ({
                "MenuSubTrigger.useEffect": ()=>{
                    window.clearTimeout(pointerGraceTimer);
                    onPointerGraceIntentChange(null);
                }
            })["MenuSubTrigger.useEffect"];
        }
    }["MenuSubTrigger.useEffect"], [
        pointerGraceTimerRef,
        onPointerGraceIntentChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuAnchor, {
        asChild: true,
        ...scope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuItemImpl, {
            id: subContext.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": context.open,
            "aria-controls": subContext.contentId,
            "data-state": getOpenState(context.open),
            ...props,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, subContext.onTriggerChange),
            onClick: (event)=>{
                props.onClick?.(event);
                if (props.disabled || event.defaultPrevented) return;
                event.currentTarget.focus();
                if (!context.open) context.onOpenChange(true);
            },
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, whenMouse((event)=>{
                contentContext.onItemEnter(event);
                if (event.defaultPrevented) return;
                if (!props.disabled && !context.open && !openTimerRef.current) {
                    contentContext.onPointerGraceIntentChange(null);
                    openTimerRef.current = window.setTimeout(()=>{
                        context.onOpenChange(true);
                        clearOpenTimer();
                    }, 100);
                }
            })),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, whenMouse((event)=>{
                clearOpenTimer();
                const contentRect = context.content?.getBoundingClientRect();
                if (contentRect) {
                    const side = context.content?.dataset.side;
                    const rightSide = side === "right";
                    const bleed = rightSide ? -5 : 5;
                    const contentNearEdge = contentRect[rightSide ? "left" : "right"];
                    const contentFarEdge = contentRect[rightSide ? "right" : "left"];
                    contentContext.onPointerGraceIntentChange({
                        area: [
                            // Apply a bleed on clientX to ensure that our exit point is
                            // consistently within polygon bounds
                            {
                                x: event.clientX + bleed,
                                y: event.clientY
                            },
                            {
                                x: contentNearEdge,
                                y: contentRect.top
                            },
                            {
                                x: contentFarEdge,
                                y: contentRect.top
                            },
                            {
                                x: contentFarEdge,
                                y: contentRect.bottom
                            },
                            {
                                x: contentNearEdge,
                                y: contentRect.bottom
                            }
                        ],
                        side
                    });
                    window.clearTimeout(pointerGraceTimerRef.current);
                    pointerGraceTimerRef.current = window.setTimeout(()=>contentContext.onPointerGraceIntentChange(null), 300);
                } else {
                    contentContext.onTriggerLeave(event);
                    if (event.defaultPrevented) return;
                    contentContext.onPointerGraceIntentChange(null);
                }
            })),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                const isTypingAhead = contentContext.searchRef.current !== "";
                if (props.disabled || isTypingAhead && event.key === " ") return;
                if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
                    context.onOpenChange(true);
                    context.content?.focus();
                    event.preventDefault();
                }
            })
        })
    });
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenuSubContent";
var MenuSubContent = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeMenu,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
                scope: props.__scopeMenu,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MenuContentImpl, {
                    id: subContext.contentId,
                    "aria-labelledby": subContext.triggerId,
                    ...subContentProps,
                    ref: composedRefs,
                    align: "start",
                    side: rootContext.dir === "rtl" ? "left" : "right",
                    disableOutsidePointerEvents: false,
                    disableOutsideScroll: false,
                    trapFocus: false,
                    onOpenAutoFocus: (event)=>{
                        if (rootContext.isUsingKeyboardRef.current) ref.current?.focus();
                        event.preventDefault();
                    },
                    onCloseAutoFocus: (event)=>event.preventDefault(),
                    onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>{
                        if (event.target !== subContext.trigger) context.onOpenChange(false);
                    }),
                    onEscapeKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onEscapeKeyDown, (event)=>{
                        rootContext.onClose();
                        event.preventDefault();
                    }),
                    onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                        const isKeyDownInside = event.currentTarget.contains(event.target);
                        const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
                        if (isKeyDownInside && isCloseKey) {
                            context.onOpenChange(false);
                            subContext.trigger?.focus();
                            event.preventDefault();
                        }
                    })
                })
            })
        })
    });
});
MenuSubContent.displayName = SUB_CONTENT_NAME;
function getOpenState(open) {
    return open ? "open" : "closed";
}
function isIndeterminate(checked) {
    return checked === "indeterminate";
}
function getCheckedState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]);
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
    let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
    const excludeCurrentMatch = normalizedSearch.length === 1;
    if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v)=>v !== currentMatch);
    const nextMatch = wrappedValues.find((value)=>value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
    return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
    const { x, y } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const ii = polygon[i];
        const jj = polygon[j];
        const xi = ii.x;
        const yi = ii.y;
        const xj = jj.x;
        const yj = jj.y;
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function isPointerInGraceArea(event, area) {
    if (!area) return false;
    const cursorPos = {
        x: event.clientX,
        y: event.clientY
    };
    return isPointInPolygon(cursorPos, area);
}
function whenMouse(handler) {
    return (event)=>event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root3 = Menu;
var Anchor2 = MenuAnchor;
var Portal = MenuPortal;
var Content2 = MenuContent;
var Group = MenuGroup;
var Label = MenuLabel;
var Item2 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator;
var Arrow2 = MenuArrow;
var Sub = MenuSub;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow2,
    "CheckboxItem",
    ()=>CheckboxItem2,
    "Content",
    ()=>Content2,
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuArrow",
    ()=>DropdownMenuArrow,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuItemIndicator",
    ()=>DropdownMenuItemIndicator,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger,
    "Group",
    ()=>Group2,
    "Item",
    ()=>Item2,
    "ItemIndicator",
    ()=>ItemIndicator2,
    "Label",
    ()=>Label2,
    "Portal",
    ()=>Portal2,
    "RadioGroup",
    ()=>RadioGroup2,
    "RadioItem",
    ()=>RadioItem2,
    "Root",
    ()=>Root2,
    "Separator",
    ()=>Separator2,
    "Sub",
    ()=>Sub2,
    "SubContent",
    ()=>SubContent2,
    "SubTrigger",
    ()=>SubTrigger2,
    "Trigger",
    ()=>Trigger,
    "createDropdownMenuScope",
    ()=>createDropdownMenuScope
]);
// src/dropdown-menu.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-dropdown-menu/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(DROPDOWN_MENU_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMenuScope"]
]);
var useMenuScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMenuScope"])();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props)=>{
    const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: DROPDOWN_MENU_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DropdownMenuProvider, {
        scope: __scopeDropdownMenu,
        triggerId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        triggerRef,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "DropdownMenu.useCallback": ()=>setOpen({
                    "DropdownMenu.useCallback": (prevOpen)=>!prevOpen
                }["DropdownMenu.useCallback"])
        }["DropdownMenu.useCallback"], [
            setOpen
        ]),
        modal,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            ...menuScope,
            open,
            onOpenChange: setOpen,
            dir,
            modal,
            children
        })
    });
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME = "DropdownMenuTrigger";
var DropdownMenuTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...menuScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
            type: "button",
            id: context.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": context.open,
            "aria-controls": context.open ? context.contentId : void 0,
            "data-state": context.open ? "open" : "closed",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            ...triggerProps,
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, context.triggerRef),
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, (event)=>{
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                    context.onOpenToggle();
                    if (!context.open) event.preventDefault();
                }
            }),
            onKeyDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
                if (disabled) return;
                if ([
                    "Enter",
                    " "
                ].includes(event.key)) context.onOpenToggle();
                if (event.key === "ArrowDown") context.onOpenChange(true);
                if ([
                    "Enter",
                    " ",
                    "ArrowDown"
                ].includes(event.key)) event.preventDefault();
            })
        })
    });
});
DropdownMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DropdownMenuPortal";
var DropdownMenuPortal = (props)=>{
    const { __scopeDropdownMenu, ...portalProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        ...menuScope,
        ...portalProps
    });
};
DropdownMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "DropdownMenuContent";
var DropdownMenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            hasInteractedOutsideRef.current = false;
            event.preventDefault();
        }),
        onInteractOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onInteractOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
            ...props.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
DropdownMenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "DropdownMenuGroup";
var DropdownMenuGroup = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        ...menuScope,
        ...groupProps,
        ref: forwardedRef
    });
});
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel";
var DropdownMenuLabel = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ...menuScope,
        ...labelProps,
        ref: forwardedRef
    });
});
DropdownMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "DropdownMenuItem";
var DropdownMenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ...menuScope,
        ...itemProps,
        ref: forwardedRef
    });
});
DropdownMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...checkboxItemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        ...menuScope,
        ...checkboxItemProps,
        ref: forwardedRef
    });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...radioGroupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        ...menuScope,
        ...radioGroupProps,
        ref: forwardedRef
    });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...radioItemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        ...menuScope,
        ...radioItemProps,
        ref: forwardedRef
    });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
        ...menuScope,
        ...itemIndicatorProps,
        ref: forwardedRef
    });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator";
var DropdownMenuSeparator = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...separatorProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ...menuScope,
        ...separatorProps,
        ref: forwardedRef
    });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "DropdownMenuArrow";
var DropdownMenuArrow = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
        ...menuScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
DropdownMenuArrow.displayName = ARROW_NAME;
var DropdownMenuSub = (props)=>{
    const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: "DropdownMenuSub"
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        ...menuScope,
        open,
        onOpenChange: setOpen,
        children
    });
};
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...subTriggerProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        ...menuScope,
        ...subTriggerProps,
        ref: forwardedRef
    });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent";
var DropdownMenuSubContent = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...subContentProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        ...menuScope,
        ...subContentProps,
        ref: forwardedRef,
        style: {
            ...props.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME;
var Root2 = DropdownMenu;
var Trigger = DropdownMenuTrigger;
var Portal2 = DropdownMenuPortal;
var Content2 = DropdownMenuContent;
var Group2 = DropdownMenuGroup;
var Label2 = DropdownMenuLabel;
var Item2 = DropdownMenuItem;
var CheckboxItem2 = DropdownMenuCheckboxItem;
var RadioGroup2 = DropdownMenuRadioGroup;
var RadioItem2 = DropdownMenuRadioItem;
var ItemIndicator2 = DropdownMenuItemIndicator;
var Separator2 = DropdownMenuSeparator;
var Arrow2 = DropdownMenuArrow;
var Sub2 = DropdownMenuSub;
var SubTrigger2 = DropdownMenuSubTrigger;
var SubContent2 = DropdownMenuSubContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/saas/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript) <export * as DropdownMenu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
}),
"[project]/saas/node_modules/vaul/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content",
    ()=>Content,
    "Drawer",
    ()=>Drawer,
    "Handle",
    ()=>Handle,
    "NestedRoot",
    ()=>NestedRoot,
    "Overlay",
    ()=>Overlay,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
'use client';
function __insertCSS(code) {
    if (!code || typeof document == 'undefined') return;
    let head = document.head || document.getElementsByTagName('head')[0];
    let style = document.createElement('style');
    style.type = 'text/css';
    head.appendChild(style);
    style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}
;
;
;
const DrawerContext = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    drawerRef: {
        current: null
    },
    overlayRef: {
        current: null
    },
    onPress: ()=>{},
    onRelease: ()=>{},
    onDrag: ()=>{},
    onNestedDrag: ()=>{},
    onNestedOpenChange: ()=>{},
    onNestedRelease: ()=>{},
    openProp: undefined,
    dismissible: false,
    isOpen: false,
    isDragging: false,
    keyboardIsOpen: {
        current: false
    },
    snapPointsOffset: null,
    snapPoints: null,
    handleOnly: false,
    modal: false,
    shouldFade: false,
    activeSnapPoint: null,
    onOpenChange: ()=>{},
    setActiveSnapPoint: ()=>{},
    closeDrawer: ()=>{},
    direction: 'bottom',
    shouldAnimate: {
        current: true
    },
    shouldScaleBackground: false,
    setBackgroundColorOnScale: true,
    noBodyStyles: false,
    container: null,
    autoFocus: false
});
const useDrawerContext = ()=>{
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawerContext must be used within a Drawer.Root');
    }
    return context;
};
__insertCSS("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");
function isMobileFirefox() {
    const userAgent = navigator.userAgent;
    return typeof window !== 'undefined' && (/Firefox/.test(userAgent) && /Mobile/.test(userAgent) || // Android Firefox
    /FxiOS/.test(userAgent) // iOS Firefox
    );
}
function isMac() {
    return testPlatform(/^Mac/);
}
function isIPhone() {
    return testPlatform(/^iPhone/);
}
function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function isIPad() {
    return testPlatform(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
    return isIPhone() || isIPad();
}
function testPlatform(re) {
    return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.platform) : undefined;
}
// This code comes from https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/overlays/src/usePreventScroll.ts
const KEYBOARD_BUFFER = 24;
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function chain$1(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks){
            if (typeof callback === 'function') {
                callback(...args);
            }
        }
    };
}
// @ts-ignore
const visualViewport = typeof document !== 'undefined' && window.visualViewport;
function isScrollable(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
function getScrollParent(node) {
    if (isScrollable(node)) {
        node = node.parentElement;
    }
    while(node && !isScrollable(node)){
        node = node.parentElement;
    }
    return node || document.scrollingElement || document.documentElement;
}
// HTML input types that do not cause the software keyboard to appear.
const nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let preventScrollCount = 0;
let restore;
/**
 * Prevents scrolling on the document body on mount, and
 * restores it on unmount. Also ensures that content does not
 * shift due to the scrollbars disappearing.
 */ function usePreventScroll(options = {}) {
    let { isDisabled } = options;
    useIsomorphicLayoutEffect({
        "usePreventScroll.useIsomorphicLayoutEffect": ()=>{
            if (isDisabled) {
                return;
            }
            preventScrollCount++;
            if (preventScrollCount === 1) {
                if (isIOS()) {
                    restore = preventScrollMobileSafari();
                }
            }
            return ({
                "usePreventScroll.useIsomorphicLayoutEffect": ()=>{
                    preventScrollCount--;
                    if (preventScrollCount === 0) {
                        restore == null ? void 0 : restore();
                    }
                }
            })["usePreventScroll.useIsomorphicLayoutEffect"];
        }
    }["usePreventScroll.useIsomorphicLayoutEffect"], [
        isDisabled
    ]);
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function preventScrollMobileSafari() {
    let scrollable;
    let lastY = 0;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = getScrollParent(e.target);
        if (scrollable === document.documentElement && scrollable === document.body) {
            return;
        }
        lastY = e.changedTouches[0].pageY;
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead. Unfortunately, this disables bounce scrolling when at
        // the top but it's the best we can do.
        let y = e.changedTouches[0].pageY;
        let scrollTop = scrollable.scrollTop;
        let bottom = scrollable.scrollHeight - scrollable.clientHeight;
        if (bottom === 0) {
            return;
        }
        if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) {
            e.preventDefault();
        }
        lastY = y;
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        // Apply this change if we're not already focused on the target element
        if (isInput(target) && target !== document.activeElement) {
            e.preventDefault();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = 'translateY(-2000px)';
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = '';
            });
        }
    };
    let onFocus = (e)=>{
        let target = e.target;
        if (isInput(target)) {
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = 'translateY(-2000px)';
            requestAnimationFrame(()=>{
                target.style.transform = '';
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if (visualViewport) {
                    if (visualViewport.height < window.innerHeight) {
                        // If the keyboard is already visible, do this after one additional frame
                        // to wait for the transform to be removed.
                        requestAnimationFrame(()=>{
                            scrollIntoView(target);
                        });
                    } else {
                        // Otherwise, wait for the visual viewport to resize before scrolling so we can
                        // measure the correct position to scroll to.
                        visualViewport.addEventListener('resize', ()=>scrollIntoView(target), {
                            once: true
                        });
                    }
                }
            });
        }
    };
    let onWindowScroll = ()=>{
        // Last resort. If the window scrolled, scroll it back to the top.
        // It should always be at the top because the body will have a negative margin (see below).
        window.scrollTo(0, 0);
    };
    // Record the original scroll position so we can restore it.
    // Then apply a negative margin to the body to offset it by the scroll position. This will
    // enable us to scroll the window to the top, which is required for the rest of this to work.
    let scrollX = window.pageXOffset;
    let scrollY = window.pageYOffset;
    let restoreStyles = chain$1(setStyle(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`));
    // Scroll to the top. The negative margin on the body will make this appear the same.
    window.scrollTo(0, 0);
    let removeEvents = chain$1(addEvent(document, 'touchstart', onTouchStart, {
        passive: false,
        capture: true
    }), addEvent(document, 'touchmove', onTouchMove, {
        passive: false,
        capture: true
    }), addEvent(document, 'touchend', onTouchEnd, {
        passive: false,
        capture: true
    }), addEvent(document, 'focus', onFocus, true), addEvent(window, 'scroll', onWindowScroll));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreStyles();
        removeEvents();
        window.scrollTo(scrollX, scrollY);
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function setStyle(element, style, value) {
    // https://github.com/microsoft/TypeScript/issues/17827#issuecomment-391663310
    // @ts-ignore
    let cur = element.style[style];
    // @ts-ignore
    element.style[style] = value;
    return ()=>{
        // @ts-ignore
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function addEvent(target, event, handler, options) {
    // @ts-ignore
    target.addEventListener(event, handler, options);
    return ()=>{
        // @ts-ignore
        target.removeEventListener(event, handler, options);
    };
}
function scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    while(target && target !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = getScrollParent(target);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = target.getBoundingClientRect().top;
            let targetBottom = target.getBoundingClientRect().bottom;
            // Buffer is needed for some edge cases
            const keyboardHeight = scrollable.getBoundingClientRect().bottom + KEYBOARD_BUFFER;
            if (targetBottom > keyboardHeight) {
                scrollable.scrollTop += targetTop - scrollableTop;
            }
        }
        // @ts-ignore
        target = scrollable.parentElement;
    }
}
function isInput(target) {
    return target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}
// This code comes from https://github.com/radix-ui/primitives/tree/main/packages/react/compose-refs
/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref !== null && ref !== undefined) {
        ref.current = value;
    }
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function composeRefs(...refs) {
    return (node)=>refs.forEach((ref)=>setRef(ref, node));
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
const cache = new WeakMap();
function set(el, styles, ignoreCache = false) {
    if (!el || !(el instanceof HTMLElement)) return;
    let originalStyles = {};
    Object.entries(styles).forEach(([key, value])=>{
        if (key.startsWith('--')) {
            el.style.setProperty(key, value);
            return;
        }
        originalStyles[key] = el.style[key];
        el.style[key] = value;
    });
    if (ignoreCache) return;
    cache.set(el, originalStyles);
}
function reset(el, prop) {
    if (!el || !(el instanceof HTMLElement)) return;
    let originalStyles = cache.get(el);
    if (!originalStyles) {
        return;
    }
    {
        el.style[prop] = originalStyles[prop];
    }
}
const isVertical = (direction)=>{
    switch(direction){
        case 'top':
        case 'bottom':
            return true;
        case 'left':
        case 'right':
            return false;
        default:
            return direction;
    }
};
function getTranslate(element, direction) {
    if (!element) {
        return null;
    }
    const style = window.getComputedStyle(element);
    const transform = style.transform || style.webkitTransform || style.mozTransform;
    let mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
        return parseFloat(mat[1].split(', ')[isVertical(direction) ? 13 : 12]);
    }
    // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
    mat = transform.match(/^matrix\((.+)\)$/);
    return mat ? parseFloat(mat[1].split(', ')[isVertical(direction) ? 5 : 4]) : null;
}
function dampenValue(v) {
    return 8 * (Math.log(v + 1) - 2);
}
function assignStyle(element, style) {
    if (!element) return ()=>{};
    const prevStyle = element.style.cssText;
    Object.assign(element.style, style);
    return ()=>{
        element.style.cssText = prevStyle;
    };
}
/**
 * Receives functions as arguments and returns a new function that calls all.
 */ function chain(...fns) {
    return (...args)=>{
        for (const fn of fns){
            if (typeof fn === 'function') {
                // @ts-ignore
                fn(...args);
            }
        }
    };
}
const TRANSITIONS = {
    DURATION: 0.5,
    EASE: [
        0.32,
        0.72,
        0,
        1
    ]
};
const VELOCITY_THRESHOLD = 0.4;
const CLOSE_THRESHOLD = 0.25;
const SCROLL_LOCK_TIMEOUT = 100;
const BORDER_RADIUS = 8;
const NESTED_DISPLACEMENT = 16;
const WINDOW_TOP_OFFSET = 26;
const DRAG_CLASS = 'vaul-dragging';
// This code comes from https://github.com/radix-ui/primitives/blob/main/packages/react/use-controllable-state/src/useControllableState.tsx
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useCallbackRef.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useCallbackRef.useEffect"]);
    // https://github.com/facebook/react/issues/19240
    return __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useCallbackRef.useMemo": ()=>({
                "useCallbackRef.useMemo": (...args)=>callbackRef.current == null ? void 0 : callbackRef.current.call(callbackRef, ...args)
            })["useCallbackRef.useMemo"]
    }["useCallbackRef.useMemo"], []);
}
function useUncontrolledState({ defaultProp, onChange }) {
    const uncontrolledState = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(value);
    const handleChange = useCallbackRef(onChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useUncontrolledState.useEffect": ()=>{
            if (prevValueRef.current !== value) {
                handleChange(value);
                prevValueRef.current = value;
            }
        }
    }["useUncontrolledState.useEffect"], [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}
function useControllableState({ prop, defaultProp, onChange = ()=>{} }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== undefined;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = useCallbackRef(onChange);
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useControllableState.useCallback[setValue]": (nextValue)=>{
            if (isControlled) {
                const setter = nextValue;
                const value = typeof nextValue === 'function' ? setter(prop) : nextValue;
                if (value !== prop) handleChange(value);
            } else {
                setUncontrolledProp(nextValue);
            }
        }
    }["useControllableState.useCallback[setValue]"], [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value,
        setValue
    ];
}
function useSnapPoints({ activeSnapPointProp, setActiveSnapPointProp, snapPoints, drawerRef, overlayRef, fadeFromIndex, onSnapPointChange, direction = 'bottom', container, snapToSequentialPoint }) {
    const [activeSnapPoint, setActiveSnapPoint] = useControllableState({
        prop: activeSnapPointProp,
        defaultProp: snapPoints == null ? void 0 : snapPoints[0],
        onChange: setActiveSnapPointProp
    });
    const [windowDimensions, setWindowDimensions] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(typeof window !== 'undefined' ? {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
    } : undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useSnapPoints.useEffect": ()=>{
            function onResize() {
                setWindowDimensions({
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                });
            }
            window.addEventListener('resize', onResize);
            return ({
                "useSnapPoints.useEffect": ()=>window.removeEventListener('resize', onResize)
            })["useSnapPoints.useEffect"];
        }
    }["useSnapPoints.useEffect"], []);
    const isLastSnapPoint = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useSnapPoints.useMemo[isLastSnapPoint]": ()=>activeSnapPoint === (snapPoints == null ? void 0 : snapPoints[snapPoints.length - 1]) || null
    }["useSnapPoints.useMemo[isLastSnapPoint]"], [
        snapPoints,
        activeSnapPoint
    ]);
    const activeSnapPointIndex = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useSnapPoints.useMemo[activeSnapPointIndex]": ()=>{
            var _snapPoints_findIndex;
            return (_snapPoints_findIndex = snapPoints == null ? void 0 : snapPoints.findIndex({
                "useSnapPoints.useMemo[activeSnapPointIndex]": (snapPoint)=>snapPoint === activeSnapPoint
            }["useSnapPoints.useMemo[activeSnapPointIndex]"])) != null ? _snapPoints_findIndex : null;
        }
    }["useSnapPoints.useMemo[activeSnapPointIndex]"], [
        snapPoints,
        activeSnapPoint
    ]);
    const shouldFade = snapPoints && snapPoints.length > 0 && (fadeFromIndex || fadeFromIndex === 0) && !Number.isNaN(fadeFromIndex) && snapPoints[fadeFromIndex] === activeSnapPoint || !snapPoints;
    const snapPointsOffset = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useSnapPoints.useMemo[snapPointsOffset]": ()=>{
            const containerSize = container ? {
                width: container.getBoundingClientRect().width,
                height: container.getBoundingClientRect().height
            } : typeof window !== 'undefined' ? {
                width: window.innerWidth,
                height: window.innerHeight
            } : {
                width: 0,
                height: 0
            };
            var _snapPoints_map;
            return (_snapPoints_map = snapPoints == null ? void 0 : snapPoints.map({
                "useSnapPoints.useMemo[snapPointsOffset]": (snapPoint)=>{
                    const isPx = typeof snapPoint === 'string';
                    let snapPointAsNumber = 0;
                    if (isPx) {
                        snapPointAsNumber = parseInt(snapPoint, 10);
                    }
                    if (isVertical(direction)) {
                        const height = isPx ? snapPointAsNumber : windowDimensions ? snapPoint * containerSize.height : 0;
                        if (windowDimensions) {
                            return direction === 'bottom' ? containerSize.height - height : -containerSize.height + height;
                        }
                        return height;
                    }
                    const width = isPx ? snapPointAsNumber : windowDimensions ? snapPoint * containerSize.width : 0;
                    if (windowDimensions) {
                        return direction === 'right' ? containerSize.width - width : -containerSize.width + width;
                    }
                    return width;
                }
            }["useSnapPoints.useMemo[snapPointsOffset]"])) != null ? _snapPoints_map : [];
        }
    }["useSnapPoints.useMemo[snapPointsOffset]"], [
        snapPoints,
        windowDimensions,
        container
    ]);
    const activeSnapPointOffset = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useSnapPoints.useMemo[activeSnapPointOffset]": ()=>activeSnapPointIndex !== null ? snapPointsOffset == null ? void 0 : snapPointsOffset[activeSnapPointIndex] : null
    }["useSnapPoints.useMemo[activeSnapPointOffset]"], [
        snapPointsOffset,
        activeSnapPointIndex
    ]);
    const snapToPoint = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useSnapPoints.useCallback[snapToPoint]": (dimension)=>{
            var _snapPointsOffset_findIndex;
            const newSnapPointIndex = (_snapPointsOffset_findIndex = snapPointsOffset == null ? void 0 : snapPointsOffset.findIndex({
                "useSnapPoints.useCallback[snapToPoint]": (snapPointDim)=>snapPointDim === dimension
            }["useSnapPoints.useCallback[snapToPoint]"])) != null ? _snapPointsOffset_findIndex : null;
            onSnapPointChange(newSnapPointIndex);
            set(drawerRef.current, {
                transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
                transform: isVertical(direction) ? `translate3d(0, ${dimension}px, 0)` : `translate3d(${dimension}px, 0, 0)`
            });
            if (snapPointsOffset && newSnapPointIndex !== snapPointsOffset.length - 1 && fadeFromIndex !== undefined && newSnapPointIndex !== fadeFromIndex && newSnapPointIndex < fadeFromIndex) {
                set(overlayRef.current, {
                    transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
                    opacity: '0'
                });
            } else {
                set(overlayRef.current, {
                    transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
                    opacity: '1'
                });
            }
            setActiveSnapPoint(snapPoints == null ? void 0 : snapPoints[Math.max(newSnapPointIndex, 0)]);
        }
    }["useSnapPoints.useCallback[snapToPoint]"], [
        drawerRef.current,
        snapPoints,
        snapPointsOffset,
        fadeFromIndex,
        overlayRef,
        setActiveSnapPoint
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useSnapPoints.useEffect": ()=>{
            if (activeSnapPoint || activeSnapPointProp) {
                var _snapPoints_findIndex;
                const newIndex = (_snapPoints_findIndex = snapPoints == null ? void 0 : snapPoints.findIndex({
                    "useSnapPoints.useEffect": (snapPoint)=>snapPoint === activeSnapPointProp || snapPoint === activeSnapPoint
                }["useSnapPoints.useEffect"])) != null ? _snapPoints_findIndex : -1;
                if (snapPointsOffset && newIndex !== -1 && typeof snapPointsOffset[newIndex] === 'number') {
                    snapToPoint(snapPointsOffset[newIndex]);
                }
            }
        }
    }["useSnapPoints.useEffect"], [
        activeSnapPoint,
        activeSnapPointProp,
        snapPoints,
        snapPointsOffset,
        snapToPoint
    ]);
    function onRelease({ draggedDistance, closeDrawer, velocity, dismissible }) {
        if (fadeFromIndex === undefined) return;
        const currentPosition = direction === 'bottom' || direction === 'right' ? (activeSnapPointOffset != null ? activeSnapPointOffset : 0) - draggedDistance : (activeSnapPointOffset != null ? activeSnapPointOffset : 0) + draggedDistance;
        const isOverlaySnapPoint = activeSnapPointIndex === fadeFromIndex - 1;
        const isFirst = activeSnapPointIndex === 0;
        const hasDraggedUp = draggedDistance > 0;
        if (isOverlaySnapPoint) {
            set(overlayRef.current, {
                transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`
            });
        }
        if (!snapToSequentialPoint && velocity > 2 && !hasDraggedUp) {
            if (dismissible) closeDrawer();
            else snapToPoint(snapPointsOffset[0]); // snap to initial point
            return;
        }
        if (!snapToSequentialPoint && velocity > 2 && hasDraggedUp && snapPointsOffset && snapPoints) {
            snapToPoint(snapPointsOffset[snapPoints.length - 1]);
            return;
        }
        // Find the closest snap point to the current position
        const closestSnapPoint = snapPointsOffset == null ? void 0 : snapPointsOffset.reduce((prev, curr)=>{
            if (typeof prev !== 'number' || typeof curr !== 'number') return prev;
            return Math.abs(curr - currentPosition) < Math.abs(prev - currentPosition) ? curr : prev;
        });
        const dim = isVertical(direction) ? window.innerHeight : window.innerWidth;
        if (velocity > VELOCITY_THRESHOLD && Math.abs(draggedDistance) < dim * 0.4) {
            const dragDirection = hasDraggedUp ? 1 : -1; // 1 = up, -1 = down
            // Don't do anything if we swipe upwards while being on the last snap point
            if (dragDirection > 0 && isLastSnapPoint && snapPoints) {
                snapToPoint(snapPointsOffset[snapPoints.length - 1]);
                return;
            }
            if (isFirst && dragDirection < 0 && dismissible) {
                closeDrawer();
            }
            if (activeSnapPointIndex === null) return;
            snapToPoint(snapPointsOffset[activeSnapPointIndex + dragDirection]);
            return;
        }
        snapToPoint(closestSnapPoint);
    }
    function onDrag({ draggedDistance }) {
        if (activeSnapPointOffset === null) return;
        const newValue = direction === 'bottom' || direction === 'right' ? activeSnapPointOffset - draggedDistance : activeSnapPointOffset + draggedDistance;
        // Don't do anything if we exceed the last(biggest) snap point
        if ((direction === 'bottom' || direction === 'right') && newValue < snapPointsOffset[snapPointsOffset.length - 1]) {
            return;
        }
        if ((direction === 'top' || direction === 'left') && newValue > snapPointsOffset[snapPointsOffset.length - 1]) {
            return;
        }
        set(drawerRef.current, {
            transform: isVertical(direction) ? `translate3d(0, ${newValue}px, 0)` : `translate3d(${newValue}px, 0, 0)`
        });
    }
    function getPercentageDragged(absDraggedDistance, isDraggingDown) {
        if (!snapPoints || typeof activeSnapPointIndex !== 'number' || !snapPointsOffset || fadeFromIndex === undefined) return null;
        // If this is true we are dragging to a snap point that is supposed to have an overlay
        const isOverlaySnapPoint = activeSnapPointIndex === fadeFromIndex - 1;
        const isOverlaySnapPointOrHigher = activeSnapPointIndex >= fadeFromIndex;
        if (isOverlaySnapPointOrHigher && isDraggingDown) {
            return 0;
        }
        // Don't animate, but still use this one if we are dragging away from the overlaySnapPoint
        if (isOverlaySnapPoint && !isDraggingDown) return 1;
        if (!shouldFade && !isOverlaySnapPoint) return null;
        // Either fadeFrom index or the one before
        const targetSnapPointIndex = isOverlaySnapPoint ? activeSnapPointIndex + 1 : activeSnapPointIndex - 1;
        // Get the distance from overlaySnapPoint to the one before or vice-versa to calculate the opacity percentage accordingly
        const snapPointDistance = isOverlaySnapPoint ? snapPointsOffset[targetSnapPointIndex] - snapPointsOffset[targetSnapPointIndex - 1] : snapPointsOffset[targetSnapPointIndex + 1] - snapPointsOffset[targetSnapPointIndex];
        const percentageDragged = absDraggedDistance / Math.abs(snapPointDistance);
        if (isOverlaySnapPoint) {
            return 1 - percentageDragged;
        } else {
            return percentageDragged;
        }
    }
    return {
        isLastSnapPoint,
        activeSnapPoint,
        shouldFade,
        getPercentageDragged,
        setActiveSnapPoint,
        activeSnapPointIndex,
        onRelease,
        onDrag,
        snapPointsOffset
    };
}
const noop = ()=>()=>{};
function useScaleBackground() {
    const { direction, isOpen, shouldScaleBackground, setBackgroundColorOnScale, noBodyStyles } = useDrawerContext();
    const timeoutIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const initialBackgroundColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useScaleBackground.useMemo[initialBackgroundColor]": ()=>document.body.style.backgroundColor
    }["useScaleBackground.useMemo[initialBackgroundColor]"], []);
    function getScale() {
        return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useScaleBackground.useEffect": ()=>{
            if (isOpen && shouldScaleBackground) {
                if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
                const wrapper = document.querySelector('[data-vaul-drawer-wrapper]') || document.querySelector('[vaul-drawer-wrapper]');
                if (!wrapper) return;
                chain(setBackgroundColorOnScale && !noBodyStyles ? assignStyle(document.body, {
                    background: 'black'
                }) : noop, assignStyle(wrapper, {
                    transformOrigin: isVertical(direction) ? 'top' : 'left',
                    transitionProperty: 'transform, border-radius',
                    transitionDuration: `${TRANSITIONS.DURATION}s`,
                    transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(',')})`
                }));
                const wrapperStylesCleanup = assignStyle(wrapper, {
                    borderRadius: `${BORDER_RADIUS}px`,
                    overflow: 'hidden',
                    ...isVertical(direction) ? {
                        transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
                    } : {
                        transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
                    }
                });
                return ({
                    "useScaleBackground.useEffect": ()=>{
                        wrapperStylesCleanup();
                        timeoutIdRef.current = window.setTimeout({
                            "useScaleBackground.useEffect": ()=>{
                                if (initialBackgroundColor) {
                                    document.body.style.background = initialBackgroundColor;
                                } else {
                                    document.body.style.removeProperty('background');
                                }
                            }
                        }["useScaleBackground.useEffect"], TRANSITIONS.DURATION * 1000);
                    }
                })["useScaleBackground.useEffect"];
            }
        }
    }["useScaleBackground.useEffect"], [
        isOpen,
        shouldScaleBackground,
        initialBackgroundColor
    ]);
}
let previousBodyPosition = null;
/**
 * This hook is necessary to prevent buggy behavior on iOS devices (need to test on Android).
 * I won't get into too much detail about what bugs it solves, but so far I've found that setting the body to `position: fixed` is the most reliable way to prevent those bugs.
 * Issues that this hook solves:
 * https://github.com/emilkowalski/vaul/issues/435
 * https://github.com/emilkowalski/vaul/issues/433
 * And more that I discovered, but were just not reported.
 */ function usePositionFixed({ isOpen, modal, nested, hasBeenOpened, preventScrollRestoration, noBodyStyles }) {
    const [activeUrl, setActiveUrl] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "usePositionFixed.useState": ()=>typeof window !== 'undefined' ? window.location.href : ''
    }["usePositionFixed.useState"]);
    const scrollPos = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const setPositionFixed = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "usePositionFixed.useCallback[setPositionFixed]": ()=>{
            // All browsers on iOS will return true here.
            if (!isSafari()) return;
            // If previousBodyPosition is already set, don't set it again.
            if (previousBodyPosition === null && isOpen && !noBodyStyles) {
                previousBodyPosition = {
                    position: document.body.style.position,
                    top: document.body.style.top,
                    left: document.body.style.left,
                    height: document.body.style.height,
                    right: 'unset'
                };
                // Update the dom inside an animation frame
                const { scrollX, innerHeight } = window;
                document.body.style.setProperty('position', 'fixed', 'important');
                Object.assign(document.body.style, {
                    top: `${-scrollPos.current}px`,
                    left: `${-scrollX}px`,
                    right: '0px',
                    height: 'auto'
                });
                window.setTimeout({
                    "usePositionFixed.useCallback[setPositionFixed]": ()=>window.requestAnimationFrame({
                            "usePositionFixed.useCallback[setPositionFixed]": ()=>{
                                // Attempt to check if the bottom bar appeared due to the position change
                                const bottomBarHeight = innerHeight - window.innerHeight;
                                if (bottomBarHeight && scrollPos.current >= innerHeight) {
                                    // Move the content further up so that the bottom bar doesn't hide it
                                    document.body.style.top = `${-(scrollPos.current + bottomBarHeight)}px`;
                                }
                            }
                        }["usePositionFixed.useCallback[setPositionFixed]"])
                }["usePositionFixed.useCallback[setPositionFixed]"], 300);
            }
        }
    }["usePositionFixed.useCallback[setPositionFixed]"], [
        isOpen
    ]);
    const restorePositionSetting = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "usePositionFixed.useCallback[restorePositionSetting]": ()=>{
            // All browsers on iOS will return true here.
            if (!isSafari()) return;
            if (previousBodyPosition !== null && !noBodyStyles) {
                // Convert the position from "px" to Int
                const y = -parseInt(document.body.style.top, 10);
                const x = -parseInt(document.body.style.left, 10);
                // Restore styles
                Object.assign(document.body.style, previousBodyPosition);
                window.requestAnimationFrame({
                    "usePositionFixed.useCallback[restorePositionSetting]": ()=>{
                        if (preventScrollRestoration && activeUrl !== window.location.href) {
                            setActiveUrl(window.location.href);
                            return;
                        }
                        window.scrollTo(x, y);
                    }
                }["usePositionFixed.useCallback[restorePositionSetting]"]);
                previousBodyPosition = null;
            }
        }
    }["usePositionFixed.useCallback[restorePositionSetting]"], [
        activeUrl
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "usePositionFixed.useEffect": ()=>{
            function onScroll() {
                scrollPos.current = window.scrollY;
            }
            onScroll();
            window.addEventListener('scroll', onScroll);
            return ({
                "usePositionFixed.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                }
            })["usePositionFixed.useEffect"];
        }
    }["usePositionFixed.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "usePositionFixed.useEffect": ()=>{
            if (!modal) return;
            return ({
                "usePositionFixed.useEffect": ()=>{
                    if (typeof document === 'undefined') return;
                    // Another drawer is opened, safe to ignore the execution
                    const hasDrawerOpened = !!document.querySelector('[data-vaul-drawer]');
                    if (hasDrawerOpened) return;
                    restorePositionSetting();
                }
            })["usePositionFixed.useEffect"];
        }
    }["usePositionFixed.useEffect"], [
        modal,
        restorePositionSetting
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "usePositionFixed.useEffect": ()=>{
            if (nested || !hasBeenOpened) return;
            // This is needed to force Safari toolbar to show **before** the drawer starts animating to prevent a gnarly shift from happening
            if (isOpen) {
                // avoid for standalone mode (PWA)
                const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
                !isStandalone && setPositionFixed();
                if (!modal) {
                    window.setTimeout({
                        "usePositionFixed.useEffect": ()=>{
                            restorePositionSetting();
                        }
                    }["usePositionFixed.useEffect"], 500);
                }
            } else {
                restorePositionSetting();
            }
        }
    }["usePositionFixed.useEffect"], [
        isOpen,
        hasBeenOpened,
        activeUrl,
        modal,
        nested,
        setPositionFixed,
        restorePositionSetting
    ]);
    return {
        restorePositionSetting
    };
}
function Root({ open: openProp, onOpenChange, children, onDrag: onDragProp, onRelease: onReleaseProp, snapPoints, shouldScaleBackground = false, setBackgroundColorOnScale = true, closeThreshold = CLOSE_THRESHOLD, scrollLockTimeout = SCROLL_LOCK_TIMEOUT, dismissible = true, handleOnly = false, fadeFromIndex = snapPoints && snapPoints.length - 1, activeSnapPoint: activeSnapPointProp, setActiveSnapPoint: setActiveSnapPointProp, fixed, modal = true, onClose, nested, noBodyStyles = false, direction = 'bottom', defaultOpen = false, disablePreventScroll = true, snapToSequentialPoint = false, preventScrollRestoration = false, repositionInputs = true, onAnimationEnd, container, autoFocus = false }) {
    var _drawerRef_current, _drawerRef_current1;
    const [isOpen = false, setIsOpen] = useControllableState({
        defaultProp: defaultOpen,
        prop: openProp,
        onChange: {
            "Root.useControllableState": (o)=>{
                onOpenChange == null ? void 0 : onOpenChange(o);
                if (!o && !nested) {
                    restorePositionSetting();
                }
                setTimeout({
                    "Root.useControllableState": ()=>{
                        onAnimationEnd == null ? void 0 : onAnimationEnd(o);
                    }
                }["Root.useControllableState"], TRANSITIONS.DURATION * 1000);
                if (o && !modal) {
                    if (typeof window !== 'undefined') {
                        window.requestAnimationFrame({
                            "Root.useControllableState": ()=>{
                                document.body.style.pointerEvents = 'auto';
                            }
                        }["Root.useControllableState"]);
                    }
                }
                if (!o) {
                    // This will be removed when the exit animation ends (`500ms`)
                    document.body.style.pointerEvents = 'auto';
                }
            }
        }["Root.useControllableState"]
    });
    const [hasBeenOpened, setHasBeenOpened] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [isDragging, setIsDragging] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [justReleased, setJustReleased] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const overlayRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const openTime = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const dragStartTime = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const dragEndTime = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const lastTimeDragPrevented = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isAllowedToDrag = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const nestedOpenChangeTimer = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const pointerStart = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const keyboardIsOpen = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const shouldAnimate = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(!defaultOpen);
    const previousDiffFromInitial = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const drawerRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const drawerHeightRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(((_drawerRef_current = drawerRef.current) == null ? void 0 : _drawerRef_current.getBoundingClientRect().height) || 0);
    const drawerWidthRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(((_drawerRef_current1 = drawerRef.current) == null ? void 0 : _drawerRef_current1.getBoundingClientRect().width) || 0);
    const initialDrawerHeight = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const onSnapPointChange = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Root.useCallback[onSnapPointChange]": (activeSnapPointIndex)=>{
            // Change openTime ref when we reach the last snap point to prevent dragging for 500ms incase it's scrollable.
            if (snapPoints && activeSnapPointIndex === snapPointsOffset.length - 1) openTime.current = new Date();
        }
    }["Root.useCallback[onSnapPointChange]"], []);
    const { activeSnapPoint, activeSnapPointIndex, setActiveSnapPoint, onRelease: onReleaseSnapPoints, snapPointsOffset, onDrag: onDragSnapPoints, shouldFade, getPercentageDragged: getSnapPointsPercentageDragged } = useSnapPoints({
        snapPoints,
        activeSnapPointProp,
        setActiveSnapPointProp,
        drawerRef,
        fadeFromIndex,
        overlayRef,
        onSnapPointChange,
        direction,
        container,
        snapToSequentialPoint
    });
    usePreventScroll({
        isDisabled: !isOpen || isDragging || !modal || justReleased || !hasBeenOpened || !repositionInputs || !disablePreventScroll
    });
    const { restorePositionSetting } = usePositionFixed({
        isOpen,
        modal,
        nested: nested != null ? nested : false,
        hasBeenOpened,
        preventScrollRestoration,
        noBodyStyles
    });
    function getScale() {
        return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
    }
    function onPress(event) {
        var _drawerRef_current, _drawerRef_current1;
        if (!dismissible && !snapPoints) return;
        if (drawerRef.current && !drawerRef.current.contains(event.target)) return;
        drawerHeightRef.current = ((_drawerRef_current = drawerRef.current) == null ? void 0 : _drawerRef_current.getBoundingClientRect().height) || 0;
        drawerWidthRef.current = ((_drawerRef_current1 = drawerRef.current) == null ? void 0 : _drawerRef_current1.getBoundingClientRect().width) || 0;
        setIsDragging(true);
        dragStartTime.current = new Date();
        // iOS doesn't trigger mouseUp after scrolling so we need to listen to touched in order to disallow dragging
        if (isIOS()) {
            window.addEventListener('touchend', ()=>isAllowedToDrag.current = false, {
                once: true
            });
        }
        // Ensure we maintain correct pointer capture even when going outside of the drawer
        event.target.setPointerCapture(event.pointerId);
        pointerStart.current = isVertical(direction) ? event.pageY : event.pageX;
    }
    function shouldDrag(el, isDraggingInDirection) {
        var _window_getSelection;
        let element = el;
        const highlightedText = (_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString();
        const swipeAmount = drawerRef.current ? getTranslate(drawerRef.current, direction) : null;
        const date = new Date();
        // Fixes https://github.com/emilkowalski/vaul/issues/483
        if (element.tagName === 'SELECT') {
            return false;
        }
        if (element.hasAttribute('data-vaul-no-drag') || element.closest('[data-vaul-no-drag]')) {
            return false;
        }
        if (direction === 'right' || direction === 'left') {
            return true;
        }
        // Allow scrolling when animating
        if (openTime.current && date.getTime() - openTime.current.getTime() < 500) {
            return false;
        }
        if (swipeAmount !== null) {
            if (direction === 'bottom' ? swipeAmount > 0 : swipeAmount < 0) {
                return true;
            }
        }
        // Don't drag if there's highlighted text
        if (highlightedText && highlightedText.length > 0) {
            return false;
        }
        // Disallow dragging if drawer was scrolled within `scrollLockTimeout`
        if (lastTimeDragPrevented.current && date.getTime() - lastTimeDragPrevented.current.getTime() < scrollLockTimeout && swipeAmount === 0) {
            lastTimeDragPrevented.current = date;
            return false;
        }
        if (isDraggingInDirection) {
            lastTimeDragPrevented.current = date;
            // We are dragging down so we should allow scrolling
            return false;
        }
        // Keep climbing up the DOM tree as long as there's a parent
        while(element){
            // Check if the element is scrollable
            if (element.scrollHeight > element.clientHeight) {
                if (element.scrollTop !== 0) {
                    lastTimeDragPrevented.current = new Date();
                    // The element is scrollable and not scrolled to the top, so don't drag
                    return false;
                }
                if (element.getAttribute('role') === 'dialog') {
                    return true;
                }
            }
            // Move up to the parent element
            element = element.parentNode;
        }
        // No scrollable parents not scrolled to the top found, so drag
        return true;
    }
    function onDrag(event) {
        if (!drawerRef.current) {
            return;
        }
        // We need to know how much of the drawer has been dragged in percentages so that we can transform background accordingly
        if (isDragging) {
            const directionMultiplier = direction === 'bottom' || direction === 'right' ? 1 : -1;
            const draggedDistance = (pointerStart.current - (isVertical(direction) ? event.pageY : event.pageX)) * directionMultiplier;
            const isDraggingInDirection = draggedDistance > 0;
            // Pre condition for disallowing dragging in the close direction.
            const noCloseSnapPointsPreCondition = snapPoints && !dismissible && !isDraggingInDirection;
            // Disallow dragging down to close when first snap point is the active one and dismissible prop is set to false.
            if (noCloseSnapPointsPreCondition && activeSnapPointIndex === 0) return;
            // We need to capture last time when drag with scroll was triggered and have a timeout between
            const absDraggedDistance = Math.abs(draggedDistance);
            const wrapper = document.querySelector('[data-vaul-drawer-wrapper]');
            const drawerDimension = direction === 'bottom' || direction === 'top' ? drawerHeightRef.current : drawerWidthRef.current;
            // Calculate the percentage dragged, where 1 is the closed position
            let percentageDragged = absDraggedDistance / drawerDimension;
            const snapPointPercentageDragged = getSnapPointsPercentageDragged(absDraggedDistance, isDraggingInDirection);
            if (snapPointPercentageDragged !== null) {
                percentageDragged = snapPointPercentageDragged;
            }
            // Disallow close dragging beyond the smallest snap point.
            if (noCloseSnapPointsPreCondition && percentageDragged >= 1) {
                return;
            }
            if (!isAllowedToDrag.current && !shouldDrag(event.target, isDraggingInDirection)) return;
            drawerRef.current.classList.add(DRAG_CLASS);
            // If shouldDrag gave true once after pressing down on the drawer, we set isAllowedToDrag to true and it will remain true until we let go, there's no reason to disable dragging mid way, ever, and that's the solution to it
            isAllowedToDrag.current = true;
            set(drawerRef.current, {
                transition: 'none'
            });
            set(overlayRef.current, {
                transition: 'none'
            });
            if (snapPoints) {
                onDragSnapPoints({
                    draggedDistance
                });
            }
            // Run this only if snapPoints are not defined or if we are at the last snap point (highest one)
            if (isDraggingInDirection && !snapPoints) {
                const dampenedDraggedDistance = dampenValue(draggedDistance);
                const translateValue = Math.min(dampenedDraggedDistance * -1, 0) * directionMultiplier;
                set(drawerRef.current, {
                    transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
                });
                return;
            }
            const opacityValue = 1 - percentageDragged;
            if (shouldFade || fadeFromIndex && activeSnapPointIndex === fadeFromIndex - 1) {
                onDragProp == null ? void 0 : onDragProp(event, percentageDragged);
                set(overlayRef.current, {
                    opacity: `${opacityValue}`,
                    transition: 'none'
                }, true);
            }
            if (wrapper && overlayRef.current && shouldScaleBackground) {
                // Calculate percentageDragged as a fraction (0 to 1)
                const scaleValue = Math.min(getScale() + percentageDragged * (1 - getScale()), 1);
                const borderRadiusValue = 8 - percentageDragged * 8;
                const translateValue = Math.max(0, 14 - percentageDragged * 14);
                set(wrapper, {
                    borderRadius: `${borderRadiusValue}px`,
                    transform: isVertical(direction) ? `scale(${scaleValue}) translate3d(0, ${translateValue}px, 0)` : `scale(${scaleValue}) translate3d(${translateValue}px, 0, 0)`,
                    transition: 'none'
                }, true);
            }
            if (!snapPoints) {
                const translateValue = absDraggedDistance * directionMultiplier;
                set(drawerRef.current, {
                    transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
                });
            }
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Root.useEffect": ()=>{
            window.requestAnimationFrame({
                "Root.useEffect": ()=>{
                    shouldAnimate.current = true;
                }
            }["Root.useEffect"]);
        }
    }["Root.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Root.useEffect": ()=>{
            var _window_visualViewport;
            function onVisualViewportChange() {
                if (!drawerRef.current || !repositionInputs) return;
                const focusedElement = document.activeElement;
                if (isInput(focusedElement) || keyboardIsOpen.current) {
                    var _window_visualViewport;
                    const visualViewportHeight = ((_window_visualViewport = window.visualViewport) == null ? void 0 : _window_visualViewport.height) || 0;
                    const totalHeight = window.innerHeight;
                    // This is the height of the keyboard
                    let diffFromInitial = totalHeight - visualViewportHeight;
                    const drawerHeight = drawerRef.current.getBoundingClientRect().height || 0;
                    // Adjust drawer height only if it's tall enough
                    const isTallEnough = drawerHeight > totalHeight * 0.8;
                    if (!initialDrawerHeight.current) {
                        initialDrawerHeight.current = drawerHeight;
                    }
                    const offsetFromTop = drawerRef.current.getBoundingClientRect().top;
                    // visualViewport height may change due to somq e subtle changes to the keyboard. Checking if the height changed by 60 or more will make sure that they keyboard really changed its open state.
                    if (Math.abs(previousDiffFromInitial.current - diffFromInitial) > 60) {
                        keyboardIsOpen.current = !keyboardIsOpen.current;
                    }
                    if (snapPoints && snapPoints.length > 0 && snapPointsOffset && activeSnapPointIndex) {
                        const activeSnapPointHeight = snapPointsOffset[activeSnapPointIndex] || 0;
                        diffFromInitial += activeSnapPointHeight;
                    }
                    previousDiffFromInitial.current = diffFromInitial;
                    // We don't have to change the height if the input is in view, when we are here we are in the opened keyboard state so we can correctly check if the input is in view
                    if (drawerHeight > visualViewportHeight || keyboardIsOpen.current) {
                        const height = drawerRef.current.getBoundingClientRect().height;
                        let newDrawerHeight = height;
                        if (height > visualViewportHeight) {
                            newDrawerHeight = visualViewportHeight - (isTallEnough ? offsetFromTop : WINDOW_TOP_OFFSET);
                        }
                        // When fixed, don't move the drawer upwards if there's space, but rather only change it's height so it's fully scrollable when the keyboard is open
                        if (fixed) {
                            drawerRef.current.style.height = `${height - Math.max(diffFromInitial, 0)}px`;
                        } else {
                            drawerRef.current.style.height = `${Math.max(newDrawerHeight, visualViewportHeight - offsetFromTop)}px`;
                        }
                    } else if (!isMobileFirefox()) {
                        drawerRef.current.style.height = `${initialDrawerHeight.current}px`;
                    }
                    if (snapPoints && snapPoints.length > 0 && !keyboardIsOpen.current) {
                        drawerRef.current.style.bottom = `0px`;
                    } else {
                        // Negative bottom value would never make sense
                        drawerRef.current.style.bottom = `${Math.max(diffFromInitial, 0)}px`;
                    }
                }
            }
            (_window_visualViewport = window.visualViewport) == null ? void 0 : _window_visualViewport.addEventListener('resize', onVisualViewportChange);
            return ({
                "Root.useEffect": ()=>{
                    var _window_visualViewport;
                    return (_window_visualViewport = window.visualViewport) == null ? void 0 : _window_visualViewport.removeEventListener('resize', onVisualViewportChange);
                }
            })["Root.useEffect"];
        }
    }["Root.useEffect"], [
        activeSnapPointIndex,
        snapPoints,
        snapPointsOffset
    ]);
    function closeDrawer(fromWithin) {
        cancelDrag();
        onClose == null ? void 0 : onClose();
        if (!fromWithin) {
            setIsOpen(false);
        }
        setTimeout(()=>{
            if (snapPoints) {
                setActiveSnapPoint(snapPoints[0]);
            }
        }, TRANSITIONS.DURATION * 1000); // seconds to ms
    }
    function resetDrawer() {
        if (!drawerRef.current) return;
        const wrapper = document.querySelector('[data-vaul-drawer-wrapper]');
        const currentSwipeAmount = getTranslate(drawerRef.current, direction);
        set(drawerRef.current, {
            transform: 'translate3d(0, 0, 0)',
            transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`
        });
        set(overlayRef.current, {
            transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
            opacity: '1'
        });
        // Don't reset background if swiped upwards
        if (shouldScaleBackground && currentSwipeAmount && currentSwipeAmount > 0 && isOpen) {
            set(wrapper, {
                borderRadius: `${BORDER_RADIUS}px`,
                overflow: 'hidden',
                ...isVertical(direction) ? {
                    transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                    transformOrigin: 'top'
                } : {
                    transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                    transformOrigin: 'left'
                },
                transitionProperty: 'transform, border-radius',
                transitionDuration: `${TRANSITIONS.DURATION}s`,
                transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(',')})`
            }, true);
        }
    }
    function cancelDrag() {
        if (!isDragging || !drawerRef.current) return;
        drawerRef.current.classList.remove(DRAG_CLASS);
        isAllowedToDrag.current = false;
        setIsDragging(false);
        dragEndTime.current = new Date();
    }
    function onRelease(event) {
        if (!isDragging || !drawerRef.current) return;
        drawerRef.current.classList.remove(DRAG_CLASS);
        isAllowedToDrag.current = false;
        setIsDragging(false);
        dragEndTime.current = new Date();
        const swipeAmount = getTranslate(drawerRef.current, direction);
        if (!event || !shouldDrag(event.target, false) || !swipeAmount || Number.isNaN(swipeAmount)) return;
        if (dragStartTime.current === null) return;
        const timeTaken = dragEndTime.current.getTime() - dragStartTime.current.getTime();
        const distMoved = pointerStart.current - (isVertical(direction) ? event.pageY : event.pageX);
        const velocity = Math.abs(distMoved) / timeTaken;
        if (velocity > 0.05) {
            // `justReleased` is needed to prevent the drawer from focusing on an input when the drag ends, as it's not the intent most of the time.
            setJustReleased(true);
            setTimeout(()=>{
                setJustReleased(false);
            }, 200);
        }
        if (snapPoints) {
            const directionMultiplier = direction === 'bottom' || direction === 'right' ? 1 : -1;
            onReleaseSnapPoints({
                draggedDistance: distMoved * directionMultiplier,
                closeDrawer,
                velocity,
                dismissible
            });
            onReleaseProp == null ? void 0 : onReleaseProp(event, true);
            return;
        }
        // Moved upwards, don't do anything
        if (direction === 'bottom' || direction === 'right' ? distMoved > 0 : distMoved < 0) {
            resetDrawer();
            onReleaseProp == null ? void 0 : onReleaseProp(event, true);
            return;
        }
        if (velocity > VELOCITY_THRESHOLD) {
            closeDrawer();
            onReleaseProp == null ? void 0 : onReleaseProp(event, false);
            return;
        }
        var _drawerRef_current_getBoundingClientRect_height;
        const visibleDrawerHeight = Math.min((_drawerRef_current_getBoundingClientRect_height = drawerRef.current.getBoundingClientRect().height) != null ? _drawerRef_current_getBoundingClientRect_height : 0, window.innerHeight);
        var _drawerRef_current_getBoundingClientRect_width;
        const visibleDrawerWidth = Math.min((_drawerRef_current_getBoundingClientRect_width = drawerRef.current.getBoundingClientRect().width) != null ? _drawerRef_current_getBoundingClientRect_width : 0, window.innerWidth);
        const isHorizontalSwipe = direction === 'left' || direction === 'right';
        if (Math.abs(swipeAmount) >= (isHorizontalSwipe ? visibleDrawerWidth : visibleDrawerHeight) * closeThreshold) {
            closeDrawer();
            onReleaseProp == null ? void 0 : onReleaseProp(event, false);
            return;
        }
        onReleaseProp == null ? void 0 : onReleaseProp(event, true);
        resetDrawer();
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Root.useEffect": ()=>{
            // Trigger enter animation without using CSS animation
            if (isOpen) {
                set(document.documentElement, {
                    scrollBehavior: 'auto'
                });
                openTime.current = new Date();
            }
            return ({
                "Root.useEffect": ()=>{
                    reset(document.documentElement, 'scrollBehavior');
                }
            })["Root.useEffect"];
        }
    }["Root.useEffect"], [
        isOpen
    ]);
    function onNestedOpenChange(o) {
        const scale = o ? (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth : 1;
        const initialTranslate = o ? -NESTED_DISPLACEMENT : 0;
        if (nestedOpenChangeTimer.current) {
            window.clearTimeout(nestedOpenChangeTimer.current);
        }
        set(drawerRef.current, {
            transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
            transform: isVertical(direction) ? `scale(${scale}) translate3d(0, ${initialTranslate}px, 0)` : `scale(${scale}) translate3d(${initialTranslate}px, 0, 0)`
        });
        if (!o && drawerRef.current) {
            nestedOpenChangeTimer.current = setTimeout(()=>{
                const translateValue = getTranslate(drawerRef.current, direction);
                set(drawerRef.current, {
                    transition: 'none',
                    transform: isVertical(direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
                });
            }, 500);
        }
    }
    function onNestedDrag(_event, percentageDragged) {
        if (percentageDragged < 0) return;
        const initialScale = (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth;
        const newScale = initialScale + percentageDragged * (1 - initialScale);
        const newTranslate = -NESTED_DISPLACEMENT + percentageDragged * NESTED_DISPLACEMENT;
        set(drawerRef.current, {
            transform: isVertical(direction) ? `scale(${newScale}) translate3d(0, ${newTranslate}px, 0)` : `scale(${newScale}) translate3d(${newTranslate}px, 0, 0)`,
            transition: 'none'
        });
    }
    function onNestedRelease(_event, o) {
        const dim = isVertical(direction) ? window.innerHeight : window.innerWidth;
        const scale = o ? (dim - NESTED_DISPLACEMENT) / dim : 1;
        const translate = o ? -NESTED_DISPLACEMENT : 0;
        if (o) {
            set(drawerRef.current, {
                transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(',')})`,
                transform: isVertical(direction) ? `scale(${scale}) translate3d(0, ${translate}px, 0)` : `scale(${scale}) translate3d(${translate}px, 0, 0)`
            });
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Root.useEffect": ()=>{
            if (!modal) {
                // Need to do this manually unfortunately
                window.requestAnimationFrame({
                    "Root.useEffect": ()=>{
                        document.body.style.pointerEvents = 'auto';
                    }
                }["Root.useEffect"]);
            }
        }
    }["Root.useEffect"], [
        modal
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        defaultOpen: defaultOpen,
        onOpenChange: (open)=>{
            if (!dismissible && !open) return;
            if (open) {
                setHasBeenOpened(true);
            } else {
                closeDrawer(true);
            }
            setIsOpen(open);
        },
        open: isOpen
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(DrawerContext.Provider, {
        value: {
            activeSnapPoint,
            snapPoints,
            setActiveSnapPoint,
            drawerRef,
            overlayRef,
            onOpenChange,
            onPress,
            onRelease,
            onDrag,
            dismissible,
            shouldAnimate,
            handleOnly,
            isOpen,
            isDragging,
            shouldFade,
            closeDrawer,
            onNestedDrag,
            onNestedOpenChange,
            onNestedRelease,
            keyboardIsOpen,
            modal,
            snapPointsOffset,
            activeSnapPointIndex,
            direction,
            shouldScaleBackground,
            setBackgroundColorOnScale,
            noBodyStyles,
            container,
            autoFocus
        }
    }, children));
}
const Overlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function({ ...rest }, ref) {
    const { overlayRef, snapPoints, onRelease, shouldFade, isOpen, modal, shouldAnimate } = useDrawerContext();
    const composedRef = useComposedRefs(ref, overlayRef);
    const hasSnapPoints = snapPoints && snapPoints.length > 0;
    // Overlay is the component that is locking scroll, removing it will unlock the scroll without having to dig into Radix's Dialog library
    if (!modal) {
        return null;
    }
    const onMouseUp = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "Overlay.useCallback[onMouseUp]": (event)=>onRelease(event)
    }["Overlay.useCallback[onMouseUp]"], [
        onRelease
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        onMouseUp: onMouseUp,
        ref: composedRef,
        "data-vaul-overlay": "",
        "data-vaul-snap-points": isOpen && hasSnapPoints ? 'true' : 'false',
        "data-vaul-snap-points-overlay": isOpen && shouldFade ? 'true' : 'false',
        "data-vaul-animate": (shouldAnimate == null ? void 0 : shouldAnimate.current) ? 'true' : 'false',
        ...rest
    });
});
Overlay.displayName = 'Drawer.Overlay';
const Content = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function({ onPointerDownOutside, style, onOpenAutoFocus, ...rest }, ref) {
    const { drawerRef, onPress, onRelease, onDrag, keyboardIsOpen, snapPointsOffset, activeSnapPointIndex, modal, isOpen, direction, snapPoints, container, handleOnly, shouldAnimate, autoFocus } = useDrawerContext();
    // Needed to use transition instead of animations
    const [delayedSnapPoints, setDelayedSnapPoints] = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const composedRef = useComposedRefs(ref, drawerRef);
    const pointerStartRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const lastKnownPointerEventRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const wasBeyondThePointRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const hasSnapPoints = snapPoints && snapPoints.length > 0;
    useScaleBackground();
    const isDeltaInDirection = (delta, direction, threshold = 0)=>{
        if (wasBeyondThePointRef.current) return true;
        const deltaY = Math.abs(delta.y);
        const deltaX = Math.abs(delta.x);
        const isDeltaX = deltaX > deltaY;
        const dFactor = [
            'bottom',
            'right'
        ].includes(direction) ? 1 : -1;
        if (direction === 'left' || direction === 'right') {
            const isReverseDirection = delta.x * dFactor < 0;
            if (!isReverseDirection && deltaX >= 0 && deltaX <= threshold) {
                return isDeltaX;
            }
        } else {
            const isReverseDirection = delta.y * dFactor < 0;
            if (!isReverseDirection && deltaY >= 0 && deltaY <= threshold) {
                return !isDeltaX;
            }
        }
        wasBeyondThePointRef.current = true;
        return true;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Content.useEffect": ()=>{
            if (hasSnapPoints) {
                window.requestAnimationFrame({
                    "Content.useEffect": ()=>{
                        setDelayedSnapPoints(true);
                    }
                }["Content.useEffect"]);
            }
        }
    }["Content.useEffect"], []);
    function handleOnPointerUp(event) {
        pointerStartRef.current = null;
        wasBeyondThePointRef.current = false;
        onRelease(event);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-vaul-drawer-direction": direction,
        "data-vaul-drawer": "",
        "data-vaul-delayed-snap-points": delayedSnapPoints ? 'true' : 'false',
        "data-vaul-snap-points": isOpen && hasSnapPoints ? 'true' : 'false',
        "data-vaul-custom-container": container ? 'true' : 'false',
        "data-vaul-animate": (shouldAnimate == null ? void 0 : shouldAnimate.current) ? 'true' : 'false',
        ...rest,
        ref: composedRef,
        style: snapPointsOffset && snapPointsOffset.length > 0 ? {
            '--snap-point-height': `${snapPointsOffset[activeSnapPointIndex != null ? activeSnapPointIndex : 0]}px`,
            ...style
        } : style,
        onPointerDown: (event)=>{
            if (handleOnly) return;
            rest.onPointerDown == null ? void 0 : rest.onPointerDown.call(rest, event);
            pointerStartRef.current = {
                x: event.pageX,
                y: event.pageY
            };
            onPress(event);
        },
        onOpenAutoFocus: (e)=>{
            onOpenAutoFocus == null ? void 0 : onOpenAutoFocus(e);
            if (!autoFocus) {
                e.preventDefault();
            }
        },
        onPointerDownOutside: (e)=>{
            onPointerDownOutside == null ? void 0 : onPointerDownOutside(e);
            if (!modal || e.defaultPrevented) {
                e.preventDefault();
                return;
            }
            if (keyboardIsOpen.current) {
                keyboardIsOpen.current = false;
            }
        },
        onFocusOutside: (e)=>{
            if (!modal) {
                e.preventDefault();
                return;
            }
        },
        onPointerMove: (event)=>{
            lastKnownPointerEventRef.current = event;
            if (handleOnly) return;
            rest.onPointerMove == null ? void 0 : rest.onPointerMove.call(rest, event);
            if (!pointerStartRef.current) return;
            const yPosition = event.pageY - pointerStartRef.current.y;
            const xPosition = event.pageX - pointerStartRef.current.x;
            const swipeStartThreshold = event.pointerType === 'touch' ? 10 : 2;
            const delta = {
                x: xPosition,
                y: yPosition
            };
            const isAllowedToSwipe = isDeltaInDirection(delta, direction, swipeStartThreshold);
            if (isAllowedToSwipe) onDrag(event);
            else if (Math.abs(xPosition) > swipeStartThreshold || Math.abs(yPosition) > swipeStartThreshold) {
                pointerStartRef.current = null;
            }
        },
        onPointerUp: (event)=>{
            rest.onPointerUp == null ? void 0 : rest.onPointerUp.call(rest, event);
            pointerStartRef.current = null;
            wasBeyondThePointRef.current = false;
            onRelease(event);
        },
        onPointerOut: (event)=>{
            rest.onPointerOut == null ? void 0 : rest.onPointerOut.call(rest, event);
            handleOnPointerUp(lastKnownPointerEventRef.current);
        },
        onContextMenu: (event)=>{
            rest.onContextMenu == null ? void 0 : rest.onContextMenu.call(rest, event);
            if (lastKnownPointerEventRef.current) {
                handleOnPointerUp(lastKnownPointerEventRef.current);
            }
        }
    });
});
Content.displayName = 'Drawer.Content';
const LONG_HANDLE_PRESS_TIMEOUT = 250;
const DOUBLE_TAP_TIMEOUT = 120;
const Handle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function({ preventCycle = false, children, ...rest }, ref) {
    const { closeDrawer, isDragging, snapPoints, activeSnapPoint, setActiveSnapPoint, dismissible, handleOnly, isOpen, onPress, onDrag } = useDrawerContext();
    const closeTimeoutIdRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const shouldCancelInteractionRef = __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    function handleStartCycle() {
        // Stop if this is the second click of a double click
        if (shouldCancelInteractionRef.current) {
            handleCancelInteraction();
            return;
        }
        window.setTimeout(()=>{
            handleCycleSnapPoints();
        }, DOUBLE_TAP_TIMEOUT);
    }
    function handleCycleSnapPoints() {
        // Prevent accidental taps while resizing drawer
        if (isDragging || preventCycle || shouldCancelInteractionRef.current) {
            handleCancelInteraction();
            return;
        }
        // Make sure to clear the timeout id if the user releases the handle before the cancel timeout
        handleCancelInteraction();
        if (!snapPoints || snapPoints.length === 0) {
            if (!dismissible) {
                closeDrawer();
            }
            return;
        }
        const isLastSnapPoint = activeSnapPoint === snapPoints[snapPoints.length - 1];
        if (isLastSnapPoint && dismissible) {
            closeDrawer();
            return;
        }
        const currentSnapIndex = snapPoints.findIndex((point)=>point === activeSnapPoint);
        if (currentSnapIndex === -1) return; // activeSnapPoint not found in snapPoints
        const nextSnapPoint = snapPoints[currentSnapIndex + 1];
        setActiveSnapPoint(nextSnapPoint);
    }
    function handleStartInteraction() {
        closeTimeoutIdRef.current = window.setTimeout(()=>{
            // Cancel click interaction on a long press
            shouldCancelInteractionRef.current = true;
        }, LONG_HANDLE_PRESS_TIMEOUT);
    }
    function handleCancelInteraction() {
        if (closeTimeoutIdRef.current) {
            window.clearTimeout(closeTimeoutIdRef.current);
        }
        shouldCancelInteractionRef.current = false;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        onClick: handleStartCycle,
        onPointerCancel: handleCancelInteraction,
        onPointerDown: (e)=>{
            if (handleOnly) onPress(e);
            handleStartInteraction();
        },
        onPointerMove: (e)=>{
            if (handleOnly) onDrag(e);
        },
        // onPointerUp is already handled by the content component
        ref: ref,
        "data-vaul-drawer-visible": isOpen ? 'true' : 'false',
        "data-vaul-handle": "",
        "aria-hidden": "true",
        ...rest
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        "data-vaul-handle-hitarea": "",
        "aria-hidden": "true"
    }, children));
});
Handle.displayName = 'Drawer.Handle';
function NestedRoot({ onDrag, onOpenChange, open: nestedIsOpen, ...rest }) {
    const { onNestedDrag, onNestedOpenChange, onNestedRelease } = useDrawerContext();
    if (!onNestedDrag) {
        throw new Error('Drawer.NestedRoot must be placed in another drawer');
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Root, {
        nested: true,
        open: nestedIsOpen,
        onClose: ()=>{
            onNestedOpenChange(false);
        },
        onDrag: (e, p)=>{
            onNestedDrag(e, p);
            onDrag == null ? void 0 : onDrag(e, p);
        },
        onOpenChange: (o)=>{
            if (o) {
                onNestedOpenChange(o);
            }
            onOpenChange == null ? void 0 : onOpenChange(o);
        },
        onRelease: onNestedRelease,
        ...rest
    });
}
function Portal(props) {
    const context = useDrawerContext();
    const { container = context.container, ...portalProps } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        container: container,
        ...portalProps
    });
}
const Drawer = {
    Root,
    NestedRoot,
    Content,
    Overlay,
    Trigger: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"],
    Portal,
    Handle,
    Close: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"],
    Title: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"],
    Description: __TURBOPACK__imported__module__$5b$project$5d2f$saas$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"]
};
;
}),
]);

//# sourceMappingURL=53289_902afb98._.js.map