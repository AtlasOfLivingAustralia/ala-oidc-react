import { BrowserRouter } from 'react-router-dom';
import { MantineProvider, Global } from '@mantine/core';

import {
  getRedirectResult,
  // eslint-disable-next-line import/no-relative-packages
} from '../../ala-web-auth/dist/index';

// Routes
import Routes from './routes';

function App(): React.ReactElement {
  getRedirectResult();

  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        fontFamily: 'Roboto, sans-serif',
        headings: {
          fontFamily: 'Lato, sans-serif',
        },
        colors: {
          rust: [
            '#000000',
            '#000000',
            '#FDEBE7',
            '#FAC7BC',
            '#F7A392',
            '#F47F67',
            '#F15B3C',
            '#EE3711',
            '#BE2C0E',
            '#8F210A',
          ],
        },
      }}
      withGlobalStyles
    >
      <Global
        styles={(theme) => ({
          body: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[7]
                : theme.colors.gray[0],
          },
        })}
      />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
