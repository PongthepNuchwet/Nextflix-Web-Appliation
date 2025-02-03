import 'server-only'
import { Locale } from './i18n-config'
import { DictionaryType } from '@/types/dictionaries'

const dictionaries = {
    'en': () => import('@/dictionaries/en.json').then((module) => module.default),
    'th': () => import('@/dictionaries/th.json').then((module) => module.default),
}


export const getDictionary = async (locale: Locale): Promise<DictionaryType> =>
    dictionaries[locale]()