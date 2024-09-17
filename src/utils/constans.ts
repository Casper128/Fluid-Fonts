export const VSCODE_FLUID_FONTS_PATH = "fluid-fonts";
export const ERROR_MESSAGE = "Please provide valid input";
export const SUCCESSFULLY_MESSAGE = "Please provide valid input";

const ROOT_FONT_SIZE = 16;

export const convertations = {
    pxToRem: (value: number): number => (1 / ROOT_FONT_SIZE) * value,

    remToPx: (value: number): number => value / (1 / ROOT_FONT_SIZE)
};
