import { useEffect, useState } from "react";
import config, { AuthConfig } from "../helpers/config";

import { User, UserManager } from 'oidc-client-ts';

import Auth from './token-generation';
import { useSearchParams } from "react-router-dom";

function AccessToken(): React.ReactElement {
 
    // const [clientId, setClientId] = useState("");
    // const [scope, setScope] = useState("openid email profile ala/roles");

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        // check url param for app `step` and set the visibility of app client registration accordingly.

          // const clientId = searchParams.get('client_id');
          // const scope = searchParams.get('scope');

          // if(clientId){
          //   setClientId(clientId)
          //   setSearchParams('');
          // }

          // if(scope){
          //   setScope(scope)
          // }
          // remove url params after registration visibility state is updated. 


        // const userManager = new UserManager({ client_id:clientId, scope, authority: config.authority, redirect_uri: config.redirect_uri, cognito_logout_uri: config.cognito_logout_uri, popup_post_logout_redirect_uri: config.popup_post_logout_redirect_uri} as AuthConfig);
        // const user = userManager.signinRedirect();
    });

    const clientDetails  = (): AuthConfig => {
      
      const clientId = searchParams.get('client_id') || config.client_id;
      const scope = searchParams.get('scope') || config.scope;

      // if(clientIdParam){
      //   setClientId(clientIdParam)
      // }

      // if(scopeParam){
      //   setScope(scopeParam)
      // }

        return {client_id: clientId, scope, authority: config.authority, redirect_uri: config.redirect_uri, cognito_logout_uri: config.cognito_logout_uri, popup_post_logout_redirect_uri: config.popup_post_logout_redirect_uri}
      }

    return (
        <Auth clientDetails={clientDetails()} getToken={true}/>
    );
}

export default AccessToken;