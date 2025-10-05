import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail, Code, Heart } from 'lucide-react'

const footerLinks = {
  projects: [
    { name: 'NFT Marketplace', href: '#projects' },
    { name: 'Perps DEX', href: '#projects' },
    { name: 'Custom Blockchain', href: '#projects' },
  ],
  resources: [
    { name: 'Blog', href: '#blog' },
    { name: 'GitHub', href: 'https://github.com/web3dev' },
    { name: 'Resume', href: '/resume.pdf' },
  ],
  connect: [
    { name: 'Twitter', href: 'https://twitter.com/web3dev' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/web3dev' },
    { name: 'Email', href: 'mailto:contact@web3dev.com' },
  ]
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Yang Liu
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Building the future of Web3 through innovative blockchain solutions and smart contracts.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/web3dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/web3dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/web3dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@web3dev.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Yang Liu. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the Web3 community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
