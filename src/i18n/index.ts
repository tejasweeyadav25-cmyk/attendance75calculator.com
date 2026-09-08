import type { Translations } from './types';
import en from './translations/en';
import es from './translations/es';
import fr from './translations/fr';
import { defaultLocale } from './locales';

const dictionaries: Record<string, Translations> = { en, es, fr };

export function getTranslations(lang: string): Translations {
	return dictionaries[lang] ?? dictionaries[defaultLocale];
}

export type { Translations } from './types';
export * from './locales';
