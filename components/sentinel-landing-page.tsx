"use client";

import React, { useState, useEffect } from "react";
import { PhoneOff, MessageCircle, CalendarCheck, CheckCircle2, Zap, Image as ImageIcon, RotateCcw, ArrowRight, UserRound, Truck, Home, Droplets, Hammer, TreePine, Package } from "lucide-react";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function SentinelLandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden scroll-smooth">
      {/* STICKY NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" : ""}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
              <span className="text-lg font-black">S</span>
            </div>
            <span className="text-lg font-bold tracking-tight">Sentinel</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            <a href="#calculator" onClick={(e) => scrollToSection(e, "calculator")} className="hover:text-white transition-colors">Calculator</a>
            <a href="#how-it-works" onClick={(e) => scrollToSection(e, "how-it-works")} className="hover:text-white transition-colors">How It Works</a>
            <a href="#demo" onClick={(e) => scrollToSection(e, "demo")} className="hover:text-white transition-colors">Demo</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="ml-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-600/40 hover:shadow-xl hover:scale-[1.03] hover:brightness-110">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative border-b border-white/5 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(99,102,241,.15),transparent_50%),radial-gradient(ellipse_at_80%_0%,rgba(37,99,235,.12),transparent_50%)]" />
        <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="mb-4 text-sm font-medium tracking-wide text-amber-400/90">While you&apos;re on a job, your competitors are taking your calls.</p>
              
              <h1 className="max-w-xl text-[2.5rem] font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                You Missed 3–7 Calls This Week.{" "}
                <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                  That&apos;s $750–$2,100 Gone.
                </span>
              </h1>
              
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                The second you miss a call, Sentinel texts the customer back, qualifies the lead, and helps book the job before they move on to someone else.
              </p>
              
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#calculator" onClick={(e) => scrollToSection(e, "calculator")} className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 text-sm font-bold shadow-xl shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-600/40 hover:shadow-2xl hover:scale-[1.03] hover:brightness-110 sm:text-base">
                  Show Me My Missed Revenue <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href="#demo" onClick={(e) => scrollToSection(e, "demo")} className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-medium text-white/70 transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/20 hover:scale-[1.02]">
                  Watch 60-Second Demo
                </a>
              </div>
              
              <p className="mt-4 text-xs text-white/40">Works with your current phone &bull; Setup in 24 hours &bull; No contracts</p>
              
              <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span className="text-sm text-emerald-300/90">Recover 1 job in your first 7 days or don&apos;t pay.</span>
              </div>
            </div>

            {/* PHONE MOCKUP */}
            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-transparent blur-2xl" />
              <div className="animate-float relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
                <div className="rounded-[2rem] bg-gradient-to-br from-[#0c1222] to-[#0f0a1f] p-4">
                  <div className="mx-auto mb-4 h-6 w-20 rounded-full bg-black/60" />
                  <div className="mb-3 rounded-xl bg-white/[0.06] px-3 py-2.5">
                    <p className="text-[10px] font-medium text-white/40">MESSAGES &bull; now</p>
                    <p className="mt-0.5 text-xs font-semibold">Sentinel</p>
                    <p className="mt-1 text-xs text-white/70 leading-relaxed">Hey! Sorry we missed your call. What can we help you with today?</p>
                  </div>
                  <div className="space-y-2">
                    <PhoneBubble who="Customer" text="I need a couch removed." />
                    <PhoneBubble who="Sentinel" text="No problem — what's the pickup address?" outgoing />
                    <PhoneBubble who="Customer" text="123 King St." />
                    <PhoneBubble who="Sentinel" text="Perfect. Any stairs or tight access?" outgoing />
                    <PhoneBubble who="Customer" text="Second floor, no elevator." />
                  </div>
                  <div className="mt-3 flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] text-white/40">Sentinel is typing...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="calculator" className="border-b border-white/5 bg-gradient-to-b from-[#070c18] to-[#050816]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Estimate Your Lost Revenue</h2>
            <p className="mt-3 text-base text-white/50">Most local service businesses underestimate how much money disappears from missed calls.</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
              <PhoneOff className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Every Missed Call = Lost Revenue</h2>
            <div className="mt-6 flex-1 space-y-4">
              <ProblemPoint text="You're on a job and can't answer" subtext="This is when most calls happen." />
              <ProblemPoint text="Customers call the next company within minutes" subtext="They don't wait." />
              <ProblemPoint text="You never know what you lost" subtext="Silent revenue leak." />
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-white/[0.06] bg-gradient-to-br from-blue-600/[0.06] via-violet-600/[0.04] to-transparent p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">What Happens Instead</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              The second you miss a call, Sentinel texts back, asks what they need, collects the details, and gives you a ready-to-book lead.
            </p>
            <div className="mt-6 flex-1 space-y-3" id="features">
              <Feature icon={<Zap />} title="Replies in under 10 seconds" text="Books the job before they call someone else." />
              <Feature icon={<ImageIcon />} title="Gets address, photos, and scope" text="So you know exactly what you're walking into." />
              <Feature icon={<CheckCircle2 />} title="Qualifies the job before you call" text="No more wasted time on bad leads." />
              <Feature icon={<RotateCcw />} title="Automatically follows up" text="Closes jobs you would have forgotten." />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-y border-white/5 bg-[#070c18]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">From Missed Call to Booked Job in Under 2 Minutes</h2>
          </div>
          <div className="relative grid gap-6 md:grid-cols-3">
            <div className="absolute top-1/2 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />
            <Step number="1" icon={<PhoneOff />} label="STEP 1" title="Missed Call" text="A customer calls while you're busy on a job." />
            <Step number="2" icon={<MessageCircle />} label="STEP 2" title="AI Conversation" text="Sentinel texts them back and gathers job details." />
            <Step number="3" icon={<CalendarCheck />} label="STEP 3" title="Ready-to-Book Lead" text="You get address, photos, scope, and preferred time." />
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section id="demo" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">See It In Action</h2>
          <p className="mt-3 text-base text-white/50">Real example of a missed call turned into a booked job.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-white/[0.06] bg-[#080d1a] p-5 shadow-xl shadow-black/20">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-white/40">Live Conversation</span>
            </div>
            <div className="space-y-3">
              <ChatLine who="Customer" text="Hey, I need a couch removed." time="2:34 PM" />
              <ChatLine who="Sentinel" text="No problem — I can help with that. What's the pickup address?" time="2:34 PM" sent />
              <ChatLine who="Customer" text="123 King St, Apt 4B" time="2:35 PM" />
              <ChatLine who="Sentinel" text="Perfect. Are there any stairs or tight access I should know about?" time="2:35 PM" sent />
              <ChatLine who="Customer" text="Second floor, no elevator." time="2:36 PM" />
              <ChatLine who="Sentinel" text="Got it. Can you send a quick photo of the couch?" time="2:36 PM" sent />
              <ChatLine who="Sentinel" text="Would today after 4 PM or tomorrow morning work better for you?" time="2:36 PM" sent />
              <ChatLine who="Customer" text="Today after 4 PM works." time="2:37 PM" />
            </div>
          </div>
          
          <div className="relative rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-6 shadow-xl shadow-black/20">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-blue-500/20 opacity-50 blur-sm" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white">
                    <UserRound className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">New Lead Created</p>
                    <h3 className="text-2xl font-black">Sarah M.</h3>
                  </div>
                </div>
              </div>
              <div className="space-y-0">
                <LeadRow label="Address" value="123 King St, Apt 4B" />
                <LeadRow label="Job Type" value="Couch Removal" />
                <LeadRow label="Access" value="2nd floor, no elevator" />
                <LeadRow label="Preferred Time" value="Today after 4 PM" />
                <LeadRow label="Priority" value="High" highlight />
                <LeadRow label="Est. Value" value="$175" highlight />
                <LeadRow label="Response Time" value="8 seconds" />
              </div>
              <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="mt-6 block w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3.5 text-sm font-bold text-white text-center shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-600/40 hover:shadow-xl hover:scale-[1.02] hover:brightness-110 cursor-pointer">
                Ready to Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST POSITIONING - INDUSTRIES */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Built for Local Service Businesses That Miss Calls While Working</h2>
          <p className="mt-3 text-sm text-white/50">You already paid to make the phone ring. Sentinel helps make sure those calls turn into revenue.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <IndustryCard icon={<Truck />} title="Junk Removal" text="Missed calls while loading the truck." />
          <IndustryCard icon={<Package />} title="Moving Companies" text="On-site with clients, can't answer." />
          <IndustryCard icon={<Droplets />} title="Pressure Washing" text="Equipment running, phone in the truck." />
          <IndustryCard icon={<Hammer />} title="Contractors" text="Hands full on the job site." />
          <IndustryCard icon={<TreePine />} title="Landscaping" text="Mowing, trimming, can't hear the phone." />
          <IndustryCard icon={<Home />} title="Hauling" text="Driving loads, can't safely answer." />
        </div>
        <p className="mt-8 text-center text-xs text-white/30">Currently onboarding select businesses.</p>
      </section>

      {/* SETUP SECTION */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8">
          <h3 className="mb-6 text-center text-xl font-bold">Works With Your Current Setup</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <SetupFeature text="No new phone system" />
            <SetupFeature text="Uses your existing number" />
            <SetupFeature text="Set up in under 24 hours" />
            <SetupFeature text="You stay in control" />
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/[0.04] px-6 py-5 text-center">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <p className="text-sm font-medium text-emerald-300/90">
              If you don&apos;t recover at least 1 job in your first 7 days, you don&apos;t pay. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
        <ContactForm />
      </section>
    </main>
  );
}

function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(5);
  const [avgJobValue, setAvgJobValue] = useState(200);
  const lostRevenue = missedCalls * avgJobValue;

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-6 shadow-xl shadow-black/20 sm:p-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/40">Missed calls per week</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="20"
              value={missedCalls}
              onChange={(e) => setMissedCalls(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-blue-500 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-blue-500/30"
            />
            <span className="w-10 text-right text-xl font-black text-blue-400">{missedCalls}</span>
          </div>
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/40">Average job value</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="50"
              max="500"
              step="25"
              value={avgJobValue}
              onChange={(e) => setAvgJobValue(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-violet-500 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-violet-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-violet-500/30"
            />
            <span className="w-16 text-right text-xl font-black text-violet-400">${avgJobValue}</span>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-amber-500/15 bg-gradient-to-r from-amber-500/[0.06] to-orange-500/[0.04] px-6 py-6 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Estimated lost revenue</p>
        <p className="mt-1 text-4xl font-black sm:text-5xl">
          <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">${lostRevenue.toLocaleString()}</span>
          <span className="text-lg text-white/40">/week</span>
        </p>
        <p className="mt-3 text-sm text-white/50">That&apos;s over <span className="font-semibold text-white/70">${(lostRevenue * 4).toLocaleString()}/month</span> walking away.</p>
      </div>
      <p className="mt-5 text-center text-xs text-white/30">Even recovering one job can pay for Sentinel.</p>
    </div>
  );
}

function PhoneBubble({ who, text, outgoing }: { who: string; text: string; outgoing?: boolean }) {
  return (
    <div className={`rounded-xl px-3 py-2 ${outgoing ? "bg-blue-600 ml-4" : "bg-white/[0.06] mr-4"}`}>
      <p className="text-[10px] font-medium text-white/50">{who}</p>
      <p className="mt-0.5 text-xs text-white/90 leading-relaxed">{text}</p>
    </div>
  );
}

function ProblemPoint({ text, subtext }: { text: string; subtext: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-xs font-bold">×</span>
      <div>
        <p className="text-sm font-medium text-white/80">{text}</p>
        <p className="mt-0.5 text-xs text-white/40">{subtext}</p>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-white/[0.04] bg-black/20 px-3 py-3 transition-colors hover:bg-black/30">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
        {React.cloneElement(icon as React.ReactElement, { className: "h-4 w-4" })}
      </div>
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-0.5 text-xs leading-relaxed text-white/50">{text}</p>
      </div>
    </div>
  );
}

function Step({ number, icon, label, title, text }: { number: string; icon: React.ReactNode; label: string; title: string; text: string }) {
  return (
    <div className="relative rounded-2xl border border-white/[0.06] bg-[#080d1a] p-6">
      <span className="absolute -top-3 -left-1 text-7xl font-black text-white/[0.02]">{number}</span>
      <div className="relative">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-violet-400">{label}</p>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
          {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6" })}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/50">{text}</p>
      </div>
    </div>
  );
}

function IndustryCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/[0.04] bg-white/[0.02] px-5 py-4 transition-colors hover:bg-white/[0.04]">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
        {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5" })}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-xs text-white/40">{text}</p>
    </div>
  );
}

function SetupFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
      <span className="text-sm text-white/60">{text}</span>
    </div>
  );
}

function ChatLine({ who, text, time, sent }: { who: string; text: string; time: string; sent?: boolean }) {
  return (
    <div className={`flex ${sent ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-xl px-4 py-2.5 ${sent ? "bg-blue-600 text-white" : "bg-white/[0.06] text-white"}`}>
        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] font-medium text-white/50">{who}</p>
          <p className="text-[10px] text-white/30">{time}</p>
        </div>
        <p className="mt-1 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function LeadRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.06] py-3">
      <span className="text-xs text-white/40">{label}</span>
      <span className={`text-sm font-medium ${highlight ? "text-emerald-400" : "text-white/80"}`}>{value}</span>
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    businessType: "",
    missedCalls: "",
    avgJobValue: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
    setSubmitted(true);
    setFormData({
      name: "",
      businessName: "",
      phone: "",
      email: "",
      businessType: "",
      missedCalls: "",
      avgJobValue: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="relative rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.06] to-transparent p-8 text-center sm:p-12">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/15 via-emerald-400/10 to-emerald-500/15 opacity-60 blur-sm" />
        <div className="relative">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 animate-success-pop">
            <CheckCircle2 className="h-10 w-10 text-emerald-400 animate-check-draw" />
          </div>
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Demo Request Received</h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/50">
            We&apos;ll reach out shortly with your missed call recovery estimate and demo setup.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Trust Strip */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-xl border border-white/[0.04] bg-white/[0.02] px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-white/50">
          <CheckCircle2 className="h-4 w-4 text-emerald-400/70" />
          <span>No contracts</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/50">
          <Zap className="h-4 w-4 text-amber-400/70" />
          <span>Setup in 24 hours</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/50">
          <PhoneOff className="h-4 w-4 text-blue-400/70" />
          <span>Works with your existing number</span>
        </div>
      </div>

      <div className="relative rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-12">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 opacity-50 blur-sm" />
        <div className="relative">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Get Your Missed Call Recovery Demo</h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-white/50">
              Tell us about your business and we&apos;ll show you how many jobs you may be losing from missed calls.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/40">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-blue-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="businessName" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/40">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-blue-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                placeholder="Smith Junk Removal"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/40">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-blue-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/40">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-blue-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                placeholder="john@smithjunkremoval.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="businessType" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/40">Business Type</label>
            <select
              id="businessType"
              name="businessType"
              required
              value={formData.businessType}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white transition-all focus:border-blue-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            >
              <option value="" disabled className="bg-[#0c1222]">Select your business type</option>
              <option value="junk-removal" className="bg-[#0c1222]">Junk Removal</option>
              <option value="moving" className="bg-[#0c1222]">Moving Company</option>
              <option value="hauling" className="bg-[#0c1222]">Hauling</option>
              <option value="pressure-washing" className="bg-[#0c1222]">Pressure Washing</option>
              <option value="contractor" className="bg-[#0c1222]">Contractor</option>
              <option value="landscaping" className="bg-[#0c1222]">Landscaping</option>
              <option value="other" className="bg-[#0c1222]">Other</option>
            </select>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="missedCalls" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/40">Estimated Missed Calls/Week</label>
              <input
                type="number"
                id="missedCalls"
                name="missedCalls"
                min="0"
                value={formData.missedCalls}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-blue-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                placeholder="5"
              />
            </div>
            <div>
              <label htmlFor="avgJobValue" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/40">Average Job Value ($)</label>
              <input
                type="number"
                id="avgJobValue"
                name="avgJobValue"
                min="0"
                value={formData.avgJobValue}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-blue-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                placeholder="200"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group mt-4 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-600/40 hover:shadow-2xl hover:scale-[1.02] hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:brightness-100"
          >
            {isLoading ? (
              <>
                <svg className="mr-2 inline-block h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                Request My Demo <ArrowRight className="ml-2 inline-block h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/30">
          Prefer email? Contact <a href="mailto:sentinelleadsrecovery@gmail.com" className="text-white/50 underline hover:text-white/70 transition-colors">sentinelleadsrecovery@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
