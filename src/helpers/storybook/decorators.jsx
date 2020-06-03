import React from 'react';

import '../../components/common/Layout.module.scss';

// NOTE: for Link component of gatsby
// eslint-disable-next-line
window.__PATH_PREFIX__ = '';

const styles = {
  background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAF0lEQVR4AWP4DwVvoWCgBGAMmMQACQAAuK72AWHjK4wAAAAASUVORK5CYII=")',
  minHeight: '100vh',
  width: '100vw',
};

const Decorator = story => (
  <div style={styles}>
    {story()}
  </div>
);

export default Decorator;
