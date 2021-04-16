import styled from 'styled-components'
import {ReactComponent as AntIcon} from './image/icon.svg'
import {ReactComponent as SearchIcon} from './image/search.svg'
import {ReactComponent as GitIcon} from './image/git.svg'
import {ReactComponent as Edit} from './image/pencil.svg'
import {ReactComponent as Renew} from './image/renew.svg'
import {ReactComponent as Mobile} from './image/mobile.svg'
import {ReactComponent as AntDesign} from './image/ant-design.svg'
import {ReactComponent as AntLibrary} from './image/ant-library.svg'
import {ReactComponent as Kitchen} from './image/kitchen.svg'
import {ReactComponent as AntLanding} from './image/landing.svg'
import {ReactComponent as Ux} from './image/UX.svg'
import {ReactComponent as Prototype} from './image/prototype.svg'
import {ReactComponent as KitFig} from './image/Figma.svg'
import {ReactComponent as Adobe} from './image/Adobe.svg'
import {ReactComponent as Chart} from './image/chart.svg'
import {ReactComponent as Bot} from './image/mocking.svg'
import {ReactComponent as Twitter} from './image/twitter.svg'
import {ReactComponent as Medium} from './image/medium.svg'
import {ReactComponent as Redo} from './image/redo.svg'
import {ReactComponent as Bug} from './image/bug.svg'
import {ReactComponent as FAQ} from './image/form.svg'
import {ReactComponent as Leaf} from './image/leaf2.svg'



export const Container = styled.div`
box-sizing:border-box;
`
/*
*Navigation section ==========>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */
export const Nav = styled.div`
display: flex;
align-items: center;;
height:50px;
padding: 5px 30px;
`
export const TitleWrapper = styled.div`
display: flex;
justify-content:center;
align-items: center;
`
export const Icon = styled(AntIcon)`
width:40px;
height:35px;
cursor: pointer;
` 
export const Title = styled.div`
font-weight:600;
cursor: pointer;
margin-left:10px;
text-transform:capitalize;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`
export const SearchWrapper = styled.div`
position:relative;
display: flex;
justify-content:center;
align-items: center;
margin-left:170px;
background-color:green;
`
export const InputIcon = styled(SearchIcon)`
width:10px;
position: absolute;
left:10px;
color:whiteSmoke;
height:15px;
cursor: pointer;
`

export const Search = styled.input`
width:100%;
height:20px;
outline:none;
border:none;
border-left: solid 1px lightGray;
padding-left:25px;
`

/*
*Navbar side ==========>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */

export const NavbarWrapper = styled.div`
margin-left:auto;
display: flex;
justify-content: center;
align-items: center;
` 
export const NavLink = styled.a`
cursor: pointer;
margin-right:20px;
`
 
export const Version = styled.div`
margin-right:10px;
cursor: pointer;
`

export const Git = styled(GitIcon)`
width:30px;
cursor: pointer;
`

/*
*Header section ==========>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */
export const HeadSection = styled.div`
padding: 80px 0 50px 350px;
background-color:#F3F8FC;
`
export const Head = styled.div`
display: flex;
align-items: center;
` 
export const H1 = styled.div`
font-size:40px;
font-weight:600;

`
export const Pencil = styled(Edit)`
width:15px;
opacity:.4;
height:14px;
cursor: pointer;
margin: auto 0 10px 5px;
:hover{
    opacity:1;
}
`
export const HeadDesc = styled.div`
color:#6B7B8D;
margin-top:10px;
font-size:16px;
`

/*
*Body content ==========>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 */
export const Content = styled.div`
padding:80px 0 0 350px;
display: flex;
flex-direction:column;
`
export const Desc = styled(H1)`
color:#6B7B8D;
font-size:30px;

`
export const HeadDescription = styled(HeadDesc)`
font-size:14px;
`
/*
*Section content
 */

