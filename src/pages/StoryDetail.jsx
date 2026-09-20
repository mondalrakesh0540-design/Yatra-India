import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, User, ArrowLeft, Share2, Bookmark, Sparkles } from 'lucide-react';
import { STORIES } from '../data/stories';

export const StoryDetail = () => {
  const { id } = useParams();
  const story = STORIES.find((s) => s.id === id) || STORIES[0];

  return (
    <div className="pt-24 pb-24">
      {/* Article Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/stories"
          className="inline-flex items-center gap-2 text-xs font-semibold text-saffron-400 hover:text-saffron-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Stories</span>
        </Link>

        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
          <span className="px-2.5 py-0.5 rounded-full bg-saffron-500/20 text-saffron-300 font-bold uppercase tracking-wider">
            {story.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{story.readTime}</span>
          </span>
          <span>•</span>
          <span>{story.date}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight mb-4">
          {story.title}
        </h1>

        <div className="flex items-center justify-between py-4 border-y border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-8 h-8 rounded-full bg-saffron-500/20 text-saffron-400 flex items-center justify-center font-bold">
              {story.author[0]}
            </div>
            <div>
              <span className="font-semibold text-white block">{story.author}</span>
              <span className="text-[11px] text-slate-400">Travel Columnist</span>
            </div>
          </div>

          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert('Article link copied to clipboard!');
            }}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors flex items-center gap-1.5"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Large Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="h-[45vh] sm:h-[55vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Story Content Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-200 leading-relaxed font-light text-base sm:text-lg space-y-6">
        <p className="text-xl font-serif text-saffron-200 italic leading-relaxed border-l-2 border-saffron-500 pl-4 py-1">
          {story.summary}
        </p>

        <div className="prose prose-invert max-w-none space-y-6 pt-4 text-slate-300">
          {story.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-2xl font-bold font-serif text-white pt-4 pb-1">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            return (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Back to Explore CTA */}
        <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Enjoyed this guide? Explore destinations mentioned in this article.
          </span>
          <Link
            to="/destinations"
            className="px-6 py-3 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold shadow-glow-saffron transition-colors"
          >
            Explore All Destinations →
          </Link>
        </div>
      </div>
    </div>
  );
};
