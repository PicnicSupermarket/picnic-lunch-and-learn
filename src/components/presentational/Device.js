const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};
// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = css => `
      @media (max-width: ${sizes[label] / 16}em) {
        ${css}
      }
    `;
  return acc;
}, {});
