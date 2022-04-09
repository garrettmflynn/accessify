import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import * as ssvep from '../../../../../src/libraries/ssvep/src';
import styles from '../examples.module.css'
export default function SingleExample({server}) {

  const container = useRef(null);

  // Run After Initialization
  useEffect(async () => {

    const css = new ssvep.CSS('periodic', 10)
    const fbcca = new ssvep.FBCCA()
    container.current.setAttribute('data-frequency', 10)
    await css.start(container.current)

    fbcca.onselect = (f) => {
      const o = css.elements.find(o => o.frequency === f)
      if (o) container.current.classList.add(styles.active)
    }

    fbcca.ondeselect = (f) => {
      container.current.classList.remove(styles.active)
    }

  });
  
    return (
      <div className="hero">

        <div className="container">

          <h1 className="hero__title">R U Looking?</h1>
          <div ref={container} className={clsx(styles.circle)}>
            Here
          </div>
        </div>
        </div>

    );
  }
  