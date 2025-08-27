import React from 'react';

interface StatsGridProps {
  totalProjects: number;
  totalRequests: number;
  openRequests: number;
  completedRequests: number;
}

const StatsGrid: React.FC<StatsGridProps> = ({
  totalProjects,
  totalRequests,
  openRequests,
  completedRequests,
}) => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
    <div className="card card-content text-center">
      <div className="text-3xl font-bold text-[rgb(var(--color-primary))] mb-2">{totalProjects}</div>
      <div className="text-sm text-gray-400">Total Projects</div>
    </div>
    <div className="card card-content text-center">
      <div className="text-3xl font-bold text-[rgb(var(--color-primary))] mb-2">{totalRequests}</div>      <div className="text-sm text-gray-400">Feature Requests</div>
    </div>
    <div className="card card-content text-center">
      <div className="text-3xl font-bold text-[rgb(var(--color-primary))] mb-2">{openRequests}</div>
      <div className="text-sm text-gray-400">Open Requests</div>
    </div>
    <div className="card card-content text-center">
      <div className="text-3xl font-bold text-[rgb(var(--color-primary))] mb-2">{completedRequests}</div>
      <div className="text-sm text-gray-400">Completed</div>
    </div>
  </div>
);

export default StatsGrid;
