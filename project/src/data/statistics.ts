import { Statistic } from '../pages/types';
import { Activity, Trophy, Users } from 'lucide-react';

export const statistics: Statistic[] = [
  {
    id: 'stat-1',
    title: 'Joueurs Actifs',
    value: '10,000+',
    icon: 'Users',
  },
  {
    id: 'stat-2',
    title: 'Défis Complétés',
    value: '250,000+',
    icon: 'Trophy',
  },
  {
    id: 'stat-3',
    title: 'Kilomètres Parcourus',
    value: '1,500,000+',
    icon: 'Activity',
  },
];