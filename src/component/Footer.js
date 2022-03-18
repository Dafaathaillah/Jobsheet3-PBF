import React from 'react'; // Component menggunakan Function
const Footer = (props) => {
    return (
        <div>
            <center>
                <p>{props.judul} </p>
                <p>Web Dev: {props.nama} </p>
            </center>
        </div>
    );
}
export default Footer;