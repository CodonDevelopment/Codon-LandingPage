import React from 'react'
import {
    Container,
    Icon,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react'

export default function Navbar() {
    return(
        <div>
            <Menu fixed='top'>
                <Container>
                    <Menu.Item as='a' header>
                    {/* <Image size='mini' src='' style={{ marginRight: '1.5em' }} /> */}
                    Codon
                    </Menu.Item>
                    <Menu.Menu position='right' >
                        <Menu.Item as='a'>
                            <Icon name='heart' />
                            Who Are We?
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='trophy' />
                            What We Can Build
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='handshake' />
                            Contact Us
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}