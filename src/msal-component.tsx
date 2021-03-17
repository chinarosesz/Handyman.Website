import * as React from 'react';
import * as Msal from 'msal';

export class MsalComponent extends React.Component
{
    private msalConfig: Msal.Configuration =
    {
        auth:
        {
            clientId: '35dbe304-e2d9-411c-8bf6-6e0e1bff59ae',
            authority: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47'
        },
    };

    private msalApp = new Msal.UserAgentApplication(this.msalConfig);

    signin()
    {
        const authenticationParameters: Msal.AuthenticationParameters = {};

        this.msalApp.loginPopup(authenticationParameters)
            .then(response =>
            {
                console.log('Acquired token successfully');   
                console.log(response); 
            })
            .catch(error => 
            {
                console.log('Failed to log in')
                console.log(error);
            })
    }

    signout()
    {
        this.msalApp.logout();
    }

    render()
    {
        return (
            <div>
                <button onClick={() => this.signin()}>Sign In</button><br />
                <button onClick={() => this.signout()}>Sign Out</button>
            </div>
        );
    }
}