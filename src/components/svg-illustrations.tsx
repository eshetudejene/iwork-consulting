"use client"

import { motion } from "framer-motion"

export function BusinessConsultingIllustration({ className }: { className?: string }) {
  return (
    <motion.div
      className={`${className} relative w-full mx-auto`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ minHeight: '200px' }}
    >
      {/* Dashboard Container - No Monitor Frame */}
      <motion.div
        className="relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Dashboard Content */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
          {/* Screen Content */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg overflow-hidden relative">

              {/* Browser Chrome */}
              <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-lg px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
                  https://dashboard.consultiwork.com
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 h-full bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700">

                {/* Top Navigation */}
                <motion.div
                  className="flex items-center justify-between mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">ConsultiWork Analytics</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Business Intelligence Dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Live Data
                  </div>
                </motion.div>

                {/* KPI Cards - Responsive Grid */}
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {[
                    { label: "Revenue", value: "$2.4M", change: "+12%", color: "from-green-500 to-emerald-500" },
                    { label: "Clients", value: "847", change: "+8%", color: "from-blue-500 to-cyan-500" },
                    { label: "Projects", value: "156", change: "+23%", color: "from-purple-500 to-pink-500" },
                    { label: "Efficiency", value: "94%", change: "+5%", color: "from-orange-500 to-red-500" }
                  ].map((kpi, index) => (
                    <motion.div
                      key={kpi.label}
                      className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      <div className={`w-6 h-6 bg-gradient-to-r ${kpi.color} rounded-md mb-2 flex items-center justify-center`}>
                        <div className="w-3 h-3 bg-white rounded-sm opacity-80"></div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{kpi.label}</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{kpi.value}</p>
                      <p className="text-xs text-green-600 dark:text-green-400">{kpi.change}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Charts Row - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  {/* Revenue Chart */}
                  <motion.div
                    className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">Monthly Revenue</h4>
                    <div className="flex items-end gap-1 h-12">
                      {[30, 45, 35, 60, 50, 75, 65, 80, 70, 85, 90, 95].map((height, index) => (
                        <motion.div
                          key={index}
                          className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-sm flex-1"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.8, delay: 1.2 + index * 0.05 }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Client Satisfaction */}
                  <motion.div
                    className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-3">Client Satisfaction</h4>
                    <div className="relative h-12">
                      <motion.svg
                        viewBox="0 0 100 40"
                        className="w-full h-full"
                      >
                        <motion.path
                          d="M5,35 Q20,15 35,25 Q50,10 65,20 Q80,5 95,15"
                          stroke="url(#satisfactionGradient)"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: 1.4 }}
                        />
                        <defs>
                          <linearGradient id="satisfactionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                      </motion.svg>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Status Bar - Mobile Responsive */}
                <motion.div
                  className="bg-white dark:bg-slate-800 rounded-lg p-2 sm:p-3 shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {["Analysis", "Strategy", "Implementation", "Results"].map((step, index) => (
                        <div key={step} className="flex items-center gap-1 sm:gap-2">
                          <motion.div
                            className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 1.8 + index * 0.1 }}
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                          </motion.div>
                          <span className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">{step}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                      Last updated: 2 min ago
                    </div>
                  </div>
                </motion.div>

              </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-white text-sm">⚡</div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [0, 8, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="text-white text-xs">📊</div>
      </motion.div>
    </motion.div>
  )
}

export function TechnologyIntegrationIllustration({ className }: { className?: string }) {
  return (
    <motion.div
      className={`${className} relative mb-8 sm:mb-10 md:mb-12`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      style={{ minHeight: '150px' }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <defs>
            <pattern id="consultingGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="400" height="300" fill="url(#consultingGrid)" />
        </svg>
      </div>

      {/* Main Chart Container */}
      <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 p-3 sm:p-4 md:p-6 mx-2 sm:mx-4">

        {/* Chart Header */}
        <motion.div
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm opacity-80"></div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Business Analytics</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Performance Overview</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live
          </div>
        </motion.div>

        {/* KPI Row */}
        <motion.div
          className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { label: "Revenue", value: "↗ 24%", color: "from-green-500 to-emerald-500" },
            { label: "Efficiency", value: "↗ 18%", color: "from-blue-500 to-cyan-500" },
            { label: "Growth", value: "↗ 32%", color: "from-purple-500 to-pink-500" }
          ].map((kpi, index) => (
            <motion.div
              key={kpi.label}
              className="text-center p-2 sm:p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              <div className={`w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${kpi.color} rounded-sm mx-auto mb-1 sm:mb-2`}></div>
              <p className="text-xs text-slate-500 dark:text-slate-400">{kpi.label}</p>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{kpi.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Chart Area */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
          {/* Line Chart */}
          <motion.div
            className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2 sm:p-3 md:p-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h5 className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2 sm:mb-3">Performance Trend</h5>
            <div className="relative h-12 sm:h-16">
              <svg viewBox="0 0 120 60" className="w-full h-full">
                <motion.path
                  d="M10,50 Q30,35 50,25 Q70,15 90,10 L110,8"
                  stroke="url(#performanceGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                />
                <motion.path
                  d="M10,50 Q30,35 50,25 Q70,15 90,10 L110,8 L110,60 L10,60 Z"
                  fill="url(#performanceAreaGradient)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.4 }}
                />
                <defs>
                  <linearGradient id="performanceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="performanceAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2 sm:p-3 md:p-4"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h5 className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2 sm:mb-3">Monthly Progress</h5>
            <div className="flex items-end gap-1 h-12 sm:h-16">
              {[45, 60, 35, 80, 55, 90, 70, 85].map((height, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-sm flex-1"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: 1.3 + index * 0.05 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Flow */}
        <motion.div
          className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2 sm:p-3 md:p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <h5 className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-2 sm:mb-3">Consulting Process</h5>
          <div className="flex items-center justify-between">
            {["Analyze", "Strategize", "Implement", "Optimize"].map((step, index) => (
              <div key={step} className="flex items-center">
                <motion.div
                  className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.7 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
                <span className="ml-2 text-xs text-slate-600 dark:text-slate-400">{step}</span>
                {index < 3 && (
                  <motion.div
                    className="w-6 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 mx-2"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 1.9 + index * 0.1 }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Data Points */}
      <motion.div
        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [0, -6, 0],
          rotate: [0, 8, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-white text-xs">📈</div>
      </motion.div>

      <motion.div
        className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          y: [0, 6, 0],
          rotate: [0, -8, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <div className="text-white text-xs">💡</div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 -right-3 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          x: [0, 6, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="text-white text-xs">⚡</div>
      </motion.div>
    </motion.div>
  )
}

export function EthiopianSkylineIllustration({ className }: { className?: string }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      {/* Buildings silhouette */}
      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ transformOrigin: "bottom" }}
      >
        <rect x="50" y="120" width="30" height="80" fill="url(#buildingGradient)" />
        <rect x="90" y="100" width="25" height="100" fill="url(#buildingGradient)" />
        <rect x="125" y="110" width="35" height="90" fill="url(#buildingGradient)" />
        <rect x="170" y="90" width="40" height="110" fill="url(#buildingGradient)" />
        <rect x="220" y="105" width="30" height="95" fill="url(#buildingGradient)" />
        <rect x="260" y="115" width="25" height="85" fill="url(#buildingGradient)" />
        <rect x="295" y="95" width="35" height="105" fill="url(#buildingGradient)" />
      </motion.g>

      {/* Glowing windows */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {/* Animated window lights */}
        <motion.rect
          x="55"
          y="140"
          width="4"
          height="6"
          fill="#F59E0B"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.rect
          x="65"
          y="160"
          width="4"
          height="6"
          fill="#3B82F6"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.rect
          x="95"
          y="120"
          width="4"
          height="6"
          fill="#10B981"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.g>

      <defs>
        <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
