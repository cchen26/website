import React, { FC } from "react";

interface Props {
  containerId: string;
}

const GoogleTagManagerNoScript: FC<Props> = ({ containerId }) => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${containerId}`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
  </noscript>
);

export default GoogleTagManagerNoScript;
