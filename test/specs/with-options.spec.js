const { transform } = require("babel-core");

const FIXTURE = `
import test from './test/fixtures/icons.svg';
`;

const expectedWithSVGOOptions =
  'var test = \'<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg width="58" height="58" xmlns="http://www.w3.org/2000/svg"><g id="test-icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="test-logo"><circle id="test-shadow" fill="#000" opacity=".07" cx="31" cy="32" r="24"/><circle id="test-circle" fill="#FFF" cx="29" cy="29" r="24"/><path d="M40.525 42.956c-4.82 4.158-11.59 5.478-17.665 3.439-6.078-2.04-10.577-7.136-11.75-13.306-.136-.724-.85-1.2-1.591-1.067-.743.133-1.234.827-1.096 1.55 1.35 7.112 6.541 12.99 13.547 15.34 1.6.539 3.24.872 4.888 1.012 5.566.473 11.191-1.275 15.482-4.975a1.307 1.307 0 00.116-1.878 1.393 1.393 0 00-1.93-.115" id="test-mouth" fill="#29AB02"/><path d="M17.338 30.34c1.186 0 2.147-.96 2.147-2.144a2.147 2.147 0 00-2.147-2.146 2.147 2.147 0 100 4.29z" id="test-left-eye" fill="#37AB2F"/><path d="M40.4 30.34c1.185 0 2.147-.96 2.147-2.144a2.147 2.147 0 00-2.148-2.146 2.147 2.147 0 100 4.29z" id="test-right-eye" fill="#37AB2F"/><path d="M30.22 29.94h-6.463c-.885 0-1.599-.739-1.599-1.643 0-.903.714-1.64 1.6-1.64l6.462.012-1.99-2.062a1.672 1.672 0 010-2.31 1.574 1.574 0 012.272 0l4.684 4.843a1.666 1.666 0 010 2.313l-4.683 4.845a1.568 1.568 0 01-1.137.485c-.426 0-.83-.168-1.136-.484a1.675 1.675 0 010-2.312l1.99-2.048z" id="test-arrow" fill="#37AB2F"/></g></g></svg>\';';

const expectedRaw =
  'var test = \'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\\n<svg width="58px" height="58px" viewBox="0 0 58 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\\n    <!-- Generator: Sketch 40.2 (33826) - http://www.bohemiancoding.com/sketch -->\\n    <title>icons</title>\\n    <desc>Created with Sketch.</desc>\\n    <defs></defs>\\n    <g id="test-icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\\n        <g id="test-logo">\\n            <circle id="test-shadow" fill="#000000" opacity="0.07" cx="31" cy="32" r="24"></circle>\\n            <circle id="test-circle" fill="#FFFFFF" cx="29" cy="29" r="24"></circle>\\n            <path d="M40.5253231,42.955661 C35.7046478,47.1136294 28.9351343,48.4336591 22.8597981,46.3947517 C16.7818908,44.3558443 12.2825939,39.2585759 11.1102057,33.0892529 C10.9739413,32.3653657 10.2591958,31.8894536 9.5187401,32.0222081 C8.77571337,32.1549625 8.28464725,32.8487921 8.4234827,33.5726794 C9.77327176,40.6838072 14.9641748,46.5625733 21.9702228,48.9120759 C23.5694015,49.450608 25.2097165,49.7837464 26.8577447,49.9240152 C32.4240177,50.3974225 38.0494243,48.6490719 42.340468,44.949482 C42.9035228,44.4610459 42.9575144,43.6219379 42.4561642,43.0708818 C41.9548139,42.5198258 41.0909489,42.467225 40.5253231,42.955661" id="test-mouth" fill="#29AB02"></path>\\n            <path d="M17.3376979,30.3407821 C18.5237867,30.3407821 19.4854517,29.3804032 19.4854517,28.1955307 C19.4854517,27.0106582 18.5237867,26.0502793 17.3376979,26.0502793 C16.1516091,26.0502793 15.1899441,27.0106582 15.1899441,28.1955307 C15.1899441,29.3804032 16.1516091,30.3407821 17.3376979,30.3407821 L17.3376979,30.3407821 Z" id="test-left-eye" fill="#37AB2F"></path>\\n            <path d="M40.3991504,30.3407821 C41.5852393,30.3407821 42.5469042,29.3804032 42.5469042,28.1955307 C42.5469042,27.0106582 41.5852393,26.0502793 40.3991504,26.0502793 C39.2130616,26.0502793 38.2513966,27.0106582 38.2513966,28.1955307 C38.2513966,29.3804032 39.2130616,30.3407821 40.3991504,30.3407821 L40.3991504,30.3407821 Z" id="test-right-eye" fill="#37AB2F"></path>\\n            <path d="M30.2199993,29.93933 L23.7573096,29.93933 C22.8718633,29.93933 22.1583799,29.2013753 22.1583799,28.2967542 C22.1583799,27.3942392 22.8723684,26.6567949 23.7573096,26.6567949 L30.2202638,26.6686205 L28.2306636,24.6069679 C27.6129756,23.9689877 27.6129756,22.9376215 28.2300324,22.2969737 C28.8531322,21.6500521 29.8738785,21.6510949 30.5019829,22.296475 L35.1857978,27.1401221 C35.4842922,27.4484225 35.651676,27.8652716 35.651676,28.2967542 C35.651676,28.7299808 35.4848888,29.1444696 35.1860132,29.4531636 L30.5030903,34.2984995 C30.2011727,34.613584 29.7920741,34.7831319 29.3662484,34.7831319 C28.9399328,34.7831319 28.5357511,34.614915 28.2300324,34.2991512 C27.6130807,33.6586127 27.6130807,32.6277326 28.2303888,31.9868246 L30.2199993,29.93933 Z" id="test-arrow" fill="#37AB2F"></path>\\n        </g>\\n    </g>\\n</svg>\\n\';';

