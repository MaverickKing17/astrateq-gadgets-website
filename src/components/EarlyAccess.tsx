import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { EARLY_ACCESS_INTERESTS } from '@/constants';

interface FormData {
  firstName: string;
  email: string;
  interestType: string;
  company: string;
  message: string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function EarlyAccess() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    interestType: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      next.firstName = 'Please enter your first name.';
    }
    if (!formData.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!formData.interestType) {
      next.interestType = 'Please select an interest type.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState === 'loading') return;
    setServerError('');
    if (!validate()) return;

    setSubmitState('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        setServerError(data.error || 'Could not send your request. Please try again later.');
        setSubmitState('error');
        return;
      }
      setSubmitState('success');
    } catch {
      setServerError('Could not send your request. Please try again later.');
      setSubmitState('error');
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (submitState === 'error') {
      setSubmitState('idle');
      setServerError('');
    }
  };

  return (
    <section id="early-access" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink-850" />
      <div className="absolute inset-0 grid-bg-fine opacity-25" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.06), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
              Early Access
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[44px] font-bold leading-[1.15] text-white text-balance">
              Help shape what comes next.
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-gray-300">
              We're validating both the technology and the market. If the idea
              interests you, join the early-access list and help us understand
              where this technology could provide meaningful value.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-ink-900/80 p-6 lg:p-8">
            {submitState === 'success' ? (
              <div className="text-center py-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4">
                  <CheckCircle2 className="h-7 w-7 text-cyan-400" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  You're on the list.
                </h3>
                <p className="text-sm text-gray-300 max-w-sm mx-auto">
                  Thanks for your interest, {formData.firstName}. We'll be in
                  touch as the project progresses through validation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-200 mb-2">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => update('firstName', e.target.value)}
                    disabled={submitState === 'loading'}
                    className={`w-full rounded-lg border bg-ink-800 px-4 py-3 text-base text-white placeholder-gray-500 transition-colors focus:outline-none focus:border-cyan-400/50 disabled:opacity-50 ${
                      errors.firstName ? 'border-danger-500/50' : 'border-white/10'
                    }`}
                    placeholder="Your first name"
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-danger-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => update('email', e.target.value)}
                    disabled={submitState === 'loading'}
                    className={`w-full rounded-lg border bg-ink-800 px-4 py-3 text-base text-white placeholder-gray-500 transition-colors focus:outline-none focus:border-cyan-400/50 disabled:opacity-50 ${
                      errors.email ? 'border-danger-500/50' : 'border-white/10'
                    }`}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-danger-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="interestType" className="block text-sm font-medium text-gray-200 mb-2">
                    Interest type
                  </label>
                  <select
                    id="interestType"
                    value={formData.interestType}
                    onChange={(e) => update('interestType', e.target.value)}
                    disabled={submitState === 'loading'}
                    className={`w-full rounded-lg border bg-ink-800 px-4 py-3 text-base text-white transition-colors focus:outline-none focus:border-cyan-400/50 disabled:opacity-50 ${
                      errors.interestType ? 'border-danger-500/50' : 'border-white/10'
                    }`}
                    aria-invalid={!!errors.interestType}
                  >
                    <option value="">Select your interest…</option>
                    {EARLY_ACCESS_INTERESTS.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                  {errors.interestType && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-danger-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.interestType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                    Company <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => update('company', e.target.value)}
                    disabled={submitState === 'loading'}
                    className="w-full rounded-lg border border-white/10 bg-ink-800 px-4 py-3 text-base text-white placeholder-gray-500 transition-colors focus:outline-none focus:border-cyan-400/50 disabled:opacity-50"
                    placeholder="Your organization (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => update('message', e.target.value)}
                    disabled={submitState === 'loading'}
                    rows={4}
                    className="w-full rounded-lg border border-white/10 bg-ink-800 px-4 py-3 text-base text-white placeholder-gray-500 transition-colors focus:outline-none focus:border-cyan-400/50 disabled:opacity-50 resize-none"
                    placeholder="Tell us about your interest or any questions you have (optional)"
                  />
                </div>

                {submitState === 'error' && serverError && (
                  <div className="flex items-start gap-2.5 rounded-lg border border-danger-500/30 bg-danger-500/10 px-4 py-3">
                    <AlertCircle className="h-4 w-4 text-danger-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-danger-400">{serverError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-ink-900 transition-all hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  {submitState === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Join the Early Access List'
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Your information is sent securely to the Astrateq Gadgets team.
                  We do not share your data.
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
