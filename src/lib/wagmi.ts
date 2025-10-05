import { createConfig, configureChains } from 'wagmi';
import { mainnet, sepolia, polygon, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia, polygon, arbitrum],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Web3 Portfolio',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains,
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export const supportedChains = chains;