import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

//We are removing <Menu.Item> tag as <link> tage doesn't get along with it so we create a link using an <a> tag and wrap it up in 
//<Link> tag of route.

export default () => {
    return(

        <Menu style = {{ marginTop : '15px'}}>
           <Link route = '/'>
               <a className = 'item'>
                   CrowdCoin
               </a>
           </Link>
        <Menu.Menu position = 'right'>
        <Link route = '/'>
               <a className = 'item'>
                   Campaigns
               </a>
           </Link>
           <Link route = '/campaign/new'>
               <a className = 'item'>
                   +
               </a>
           </Link>
        </Menu.Menu>

        </Menu>

    );
}