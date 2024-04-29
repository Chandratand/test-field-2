interface SummaryCardProps {
  title: string;
  count: number;
  unit: string;
}

const SummaryCard = ({ title, count, unit }: SummaryCardProps) => {
  return (
    <div className="relative px-7 py-[30px] rounded-2xl bg-gradient-to-br from-[#ADC9FF] to-[#C2D6FF] w-full md:max-w-[235px] 2xl:max-w-[260px]">
      <h2 className="text-sm text-[#597393] mb-[6px]">{title}</h2>
      <p className="text-2xl text-[#002060]">
        {count} <span className="text-base">{unit}</span>
      </p>
      <div className="absolute w-[55.13px] h-[62.01px] bg-white/20 rounded-full -bottom-4 -right-3" />
      <div className="absolute w-[55.13px] h-[62.01px] bg-white/20 rounded-full bottom-3 right-[-25px]" />
    </div>
  );
};

export default SummaryCard;
