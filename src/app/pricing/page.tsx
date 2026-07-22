import { Metadata } from "next";
import Wrapper from "@/components/Wrapper";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for world-class engineering.",
};

const plans = [
  {
    name: "Design & Build",
    price: "Custom",
    description: "For companies needing a complete digital overhaul or a new product from scratch.",
    features: ["Custom UI/UX Design", "Frontend Engineering", "Backend Infrastructure", "SEO Optimization", "30 Days Post-Launch Support"],
    popular: false,
  },
  {
    name: "Retainer",
    price: "$10k/mo",
    description: "Dedicated engineering and design resources embedded in your team.",
    features: ["Priority Support", "Continuous Iteration", "Weekly Syncs", "Full Stack Development", "Cancel Anytime"],
    popular: true,
  }
];

export default function PricingPage() {
  return (
    <div className="pt-40 pb-20 w-full flex-1">
      <Wrapper>
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Partner with us to build your next big thing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white'}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <div className="text-4xl font-black mb-4">{plan.price}</div>
            <p className={`mb-8 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-3">
                  <svg className={`w-5 h-5 ${plan.popular ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className={plan.popular ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-full font-bold transition-colors ${plan.popular ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
      </Wrapper>
    </div>
  );
}
