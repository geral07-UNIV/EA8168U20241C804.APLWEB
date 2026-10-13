/**
 * domain utility for string-based type validation
 *
 * @remarks
 * provides static methods to enforce string constraints across the domain
 */
export class StringValidator {
    /**
     * checks if a value is a string primitive or a string object
     *
     * @param {*} value - the value to evaluate
     * @returns {boolean} true if the value is a string, false otherwise
     */
    static isString(value) {
        return typeof value === 'string' || value instanceof String;
    }

    /**
     * checks if a value is a string that contains at least one non-whitespace character
     *
     * @param {*} value - the value to evaluate
     * @returns {boolean} true if the value is a non-empty string, false otherwise
     */
    static isNotEmptyString(value) {
        return this.isString(value) && value.trim().length > 0;
    }
}
