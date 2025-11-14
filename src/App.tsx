import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GithubLogo, Copy, Check, Terminal, Lock, Shield, Crosshair, Cpu } from "@phosphor-icons/react"
import { useState } from "react"

function App() {
  const [copiedCommand, setCopiedCommand] = useState(false)
  
  const gitCloneCommand = "git clone https://github.com/forge-55/bunkeros.git"
  const githubUrl = "https://github.com/forge-55/bunkeros"
  
  const handleCopyCommand = () => {
    navigator.clipboard.writeText(gitCloneCommand)
    setCopiedCommand(true)
    setTimeout(() => setCopiedCommand(false), 2000)
  }
  
  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-20 left-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <header className="mb-24 text-center">
          <h1 className="mb-8 text-6xl font-bold tracking-[-0.02em] md:text-7xl lg:text-8xl">
            BunkerOS
          </h1>
          <p className="mx-auto mb-4 max-w-3xl text-2xl font-semibold leading-tight text-foreground md:text-3xl">
            A Mission-Focused Sway Setup for Arch Linux
          </p>
          <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            BunkerOS is a configuration layer for Arch Linux that delivers a distraction-free, keyboard-driven environment powered by Sway with intelligent autotiling, tactical theming, and professional-grade tools for mission-focused computing.
          </p>
          
          <div className="mx-auto max-w-3xl space-y-6">
            <Card className="group relative overflow-hidden border-2 border-primary/30 bg-card/80 p-8 shadow-2xl backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-primary/10">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/5 blur-3xl transition-all group-hover:bg-accent/10" />
              
              <div className="relative mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent/40 bg-accent/10">
                    <Terminal className="text-accent" size={16} weight="bold" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.08em] text-accent">
                    Get Started
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopyCommand}
                  className="text-accent hover:bg-accent/10 hover:text-accent"
                >
                  {copiedCommand ? (
                    <>
                      <Check className="mr-2" weight="bold" size={18} />
                      <span className="text-xs font-semibold uppercase tracking-wider">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2" size={18} />
                      <span className="text-xs font-semibold uppercase tracking-wider">Copy</span>
                    </>
                  )}
                </Button>
              </div>
              <code className="relative block overflow-x-auto rounded-md border border-border/50 bg-background p-5 text-sm font-semibold text-accent backdrop-blur-sm md:text-base"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {gitCloneCommand}
              </code>
            </Card>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="h-14 bg-accent px-8 text-base font-semibold uppercase tracking-wider text-accent-foreground shadow-xl shadow-accent/20 transition-all hover:bg-accent/90 hover:shadow-accent/30"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubLogo className="mr-3" weight="fill" size={24} />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </header>
        
        <Separator className="my-24 bg-border/50" />
        
        <section className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Why BunkerOS?
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group relative overflow-hidden border-2 border-primary/20 bg-card/60 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-2 border-primary/10 bg-primary/5 blur-sm" />
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <Shield className="text-primary" size={28} weight="duotone" />
              </div>
              <h3 className="relative mb-3 text-xl font-bold">Transparent Configuration</h3>
              <p className="relative text-base leading-relaxed text-muted-foreground">
                All configuration files are symlinked to the git repository. See exactly what BunkerOS modifies, audit changes, and maintain full control over your system with standard Arch tools.
              </p>
            </Card>
            
            <Card className="group relative overflow-hidden border-2 border-primary/20 bg-card/60 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-2 border-primary/10 bg-primary/5 blur-sm" />
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <span className="text-2xl font-bold text-primary">✦</span>
              </div>
              <h3 className="relative mb-3 text-xl font-bold">Intelligent Autotiling</h3>
              <p className="relative text-base leading-relaxed text-muted-foreground">
                Sway window manager with smart autotiling adapts to your workflow. Keyboard-driven navigation with tmux multiplexer integration for seamless, distraction-free productivity.
              </p>
            </Card>
            
            <Card className="group relative overflow-hidden border-2 border-primary/20 bg-card/60 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-2 border-primary/10 bg-primary/5 blur-sm" />
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <Cpu className="text-primary" size={28} weight="duotone" />
              </div>
              <h3 className="relative mb-3 text-xl font-bold">Curated Toolkit</h3>
              <p className="relative text-base leading-relaxed text-muted-foreground">
                Professional-grade tools out of the box. Five custom themes, multi-monitor support with HiDPI scaling, MacBook-quality touchpad gestures, and video conferencing ready.
              </p>
            </Card>
            
            <Card className="group relative overflow-hidden border-2 border-primary/20 bg-card/60 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-2 border-primary/10 bg-primary/5 blur-sm" />
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <Crosshair className="text-primary" size={28} weight="duotone" />
              </div>
              <h3 className="relative mb-3 text-xl font-bold">Keep Full Control</h3>
              <p className="relative text-base leading-relaxed text-muted-foreground">
                Standard packaging with pacman and yay exclusively. No custom package managers, auditable changes, and easy updates with git pull. Remove symlinks anytime to return to vanilla Arch.
              </p>
            </Card>
          </div>
        </section>
        
        <Separator className="my-24 bg-border/50" />
        
        <section className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Technical Specifications
            </h2>
          </div>
          
          <Card className="mx-auto max-w-3xl border-2 border-accent/30 bg-card/60 p-10 backdrop-blur-sm">
            <div className="grid gap-4 text-base" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <div className="flex border-b border-border/30 pb-3">
                <span className="w-40 font-semibold text-accent">Base:</span>
                <span className="text-foreground">Arch Linux</span>
              </div>
              <div className="flex border-b border-border/30 pb-3">
                <span className="w-40 font-semibold text-accent">WM:</span>
                <span className="text-foreground">Sway (Wayland)</span>
              </div>
              <div className="flex border-b border-border/30 pb-3">
                <span className="w-40 font-semibold text-accent">Bar:</span>
                <span className="text-foreground">Waybar</span>
              </div>
              <div className="flex border-b border-border/30 pb-3">
                <span className="w-40 font-semibold text-accent">Launcher:</span>
                <span className="text-foreground">Wofi</span>
              </div>
              <div className="flex border-b border-border/30 pb-3">
                <span className="w-40 font-semibold text-accent">Notifications:</span>
                <span className="text-foreground">SwayNC</span>
              </div>
              <div className="flex border-b border-border/30 pb-3">
                <span className="w-40 font-semibold text-accent">Terminal:</span>
                <span className="text-foreground">tmux + Vim/Micro</span>
              </div>
              <div className="flex border-b border-border/30 pb-3">
                <span className="w-40 font-semibold text-accent">Themes:</span>
                <span className="text-foreground">5 custom themes (Tactical, Night-Ops, Sahara, Abyss, Winter)</span>
              </div>
              <div className="flex border-b border-border/30 pb-3">
                <span className="w-40 font-semibold text-accent">Boot:</span>
                <span className="text-foreground">Plymouth with official Arch Linux logo</span>
              </div>
              <div className="flex border-b border-border/30 pb-3">
                <span className="w-40 font-semibold text-accent">Approach:</span>
                <span className="text-foreground">Symlinked configs, standard packaging</span>
              </div>
              <div className="flex">
                <span className="w-40 font-semibold text-accent">Philosophy:</span>
                <span className="text-foreground">Transparent, auditable, reversible</span>
              </div>
            </div>
          </Card>
        </section>
        
        <Separator className="my-24 bg-border/50" />
        
        <section className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Installation
            </h2>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <h3 className="mb-6 text-center text-2xl font-bold">How It Works</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg border border-border/30 bg-card/40 p-5 backdrop-blur-sm">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Install minimal Arch Linux</h4>
                    <p className="text-sm text-muted-foreground">Use archinstall or manual installation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border/30 bg-card/40 p-5 backdrop-blur-sm">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Clone BunkerOS repository</h4>
                    <p className="text-sm text-muted-foreground">Get the configuration files</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border/30 bg-card/40 p-5 backdrop-blur-sm">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Run installation script</h4>
                    <p className="text-sm text-muted-foreground">Symlinks configs to your system</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border/30 bg-card/40 p-5 backdrop-blur-sm">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-accent" />
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Complete Sway environment</h4>
                    <p className="text-sm text-muted-foreground">Reboot and select BunkerOS at login</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-l-4 border-l-primary bg-card/60 p-8 backdrop-blur-sm">
              <h3 className="mb-3 text-xl font-bold">Quick Start: archinstall Profile</h3>
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                The fastest way to get BunkerOS up and running is using the automated archinstall profile. Boot the Arch Linux ISO and run the install script to automate the entire process: Arch Linux installation + BunkerOS configuration.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Already have Arch Linux? Simply clone the repository, run <code className="rounded bg-background px-2 py-1 text-accent" style={{ fontFamily: 'JetBrains Mono, monospace' }}>./install.sh</code>, and reboot to your new Sway environment.
              </p>
            </Card>
          </div>
        </section>
        
        <Separator className="my-24 bg-border/50" />
        
        <section className="mb-24">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent/40 bg-accent/10">
              <Lock className="text-accent" size={22} weight="duotone" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Philosophy
            </h2>
          </div>
          
          <Card className="mx-auto max-w-4xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-card/80 to-card/60 p-12 backdrop-blur-md">
            <p className="text-center text-lg leading-relaxed text-foreground md:text-xl">
              BunkerOS maintains Arch's transparency and flexibility while providing a polished, keyboard-driven desktop environment. Every configuration is visible in the git repository, all changes are auditable, and you keep full control with standard Arch tools. Clean tactical theming and intelligent autotiling create a distraction-free workspace built for mission-focused computing.
            </p>
          </Card>
        </section>
        
        <footer className="mt-24 border-t border-border/50 pt-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <div className="h-1.5 w-1.5 rotate-45 bg-accent" />
            <div className="h-1.5 w-1.5 rotate-45 bg-accent" />
          </div>
          <p className="text-sm text-muted-foreground">
            BunkerOS is free and open-source software. Built by operators, for operators.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60">
            A custom Sway setup for mission-focused computing
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
