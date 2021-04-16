import React, { Component } from 'react'
import { HeadSection, Head, H1, Pencil, HeadDesc } from './Style'
export class Header extends Component {
    render() {
        return (
            <HeadSection>
                <Head>
                    <H1>Resources</H1>
                    <Pencil />
                </Head>
                <HeadDesc>
                    Here list all the resources that related with Ant Design.
                </HeadDesc>
            </HeadSection>
        )
    }
}

export default Header
