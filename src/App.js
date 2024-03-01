import React from 'react';
import { SettingsProvider } from './SettingsContext';
import SettingsForm from './SettingsForm';
import withTimer from './withTimer';
import Tooltip from './Tooltip';


const TimerDisplay = withTimer(({ timeSpent }) => <div>Время на странице: {timeSpent}</div>);

const App = () => {
  return (
    <SettingsProvider>
      <div style={{ padding: '20px' }}>
        <SettingsForm />
        <TimerDisplay />
        <Tooltip render={() => 'Детальная информация'}><button>Наведите на меня</button></Tooltip>
      </div>
    </SettingsProvider>
  );
};

export default App;
