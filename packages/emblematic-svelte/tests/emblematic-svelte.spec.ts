import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render } from '@testing-library/svelte'
import { Algorand, Arbitrum, Avalanche, Base, Bitcoin, BnbChain, BnbGreenfield, Celo, Cronos, Crust, Ethereum, Fantom, Gnosis, Hedera, Integritee, Iotex, Klaytn, Moonbeam, Opbnb, Optimism, Polkadex, Polkadot, Polygon, Scroll, Sirius, Solana, Starknet, Telos, Tron, Wanchain, Zeitgeist } from '../src/emblematic-svelte'
import TestSlots from './TestSlots.svelte'

describe('using Emblematic icon components', () => {
  afterEach(() => cleanup())

  const icons = [Algorand, Arbitrum, Avalanche, Base, Bitcoin, BnbChain, BnbGreenfield, Celo, Cronos, Crust, Ethereum, Fantom, Gnosis, Hedera, Integritee, Iotex, Klaytn, Moonbeam, Opbnb, Optimism, Polkadex, Polkadot, Polygon, Scroll, Sirius, Solana, Starknet, Telos, Tron, Wanchain, Zeitgeist]

  it('should render an component', () => {
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
