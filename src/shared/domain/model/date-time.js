/**
 * value object representing a date and time within the domain
 *
 * @remarks
 * this value object ensures that date-time values are valid and provides
 * consistent formatting and comparison logic, it is immutable
 */
export class DateTime {
    /** @type {Date} */
    #date;

    /**
     * creates a new datetime instance
     *
     * @param {string|Date|number} value - the value to initialize the date with
     * @throws {Error} if the provided value results in an invalid date
     */
    constructor(value) {
        const date = new Date(value);
        if (isNaN(date.getTime())) {
            throw new Error('invalid date-time value');
        }
        this.#date = date;
        Object.freeze(this);
    }

    /**
     * checks if this date-time is in the future relative to the current time
     *
     * @returns {boolean} true if the date-time is in the future
     */
    isFuture() {
        return this.#date > new Date();
    }

    /**
     * formats the date-time for display
     *
     * @param {string} [locale='en-US'] - the locale to use for formatting
     * @param {Intl.DateTimeFormatOptions} [options] - formatting options
     * @returns {string} the formatted date-time string
     */
    format(locale = 'en-US', options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }) {
        return this.#date.toLocaleDateString(locale, options);
    }

    /**
     * returns the underlying date object
     * @returns {Date}
     */
    toDate() {
        return new Date(this.#date.getTime());
    }

    /**
     * returns the iso string representation of the date-time
     * @returns {string}
     */
    toISOString() {
        return this.#date.toISOString();
    }

    /**
     * returns the primitive value of the datetime (the timestamp)
     * @returns {number}
     */
    valueOf() {
        return this.#date.getTime();
    }

    /**
     * static factory method to create a datetime from the current time
     * @returns {DateTime}
     */
    static now() {
        return new DateTime(new Date());
    }
}
