export type Locale = 'pt-BR' | 'en-US' | 'es';
export interface UserProfile { id:string; name:string; kalixScore:number; previousScoreDelta:number; level:string; streakDays:number; xp:number }
export interface Workout { id:string; slug:string; title:string; durationMinutes:number; exerciseCount:number }
export interface Achievement { id:string; slug:string; title:string; current:number; target:number }
export interface Exercise { id:string; slug:string; name:string; reps:number; sets:number }
export interface ScoreCategory { id:string; label:string; value:number }
export interface Assessment { id:string; userId:string; createdAt:string }
export interface Skill { id:string; slug:string; titleKey:string }
export interface SkillProgression { id:string; skillId:string; prerequisiteId?:string }
export interface WorkoutProgram { id:string; slug:string; workoutIds:string[] }
export interface UserWorkout { id:string; userId:string; workoutId:string; completedAt?:string }
export interface UserExerciseProgress { id:string; userId:string; exerciseId:string; bestReps:number }
export interface UserAchievement { id:string; userId:string; achievementId:string; unlockedAt?:string }
export interface BodyMeasurement { id:string; userId:string; recordedAt:string; weightKg?:number }
