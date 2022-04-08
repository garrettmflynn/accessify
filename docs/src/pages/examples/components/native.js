import React, { useEffect, useRef } from 'react';
// import ReactDOM from 'react-dom'
// import clsx from 'clsx';
import * as ssvep from '../../../../../src/ssvep/src';
// import styles from '../examples.module.css'

export default function NativeExample({ server }) {


  const container = useRef(null);

  // Run After Initialization
  useEffect(async () => {
    // ------------------------ Arbitrary Elements ------------------------
    const toggle = document.getElementById('toggle')
    const elements = Array.from(document.getElementById('content').querySelectorAll('button'))

    // ------------------------ Attributes ------------------------
    const attributes = [
      { frequency: 6.67 },
      { frequency: 20},
      { frequency: 8.57 },
      { frequency: 6.67 },
      { frequency: 12 },
      { frequency: 15, },
      { frequency: 6.67 },
    ]


    const css = new ssvep.CSS('periodic', 10)
    elements.forEach(el => {
      css.set(el)
    })

    // ------------------------ Setup Options ------------------------

    elements.forEach(el => {
      el.onclick = () => console.log('Clicked ' + el.id)
    })

    // Step 1: Apply Frequencies to Elements
    elements.forEach((element, i) => {
      for (let key in attributes[i]) element.setAttribute(`data-${key}`, attributes[i][key])
    })

    // Set OnClick Event
    toggle.onclick = async () => {
      console.log(css.active, elements)
      if (!css.active) await css.start(elements)
      else await css.stop()
    }
  });

  return (
    <div className="hero">
    <div ref={container} className="container">
      <div id="options">
        <button id="toggle">CSS Periodic</button>
      </div>
      <br></br>
      <hr></hr>
      <br></br>

      <div id="content">
        <p>
          Enim dolor praesent luctus in habitant consectetur. Elementum augue, hendrerit inceptos. Leo tortor praesent curae; est blandit ridiculus ultrices proin? Rhoncus per aptent et cursus interdum montes odio potenti vivamus convallis et. Suscipit hac gravida, urna rhoncus cras vel ullamcorper tempus ad. Habitasse mauris laoreet morbi ut malesuada vitae class facilisi nec. Dignissim nascetur tristique laoreet tempor. Quis cursus nulla aenean curabitur. Hendrerit accumsan, odio molestie. Penatibus hendrerit orci.
            </p>
        <button id="1">Button #1</button>
        <p>
          Massa ullamcorper quisque platea magna sem id est class adipiscing. Torquent hac nisl consectetur neque montes. At vehicula sapien tellus ad augue quisque est tincidunt vitae velit. Facilisis class, varius augue dictumst placerat laoreet montes tristique proin. Etiam aptent imperdiet sem ac odio sed consectetur. Habitant vestibulum, nostra praesent. Vitae natoque facilisis nunc dictumst, velit commodo ullamcorper taciti convallis eu? Ultrices feugiat dui sapien vitae in platea nisi turpis.
            </p>
        <button id="2">Button #2</button>

        <p>
          Dictumst a libero aptent. Malesuada torquent, sit conubia egestas vitae dis arcu pulvinar massa aenean elementum. Placerat ligula lobortis dictumst posuere nibh netus sociis maecenas eleifend vivamus. Cras, purus viverra nec massa dolor diam ipsum nibh ac pharetra sem. Enim auctor purus vestibulum libero ante felis nisl praesent orci gravida tincidunt. Ac, eros vulputate sagittis cras. Duis, ac lobortis enim. Viverra, per enim class? Hac magna risus vehicula suspendisse, erat consectetur feugiat sociosqu. Senectus ullamcorper luctus aliquam platea.
            </p>

        <button id="3">Button #3</button>

        <p>
          Dictumst etiam eleifend phasellus congue aliquam mollis cubilia cum lorem hac ante. Luctus sagittis dictumst at commodo vitae? Integer potenti a hac aptent accumsan erat ante id. Sollicitudin viverra aptent scelerisque elementum nullam lorem in penatibus feugiat ad. Ridiculus commodo enim est velit volutpat? Libero ac gravida gravida metus risus lobortis, tortor malesuada aptent. Laoreet dui elementum ipsum nam a. In placerat.
            </p>

        <button id="4">Button #4</button>

        <p>

          Mollis nec duis ante sagittis sociosqu ullamcorper primis malesuada ornare quis diam. Aptent torquent tempus ut habitant turpis nec himenaeos! Neque mattis lorem id nibh ipsum sociis netus montes. Taciti iaculis aliquam etiam laoreet non tellus praesent eleifend. Mattis eu curabitur suspendisse molestie fusce rhoncus gravida quis id tincidunt bibendum. Cum nulla elit viverra netus eleifend. Arcu.
            </p>

        <button id="5">Button #5</button>
      </div>
    </div>
    </div>

  );
}
