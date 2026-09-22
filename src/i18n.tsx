import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Locale } from './types';
import { DEFAULT_LOCALE } from './config';

const dictionaries = {
  'pt-BR': {
    'common.start':'VAMOS COMEÇAR','common.back':'Voltar','navigation.today':'Hoje','navigation.train':'Treinar','navigation.skills':'Skills','navigation.progress':'Progresso','navigation.profile':'Perfil',
    'splash.eyebrow':'CALISTHENICS','splash.line1':'Seu corpo.','splash.line2':'Seu nível.','splash.line3':'Sua próxima conquista.',
    'dashboard.greeting':'Boa noite, {name}!','dashboard.subtitle':'Foque hoje, colha amanhã.','dashboard.todayWorkout':'TREINO DE HOJE','dashboard.nextAchievement':'PRÓXIMA CONQUISTA',
    'score.title':'KALIX SCORE','score.delta':'+{value} nos últimos 30 dias','score.level':'NÍVEL','streak.title':'SEQUÊNCIA','streak.days':'{value} dias',
    'workout.start':'COMEÇAR TREINO','workout.finishSet':'CONCLUIR SÉRIE','workout.exercise':'Exercício {current} de {total}','workout.set':'Série {current}/{total}','workout.rest':'Descanso',
    'placeholder.train.title':'Treinos','placeholder.train.text':'Sua biblioteca de treinos será construída na próxima etapa.','placeholder.skills.title':'Skills','placeholder.skills.text':'A árvore de progressões está sendo preparada.','placeholder.progress.title':'Progresso','placeholder.progress.text':'Suas métricas de evolução aparecerão aqui.','placeholder.profile.title':'Perfil','placeholder.profile.text':'Configurações e preferências do atleta.',
  },
  'en-US': {'common.start':'GET STARTED','common.back':'Back','navigation.today':'Today','navigation.train':'Train','navigation.skills':'Skills','navigation.progress':'Progress','navigation.profile':'Profile','splash.eyebrow':'CALISTHENICS','splash.line1':'Your body.','splash.line2':'Your level.','splash.line3':'Your next achievement.'},
  es: {'common.start':'EMPEZAR','common.back':'Volver','navigation.today':'Hoy','navigation.train':'Entrenar','navigation.skills':'Skills','navigation.progress':'Progreso','navigation.profile':'Perfil','splash.eyebrow':'CALISTHENICS','splash.line1':'Tu cuerpo.','splash.line2':'Tu nivel.','splash.line3':'Tu próximo logro.'},
} as const;
type TranslationKey = keyof typeof dictionaries['pt-BR'];
const I18nContext = createContext({locale:DEFAULT_LOCALE as Locale,setLocale:(_locale:Locale)=>{},t:(key:TranslationKey,_vars?:Record<string,string|number>)=>key as string});
export function I18nProvider({children}:{children:ReactNode}) {
  const [locale,setLocale] = useState<Locale>(DEFAULT_LOCALE);
  const value = useMemo(()=>({locale,setLocale,t:(key:TranslationKey,vars:Record<string,string|number>={})=>{
    const base = dictionaries[DEFAULT_LOCALE][key] ?? key;
    const translated = (dictionaries[locale] as Partial<Record<TranslationKey,string>>)[key] ?? base;
    return Object.entries(vars).reduce((text,[name,value])=>text.replace(`{${name}}`,String(value)),translated);
  }}),[locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
export const useI18n = () => useContext(I18nContext);
