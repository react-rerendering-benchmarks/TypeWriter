import { useCallback } from "react";
import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { isRegexpStringMatch, useCollapsible, Collapsible } from '@docusaurus/theme-common';
import { isSamePath, useLocalPathname } from '@docusaurus/theme-common/internal';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarItem, { type LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import type { DesktopOrMobileNavBarItemProps, Props } from '@theme/NavbarItem/DropdownNavbarItem';
import styles from './styles.module.css';
function isItemActive(item: LinkLikeNavbarItemProps, localPathname: string): boolean {
  if (isSamePath(item.to, localPathname)) {
    return true;
  }
  if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
    return true;
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }
  return false;
}
function containsActiveItems(items: readonly LinkLikeNavbarItemProps[], localPathname: string): boolean {
  return items.some(item => isItemActive(item, localPathname));
}
function DropdownNavbarItemDesktop({
  items,
  position,
  className,
  onClick,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  console.log(window.globalCount++);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent | FocusEvent) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target as Node)) {
        return;
      }
      setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('focusin', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('focusin', handleClickOutside);
    };
  }, [dropdownRef]);
  return <div ref={dropdownRef} className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
    'dropdown--right': position === 'right',
    'dropdown--show': showDropdown
  })}>
      <NavbarNavLink aria-haspopup="true" aria-expanded={showDropdown} role="button"
    // # hash permits to make the <a> tag focusable in case no link target
    // See https://github.com/facebook/docusaurus/pull/6003
    // There's probably a better solution though...
    href={props.to ? undefined : '#'} className={clsx('navbar__link', className)} {...props} onClick={props.to ? undefined : e => e.preventDefault()} onKeyDown={useCallback(e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        setShowDropdown(showDropdownCurrent => !showDropdownCurrent);
      }
    }, [setShowDropdown])}>
        {props.children ?? props.label}
      </NavbarNavLink>
      <ul className="dropdown__menu">
        {items.map((childItemProps, i) => {
        console.log(window.globalCount++);
        return <NavbarItem isDropdownItem activeClassName="dropdown__link--active" {...childItemProps} key={i} />;
      })}
      </ul>
    </div>;
}
function DropdownNavbarItemMobile({
  items,
  className,
  position,
  // Need to destructure position from props so that it doesn't get passed on.
  onClick,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  console.log(window.globalCount++);
  const localPathname = useLocalPathname();
  const containsActive = containsActiveItems(items, localPathname);
  const {
    collapsed,
    toggleCollapsed,
    setCollapsed
  } = useCollapsible({
    initialState: () => !containsActive
  });

  // Expand/collapse if any item active after a navigation
  useEffect(() => {
    if (containsActive) {
      setCollapsed(!containsActive);
    }
  }, [localPathname, containsActive, setCollapsed]);
  return <li className={clsx('menu__list-item', {
    'menu__list-item--collapsed': collapsed
  })}>
      <NavbarNavLink role="button" className={clsx(styles.dropdownNavbarItemMobile, 'menu__link menu__link--sublist menu__link--sublist-caret', className)} {...props} onClick={useCallback(e => {
      e.preventDefault();
      toggleCollapsed();
    }, [])}>
        {props.children ?? props.label}
      </NavbarNavLink>
      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        {items.map((childItemProps, i) => {
        console.log(window.globalCount++);
        return <NavbarItem mobile isDropdownItem onClick={onClick} activeClassName="menu__link--active" {...childItemProps} key={i} />;
      })}
      </Collapsible>
    </li>;
}
export default function DropdownNavbarItem({
  mobile = false,
  ...props
}: Props): JSX.Element {
  console.log(window.globalCount++);
  const Comp = mobile ? DropdownNavbarItemMobile : DropdownNavbarItemDesktop;
  return <Comp {...props} />;
}
declare global {
  interface Window {
    globalCount: number;
  }
}
window.globalCount = 0;