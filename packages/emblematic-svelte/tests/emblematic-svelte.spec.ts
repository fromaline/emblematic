import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/svelte';
import { Algorand, Arbitrum, Avalanche, Base, Bitcoin, BnbChain, BnbGreenfield, Celo, Cronos, Crust, Ethereum, Fantom, Gnosis, Hedera, Integritee, Iotex, Klaytn, Moonbeam, Opbnb, Optimism, Polkadex, Polkadot, Polygon, Scroll, Sirius, Solana, Starknet, Telos, Tron, Wanchain, Zeitgeist } from '../src/emblematic-svelte';
import TestSlots from './TestSlots.svelte';

describe('Using Emblematic icon components', () => {
  afterEach(() => cleanup());

  const icons = [Algorand, Arbitrum, Avalanche, Base, Bitcoin, BnbChain, BnbGreenfield, Celo, Cronos, Crust, Ethereum, Fantom, Gnosis, Hedera, Integritee, Iotex, Klaytn, Moonbeam, Opbnb, Optimism, Polkadex, Polkadot, Polygon, Scroll, Sirius, Solana, Starknet, Telos, Tron, Wanchain, Zeitgeist]

  it('should render an component', () => {
    icons.forEach((icon) => {
      const { container } = render(icon);
      expect(container).toMatchSnapshot();
    })
  });

  it('should adjust the size', () => {
    icons.forEach((icon) => {
      const { container } = render(icon, {
        props: {
          size: 48,
        },
      });
  
      expect(container).toMatchSnapshot();
    })
  });

  it('should add a class to the element', () => {
    icons.forEach((icon) => {
      const testClass = 'my-icon';
      render(icon, {
        props: {
          class: testClass,
        },
      });

      const [el] = document.getElementsByClassName(testClass);

      expect(el).toBeInTheDocument();
      expect(el).toMatchSnapshot();
      expect(el).toHaveClass(testClass);
      expect(el).toHaveClass('emblematic');
      expect(el).toHaveClass('emblematic-algorand');
    })
  });

  it('should add a style attribute to the element', () => {
    icons.forEach((icon) => {
      render(icon, {
        props: {
          style: 'position: absolute;',
        },
      });
      const [el] = document.getElementsByClassName('emblematic');

      expect(el.getAttribute('style')).toContain('position: absolute');
    })
  });

  it('should render an icon slot', () => {
    const { container, getByText } = render(TestSlots);

    const textElement = getByText('Test');
    expect(textElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
