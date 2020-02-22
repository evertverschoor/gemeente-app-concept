import React from 'react';

import AppContent from './components/app/app-content/app-content'
import AppMenu from './components/app/app-menu/app-menu'
import WindowManager from './components/managers/window-manager/window-manager'
import MenuManager from './components/managers/menu-manager/menu-manager'

import './App.css';

function App() {
  return (
    <div className="container">
      <AppContent>
        <WindowManager />
      </AppContent>
      <AppMenu>
        <MenuManager />
      </AppMenu>
    </div>
  )
}

export default App;
