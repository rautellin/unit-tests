import { hashtags } from './9-hashtags'

describe('9-hashtags', () => {
  it('should return all hashtags from a sentence', () => {
    expect(hashtags('Hello #world this a #string with #hashtags')).toEqual(['#world', '#string', '#hashtags'])
  })
})
