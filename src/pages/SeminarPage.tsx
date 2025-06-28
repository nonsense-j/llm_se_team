import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, ArrowRight, MessageSquare } from 'lucide-react';
import { seminars, type Seminar } from '../data/seminars';

export const SeminarPage: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'ongoing': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'completed': return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming': return '即将举行';
      case 'ongoing': return '进行中';
      case 'completed': return '已完成';
      default: return '未知';
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Seminar Notifications
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Weekly research seminars exploring the latest developments in LLM and software engineering
          </p>
        </div>

        {/* Seminars Flow */}
        <div className="space-y-6">
          {seminars.map((seminar, index) => (
            <Link
              key={seminar.id}
              to={`/seminars/${seminar.id}`}
              className="group block"
            >
              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(seminar.status)}`}>
                        {getStatusText(seminar.status)}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {new Date(seminar.date).toLocaleDateString('zh-CN')}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock size={16} className="mr-1" />
                        {seminar.time}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      💭 {seminar.title}
                    </h3>
                    
                    <p className="text-lg text-blue-300 mb-3 font-medium flex items-center">
                      <MessageSquare size={18} className="mr-2 text-blue-400" />
                      讨论主题
                    </p>
                    
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <Users size={16} className="mr-1" />
                      参会人：{seminar.participant}
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed line-clamp-2">
                      {seminar.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium mr-2">查看详情</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/25">
            加载更多研讨会
          </button>
        </div>
      </div>
    </div>
  );
};