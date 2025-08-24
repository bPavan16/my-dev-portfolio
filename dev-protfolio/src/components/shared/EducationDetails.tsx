import { Timeline } from "@/components/ui/timeline"
import {
  GraduationCap,
  Award,
  Trophy,
  BookOpen,
  Code,
  Calculator,
  Star,
  Zap,
  Target,
  MapPin,
  Calendar
} from "lucide-react"

export default function EducationalTimeline() {
  const data = [
    {
  key: 1,
      title: "2022 - 2026",
      content: (
        <div className="space-y-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-md">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                    KLE Technological University
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                    Bachelor of Engineering in Computer Science
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-md">
                      <Calendar className="h-3 w-3" />
                      Current
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-md">
                      <MapPin className="h-3 w-3" />6 Semesters
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="flex-shrink-0 p-1.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-md">
                    <Award className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    CGPA: <span className="font-semibold text-emerald-600 dark:text-emerald-400">9.3/10</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="flex-shrink-0 p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-md">
                    <Code className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-purple-600 dark:text-purple-400">500+</span> coding problems
                    solved
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-lg text-white relative overflow-hidden">
                  <div className="absolute top-1 right-1 opacity-20">
                    <Star className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold">9.3</div>
                  <div className="text-xs opacity-90">CGPA</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-lg text-white relative overflow-hidden">
                  <div className="absolute top-1 right-1 opacity-20">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs opacity-90">Problems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      title: "2020 - 2022",
      content: (

        <div className="space-y-1">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r  rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg shadow-md">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                    Saraswati PU College
                  </h3>
                  <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-2">
                    Pre University Education (Class 11 & 12)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium rounded-md">
                      <Calendar className="h-3 w-3" />
                      Pre-University
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium rounded-md">
                      <MapPin className="h-3 w-3" />
                      Science Stream
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="flex-shrink-0 p-1.5 bg-yellow-100 dark:bg-yellow-900/30 rounded-md">
                    <Trophy className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    KCET Rank: <span className="font-semibold text-yellow-600 dark:text-yellow-400">1579</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="flex-shrink-0 p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md">
                    <Calculator className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    PCM: <span className="font-semibold text-blue-600 dark:text-blue-400">99.6%</span> | Overall:{" "}
                    <span className="font-semibold text-green-600 dark:text-green-400">96%</span>
                  </span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="bg-gradient-to-br from-yellow-500 to-amber-600 p-3 sm:p-4 rounded-lg text-white relative overflow-hidden">
                  <div className="absolute top-1 right-1 opacity-20">
                    <Target className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold">1579</div>
                  <div className="text-xs opacity-90">KCET</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 sm:p-4 rounded-lg text-white relative overflow-hidden">
                  <div className="absolute top-1 right-1 opacity-20">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold">99.6%</div>
                  <div className="text-xs opacity-90">PCM</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 sm:p-4 rounded-lg text-white relative overflow-hidden">
                  <div className="absolute top-1 right-1 opacity-20">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="text-lg sm:text-xl font-bold">96%</div>
                  <div className="text-xs opacity-90">Overall</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 3,
      title: "2011 - 2020",
      content: (
        <div className="space-y-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg shadow-md">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                    Marthoma Central School Honavar
                  </h3>
                  <p className="text-sm text-rose-600 dark:text-rose-400 font-medium mb-2">Schooling (Class 1 to 10)</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs font-medium rounded-md">
                      <Calendar className="h-3 w-3" />
                      Foundation
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs font-medium rounded-md">
                      <MapPin className="h-3 w-3" />
                      CBSE Board
                    </span>
                  </div>
                </div>
              </div>

              {/* Achievement */}
              <div className="mb-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <div className="flex-shrink-0 p-1.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-md">
                    <Award className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Class 10th CBSE: <span className="font-semibold text-emerald-600 dark:text-emerald-400">94.6%</span>
                  </span>
                </div>
              </div>

              {/* Main Stat */}
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-lg text-white relative overflow-hidden">
                <div className="absolute top-2 right-2 opacity-20">
                  <div className="flex gap-1">
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-1">94.6%</div>
                  <div className="text-sm opacity-90 mb-2">Class 10th CBSE</div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full transition-all duration-1000"
                      style={{ width: "94.6%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="relative w-full overflow-clip bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      <Timeline data={data} />
    </div>
  )
}
