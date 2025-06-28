import React, { useState } from 'react';
import { Search, Star, Users, Calendar, ExternalLink, X, BookOpen } from 'lucide-react';
import { papers, Paper, PAPER_CATEGORIES } from '../data/papers';

const categories = ['All', ...PAPER_CATEGORIES];

export const PaperCollectionPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPaper, setSelectedPaper] = useState<Paper | null>(null);

  const filteredPapers = papers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.categories.includes(selectedCategory);
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         paper.categories.some(category => category.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Group papers by categories for positioning
  const getPositionForPaper = (paper: Paper, index: number, total: number) => {
    // Create clusters based on categories
    const categoryHash = paper.categories.join('').split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    const clusterX = 30 + (Math.abs(categoryHash) % 40);
    const clusterY = 30 + (Math.abs(categoryHash >> 8) % 40);
    
    // Add some randomness within the cluster
    const offsetX = (Math.sin(index * 2.5) * 15);
    const offsetY = (Math.cos(index * 2.5) * 15);
    
    return { 
      left: `${Math.max(5, Math.min(95, clusterX + offsetX))}%`, 
      top: `${Math.max(5, Math.min(95, clusterY + offsetY))}%` 
    };
  };

  const getCategoryColor = (category: string) => {
   const colors = [
     'from-blue-500 to-blue-700',
     'from-purple-500 to-purple-700',
     'from-green-500 to-green-700',
     'from-red-500 to-red-700',
     'from-yellow-500 to-yellow-700',
     'from-pink-500 to-pink-700',
     'from-indigo-500 to-indigo-700',
     'from-teal-500 to-teal-700',
   ];
   const hash = category.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
   return colors[hash % colors.length];
 };
   
  // Get color based on CCF rank
  const getCcfRankColor = (ccfRank: string) => {
    switch (ccfRank) {
      case 'CCF-A':
        return 'from-red-400 to-red-600'; // Red for A
      case 'CCF-B':
        return 'from-blue-400 to-blue-600'; // Blue for B
      case 'CCF-C':
        return 'from-green-400 to-green-600'; // Green for C
      case 'CCF-N':
      default:
        return 'from-gray-400 to-gray-600'; // Gray for N or unknown
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Paper Collection
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive starsky visualization of research papers clustered by categories
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search papers by title, keywords, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Starsky Map */}
        <div className="relative bg-gradient-to-br from-slate-900/50 to-purple-900/30 rounded-2xl border border-slate-700/50 overflow-hidden mb-8" style={{ height: '60vh' }}>
          {/* Background stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Paper stars */}
          {filteredPapers.map((paper, index) => {
            const position = getPositionForPaper(paper, index, filteredPapers.length);
            const size = Math.max(16, Math.min(28, paper.citations / 8));
            const colorClass = getCcfRankColor(paper.ccfRank);
            
            return (
              <div
                key={paper.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={position}
                onClick={() => setSelectedPaper(paper)}
              >
                <div
                  className={`bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center hover:scale-150 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50`}
                  style={{ width: size, height: size }}
                >
                  <Star size={size * 0.6} className="text-white fill-current" />
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10 max-w-48">
                  {paper.title.substring(0, 40)}...
                  <div className="text-xs mt-1">{paper.ccfRank}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mb-8 bg-slate-800/30 rounded-xl p-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <span>📌</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-br from-red-400 to-red-600 rounded-full"></div>
                <span>CCF-A</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                <span>CCF-B</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                <span>CCF-C</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
                <span>CCF-N</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Size indicates citation count</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Click on stars or list items to view details</span>
            </div>
          </div>
        </div>

        {/* Paper List */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <BookOpen className="mr-3 text-purple-400" size={24} />
            Paper Collection ({filteredPapers.length})
          </h2>
          <div className="grid gap-4">
            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                onClick={() => setSelectedPaper(paper)}
                className="group cursor-pointer bg-slate-700/30 hover:bg-slate-700/50 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] border border-slate-600/30 hover:border-purple-500/50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex flex-wrap gap-1">
                        <span className="text-sm text-purple-400 font-medium">{paper.categories.join(' ▪ ')}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {paper.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-blue-400">{paper.publication}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-400">{paper.year}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-400">{paper.citations} citations</span>
                      <span className="text-gray-500">•</span>
                      <span className={`text-sm font-medium px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${getCcfRankColor(paper.ccfRank)}`}>
                        {paper.ccfRank}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-400 mb-2">
                      {paper.authors.join(', ')} • {paper.institute}
                    </div>
                  </div>
                  <div className="ml-4 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Paper Detail Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap gap-1">
                  <span className="text-sm text-purple-400 font-medium">{selectedPaper.categories.join(' ▪ ')}</span>
                </div>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4">{selectedPaper.title}</h2>
              
              <div className="flex items-center space-x-4 mb-4 text-gray-300 text-sm">
                <div className="flex items-center">
                  <Users size={16} className="mr-1" />
                  {selectedPaper.authors.join(', ')}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {selectedPaper.year}
                </div>
                <div className={`px-2 py-1 rounded-full text-white bg-gradient-to-r ${getCcfRankColor(selectedPaper.ccfRank)}`}>
                  {selectedPaper.ccfRank}
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-300">{selectedPaper.institute}</div>
                <div className="text-purple-300">{selectedPaper.publication}</div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Abstract</h3>
                <p className="text-gray-300 leading-relaxed">{selectedPaper.abstract}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPaper.categories.map(category => (
                    <span key={category} className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(category)} text-white rounded-full text-sm font-medium`}>
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPaper.keywords.map(keyword => (
                    <span key={keyword} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-gray-300">
                  <span className="font-semibold">{selectedPaper.citations}</span> citations
                </div>
                <div className="flex space-x-2">
                  {selectedPaper.artifactUrl && (
                    <a
                      href={selectedPaper.artifactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>View Artifact</span>
                    </a>
                  )}
                  {selectedPaper.url && (
                    <a
                      href={selectedPaper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>View Paper</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};