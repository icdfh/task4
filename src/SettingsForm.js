import React from 'react';
import { useSettings } from './SettingsContext';

const SettingsForm = () => {
  const { settings, updateSettings } = useSettings();

  return (
    <div>
      <div>
        <label>Тема:</label>
        <select value={settings.theme} onChange={(e) => updateSettings({ theme: e.target.value })}>
          <option value="light">Светлая</option>
          <option value="dark">Темная</option>
        </select>
      </div>
      <div>
        <label>Язык:</label>
        <select value={settings.language} onChange={(e) => updateSettings({ language: e.target.value })}>
          <option value="en">Английский</option>
          <option value="ru">Русский</option>
          {/* Добавьте другие языки по желанию */}
        </select>
      </div>
    </div>
  );
};

export default SettingsForm;
