import React from 'react';

import AppContent from './components/app/app-content/app-content'
import AppMenu from './components/app/app-menu/app-menu'
import AppMenuButton from './components/app/app-menu-button/app-menu-button'
import AppHeader from './components/app/app-header/app-header'
import Window from './components/window/window'
import Incident from './components/incident/incident'

import settingsIcon from './icons/settings.png'
import incidentsIcon from './icons/incidents.png'
import logOutIcon from './icons/logout.png'
import contactIcon from './icons/contact.png'

import './App.css';

function App() {
  return (
    <div className="container">
      <AppContent>
        <Window title="Incidenten">
          <Incident
            name="Kan vuilnisbak niet openen"
            date="01-13-2020"
            caller="#370051"
            description="Stuur zsm hulp"
            status="breached" />
          <Incident
            name="Mijn raam is kapotgegooid"
            date="02-13-2020"
            caller="#370052"
            description="Dit pik ik niet"
            status="on-track" />
          <Incident
            name="Autoschade"
            date="03-13-2020"
            caller="#170240"
            description="Dit pik ik ook niet"
            status="on-track" />
        </Window>
      </AppContent>
      <AppMenu>
        <AppMenuButton iconUrl={incidentsIcon} label="Incidenten" selected />
        <AppMenuButton iconUrl={settingsIcon} label="Instellingen" />
        <AppMenuButton iconUrl={contactIcon} label="Contact Center" />
        <AppMenuButton iconUrl={logOutIcon} label="Uitloggen" bottom />
      </AppMenu>
      <AppHeader accountName="Gemeente Zoetermeer" />
    </div>
  )
}

export default App;
