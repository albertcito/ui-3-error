import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export default defineNuxtPlugin(() => {
  // when app is created in browser, restore SSR state from nuxt payload
  if (import.meta.client) {
    dayjs.extend(localizedFormat);
    dayjs.extend(advancedFormat);
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault(dayjs.tz.guess());
    dayjs().format('L LT');
  }
});
