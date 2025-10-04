'use client'

import { useState, useEffect } from 'react'
import { useAccount, useBalance, useReadContract, useWriteContract } from 'wagmi'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Wallet, 
  Coins, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Copy,
  ExternalLink
} from 'lucide-react'
import { formatEther, parseEther } from 'viem'
import { copyToClipboard, formatAddress } from '@/lib/utils'

// Example ERC20 token contract (USDC on Sepolia testnet)
const USDC_CONTRACT = {
  address: '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8' as `0x${string}`,
  abi: [
    {
      name: 'balanceOf',
      type: 'function',
      stateMutability: 'view',
      inputs: [{ name: 'account', type: 'address' }],
      outputs: [{ name: 'balance', type: 'uint256' }]
    },
    {
      name: 'transfer',
      type: 'function',
      stateMutability: 'nonpayable',
      inputs: [
        { name: 'to', type: 'address' },
        { name: 'amount', type: 'uint256' }
      ],
      outputs: [{ name: 'success', type: 'bool' }]
    },
    {
      name: 'symbol',
      type: 'function',
      stateMutability: 'view',
      inputs: [],
      outputs: [{ name: '', type: 'string' }]
    },
    {
      name: 'decimals',
      type: 'function',
      stateMutability: 'view',
      inputs: [],
      outputs: [{ name: '', type: 'uint8' }]
    }
  ]
}

export function Web3Demo() {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({ address })
  const { writeContract, isPending, error } = useWriteContract()
  
  // Read token info
  const { data: tokenSymbol } = useReadContract({
    ...USDC_CONTRACT,
    functionName: 'symbol'
  })
  
  const { data: tokenBalance } = useReadContract({
    ...USDC_CONTRACT,
    functionName: 'balanceOf',
    args: address ? [address] : undefined
  })
  
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [txHash, setTxHash] = useState<string | null>(null)

  const handleTransfer = async () => {
    if (!address || !recipient || !amount) return
    
    try {
      const hash = await writeContract({
        ...USDC_CONTRACT,
        functionName: 'transfer',
        args: [recipient as `0x${string}`, parseEther(amount)]
      })
      setTxHash(hash)
    } catch (err) {
      console.error('Transfer failed:', err)
    }
  }

  const copyAddress = () => {
    if (address) {
      copyToClipboard(address)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Web3 Interaction Demo
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience live blockchain interactions right here on the website
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wallet Status */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wallet className="w-6 h-6 text-primary" />
                <span>Wallet Status</span>
              </CardTitle>
              <CardDescription>
                Current wallet connection and balance information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isConnected ? (
                <>
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-800 dark:text-green-200">
                        Connected
                      </span>
                    </div>
                    <Badge variant="success">Active</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Address</label>
                      <div className="flex items-center space-x-2 p-2 bg-muted rounded">
                        <code className="text-sm flex-1">{address && formatAddress(address)}</code>
                        <Button variant="ghost" size="sm" onClick={copyAddress}>
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">ETH Balance</label>
                      <div className="p-2 bg-muted rounded">
                        <span className="font-mono">
                          {balance ? formatEther(balance.value) : '0'} ETH
                        </span>
                      </div>
                    </div>
                    
                    {tokenBalance && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          {tokenSymbol || 'Token'} Balance
                        </label>
                        <div className="p-2 bg-muted rounded">
                          <span className="font-mono">
                            {formatEther(tokenBalance)} {tokenSymbol || 'TOKENS'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Connect your wallet to interact with the demo
                  </p>
                  <Badge variant="secondary">Disconnected</Badge>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Token Transfer Demo */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="w-6 h-6 text-primary" />
                <span>Token Transfer Demo</span>
              </CardTitle>
              <CardDescription>
                Send tokens to any address (Sepolia testnet only)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isConnected ? (
                <>
                  <div>
                    <label htmlFor="recipient" className="block text-sm font-medium mb-2">
                      Recipient Address
                    </label>
                    <Input
                      id="recipient"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      placeholder="0x..."
                      className="font-mono text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium mb-2">
                      Amount (ETH)
                    </label>
                    <Input
                      id="amount"
                      type="number"
                      step="0.001"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.1"
                    />
                  </div>
                  
                  {error && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm">{error.message}</span>
                    </div>
                  )}
                  
                  {txHash && (
                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-md">
                      <CheckCircle className="w-5 h-5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Transaction successful!</p>
                        <a
                          href={`https://sepolia.etherscan.io/tx/${txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs underline hover:no-underline"
                        >
                          View on Etherscan
                          <ExternalLink className="w-3 h-3 inline ml-1" />
                        </a>
                      </div>
                    </div>
                  )}
                  
                  <Button
                    onClick={handleTransfer}
                    disabled={!recipient || !amount || isPending}
                    className="w-full"
                    variant="web3"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Transaction
                      </>
                    )}
                  </Button>
                  
                  <div className="text-xs text-muted-foreground text-center">
                    <p>⚠️ This demo uses Sepolia testnet</p>
                    <p>Get test ETH from <a href="https://sepoliafaucet.com" target="_blank" rel="noopener noreferrer" className="underline">Sepolia Faucet</a></p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Coins className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Connect your wallet to use the transfer demo
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Live Web3 Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <Wallet className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Wallet Integration</h4>
              <p className="text-sm text-muted-foreground">
                Connect with MetaMask, WalletConnect, and other popular wallets
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <Coins className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Balance Reading</h4>
              <p className="text-sm text-muted-foreground">
                Real-time balance display for ETH and ERC20 tokens
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <Send className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Transaction Demo</h4>
              <p className="text-sm text-muted-foreground">
                Send transactions directly from the website interface
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
