import { ClampSettings } from "../types/types";
import { workspace } from "vscode";
import { convertations } from './constans';

const { remToPx, pxToRem } = convertations;

function calculateClamp(settings: ClampSettings): string {
    const { valuesMin, valuesMax, viewportMin, viewportMax } = settings;
    const units = workspace.getConfiguration("fluid-fonts").units;

    const isRem = units === "rem";
    const minValuePx = isRem ? remToPx(valuesMin) : valuesMin;
    const maxValuePx = isRem ? remToPx(valuesMax) : valuesMax;

    const isPixel = units === "px";
    const minValueRem = isPixel ? pxToRem(valuesMin) : valuesMin;
    const maxValueRem = isPixel ? pxToRem(valuesMax) : valuesMax;

    const variablePart = (maxValuePx - minValuePx) / (viewportMax - viewportMin);
    const constant = ((maxValuePx - viewportMax * variablePart) / 16).toFixed(4);

    const vw = (100 * variablePart).toFixed(4);

    return `clamp(${minValueRem}rem, ${constant ? `${constant}rem + ` : ""}${vw}vw, ${maxValueRem}rem)`;
}

export { calculateClamp };