import { commands, ExtensionContext } from 'vscode';
import { generateClamp } from './utils/generateClamp';
import { VSCODE_FLUID_FONTS_PATH } from './utils/constans';

export function activate(context: ExtensionContext): void {
	console.log('Congratulations, your extension "fluid-fonts" is now active!');
	const disposable = commands.registerCommand(
		`${VSCODE_FLUID_FONTS_PATH}.generateClamp`,
		generateClamp
	);

	context.subscriptions.push(disposable);
}