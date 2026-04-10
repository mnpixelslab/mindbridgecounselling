import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3">Manreet Kaur</h3>
          <p className="text-slate-400 mb-6 flex items-center justify-center gap-2">
            <Heart size={18} className="text-blue-400" />
            Helping you move forward with clarity and confidence
          </p>

          <div className="border-t border-slate-800 pt-6 mt-6">
            <p className="text-slate-400 text-sm">
              © {currentYear} Manreet Kaur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
