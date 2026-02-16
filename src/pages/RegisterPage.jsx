import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, AlertCircle, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const passwordRequirements = [
    { label: 'At least 6 characters', valid: password.length >= 6 },
    { label: 'Contains a number', valid: /\d/.test(password) },
    { label: 'Contains a letter', valid: /[a-zA-Z]/.test(password) },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 500));

    const result = signUp(email, password, name);
    if (result.success) {
      navigate('/');
    } else {
      setError('Registration failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#0f1111]" data-testid="register-page">
      {/* Header with Logo - matches SignInPage */}
      <div className="mb-[14px] pt-[22px] pb-[18px]">
        <div className="flex justify-center">
          <Link to="/">
            <div className="flex items-center relative">
              <img
                src="/amazon_logo_dark.png"
                alt="Amazon"
                className="h-[31px] object-contain"
              />
              <span className="text-[#0f1111] text-[14px] -mt-1 ml-0.5 font-normal">.in</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-[350px] mx-auto">
        <div className="border border-[#ddd] rounded-[8px] p-[26px] pb-[20px] mb-[22px]">
          <h1 className="text-[24px] font-normal mb-[10px] leading-[1.2]">Create account</h1>

          {error && (
            <div
              className="flex items-start gap-3 p-[14px] mb-[14px] border border-[#c40000] rounded-[4px] shadow-[0_0_0_1px_#c40000_inset]"
              data-testid="error-message"
            >
              <AlertCircle className="w-[18px] h-[18px] text-[#c40000] shrink-0" />
              <div className="text-[12px]">
                <h4 className="font-bold text-[#c40000] mb-1">There was a problem</h4>
                <p>{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-[14px]">
              <label
                htmlFor="name"
                className="text-[13px] font-bold mb-[4px] pl-[2px] tracking-wide text-[#0f1111] block"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First and last name"
                className="w-full h-[31px] px-[7px] py-[3px] border border-[#a6a6a6] border-t-[#949494] rounded-[3px] text-[13px] shadow-[0_1px_0_rgba(255,255,255,0.5),0_1px_0_rgba(0,0,0,0.07)_inset] focus:outline-none focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgba(228,121,17,0.5)] transition-all"
                data-testid="name-input"
              />
            </div>

            <div className="mb-[14px]">
              <label
                htmlFor="email"
                className="text-[13px] font-bold mb-[4px] pl-[2px] tracking-wide text-[#0f1111] block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[31px] px-[7px] py-[3px] border border-[#a6a6a6] border-t-[#949494] rounded-[3px] text-[13px] shadow-[0_1px_0_rgba(255,255,255,0.5),0_1px_0_rgba(0,0,0,0.07)_inset] focus:outline-none focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgba(228,121,17,0.5)] transition-all"
                data-testid="email-input"
              />
            </div>

            <div className="mb-[14px]">
              <label
                htmlFor="password"
                className="text-[13px] font-bold mb-[4px] pl-[2px] tracking-wide text-[#0f1111] block"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full h-[31px] px-[7px] py-[3px] pr-10 border border-[#a6a6a6] border-t-[#949494] rounded-[3px] text-[13px] shadow-[0_1px_0_rgba(255,255,255,0.5),0_1px_0_rgba(0,0,0,0.07)_inset] focus:outline-none focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgba(228,121,17,0.5)] transition-all"
                  data-testid="password-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {password && (
                <div className="mt-2 space-y-1">
                  {passwordRequirements.map((req, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 text-[11px] ${req.valid ? 'text-[#007600]' : 'text-[#565959]'}`}
                    >
                      {req.valid ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <div className="w-3 h-3 rounded-full border border-[#a6a6a6]" />
                      )}
                      {req.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-[14px]">
              <label
                htmlFor="confirmPassword"
                className="text-[13px] font-bold mb-[4px] pl-[2px] tracking-wide text-[#0f1111] block"
              >
                Re-enter password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-[31px] px-[7px] py-[3px] border border-[#a6a6a6] border-t-[#949494] rounded-[3px] text-[13px] shadow-[0_1px_0_rgba(255,255,255,0.5),0_1px_0_rgba(0,0,0,0.07)_inset] focus:outline-none focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgba(228,121,17,0.5)] transition-all"
                data-testid="confirm-password-input"
              />
              {confirmPassword && password !== confirmPassword && (
                <p className="mt-1 text-[11px] text-[#c40000]">Passwords must match</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-[29px] bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-[8px] text-[13px] text-[#0f1111] shadow-[0_2px_5px_0_rgba(213,217,217,0.5)] focus:ring-[3px] focus:ring-[#008296] focus:ring-opacity-50 cursor-pointer mb-[14px] font-normal disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="register-button"
            >
              {loading ? 'Creating account...' : 'Create your Amazon account'}
            </button>
          </form>

          <div className="text-[12px] leading-[1.5] mb-[14px]">
            By creating an account, you agree to Amazon's{' '}
            <span className="text-[#007185]">Conditions of Use</span>{' '}
            and{' '}
            <span className="text-[#007185]">Privacy Notice</span>.
          </div>

          <div className="border-t border-[#e7e7e7] pt-[14px]">
            <p className="text-[13px] text-[#0f1111]">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="text-[#007185] hover:text-[#c7511f] hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer - matches SignInPage */}
      <div className="mt-[26px] border-t border-[#e7e7e7] bg-gradient-to-b from-white to-[#fcfcfc] pb-[30px]">
        <div className="pt-[20px] max-w-[700px] mx-auto text-center px-4">
          <div className="flex flex-wrap justify-center gap-x-[26px] gap-y-2 text-[11px] text-[#007185] mb-[10px]">
            <span className="text-[#007185]">Conditions of Use</span>
            <span className="text-[#007185]">Privacy Notice</span>
            <span className="text-[#007185]">Help</span>
          </div>
          <div className="text-[11px] text-[#555]">
            © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
