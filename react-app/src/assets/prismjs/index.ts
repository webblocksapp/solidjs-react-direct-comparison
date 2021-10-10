import PrismLib from 'prismjs';
import addLineNumbers from './plugins/line-numbers/line-numbers';
import './plugins/line-numbers/line-numbers.css';

type PrismType = typeof PrismLib & {
  addLineNumbers: (html: string) => string;
};

const Prism = PrismLib as PrismType;
Prism.addLineNumbers = addLineNumbers;

export default Prism;
