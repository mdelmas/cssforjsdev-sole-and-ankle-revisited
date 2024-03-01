/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <MenuWrapper isOpen={isOpen}>
      <Menu
        aria-label="Mobiel menu"
        style={{ boxShadow: "0px 0px 0px 10000px hsla(0, 0%, 0%, 0.5)" }}
      >
        <Side>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={2} />
            <VisuallyHidden>Close</VisuallyHidden>
          </CloseButton>
        </Side>

        <Nav>
          <NavItem href="/sale">Sale</NavItem>
          <NavItem href="/new">New&nbsp;Releases</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/women">Women</NavItem>
          <NavItem href="/kids">Kids</NavItem>
          <NavItem href="/collections">Collections</NavItem>
        </Nav>

        <Side>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Side>
      </Menu>
    </MenuWrapper>
  );
};

const Side = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  color: ${COLORS.gray[900]};
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

const MenuWrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;

  background: hsl(0deg 0% 0% / 0.5);
  height: 100vh;
`;

const Menu = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  padding: 32px;
  height: 100%;

  background-color: white;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const NavItem = styled.a`
  text-decoration: none;
  text-transform: uppercase;

  font-size: ${18 / 16}rem;
  font-weight: 600;
  line-height: ${21 / 16}rem;

  color: ${COLORS.gray[900]};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;

  justify-content: flex-end;
`;

const FooterLink = styled.a`
  text-decoration: none;

  color: ${COLORS.gray[700]};

  font-size: ${14 / 16}rem;
  font-weight: 500;
  line-height: ${16 / 16}rem;
`;
export default MobileMenu;
