import { Button } from '@/components/ui/button';
import FormGenerator from './form-genarator/FormGenerator';
import Header from "@/components/ui/header"


export default function Home() {
  return (
    <div>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormGenerator />
    </main>
    </div>
  );
}
