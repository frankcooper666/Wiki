import * as util from './util';
import * as dom from './util/dom';
import { Compiler } from './render/compiler';
import { slugify } from './render/slugify';
import { get } from './fetch/ajax';
import prism from 'prismjs';
import marked from 'marked';

export default function() {
  window.Docsify = {
    util,
    dom,
    get,
    slugify,
    version: '__VERSION__',
  };
  window.DocsifyCompiler = Compiler;
  window.marked = marked;
  window.Prism = prism;
}
