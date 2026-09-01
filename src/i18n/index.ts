import type { Translations } from './types';
import en from './translations/en';
import es from './translations/es';
import ja from './translations/ja';
import fr from './translations/fr';
import de from './translations/de';
import pt from './translations/pt';
import ko from './translations/ko';
import it from './translations/it';
import { defaultLocale } from './locales';

const dictionaries: Record<string, Translations> = { en, es, ja, fr, de, pt, ko, it };

export function getTranslations(lang: string): Translations {
	return dictionaries[lang] ?? dictionaries[defaultLocale];
}

export type { Translations } from './types';
export * from './locales';
