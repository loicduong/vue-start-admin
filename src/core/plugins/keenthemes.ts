import Theme from '@/assets/ts/_utils/_Theme'
import {
  DrawerComponent,
  MenuComponent,
  ScrollComponent,
  ScrollTopComponent,
  StickyComponent,
  ToggleComponent,
} from '@/assets/ts/components'

Theme.init()
setTimeout(() => {
  ToggleComponent.bootstrap()
  ScrollComponent.bootstrap()
  ScrollTopComponent.bootstrap()
  DrawerComponent.bootstrap()
  StickyComponent.bootstrap()
  MenuComponent.bootstrap()
}, 0)
