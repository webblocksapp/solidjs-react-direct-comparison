import { HLJSApi as IHLJSApi } from 'highlight.js';

export interface HLJSApi extends IHLJSApi {
  lineNumbersValue: (
    value: string,
    options?: { singleLine?: boolean; startFrom?: string }
  ) => string;
}
