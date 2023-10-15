import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { Outlet } from 'react-router-dom'
import './Root.css'

export interface RootProps {
  navigationRoutes: Array<{ label?: string; icon?: JSX.Element; route: string }>
}

/**
 *@InsulatorGMan
 * Root Elements that will be rendered despite current router state.
 */
export default function Root(props: RootProps): JSX.Element {
  return (
    <>
      <BottomNavigation showLabels id="BottomNavigation">
        {props.navigationRoutes.map((route, key) => {
          return (
            <BottomNavigationAction
              label={route.label}
              icon={route.icon}
              onClick={(): void => {
                window.location.href = route.route
              }}
              key={key}
            />
          )
        })}
      </BottomNavigation>
      <Outlet />
    </>
  )
}
