'use client';

import React from 'react';

interface DashboardSkeletonLoaderProps {
  message?: string;
  fullPage?: boolean;
}

/**
 * Modern, Professional SaaS Skeleton Loading Screen
 * Replaces the old silhouette graphic with the industry-standard UI shimmer skeleton.
 * Used across page refreshes, OAuth returns, route loading, and tab transitions.
 */
export const DashboardSkeletonLoader: React.FC<DashboardSkeletonLoaderProps> = ({
  message = 'Loading workspace...',
  fullPage = true,
}) => {
  // View content skeleton (used for tab switching or inside main content area)
  const viewContent = (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6 w-full animate-fade-in">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-100">
        <div className="space-y-2">
          <div className="h-8 w-48 sm:w-64 rounded-xl skeleton-shimmer" />
          <div className="h-4 w-72 sm:w-96 rounded-lg skeleton-shimmer" />
        </div>
        <div className="flex items-center space-x-3 shrink-0">
          <div className="h-9 w-24 rounded-xl skeleton-shimmer" />
          <div className="h-9 w-32 rounded-xl skeleton-shimmer bg-emerald-600/15" />
        </div>
      </div>

      {/* Filter / Navigation Tab Pills */}
      <div className="flex items-center space-x-2.5 overflow-x-auto pb-1 scrollbar-none">
        <div className="h-8 w-24 rounded-full skeleton-shimmer bg-gray-900/10 shrink-0" />
        <div className="h-8 w-28 rounded-full skeleton-shimmer shrink-0" />
        <div className="h-8 w-24 rounded-full skeleton-shimmer shrink-0" />
        <div className="h-8 w-20 rounded-full skeleton-shimmer shrink-0" />
        <div className="h-8 w-28 rounded-full skeleton-shimmer shrink-0" />
      </div>

      {/* Cards Grid (4 Column Responsive Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-5 rounded-2xl border border-gray-200/80 bg-white shadow-2xs space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl skeleton-shimmer" />
              <div className="w-16 h-5 rounded-full skeleton-shimmer" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-28 rounded-md skeleton-shimmer" />
              <div className="h-3 w-40 rounded-md skeleton-shimmer" />
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="h-3 w-16 rounded skeleton-shimmer" />
              <div className="h-7 w-20 rounded-lg skeleton-shimmer" />
            </div>
          </div>
        ))}
      </div>

      {/* Primary Section Placeholder (Composer / Main Content Block) */}
      <div className="p-6 rounded-3xl border border-gray-200/80 bg-white shadow-xs space-y-5">
        {/* Account Avatar Row */}
        <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
          <div className="w-4 h-4 rounded skeleton-shimmer" />
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((a) => (
              <div key={a} className="w-9 h-9 rounded-full skeleton-shimmer" />
            ))}
          </div>
        </div>

        {/* Text Area & Media Preview Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            <div className="h-28 rounded-2xl skeleton-shimmer w-full" />
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-lg skeleton-shimmer" />
                <div className="w-8 h-8 rounded-lg skeleton-shimmer" />
                <div className="w-8 h-8 rounded-lg skeleton-shimmer" />
              </div>
              <div className="h-4 w-20 rounded skeleton-shimmer" />
            </div>
          </div>
          <div className="h-44 rounded-2xl skeleton-shimmer border border-gray-100 hidden sm:block" />
        </div>
      </div>
    </div>
  );

  if (!fullPage) {
    return viewContent;
  }

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden font-sans text-gray-900 select-none">
      {/* Sidebar Skeleton (Hidden on mobile, fixed on desktop) */}
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200/90 flex-col justify-between shrink-0 h-full p-4">
        <div className="space-y-6">
          {/* Logo & Brand Skeleton */}
          <div className="flex items-center space-x-3 px-2 pt-2">
            <div className="w-9 h-9 rounded-xl skeleton-shimmer bg-emerald-600/20" />
            <div className="space-y-1.5">
              <div className="h-4 w-24 rounded-md skeleton-shimmer" />
              <div className="h-2.5 w-16 rounded skeleton-shimmer" />
            </div>
          </div>

          {/* Action Button Skeleton */}
          <div className="h-10 w-full rounded-xl skeleton-shimmer bg-emerald-600/15" />

          {/* Nav Items Skeleton */}
          <div className="space-y-1.5 pt-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="flex items-center space-x-3 px-3 py-2.5 rounded-xl skeleton-shimmer"
                style={{ opacity: 1 - item * 0.08 }}
              >
                <div className="w-4 h-4 rounded-md bg-gray-300/60 shrink-0" />
                <div className="h-3.5 w-24 rounded bg-gray-300/60" />
              </div>
            ))}
          </div>

          {/* Channels Section Skeleton */}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <div className="h-3 w-28 rounded skeleton-shimmer px-1" />
            <div className="space-y-2">
              {[1, 2, 3].map((c) => (
                <div key={c} className="flex items-center space-x-2.5 px-2 py-1">
                  <div className="w-6 h-6 rounded-full skeleton-shimmer shrink-0" />
                  <div className="h-3 w-20 rounded skeleton-shimmer" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Profile Pill Skeleton */}
        <div className="pt-4 border-t border-gray-100 flex items-center space-x-3 px-2">
          <div className="w-9 h-9 rounded-full skeleton-shimmer shrink-0" />
          <div className="space-y-1 flex-1">
            <div className="h-3.5 w-24 rounded skeleton-shimmer" />
            <div className="h-2.5 w-32 rounded skeleton-shimmer" />
          </div>
        </div>
      </aside>

      {/* Main Area Skeleton */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Navbar Skeleton */}
        <header className="h-16 bg-white border-b border-gray-200/90 px-4 sm:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg skeleton-shimmer md:hidden" />
            <div className="h-5 w-32 sm:w-44 rounded-lg skeleton-shimmer" />
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full skeleton-shimmer" />
            <div className="w-8 h-8 rounded-full skeleton-shimmer" />
            <div className="h-8 w-24 rounded-full skeleton-shimmer hidden sm:block" />
          </div>
        </header>

        {/* Scrollable View Content Skeleton */}
        <main className="flex-1 overflow-y-auto">
          {viewContent}
        </main>
      </div>

      {/* Subtle Toast Pill at bottom center */}
      {message && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-lg text-xs font-semibold text-gray-700 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};

// Backward-compatible alias so existing imports never break
export const SpiderManLoadingScreen = DashboardSkeletonLoader;
