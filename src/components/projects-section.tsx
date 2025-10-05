'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, TrendingUp, Users, Zap, Shield, Globe } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'NFT Marketplace Platform',
    description: 'A comprehensive NFT marketplace with minting, trading, and auction features built on Ethereum and Polygon.',
    image: '/api/placeholder/600/400',
    technologies: ['Solidity', 'React', 'IPFS', 'Web3.js'],
    features: [
      'Gas-optimized smart contracts',
      'IPFS metadata storage',
      'Multi-chain support',
      'Royalty system'
    ],
    stats: {
      volume: '2.5M',
      users: '15K',
      contracts: '3'
    },
    contractAddress: '0x742d35Cc6634C0532925a3b8D5A2b3c2b3c2b3c2',
    github: 'https://github.com/yourusername/nft-marketplace',
    demo: 'https://nft-demo.vercel.app',
    status: 'Live'
  },
  {
    id: 2,
    title: 'Perpetual DEX Protocol',
    description: 'Decentralized perpetual futures exchange with advanced trading features and risk management.',
    image: '/api/placeholder/600/400',
    technologies: ['Solidity', 'TypeScript', 'The Graph', 'Chainlink'],
    features: [
      'Cross-margin trading',
      'Up to 50x leverage',
      'Real-time price feeds',
      'Automated liquidations'
    ],
    stats: {
      volume: '125M',
      users: '8.5K',
      contracts: '12'
    },
    contractAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    github: 'https://github.com/yourusername/perps-dex',
    demo: 'https://perps-demo.vercel.app',
    status: 'Beta'
  },
  {
    id: 3,
    title: 'Custom Blockchain Network',
    description: 'High-performance blockchain with custom consensus mechanism optimized for DeFi applications.',
    image: '/api/placeholder/600/400',
    technologies: ['Go', 'Rust', 'Tendermint', 'Cosmos SDK'],
    features: [
      '5000+ TPS capacity',
      'Sub-second finality',
      'EVM compatibility',
      'Cross-chain bridges'
    ],
    stats: {
      tps: '5000+',
      validators: '100+',
      bridges: '5'
    },
    contractAddress: 'cosmos1...',
    github: 'https://github.com/yourusername/custom-chain',
    demo: 'https://explorer.yourchain.com',
    status: 'Testnet'
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of Web3 projects, from NFT marketplaces to custom blockchain networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant={project.status === 'Live' ? 'success' : project.status === 'Beta' ? 'warning' : 'secondary'}
                    className="mb-2"
                  >
                    {project.status}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="p-3 bg-muted rounded-lg">
                      <div className="text-lg font-semibold">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key === 'tps' ? 'TPS' : key === 'volume' ? 'Volume' : key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contract Address */}
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Contract Address</span>
                  </div>
                  <code className="text-xs text-muted-foreground break-all">
                    {project.contractAddress}
                  </code>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <Zap className="w-3 h-3 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="web3" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more projects and technical deep-dives?
          </p>
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
