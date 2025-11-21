import React, { useState } from 'react';
import { JOB_OFFERS } from './constants';
import { JobOffer } from './types';
import JobCard from './components/JobCard';
import JobDetail from './components/JobDetail';
import { Search, Briefcase, MapPin, Filter, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOffer | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('All');

  // Calculate counts for filters
  const typeCounts = JOB_OFFERS.reduce((acc, job) => {
    const key = job.type.includes('Indefinido') ? 'Indefinido' : 'Temporal';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const filteredJobs = JOB_OFFERS.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterType === 'All') return matchesSearch;
    if (filterType === 'Indefinido') return matchesSearch && job.type.toLowerCase().includes('indefinido');
    if (filterType === 'Temporal') return matchesSearch && job.type.toLowerCase().includes('temporal');
    return matchesSearch;
  });

  const handleJobSelect = (job: JobOffer) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center cursor-pointer group" onClick={handleBack}>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 mr-3 group-hover:shadow-indigo-300 transition-all">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">Badajoz Jobs</h1>
              <p className="text-xs text-slate-500 font-medium">Local Opportunities Hub</p>
            </div>
          </div>
          
          {!selectedJob && (
             <div className="hidden md:flex items-center bg-slate-100/80 rounded-full px-4 py-2 w-96 border border-transparent focus-within:border-indigo-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-100 transition-all">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input 
                type="text"
                placeholder="Search roles, companies, or cities..."
                className="bg-transparent border-none focus:outline-none text-sm text-slate-700 w-full placeholder-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">
        {selectedJob ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <JobDetail job={selectedJob} onBack={handleBack} />
          </div>
        ) : (
          <div className="space-y-8 pb-12">
             {/* Hero Section */}
            <div className="relative bg-slate-900 text-white py-20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-90"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-indigo-100 text-sm font-medium mb-6 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 mr-2 text-yellow-300" />
                  New Opportunities in Badajoz
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                  Build Your Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-pink-200">Badajoz</span>
                </h2>
                <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Connect with top local companies. We've curated the best open positions 
                  in administration, logistics, and management just for you.
                </p>
                
                {/* Quick Stats */}
                <div className="flex justify-center gap-8 text-indigo-200/80 text-sm font-medium">
                  <div className="flex items-center">
                     <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                     {JOB_OFFERS.length} Active Roles
                  </div>
                  <div className="flex items-center">
                     <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                     Top Companies
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
              {/* Filters */}
              <div className="bg-white rounded-xl shadow-xl shadow-slate-200/60 border border-slate-100 p-2 flex flex-wrap gap-2 items-center justify-center mb-8">
                <div className="flex items-center px-4 text-slate-400 border-r border-slate-100 mr-2">
                  <Filter className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Filter:</span>
                </div>
                <button 
                  onClick={() => setFilterType('All')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterType === 'All' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  All Jobs
                </button>
                <button 
                  onClick={() => setFilterType('Indefinido')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterType === 'Indefinido' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  Permanent
                </button>
                <button 
                  onClick={() => setFilterType('Temporal')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterType === 'Temporal' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  Temporary
                </button>
              </div>

              {/* Job Grid */}
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} onSelect={handleJobSelect} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                  <div className="inline-flex p-4 rounded-full bg-slate-50 mb-4">
                    <Search className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900">No jobs found</h3>
                  <p className="text-slate-500">Try adjusting your search terms or filters.</p>
                  <button 
                    onClick={() => { setSearchTerm(''); setFilterType('All'); }}
                    className="mt-4 text-indigo-600 font-medium hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2025 Badajoz Jobs Hub. Connecting talent with local opportunity.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;