import React from 'react';
import {footer} from 'react-bootstrap';
export function Footer ()
{
    return(
        <React.Fragment>
            <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
            </footer>
        </React.Fragment>
    )
}