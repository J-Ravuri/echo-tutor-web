import {Toaster} from '@/components/ui/toaster';
import Dashboard from './dashboard/page';

export default function Home() {
  return (
    <>
      <Dashboard />
      <Toaster />
    </>
  );
}

