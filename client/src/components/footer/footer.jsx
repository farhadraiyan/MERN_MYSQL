//imrc to create comp
//cc to crrate component
import React, { Component } from 'react';
import "./footer.css";

class Footer extends Component {
    state = {}
    render() {
        return (
            <div id="footer" class="mt-5 p-4">
                <p class="text-center">Copyright &copy; 2018 Mean stack app GBC</p>
            </div>
        );
    }
}

export default Footer;