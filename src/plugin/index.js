import { paramsToUrl } from '@utils';

const PLUGIN_NAME = 'myPlugin';
const CUSTOM_CARD = 'entry';

let pluginUrl = `plugin://${PLUGIN_NAME}/${CUSTOM_CARD}?`;

export const getPluginEntryUrl = params => paramsToUrl(pluginUrl, params)

