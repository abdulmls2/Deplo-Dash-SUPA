import React, { useState, useRef, useEffect } from 'react';
import { Camera, CreditCard, Calendar, Download, LogOut, Save } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  current: boolean;
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29,
    features: ['500 Email Credits', '100 Domains', '500 Contacts'],
    current: false
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 99,
    features: ['2000 Email Credits', 'Unlimited Domains', '2000 Contacts', 'Priority Support'],
    current: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 299,
    features: ['Unlimited Email Credits', 'Unlimited Domains', 'Unlimited Contacts', '24/7 Support', 'Custom Integration'],
    current: false
  }
];

const transactions = [
  { id: 1, date: '2024-03-15', amount: 99, description: 'Professional Plan - Monthly', status: 'Completed' },
  { id: 2, date: '2024-02-15', amount: 99, description: 'Professional Plan - Monthly', status: 'Completed' },
  { id: 3, date: '2024-01-15', amount: 99, description: 'Professional Plan - Monthly', status: 'Completed' }
];

export default function Settings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [company, setCompany] = useState('Acme Inc');
  const [avatar, setAvatar] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/supabase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'getProfile' })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      const { user, profile } = data;
      if (user && profile) {
        setEmail(user.email);
        setName(profile.name || '');
        setUsername(profile.username || '');
        setCompany(profile.company || 'Acme Inc');
        setAvatar(profile.avatar_url || avatar);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast.error('Failed to load profile');
    }
  };

  const handleSaveProfile = async () => {
    try {
      const response = await fetch('/api/supabase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateProfile',
          payload: {
            name,
            username,
            company
          }
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    }
  };

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('action', 'uploadAvatar');

      const response = await fetch('/api/supabase', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setAvatar(data.avatarUrl);
      toast.success('Avatar updated successfully');
    } catch (error) {
      console.error('Error uploading avatar:', error);
      toast.error('Failed to upload avatar');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster position="top-right" />
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
          <div className="space-y-6">
            {/* Avatar */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={avatar}
                  alt="Profile"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 bg-gray-800 p-1.5 rounded-full text-white hover:bg-gray-700"
                >
                  <Camera className="h-4 w-4" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleAvatarChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium">{name || 'Your Name'}</h3>
                <p className="text-gray-500">{email}</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-6 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSaveProfile}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6">Subscription</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`border rounded-lg p-6 ${
                  plan.current
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="text-3xl font-bold mt-2">${plan.price}</p>
                <p className="text-gray-500 text-sm mb-4">/month</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-4 w-full py-2 rounded-md ${
                    plan.current
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Billing History */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Billing History</h2>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
              <Download className="h-4 w-4" />
              <span>Download All</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${transaction.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}