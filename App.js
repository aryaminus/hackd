import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import { store } from './app/config/store';
import { registerScreens } from './app/config/router';
import { hackd } from './app/config/router';

registerScreens(store, Provider);

persistStore(store, null, () => {
  registerScreens(store, Provider);

  Navigation.startTabBasedApp({
    tabs: hackd,
  });
});
