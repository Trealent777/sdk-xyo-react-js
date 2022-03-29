import { useContextEx } from '../ContextEx'
import { PixelContext } from './Context'

export const usePixel = (required = true) => {
  const { pixel } = useContextEx(PixelContext, 'Pixel', required)
  return pixel
}
