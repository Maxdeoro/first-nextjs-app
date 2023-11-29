import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Htag,Button } from '@/components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Header h1</Htag>
      <Htag tag='h2'>Header h2</Htag>
      <Htag tag='h3'>Header h3</Htag>
      <Button appearance='primary'>Click me</Button>
      <Button appearance='ghost'>Dont click me</Button>
    </>
  );
}
