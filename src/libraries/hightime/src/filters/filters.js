class IIR {
    
    constructor (cutoff, sampleRate){
        this.cutoff = cutoff
        this.sampleRate = sampleRate

    }

    process = () => {}
}

export class LowPass extends IIR {

    constructor (cutoff, sampleRate) {
        super(cutoff, sampleRate)
    }

    process = () => {

    }

}

export class HighPass extends IIR {

    constructor (cutoff, sampleRate) {
        super(cutoff, sampleRate)
    }

    process = () => {

    }
}