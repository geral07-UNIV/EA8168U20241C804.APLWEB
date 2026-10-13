const logoApiUrl = import.meta.env.VITE_LOGO_API_URL;
const apiKey = import.meta.env.VITE_LOGO_PUBLISHABLE_API_KEY;

/**
 * infrastructure helper for building logo.dev image urls
 *
 * @remarks
 * encapsulates the logic for constructing urls to retrieve source logos
 * from the logo.dev external service
 */
export class LogoDevApi {
    /**
     * constructs a logo url based on the company website host
     *
     * @param {{url: import('@/shared/domain/model/url.js').Url}} source - an object containing the website url of the source
     * @returns {string} the fully qualified url to the source's logo image
     */
    getUrlToLogo = source => `${logoApiUrl}/${new URL(source.url.toString()).host}?token=${apiKey}`;
}