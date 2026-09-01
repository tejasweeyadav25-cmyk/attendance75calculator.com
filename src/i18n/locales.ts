export interface LocaleInfo {
	/** Astro/BCP-47 locale code, also the URL path segment (except default) */
	code: string;
	/** hreflang value */
	hreflang: string;
	/** Native-language display name, used in the language switcher */
	nativeName: string;
	/** og:locale value */
	ogLocale: string;
}

export const defaultLocale = 'en';

export const locales: LocaleInfo[] = [
	{ code: 'en', hreflang: 'en', nativeName: 'English', ogLocale: 'en_US' },
	{ code: 'es', hreflang: 'es', nativeName: 'Español', ogLocale: 'es_ES' },
	{ code: 'ja', hreflang: 'ja', nativeName: '日本語', ogLocale: 'ja_JP' },
	{ code: 'fr', hreflang: 'fr', nativeName: 'Français', ogLocale: 'fr_FR' },
	{ code: 'de', hreflang: 'de', nativeName: 'Deutsch', ogLocale: 'de_DE' },
	{ code: 'pt', hreflang: 'pt', nativeName: 'Português', ogLocale: 'pt_PT' },
	{ code: 'ko', hreflang: 'ko', nativeName: '한국어', ogLocale: 'ko_KR' },
	{ code: 'it', hreflang: 'it', nativeName: 'Italiano', ogLocale: 'it_IT' },
];

export const localeCodes = locales.map((l) => l.code);

/** Path prefix for a locale's homepage: '' for the default locale, '/es' etc. otherwise */
export function localePrefix(code: string): string {
	return code === defaultLocale ? '' : `/${code}`;
}

/** Absolute homepage URL for a locale, including trailing slash */
export function localeHomeUrl(code: string, siteUrl: string): string {
	return code === defaultLocale ? `${siteUrl}/` : `${siteUrl}/${code}/`;
}

export function getLocaleInfo(code: string): LocaleInfo {
	return locales.find((l) => l.code === code) ?? locales[0];
}
