import React,{ useState,useEffect }  from 'react';
import { Htag,Button,Par,Tag,MyComponent } from '../components';
import { WithLayout } from '../HOC/withLayout';
// import { getStaticProps } from 'next/dist/build/templates/pages';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem,PageItem } from '../interfaces/menu.interface';

function Home({menu}: HomeProps): JSX.Element {

  return (
    <> 
    {/* <Layout> */}
      <Htag tag='h1'>Header h1</Htag>
      {/* <Htag tag='h1'>{counter}</Htag> */}
      <Htag tag='h2'>Header h2</Htag>
      <Htag tag='h3'>Header h3</Htag>
      <Button appearance='primary' >Click me</Button>
      {/* <Button appearance='primary' onClick={() => setCounter(counter + 1)}>Click me</Button> */}
      <Button appearance='ghost' arrow='right' >Dont click me</Button>
      {/* <Button appearance='ghost' arrow='right' onClick={() => setCounter(0)}>Dont click me</Button> */}
      <Par size='s'>Small text paragrph 14px</Par>
      <Par size='m'>Medium text paragrph 16px</Par>
      <Par size='l'>Large text paragrph 18px</Par>
      <Tag size='small' color='ghost'>Design</Tag>
      <Tag size='large' color='green'>1000$</Tag>
      <Tag size='large' color='red' href='https://www.torproject.org/'>Tor Project</Tag>
      <Tag size='large' color='grey'>Esse</Tag>
      <Tag size='small' color='primary'>velit sed ullamcorper morbi</Tag>
      <MyComponent/>
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    {/* </Layout> */}
    </>
  );
}

export default WithLayout(Home);     //Home wrapped by Layout

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-pages/find', 
    {firstCategory});
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
};
