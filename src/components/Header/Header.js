import React from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeaderDesktop>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Side />
      </MainHeaderDesktop>

      <MainHeaderMobile>
        <Side>
          <Logo />
        </Side>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileNav>
      </MainHeaderMobile>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeaderDesktop = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: scroll;
  overflow-y: hidden;

  @media ${(props) => props.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8vw - 3.75rem, 3rem);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MainHeaderMobile = styled.div`
  display: none;

  @media ${(props) => props.theme.queries.tabletAndDown} {
    display: flex;
    align-items: baseline;

    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const MobileNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8vw - 1rem, 3rem);
  margin-left: 48px;
`;

export default Header;
