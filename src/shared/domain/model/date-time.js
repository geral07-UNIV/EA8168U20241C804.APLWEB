/**
 * immutable value object representing a date and time within the domain
 */
export class DateTime {
    #date;

    constructor(value) {
        const date = new Date(value);
        if (isNaN(date.getTime())) {
            throw new Error('invalid date-time value');
        }
        this.#date = date;
        Object.freeze(this);
    }

    format(locale = 'en-US', options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }) {
        return this.#date.toLocaleDateString(locale, options);
    }

    toDate() {
        return new Date(this.#date.getTime());
    }

    toISOString() {
        return this.#date.toISOString();
    }

    valueOf() {
        return this.#date.getTime();
    }

    static now() {
        return new DateTime(new Date());
    }
}
