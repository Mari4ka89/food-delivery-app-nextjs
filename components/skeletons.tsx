const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const MenuItemSkeleton = () => {
  return (
    <div
      className={`${shimmer} bordered p-4 relative overflow-hidden rounded-xl bg-white/5`}
    >
      <div className="w-full h-80 rounded-lg bg-slate-100" />

      <div className="flex justify-between pt-4">
        <div className="w-3/5">
          <div className="h-6 w-4/5 rounded-lg bg-slate-100" />
          <div className="h-6 w-12 rounded-lg bg-slate-100" />
        </div>
        <div className="h-12 rounded-lg w-2/5 bg-slate-100" />
      </div>
    </div>
  );
};

export const MenuItemsSkeleton = () => {
  return (
    <>
      <MenuItemSkeleton />
      <MenuItemSkeleton />
      <MenuItemSkeleton />
      <MenuItemSkeleton />
    </>
  );
};

export default MenuItemSkeleton;
