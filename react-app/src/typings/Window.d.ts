import { HLJSApi } from '@Interfaces';

declare global {
  interface Window {
    hljs: HLJSApi;
  }
}