const expectedWithoutNamesapce =
  'var test = \'<svg width="58" height="58" xmlns="http://www.w3.org/2000/svg"><g id="icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="logo"><circle id="shadow" fill="#000" opacity=".07" cx="31" cy="32" r="24"/><circle id="circle" fill="#FFF" cx="29" cy="29" r="24"/><path d="M40.525 42.956c-4.82 4.158-11.59 5.478-17.665 3.439-6.078-2.04-10.577-7.136-11.75-13.306-.136-.724-.85-1.2-1.591-1.067-.743.133-1.234.827-1.096 1.55 1.35 7.112 6.541 12.99 13.547 15.34 1.6.539 3.24.872 4.888 1.012 5.566.473 11.191-1.275 15.482-4.975a1.307 1.307 0 00.116-1.878 1.393 1.393 0 00-1.93-.115" id="mouth" fill="#29AB02"/><path d="M17.338 30.34c1.186 0 2.147-.96 2.147-2.144a2.147 2.147 0 00-2.147-2.146 2.147 2.147 0 100 4.29z" id="left-eye" fill="#37AB2F"/><path d="M40.4 30.34c1.185 0 2.147-.96 2.147-2.144a2.147 2.147 0 00-2.148-2.146 2.147 2.147 0 100 4.29z" id="right-eye" fill="#37AB2F"/><path d="M30.22 29.94h-6.463c-.885 0-1.599-.739-1.599-1.643 0-.903.714-1.64 1.6-1.64l6.462.012-1.99-2.062a1.672 1.672 0 010-2.31 1.574 1.574 0 012.272 0l4.684 4.843a1.666 1.666 0 010 2.313l-4.683 4.845a1.568 1.568 0 01-1.137.485c-.426 0-.83-.168-1.136-.484a1.675 1.675 0 010-2.312l1.99-2.048z" id="arrow" fill="#37AB2F"/></g></g></svg>\';';

describe("with options", () => {
  it('supports "ignorePattern" argument', () => {
    const { code } = transform(FIXTURE, {
      plugins: [["./lib/index.js", { ignorePattern: "fixtures" }]],
    });

    expect(code).toEqual(`
import test from './test/fixtures/icons.svg';`);
  });

  it("supports SVGO options", () => {
    const { code } = transform(FIXTURE, {
      plugins: [
        [
          "./lib/index.js",
          { svgo: { plugins: [{ removeXMLProcInst: false }] } },
        ],
      ],
    });

    expect(code).toBe(expectedWithSVGOOptions);
  });

  it("supports disabling SVGO", () => {
    const { code } = transform(FIXTURE, {
      plugins: [["./lib/index.js", { disableSVGO: true }]],
    });

    expect(code).toBe(expectedRaw);
  });

  it("supports disabling namespacing of IDs", () => {
    const { code } = transform(FIXTURE, {
      plugins: [["./lib/index.js", { disableNamespaceIds: true }]],
    });

    expect(code).toBe(expectedWithoutNamesapce);
  });
});
