import React from 'react'
//import  {FooterContainer,FooterWrap,FooterLinkContainer,FooterLinkWrapper,FooterLinkItems,FooterLinkTitle,FooterLink} from './FooterEl'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin,FaTwitter,FaCreativeCommonsZero } from 'react-icons/fa';
import {FooterContainer,FooterWrap,FooterLinkContainer,FooterLinkWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink} from './FooterEl'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it work</FooterLink>
                            <FooterLink to="/signin">Test</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        </FooterLinkWrapper>
                        <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it work</FooterLink>
                            <FooterLink to="/signin">Test</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        </FooterLinkWrapper>

                </FooterLinkContainer>
                
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} >
                        Zer<FaCreativeCommonsZero/>ne
 

                        </SocialLogo>
                        <WebsiteRights>Zer<FaCreativeCommonsZero/>ne ©{new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            
                            <SocialIconLink href="//www.Instagram.com" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            
                            <SocialIconLink href= "//www.Twitter.com" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            
                            <SocialIconLink href="//www.Youtube.com" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            
                            <SocialIconLink href="//www.Linkedin.com" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                            
                        </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;
