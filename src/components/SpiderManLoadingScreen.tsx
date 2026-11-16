'use client';

import React from 'react';
import { DashboardSkeletonLoader } from './DashboardSkeletonLoader';

interface SpiderManLoadingScreenProps {
  message?: string;
  fullPage?: boolean;
}

/**
 * Modern UI Skeleton Loading Screen
 * Completely replaces the old climber silhouette graphic with the industry-standard UI shimmer skeleton.
 */
export const SpiderManLoadingScreen: React.FC<SpiderManLoadingScreenProps> = ({
  message = 'Loading workspace...',
  fullPage = true,
}) => {
  return <DashboardSkeletonLoader message={message} fullPage={fullPage} />;
};

export default SpiderManLoadingScreen;
