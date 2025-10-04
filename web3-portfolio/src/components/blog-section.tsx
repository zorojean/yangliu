'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight, BookOpen, Code, Zap } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Building Gas-Efficient Smart Contracts: A Complete Guide',
    description: 'Learn advanced techniques for optimizing gas consumption in Solidity smart contracts, including storage optimization and assembly tricks.',
    category: 'Smart Contracts',
    readTime: '12 min read',
    publishedAt: '2024-01-15',
    image: '/api/placeholder/400/250',
    tags: ['Solidity', 'Gas Optimization', 'Assembly'],
    featured: true
  },
  {
    id: 2,
    title: 'DeFi Protocol Security: Common Vulnerabilities and How to Avoid Them',
    description: 'A comprehensive analysis of DeFi security vulnerabilities and best practices for building secure protocols.',
    category: 'Security',
    readTime: '15 min read',
    publishedAt: '2024-01-10',
    image: '/api/placeholder/400/250',
    tags: ['DeFi', 'Security', 'Auditing'],
    featured: false
  },
  {
    id: 3,
    title: 'Cross-Chain Bridge Implementation: Technical Deep Dive',
    description: 'Step-by-step guide to building a secure cross-chain bridge using LayerZero and custom message passing.',
    category: 'Infrastructure',
    readTime: '20 min read',
    publishedAt: '2024-01-05',
    image: '/api/placeholder/400/250',
    tags: ['Cross-Chain', 'LayerZero', 'Bridges'],
    featured: false
  },
  {
    id: 4,
    title: 'NFT Marketplace Architecture: From Concept to Production',
    description: 'Complete breakdown of building a scalable NFT marketplace with IPFS integration and royalty systems.',
    category: 'NFT',
    readTime: '18 min read',
    publishedAt: '2023-12-28',
    image: '/api/placeholder/400/250',
    tags: ['NFT', 'Marketplace', 'IPFS'],
    featured: true
  }
]

const categories = [
  { name: 'All', count: 12, icon: BookOpen },
  { name: 'Smart Contracts', count: 4, icon: Code },
  { name: 'DeFi', count: 3, icon: Zap },
  { name: 'Security', count: 2, icon: BookOpen },
  { name: 'NFT', count: 2, icon: BookOpen },
  { name: 'Infrastructure', count: 1, icon: BookOpen }
]

export function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3)

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into Web3 development, smart contract security, and blockchain architecture.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.name}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </Button>
            )
          })}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="p-6 pb-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="web3">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-12 h-12 text-white opacity-80" />
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to read more technical content?
          </p>
          <Button variant="outline" size="lg">
            <BookOpen className="w-5 h-5 mr-2" />
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
