import type { Achievement, Exercise, ScoreCategory, UserProfile, Workout } from '../types';
export const demoUser: UserProfile = { id:'demo_user', name:'Atleta', kalixScore:184, previousScoreDelta:24, level:'foundation_2', streakDays:7, xp:2450 };
export const todayWorkout: Workout = { id:'workout_demo', slug:'push_foundation', title:'Push Foundation', durationMinutes:28, exerciseCount:7 };
export const nextAchievement: Achievement = { id:'achievement_push_10', slug:'ten_push_ups', title:'10 flexões', current:6, target:10 };
export const activeExercise: Exercise = { id:'incline_push_up', slug:'incline_push_up', name:'Flexão inclinada', reps:12, sets:3 };
export const scoreCategories: ScoreCategory[] = [
  {id:'push',label:'PUSH',value:176},{id:'pull',label:'PULL',value:188},{id:'core',label:'CORE',value:182},{id:'legs',label:'LEGS',value:168},{id:'mobility',label:'MOBILITY',value:172},
];
