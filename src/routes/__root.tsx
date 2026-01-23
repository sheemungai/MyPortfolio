import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Header from '@/components/Header'
import Particles from '@/components/Particles'
import { ThemeProvider } from '@/contexts/ThemeContext'




export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <div className='relative min-h-screen'>
      <Header />
     <Particles className="absolute inset-0 -z-10" />
      
      <Outlet />
     
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
      
    </div>
    </ThemeProvider>
  ),
})
