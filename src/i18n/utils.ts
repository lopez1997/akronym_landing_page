import type { GetStaticPaths, GetStaticPathsOptions } from 'astro';
import { getCollection, getEntry } from 'astro:content';
import { languages, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof languages[typeof defaultLang]) {
    return languages[lang][key] || languages[defaultLang][key];
  }
}

export function getRelativeLocaleUrl(lang: string, path: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getAbsoluteLocaleUrl(lang: string, path: string) {
  const baseUrl = import.meta.env.SITE || 'http://localhost:4321';
  return `${baseUrl}${getRelativeLocaleUrl(lang, path)}`;
}

export function getLocaleUrlList(path: string) {
  return Object.keys(languages).map((lang) => ({
    lang,
    url: getRelativeLocaleUrl(lang, path),
  }));
}

export function createGetStaticPaths(options: { getPaths: () => Promise<any[]> }) {
  return (async () => {
    const paths = await options.getPaths();
    return paths.flatMap((path: any) => {
      return Object.keys(languages).map((lang) => {
        const { params, ...rest } = path;
        return {
          ...rest,
          params: {
            ...params,
            lang,
          },
        };
      });
    });
  }) satisfies GetStaticPaths;
} 