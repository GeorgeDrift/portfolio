import React, { useState, useEffect } from 'react';
import { Profile } from '../types';
import { fetchProfile } from '../services/apiService';

const About: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProfile();
        setProfile(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch profile data.');
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  if (loading) {
    return (
      <section id="about" className="py-20 md:py-32 text-center">
        <p className="text-white text-lg">Loading Profile...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="about" className="py-20 md:py-32 text-center">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </section>
    );
  }

  if (!profile) return null;

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="rounded-full shadow-2xl w-full h-auto object-cover aspect-square border-4 border-gray-800"
            />
        </div>
        <div className="md:col-span-3">
          <h2 className="text-4xl font-bold text-white mb-4 text-shadow-dark">About Me</h2>
          <div className="w-20 h-1 bg-sky-500 mb-6 rounded"></div>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line text-shadow-dark">
              {profile.bio}
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;