import { createI18n } from 'vue-i18n';
import axios from 'axios';

const calendarFormats: any = {
    calendarHeader: {
        month: 'long',
        weekday: 'long',
        day: 'numeric',
    },
    calendarNav: {
        month: 'long',
        year: 'numeric',
    },
    calendarLabel: {
        year: 'numeric',
        month: 'long',
        weekday: 'long',
        day: 'numeric',
    },
    datePicker: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    },
};
const dateTimeFormats: any = {
    en: calendarFormats,
    de: calendarFormats,
};

import en from '../../../../i18n/en.json';



export const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en },
    dateTimeFormats,
    legacy: true,
    globalInjection: true,
});

const loadedLocales: any = { en };

const setI18nLocale = (locale: string, messages: any) => {
    // legacy mode: i18n.global.locale is a string/property
    // composition mode: i18n.global.locale is a ref
    if (i18n.mode === 'legacy') {
        (i18n.global.locale as any).value = locale; // Vue I18n v9 often treats locale as a ref even in legacy mode depending on config, but safe cast
        i18n.global.locale = locale as any;
    } else {
        (i18n.global.locale as any).value = locale;
    }

    axios.defaults.headers.common['Accept-Language'] = locale;

    const html = document.querySelector('html');
    if (html) {
        html.setAttribute('lang', locale.substr(0, 2));
    }

    i18n.global.setLocaleMessage(locale, messages);
};

export const loadLocaleAsync = async (locale: string) => {
    let messages = loadedLocales[locale];

    // Check current locale. In legacy mode i18n.global.locale is the value.
    const currentLocale = i18n.mode === 'legacy'
        ? (i18n.global.locale as unknown as string)
        : (i18n.global.locale as any).value;

    if (currentLocale !== locale && !messages) {
        const res = await axios.get(`/i18n/${locale}.json`);

        messages = res.data;
        loadedLocales[locale] = messages;
    }

    setI18nLocale(locale, messages);
};
