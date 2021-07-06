import { apiInitializer } from "discourse/lib/api";
import { ajax } from 'discourse/lib/ajax';

export default apiInitializer("0.11.1", api => {
  api.registerConnectorClass('below-site-header', 'notification-banner', {
    setupComponent(args, component) {
      ajax('/badges.json').then((badgeData) => {
        let badges = badgeData.badges;
        component.set('badges', badges);
      });
    },
  });
});
