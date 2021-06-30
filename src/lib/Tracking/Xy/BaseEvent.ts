import { XyPixel } from '@xylabs/pixel'

class BaseEvent<T extends Record<string, unknown>> {
  private name: string
  constructor(name: string) {
    this.name = name
  }

  async send(fields: T) {
    await XyPixel.instance.send(this.name, fields)
  }
}

export default BaseEvent
