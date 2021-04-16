import React, { Component } from 'react'
import { Main, LinkDiv, LinkTitle, Link, LinkWrapper, FooterIcon, DescIcon, FooterInput } from './Style'
export class Footer extends Component {
    render() {
        return (
            <Main>
                <LinkDiv>
                    <LinkTitle href='Resources'>Resources</LinkTitle>
                    <Link href='ant design pro'>ant design pro</Link>
                    <Link>ant design charts</Link>
                    <Link>ant design mobile</Link>
                    <Link>NG-ZORRO</Link>
                    <Link>NG-ZORRO-MOBILE</Link>
                    <Link>ant design vue</Link>
                    <Link>ant design landing</Link>
                    <Link>scaffolds</Link>
                    <Link>umi</Link>
                    <Link>dumi</Link>
                    <Link>remax</Link>
                    <Link>Ahooks</Link>
                    <Link>ant motion</Link>
                    <Link>design resource</Link>
                    <Link>china mirror cn</Link>
                </LinkDiv>

                <LinkDiv>
                    <LinkTitle>Community</LinkTitle>
                    <LinkWrapper>
                        <FooterIcon.IconAnt />
                        <Link>awesome ant design</Link>
                    </LinkWrapper>

                    <LinkWrapper>
                        <FooterIcon.IconMedium />
                        <Link>medium</Link>
                    </LinkWrapper>

                    <LinkWrapper>
                        <FooterIcon.IconTwitter />
                        <Link>twitter</Link>
                    </LinkWrapper>

                    <Link>ant design blog</Link>
                    <Link>experience cloud blog</Link>
                    <Link>SEE conf</Link>





                </LinkDiv>

                <LinkDiv>
                    <LinkTitle>Help</LinkTitle>
                    <LinkWrapper>
                        <FooterIcon.IconGit />
                        <Link>GitHub</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <FooterIcon.IconRedo />
                        <Link>Change Log</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <FooterIcon.IconBug />
                        <Link>Bug Report</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <FooterIcon.IconFAQ />
                        <Link>FAQ</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <FooterIcon.IconFAQ />
                        <Link>Issues</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <FooterIcon.IconAnt />
                        <Link>Ant Design practical tutorial </Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <FooterIcon.IconAnt />
                        <Link>discussions</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <FooterIcon.IconAnt />
                        <Link>StackOverflow</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <FooterIcon.IconAnt />
                        <Link>SegmentFault</Link>
                    </LinkWrapper>
                </LinkDiv>


                <LinkDiv>
                    <LinkTitle>
                        <DescIcon.IconLeaf />
                More Products
                </LinkTitle>
                    <LinkWrapper>
                        <Link>YuQue</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Link>AntV</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Link>Egg</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Link>Kitchen</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Link>anti financial experience tech</Link>
                    </LinkWrapper>
                    <FooterInput type={'color'} />
                </LinkDiv>






            </Main>
        )
    }
}

export default Footer
