const SkeletonMenuItem = () => {
  return (
    <div
      className="bordered p-4 relative overflow-hidden rounded-xl bg-white/5 before:absolute before:-translate-x-full before:bg-gradient-to-r
      before:from-transparent before:via-white before:to-transparent before:inset-0 before:animate-[shimmer_3s_infinite]"
    >
      <div className="w-full h-80 rounded-lg bg-slate-100"></div>

      <div className="flex justify-between pt-4">
        <div className="w-3/5">
          <div className="h-6 w-4/5 rounded-lg bg-slate-100"></div>
          <div className="h-6 w-12 rounded-lg bg-slate-100"></div>
        </div>
        <div className="h-12 rounded-lg w-2/5 bg-slate-100"></div>
      </div>
    </div>
  );
};

export default SkeletonMenuItem;
