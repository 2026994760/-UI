
// Fix: Added missing React import to resolve React.ReactNode namespace error
import React from 'react';

export enum AppSection {
  DASHBOARD = 'DASHBOARD',
  AI_WRITING = 'AI_WRITING',
  MEETING_MINUTES = 'MEETING_MINUTES',
  KNOWLEDGE_BASE = 'KNOWLEDGE_BASE',
  BI_PPT = 'BI_PPT',
  MANAGEMENT = 'MANAGEMENT'
}

export interface NavItem {
  id: AppSection;
  label: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  status: 'draft' | 'published' | 'archived';
  date: string;
}
