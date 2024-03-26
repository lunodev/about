export const LANG_EN: LANG_CODE = 'en';
export const LANG_ES: LANG_CODE = 'es';
export const LANG_IT: LANG_CODE = 'it';

export type LANG_CODE = 'en' | 'es' | 'it';
export type LANGUAGE = {
    code: LANG_CODE,
    name: string,
}
export const LANG_CODES = [
    LANG_EN,
    LANG_ES,
    LANG_IT,
];
export const LANGUAGES: LANGUAGE[] = [
    {code: LANG_EN, name: "English"},
    {code: LANG_ES, name: "Spanish"},
    {code: LANG_IT, name: "Italian"},
];
