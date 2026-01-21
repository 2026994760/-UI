
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar.tsx';
import { Header } from './components/Header.tsx';
import { Login } from './components/Login.tsx';
import { Dashboard } from './components/sections/Dashboard.tsx';
import { AIWriting } from './components/sections/AIWriting.tsx';
import { MeetingMinutes } from './components/sections/MeetingMinutes.tsx';
import { KnowledgeBase } from './components/sections/KnowledgeBase.tsx';
import { BIPPT } from './components/sections/BIPPT.tsx';
import { Management } from './components/sections/Management.tsx';
import { AppSection } from './types.ts';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.DASHBOARD);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderContent = () => {
    switch (activeSection) {
      case AppSection.DASHBOARD: return <Dashboard />;
      case AppSection.AI_WRITING: return <AIWriting />;
      case AppSection.MEETING_MINUTES: return <MeetingMinutes />;
      case AppSection.KNOWLEDGE_BASE: return <KnowledgeBase />;
      case AppSection.BI_PPT: return <BIPPT />;
      case AppSection.MANAGEMENT: return <Management />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden animate-in fade-in duration-500">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex flex-col flex-1 relative overflow-hidden transition-all duration-300">
        <Header activeSection={activeSection} />
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
