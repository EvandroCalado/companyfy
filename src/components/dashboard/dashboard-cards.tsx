import {
  Building2,
  ChartNetwork,
  ChartNoAxesCombined,
  Info,
  MoveDownRight,
  MoveUpRight,
  TrendingUp,
} from 'lucide-react';

import { CustomIcon } from '../shared/custom-icon';
import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

const data = [
  {
    id: 1,
    average: 19,
    icon: Building2,
    title: 'Companhias criadas',
    tooltipText: 'Companhias criadas',
    total: 10,
  },
  {
    id: 2,
    average: 30,
    icon: ChartNoAxesCombined,
    title: 'Total de receita',
    tooltipText: 'Total de receita',
    total: 50,
  },
  {
    id: 3,
    average: 80,
    icon: ChartNetwork,
    title: 'Balanço geral',
    tooltipText: 'Balanço geral',
    total: 100,
  },
];

export const DashboardCards = () => {
  return (
    <section className='grid h-fit w-full gap-4 p-5 md:grid-cols-2 lg:grid-cols-3'>
      {data.map((item) => (
        <Card key={item.id}>
          <CardHeader className='flex items-center justify-between'>
            <CardTitle>
              <div className='flex items-center gap-2'>
                <CustomIcon icon={item.icon} />
                <h3>{item.title}</h3>
              </div>
            </CardTitle>
            <CardDescription>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className='size-4' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.tooltipText}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardDescription>
          </CardHeader>

          <CardContent className='flex items-center gap-2'>
            <p className='text-2xl'>{item.total}</p>
            <Badge className='bg-foreground'>
              {item.average}%
              {item.average < 20 && <MoveDownRight strokeWidth={2} />}
              {item.average > 20 && item.average < 70 && (
                <MoveUpRight strokeWidth={2} />
              )}
              {item.average > 70 && item.average < 100 && (
                <TrendingUp strokeWidth={2} />
              )}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
