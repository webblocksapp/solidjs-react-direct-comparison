import React, { useEffect, useState } from 'react';
import { CodeFile } from '@Types';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';
import './styles.css';

function withCodeView<TProps>(Component: React.FC<TProps>, files: CodeFile[]) {
  const ComponentWithCodeView: React.FC<TProps> = ({ ...props }) => {
    const [codeFiles, setCodeFiles] = useState<CodeFile[]>([]);

    const highlightCodes = () => {
      const items: CodeFile[] = [];

      files.forEach((file) => {
        items.push({
          ...file,
          code: hljs.highlight(file.code, { language: file.language }).value,
        });
      });

      setCodeFiles(items);
    };

    useEffect(() => {
      highlightCodes();
    }, []);

    return (
      <div className="with-code-view">
        <div>
          <Component {...props} />
        </div>
        <div>
          {codeFiles.map((codeFile, i) => (
            <pre className="h-100" key={i}>
              <code
                className="hljs h-100"
                dangerouslySetInnerHTML={{ __html: codeFile.code }}
              ></code>
            </pre>
          ))}
        </div>
      </div>
    );
  };

  return ComponentWithCodeView;
}

export default withCodeView;
