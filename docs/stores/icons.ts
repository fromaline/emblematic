import { defineStore } from 'pinia'

interface Icon {
  name: string
  chain: string
  slug: string
}

interface State {
  icons: Icon[]
}

export const useIconsStore = defineStore('iconsStore', {
  state: (): State => ({
    icons: [
      {
        name: 'Airdao',
        chain: 'AirDAO',
        slug: 'airdao',
      },
      {
        name: 'Algorand',
        chain: 'Algorand',
        slug: 'algorand',
      },
      {
        name: 'Arbitrum',
        chain: 'Arbitrum',
        slug: 'arbitrum',
      },
      {
        name: 'Arthera',
        chain: 'Arthera',
        slug: 'arthera',
      },
      {
        name: 'Avalanche',
        chain: 'Avalanche',
        slug: 'avalanche',
      },
      {
        name: 'Base',
        chain: 'Base',
        slug: 'base',
      },
      {
        name: 'Bitcoin',
        chain: 'Bitcoin',
        slug: 'bitcoin',
      },
      {
        name: 'BnbChain',
        chain: 'Bnb Chain',
        slug: 'bnb-chain',
      },
      {
        name: 'BnbGreenfield',
        chain: 'BNB Greenfield',
        slug: 'bnb-greenfield',
      },
      {
        name: 'Celo',
        chain: 'Celo',
        slug: 'celo',
      },
      {
        name: 'Cronos',
        chain: 'Cronos',
        slug: 'cronos',
      },
      {
        name: 'Crust',
        chain: 'Crust',
        slug: 'crust',
      },
      {
        name: 'Ecash',
        chain: 'eCash',
        slug: 'ecash',
      },
      {
        name: 'Ethereum',
        chain: 'Ethereum',
        slug: 'ethereum',
      },
      {
        name: 'Fantom',
        chain: 'Fantom',
        slug: 'fantom',
      },
      {
        name: 'Gnosis',
        chain: 'Gnosis Chain',
        slug: 'gnosis',
      },
      {
        name: 'Hedera',
        chain: 'Hedera',
        slug: 'hedera',
      },
      {
        name: 'Multiversx',
        chain: 'MultiversX',
        slug: 'multiversx',
      },
      {
        name: 'Integritee',
        chain: 'Integritee',
        slug: 'integritee',
      },
      {
        name: 'Iotex',
        chain: 'Iotex',
        slug: 'iotex',
      },
      {
        name: 'Klaytn',
        chain: 'Klaytn',
        slug: 'klaytn',
      },
      {
        name: 'Moonbeam',
        chain: 'Moonbeam',
        slug: 'moonbeam',
      },
      {
        name: 'Opbnb',
        chain: 'opBNB',
        slug: 'opbnb',
      },
      {
        name: 'Optimism',
        chain: 'Optimism',
        slug: 'optimism',
      },
      {
        name: 'Polkadex',
        chain: 'Polkadex',
        slug: 'polkadex',
      },
      {
        name: 'Polkadot',
        chain: 'Polkadot',
        slug: 'polkadot',
      },
      {
        name: 'Polygon',
        chain: 'Polygon',
        slug: 'polygon',
      },
      {
        name: 'Scroll',
        chain: 'Scroll',
        slug: 'scroll',
      },
      {
        name: 'Sirius',
        chain: 'Sirius',
        slug: 'sirius',
      },
      {
        name: 'Solana',
        chain: 'Solana',
        slug: 'solana',
      },
      {
        name: 'Starknet',
        chain: 'Starknet',
        slug: 'starknet',
      },
      {
        name: 'Stellar',
        chain: 'Stellar',
        slug: 'stellar',
      },
      {
        name: 'Telos',
        chain: 'Telos',
        slug: 'telos',
      },
      {
        name: 'Ton',
        chain: 'Ton',
        slug: 'ton',
      },
      {
        name: 'Tron',
        chain: 'Tron',
        slug: 'tron',
      },
      {
        name: 'Wanchain',
        chain: 'Wanchain',
        slug: 'wanchain',
      },
      {
        name: 'Zeitgeist',
        chain: 'Zeitgeist',
        slug: 'zeitgeist',
      },
    ],
  }),
  getters: {
    iconsBySlug: state => state.icons.reduce((acc, icon) => {
      acc[icon.slug] = icon

      return acc
    }, <Record<string, Icon>>{}),
    popularIcons: state => state.icons.filter(({ chain }) => ['Algorand', 'Arbitrum', 'Avalanche', 'Base', 'Bitcoin', 'Bnb Chain', 'Cronos', 'Ethereum', 'Fantom', 'Hedera', 'Optimism', 'Polkadot', 'Polygon', 'Solana', 'Ton', 'Tron'].includes(chain)),
  },
})
