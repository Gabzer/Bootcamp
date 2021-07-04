import Switch from 'react-switch';
import { useAtom } from 'jotai';
import { IconContext } from 'react-icons';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/all';

import { themeAtom } from '../global';

export default function ThemeSwitch() {
  const [theme, setTheme] = useAtom(themeAtom);
  const handleChange = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <IconContext.Provider value={{ color: 'yelllow' }}>
      <Switch
        onColor={'#393b38'}
        offColor={'#76c919'}
        onChange={handleChange}
        checked={theme === 'dark'}
        checkedIcon={
          <IoMoonOutline
            size={'1.2rem'}
            style={{ paddingLeft: '0.5rem', paddingTop: '3px' }}
          />
        }
        uncheckedIcon={
          <IoSunnyOutline
            size={'1.2rem'}
            style={{ paddingLeft: '4px', paddingTop: '4px' }}
          />
        }
      />
    </IconContext.Provider>
  );
}
