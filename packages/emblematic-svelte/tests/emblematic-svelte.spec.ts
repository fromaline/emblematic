import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render } from '@testing-library/svelte'
import { Ethereum } from '../src/emblematic-svelte'
import TestSlots from './TestSlots.svelte'

describe('using Emblematic icon components', () => {
  afterEach(() => cleanup())

  it('should render an component', () => {
    const { container } = render(Ethereum)

    expect(container).toMatchSnapshot()
  })

  it('should adjust the size', () => {
    const { container } = render(Ethereum, {
      props: {
        size: 48,
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should add a class to the element', () => {
    const testClass = 'my-icon'
    const { container } = render(Ethereum, {
      props: {
        class: testClass,
      },
    })

    expect(container).toMatchSnapshot()

    const [el] = document.getElementsByClassName(testClass)

    expect(el).toBeInTheDocument()
    expect(el).toMatchSnapshot()
    expect(el).toHaveClass(testClass)
    expect(el).toHaveClass('emblematic')
    expect(el).toHaveClass('emblematic-ethereum')
  })

  it('should add a style attribute to the element', () => {
    const { container } = render(Ethereum, {
      props: {
        style: 'position: absolute;',
      },
    })

    expect(container).toMatchSnapshot()

    const [el] = document.getElementsByClassName('emblematic')

    expect(el.getAttribute('style')).toContain('position: absolute')
  })

  it('should render an icon slot', () => {
    const { container, getByText } = render(TestSlots)

    const textElement = getByText('Test')
    expect(textElement).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
