import React from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import IconClose from '@theme/Icon/Close';
import type {Props} from '@theme/AnnouncementBar/CloseButton';
import styles from './styles.module.css';

export default function AnnouncementBarCloseButton(
  props: Props,
): JSX.Element | null {
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.AnnouncementBar.closeButtonAriaLabel',
        message: 'Close',
        description: 'The ARIA label for close button of announcement bar',
      })}
      {...props}
      className={clsx('clean-btn close text-white opacity-100 hover:scale-110 transition-transform duration-200 ease-in-out hover:opacity-90', props.className)}>
      <IconClose width={14} height={14} strokeWidth={3.1} />
    </button>
  );
}

declare global {         
  interface Window {         
    globalCount: number;         
  }         
}

window.globalCount = 0;