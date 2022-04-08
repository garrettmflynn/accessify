
class Oscillator {
    signal = []

    constructor (frequency, amplitude, bufferSize, sampleRate){
        this.frequency = frequency
        this.amplitude = amplitude
        this.bufferSize = bufferSize
        this.sampleRate = sampleRate
    }

    generate = () => {}
}

export class Sine extends Oscillator {

    constructor (frequency, amplitude, bufferSize, sampleRate){
        super(frequency, amplitude, bufferSize, sampleRate)
    }

    generate = () => {

    }
}

export class Square extends Oscillator {

    constructor (frequency, amplitude, bufferSize, sampleRate){
        super(frequency, amplitude, bufferSize, sampleRate)
    }

    generate = () => {

    }
}

export class Saw extends Oscillator {

    constructor (frequency, amplitude, bufferSize, sampleRate){
        super(frequency, amplitude, bufferSize, sampleRate)
    }

    generate = () => {

    }
}

export class Triangle extends Oscillator {

    constructor (frequency, amplitude, bufferSize, sampleRate){
        super(frequency, amplitude, bufferSize, sampleRate)
    }

    generate = () => {

    }
}