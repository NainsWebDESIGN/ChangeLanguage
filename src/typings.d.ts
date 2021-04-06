/* SystemJS module definition */
declare var module: NodeModule;
declare const _PreSet: PreSet;

interface NodeModule {
  id: string;
}

interface PreSet {
  lang: string;
}