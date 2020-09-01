import { hyphenate } from '@vue/shared'

export default function(Quill) {
  const { Scope, Attributor } = Quill.import('parchment')
  const text = [
    {
      name: 'lineHeight',
      scope: Scope.BLOCK
    },
    {
      name: 'letterSpacing',
      scope: Scope.INLINE
    },
    {
      name: 'textDecoration',
      scope: Scope.INLINE
    },
    {
      name: 'textIndent',
      scope: Scope.BLOCK
    }
  ]
  const result = {}
  text.forEach(({ name, scope }) => {
    result[`formats/${name}`] = new Attributor.Style(name, hyphenate(name), {
      scope
    })
  })

  return result
}
