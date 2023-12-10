import React,{ useState,useEffect }  from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
import { Htag,Button,Par,Tag,MyComponent } from '../components';
import { Layout } from '@/layout/Layout';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log(`Counter: ` + counter);
  }, [counter]);
  
  return (
    <Layout>
      <Htag tag='h1'>{counter}</Htag>
      <Htag tag='h2'>Header h2</Htag>
      <Htag tag='h3'>Header h3</Htag>
      <Button appearance='primary' onClick={() => setCounter(counter + 1)}>Click me</Button>
      <Button appearance='ghost' arrow='right' onClick={() => setCounter(0)}>Dont click me</Button>
      <Par size='s'>Small text paragrph 14px</Par>
      <Par size='m'>Medium text paragrph 16px</Par>
      <Par size='l'>Large text paragrph 18px</Par>
      <Tag size='small' color='ghost'>Design</Tag>
      <Tag size='large' color='green'>1000$</Tag>
      <Tag size='large' color='red' href='https://www.torproject.org/'>Tor Project</Tag>
      <Tag size='large' color='grey'>Esse</Tag>
      <Tag size='small' color='primary'>velit sed ullamcorper morbi</Tag>
      {/* <Rating rating={3}/> */}
      {/* <Rating/> */}
      <MyComponent/>
    </Layout>
  );
}
