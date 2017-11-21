import React from 'react';
import {NavigationMotion} from 'navigation-react-mobile';
import ZoomShared from './ZoomShared';

export default ({stateNavigator}) => (
  <NavigationMotion
    unmountedStyle={{opacity: 0}}
    mountedStyle={{opacity: 1}}
    crumbStyle={{opacity: 0}}
    sharedElementMotion={props => <ZoomShared {...props} />}
    stateNavigator={stateNavigator}>
    {({opacity}, scene, key, active) => (
      <div key={key}
        className="scene"
        style={{
          overflow: active ? 'auto' : 'hidden',
          opacity
        }}>
        {scene}
      </div>
    )}
  </NavigationMotion>
);