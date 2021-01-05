import vars from "./vars";

function encode(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const TRANSPARENT_BACKGROUND = encode(
  `<svg width="20" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h20v20h-20z" fill="#d7d7d7"/><path d="m20 20h20v20h-20z" fill="#d7d7d7"/><g fill="#fff"><path d="m20 0h20v20h-20z"/><path d="m0 20h20v20h-20z"/></g></svg>`
);

export const MOVE_ICON = encode(
  `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m2674 2900-23.08 19.23v-15.38h-23.07v23.07h15.38l-19.23 23.08-19.23-23.08h15.38v-23.07h-23.07v15.38l-23.08-19.23 23.08-19.23v15.38h23.07v-23.07h-15.38l19.23-23.08 19.23 23.08h-15.38v23.07h23.07v-15.38z" fill="${vars.colors.white}" fill-rule="evenodd" transform="translate(-2574 -2850)"/></svg>`
);

export const ZOOM_ICON = encode(
  `<svg width="100" height="98.46" viewBox="0 0 100 98.46" xmlns="http://www.w3.org/2000/svg"><path d="m2210.36 2012.7-8.65 8.64-32.57-32.57a36.468 36.468 0 1 1 8.41-8.88zm-63.33-83.71a30.56 30.56 0 1 0 30.57 30.56 30.564 30.564 0 0 0 -30.57-30.56zm0 13.75a16.653 16.653 0 0 0 -9.16 2.75v-6.94a22.909 22.909 0 0 1 32.09 21h-6.12a16.809 16.809 0 0 0 -16.81-16.81z" fill="${vars.colors.white}" fill-rule="evenodd" transform="translate(-2110.34 -1922.88)"/></svg>`
);
