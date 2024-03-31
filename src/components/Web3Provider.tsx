"use client";
import { WagmiProvider, createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [base],
    transports: {
      // RPC URL for each chain
      [base.id]: http(
        "https://mainnet.base.org",
      ),
    },
    pollingInterval: 12_000,

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",

    // Required App Info
    appName: "higher",

    // Optional App Info
    appDescription: "a community of optimists on Base",
    appUrl: "https://higher.party",
    appIcon: "https://higher.party/512.png",
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
