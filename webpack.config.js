
import { ProvidePlugin } from 'webpack';

export const plugins = [
  new ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }),
];
