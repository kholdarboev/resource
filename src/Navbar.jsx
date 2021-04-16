import React, { Component } from 'react'
import {
    Nav, TitleWrapper, Icon, Title, SearchWrapper, InputIcon, Search,
    NavbarWrapper, NavLink, Version, Git
} from './Style'
export class Navbar extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <TitleWrapper>
                        <Icon />
                        <Title>ant design</Title>
                    </TitleWrapper>
                    <SearchWrapper>
                        <InputIcon />
                        <Search placeholder='Search in ant.design'></Search>
                    </SearchWrapper>
                    <NavbarWrapper>
                        <NavLink>
                            Design
                            Docs
                            Component
                            Resources
                        </NavLink>
                        <Version>
                            <select value="">
                                <option name="" id="" selected>4.15.1</option>
                                <option name="" id="">3.x</option>
                                <option name="" id="">2.x</option>
                                <option name="" id="">1.x</option>
                                <option name="" id="">0.12x</option>
                                <option name="" id="">0.11x</option>
                                <option name="" id="">0.10x </option>
                                <option name="" id="">0.9x </option>
                            </select>
                        </Version>
                        <Version>
                            <select value="">
                                <option name="" id="">English</option>
                                <option name="" id="">Arabic</option>
                            </select>
                        </Version>
                        <Git />
                    </NavbarWrapper>

                </Nav>



            </div>
        )
    }
}

export default Navbar
