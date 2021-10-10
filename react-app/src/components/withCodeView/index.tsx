import React, { useEffect, useState, useRef } from 'react';
import { CodeFile } from '@Types';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import './styles.css';

function withCodeView<TProps>(Component: React.FC<TProps>, files: CodeFile[]) {
  const ComponentWithCodeView: React.FC<TProps> = ({ ...props }) => {
    const [codeFiles, setCodeFiles] = useState<CodeFile[]>([]);
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const previewContainerRef = useRef<HTMLDivElement>(null);

    const highlightCodes = async () => {
      const items: CodeFile[] = [];

      files.forEach((file) => {
        items.push({
          ...file,
          code: Prism.highlight(
            file.code,
            Prism.languages[file.language],
            file.language
          ),
        });
      });

      setCodeFiles(items);
    };

    useEffect(() => {
      highlightCodes();
    }, []);

    return (
      <div className="with-code-view">
        <div
          className="preview-section shadow-sm p-3"
          ref={previewContainerRef}
        >
          {' '}
          <Component {...props} />
        </div>
        <div className="code-section bg-light">
          <ul className="nav nav-tabs">
            {codeFiles.map((codeFile, i) => (
              <li className="nav-item" key={i}>
                <span
                  className={`nav-link cursor-pointer 
                  ${selectedTab === i && 'active'} 
                  ${selectedTab !== i && 'text-secondary'}`}
                  onClick={() => setSelectedTab(i)}
                >
                  {codeFile.title}
                </span>
              </li>
            ))}
          </ul>
          {codeFiles.map(
            (codeFile, i) =>
              selectedTab === i && (
                <pre
                  className={`language-${codeFile.language} m-0 border-0 rounded-0`}
                  key={i}
                >
                  <code
                    className={`language-${codeFile.language} h-100`}
                    dangerouslySetInnerHTML={{ __html: codeFile.code }}
                  ></code>
                </pre>
              )
          )}
        </div>
      </div>
    );
  };

  return ComponentWithCodeView;
}

export default withCodeView;
