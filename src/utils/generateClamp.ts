import { window, workspace, } from 'vscode';
import { ClampSettings } from '../types/types';
import { calculateClamp } from './calculateClamp';
import { VSCODE_FLUID_FONTS_PATH, ERROR_MESSAGE, SUCCESSFULLY_MESSAGE } from './constans';

export async function generateClamp() {
    const { showInputBox, showErrorMessage, activeTextEditor, showInformationMessage } = window;
    const units = workspace.getConfiguration(VSCODE_FLUID_FONTS_PATH).units;
    const viewportMin = workspace.getConfiguration(VSCODE_FLUID_FONTS_PATH).minViewport;
    const viewportMax = workspace.getConfiguration(VSCODE_FLUID_FONTS_PATH).maxViewport;

    const input = await showInputBox({
        placeHolder: `Enter values (minValue,maxValue) (${units})`,
        validateInput(value) {
            if (!value.length) {
                return 'Input is required';
            }

            const values = value.split(',').map(val => val.trim());
            if (values.length !== 2) {
                return 'Please provide four values separated by commas';
            }

            const numericValues = values.map(val => Number(val));
            if (numericValues.some(val => isNaN(val))) {
                return 'All values must be valid numbers';
            }

            return null;
        }
    });

    if (!input) {
        showErrorMessage(ERROR_MESSAGE);
        return;
    }

    const separatedText=input.split(',');
    const [minValue, maxValue] = separatedText.map(val => Number(val));

    if (activeTextEditor) {
        const position = activeTextEditor.selection.active;

        const clampSettings: ClampSettings = {
            valuesMin: minValue,
            valuesMax: maxValue,
            viewportMin: viewportMin,
            viewportMax: viewportMax
        };

        const result: string = calculateClamp(clampSettings);

        if (!result) {
            showErrorMessage(ERROR_MESSAGE);
            return;
        }

        showInformationMessage(SUCCESSFULLY_MESSAGE);

        activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(position, result);
        });
    }
}