export const SectionWrapper =styled.div`
display: flex;
padding: 20px 0 0 0;

`
export const Icons = styled.div`
display: flex;
flex-direction:column;
width:300px;
height:200px;
`
Icons.IconRenew = styled(Renew)``
Icons.IconMobile = styled(Mobile)``
Icons.IconAntDesign = styled(AntDesign)``
Icons.IconAntLibrary = styled(AntLibrary)``
Icons.IconKitchen = styled(Kitchen)``
Icons.IconAntLanding = styled(AntLanding)``
Icons.IconUx = styled(Ux)``
Icons.IconPrototype = styled(Prototype)``
Icons.IconFig = styled(KitFig)``
Icons.IconAdobe = styled(Adobe)``
Icons.IconFig = styled(KitFig)``
Icons.IconChart = styled(Chart)``
Icons.IconBot = styled(Bot)``

export const IconWrapper = styled.div`
display: flex;
flex-direction:column;
margin-right:20px;
cursor: pointer;
border: solid 1px #E6E6E6; 
:hover{ box-shadow: 0 3px 4px 3px rgba(0, 0, 0, 0.2);
/* border:none; */
}

`
export const IconDesc = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
margin-left: 20px;
`
export const IconTitle = styled.div`
text-transform:capitalize;
font-weight: 400;
font-size:20px;
`
export const TitleDesc = styled.div`
color:gray;
padding-bottom:20px;
width:250px;
font-size:13px;
`


/*
 * middle
 */

export const Article = styled(Desc)`
padding-right:340px;
margin-top:100px;
 :hover &{
    display:none;
}

`

export const ArticleDesc = styled(HeadDescription)`
line-height:30px;
font-size:14px;
font-weight:300;
`
export const Reference = styled(Article)`
margin-bottom:50px;
`



/*
*Footer content
*/

export const Main = styled.div`
box-sizing:border-box;
background-color : #000;
width:100%;
height:100%;
margin-top:150px;
padding:60px 80px;
color:hsla(0,0%,100%,.9);
display: flex;
padding: 100px 340px;

`
export const LinkDiv = styled.div`
display: flex;
flex-direction:column;
flex:1;
`
export const LinkTitle = styled.div`
font-size:18px;
font-weight:400;
margin-bottom:25px;

`
export const Link = styled.a`
line-height:35px;
text-transform:capitalize;
font-size:15px;
cursor: pointer;
color:white;
text-transform:capitalize;
    text-decoration:none;
:hover{
    color:#1890ff;
}
`
export const LinkWrapper = styled.div`
display: flex;
align-items: center;
:hover{
    color:#1890ff;}

` 
export const FooterIcon = styled.div`
width:20px;
height:20px;
cursor: pointer;
display: flex;

`

FooterIcon.IconGit = styled(GitIcon)`
background-color:white;
margin-right:10px;
border-radius:50px;

`
FooterIcon.IconAnt = styled(AntIcon)`
margin-right:10px;
width:20px;
height:20px;
`
FooterIcon.IconMedium = styled(Medium)`
width:20px;
margin-right:10px;
background-color:white;
height:20px;

`
FooterIcon.IconTwitter = styled(Twitter)`
margin-right:10px;
width:20px;
height:20px;
`





FooterIcon.IconRedo = styled(Redo)`
width:20px;
margin-right:10px;
height:20px;
`
FooterIcon.IconBug = styled(Bug)`
border-radius:50px;
width:20px;
height:20px;
margin-right:10px;
background-color:white;

`
FooterIcon.IconFAQ = styled(FAQ)`
border-radius:50px;
width:20px;
height:20px;
background-color:white;
height:20px;
margin-right:10px;
width:20px;
`


export const DescIcon = styled.div`

`
DescIcon.IconLeaf = styled(Leaf)`
height:20px;
width:20px;
margin-right:10px;
`
export const FooterInput = styled.input`
margin-top:10px;
border:4px solid #fff;
background:rgb(24, 144, 255);
padding:4px;
cursor: pointer;
display:inline-block;
height:16px;
width:80px;
`
