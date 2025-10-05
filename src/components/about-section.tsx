'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Award, 
  BookOpen,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react'

const skills = [
  { category: 'Blockchain Development', icon: Shield, items: ['Solidity', 'Ethereum', 'Polygon', 'Arbitrum', 'Optimism'] },
  { category: 'Smart Contracts', icon: Code, items: ['DeFi Protocols', 'NFT Contracts', 'Token Standards', 'Auditing'] },
  { category: 'Frontend Development', icon: Globe, items: ['React', 'Next.js', 'TypeScript', 'Web3.js', 'Ethers.js'] },
  { category: 'Backend & Infrastructure', icon: Database, items: ['Node.js', 'The Graph', 'IPFS', 'AWS', 'Docker'] },
]

const achievements = [
  {
    title: 'Smart Contract Auditor',
    description: 'Certified smart contract security auditor with 50+ audits completed',
    icon: Shield,
    year: '2023'
  },
  {
    title: 'Hackathon Winner',
    description: '1st place at ETHGlobal with innovative DeFi protocol',
    icon: Award,
    year: '2023'
  },
  {
    title: 'Open Source Contributor',
    description: 'Active contributor to major Web3 projects and protocols',
    icon: Github,
    year: '2022-Present'
  },
  {
    title: 'Technical Writer',
    description: 'Published 20+ articles on blockchain development and Web3',
    icon: BookOpen,
    year: '2022-Present'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Web3 developer with 3+ years of experience building decentralized applications 
            and smart contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a full-stack Web3 developer passionate about building the next generation of 
                decentralized applications. With expertise in smart contract development, DeFi protocols, 
                and blockchain infrastructure, I help projects transition from Web2 to Web3.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in Web3 started during the DeFi summer of 2020, and since then I've been 
                actively contributing to the ecosystem through open-source projects, technical writing, 
                and community building.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of decentralization to create more equitable and transparent 
                systems. My goal is to bridge the gap between traditional finance and DeFi, making 
                blockchain technology accessible to everyone.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Smart Contracts</div>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="p-4 bg-muted rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">$2M+</div>
                <div className="text-sm text-muted-foreground">TVL Managed</div>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <Users className="w-24 h-24 mx-auto mb-4 opacity-80" />
                <p className="text-lg font-semibold">Web3 Developer</p>
                <p className="text-sm opacity-80">Building the Future</p>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Available
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Remote
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <CardTitle className="text-lg">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Achievements & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        {achievement.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
