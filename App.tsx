import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { SearchMode } from './components/SearchMode';
import { ChatMode } from './components/ChatMode';
import { ImageMode } from './components/ImageMode';
import { VideoMode } from './components/VideoMode';
import { AudioMode } from './components/AudioMode';
import { AppMode } from './types';
import { Logo } from './components/Logo';

export default function App() {
  const [currentMode, setCurrentMode] = useState<AppMode>('search');

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-gray-50 flex flex-col text-gray-900 font-sans">
      {/* Top Header - Always visible on Desktop */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-gray-100 hidden sm:block transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo size="sm" onClick={() => setCurrentMode('search')} />
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-100/50 rounded-full border border-gray-200/50">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">{currentMode}</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-indigo-400 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-primary/20">
            R
          </div>
        </div>
      </header>
      
      {/* Mobile Header - Hide in Chat Mode if preferred, or keep minimal */}
      <header className={`sm:hidden p-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b sticky top-0 z-40 ${currentMode === 'chat' ? 'hidden' : ''}`}>
         <Logo size="sm" onClick={() => setCurrentMode('search')} />
         <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-indigo-400 flex items-center justify-center text-white font-bold text-xs">R</div>
      </header>

      {/* Main Content Area */}
      <main className={`flex-grow pt-6 sm:pt-8 px-4 sm:px-0 ${currentMode === 'chat' ? 'pb-4 h-screen sm:h-auto' : 'pb-24 sm:pb-8'}`}>
        <div className="animate-fadeIn h-full">
          {currentMode === 'search' && <SearchMode />}
          {currentMode === 'chat' && <ChatMode onExit={() => setCurrentMode('search')} />}
          {currentMode === 'image' && <ImageMode />}
          {currentMode === 'video' && <VideoMode />}
          {currentMode === 'audio' && <AudioMode />}
        </div>
      </main>

      {/* Navigation - Hidden in Chat Mode */}
      {currentMode !== 'chat' && (
        <Navigation currentMode={currentMode} onChange={setCurrentMode} />
      )}
    </div>
  );
}