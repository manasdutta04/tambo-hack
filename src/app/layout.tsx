import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'ReliefOps | Tambo Hackathon',
  description: 'AI-driven incident planning with adaptive UI components.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
