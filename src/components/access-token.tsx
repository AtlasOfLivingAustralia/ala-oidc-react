import { useEffect, useState } from "react";
import config, { AuthConfig } from "../helpers/config";

import Auth from './token-generation';
import { useSearchParams } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

function AccessToken(): React.ReactElement {

  const [clientId, setClientId] = useState("");
  const [scope, setScope] = useState("openid email profile ala/roles");

  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check url param for app `step` and set the visibility of app client registration accordingly.
    const clientId = searchParams.get('client_id');
    const scope = searchParams.get('scope');

    if (clientId) {
      setClientId(clientId)
    }

    if (scope) {
      setScope(scope)
    }
    // remove url params after registration visibility state is updated. 

    setLoading(false);

    // const userManager = new UserManager({ client_id:clientId, scope, authority: config.authority, redirect_uri: config.redirect_uri, cognito_logout_uri: config.cognito_logout_uri, popup_post_logout_redirect_uri: config.popup_post_logout_redirect_uri} as AuthConfig);
    // const user = userManager.signinRedirect();
  }, []);

  const clientDetails = (): AuthConfig => {
    return { client_id: clientId, scope: scope, authority: config.authority, redirect_uri: config.redirect_uri, cognito_logout_uri: config.cognito_logout_uri, popup_post_logout_redirect_uri: config.popup_post_logout_redirect_uri }
  }

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
      (loading) ? null : <Auth clientDetails={clientDetails()} getToken={true} />
    </MantineProvider>
  );

}


export default AccessToken;