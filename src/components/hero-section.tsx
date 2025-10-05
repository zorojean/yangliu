'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, Twitter, Linkedin, Mail, ArrowDown, Zap } from 'lucide-react'
import { useAccount } from 'wagmi'

export function HeroSection() {
  const { address, isConnected } = useAccount()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }} />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Status Badge */}
        <div className="mb-6">
          <Badge variant="web3" className="px-4 py-2 text-sm">
            <Zap className="w-4 h-4 mr-2" />
            Available for Web3 Projects
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block text-foreground">Building the</span>
          <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Future of Web3
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Full-stack Web3 developer specializing in smart contracts, DeFi protocols, 
          and decentralized applications. Passionate about building innovative blockchain solutions.
        </p>

        {/* Wallet Connection Status */}
        {isConnected && address && (
          <div className="mb-8">
            <Badge variant="success" className="px-4 py-2">
              Connected: {address.slice(0, 6)}...{address.slice(-4)}
            </Badge>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-4">Technologies I work with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Solidity', 'Ethereum', 'Polygon', 'Arbitrum', 'React', 'Next.js', 
              'TypeScript', 'Web3.js', 'Ethers.js', 'Hardhat', 'IPFS'
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="web3" className="px-8 py-3">
            View My Projects
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-3">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}