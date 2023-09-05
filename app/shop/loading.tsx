import SkeletonMenuItem from "components/SkeletonMenuItem";

export default function Loading() {
  // TODO: display correct amount of skeletons
  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
      <SkeletonMenuItem />
      <SkeletonMenuItem />
    </div>
  );
}
