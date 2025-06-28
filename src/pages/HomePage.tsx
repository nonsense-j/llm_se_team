import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen, Users, Star, ArrowRight } from 'lucide-react';
import { seminars } from '../data/seminars';
import { papers } from '../data/papers';

export const HomePage: React.FC = () => {
  const seminarCount = seminars.length;
  const paperCount = papers.length;
  const uniqueCategories = [...new Set(papers.map(paper => paper.categories))].length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Star className="text-blue-400" size={16} />
              <span className="text-blue-300 text-sm font-medium">SQuARE Research Group</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                LLM&SE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Large Language Models & Software Engineering Research Group
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Record seminar notifications and important papers for LLM&SE research.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              ✨ Gather insights 💡 Brainstorm & discuss
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            <Link 
              to="/seminars"
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Seminar Notifications</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Weekly seminars featuring the latest research discussions, methodology exploration, and collaborative insights 
                  in LLM&SE.
                </p>
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  <span>Explore Seminars</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link 
              to="/papers"
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Paper Collection</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Interactive star sky of related research papers, intelligently clustered by tags and themes 
                  for easy exploration and discovery.
                </p>
                <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                  <span>Browse Papers</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">{seminarCount}</div>
              <div className="text-gray-300">Weekly Seminars</div>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">{paperCount}</div>
              <div className="text-gray-300">Research Papers</div>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
              <div className="text-3xl font-bold text-green-400 mb-2">{uniqueCategories}</div>
              <div className="text-gray-300">Research Areas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};