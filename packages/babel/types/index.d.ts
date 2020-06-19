import { Plugin } from 'rollup';
import { FilterPattern } from '@rollup/pluginutils';
import { TransformOptions } from '@babel/core';

interface RollupBabelOptions extends Omit<TransformOptions, 'include' | 'exclude'> {
  /**
   * A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should operate on. When relying on Babel configuration files you cannot include files already excluded there.
   * @default undefined;
   */
  include?: FilterPattern;
  /**
   * A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. When relaying on Babel configuration files you can only exclude additional files with this option, you cannot override what you have configured for Babel itself.
   * @default undefined;
   */
  exclude?: FilterPattern;
  /**
   * An array of file extensions that Babel should transpile. If you want to transpile TypeScript files with this plugin it's essential to include .ts and .tsx in this option.
   * @default ['.js', '.jsx', '.es6', '.es', '.mjs']
   */
  extensions?: string[];
  /**
   * It is recommended to configure this option explicitly (even if with its default value) so an informed decision is taken on how those babel helpers are inserted into the code.
   * @default 'bundled'
   */
  babelHelpers?: 'bundled' | 'runtime' | 'inline' | 'extends';
  /**
   * Before transpiling your input files this plugin also transpile a short piece of code for each input file. This is used to validate some misconfiguration errors, but for sufficiently big projects it can slow your build times so if you are confident about your configuration then you might disable those checks with this option.
   * @default false
   */
  skipPreflightCheck?: boolean;
}

/**
 * A Rollup plugin for seamless integration between Rollup and Babel.
 * @param options - Plugin options.
 * @returns Plugin instance.
 */
export default function babel(options?: RollupBabelOptions): Plugin;
