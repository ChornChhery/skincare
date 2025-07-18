'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function ProfilePage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Please login to view your profile</div>
        </div>
      </>
    );
  }

  const skinTypeLabels: { [key: string]: string } = {
    normal: 'Normal',
    oily: 'Oily',
    dry: 'Dry',
    combination: 'Combination',
    sensitive: 'Sensitive',
  };

  const languageLabels: { [key: string]: string } = {
    en: 'English',
    th: 'ไทย (Thai)',
    km: 'ខ្មែរ (Khmer)',
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h1>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <div className="mt-1 text-sm text-gray-900 bg-gray-50 rounded-md px-3 py-2">
                    {user.first_name}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <div className="mt-1 text-sm text-gray-900 bg-gray-50 rounded-md px-3 py-2">
                    {user.last_name}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1 text-sm text-gray-900 bg-gray-50 rounded-md px-3 py-2">
                    {user.email}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <div className="mt-1 text-sm text-gray-900 bg-gray-50 rounded-md px-3 py-2">
                    {user.phone || 'Not provided'}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Skin Type</label>
                  <div className="mt-1 text-sm text-gray-900 bg-gray-50 rounded-md px-3 py-2">
                    {user.skin_type ? skinTypeLabels[user.skin_type] || user.skin_type : 'Not specified'}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Language</label>
                  <div className="mt-1 text-sm text-gray-900 bg-gray-50 rounded-md px-3 py-2">
                    {languageLabels[user.language] || user.language}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
