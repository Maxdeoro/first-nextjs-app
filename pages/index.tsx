import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Htag,Button,Par,Tag } from '@/components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Header h1</Htag>
      <Htag tag='h2'>Header h2</Htag>
      <Htag tag='h3'>Header h3</Htag>
      <Button appearance='primary'>Click me</Button>
      <Button appearance='ghost' arrow='right'>Dont click me</Button>
      <Par size='s'>Small text paragrph 14px</Par>
      <Par size='m'>Medium text paragrph 16px</Par>
      <Par size='l'>Large text paragrph 18px</Par>
      <Tag size='small' color='ghost'>Design</Tag>
      <Tag size='large' color='green'>1000$</Tag>
      <Tag size='large' color='red' href='https://www.torproject.org/'>Tor Project</Tag>
      <Tag size='large' color='grey'>Esse</Tag>
      <Tag size='small' color='primary'>velit sed ullamcorper morbi</Tag>
    </>
  );
}
