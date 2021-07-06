import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer('0.11.1', (api) => {
  api.registerConnectorClass('below-site-header', 'display-badges', {});
});
