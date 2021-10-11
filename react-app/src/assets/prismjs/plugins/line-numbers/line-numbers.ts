const addLineNumbers = (html: string) => {
  const htmlStrings = html.split(/\n/);

  const tempContainer = document.createElement('div');
  const lineOfCodeWrapper = document.createElement('span');
  const lineNumberWrapper = document.createElement('span');
  const codeWrapper = document.createElement('span');

  lineOfCodeWrapper.className = 'line-of-code';
  lineNumberWrapper.className = 'line-numbers';
  codeWrapper.className = 'code';

  htmlStrings.forEach((htmlString, i) => {
    tempContainer.innerHTML = '';
    lineOfCodeWrapper.innerHTML = '';
    lineNumberWrapper.innerHTML = '';
    codeWrapper.innerHTML = htmlString;

    lineOfCodeWrapper.appendChild(lineNumberWrapper);
    lineOfCodeWrapper.appendChild(codeWrapper);
    tempContainer.appendChild(lineOfCodeWrapper);

    htmlStrings[i] = tempContainer.innerHTML;
  });

  return htmlStrings.join('\n');
};

export default addLineNumbers;
