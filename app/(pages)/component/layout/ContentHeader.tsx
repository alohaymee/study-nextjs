import React from 'react';
import { Stack } from 'react-bootstrap';
import * as Colors from '@/utils/ColorSet';
import { Icon } from '@phosphor-icons/react';
import styles from './ContentHeader.module.scss';

export default function ContentHeader({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: Icon;
}) {
  return (
    <>
      <Stack direction={'horizontal'} gap={2}>
        <div className={`${styles.iconBox}`}>
          <Icon size={30} weight={'regular'} color={Colors.WHITE} />
        </div>
        <div className={`${styles.titleBox}`}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </Stack>
    </>
  );
}
