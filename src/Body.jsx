import React, { Component } from 'react'
import {
    Content, Desc, HeadDescription, SectionWrapper, Icons, IconWrapper,
    IconDesc, IconTitle, TitleDesc, Article, ArticleDesc, Reference
} from './Style'

export class Body extends Component {
    render() {
        return (
            <Content>
                <Desc>Design Resource</Desc>
                <HeadDescription>Please find below some of the design resources and tools about Ant Design that we consider valuable. More of this is still being collected. You can leave feedback about Sketch Symbols here.</HeadDescription>
                <SectionWrapper>
                    <IconWrapper>
                        <Icons.IconRenew />
                        <IconDesc>
                            <IconTitle><p>RENEW Sketch Symbols</p></IconTitle>
                            <TitleDesc>Sketch Symbols for Desktop</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconMobile />
                        <IconDesc>
                            <IconTitle><p>Mobile Components</p></IconTitle>
                            <TitleDesc>Sketch Symbols file for Mobile</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconAntDesign />
                        <IconDesc>
                            <IconTitle><p>and design pro</p></IconTitle>
                            <TitleDesc>Common Template and Pages</TitleDesc>
                        </IconDesc>

                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconAntLibrary />
                        <IconDesc>
                            <IconTitle><p>ant design library</p></IconTitle>
                            <TitleDesc>A powerful Axure library</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                </SectionWrapper>

                <SectionWrapper>
                    <IconWrapper>
                        <Icons.IconKitchen />
                        <IconDesc>
                            <IconTitle><p>Kitchen</p></IconTitle>
                            <TitleDesc>A Sketch plugin collection</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconAntLanding />
                        <IconDesc>
                            <IconTitle><p>Ant Design Landing</p></IconTitle>
                            <TitleDesc>Landing Templates</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconUx />
                        <IconDesc>
                            <IconTitle><p>Ant UX</p></IconTitle>
                            <TitleDesc>A set of page logic prototypes libraries</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconPrototype />
                        <IconDesc>
                            <IconTitle><p>Ant Design Prototype <br /> (xiapiu)</p></IconTitle>
                            <TitleDesc>Online Library and Prototype</TitleDesc>
                        </IconDesc>
                    </IconWrapper>
                </SectionWrapper>

                <SectionWrapper>
                    <IconWrapper>
                        <Icons.IconFig />
                        <IconDesc>
                            <IconTitle><p>UI Kit for Figma</p></IconTitle>
                            <TitleDesc>Library of components for Desktop</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconAdobe />
                        <IconDesc>
                            <IconTitle><p>UI Kit for Adobe XD</p></IconTitle>
                            <TitleDesc>Library of components for Desktop</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconFig />
                        <IconDesc>
                            <IconTitle><p>Figma Open Source Library</p></IconTitle>
                            <TitleDesc>Free open source Figma Library with <br /> complete accurate to code <br /> components</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconChart />
                        <IconDesc>
                            <IconTitle><p>Ant Design Chart</p></IconTitle>
                            <TitleDesc>Sketch Symbols for Chart</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                </SectionWrapper>
                <SectionWrapper>
                    <IconWrapper>
                        <Icons.IconBot />
                        <IconDesc>
                            <IconTitle><p>MockingBot</p></IconTitle>
                            <TitleDesc>Rich component resources</TitleDesc>
                        </IconDesc>
                    </IconWrapper>
                </SectionWrapper>


                <Article>
                    Articles #
                <ArticleDesc>Do you want to know the story behind the Ant Design design system? How can I better apply Ant Design? You can check out our well selected articles below. Also welcome to follow Ant Design Official Column. There are often the latest sharing and discussions on related topics under the Ant Design design system, such as Ant Design, AntV visualization, Kitchen design Plug-ins, B-side product design, SaaS product design, natural interaction, growth design, intelligent design, design engineering, etc.</ArticleDesc>
                </Article>

                <Reference>
                    Reference #
                    <ArticleDesc>Please find below the books that inspired us, saved our time and helped us to overcome difficulties when designing components and patterns. If you want to know more about UI design, we recommend you these awesome design systems: Fiori Design, Human Interface Guidelines, Lightning Design System, Material Design. </ArticleDesc>
                </Reference>

                <SectionWrapper>

                    <IconWrapper>
                        <Icons.IconChart />
                        <IconDesc>
                            <IconTitle><p>About Face 4</p></IconTitle>
                            <TitleDesc>The Interactive Design Guide for <br /> Digital Products and System</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconFig />
                        <IconDesc>
                            <IconTitle><p>Designing Web Interfaces</p></IconTitle>
                            <TitleDesc>Best Practice, Patterns and Principles nr for Web Interface</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconAdobe />
                        <IconDesc>
                            <IconTitle><p>Designing Interfaces</p></IconTitle>
                            <TitleDesc>Interface Design Guidelines</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                    <IconWrapper>
                        <Icons.IconUx />
                        <IconDesc>
                            <IconTitle><p>Non-Designer's Design <br /> Book, The, 4th Edition</p></IconTitle>
                            <TitleDesc>Basic Principles of Good</TitleDesc>
                        </IconDesc>
                    </IconWrapper>

                </SectionWrapper>


            </Content>
        )
    }
}

export default Body
