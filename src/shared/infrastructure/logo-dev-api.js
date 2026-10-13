const logoApiUrl    = import.meta.env.VITE_LOGO_API_URL;
const apiKey        = import.meta.env.VITE_LOGO_PUBLISHABLE_API_KEY;

/**
 * infrastructure helper for building logo.dev image urls from a company domain
 */
export class LogoDevApi {
    getUrlToLogo = domain => `${logoApiUrl}/${domain}?token=${apiKey}`;
}
