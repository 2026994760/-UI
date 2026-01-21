
import React from 'react';
import { LayoutDashboard, PenTool, Mic2, Library, BarChart3, Settings } from 'lucide-react';
import { AppSection, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: AppSection.DASHBOARD, label: '数据看板', icon: <LayoutDashboard size={20} /> },
  { id: AppSection.AI_WRITING, label: '公文智能写作', icon: <PenTool size={20} /> },
  { id: AppSection.MEETING_MINUTES, label: '智能会议纪要', icon: <Mic2 size={20} /> },
  { id: AppSection.KNOWLEDGE_BASE, label: '制度智能问答', icon: <Library size={20} /> },
  { id: AppSection.BI_PPT, label: '智能BI与PPT', icon: <BarChart3 size={20} /> },
  { id: AppSection.MANAGEMENT, label: '平台管理', icon: <Settings size={20} /> },
];

export const MOCK_DOCS = [
  { id: '1', name: '2024年三季度工作总结', type: '通知公告', status: 'draft', date: '2024-10-25' },
  { id: '2', name: '关于加强办公区节能管理的建议', type: '内部签报', status: 'published', date: '2024-11-02' },
  { id: '3', name: '2025年人才招聘计划', type: '指示', status: 'published', date: '2024-11-15' },
];
