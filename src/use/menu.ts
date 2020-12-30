import { ref } from "vue"

export default function useMenu() {
  const menu_items = ref([
    {
      page: 'Dashboard',
      text: 'Dashboard',
      icon: 'bank',
      class: '',
    },
    {
      page: 'Icons',
      text: 'Icons',
      icon: 'diamond',
      class: '',
    },
    {
      page: 'Maps',
      text: 'Maps',
      icon: 'pin-3',
      class: '',
    },
    {
      page: 'Notifications',
      text: 'Notifications',
      icon: 'bell-55',
      class: '',
    },
    {
      page: 'User',
      text: 'User Profile',
      icon: 'single-02',
      class: '',
    },
    {
      page: 'Tables',
      text: 'Table List',
      icon: 'tile-56',
      class: '',
    },
    {
      page: 'Typography',
      text: 'Typography',
      icon: 'caps-small',
      class: 'active-pro',
    },
  ])

  function getMenuIconClass(icon: string) {
    return 'nc-icon nc-' + icon
  }

  return { menu_items, getMenuIconClass }
}