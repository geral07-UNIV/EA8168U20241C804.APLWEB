
/**
 * value object representing a url within the domain
 *
 * @remarks
 * this value object ensures that url values are well-formed according to
 * rfc standards and provides a consistent way to handle urls, it is immutable
 */
export class Url {
    /** @type {string} */
    #value;

    /**
     * validates if a string is a well-formed url
     *
     * @param {string} url - the url string to validate
     * @returns {boolean} true if the url is valid, false otherwise
     */
    static isValidUrl(url) {
        if (typeof url !== 'string' && !(url instanceof String)) return false;
        if (URL.canParse) {
            return URL.canParse(url);
        }
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }

    /**
     * creates a new url instance
     *
     * @param {string} value - the url string
     */
    constructor(value) {
        this.#value = Url.isValidUrl(value) ? value : '';
        Object.freeze(this);
    }

    /**
     * returns the string representation of the url
     * @returns {string}
     */
    toString() {
        return this.#value;
    }

    /**
     * checks if the url is empty
     * @returns {boolean}
     */
    isEmpty() {
        return this.#value === '';
    }

    /**
     * returns the primitive value of the url
     * @returns {string}
     */
    valueOf() {
        return this.#value;
    }

    /**
     * checks for equality with another url instance
     * @param {Url} other - the other url to compare
     * @returns {boolean}
     */
    equals(other) {
        return other instanceof Url && this.#value === other.toString();
    }
}
