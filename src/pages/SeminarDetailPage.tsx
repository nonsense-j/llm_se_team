import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Users, MapPin, ArrowLeft, ExternalLink, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { seminars, type Seminar } from '../data/seminars';

export const SeminarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const seminar = id ? seminars.find(s => s.id === id) : null;
  const [isNotesExpanded, setIsNotesExpanded] = useState(true);

  // Function to determine status based on current date and time
  const getStatus = (seminar: Seminar): 'upcoming' | 'ongoing' | 'completed' => {
    const now = new Date();
    const seminarDate = new Date(seminar.date);
    
    // Extract time range (assuming format like "14:00-16:00")
    const timeRange = seminar.time.split('-');
    const startTime = timeRange[0].trim();
    const endTime = timeRange.length > 1 ? timeRange[1].trim() : startTime;
    
    // Create start and end datetime objects
    const [startHour, startMinute] = startTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    
    const seminarStart = new Date(seminarDate);
    seminarStart.setHours(startHour, startMinute, 0, 0);
    
    const seminarEnd = new Date(seminarDate);
    seminarEnd.setHours(endHour, endMinute, 0, 0);
    
    if (now < seminarStart) {
      return 'upcoming';
    } else if (now >= seminarStart && now <= seminarEnd) {
      return 'ongoing';
    } else {
      return 'completed';
    }
  };

  if (!seminar) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-white mb-4">研讨会未找到</h1>
          <Link to="/seminars" className="text-blue-400 hover:text-blue-300">
            返回研讨会列表
          </Link>
        </div>
      </div>
    );
  }

  const status = getStatus(seminar);

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
        {/* Back Button */}
        <Link 
          to="/seminars"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          返回研讨会列表
        </Link>

        {/* Header */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(status)}`}>
              {getStatusText(status)}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {seminar.title}
          </h1>

          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-center">
              <Calendar size={20} className="mr-3 text-blue-400" />
              <span>{new Date(seminar.date).toLocaleDateString('zh-CN')}</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="mr-3 text-blue-400" />
              <span>{seminar.time}</span>
            </div>
            <div className="flex items-center">
              <Users size={20} className="mr-3 text-blue-400" />
              <span>{seminar.participant}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="mr-3 text-blue-400" />
              <span>{seminar.location}</span>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* 主题简介 */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">主题简介</h2>
            <p className="text-gray-300 leading-relaxed">
              {seminar.description}
            </p>
          </div>

          {/* 会前准备 */}
          {seminar.preparation && seminar.preparation.length > 0 && (
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">会前准备</h2>
              <div className="space-y-3">
                {seminar.preparation.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 参考资料 */}
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">参考资料</h2>
            <div className="space-y-3">
              {seminar.references?.map((ref, index) => (
                <a
                  key={index}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-300 transition-colors group"
                >
                  <ExternalLink size={16} className="text-blue-400 flex-shrink-0 group-hover:text-blue-300" />
                  <span className="group-hover:underline">{ref.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 补充说明 - Collapsible */}
          {seminar.additionalNotes && seminar.additionalNotes.length > 0 && (
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
              <button
                onClick={() => setIsNotesExpanded(!isNotesExpanded)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-700/20 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Info size={24} className="text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">补充说明</h2>
                </div>
                <div className="text-purple-400">
                  {isNotesExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              {isNotesExpanded && (
                <div className="px-6 pb-6 border-t border-slate-700/30">
                  <div className="space-y-3 mt-4">
                    {seminar.additionalNotes.map((note, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};