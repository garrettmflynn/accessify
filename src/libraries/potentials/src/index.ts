export {css, webgl, CSS, WebGL} from 'ssvep-stimuli'
import {fbcca} from '../../hightime/src'

export class FBCCA {
  constructor() {

  }

  ondata = (data: number[]) => {
      const output = fbcca(data)
      return output
  }

  onselect = () => {}
  ondeselect = () => {}
}