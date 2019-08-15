import React, { FC } from 'react';
// import { Tooltip } from '@grafana/ui';

interface Props {
  appName: string;
  buildVersion: string;
}

export const Footer: FC<Props> = React.memo(
  ({ appName, buildVersion }) => {
    return (
      <footer className="footer">
        <div className="text-center">
          <ul>
            <li>
              <a href="https://grafana.com" target="_blank">
                {appName}
              </a>{' '}
              <span>
                v{buildVersion}
              </span>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
);

export default Footer;
