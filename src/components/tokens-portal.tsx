import { MantineProvider, Global, AppShell, Header, MediaQuery, Burger, Image } from '@mantine/core';

import AppNavbar from './navbar';

import LargeLogo from '../ala-logo.png'
import config, { AuthConfig } from '../helpers/config';

import UI from './token-ui';
import Faq from './faq';
import { useState } from 'react';

if (import.meta.env.DEV) {
    console.log(JSON.stringify(config, null, 2));
  }
  

function TokensPortal(): React.ReactElement {

    const [opened, setOpened] = useState(false);

    const [activeAside, setActiveAside] = useState("Credentials & Tokens");

    return (
    <MantineProvider
              theme={{
                colorScheme: 'light',
                fontFamily: 'Roboto, sans-serif',
                headings: {
                  fontFamily: 'Lato, sans-serif',
                },
                primaryColor: 'rust',
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
              withGlobalStyles withNormalizeCSS
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

                <AppShell
                  styles={{
                    main: {
                      maxHeight: "100vh",
                      overflowY: "scroll",
                      overflowX: "hidden",
                    },
                  }}
                  navbarOffsetBreakpoint="sm"
                  asideOffsetBreakpoint="sm"
                  navbar={<AppNavbar opened={opened} updateNavContent={setActiveAside} />
                  }
                  header={
                    <Header height="10" p="sm">
                      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                          <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={"red"}
                            mr="xl"
                          />
                        </MediaQuery>
                        <Image width={200} style={{ margin: '0px 50px 0px 0px' }} src={LargeLogo} ></Image> <h2>Client Credentials & Tokens</h2>
                      </div>
                    </Header>
                  }
                >
                  {activeAside === "Credentials & Tokens" && <UI config={config} />}
                  {activeAside === "FAQ" && <Faq />}

                </AppShell>
            
            </MantineProvider>
            )
}

export default TokensPortal;