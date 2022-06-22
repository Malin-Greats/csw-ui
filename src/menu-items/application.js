// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = {
  IconUserCheck,
  IconBasket,
  IconMessages,
  IconLayoutKanban,
  IconMail,
  IconCalendar,
  IconNfc
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
  id: 'application',
  title: <FormattedMessage id="application" />,
  type: 'group',
  children: [
    {
      id: 'users',
      title: <FormattedMessage id="Member Account" />,
      type: 'collapse',
      icon: icons.IconUserCheck,
      children: [
        {
          id: 'account-profile',
          title: <FormattedMessage id="Basic Profile" />,
          type: 'item',
          url: '/app/user/account-profile/profile3',
        },         {
          id: 'account-profile',
          title: <FormattedMessage id="Academic Profile" />,
          type: 'item',
          url: '/app/user/account-profile/profile3',
        },         {
          id: 'account-profile',
          title: <FormattedMessage id="Professional Profile" />,
          type: 'item',
          url: '/app/user/account-profile/profile3',
        },         {
          id: 'account-profile',
          title: <FormattedMessage id="Work Experience" />,
          type: 'item',
          url: '/app/user/account-profile/profile3',
          query: {
            index:'3'
          }
        }
      ]
    },


  ]
};

export default application;
