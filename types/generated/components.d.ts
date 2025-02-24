import type { Attribute, Schema } from '@strapi/strapi';

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    description: '';
    displayName: 'menuLink';
    icon: 'bulletList';
  };
  attributes: {
    link: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 2048;
        minLength: 1;
      }>;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.menu-link': MenuMenuLink;
    }
  }
}
