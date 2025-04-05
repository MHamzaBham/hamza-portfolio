

export default function Logo() {
  return (
    <a href="#" className="flex items-center mb-8">
      <img src={`${process.env.NODE_ENV === 'production' ? '/hamza-portfolio' : ''}/assets/hamza_prof.jpg`} className="h-10 border-2 border-gray-500 rounded-full" alt="Logo" />
    </a>
  );
}
