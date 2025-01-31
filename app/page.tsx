'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from "react"
import { Waves } from "@/components/ui/waves-background"

export default function Home() {
  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f3f3] text-[#4A4A4A] p-6 relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Waves
          lineColor="rgba(74, 74, 74, 0.15)"
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.01}
          waveAmpX={50}
          waveAmpY={25}
          friction={0.95}
          tension={0.01}
          maxCursorMove={150}
          xGap={16}
          yGap={42}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center max-w-7xl mx-auto py-4">
          <Link href="/" className="text-xl font-medium hover:opacity-75 transition-opacity">
            Freeflow Collective
          </Link>
          <div className="space-x-6">
            <button 
              onClick={() => handleScrollTo('products')} 
              className="text-sm hover:opacity-75 cursor-pointer transition-opacity"
            >
              Products
            </button>
            <button 
              onClick={() => handleScrollTo('values')} 
              className="text-sm hover:opacity-75 cursor-pointer transition-opacity"
            >
              Values
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto mt-20 animate-in fade-in duration-1000">
          <h1 className="text-5xl font-light mb-8 max-w-2xl">
            We&apos;re not here to fill time—
            <br />
            we&apos;re here to free it.
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed">
            Freeflow Collective rejects corporate bloat, endless meetings, and performative hustle. We&apos;re artists,
            builders, and pragmatists who believe work should serve life—not the other way around. Here, we work
            smart, stay free, and for each other.
          </p>
        </section>

        {/* Products Section */}
        <section id="products" className="max-w-7xl mx-auto mt-32 scroll-mt-20">
          <h2 className="text-2xl mb-16 animate-in fade-in duration-700">PRODUCTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Product Cards */}
            {[
              {
                title: "Flexile",
                description: "team and shareholder management",
                href: "/learn-more"
              },
              {
                title: "Gumroad",
                description: "sell your stuff, see what sticks",
                href: "/learn-more"
              },
              {
                title: "Helper",
                description: "customer support AI",
                href: "/learn-more"
              },
              {
                title: "Iffy",
                description: "keep your product clean",
                href: "/learn-more"
              },
              {
                title: "Shortest",
                description: "QA via natural language AI tests",
                href: "/learn-more"
              },
              {
                title: "Get in Touch",
                description: "Have a question or want to collaborate?",
                href: "/contact",
                linkText: "Contact us"
              }
            ].map((product, i) => (
              <div key={product.title} className="space-y-4 animate-in fade-in duration-700" style={{ '--index': i } as any}>
                <h3 className="text-xl">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
                <Link href={product.href} className="text-sm flex items-center hover:opacity-75 transition-opacity">
                  {product.linkText || "Learn more"} <span className="ml-1">↗</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="max-w-7xl mx-auto mt-32 mb-20 scroll-mt-20">
          <h2 className="text-2xl mb-16 animate-in fade-in duration-700">VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              {
                icon: "★",
                title: "Real artists ship",
                points: [
                  "Launch early, iterate daily. Feedback is oxygen.",
                  "Steal code, tools, and ideas proudly.",
                  "If it doesn't ship, it doesn't count."
                ]
              },
              {
                icon: "⏰",
                title: "Burn energy, not hours",
                points: [
                  "Automate the boring stuff. If AI can handle it, let it.",
                  'Ruthlessly prioritize: "Does this actually help us ship?"',
                  "Build tools that makes time for everyone."
                ]
              },
              {
                icon: "—",
                title: "Now > Later",
                points: [
                  "To-do lists are tombstones for ideas.",
                  "We design, scope, and build simultaneously.",
                  "Today's impact beats tomorrow's hypothetical."
                ]
              },
              {
                icon: "📊",
                title: "Meetings Earn Their Keep",
                points: [
                  "Don't come unless you have something to bring.",
                  "Bring work, ideas, or solutions—not excuses.",
                  "Clear next steps. Assigned owners. No vague nods."
                ]
              },
              {
                icon: "📅",
                title: "Mutual Accountability",
                points: [
                  '"I\'ll get this done before we meet" isn\'t optional.',
                  "No passive listeners. You're here to push us forward.",
                  "We yap in Cihangir. We act in meetings."
                ]
              },
              {
                icon: "♥",
                title: "Jobs Change. Principles Don't.",
                points: [
                  "Roles shift, tools evolve, standards only get sharper.",
                  "A tiny, flawless feature beats a half-baked monolith.",
                  "Mastery is fluid. We learn only what helps us ship."
                ]
              }
            ].map((value, i) => (
              <div key={value.title} className="space-y-6 animate-in fade-in duration-700" style={{ '--index': i } as any}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{value.icon}</span>
                  <h3 className="text-xl">{value.title}</h3>
                </div>
                <div className="space-y-4 text-sm">
                  {value.points.map((point, j) => (
                    <p key={j}>{point}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}