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
          title: <FormattedMessage id="account-profile" />,
          type: 'collapse',
          children: [
            {
              id: 'profile3',
              title: (
                <>
                  <FormattedMessage id="Member Profile" />
                </>
              ),
              type: 'item',
              url: '/app/user/account-profile/profile3'
            }
          ]
        }
      ]
    },


  ]
};

export default application;
