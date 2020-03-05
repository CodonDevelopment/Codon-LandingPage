import React from 'react'
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react'

export default function Footer() {
    return(
        <div>
            <Segment  vertical>
            <Container textAlign='center'>
                <Grid divided stackable>
                <Grid.Column width={8}>
                    <Header as='h4' content='Example Products' />
                    <List link>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Header as='h4' content='Codon' />
                    <p>
                        Progressing Molecular Biology & Genetics by Creating Beautiful, Useful, and Powerful Tools for Those Who Seek Them.
                    </p>
                </Grid.Column>
                </Grid>

                <Divider section />
                <Image centered size='mini' src='' />
                <List horizontal divided link size='small'>
                <List.Item as='a' href='#'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policy
                </List.Item>
                </List>
            </Container>
            </Segment>
        </div>
    )
}