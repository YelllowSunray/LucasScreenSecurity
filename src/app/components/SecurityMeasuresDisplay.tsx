/**
 * Blockrise Security Measures Display Component
 * 
 * A premium touchscreen display showcasing Blockrise's security infrastructure
 * with detailed explanations for each security measure.
 */

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SecurityMeasure {
  id: number;
  headline: string;
  mainExplanation: string;
  detailedSections: {
    title: string;
    content: string;
    icon: string;
  }[];
  icon: string;
  iconAlt: string;
}

const securityMeasures: SecurityMeasure[] = [
  {
    id: 1,
    headline: "Swiss-Grade Hardware Security",
    mainExplanation: "Your Bitcoin is protected by Swiss-grade Hardware Security Modules (HSMs) - the gold standard in financial security worldwide.",
    detailedSections: [
      {
        title: "Military-Grade Encryption",
        content: "Every private key is encrypted using the same technology trusted by central banks and major financial institutions. Our HSMs use AES-256 encryption - so secure it would take billions of years to crack even with the most powerful computers.",
        icon: "🔒"
      },
      {
        title: "Physical Security",
        content: "Your keys are stored in ultra-secure Swiss data centers, protected by 24/7 armed security, biometric access controls, and earthquake-proof vaults. These facilities are rated Tier IV - the highest security standard in the industry.",
        icon: "🏛️"
      },
      {
        title: "Multi-Layer Protection",
        content: "We use a sophisticated system of security layers. Even if someone managed to breach the physical security (which has never happened), they'd still need to bypass multiple encryption layers, biometric checks, and time-locked security protocols.",
        icon: "🛡️"
      }
    ],
    icon: "🔐",
    iconAlt: "Swiss vault security"
  },
  {
    id: 2,
    headline: "Global Backup Protection",
    mainExplanation: "Your Bitcoin is secured through a sophisticated global backup system that ensures 100% uptime and protection against any single point of failure.",
    detailedSections: [
      {
        title: "Worldwide Secure Locations",
        content: "Your backup keys are distributed across multiple high-security facilities in Switzerland, Singapore, and other strategic locations. Each facility operates independently, ensuring your Bitcoin remains accessible even if an entire region goes offline.",
        icon: "🌍"
      },
      {
        title: "Advanced Backup Protocol",
        content: "We use Shamir's Secret Sharing - a mathematical technique that splits your keys into multiple parts. Even if someone obtained one part, they couldn't access your Bitcoin. It takes a specific combination of parts to restore access.",
        icon: "🔢"
      },
      {
        title: "Real-Time Monitoring",
        content: "Our security team monitors all backup locations 24/7 with advanced intrusion detection systems. Any unauthorized access attempt triggers immediate security protocols and alerts our rapid response team.",
        icon: "📡"
      }
    ],
    icon: "🌐",
    iconAlt: "Global protection network"
  },
  {
    id: 3,
    headline: "Transparent Blockchain Verification",
    mainExplanation: "Every single Bitcoin transaction is publicly verifiable on the blockchain, ensuring complete transparency and trust.",
    detailedSections: [
      {
        title: "Real-Time Verification",
        content: "You can verify your Bitcoin holdings at any time using public blockchain explorers. Unlike traditional banks, you don't have to trust us - you can see your exact balance and transaction history on the blockchain yourself.",
        icon: "🔍"
      },
      {
        title: "Individual Wallet Architecture",
        content: "Each client gets their own dedicated Bitcoin addresses. This means you can always verify that your Bitcoin is exactly where it should be, completely separate from other clients' funds.",
        icon: "💼"
      },
      {
        title: "Proof of Reserve",
        content: "We regularly publish cryptographic proofs that demonstrate we hold 100% of client Bitcoin. This is like a bank audit, but better - because you can verify it yourself anytime without trusting third parties.",
        icon: "✅"
      }
    ],
    icon: "📊",
    iconAlt: "Blockchain verification"
  },
  {
    id: 4,
    headline: "Isolated Wallet Architecture",
    mainExplanation: "Your Bitcoin is stored in completely separate, isolated wallets - ensuring maximum security through perfect isolation.",
    detailedSections: [
      {
        title: "Complete Separation",
        content: "Each client's Bitcoin is stored in entirely separate wallets with unique private keys. This means that even in the extremely unlikely event that one wallet is compromised, all other wallets remain completely secure.",
        icon: "🔒"
      },
      {
        title: "Zero Pooling",
        content: "Unlike many services that mix client funds together, we never pool Bitcoin. Your coins are always in your dedicated wallet, completely separate from other clients' assets. This eliminates any risk of internal accounting errors or cross-contamination.",
        icon: "↔️"
      },
      {
        title: "Individual Verification",
        content: "Because each wallet is separate, you can independently verify your exact Bitcoin balance on the blockchain at any time. This provides unprecedented transparency and ensures your assets are exactly where they should be.",
        icon: "✓"
      }
    ],
    icon: "📦",
    iconAlt: "Isolated wallets"
  }
];

export default function SecurityMeasuresDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  // Removed auto-cycling useEffect

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 400);
  };

  const currentMeasure = securityMeasures[currentIndex];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header with logo */}
      <header className="pt-8 pb-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative w-[600px] h-[150px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/images/blockrisefinal.png"
                alt="Blockrise Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transform: 'scale(1.5)',
                }}
                width={800}
                height={200}
                priority
                quality={100}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Security Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 text-center">
            Your Bitcoin, Protected by World-Class Standards
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-8 pb-16">
        <div 
          className={`transition-all duration-700 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {/* Main security feature card */}
          <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl p-8 md:p-12 shadow-2xl border border-[#1e293b]">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left column - Main info */}
              <div>
                <div className="mb-8">
                  <span className="text-6xl mb-6 block">{currentMeasure.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {currentMeasure.headline}
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {currentMeasure.mainExplanation}
                  </p>
                </div>

                {/* Detailed sections */}
                <div className="space-y-8">
                  {currentMeasure.detailedSections.map((section, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#1e293b]/50 rounded-xl p-6 hover:bg-[#1e293b] transition-all cursor-pointer"
                      onClick={() => setExpandedSection(expandedSection === idx ? null : idx)}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">{section.icon}</span>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">
                            {section.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column - Visual representation */}
              <div className="hidden md:block">
                {/* Add detailed security diagrams or animations here */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center">
                  <span className="text-[150px]">{currentMeasure.icon}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12">
          <div className="flex justify-center space-x-3 mb-8">
            {securityMeasures.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`View security measure ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress indicator */}
          <div className="max-w-md mx-auto">
            <div className="h-1 bg-gray-800 rounded-full">
              <div 
                className="h-1 bg-white rounded-full transition-all duration-1000"
                style={{ width: `${((currentIndex + 1) / securityMeasures.length) * 100}%` }}
              />
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              Tap any section above to learn more
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 