import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './examples.module.css';
import SingleExample from './components/single';
import NativeExample from './components/native';
import { useHistory, useLocation } from 'react-router';

export default function ExampleSelector({server}) {
   const history = useHistory();
    var url = globalThis.location;
    var name = new URLSearchParams(url.search).get('name');
    const [example, setExample] = React.useState(name ?? 'device');


    const renderExample = (name) => {
        switch(name) {
          case 'native':
            return <NativeExample server={server}/>
          // case 'webrtc':
          //   return <WebRTCExample server={server}/>
          default:
            return <SingleExample server={server}/>
        }
      }

    const set = (name) => {
      history.replace(`/examples?name=${name}`)
      setExample(name)
    }
  
    return (
        <>
      <nav className={clsx(styles.nav)}>
        <button onClick={() => set('single')}>
          Single
        </button>
        <button onClick={() => set('native')}>
          Native Webpage
        </button>
        </nav>

        <header>
            {renderExample(example)}
        </header>
        </>
    );
  }
  