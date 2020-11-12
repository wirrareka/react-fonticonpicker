/**
 * Flatten a categorized source and return both categories and flattened items.
 * @param {object} source The source object where key represent categories and it has array of items
 * @param {string|null} category The category key to look for
 * @return {array} Flattened source. Could be an empty array if none was found
 */
export declare function flattenPossiblyCategorizedSource(source: any, category?: any): any[];
/**
 * Get possible categories from an icon source
 *
 * @param {object|array} source
 * @return {array|null} Category array. Null if no category was found
 */
export declare function getPossibleCategories(source: any): string[];
/**
 * Convert a decimal number to hexadecimal HTML representation
 *
 * @param {number} number The number to convert to, could be a string
 * @return {string} The hex representation
 */
export declare function convertToHex(number: any): string;
/**
 * Compare two single dimentional arrays and check if they are equal
 * regardless of the order within the array.
 *
 * This is a pure function and doesn't change anything to the original copy
 *
 * @param {array} from Array to compare from
 * @param {array} to Array to compare with
 * @returns {bool} true if equal, false otherwise
 */
export declare function isArrayEqual(from: any, to: any): boolean;
/**
 * Calculate offset w.r.t window
 * @param {HTMLElement} elem HTMLElement or Node for which offset is calculated
 */
export declare function getOffset(elem: any): {
    top: any;
    left: any;
};
/**
 * Get the type of any source, with distinguish between array and object
 * In JS, array is an object too and so is null, so we check for null
 * and Array.isArray explicitly
 * @param {any} source The source element
 */
export declare function getSourceType(source: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null" | "array";
/**
 * Throw an exception when source type is not valid
 * @param {string} givenType given source type
 * @param {string} requiredType required source type
 */
export declare function InvalidSourceException(givenType: any, requiredType: any): void;
/**
 * Implementation of debounce function
 *
 * {@link https://medium.com/a-developers-perspective/throttling-and-debouncing-in-javascript-b01cad5c8edf}
 * @param {Function} func callback function
 * @param {int} delay delay in milliseconds
 */
export declare const debounce: (func: any, delay: any) => () => void;
/**
 * FuzzySearch Implementation
 *
 * Adopted from
 * {@link https://github.com/bevacqua/fuzzysearch}
 *
 * Changed the implementation a little bit to compare
 * against lowercase values and support unicode.
 *
 * The MIT License (MIT)
 * Copyright © 2015 Nicolas Bevacqua
 * @param {string} needle
 * @param {string} haystack
 */
export declare function fuzzySearch(needle: any, haystack: any): boolean;
