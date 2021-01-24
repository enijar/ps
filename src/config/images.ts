import vars from "./vars";

function encode(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const TRANSPARENT_BACKGROUND = encode(
  `<svg width="20" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h20v20h-20z" fill="#d7d7d7"/><path d="m20 20h20v20h-20z" fill="#d7d7d7"/><g fill="${vars.colors.white}"><path d="m20 0h20v20h-20z"/><path d="m0 20h20v20h-20z"/></g></svg>`
);

export const MOVE_ICON = encode(
  `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m2674 2900-23.08 19.23v-15.38h-23.07v23.07h15.38l-19.23 23.08-19.23-23.08h15.38v-23.07h-23.07v15.38l-23.08-19.23 23.08-19.23v15.38h23.07v-23.07h-15.38l19.23-23.08 19.23 23.08h-15.38v23.07h23.07v-15.38z" fill="${vars.colors.white}" fill-rule="evenodd" transform="translate(-2574 -2850)"/></svg>`
);

export const ZOOM_ICON = encode(
  `<svg width="100" height="98.46" viewBox="0 0 100 98.46" xmlns="http://www.w3.org/2000/svg"><path d="m2210.36 2012.7-8.65 8.64-32.57-32.57a36.468 36.468 0 1 1 8.41-8.88zm-63.33-83.71a30.56 30.56 0 1 0 30.57 30.56 30.564 30.564 0 0 0 -30.57-30.56zm0 13.75a16.653 16.653 0 0 0 -9.16 2.75v-6.94a22.909 22.909 0 0 1 32.09 21h-6.12a16.809 16.809 0 0 0 -16.81-16.81z" fill="${vars.colors.white}" fill-rule="evenodd" transform="translate(-2110.34 -1922.88)"/></svg>`
);

export const BRUSH_ICON = encode(
  `<svg width="99.93" height="102.85" viewBox="0 0 99.93 102.85" xmlns="http://www.w3.org/2000/svg"><path d="m2628.24 1289.83s-2.56-8.1-13.65-10.23c10.6-12.15 50.94-60.57 58-54.58 8.92 7.55-44.35 64.81-44.35 64.81zm-3.41 10.24s1.1 27.29-51.18 27.29c0 0 10.24-7.01 10.24-13.65 0-6.82 6.65-30.7 23.88-30.7 17.06 0 17.06 17.06 17.06 17.06z" fill="${vars.colors.white}" fill-rule="evenodd" transform="translate(-2573.66 -1224.53)"/></svg>`
);

export const COLOR_ICON = encode(
  `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m2674 2022h-70v-30h-30v-70h70v30h30zm-10-60h-20v30h-30v20h50z" fill="${vars.colors.white}" fill-rule="evenodd" transform="translate(-2574 -1922)"/></svg>`
);

export const CROP_ICON = encode(
  `<svg width="100" height="89.188" viewBox="0 0 100 89.188" xmlns="http://www.w3.org/2000/svg"><path d="m1278.45 838.175h-12.17v-8.108h12.17a4.054 4.054 0 0 1 0 8.108zm-21.63 18.919a4.05 4.05 0 0 1 -4.05-4.054v-60.81h-31.08a4.055 4.055 0 1 1 0-8.109h39.19v68.919a4.058 4.058 0 0 1 -4.06 4.054zm-13.51-27.027a4.054 4.054 0 0 1 0 8.108h-39.19v-66.216a4.055 4.055 0 0 1 8.11 0v58.108zm-60.81-41.891a4.05 4.05 0 0 1 4.05-4.055h12.17v8.109h-12.17a4.051 4.051 0 0 1 -4.05-4.054z" fill="${vars.colors.white}" fill-rule="evenodd" transform="translate(-1182.5 -767.906)"/></svg>`
);

export const EYE_ICON = encode(
  `<svg width="99.3" height="66.2" viewBox="0 0 99.3 66.2" xmlns="http://www.w3.org/2000/svg"><g fill="${vars.colors.white}"><path d="m49.7 0c-32.7 0-49.7 33.1-49.7 33.1s18.5 33.1 49.7 33.1c33.1 0 49.7-33.1 49.7-33.1s-17.9-33.1-49.7-33.1zm0 53.8c-13.7 0-24.8-8.6-24.8-20.7 0-16.4 11.1-24.8 24.8-24.8s24.8 8.2 24.8 24.8c0 12.3-11.1 20.7-24.8 20.7z"/><path d="m62.1 29c-4.6 0-8.3-3.7-8.3-8.3 0-1.4.4-2.7 1-3.8-1-.2-2-.3-3-.3-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5 14.5-6.5 14.5-14.5c0-1-.1-2.1-.3-3-1.3.5-2.6.9-3.9.9z"/></g></svg>`
);

const cursorRatio = 89.188 / 100;
const cursorScale = 0.5;
const cursorWidth = 100 * cursorScale;
const cursorHeight = cursorWidth * cursorScale * cursorRatio;
export const CROP_ICON_CURSOR = encode(
  `<svg width="${cursorWidth}" height="${cursorHeight}" viewBox="0 0 100 89.188" xmlns="http://www.w3.org/2000/svg"><path d="m1278.45 838.175h-12.17v-8.108h12.17a4.054 4.054 0 0 1 0 8.108zm-21.63 18.919a4.05 4.05 0 0 1 -4.05-4.054v-60.81h-31.08a4.055 4.055 0 1 1 0-8.109h39.19v68.919a4.058 4.058 0 0 1 -4.06 4.054zm-13.51-27.027a4.054 4.054 0 0 1 0 8.108h-39.19v-66.216a4.055 4.055 0 0 1 8.11 0v58.108zm-60.81-41.891a4.05 4.05 0 0 1 4.05-4.055h12.17v8.109h-12.17a4.051 4.051 0 0 1 -4.05-4.054z" fill="${vars.colors.white}" fill-rule="evenodd" transform="translate(-1182.5 -767.906)"/></svg>`
);
