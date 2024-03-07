import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render } from '@testing-library/vue'
import { Algorand, Arbitrum, Avalanche, Base, Bitcoin, BnbChain, BnbGreenfield, Celo, Cronos, Crust, Ethereum, Fantom, Gnosis, Hedera, Integritee, Iotex, Klaytn, Moonbeam, Opbnb, Optimism, Polkadex, Polkadot, Polygon, Scroll, Sirius, Solana, Starknet, Telos, Tron, Wanchain, Zeitgeist } from '../src/emblematic-vue3'

describe('using Emblematic icon components', () => {
  afterEach(() => cleanup())

  const icons = [Algorand, Arbitrum, Avalanche, Base, Bitcoin, BnbChain, BnbGreenfield, Celo, Cronos, Crust, Ethereum, Fantom, Gnosis, Hedera, Integritee, Iotex, Klaytn, Moonbeam, Opbnb, Optimism, Polkadex, Polkadot, Polygon, Scroll, Sirius, Solana, Starknet, Telos, Tron, Wanchain, Zeitgeist]

  it('should render a component', () => {
    icons.forEach((icon) => {
      const { container } = render(icon)
      expect(container).toMatchSnapshot()
    })
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

    const el = document.querySelector(`.${testClass}`)

    expect(el).toBeInTheDocument()
    expect(el).toMatchSnapshot()
    expect(el).toHaveClass(testClass)
    expect(el).toHaveClass('emblematic')
    expect(el).toHaveClass('emblematic-ethereum-icon')
  })

  it('should add a style attribute to the element', () => {
    const { container } = render(Ethereum, {
      props: {
        style: 'position: absolute;',
      },
    })

    expect(container).toMatchSnapshot()

    const el = document.querySelector('.emblematic')

    expect(el).toHaveStyle({ position: 'absolute' })
  })

  it('should call the onClick event', async () => {
    const onClick = vi.fn()
    render(Ethereum, {
      attrs: {
        onClick,
      },
    })

    const el = document.querySelector('.emblematic')

    if (el) {
      await fireEvent.click(el)

      expect(onClick).toHaveBeenCalled()
    }
  })

  it('should pass children to the icon slot', () => {
    const testText = 'Temp Text'
    const template = {
      name: 'Temp',
      template: `<text>${testText}</text>`,
    }

    const { getByText, container } = render(Ethereum, {
      slots: {
        default: template,
      },
    })

    const textElement = getByText(testText)

    expect(textElement).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
